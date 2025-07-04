---
title: Примеры API запросов в HubEx для реализации интеграции
description: Премеры API запросов в HubEx для реализации интеграции.
keywords: API, интеграция, REST API, REST, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<meta charset="utf-8">
<body>
<h1>Примеры API запросов в HubEx для реализации интеграции</h1>
<h2>Содержание</h2>
<nav>
  <ul>
    <li><a href="#section1">Работа с заявками</a></li>
    <li><a href="#section2">Работа с объектами</a></li>
    <li><a href="#section3">Работа с компаниями</a></li>
    <li><a href="#section4">Работа с пользователями</a></li>
  </ul>
</nav>
<hr />
<section id="section1">
<h2>Работа с заявками</h2>
<h3>Создание заявки</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST /fsm/WORK/Tasks</code></p>
<p class="ds-markdown-paragraph"><strong>Обязательные поля</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><code>TaskTypeID</code>&nbsp;- ID типа заявки</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>RequestMethodID</code>&nbsp;- Метод подачи заявки</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Другие поля</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><code>CriticalityID</code>&nbsp;- ID критичности</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>deadline</code>&nbsp;- Крайний срок закрытия</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>companyID</code>&nbsp;- ID компании-заказчика</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>assetID</code>&nbsp;- ID объекта/оборудования</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>LocationID</code>&nbsp;- ID адреса/локации</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>WorkTypeID</code>&nbsp;- ID вида работ</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>Notes</code>&nbsp;- описание заявки - без html тегов (используется для отображения в списке заявок)</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>NotesHtml</code>&nbsp;- описание заявки - с html тегами (используется для отображения в заявке)</p>
</li>
</ul>
<p>Полный перечень полей, а также их тип, можно посмотреть в SWAGGER. Список сервисов представлен в статье - <a htref="https://wiki.hubex.ru/docs/FAQ/RU/admin/StartIntegrationAPI.html">Начало работы с REST API HubEx</a></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<pre>POST https://api.hubex.ru/fsm/WORK/Tasks
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"companyID"</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token property">"assetID"</span><span class="token operator">:</span> <span class="token number">456</span><span class="token punctuation">,</span>
  <span class="token property">"workTypeID"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">"LocationID"</span><span class="token operator">:</span> <span class="token number">5946</span><span class="token punctuation">,</span>
  <span class="token property">"taskTypeID"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"criticalityID"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"RequestMethodID"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"deadline"</span><span class="token operator">:</span> <span class="token number">"2025-07-08T15:00:00.000Z"</span><span class="token punctuation">,</span>
  <span class="token property">"Notes"</span><span class="token operator">:</span> <span class="token string">"Не работает принтер в кабинете 301"</span><span class="token punctuation">,</span>
  <span class="token property">"NotesHtml"</span><span class="token operator">:</span> <span class="token string">"&lt;p&gt;Не работает принтер в кабинете 301&lt;/p&gt;&#92;n"</span>
<span class="token punctuation">}</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<p>Status Code : <strong>201 Created</strong></p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre><span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">5129</span><span class="token punctuation">,</span>
  <span class="token property">"number"</span><span class="token operator">:</span> <span class="token string">"0207000000003"</span>
<span class="token punctuation">}</span></pre>
</div>
<br />
<p class="ds-markdown-paragraph"><strong>Как получить ID для полей</strong>:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Компании:&nbsp;<code>GET /fsm/ES/Companies</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Оборудование:&nbsp;<code>GET /fsm/ES/Assets</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Виды работ:&nbsp;<code>GET /fsm/WORK/WorkTypes</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Типы заявок:&nbsp;<code>GET /fsm/WORK/TaskTypes</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Критичность:&nbsp;<code>GET /fsm/SLA/Criticalities</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Адрес:&nbsp;<code>POST fsm/ES/locations</code>, или использовать адрес из Объекта</p>
</li>
<li>
<p class="ds-markdown-paragraph">И так далее, endpoint представлены в SWAGGER. Список сервисов представлен в статье - <a htref="https://wiki.hubex.ru/docs/FAQ/RU/admin/StartIntegrationAPI.html">Начало работы с REST API HubEx</a></p>
</li>
</ol>
<hr />
<h3>Изменение заявки</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>PATCH /fsm/WORK/Tasks/{taskID}</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>PATCH https://api.hubex.ru/fsm/WORK/Tasks/789
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"companyID"</span><span class="token operator">:</span> <span class="token string">17</span><span class="token punctuation">,</span>
  <span class="token property">"deadline"</span><span class="token operator">:</span> <span class="token string">"2025-07-10T14:08:00.000Z"</span>
<span class="token punctuation">}</span></span></pre>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<p>Status Code : <strong>202 Accepted</strong></p>
</div>
<hr />
<h3>Изменение дополнительных полей заявки</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST fsm/WORK/taskAttributes</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/WORK/taskAttributes
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token property">[{
  "taskID":5130,
  "data":[
  {
    "attributeID":7,
    "value":true
  },
  {
    "attributeID":13,
    "value":"NFC отсканирован"
  },
  {
    "attributeID":68,
    "value":""
  }]
}]
</span></pre>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<p>Status Code : <strong>202 Accepted</strong></p>
</div>
<p class="ds-markdown-paragraph">Для получаения списка ID дополнительных полей требуется использовать <strong>Endpoint</strong>:&nbsp;<code>GET fsm/COMMON/Attributes/?isRelevantForTask=true&isDeleted=false</code></p>
<hr />
<h3>Работа со стадиями</h3>
<p class="ds-markdown-paragraph"><strong>Получение списка доступных стадий для заявки</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>GET https://api.hubex.ru/fsm/Tasks/{taskID}/stages/next</pre>
<p>Где taskID - это id заявки</p>
</div>
<br />
<p class="ds-markdown-paragraph"><strong>Изменение стадии</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/WORK/taskstagingHistory
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"taskID"</span><span class="token operator">:</span> <span class="token number">789</span><span class="token punctuation">,</span>
  <span class="token property">"taskStageID"</span><span class="token operator">:</span> <span class="token number">5</span>  <span class="token comment">// ID стадии "Отказ заказчика"</span>
<span class="token punctuation">}</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<p>Status Code : <strong>201 Created</strong></p>
<div class="md-code-block md-code-block-dark">
<pre><span class="token punctuation">{
  "stageId":5,
  "isFinalStage":false,
  "errors":[]
  }
</span></pre>
</div>
<hr />
<h3>Комментарии</h3>
<p class="ds-markdown-paragraph"><strong>Отправка комментария</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/WORK/Tasks/5131/conversation/
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token property">{
  "isExternal":false,
  "attachments":[],
  "message":"Принял в работу"
  }
</span></pre>
</div>
<br />
<p class="ds-markdown-paragraph"><strong>Получение комментариев</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>GET https://api.hubex.ru/fsm/WORK/Tasks/5131/conversations/?thumbnailSize=128</pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример ответа</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>
<span class="token property">[
    {
        "id": 1,
        "created": "2025-07-02T15:15:04",
        "message": "Приехал на объект",
        "isExternal": false,
        "author": {
            "tenantMemberID": 0,
            "isTechnician": false,
            "isCustomer": false,
            "id": 1,
            "firstName": "Скобеев",
            "lastName": "Павел",
            "middleName": ""
        },
        "delivery": {
            "toAnyone": true,
            "toAll": true,
            "toCurrentUser": "2025-07-02T15:15:04"
        },
        "read": {
            "byAnyone": false,
            "byAll": false,
            "byCurrentUser": "2025-07-02T15:15:04",
            "isReadExpected": false
        }
    },
    {
        "id": 2,
        "created": "2025-07-02T15:15:23",
        "message": "Работы выполнены. Просьба принять.",
        "isExternal": true,
        "author": {
            "tenantMemberID": 0,
            "isTechnician": false,
            "isCustomer": false,
            "id": 1,
            "firstName": "Скобеев",
            "lastName": "Павел",
            "middleName": ""
        },
        "delivery": {
            "toAnyone": true,
            "toAll": true,
            "toCurrentUser": "2025-07-02T15:15:23"
        },
        "read": {
            "byAnyone": false,
            "byAll": false,
            "byCurrentUser": "2025-07-02T15:15:23",
            "isReadExpected": false
        }
    }
]
</span></pre>
</div>
<hr />
<h3>Файлы</h3>
<p class="ds-markdown-paragraph"><strong>Добавление файла</strong>&nbsp;(используйте FormData):</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/WORK/taskAttachments/upload/fromForm
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: multipart/form-data
Body:
  taskID: 5131
  file: [ваш файл] //в бинарном формате
  isPublic: false
  isIgnorePossibleDuplication: true</pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример ответа</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>
<span class="token property">{
    "taskID": 5131,
    "attachmentID": 279,
    "md5Hash": "8257360CCAAD8A3F49AB4E43283DCDF2",
    "fileName": "Web1.jpg",
    "isProtected": false
}
</span></pre>
</div>
<br />
<p class="ds-markdown-paragraph"><strong>Получение списка файлов</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>GET https://api.hubex.ru/fsm/WORK/tasks/5131/attachments?thumbnailSize=128</pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример ответа</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>
<span class="token property">{
    "279": {
        "fileName": "Web1.jpg",
        "isUploaded": true,
        "thumbnailUrl": "https://239911.selcdn.ru/DEVTenant000041/_thumbnails/D395771085AAB05244A4FB8FD91BF4EE_128x128?temp_url_sig=ad34207918611c2bca7264c4a114c1c17de8d08a&temp_url_expires=1751470458",
        "isProtected": false,
        "size": 86674,
        "created": "2025-07-02T15:33:57"
    }
}
</span></pre>
<p class="ds-markdown-paragraph">Для получения миниатюры изображения используйте <strong>"thumbnailUrl"</strong></p>
<p>Для получения исходного файла используйте <strong>Endpoint</strong>:&nbsp;<code>GET fsm/COMMON/attachments/279?noRedirect=true</code>, где 279 - это id вложения.</p>
</div>
</section>
<hr />
<section id="section2">
<h2>Работа с объектами</h2>
<h3>Создание объекта</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST /fsm/ES/Assets</code></p>
<p class="ds-markdown-paragraph"><strong>Обязательные поля</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><code>Name</code>&nbsp;- Имя объекта/оборудования</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>AssetTypeID</code>&nbsp;- ID типа оборудования</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>AssetClassID</code>&nbsp;- ID класса оборудования</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>CompanyID</code>&nbsp;- ID компании</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Пример необязательных полей</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><code>IsAutoPublish</code>&nbsp;- Признак публикации объекта</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>IsMobileAsset</code>&nbsp;- Признак "Мобильное оборудование"</p>
</li>
</ul>
<p>Полный перечень полей, а также их тип, можно посмотреть в SWAGGER. Список сервисов представлен в статье - <a htref="https://wiki.hubex.ru/docs/FAQ/RU/admin/StartIntegrationAPI.html">Начало работы с REST API HubEx</a></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/ES/Assets
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json">{
"Name":"Кондиционер",
"CompanyID":19,
"AssetTypeID":1,
"AssetClassID":1,
"IsMobileAsset":false,
"IsInheritParentDistricts":false,
"IsAutoPublish":true
}
</span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<p>Status Code : <strong>201 Created</strong></p>
<pre>
<span class="token property">{
  "name":"Кондиционер",
  "id":1017
  }
</span></pre>
<p>Где id - это id созданного объекта/оборудования в системе</p>
<br />
<p class="ds-markdown-paragraph"><strong>Как получить ID для полей</strong>:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Компании:&nbsp;<code>GET /fsm/ES/Companies</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Тип оборудования:&nbsp;<code>GET /fsm/ES/assetTypes</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Класс оборудования:&nbsp;<code>GET /fsm/ES/assetClasses</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">И так далее, endpoint представлены в SWAGGER. Список сервисов представлен в статье - <a htref="https://wiki.hubex.ru/docs/FAQ/RU/admin/StartIntegrationAPI.html">Начало работы с REST API HubEx</a></p>
</li>
</ol>
<br />
<h3>Изменение объекта</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>PUT /fsm/ES/Assets/{assetID}</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>PATCH https://api.hubex.ru/fsm/ES/Assets/456
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json">{
"Name":"Кондиционер",
"CompanyID":19,
"AssetTypeID":1,
"AssetClassID":1,
"IsMobileAsset":false,
"IsInheritParentDistricts":false,
"IsAutoPublish":true,
"Notes":"Объект установлен в правом углу помещения!"
}
</span></pre>
</div>
<p>Обратите внимание, что для изменения объекта используется метод <strong>PUT</strong>, который обновляет <strong>все поля</strong> по объекту, в связи с этим для изменения объекта <strong>требуется передавать все поля</strong> с текущим значением + поле, которое планируется поменять, уже с новым значением.</p>
<hr />
<h3>Публикация объекта</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>PUT /fsm/ES/Assets/{assetID}/publish</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>PUT https://api.hubex.ru/fsm/ES/Assets/456/publish
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN</pre>
</div>
<p class="ds-markdown-paragraph"><strong>Пример успешного ответа</strong>:</p>
<p>Status Code : <strong>201 Created</strong></p>
</section>
<hr />
<br />
<section id="section3">
<h2>Работа с компаниями</h2>
<h3>Создание компании</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST /fsm/ES/Companies</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/ES/Companies
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ООО ТехноПром"</span><span class="token punctuation">,</span>
  <span class="token property">"legalName"</span><span class="token operator">:</span> <span class="token string">"Общество с ограниченной ответственностью ТехноПром"</span><span class="token punctuation">,</span>
  <span class="token property">"inn"</span><span class="token operator">:</span> <span class="token string">"1234567890"</span><span class="token punctuation">,</span>
  <span class="token property">"kpp"</span><span class="token operator">:</span> <span class="token string">"987654321"</span>
<span class="token punctuation">}</span></span></pre>
</div>
<h3>Изменение компании</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>PATCH /fsm/ES/Companies/{companyID}</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>PATCH https://api.hubex.ru/fsm/ES/Companies/123
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"+7 (495) 123-45-67"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"info@technoprom.ru"</span>
<span class="token punctuation">}</span></span></pre>
</div>
</section>
<hr />
<br />
<section id="section4">
<h2>Работа с пользователями</h2>
<h3>Создание пользователя</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST /fsm/ADM/Users</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/ADM/Users
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"login"</span><span class="token operator">:</span> <span class="token string">"a.ivanov"</span><span class="token punctuation">,</span>
  <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"Алексей"</span><span class="token punctuation">,</span>
  <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"Иванов"</span><span class="token punctuation">,</span>
  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"a.ivanov@company.com"</span><span class="token punctuation">,</span>
  <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token string">"+79031234567"</span><span class="token punctuation">,</span>
  <span class="token property">"roles"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>  <span class="token comment">// ID ролей пользователя</span>
<span class="token punctuation">}</span></span></pre>
</div>
<h3>Изменение пользователя</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>PATCH /fsm/ADM/Users/{userID}</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>PATCH https://api.hubex.ru/fsm/ADM/Users/42
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"departmentID"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"Старший менеджер"</span>
<span class="token punctuation">}</span></span></pre>
</div>
<h3>Блокировка пользователя</h3>
<p class="ds-markdown-paragraph"><strong>Endpoint</strong>:&nbsp;<code>POST /fsm/ADM/Users/{userID}/ban</code></p>
<p class="ds-markdown-paragraph"><strong>Пример запроса</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/ADM/Users/42/ban
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json
Body:
<span class="token application-json"><span class="token punctuation">{</span>
  <span class="token property">"reason"</span><span class="token operator">:</span> <span class="token string">"Увольнение"</span><span class="token punctuation">,</span>
  <span class="token property">"comment"</span><span class="token operator">:</span> <span class="token string">"Уволен 20.05.2023"</span>
<span class="token punctuation">}</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Разблокировка</strong>:</p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">&nbsp;</div>
<pre>POST https://api.hubex.ru/fsm/ADM/Users/42/unban</pre>
</div>
</section>
</body>
</html>

____
- [Перейти в меню](http://wiki.hubex.ru)
