const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { auditFile, walk } = require('./audit-front-matter');
const { REQUIRED_FIELDS } = require('./front-matter-fields');

function withTempTree(files, fn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'audit-test-'));
  for (const [relativePath, content] of Object.entries(files)) {
    const fullPath = path.join(root, relativePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content);
  }
  try {
    fn(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

withTempTree(
  {
    'admin/Complete.md': '---\ntitle: T\ndescription: D\ncategory: admin\n---\nТело\n',
    'admin/Incomplete.md': '---\ntitle: T\n---\nТело\n',
    'user/NoFrontMatter.md': 'Просто текст\n',
    'user/notes.txt': 'не markdown, должен игнорироваться\n',
  },
  (root) => {
    const files = walk(root);
    assert.strictEqual(files.length, 3, 'должны найтись только 3 .md файла, .txt пропущен');

    assert.deepStrictEqual(auditFile(path.join(root, 'admin/Complete.md')), []);
    assert.deepStrictEqual(auditFile(path.join(root, 'admin/Incomplete.md')), ['description', 'category']);
    assert.deepStrictEqual(auditFile(path.join(root, 'user/NoFrontMatter.md')), ['title', 'description', 'category']);
  }
);

// 4-й случай (добавлен сверх брифа): синтаксически некорректный YAML во front matter —
// например, неэкранированное ":" внутри значения. Это реальный баг, найденный в 14 файлах
// docs/FAQ/RU/**/*.md продакшн-контента. auditFile обязан не падать и вернуть результат,
// однозначно отличимый и от "полного" ([]), и от "не хватает полей" ([...REQUIRED_FIELDS]),
// иначе отчёт вводит в заблуждение (файл не "не хватает title" — у него вообще нельзя
// разобрать front matter). Приём зеркалит уже принятую конвенцию в validate-front-matter.js.
withTempTree(
  {
    'Malformed.md': '---\ntitle: Foo: bar\ndescription: x\ncategory: user\n---\nТело\n',
  },
  (root) => {
    const malformedResult = auditFile(path.join(root, 'Malformed.md'));
    assert.strictEqual(malformedResult.length, 1, 'повреждённый YAML должен давать ровно один результирующий элемент');
    assert.ok(
      /malformed/i.test(malformedResult[0]),
      `сообщение должно явно указывать на повреждённый front matter, получено: ${JSON.stringify(malformedResult[0])}`
    );
    assert.ok(
      !REQUIRED_FIELDS.includes(malformedResult[0]),
      'сообщение об ошибке не должно совпадать с именем обязательного поля (иначе выглядит как "поле отсутствует")'
    );
  }
);

console.log('Все тесты audit-front-matter прошли успешно.');
