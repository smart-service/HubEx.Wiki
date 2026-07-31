const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { backfillFile, categoryForFile, titleFromBody } = require('./backfill-front-matter');

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

console.log('Все тесты backfill-front-matter прошли успешно.');
