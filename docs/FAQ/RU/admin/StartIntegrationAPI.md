---
title: Начало работы с REST API HubEx
description: Описание способов взаимодействия с HubEx через REST API.
keywords: API, интеграция, REST API, REST, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<meta charset="utf-8">
<body>
<h1><strong>Начало работы с REST API HubEx</strong></h1>
<p class="ds-markdown-paragraph">Этот раздел поможет вам быстро подключиться к API HubEx, настроить авторизацию и выполнить первые запросы. Мы рассмотрим пошаговый процесс от получения токена до тестирования API.</p>
<hr />
<h2><strong>1. Подготовка к работе с API</strong></h2>
<p class="ds-markdown-paragraph">Перед началом интеграции убедитесь, что у вас есть:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Доступ к&nbsp;<strong>административной панели HubEx</strong>&nbsp;(роль с правами на управление API)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Возможность отправлять&nbsp;<strong>HTTP-запросы</strong>&nbsp;(через Postman, cURL, Python, PHP и т. д.)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Базовое понимание&nbsp;<strong>REST API</strong>&nbsp;и&nbsp;<strong>формата JSON</strong></p>
</li>
</ul>
<hr />
<h2><strong>2. Настройка API-пользователя и получение токена</strong></h2>
<h3><strong>Шаг 1. Создание служебного пользователя</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Войдите в&nbsp;<strong>административную панель HubEx</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Перейдите в раздел:<br /><strong><code>Интеграция &rarr; Служебные пользователи</code></strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Нажмите&nbsp;<strong>"Пользователь API"</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Выберите:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Роли</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Участки</strong></p>
</li>
</ul>
</li>
</ol>
<h3><strong>Шаг 2. Генерация сервисного токена</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">В разделе "Токен доступа" нажмите&nbsp;<strong>"Сгенерировать"</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Скачайте&nbsp;<strong>Service Token</strong>.</p>
<ul>
<li>
<p class="ds-markdown-paragraph">⚠️&nbsp;<strong>Токен показывается только один раз!</strong>&nbsp;Сохраните его в безопасное место.</p>
</li>
</ul>
</li>
</ol>
<p class="ds-markdown-paragraph">Подробнее читайте в статье: <a href="./ServiceUsers.html">Служебные пользователи</a></p>
<hr />
<h2><strong>3. Получение Access Token (авторизация в API)</strong></h2>
<p class="ds-markdown-paragraph">Для работы с API HubEx нужен&nbsp;<strong>JWT-токен доступа</strong>, который обновляется каждые&nbsp;<strong>30 минут</strong>.</p>
<h3><strong>Запрос на получение Access Token</strong></h3>
<p class="ds-markdown-paragraph"><strong>Метод:</strong>&nbsp;<code>POST</code><br /><strong>URL:</strong>&nbsp;<code>https://api.hubex.ru/fsm/AUTHZ/AccessTokens</code></p>
<p class="ds-markdown-paragraph"><strong>Заголовки (<code>Headers</code>):</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Тело запроса (<code>Body</code>):</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token punctuation">{</span>
  <span class="token property">"serviceToken"</span><span class="token operator">:</span> <span class="token string">"ваш_сервисный_токен"</span>
<span class="token punctuation">}</span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример ответа (200 OK):</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token punctuation">{</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span>
<span class="token punctuation">}</span></pre>
</div>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><code>access_token</code></strong>&nbsp;&mdash; используйте его в каждом запросе.</p>
</li>
</ul>
<hr />
<h2><strong>4. Отправка первого API-запроса</strong></h2>
<p class="ds-markdown-paragraph">Теперь можно делать запросы к HubEx, добавляя&nbsp;<strong>Access Token</strong>&nbsp;в заголовки.</p>
<h3><strong>Пример: Получение списка заявок</strong></h3>
<p class="ds-markdown-paragraph"><strong>Метод:</strong>&nbsp;<code>GET</code><br /><strong>URL:</strong>&nbsp;<code>https://api.hubex.ru/fsm/WORK/Tasks</code></p>
<p class="ds-markdown-paragraph"><strong>Заголовки:</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer ваш_access_token</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">X-Application-ID</span><span class="token punctuation">:</span> <span class="token header-value">5</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Параметры (опционально):</strong></p>
<div class="md-code-block md-code-block-dark">
<pre>?fetch=50         // Количество записей
&amp;isClosed=false   // Только открытые заявки
&amp;offset=0         // Пагинация</pre>
</div>
<p class="ds-markdown-paragraph"><strong>Ответ (успешный):</strong></p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">json</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
<pre><span class="token punctuation">
{
    "5136": {
        "isAvailable": true,
        "isRated": false,
        "sortOrder": 1,
        "lastModified": "2025-07-24T11:31:25",
        "workType": {
            "name": "Вид работ по умолчанию",
            "id": 2
        },
        "number": "000000001",
        "actualCriticality": { … },
        "taskStatus": { … },
        "taskType": { … },
        "requestedBy": { … },
        "company": { … },
        "asset": {
            "company": { … },
            "name": "Кондиционер",
            "id": 1020
        },
        "location": {
            "address": "Кирочная улица, 70, Санкт-Петербург, Россия",
            "coordinate": "59.939824:30.391287",
            "id": 5957
        },
        "timesheet": { … },
        "isFavourite": false,
        "taskStage": { … },
        "childCount": 0
    },
    "5135": {
        "isAvailable": true,
        "isRated": false,
        "sortOrder": 1,
        "lastModified": "2025-07-23T13:13:24",
        "workType": {
            "name": "Вид работ по умолчанию",
            "id": 2
        },
        "number": "000000002",
        "actualCriticality": { … },
        "taskStatus": { … },
        "taskType": { … },
        "requestedBy": { … },
        "company": { … },
        "asset": {
            "company": { … },
            "name": "Холодильник",
            "id": 1021
        },
        "location": {
            "address": "Смоляная улица, 23, Санкт-Петербург, Россия",
            "coordinate": "57.154824:28.254287",
            "id": 5845
        },
        "timesheet": { … },
        "isFavourite": false,
        "taskStage": { … },
        "childCount": 0
    }
}
</span></pre>
</div>
<hr />
<h2><strong>5. Тестирование API (Postman, cURL, Python)</strong></h2>
<h3><strong>Вариант 1: Postman</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Создайте новый запрос (<code>+ New &rarr; HTTP Request</code>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Укажите:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Метод:</strong>&nbsp;<code>POST</code></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>URL:</strong>&nbsp;<code>https://api.hubex.ru/fsm/AUTHZ/AccessTokens</code></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Headers:</strong>&nbsp;<code>Content-Type: application/json</code></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Body (raw JSON):</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token punctuation">{</span><span class="token property">"serviceToken"</span><span class="token operator">:</span> <span class="token string">"ваш_токен"</span><span class="token punctuation">}</span></pre>
</div>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph">Отправьте запрос и сохраните&nbsp;<code>access_token</code>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Теперь делайте запросы к другим endpoint&rsquo;ам, добавляя заголовок:</p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer ваш_access_token</span></span></pre>
</div>
</li>
</ol>
<h3><strong>Вариант 2: cURL (командная строка)</strong></h3>
<div class="md-code-block md-code-block-dark">
<pre><span class="token comment"># Получение токена</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">"https://api.hubex.ru/fsm/AUTHZ/AccessTokens"</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-d</span> <span class="token string">'{"serviceToken": "ваш_токен"}'</span>
<span class="token comment"># Получение списка заявок</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token string">"https://api.hubex.ru/fsm/WORK/Tasks"</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer ваш_access_token"</span> <span class="token punctuation">\</span>
     <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span></pre>
</div>
<h3><strong>Вариант 3: Python (requests)</strong></h3>
<div class="md-code-block md-code-block-dark">
<pre><span class="token keyword">import</span> requests
<span class="token comment"># 1. Получение токена</span>
auth_url <span class="token operator">=</span> <span class="token string">"https://api.hubex.ru/fsm/AUTHZ/AccessTokens"</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json"</span><span class="token punctuation">}</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"serviceToken"</span><span class="token punctuation">:</span> <span class="token string">"ваш_токен"</span><span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>auth_url<span class="token punctuation">,</span> json<span class="token operator">=</span>data<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
access_token <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"access_token"</span><span class="token punctuation">]</span>
<span class="token comment"># 2. Запрос данных</span>
tasks_url <span class="token operator">=</span> <span class="token string">"https://api.hubex.ru/fsm/WORK/Tasks"</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f"Bearer </span><span class="token interpolation"><span class="token punctuation">{</span>access_token<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
    <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json"</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>tasks_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></pre>
</div>
<hr />
<h2><strong>6. Что делать дальше?</strong></h2>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Изучите документацию API</strong>&nbsp;&mdash; какие endpoints доступны:</p>
<ul>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=AUTHN">AUTHN</a> – сервис для аутентификация учетных записей</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=AUTHZ">AUTHZ</a> – сервис для авторизации пользователей</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=AUTH">AUTH</a> – сервис для работы с учетной записью и авторизационными данными</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=ADM">ADM</a> – сервис для работы с данными пользователей и администрированием</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=ES">ES</a> – сервис для работы с компаниями, объектами, организационной структуры, локаций и т.п.</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=PA">PA</a> – сервис для управления персоналом - трудоустройство, назначение на оборудование, рейтинги, навыки и т.п.</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=WORK">WORK</a> – сервис для работы с заявками - список заявок, основные атрибуты по заявкам (чек-листы, выполнение и т.п.), создание заявок, вложения, назначения сотрудников и т.п.</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=WSP">WSP</a> – сервис для работы с графиками рабочего времени</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=COMMON">COMMON</a> – сервис для работы со справочниками: валюты, временные зоны, единицы измерения, дополнительные поля и т.п.</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=SLA">SLA</a> – сервис для работы с критичностью заявки и SLA</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=TSTG">TSTG</a> – сервис настройки жизненного цикла заявки</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=UI">UI</a> – сервис настройки пользовательского интерфейса</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=EXPORT">EXPORT</a> – сервис для экспорта данных</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=PMP">PMP</a> – сервис для работы с планировщиком работ</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=MSG">MSG</a> – сервис для работы с уведомлениями, Webhook, триггерами</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=NEWS">NEWS</a> – сервис по оповещению пользователей по обновлениям системы</li>
  <li><a href="https://doc.hubex.ru/?urls.primaryName=WH">WH</a> – сервис для работы со складами и материалами</li>
</ul>

</li>
<li>
<p class="ds-markdown-paragraph"><strong>Настройте обработку ошибок</strong>&nbsp;(например, истечение токена).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Реализуйте автоматическое обновление токена</strong>&nbsp;(если интеграция долгосрочная).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Настройте вебхуки</strong>&nbsp;(если нужно получать уведомления от HubEx).</p>
</li>
</ol>
<hr />
<h3><strong>Готово!</strong>&nbsp;🎉</h3>
<p class="ds-markdown-paragraph">Теперь вы можете интегрировать HubEx с CRM, 1С, Telegram-ботами и другими системами. Если возникнут вопросы &mdash; обратитесь в поддержку HubEx.</p>
</body>
</html>
___
### Следующие шаги:
- [Примеры API запросов в HubEx для реализации интеграции](./ExampleRequestsAPI.html)

____
- [Перейти в меню](http://wiki.hubex.ru)
