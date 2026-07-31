#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');
const { safeParse } = require('./front-matter-fields');

const FOLDER_CATEGORY = {
  admin: 'admin',
  user: 'user',
  ReleaseNotes: 'releasenotes',
};

// Task 10 refinement 2: у реального корпуса (обнаружено контроллером на всех
// 252 файлах) многие статьи уже содержат front matter с ПУСТЫМИ полями вида
// "description: " (без значения после двоеточия) — gray-matter/js-yaml
// разбирают такое значение в JS `null`. matter.stringify() ниже пересобирает
// ВЕСЬ front matter из объекта data целиком (а не только изменённые поля), а
// стандартная схема js-yaml (DEFAULT_SAFE_SCHEMA, которую использует
// gray-matter под капотом через yaml.safeDump) рендерит `null` как буквальный
// 3-буквенный текст "null" — так нетронутое "description: " превращалось бы
// в "description: null", хотя backfillFile это поле вообще не трогал.
//
// Казалось бы естественным решением выглядит опция js-yaml dump()
// `styles: { '!!null': 'empty' }`, но стиля 'empty' в установленной версии
// js-yaml (3.15.0, зафиксирована через gray-matter@4.0.3 -> js-yaml@^3.13.1)
// не существует: node_modules/js-yaml/lib/js-yaml/type/null.js объявляет
// только 'canonical' (~), 'lowercase' (null, по умолчанию), 'uppercase'
// (NULL) и 'camelcase' (Null) — подтверждено и чтением исходников, и прямым
// запуском (`styles: {'!!null': 'empty'}` бросает YAMLException: "tag
// resolver accepts not "empty" style"). Поэтому вместо styles здесь
// используется другой, тоже официальный и документированный механизм
// js-yaml — своя Schema с переопределённым implicit-типом для `!!null`,
// чей represent() всегда возвращает пустую строку.
//
// Как это доходит до js-yaml: gray-matter's lib/stringify.js вызывает
// `engine.stringify(data, options)`, где options — это ТРЕТИЙ аргумент,
// переданный в matter.stringify(content, data, options) вызывающим кодом
// НИЖЕ, БЕЗ дефолтов/слияния (в отличие от остальных opts, прогоняемых через
// defaults()); engines.js регистрирует `engine.stringify = yaml.safeDump`,
// то есть options передаётся в yaml.safeDump как есть. safeDump() делает
// `common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)` — extend()
// копирует ключи ИЗ options ПОВЕРХ дефолтов, так что наш `options.schema`
// корректно замещает DEFAULT_SAFE_SCHEMA. Всё это подтверждено прямым
// запуском node -e с полным путём matter.stringify(...) перед тем, как
// попасть в этот файл.
//
// resolve() ниже обязателен и должен в точности повторять поведение
// встроенного null-типа (а не полагаться на дефолт Type() — функцию, всегда
// возвращающую true): resolve используется js-yaml при выборе между plain- и
// quoted-стилем ЛЮБОГО скаляра (chooseScalarStyle -> testAmbiguousType
// проверяет resolve() каждого implicit-типа, включая наш), а с resolve по
// умолчанию (always-true) абсолютно ЛЮБАЯ строка — включая ключи объекта и
// уже заполненный title — ошибочно посчиталась бы неоднозначной с null и
// была бы взята в кавычки. Это не гипотеза: без корректного resolve() ниже
// прямой тестовый прогон дал `'title': 'Hello'` вместо `title: Hello`.
function resolveAsYamlNull(data) {
  if (data === null) return true;
  const max = data.length;
  return (
    (max === 1 && data === '~') ||
    (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'))
  );
}

const BLANK_NULL_TYPE = new yaml.Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveAsYamlNull,
  construct: () => null,
  predicate: (object) => object === null,
  represent: () => '',
});

// DEFAULT_SAFE_SCHEMA — та же база, которую gray-matter/yaml.safeDump
// использовали бы по умолчанию (см. комментарий выше); include сохраняет всё
// остальное поведение схемы (типы для дат, бинарных данных и т.д.)
// нетронутым — меняется только represent() для null.
const BLANK_NULL_SCHEMA = new yaml.Schema({
  include: [yaml.DEFAULT_SAFE_SCHEMA],
  implicit: [BLANK_NULL_TYPE],
});

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

// Путь к разово выгруженной карте исторических заголовков по умолчанию —
// см. подробности в комментарии к loadLegacyTitles ниже. Вычисляется
// относительно расположения самого скрипта (scripts/), а не как абсолютный
// путь конкретной машины, чтобы работать в любом чекауте репозитория.
const DEFAULT_LEGACY_TITLES_PATH = path.join(__dirname, '..', '.superpowers', 'sdd', 'legacy-titles.json');

// Кэш уже загруженных карт по пути к файлу, чтобы при реальном запуске CLI
// (backfillFile вызывается по разу на файл, файлов — сотни) JSON карты
// исторических заголовков читался и парсился с диска один раз за процесс, а
// не на каждый файл.
const legacyTitlesCache = {};

// Загружает карту исторических заголовков вида
// { "<путь от корня репозитория>": "<заголовок>" }. Эта карта — разовая
// миграционная выгрузка (сделанная контроллером задачи, не этим скриптом) из
// заголовков старого поискового индекса
// assets/tipuesearch/tipuesearch_content.js (удалён в более ранней задаче,
// поиск на нём больше не работает). Эти заголовки человек-редактор когда-то
// подобрал вручную и они, как правило, чище/точнее того, что можно вывести
// эвристикой из тела статьи (titleFromBody) — а для статей с заголовком
// уровня <h4> и глубже они вообще единственный источник, так как
// titleFromBody распознаёт только Markdown `#` и HTML <h1>/<h2> (см.
// комментарий там).
//
// Файл — гитигнорнутый scratch-артефакт (.superpowers/sdd/, не отслеживается
// git) и не гарантированно существует: ни в чужом чекауте, ни после того как
// эта разовая миграция будет выполнена и scratch-файл подчистят. Поэтому
// отсутствие файла (ENOENT) или некорректный JSON — это не ошибка, а сигнал
// "исторических данных нет для этого запуска": карта считается пустой, и
// backfillFile молча откатывается на titleFromBody для всех файлов, как и до
// появления этой карты.
function loadLegacyTitles(mapPath) {
  if (Object.prototype.hasOwnProperty.call(legacyTitlesCache, mapPath)) {
    return legacyTitlesCache[mapPath];
  }

  let legacyTitles;
  try {
    legacyTitles = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  } catch (e) {
    legacyTitles = {};
  }

  legacyTitlesCache[mapPath] = legacyTitles;
  return legacyTitles;
}

// Ищет исторический заголовок файла в уже загруженной карте legacyTitles.
// Возвращает значение из карты «как есть» (в том числе с окружающими
// пробелами, если они были в исходных данных — известно как минимум одно
// такое значение в реальной карте) — раз это человеком выверенный заголовок,
// его не нужно нормализовать, как titleFromBody нормализует извлечённый из
// разметки текст.
//
// Карта ключуется путями относительно корня репозитория с прямыми слэшами.
// Именно в таком виде filePath приходит при реальном запуске:
// node scripts/backfill-front-matter.js $(git ls-files 'docs/FAQ/RU/**/*.md')
// — git ls-files всегда выводит пути с прямыми слэшами независимо от ОС, и
// эти строки без какого-либо преобразования попадают в process.argv, то
// есть в filePath. В тестах filePath — абсолютный путь во временном
// каталоге; он по построению не совпадает ни с одним ключом реальной карты
// (кроме случаев, когда тест сам конструирует карту специально под этот
// filePath, чтобы проверить приоритет).
function legacyTitleForFile(filePath, legacyTitles) {
  if (Object.prototype.hasOwnProperty.call(legacyTitles, filePath)) {
    return legacyTitles[filePath];
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
//
// legacyTitlesPath — необязательный путь к карте исторических заголовков
// (см. loadLegacyTitles); по умолчанию — реальный
// .superpowers/sdd/legacy-titles.json. Параметр существует в первую очередь
// для тестов, которым нужно подставить контролируемую карту вместо реальной;
// реальный CLI-вызов ниже полагается на значение по умолчанию.
function backfillFile(filePath, legacyTitlesPath = DEFAULT_LEGACY_TITLES_PATH) {
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
    // Приоритет источников заголовка: сначала карта исторических
    // заголовков (человек-выверенные, точнее и шире по покрытию — см.
    // legacyTitleForFile/loadLegacyTitles), и только если там нет записи для
    // этого файла — эвристика titleFromBody, как и раньше.
    const legacyTitles = loadLegacyTitles(legacyTitlesPath);
    const derived = legacyTitleForFile(filePath, legacyTitles) || titleFromBody(parsed.content);
    if (derived) {
      data.title = derived;
      changes.push(`title="${derived}"`);
    }
  }

  if (!data.description || String(data.description).trim() === '') {
    stillMissing.push('description');
  }

  if (changes.length > 0) {
    // schema: BLANK_NULL_SCHEMA — единственная причина третьего аргумента:
    // не дать нетронутым null/пустым полям (см. комментарий у
    // BLANK_NULL_SCHEMA выше) превратиться в буквальный текст "null" при
    // пересборке front matter. На то, какие поля здесь получают значение
    // (title/category derivation above), эта опция никак не влияет — она
    // касается только сериализации того, что уже лежит в data.
    const updated = matter.stringify(parsed.content, data, { schema: BLANK_NULL_SCHEMA });
    fs.writeFileSync(filePath, updated);
  }

  return { changes, stillMissing, malformed: false };
}

module.exports = {
  backfillFile,
  categoryForFile,
  titleFromBody,
  loadLegacyTitles,
  legacyTitleForFile,
  DEFAULT_LEGACY_TITLES_PATH,
};

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
