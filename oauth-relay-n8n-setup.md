# GitHub OAuth-релей для Decap CMS через n8n

Заменяет вариант с Cloudflare Worker (недоступен из-за блокировок). Реализует два эндпоинта, которые нужны `github`-backend Decap CMS, как два workflow в self-hosted n8n — но **финальный шаг (`postMessage` в окно Decap) вынесен на сам сайт wiki.hubex.ru**, не в n8n. Причина — см. «Важный нюанс с CSP» ниже; без этого шага логин молча не работает.

## Зачем это вообще нужно

GitHub требует, чтобы обмен одноразового OAuth-кода на токен доступа происходил на сервере, а не в браузере — иначе `client_secret` приложения оказался бы виден любому в консоли разработчика. Ни у одного варианта (Cloudflare, свой сервер, n8n) нет способа обойти этот шаг — можно только выбрать, где именно он будет выполняться. Здесь — в n8n.

## Пререквизит: GitHub OAuth App

1. Создать: https://github.com/settings/applications/new
   - Application name: `HubEx Wiki CMS`
   - Homepage URL: `https://wiki.hubex.ru`
   - Authorization callback URL: URL вашего n8n-webhook'а из Workflow 2 (см. ниже) — например `https://<ваш-n8n-домен>/webhook/github-oauth-callback`
2. Сохранить `Client ID` и сгенерированный `Client Secret`.
3. В n8n: завести переменные окружения на сервере, где крутится n8n: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`. Не вписывайте `client_secret` напрямую в текст ноды: он попадёт в экспорт workflow открытым текстом.

## Workflow 1 — `/auth` (редирект на GitHub)

1. **Webhook** node (триггер):
   - HTTP Method: `GET`
   - Path: например `github-wiki-oauth-auth`
   - Respond: `Using Respond to Webhook Node`
2. **Respond to Webhook** node, подключить от Webhook:
   - Respond With: **Redirect**
   - Redirect URL:
     ```
     https://github.com/login/oauth/authorize?client_id={{ $env.GITHUB_CLIENT_ID }}&redirect_uri=https%3A%2F%2F<ваш-n8n-домен>%2Fwebhook%2Fgithub-oauth-callback&scope=repo%2Cuser
     ```
     (`redirect_uri` — URL-энкодированный полный адрес Workflow 2 ниже)

## Workflow 2 — `/callback` (обмен кода на токен)

1. **Webhook** node (триггер):
   - HTTP Method: `GET`
   - Path: `github-oauth-callback`
   - Respond: `Using Respond to Webhook Node`
2. **HTTP Request** node, подключить от Webhook:
   - Method: `POST`
   - URL: `https://github.com/login/oauth/access_token`
   - Send Headers: включить, добавить `Accept: application/json`
   - Body Content Type: `JSON`
   - Body:
     ```json
     {
       "client_id": "={{ $env.GITHUB_CLIENT_ID }}",
       "client_secret": "={{ $env.GITHUB_CLIENT_SECRET }}",
       "code": "={{ $json.query.code }}"
     }
     ```
3. **Respond to Webhook** node, подключить от HTTP Request:
   - Respond With: **Redirect** (не Text/HTML — см. нюанс с CSP ниже)
   - Redirect URL:
     ```
     https://wiki.hubex.ru/oauth-callback.html#token={{ $json.access_token }}
     ```

## Важный нюанс с CSP (почему тут редирект, а не HTML напрямую)

Изначальная версия этой схемы отвечала на `/callback` прямо HTML-страницей со скриптом `postMessage`, как и на Cloudflare Worker. Не сработало: n8n принудительно добавляет заголовок `Content-Security-Policy: sandbox ...` (без `allow-same-origin`) к HTML-ответам webhook'ов — переопределить его кастомным заголовком не вышло. Без `allow-same-origin` страница получает «opaque origin», и `postMessage` с неё приходит с `event.origin === null` — Decap молча отбрасывает такое рукопожатие (сверяет origin с `base_url`), без единой ошибки в консоли. Диагностировалось долго: если увидите точно такую картину (всё вроде отрабатывает, попап не закрывается, ошибок нигде нет) — сразу проверяйте `event.origin` через `window.addEventListener('message', e => console.log(e.origin))`, вставленный в консоль окна `/admin/`.

Решение — вынести сам `postMessage` за пределы n8n, на страницу того же сайта (`oauth-callback.html` в корне репозитория, не CSP-sandboxed), передав токен через URL-фрагмент (`#token=...` — фрагмент никогда не уходит на сервер, в отличие от query-параметра). n8n делает только то, что обязано — обмен кода на токен.

## Настройка `admin/config.yml`

```yaml
backend:
  base_url: https://wiki.hubex.ru
  auth_endpoint: oauth-start.html
```

`base_url` указывает на **сам сайт**, не на n8n — потому что Decap сверяет origin входящих сообщений именно с `base_url`, а сообщения теперь шлёт `oauth-callback.html` на wiki.hubex.ru. `oauth-start.html` — маленькая статическая страница-переходник в репозитории: открывшись, она тут же редиректит на настоящий Workflow 1 в n8n. Без неё `base_url + auth_endpoint` не сложились бы в рабочий адрес.

## После настройки

- Оба workflow должны быть **активны** (Active toggle в n8n).
- Проверка Workflow 1 отдельно: откройте его адрес в браузере — должно сразу перекинуть на страницу авторизации GitHub.
- Полная проверка — только через реальный `/admin/`: `oauth-start.html` → Workflow 1 → GitHub → Workflow 2 → `oauth-callback.html` → окно `/admin/` должно само показать список коллекций без перезагрузки страницы.
