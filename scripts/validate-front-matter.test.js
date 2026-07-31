const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { validateFile } = require('./validate-front-matter');
const { REQUIRED_FIELDS } = require('./front-matter-fields');

function withTempFile(content, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fm-test-'));
  const filePath = path.join(dir, 'article.md');
  fs.writeFileSync(filePath, content);
  try {
    fn(filePath);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

withTempFile(
  '---\ntitle: Заголовок\ndescription: Описание\ncategory: user\n---\nТело статьи\n',
  (filePath) => {
    const missing = validateFile(filePath);
    assert.deepStrictEqual(missing, [], 'полный front matter не должен давать ошибок');
  }
);

withTempFile('---\ntitle: Заголовок\n---\nТело статьи\n', (filePath) => {
  const missing = validateFile(filePath);
  assert.deepStrictEqual(missing, ['description', 'category']);
});

withTempFile('Просто текст без front matter вообще.\n', (filePath) => {
  const missing = validateFile(filePath);
  assert.deepStrictEqual(missing, ['title', 'description', 'category']);
});

withTempFile(
  '---\ntitle: Foo: bar\ndescription: x\ncategory: user\n---\nТело статьи\n',
  (filePath) => {
    const result = validateFile(filePath);
    assert.strictEqual(result.length, 1, 'некорректный YAML должен давать ровно один результирующий элемент');
    assert.ok(
      /malformed|некоррект/i.test(result[0]),
      `сообщение должно явно указывать на повреждённый front matter, получено: ${JSON.stringify(result[0])}`
    );
    assert.ok(
      !REQUIRED_FIELDS.includes(result[0]),
      'сообщение об ошибке не должно совпадать с именем обязательного поля (иначе выглядит как "поле отсутствует")'
    );
  }
);

console.log('Все тесты validate-front-matter прошли успешно.');
