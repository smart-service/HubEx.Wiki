const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { backfillFile, categoryForFile, titleFromBody, loadLegacyTitles } = require('./backfill-front-matter');

function withTempArticle(relativeDir, fileName, content, fn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'backfill-test-'));
  const dir = path.join(root, relativeDir);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, content);
  try {
    fn(filePath);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

// Пишет карту исторических заголовков (форма legacy-titles.json) во
// временный файл и передаёт его путь в fn — так тест может подсунуть
// backfillFile собственную, контролируемую карту вместо реальной
// .superpowers/sdd/legacy-titles.json.
function withTempLegacyMap(mapObject, fn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'backfill-legacy-'));
  const mapPath = path.join(root, 'legacy-titles.json');
  fs.writeFileSync(mapPath, JSON.stringify(mapObject));
  try {
    fn(mapPath);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

assert.strictEqual(categoryForFile('/repo/docs/FAQ/RU/admin/Foo.md'), 'admin');
assert.strictEqual(categoryForFile('/repo/docs/FAQ/RU/user/Foo.md'), 'user');
assert.strictEqual(categoryForFile('/repo/docs/FAQ/RU/ReleaseNotes/Foo.md'), 'releasenotes');
assert.strictEqual(categoryForFile('/repo/docs/FAQ/RU/Other/Foo.md'), null);

assert.strictEqual(titleFromBody('# Заголовок статьи\n\nТекст.'), 'Заголовок статьи');
assert.strictEqual(titleFromBody('Текст без заголовка.'), null);

// Реальный корпус (docs/FAQ/RU) в подавляющем большинстве не использует Markdown
// `#` для видимого заголовка статьи: тело обёрнуто в редундантный
// <html>...<body> (известная отдельная особенность контента, не наша забота
// чинить здесь), а видимый заголовок — это HTML <h2> (иногда <h1>). Без этого
// фолбэка бэкфилл заголовка молча не сработает для большинства файлов, у
// которых он отсутствует. См. также docs/FAQ/RU/admin/Roles.md (пример из
// задания) для аналогичной реальной структуры.
assert.strictEqual(
  titleFromBody('<html><body><h2>Полномочия роли</h2></body></html>'),
  'Полномочия роли',
  'фолбэк на HTML <h2> должен сработать, если Markdown-заголовка нет'
);
assert.strictEqual(
  titleFromBody('<h1>Заголовок H1</h1>\n<p>Текст</p>'),
  'Заголовок H1',
  'фолбэк на HTML <h1> должен сработать, если Markdown-заголовка нет'
);
// Вложенный inline-тег внутри заголовка должен быть вырезан, а не попасть в
// заголовок как сырой HTML.
assert.strictEqual(
  titleFromBody('<h2>Полномочия <strong>роли</strong></h2>'),
  'Полномочия роли',
  'вложенные HTML-теги внутри заголовка должны вырезаться, пробелы — схлопываться'
);
// Markdown `#` в приоритете, если в теле присутствуют оба варианта.
assert.strictEqual(
  titleFromBody('# Markdown в приоритете\n<h2>HTML заголовок</h2>'),
  'Markdown в приоритете',
  'Markdown-заголовок должен иметь приоритет над HTML-заголовком'
);
// Ни Markdown `#`, ни HTML <h1>/<h2> — заголовок не определить.
assert.strictEqual(titleFromBody('<h5>Слишком мелкий заголовок</h5>\n<p>Текст</p>'), null);

withTempArticle('docs/FAQ/RU/admin', 'NoFrontMatter.md', '# О системе\n\nОписание системы.\n', (filePath) => {
  const result = backfillFile(filePath);
  assert.deepStrictEqual(result.changes.sort(), ['category=admin', 'title="О системе"'].sort());
  assert.deepStrictEqual(result.stillMissing, ['description']);

  const after = fs.readFileSync(filePath, 'utf8');
  assert.ok(after.startsWith('---'), 'файл должен получить front matter');
  assert.ok(after.includes('category: admin'));
});

withTempArticle(
  'docs/FAQ/RU/user',
  'AlreadyComplete.md',
  '---\ntitle: Готово\ndescription: Уже есть описание\ncategory: user\n---\n# Готово\n',
  (filePath) => {
    const before = fs.readFileSync(filePath, 'utf8');
    const result = backfillFile(filePath);
    assert.deepStrictEqual(result.changes, []);
    assert.deepStrictEqual(result.stillMissing, []);
    const after = fs.readFileSync(filePath, 'utf8');
    assert.strictEqual(after, before, 'уже полный front matter не должен переписываться');
  }
);

// Синтаксически некорректный YAML (например, неэкранированное ":" внутри
// значения) — реальный баг, найденный аудитом Task 9 в 14 файлах
// docs/FAQ/RU/**/*.md. backfillFile обязан не падать, не пытаться угадать
// какое значение чинить (это редакторская задача, не для автоматизации), и
// не писать в файл — только сообщить о пропуске способом, однозначно
// отличимым и от "изменений нет" (уже всё заполнено), и от "внесены
// изменения".
withTempArticle(
  'docs/FAQ/RU/admin',
  'Malformed.md',
  '---\ntitle: Foo: bar\ncategory: admin\n---\n# Заголовок\n',
  (filePath) => {
    const before = fs.readFileSync(filePath, 'utf8');
    const result = backfillFile(filePath);
    assert.deepStrictEqual(result.changes, [], 'повреждённый файл не должен получать изменений');
    assert.deepStrictEqual(result.stillMissing, [], 'для повреждённого файла нельзя судить о недостающих полях');
    assert.strictEqual(result.malformed, true, 'результат должен явно сигнализировать пропуск как повреждённого');

    const after = fs.readFileSync(filePath, 'utf8');
    assert.strictEqual(after, before, 'повреждённый файл не должен переписываться');
  }
);

// Task 10 refinement: карта исторических заголовков (legacy-titles.json,
// разово выгруженная контроллером из старого поискового индекса
// assets/tipuesearch/tipuesearch_content.js, удалённого в более ранней
// задаче) должна иметь приоритет над titleFromBody, даже если у тела статьи
// есть собственный Markdown-заголовок, который titleFromBody успешно бы
// распознал. Это подтверждает порядок приоритета источников title, а не
// просто то, что чем-то заполнилось.
withTempArticle(
  'docs/FAQ/RU/admin',
  'LegacyMapped.md',
  '# Заголовок из тела\n\nТекст.\n',
  (filePath) => {
    withTempLegacyMap({ [filePath]: 'Историческое название статьи' }, (legacyMapPath) => {
      const result = backfillFile(filePath, legacyMapPath);
      assert.deepStrictEqual(
        result.changes.sort(),
        ['category=admin', 'title="Историческое название статьи"'].sort(),
        'title должен браться из карты исторических заголовков, а не из тела статьи'
      );

      const after = fs.readFileSync(filePath, 'utf8');
      assert.ok(
        after.includes('title: Историческое название статьи'),
        'записанный front matter должен содержать исторический заголовок из карты'
      );
      assert.ok(
        !after.includes('title: Заголовок из тела'),
        'заголовок, который извлёк бы titleFromBody, не должен попасть в поле title front matter при наличии записи в карте'
      );
    });
  }
);

// Файл, путь которого отсутствует в карте исторических заголовков (даже
// когда карта непуста и содержит записи для других файлов), должен
// по-прежнему корректно откатываться на titleFromBody — регрессионное
// покрытие поведения, существовавшего до этого задания.
withTempArticle(
  'docs/FAQ/RU/admin',
  'NotInLegacyMap.md',
  '# Заголовок из тела снова\n\nТекст.\n',
  (filePath) => {
    withTempLegacyMap(
      { 'docs/FAQ/RU/admin/SomeOtherFile.md': 'Чужой исторический заголовок' },
      (legacyMapPath) => {
        const result = backfillFile(filePath, legacyMapPath);
        assert.deepStrictEqual(
          result.changes.sort(),
          ['category=admin', 'title="Заголовок из тела снова"'].sort(),
          'при отсутствии файла в карте title должен по-прежнему браться из titleFromBody'
        );
      }
    );
  }
);

// loadLegacyTitles на несуществующем пути должен молча вернуть пустую карту,
// а не упасть — сценарий "миграция завершена, scratch-файл
// .superpowers/sdd/legacy-titles.json подчищен" (или его вообще нет в чужом
// чекауте, так как файл не отслеживается git).
{
  const missingMapRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'backfill-no-legacy-'));
  const missingMapPath = path.join(missingMapRoot, 'does-not-exist.json');
  try {
    assert.deepStrictEqual(
      loadLegacyTitles(missingMapPath),
      {},
      'loadLegacyTitles должен вернуть пустую карту, если файл карты не существует, а не упасть'
    );
  } finally {
    fs.rmSync(missingMapRoot, { recursive: true, force: true });
  }
}

// То же самое, но сквозь весь backfillFile: отсутствующий файл карты не
// должен приводить к падению, а title по-прежнему должен выводиться через
// titleFromBody, как и до этого задания.
withTempArticle(
  'docs/FAQ/RU/admin',
  'NoLegacyMapFile.md',
  '# Заголовок без карты\n\nТекст.\n',
  (filePath) => {
    const missingMapRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'backfill-no-legacy-'));
    const missingMapPath = path.join(missingMapRoot, 'does-not-exist.json');
    try {
      const result = backfillFile(filePath, missingMapPath);
      assert.deepStrictEqual(
        result.changes.sort(),
        ['category=admin', 'title="Заголовок без карты"'].sort(),
        'при отсутствующем файле карты backfillFile не должен падать — title берётся из titleFromBody'
      );
    } finally {
      fs.rmSync(missingMapRoot, { recursive: true, force: true });
    }
  }
);

// Task 10 refinement 2: реальный корпус (найдено контроллером на 252 файлах)
// часто уже содержит front matter с ПУСТЫМИ полями вида "description: " (без
// значения после двоеточия) — gray-matter/js-yaml разбирают это в JS `null`.
// Когда backfillFile переписывает файл (например, чтобы добавить title),
// matter.stringify пересериализует ВЕСЬ объект data целиком, и js-yaml по
// умолчанию рендерит `null` как буквальный текст "null" — так нетронутое
// поле "description: " превращается в "description: null", хотя backfillFile
// это поле не трогал вовсе. Тест воспроизводит ровно этот сценарий (см.
// docs/FAQ/RU/ReleaseNotes/Act30112020.md) и проверяет РЕЗУЛЬТАТ НА ДИСКЕ
// (а не только возвращённый объект data): заполниться должны только
// category/title, а description/keywords обязаны выглядеть как раньше
// (round-trip), а не стать словом "null".
withTempArticle(
  'docs/FAQ/RU/admin',
  'BlankFieldsRoundTrip.md',
  '---\ntitle: \ndescription: \nkeywords: \n---\n# Заголовок из тела для бэкфилла\n\nТекст.\n',
  (filePath) => {
    const before = fs.readFileSync(filePath, 'utf8');
    const beforeDescriptionLine = before.split('\n').find((line) => line.startsWith('description:'));
    const beforeKeywordsLine = before.split('\n').find((line) => line.startsWith('keywords:'));

    const result = backfillFile(filePath);
    assert.deepStrictEqual(
      result.changes.sort(),
      ['category=admin', 'title="Заголовок из тела для бэкфилла"'].sort(),
      'заполниться должны только category и title — для description/keywords нет источника значения'
    );

    const after = fs.readFileSync(filePath, 'utf8');
    const afterDescriptionLine = after.split('\n').find((line) => line.startsWith('description:'));
    const afterKeywordsLine = after.split('\n').find((line) => line.startsWith('keywords:'));

    assert.ok(
      !/\bnull\b/i.test(afterDescriptionLine),
      `строка description на диске не должна содержать литеральный текст "null": ${JSON.stringify(afterDescriptionLine)}`
    );
    assert.ok(
      !/\bnull\b/i.test(afterKeywordsLine),
      `строка keywords на диске не должна содержать литеральный текст "null": ${JSON.stringify(afterKeywordsLine)}`
    );

    assert.strictEqual(
      afterDescriptionLine,
      beforeDescriptionLine,
      'нетронутое поле description должно выглядеть на диске так же, как до бэкфилла (round-trip), а не стать словом "null"'
    );
    assert.strictEqual(
      afterKeywordsLine,
      beforeKeywordsLine,
      'нетронутое поле keywords должно выглядеть на диске так же, как до бэкфилла (round-trip), а не стать словом "null"'
    );

    assert.ok(
      after.includes('title: Заголовок из тела для бэкфилла'),
      'title должен получить производное из тела значение (это поведение не должно измениться)'
    );
  }
);

console.log('Все тесты backfill-front-matter прошли успешно.');
