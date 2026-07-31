#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { safeParse } = require('./front-matter-fields');

const FOLDER_CATEGORY = {
  admin: 'admin',
  user: 'user',
  ReleaseNotes: 'releasenotes',
};

function categoryForFile(filePath) {
  const folder = path.basename(path.dirname(filePath));
  return FOLDER_CATEGORY[folder] || null;
}

// Извлекает видимый заголовок статьи из тела (без front matter).
// Приоритет 1: Markdown `# Заголовок`.
// Приоритет 2 (фолбэк для реального корпуса): подавляющее большинство статей
// вообще не используют Markdown-заголовок для видимого title — тело обёрнуто
// в редундантный <html><head></head><body>...</body></html> (известная,
// отдельная особенность экспортированного контента — не наша забота чинить
// здесь) и видимый заголовок — это HTML <h1> или <h2>. Пример реальной
// статьи (docs/FAQ/RU/admin/Roles.md и аналогичные): "<h2>Полномочия
// роли</h2>". Без этого фолбэка бэкфилл заголовка молча не сработал бы для
// большинства файлов, у которых он отсутствует.
function titleFromBody(content) {
  const markdownMatch = content.match(/^#\s+(.+)$/m);
  if (markdownMatch) {
    return markdownMatch[1].trim();
  }

  const htmlMatch = content.match(/<h[12][^>]*>(.*?)<\/h[12]>/is);
  if (htmlMatch) {
    // Вырезаем вложенные теги (например, <strong> внутри заголовка) и
    // схлопываем пробелы/переносы строк, чтобы получить чистый текст —
    // без этого сырой HTML попал бы прямо в front matter.
    const plainText = htmlMatch[1]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return plainText || null;
  }

  return null;
}

// Бэкфиллит category/title в front matter одного файла.
//
// Возвращает одну из трёх различимых форм результата:
//  - { changes: [...], stillMissing: [...], malformed: false } — что-то заполнено;
//  - { changes: [],     stillMissing: [...], malformed: false } — заполнять было
//    нечего (front matter уже содержит то, что можно было бы вывести);
//  - { changes: [],     stillMissing: [],    malformed: true, error }  — YAML
//    во front matter синтаксически некорректен (например, неэкранированное ":"
//    внутри значения — реальный баг, найденный аудитом Task 9 в 14 файлах
//    docs/FAQ/RU/**/*.md). В этом случае решать, какое значение чинить, — это
//    редакторская задача вне рамок автоматического бэкфилла: файл пропускается
//    без изменений и без попытки угадать исправление.
function backfillFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { error } = safeParse(raw);
  if (error) {
    return { changes: [], stillMissing: [], malformed: true, error };
  }

  // safeParse уже подтвердил, что raw разбирается без исключений, поэтому
  // повторный вызов matter() здесь детерминирован и безопасен. Он нужен,
  // чтобы получить content (тело после front matter) — safeParse его не
  // возвращает, так как остальные вызывающие модули (validate/audit) в нём
  // не нуждаются.
  const parsed = matter(raw);
  const data = { ...parsed.data };
  const changes = [];
  const stillMissing = [];

  if (!data.category) {
    const derived = categoryForFile(filePath);
    if (derived) {
      data.category = derived;
      changes.push(`category=${derived}`);
    }
  }

  if (!data.title) {
    const derived = titleFromBody(parsed.content);
    if (derived) {
      data.title = derived;
      changes.push(`title="${derived}"`);
    }
  }

  if (!data.description || String(data.description).trim() === '') {
    stillMissing.push('description');
  }

  if (changes.length > 0) {
    const updated = matter.stringify(parsed.content, data);
    fs.writeFileSync(filePath, updated);
  }

  return { changes, stillMissing, malformed: false };
}

module.exports = { backfillFile, categoryForFile, titleFromBody };

if (require.main === module) {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.log('Использование: node scripts/backfill-front-matter.js <файлы...>');
    process.exit(0);
  }

  const needsDescription = [];
  const malformedFiles = [];
  let backfilledCount = 0;

  for (const filePath of files) {
    const result = backfillFile(filePath);

    if (result.malformed) {
      malformedFiles.push({ filePath, error: result.error });
      continue;
    }

    if (result.changes.length > 0) {
      backfilledCount += 1;
      console.log(`${filePath}: заполнено — ${result.changes.join(', ')}`);
    }
    if (result.stillMissing.includes('description')) {
      needsDescription.push(filePath);
    }
  }

  if (malformedFiles.length > 0) {
    console.log(`\nПропущены как повреждённые, требуют ручной правки YAML (${malformedFiles.length}):`);
    malformedFiles.forEach(({ filePath, error }) => console.log(`  ${filePath}: ${error}`));
  }

  if (needsDescription.length > 0) {
    console.log(`\nТребуют ручного описания (${needsDescription.length}):`);
    needsDescription.forEach((f) => console.log(`  ${f}`));
  }

  console.log(
    `\nВсего файлов: ${files.length}. Заполнено: ${backfilledCount}. Повреждено (пропущено): ${malformedFiles.length}.`
  );
}
