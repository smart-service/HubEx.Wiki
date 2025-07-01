---
title: Что такое REST API
description: Описание способов взаимодействия одной компьютерной программы с другими через REST API.
keywords: API, интеграция, REST API, REST, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<meta charset="utf-8">
<body>
<h1><strong>Начало работы с интеграцией API HubEx</strong></h1>
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
<p class="ds-markdown-paragraph">Войдите в&nbsp;<strong>админку HubEx</strong>&nbsp;(<code>https://ваш_домен.hubex.ru/admin</code>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Перейдите в раздел:<br /><strong><code>Интеграция &rarr; Служебные пользователи</code></strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Нажмите&nbsp;<strong>"Пользователь AP"</strong>.</p>
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
<p class="ds-markdown-paragraph">Подробнее читайте в статье: <a href="https://https://wiki.hubex.ru/docs/FAQ/RU/admin/ServiceUsers.html">Служебные пользователи</a></p>
<hr />
<h2><strong>3. Получение Access Token (авторизация в API)</strong></h2>
<p class="ds-markdown-paragraph">Для работы с API HubEx нужен&nbsp;<strong>JWT-токен доступа</strong>, который обновляется каждые&nbsp;<strong>24 часа</strong>.</p>
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
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span class="token punctuation">,</span></pre>
</div>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><code>access_token</code></strong>&nbsp;&mdash; используйте его в каждом запросе.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><code>expires_in</code></strong>&nbsp;&mdash; время жизни токена (в секундах, обычно 24 часа).</p>
</li>
</ul>
<hr />
<h2><strong>4. Отправка первого API-запроса</strong></h2>
<p class="ds-markdown-paragraph">Теперь можно делать запросы к HubEx, добавляя&nbsp;<strong>Access Token</strong>&nbsp;в заголовки.</p>
<h3><strong>Пример: Получение списка заявок</strong></h3>
<p class="ds-markdown-paragraph"><strong>Метод:</strong>&nbsp;<code>GET</code><br /><strong>URL:</strong>&nbsp;<code>https://api.hubex.ru/fsm/WORK/Tasks</code></p>
<p class="ds-markdown-paragraph"><strong>Заголовки:</strong></p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">http</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
<pre><span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer ваш_access_token</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">X-Application-ID</span><span class="token punctuation">:</span> <span class="token header-value">5</span></span></pre>
</div>
<p class="ds-markdown-paragraph"><strong>Параметры (опционально):</strong></p>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">http</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
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
<pre><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>
      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Не работает принтер"</span><span class="token punctuation">,</span>
      <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"В работе"</span><span class="token punctuation">,</span>
      <span class="token property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2024-05-20T10:00:00Z"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">150</span>
<span class="token punctuation">}</span></pre>
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
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">json</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
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
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">http</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
<pre><span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer ваш_access_token</span></span></pre>
</div>
</li>
</ol>
<h3><strong>Вариант 2: cURL (командная строка)</strong></h3>
<div class="md-code-block md-code-block-dark">
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">bash</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
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
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">python</span></div>
<div class="d2a24f03">&nbsp;</div>
</div>
</div>
</div>
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
<p class="ds-markdown-paragraph"><strong>Изучите документацию API</strong>&nbsp;&mdash; какие endpoints доступны.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Настройте обработку ошибок</strong>&nbsp;(например, истечение токена).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Реализуйте автоматическое обновление токена</strong>&nbsp;(если интеграция долгосрочная).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Протестируйте в песочнице</strong>&nbsp;(если есть тестовый режим).</p>
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
- [Примеры API запросов в HubEx для реализации интеграции](./ExampleRequestsAPI.md)
____
- [Перейти в меню](http://wiki.hubex.ru)
