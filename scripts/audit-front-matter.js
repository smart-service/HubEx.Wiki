#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { missingFields, safeParse, REQUIRED_FIELDS } = require('./front-matter-fields');

// Аудит одного файла: возвращает
//  - []                              — front matter полный;
//  - ['title', ...]                  — front matter разобран, но не хватает полей
//                                       (все элементы — имена из REQUIRED_FIELDS);
//  - ['malformed front matter: ...'] — YAML синтаксически некорректен, разобрать
//                                       не удалось вовсе (единственный элемент, который
//                                       заведомо не совпадает ни с одним именем поля).
// Три формы результата различимы между собой, поэтому вызывающий код (CLI ниже) может
// однозначно посчитать "неполные" отдельно от "повреждённые", не путая их.
// Приём — тот же, что уже применён в validate-front-matter.js::validateFile.
function auditFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, error } = safeParse(raw);
  if (error) {
    return [`malformed front matter: ${error}`];
  }
  return missingFields(data);
}

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, results);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

// Малформед-результат — это ровно один элемент, который не является именем обязательного
// поля (обычные "не хватает полей" результаты всегда состоят только из имён REQUIRED_FIELDS).
function isMalformedResult(missing) {
  return missing.length === 1 && !REQUIRED_FIELDS.includes(missing[0]);
}

module.exports = { auditFile, walk };

if (require.main === module) {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.log('Использование: node scripts/audit-front-matter.js <папка>');
    process.exit(1);
  }
  const files = walk(targetDir);
  let incompleteCount = 0;
  let malformedCount = 0;
  for (const filePath of files) {
    const missing = auditFile(filePath);
    if (missing.length === 0) {
      continue;
    }
    if (isMalformedResult(missing)) {
      malformedCount += 1;
      console.log(`${filePath}: ${missing[0]}`);
    } else {
      incompleteCount += 1;
      console.log(`${filePath}: не хватает — ${missing.join(', ')}`);
    }
  }
  const completeCount = files.length - incompleteCount - malformedCount;
  console.log(
    `\nВсего файлов: ${files.length}. Полных: ${completeCount}. Неполных: ${incompleteCount}. Повреждённых: ${malformedCount}.`
  );
}
