# GitHub OAuth-релей для Decap CMS через n8n

Заменяет вариант с Cloudflare Worker (недоступен из-за блокировок). Реализует те же два эндпоинта, которые ожидает `github`-backend Decap CMS, но как два workflow в вашем self-hosted n8n — без единой строчки серверного кода вне n8n.

## Зачем это вообще нужно

GitHub требует, чтобы обмен одноразового OAuth-кода на токен доступа происходил на сервере, а не в браузере — иначе `client_secret` приложения оказался бы виден любому в консоли разработчика. Ни у одного варианта (Cloudflare, свой сервер, n8n) нет способа обойти этот шаг — можно только выбрать, где именно он будет выполняться. Здесь — в n8n.

## Пререквизит: GitHub OAuth App

1. Создать: https://github.com/settings/applications/new
   - Application name: `HubEx Wiki CMS`
   - Homepage URL: `https://wiki.hubex.ru`
   - Authorization callback URL: URL вашего n8n-webhook'а из Workflow 2 (см. ниже) — например `https://<ваш-n8n-домен>/webhook/github-oauth-callback`
2. Сохранить `Client ID` и сгенерированный `Client Secret`.
3. В n8n: Settings → Credentials → создать новый Credential (например, тип "Header Auth" не подходит — проще всего завести обычные **Environment Variables** на сервере, где крутится n8n: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`), либо — если ваша версия n8n это поддерживает — сохранить их как n8n Credentials произвольного типа и ссылаться на них через `{{ $credentials... }}`. Не вписывайте `client_secret` напрямую в текст ноды: она попадёт в экспорт workflow открытым текстом.

## Workflow 1 — `/auth` (редирект на GitHub)

1. **Webhook** node (триггер):
   - HTTP Method: `GET`
   - Path: `github-oauth-auth`
   - Respond: `Using Respond to Webhook Node`
2. **Respond to Webhook** node, подключить от Webhook:
   - Respond With: **Redirect** (у ноды есть встроенный тип ответа именно для редиректа — не нужно вручную выставлять код 302 и заголовок Location)
   - Redirect URL:
     ```
     https://github.com/login/oauth/authorize?client_id={{ $env.GITHUB_CLIENT_ID }}&redirect_uri=https%3A%2F%2F<ваш-n8n-домен>%2Fwebhook%2Fgithub-oauth-callback&scope=repo%2Cuser
     ```
     (`redirect_uri` — это URL-энкодированный полный адрес Workflow 2 ниже; `scope=repo,user` в закодированном виде — `repo%2Cuser`)

## Workflow 2 — `/callback` (обмен кода на токен)

1. **Webhook** node (триггер):
   - HTTP Method: `GET`
   - Path: `github-oauth-callback`
   - Respond: `Using Respond to Webhook Node`
   - После первого тестового запуска проверьте в выводе ноды, как реально называется поле с query-параметром `code` — стандартно это `{{ $json.query.code }}`, но лучше свериться с реальным выводом, а не верить документации вслепую.
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
   - Respond With: **Text**
   - Add Option → Response Headers → добавить `Content-Type: text/html`
   - Response Body:
     ```html
     <!DOCTYPE html>
     <html>
     <body>
     <script>
     (function() {
       function receiveMessage(e) {
         window.opener.postMessage(
           'authorization:github:success:{"token":"{{ $json.access_token }}","provider":"github"}',
           e.origin
         );
         window.removeEventListener("message", receiveMessage, false);
       }
       window.addEventListener("message", receiveMessage, false);
       window.opener.postMessage("authorizing:github", "*");
     })();
     </script>
     </body>
     </html>
     ```

**Важная оговорка про эту HTML-строку.** Токен GitHub подставляется напрямую в JS-строку в одинарных кавычках, без дополнительного экранирования — это безопасно, потому что access-токены GitHub всегда состоят только из букв/цифр/подчёркивания (например `gho_xxxxxxxxxxxxxxxxxxxx`) и физически не могут содержать кавычку или обратный слэш, которые сломали бы эту конструкцию. Если GitHub когда-либо изменит формат токенов — это единственное место, которое придётся пересмотреть.

## После настройки

- Оба workflow должны быть **активны** (Active toggle в n8n), иначе webhook не отвечает.
- В `admin/config.yml` Decap CMS (появится в Task 15) `base_url` должен указывать на корень, под которым живут оба webhook'а — то есть `https://<ваш-n8n-домен>`, а `auth_endpoint` — на путь первого workflow относительно этого корня (у n8n webhook-и обычно вида `/webhook/<path>`, так что итоговый `base_url` и `auth_endpoint` нужно подобрать так, чтобы `base_url + '/' + auth_endpoint` давал реальный полный адрес Workflow 1 — проверьте фактический URL в самой webhook-ноде n8n, она показывает его целиком).
- Проверка перед подключением Decap: откройте адрес Workflow 1 в браузере напрямую — должно сразу перекинуть на страницу авторизации GitHub. Затем нажмите «Authorize» — должны вернуться на Workflow 2 и увидеть пустую белую страницу (это нормально — она просто отправляет сообщение открывшему её окну и без Decap CMS ничего не показывает).
