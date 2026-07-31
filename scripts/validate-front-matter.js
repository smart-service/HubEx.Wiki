#!/usr/bin/env node
const fs = require('fs');
const { missingFields, safeParse } = require('./front-matter-fields');

function validateFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, error } = safeParse(raw);
  if (error) {
    // Некорректный YAML во front matter (например, неэкранированный ":" в значении).
    // Возвращаем строку, которая не может совпасть с реальным именем поля,
    // чтобы main() (проверяющий missing.length > 0) корректно провалил сборку,
    // а сообщение сразу объясняло причину — без падения со стектрейсом.
    return [`malformed front matter: ${error}`];
  }
  return missingFields(data);
}

function main(filePaths) {
  let hasErrors = false;
  for (const filePath of filePaths) {
    if (!fs.existsSync(filePath)) continue; // удалённый файл — нечего проверять
    const missing = validateFile(filePath);
    if (missing.length > 0) {
      hasErrors = true;
      console.error(`${filePath}: отсутствуют обязательные поля front matter: ${missing.join(', ')}`);
    }
  }
  if (hasErrors) {
    process.exit(1);
  }
  console.log(`OK: проверено файлов: ${filePaths.length}`);
}

module.exports = { validateFile };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Нет изменённых markdown-файлов для проверки.');
    process.exit(0);
  }
  main(args);
}
