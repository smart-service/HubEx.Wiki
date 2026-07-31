# Контентный пайплайн HubEx.Wiki — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Заменить ручную синхронизацию 5 файлов при публикации статьи на автоматический пайплайн (Pagefind + GitHub Actions) и дать нетехническому редактору форму для создания/правки статей (Decap CMS) без git и VS Code.

**Architecture:** Markdown с front matter в git остаётся единственным источником правды. GitHub Actions на каждый push в `master` собирает Jekyll-сайт, индексирует его Pagefind'ом, проверяет front matter только у изменённых файлов и деплоит на GitHub Pages. Decap CMS — браузерная форма поверх того же репозитория (коммитит напрямую через GitHub API), без отдельного бэкенда.

**Tech Stack:** Jekyll (существующий), Node.js + `gray-matter` (скрипты), Pagefind (поиск), GitHub Actions (`actions/jekyll-build-pages`, `actions/deploy-pages`), Decap CMS (статический бандл с CDN), Cloudflare Workers (OAuth-посредник).

**Spec:** [specs/2026-07-27-content-pipeline-design.md](../specs/2026-07-27-content-pipeline-design.md)

## Global Constraints

- Ни один существующий URL статьи не меняется — permalink-логика Jekyll не трогается.
- Публикация — сразу в `master`, без промежуточного ревью/черновика.
- Front-matter-валидация в CI проверяет **только файлы, изменённые в текущем push** — никогда не блокирует весь пайплайн из-за старых пробелов в остальном репозитории.
- Ничего не меняем в: `llms.txt`, `llms-full.txt`, `llms-releasenotes.txt`, дереве `llms/`, дереве `api/` — это зона коллеги (Цветков Е.), полностью вне рамок этой работы.
- 7 корневых `index_*.md` (тематические страницы-гайды) остаются рукописным контентом — их структуру (many-to-many, рукописные подзаголовки) не сворачиваем в автогенерацию; они просто становятся редактируемыми через Decap CMS.
- `assets/tipuesearch/tipuesearch.css` не удаляется — она стилизует `.tipue_search_group`/`.tipue_search_button`/`#tipue_search_input` в хедере сайта, и эти стили нигде больше не определены. Удаляются только JS/логика Tipue Search.
- Счётчики статей в `index.html` (`«110 статьи»`) не автоматизируются в этом плане — см. спеку, «Компоненты».

---

## Phase 1 — Инструмент валидации front matter

### Task 1: Валидатор front matter (общий модуль + CLI + тесты)

**Files:**
- Create: `package.json`
- Create: `scripts/front-matter-fields.js`
- Create: `scripts/validate-front-matter.js`
- Create: `scripts/validate-front-matter.test.js`

**Interfaces:**
- Produces: `scripts/front-matter-fields.js` exports `{ REQUIRED_FIELDS: string[], missingFields(data: object): string[] }` — переиспользуется в Task 9/10.
- Produces: `scripts/validate-front-matter.js` exports `{ validateFile(filePath: string): string[] }` и CLI: `node scripts/validate-front-matter.js <file...>`, exit code 1 при недостающих полях.

- [ ] **Step 1: Инициализировать package.json и поставить зависимость**

```bash
npm init -y
npm install gray-matter
```

Открой получившийся `package.json` и приведи к такому виду (замени сгенерированные поля):

```json
{
  "name": "hubex-wiki-tooling",
  "private": true,
  "version": "1.0.0",
  "description": "Скрипты контентного пайплайна HubEx.Wiki",
  "scripts": {
    "test": "node scripts/validate-front-matter.test.js && node scripts/audit-front-matter.test.js && node scripts/backfill-front-matter.test.js",
    "validate-front-matter": "node scripts/validate-front-matter.js"
  },
  "dependencies": {
    "gray-matter": "^4.0.3"
  }
}
```

(Строки про `audit-front-matter.test.js`/`backfill-front-matter.test.js` в `test` уже можно прописать сейчас — эти файлы появятся в Task 9-10; `npm test` до тех пор будет падать с "module not found", это ожидаемо и чинится в Phase 3.)

- [ ] **Step 2: Написать падающий тест**

Файл `scripts/validate-front-matter.test.js`:

```js
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { validateFile } = require('./validate-front-matter');

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

console.log('Все тесты validate-front-matter прошли успешно.');
```

- [ ] **Step 3: Запустить тест и убедиться, что он падает**

Run: `node scripts/validate-front-matter.test.js`
Expected: `Error: Cannot find module './validate-front-matter'`

- [ ] **Step 4: Реализовать общий модуль полей**

Файл `scripts/front-matter-fields.js`:

```js
const REQUIRED_FIELDS = ['title', 'description', 'category'];

function missingFields(data) {
  return REQUIRED_FIELDS.filter((field) => {
    const value = data[field];
    return value === undefined || value === null || String(value).trim() === '';
  });
}

module.exports = { REQUIRED_FIELDS, missingFields };
```

- [ ] **Step 5: Реализовать валидатор**

Файл `scripts/validate-front-matter.js`:

```js
#!/usr/bin/env node
const fs = require('fs');
const matter = require('gray-matter');
const { missingFields } = require('./front-matter-fields');

function validateFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(raw);
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
```

- [ ] **Step 6: Запустить тест и убедиться, что он проходит**

Run: `node scripts/validate-front-matter.test.js`
Expected: `Все тесты validate-front-matter прошли успешно.`

- [ ] **Step 7: Проверить CLI вручную на реальном файле с пробелом в front matter**

Run: `node scripts/validate-front-matter.js docs/FAQ/RU/admin/AboutHubEx.md`
Expected: строка вида `docs/FAQ/RU/admin/AboutHubEx.md: отсутствуют обязательные поля front matter: title, description, category` и exit code 1 (проверить: `echo $?` на bash или `echo $LASTEXITCODE` в PowerShell → `1`)

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json scripts/front-matter-fields.js scripts/validate-front-matter.js scripts/validate-front-matter.test.js
git commit -m "Add front matter validator with shared required-fields module"
```

---

## Phase 2 — CI/CD: Pagefind + GitHub Actions деплой

### Task 2: GitHub Actions workflow (сборка, валидация, Pagefind, деплой)

**Files:**
- Modify: `package.json` (добавить `pagefind` в devDependencies)
- Create: `.github/workflows/build-and-deploy.yml`

**Interfaces:**
- Consumes: `scripts/validate-front-matter.js` из Task 1 (`npm run validate-front-matter -- <files>`).
- Produces: артефакт `_site/` с собранным сайтом и подпапкой `_site/pagefind/` (индекс + `pagefind.js` + `pagefind-ui.js`), используемый Task 3.

- [ ] **Step 1: Добавить Pagefind как devDependency**

```bash
npm install --save-dev pagefind
```

- [ ] **Step 2: Создать workflow**

Файл `.github/workflows/build-and-deploy.yml`:

```yaml
name: Build and deploy wiki

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install tooling dependencies
        run: npm ci

      - name: Determine changed article files
        id: changed
        run: |
          BEFORE="${{ github.event.before }}"
          if [ -z "$BEFORE" ] || [ "$BEFORE" = "0000000000000000000000000000000000000000" ]; then
            BEFORE=$(git hash-object -t tree /dev/null)
          fi
          AFTER="${{ github.sha }}"
          FILES=$(git diff --name-only --diff-filter=ACM "$BEFORE" "$AFTER" -- 'docs/FAQ/RU/**/*.md' | tr '\n' ' ')
          echo "files=$FILES" >> "$GITHUB_OUTPUT"

      - name: Validate front matter on changed articles
        run: npm run validate-front-matter -- ${{ steps.changed.outputs.files }}

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Build Jekyll site
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site

      - name: Index site with Pagefind
        run: npx pagefind --site _site

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Отправить на отдельную ветку и проверить job build (не deploy)**

```bash
git checkout -b ci/content-pipeline
git add package.json package-lock.json .github/workflows/build-and-deploy.yml
git commit -m "Add GitHub Actions pipeline: validate, build, Pagefind index, deploy"
git push -u origin ci/content-pipeline
```

Затем на GitHub: Actions → выбрать workflow "Build and deploy wiki" → "Run workflow" на ветке `ci/content-pipeline`.

Expected: job `build` — зелёный (validate/build/pagefind шаги проходят). Job `deploy`, скорее всего, красный на этом этапе с ошибкой вида "Get Pages site failed... Please verify that the repository has Pages enabled and configured to build using GitHub Actions" — это ожидаемо, источник Pages ещё не переключён (см. Task 6). Если красный именно `build` — читать лог шага, чинить, коммитить и перезапускать до зелёного `build`.

---

### Task 3: Страница результатов поиска на Pagefind

**Files:**
- Create: `search.html`

**Interfaces:**
- Consumes: `/pagefind/pagefind.js` — статический JS-модуль, который Pagefind кладёт в собранный сайт (Task 2, Step 2, шаг "Index site with Pagefind"). Публичный API: `await pagefind.init()`, `await pagefind.search(query)` → `{ results: [{ data(): Promise<{ url, meta: { title }, excerpt }> }] }`.

- [ ] **Step 1: Создать страницу результатов**

Файл `search.html` (корень репозитория):

```html
---
layout: default
title: Результаты поиска
---

<style>
  .search-results-list { list-style: none; padding: 0; }
  .search-results-list li { margin-bottom: 1.5em; }
  .search-results-list mark { background: #fff3a3; }
</style>

<div id="search-results"></div>

<script type="module">
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  const resultsEl = document.getElementById('search-results');

  function renderMessage(text) {
    const p = document.createElement('p');
    p.textContent = text;
    resultsEl.appendChild(p);
  }

  if (!query) {
    renderMessage('Введите запрос в поле поиска.');
  } else {
    const pagefind = await import('/pagefind/pagefind.js');
    await pagefind.init();
    const search = await pagefind.search(query);
    const results = await Promise.all(search.results.map((r) => r.data()));

    renderMessage(`Результатов: ${results.length} по запросу «${query}»`);

    const list = document.createElement('ul');
    list.className = 'search-results-list';
    for (const result of results) {
      const item = document.createElement('li');

      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.meta.title || result.url;

      const excerpt = document.createElement('p');
      excerpt.innerHTML = result.excerpt;

      item.appendChild(link);
      item.appendChild(excerpt);
      list.appendChild(item);
    }
    resultsEl.appendChild(list);
  }
</script>
```

Примечание по безопасности: `query` (из `?q=`, пользовательский ввод) вставляется только через `textContent`/шаблонную строку внутри `renderMessage`, которая сама использует `textContent` — не парсится как HTML. `result.excerpt`/`result.meta.title` идут из собственного проиндексированного контента сайта (не из пользовательского ввода), поэтому `innerHTML` для `excerpt` безопасен и это стандартный способ показать подсветку совпадений от Pagefind.

- [ ] **Step 2: Commit**

```bash
git add search.html
git commit -m "Add Pagefind-based search results page"
```

---

### Task 4: Переключить формы поиска в хедере на новую страницу

**Files:**
- Modify: `_layouts/default.html`
- Modify: `index.html`

**Interfaces:**
- Consumes: `search.html` из Task 3.

- [ ] **Step 1: Поменять action формы в `_layouts/default.html`**

Найти:
```html
<form action="/assets/tipuesearch/search.html" style="
    padding: 0px;
">
```
Заменить на:
```html
<form action="/search.html" style="
    padding: 0px;
">
```

- [ ] **Step 2: Поменять action формы в `index.html`**

Найти:
```html
<form action="./assets/tipuesearch/search.html" style="padding: 0px; width:100%; margin: 15px;margin-bottom:30px;">
```
Заменить на:
```html
<form action="/search.html" style="padding: 0px; width:100%; margin: 15px;margin-bottom:30px;">
```

- [ ] **Step 3: Commit**

```bash
git add _layouts/default.html index.html
git commit -m "Point header search forms at the new Pagefind results page"
```

(Визуальная проверка — что хедер не потерял стиль (чёрный фон, значок поиска) — на живом сайте после Task 7, `tipuesearch.css` намеренно не трогаем, см. Global Constraints.)

---

### Task 5: robots.txt → автогенерируемый sitemap.xml

**Files:**
- Modify: `robots.txt`

- [ ] **Step 1: Заменить ссылку на sitemap**

Текущее содержимое:
```
Sitemap: wiki.hubex.ru/docs/sitemap.txt
```
Заменить на:
```
Sitemap: https://wiki.hubex.ru/sitemap.xml
```

(`jekyll-sitemap` уже подключён в `_config.yml` и генерирует `sitemap.xml` в корне собранного сайта при каждой сборке — без дополнительного кода.)

- [ ] **Step 2: Commit**

```bash
git add robots.txt
git commit -m "Point robots.txt at the auto-generated sitemap.xml"
```

---

### Task 6: [ЧЕКПОИНТ — ручное действие] Переключить источник GitHub Pages

Это меняет общую инфраструктуру репозитория — не делать автономно, только по прямому подтверждению пользователя.

- [ ] **Step 1: Переключить настройку**

GitHub → репозиторий `smart-service/HubEx.Wiki` → Settings → Pages → "Build and deployment" → Source: сменить "Deploy from a branch" на "GitHub Actions".

- [ ] **Step 2: Перезапустить workflow с ветки из Task 2**

Actions → "Build and deploy wiki" → "Run workflow" на ветке `ci/content-pipeline`.
Expected: теперь и `build`, и `deploy` — зелёные. В логе `deploy` — реальный `page_url`.

- [ ] **Step 3: Открыть выданный `page_url` и проверить сайт**

Ожидается временный preview-деплой (не обязательно ещё привязан к `wiki.hubex.ru`, это нормально для тестового прогона с ветки) — но сайт должен открываться, а `/search.html?q=Заявка` — показывать результаты.

---

### Task 7: Смёржить в master, проверить прод

**Files:** (без изменений кода — операционный таск)

- [ ] **Step 1: Смёржить ветку**

```bash
git checkout master
git pull origin master
git merge ci/content-pipeline
git push origin master
```

- [ ] **Step 2: Дождаться прогона на master и проверить живой сайт**

Actions → дождаться зелёного прогона на `master`. Затем открыть `https://wiki.hubex.ru`:
- `https://wiki.hubex.ru/search.html?q=Заявка` — должны быть результаты.
- `https://wiki.hubex.ru/sitemap.xml` — должен открываться и содержать URL статей.
- `view-source:` на любой статье — в `<head>` должны быть `<meta name="description">`/`<title>`, сгенерированные `jekyll-seo-tag`.

- [ ] **Step 3: Удалить ветку**

```bash
git branch -d ci/content-pipeline
git push origin --delete ci/content-pipeline
```

---

### Task 8: Удалить мёртвый код Tipue Search и ручной sitemap

**Files:**
- Delete: `docs/sitemap.txt`
- Delete: `assets/tipuesearch/search.html`
- Delete: `assets/tipuesearch/tipuesearch.js`
- Delete: `assets/tipuesearch/tipuesearch.min.js`
- Delete: `assets/tipuesearch/tipuesearch_set.js`
- Delete: `assets/tipuesearch/tipuesearch_content.js`

**Не удалять:** `assets/tipuesearch/tipuesearch.css` (см. Global Constraints). `_config.yml` трогать не нужно — `docs/sitemap.txt` в его `exclude:` никогда не упоминался (список на данный момент: `LINK_MAP.md`, `BROKEN_LINKS.md`, `specs/`, `plans/`).

- [ ] **Step 1: Удалить файлы**

```bash
git rm docs/sitemap.txt
git rm assets/tipuesearch/search.html assets/tipuesearch/tipuesearch.js assets/tipuesearch/tipuesearch.min.js assets/tipuesearch/tipuesearch_set.js assets/tipuesearch/tipuesearch_content.js
```

- [ ] **Step 2: Проверить, что нигде больше нет ссылок на удалённые файлы**

```bash
grep -rn "tipuesearch.js\|tipuesearch.min.js\|tipuesearch_set.js\|tipuesearch_content.js\|docs/sitemap.txt" --include="*.html" --include="*.md" --include="*.yml" .
```

Expected: пусто (кроме, возможно, этого плана и спеки — их можно игнорировать).

- [ ] **Step 3: Commit и дождаться зелёного прогона на master**

```bash
git add -A
git commit -m "Remove dead Tipue Search logic and manual sitemap now that Pagefind/jekyll-sitemap replace them"
git push origin master
```

Дождаться зелёного Actions-прогона, открыть `wiki.hubex.ru` ещё раз, убедиться что поиск и хедер выглядят и работают как раньше.

---

## Phase 3 — Миграция существующего контента

### Task 9: Скрипт аудита front matter

**Files:**
- Create: `scripts/audit-front-matter.js`
- Create: `scripts/audit-front-matter.test.js`

**Interfaces:**
- Consumes: `scripts/front-matter-fields.js` из Task 1.
- Produces: `scripts/audit-front-matter.js` exports `{ auditFile(filePath): string[], walk(dir): string[] }`, CLI: `node scripts/audit-front-matter.js <папка>`.

- [ ] **Step 1: Написать падающий тест**

Файл `scripts/audit-front-matter.test.js`:

```js
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { auditFile, walk } = require('./audit-front-matter');

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

console.log('Все тесты audit-front-matter прошли успешно.');
```

- [ ] **Step 2: Запустить тест, убедиться что падает**

Run: `node scripts/audit-front-matter.test.js`
Expected: `Error: Cannot find module './audit-front-matter'`

- [ ] **Step 3: Реализовать скрипт**

Файл `scripts/audit-front-matter.js`:

```js
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { missingFields } = require('./front-matter-fields');

function auditFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(raw);
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

module.exports = { auditFile, walk };

if (require.main === module) {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.log('Использование: node scripts/audit-front-matter.js <папка>');
    process.exit(1);
  }
  const files = walk(targetDir);
  let incompleteCount = 0;
  for (const filePath of files) {
    const missing = auditFile(filePath);
    if (missing.length > 0) {
      incompleteCount += 1;
      console.log(`${filePath}: не хватает — ${missing.join(', ')}`);
    }
  }
  console.log(`\nВсего файлов: ${files.length}. Неполных: ${incompleteCount}.`);
}
```

- [ ] **Step 4: Запустить тест, убедиться что проходит**

Run: `node scripts/audit-front-matter.test.js`
Expected: `Все тесты audit-front-matter прошли успешно.`

- [ ] **Step 5: Commit**

```bash
git add scripts/audit-front-matter.js scripts/audit-front-matter.test.js
git commit -m "Add front matter audit script for migration reporting"
```

---

### Task 10: Скрипт бэкфилла front matter

**Files:**
- Create: `scripts/backfill-front-matter.js`
- Create: `scripts/backfill-front-matter.test.js`

**Interfaces:**
- Produces: `scripts/backfill-front-matter.js` exports `{ backfillFile(filePath): { changes: string[], stillMissing: string[] }, categoryForFile(filePath): string|null, titleFromBody(content): string|null }`, CLI: `node scripts/backfill-front-matter.js <file...>`.

- [ ] **Step 1: Написать падающий тест**

Файл `scripts/backfill-front-matter.test.js`:

```js
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

console.log('Все тесты backfill-front-matter прошли успешно.');
```

- [ ] **Step 2: Запустить тест, убедиться что падает**

Run: `node scripts/backfill-front-matter.test.js`
Expected: `Error: Cannot find module './backfill-front-matter'`

- [ ] **Step 3: Реализовать скрипт**

Файл `scripts/backfill-front-matter.js`:

```js
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const FOLDER_CATEGORY = {
  admin: 'admin',
  user: 'user',
  ReleaseNotes: 'releasenotes',
};

function categoryForFile(filePath) {
  const folder = path.basename(path.dirname(filePath));
  return FOLDER_CATEGORY[folder] || null;
}

function titleFromBody(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function backfillFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
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

  return { changes, stillMissing };
}

module.exports = { backfillFile, categoryForFile, titleFromBody };

if (require.main === module) {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.log('Использование: node scripts/backfill-front-matter.js <файлы...>');
    process.exit(0);
  }

  const needsDescription = [];
  for (const filePath of files) {
    const { changes, stillMissing } = backfillFile(filePath);
    if (changes.length > 0) {
      console.log(`${filePath}: заполнено — ${changes.join(', ')}`);
    }
    if (stillMissing.includes('description')) {
      needsDescription.push(filePath);
    }
  }

  if (needsDescription.length > 0) {
    console.log(`\nТребуют ручного описания (${needsDescription.length}):`);
    needsDescription.forEach((f) => console.log(`  ${f}`));
  }
}
```

- [ ] **Step 4: Запустить тест, убедиться что проходит**

Run: `node scripts/backfill-front-matter.test.js`
Expected: `Все тесты backfill-front-matter прошли успешно.`

- [ ] **Step 5: Commit**

```bash
git add scripts/backfill-front-matter.js scripts/backfill-front-matter.test.js
git commit -m "Add front matter backfill script for category/title auto-fill"
```

---

### Task 11: Прогнать аудит на реальном контенте

**Files:** (без изменений кода)

- [ ] **Step 1: Запустить аудит на всём дереве статей**

```bash
node scripts/audit-front-matter.js docs/FAQ/RU > /tmp/front-matter-audit.txt
tail -5 /tmp/front-matter-audit.txt
```

(на Windows/PowerShell: `node scripts/audit-front-matter.js docs/FAQ/RU | Tee-Object -FilePath front-matter-audit.txt`)

Expected: последняя строка вида `Всего файлов: 263. Неполных: N.` — зафиксировать реальное число N, оно определяет объём Task 13.

- [ ] **Step 2: Сохранить отчёт для команды**

Отчёт (`front-matter-audit.txt`) не коммитить в репозиторий — это одноразовый рабочий артефакт миграции, не часть сайта. Приложить его отдельно (например, файлом в переписке) или оставить локально для Task 13.

---

### Task 12: Прогнать бэкфилл на реальном контенте

**Files:**
- Modify: до 263 файлов под `docs/FAQ/RU/**/*.md` (только те, где реально не хватало `category`/`title`)

- [ ] **Step 1: Запустить бэкфилл**

```bash
node scripts/backfill-front-matter.js $(git ls-files 'docs/FAQ/RU/**/*.md')
```

(PowerShell: `node scripts/backfill-front-matter.js (git ls-files 'docs/FAQ/RU/**/*.md')`)

Expected: построчный вывод вида `docs/FAQ/RU/admin/AboutHubEx.md: заполнено — category=admin, title="..."`, в конце — список файлов, которым всё ещё нужно `description`.

- [ ] **Step 2: Просмотреть диф перед коммитом**

```bash
git diff --stat docs/FAQ/RU
```

Expected: изменения только в `docs/FAQ/RU/**`, только добавление/дополнение front matter (тело статей не тронуто — `backfillFile` переписывает файл через `matter.stringify(parsed.content, data)`, где `parsed.content` — исходное тело без изменений).

- [ ] **Step 3: Commit**

```bash
git add docs/FAQ/RU
git commit -m "Backfill category/title front matter across existing articles"
git push origin master
```

Дождаться зелёного Actions-прогона (это push с многими файлами `docs/FAQ/RU/**/*.md` — validate-шаг в Task 2 проверит все их как «изменённые»; если какой-то файл всё ещё без `description`, пайплайн специально упадёт здесь — это правильное поведение, см. Task 13).

---

### Task 13: Дописать оставшиеся description и подтвердить полное покрытие

**Files:**
- Modify: файлы из отчёта Task 11, которым не хватает `description` (список зависит от реального аудита)

Это редакторская работа, не автоматизируется: `description` — сжатый осмысленный пересказ статьи для сниппета в поисковой выдаче, вывести его механически из текста (например, обрезкой первого абзаца) нельзя без риска бессмысленных сниппетов — ровно то, от чего должен уйти проект (пункт 4 исходного запроса).

- [ ] **Step 1: Для каждого файла из списка «Требуют ручного описания» (Task 11) дописать `description`**

Пример правки для одного файла (`docs/FAQ/RU/admin/AboutHubEx.md`):
```yaml
---
title: О платформе HubEx
category: admin
description: Обзор платформы HubEx — сравнение с Help Desk/ITSM/CRM/ТОиР/SCADA, основные компоненты и варианты доработки под задачи бизнеса.
---
```
(1-2 предложения, до ~155 символов — укладывается в `truncate: 160` в `_layouts/default.html`.)

- [ ] **Step 2: После правки всех файлов — прогнать валидатор по всему дереву**

```bash
node scripts/validate-front-matter.js $(git ls-files 'docs/FAQ/RU/**/*.md')
```

Expected: `OK: проверено файлов: 263` (без единой строки об отсутствующих полях).

- [ ] **Step 3: Commit**

```bash
git add docs/FAQ/RU
git commit -m "Write missing SEO descriptions for remaining articles"
git push origin master
```

Дождаться зелёного Actions-прогона.

---

## Phase 4 — Decap CMS для нетехнического редактирования

### Task 14: OAuth-посредник (Cloudflare Worker)

**Files:**
- Create: `oauth-worker/src/index.js`
- Create: `oauth-worker/wrangler.toml`

**Interfaces:**
- Produces: два публичных endpoint'а — `GET /auth` (редиректит на GitHub OAuth) и `GET /callback?code=...` (обменивает код на токен, возвращает HTML с `postMessage`). Используется Task 15 (`admin/config.yml`, поле `base_url`).

- [ ] **Step 1: Зарегистрировать GitHub OAuth App**

GitHub → аккаунт-владелец репозитория → Settings → Developer settings → OAuth Apps → "New OAuth App":
- Application name: `HubEx Wiki CMS`
- Homepage URL: `https://wiki.hubex.ru`
- Authorization callback URL: `https://hubex-wiki-oauth.<твой-cloudflare-субдомен>.workers.dev/callback` (точный субдомен станет известен после Step 3 — можно вернуться и поправить callback URL после первого деплоя воркера)

Сохранить `Client ID` и сгенерированный `Client Secret` — понадобятся в Step 4.

- [ ] **Step 2: Создать проект воркера**

```bash
mkdir -p oauth-worker/src
cd oauth-worker
npm init -y
npm install --save-dev wrangler
```

Файл `oauth-worker/wrangler.toml`:

```toml
name = "hubex-wiki-oauth"
main = "src/index.js"
compatibility_date = "2026-07-27"
```

- [ ] **Step 3: Реализовать воркер**

Файл `oauth-worker/src/index.js`:

```js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const authUrl = new URL('https://github.com/login/oauth/authorize');
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', `${url.origin}/callback`);
      authUrl.searchParams.set('scope', 'repo,user');
      return Response.redirect(authUrl.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return new Response(`OAuth error: ${tokenData.error_description || tokenData.error}`, { status: 400 });
      }

      const message = `authorization:github:success:${JSON.stringify({
        token: tokenData.access_token,
        provider: 'github',
      })}`;

      const html = `<!DOCTYPE html><html><body><script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              ${JSON.stringify(message)},
              e.origin
            );
            window.removeEventListener("message", receiveMessage, false);
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script></body></html>`;

      return new Response(html, { headers: { 'Content-Type': 'text/html' } });
    }

    return new Response('Not found', { status: 404 });
  },
};
```

- [ ] **Step 4: Задать секреты и задеплоить**

```bash
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler deploy
```

Expected: команда выведет реальный URL вида `https://hubex-wiki-oauth.<субдомен>.workers.dev`. Если он отличается от того, что был указан в Step 1 — вернуться в настройки OAuth App на GitHub и поправить Authorization callback URL на точный.

- [ ] **Step 5: Проверить `/auth` вручную**

```bash
curl -I https://hubex-wiki-oauth.<субдомен>.workers.dev/auth
```

Expected: `HTTP/2 302` и заголовок `location: https://github.com/login/oauth/authorize?...`.

- [ ] **Step 6: Commit**

```bash
git add oauth-worker/src/index.js oauth-worker/wrangler.toml oauth-worker/package.json
git commit -m "Add GitHub OAuth relay Cloudflare Worker for Decap CMS login"
git push origin master
```

(`oauth-worker/` — самостоятельный деплой-юнит, не часть Jekyll-сайта; отдельно от Actions-пайплайна Task 2, деплоится вручную через `wrangler deploy`.)

---

### Task 15: Конфигурация Decap CMS

**Files:**
- Create: `admin/index.html`
- Create: `admin/config.yml`

**Interfaces:**
- Consumes: `oauth-worker` URL из Task 14 (поле `base_url`).
- Consumes: front-matter поля `title`/`description`/`keywords`/`category`, зафиксированные в `scripts/front-matter-fields.js` (Task 1) и заполненные по всему корпусу в Phase 3.

- [ ] **Step 1: Создать точку входа CMS**

Файл `admin/index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Редактирование вики HubEx</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

- [ ] **Step 2: Создать конфигурацию коллекций**

Файл `admin/config.yml`:

```yaml
backend:
  name: github
  repo: smart-service/HubEx.Wiki
  branch: master
  base_url: https://hubex-wiki-oauth.<субдомен>.workers.dev
  auth_endpoint: auth

publish_mode: simple
media_folder: "attachments/images/uploads"
public_folder: "/attachments/images/uploads"

collections:
  - name: "user_articles"
    label: "Статьи: Пользователь"
    folder: "docs/FAQ/RU/user"
    create: true
    slug: "{{slug}}"
    extension: "md"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Описание (SEO, до 160 символов)", name: "description", widget: "text" }
      - { label: "Ключевые слова", name: "keywords", widget: "string", required: false }
      - { label: "Категория", name: "category", widget: "hidden", default: "user" }
      - { label: "Содержимое", name: "body", widget: "markdown" }

  - name: "admin_articles"
    label: "Статьи: Администрирование"
    folder: "docs/FAQ/RU/admin"
    create: true
    slug: "{{slug}}"
    extension: "md"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Описание (SEO, до 160 символов)", name: "description", widget: "text" }
      - { label: "Ключевые слова", name: "keywords", widget: "string", required: false }
      - { label: "Категория", name: "category", widget: "hidden", default: "admin" }
      - { label: "Содержимое", name: "body", widget: "markdown" }

  - name: "release_notes"
    label: "Релиз-ноуты"
    folder: "docs/FAQ/RU/ReleaseNotes"
    create: true
    slug: "{{slug}}"
    extension: "md"
    fields:
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Описание (SEO, до 160 символов)", name: "description", widget: "text" }
      - { label: "Ключевые слова", name: "keywords", widget: "string", required: false }
      - { label: "Категория", name: "category", widget: "hidden", default: "releasenotes" }
      - { label: "Содержимое", name: "body", widget: "markdown" }

  - name: "topic_pages"
    label: "Тематические страницы (главная)"
    files:
      - label: "Web-приложение"
        name: "index_web"
        file: "index_web.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Мобильное приложение (исполнитель)"
        name: "index_app"
        file: "index_app.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Клиентский портал и приложение заказчика"
        name: "index_app_customer"
        file: "index_app_customer.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Консоль администрирования"
        name: "index_admin"
        file: "index_admin.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Обучающие видео"
        name: "index_video"
        file: "index_video.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Что у нас нового"
        name: "index_releasenotes"
        file: "index_releasenotes.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
      - label: "Часто задаваемые вопросы"
        name: "index_questions"
        file: "index_questions.md"
        fields:
          - { label: "Содержимое", name: "body", widget: "markdown" }
```

- [ ] **Step 3: Commit и дождаться деплоя**

```bash
git add admin/index.html admin/config.yml
git commit -m "Add Decap CMS admin UI and collection config"
git push origin master
```

Дождаться зелёного Actions-прогона (Task 2 копирует весь сайт как есть — `admin/` из корня попадёт в `_site/admin/` автоматически, дополнительных шагов сборки не требует).

- [ ] **Step 4: Проверить вход**

Открыть `https://wiki.hubex.ru/admin/`, нажать "Login with GitHub", авторизоваться через popup. Expected: попадаешь в интерфейс CMS со списком из 4 коллекций (Статьи: Пользователь / Администрирование / Релиз-ноуты / Тематические страницы).

- [ ] **Step 5: Проверить round-trip тематической страницы без реальных правок**

Открыть коллекцию "Тематические страницы" → любую (например, "Часто задаваемые вопросы") → ничего не менять → Save.

Expected: коммит появился в истории репозитория; `git show <новый-коммит> -- index_questions.md` показывает **пустой или тривиальный** диф (максимум — незначащие изменения пробелов/переносов от WYYSIWYG-редактора Decap). Если diff существенно меняет разметку (теряются `style=`-атрибуты, ломается вложенный `<script>` Яндекс.Метрики) — сменить `widget: "markdown"` на `widget: "text"` для поля `body` у всех записей `topic_pages` (сырой markdown-редактор без WYSIWYG-парсинга, гарантированно не манглит HTML) и повторить проверку.

---

### Task 16: Сквозная проверка публикации через CMS

**Files:** (без изменений кода — приёмочный таск)

- [ ] **Step 1: Создать тестовую статью через CMS**

`/admin/` → коллекция "Статьи: Пользователь" → "New User Articles" → заполнить: Заголовок = `Тестовая статья пайплайна`, Описание = `Проверка сквозной публикации через Decap CMS.`, Содержимое = `Это тестовая статья для проверки пайплайна публикации.` → Publish.

- [ ] **Step 2: Проверить коммит и пайплайн**

```bash
git pull origin master
git log -1 --stat
```

Expected: свежий коммит от Decap с новым файлом `docs/FAQ/RU/user/тестовая-статья-пайплайна.md` (или похожий slug), содержащим корректный front matter (`title`, `description`, `category: user`). Actions → новый прогон зелёный (validate прошёл, потому что все обязательные поля заполнены формой).

- [ ] **Step 3: Проверить статью и поиск на живом сайте**

Открыть выданный URL статьи — страница открывается, в `<head>` корректные SEO-теги. `https://wiki.hubex.ru/search.html?q=Тестовая` — статья находится.

- [ ] **Step 4: Удалить тестовую статью**

Через CMS (`/admin/` → открыть статью → Delete entry) либо:
```bash
git rm docs/FAQ/RU/user/тестовая-статья-пайплайна.md
git commit -m "Remove pipeline test article"
git push origin master
```

Дождаться зелёного прогона, убедиться что URL статьи теперь 404.

---

## После выполнения плана

Закрыты пункты 1, 2 исходного запроса полностью; пункт 4 — частично (техническое SEO решено, содержательная работа над `llms.txt`/AEO — за скобками, это зона Цветкова). Пункт 3 (API для агента) не построен, но естественным образом достижим следующим шагом: агент может использовать тот же путь, что и человек через Decap (GitHub API коммиты с front matter по той же схеме), либо дергать `scripts/validate-front-matter.js` напрямую перед коммитом — задел под отдельный будущий проект. Пункт 5 (модернизация UX) — сознательно не в этом плане, отдельная спека.
