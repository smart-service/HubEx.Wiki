---
title: Документация API HubEx
description: Примеры API запросов в HubEx для реализации интеграции.
keywords: API, интеграция, REST API, REST, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<meta charset="utf-8">
</html>

<body>
<h1 class="" data-start="91" data-end="130">Инструкция по работе с REST API HubEx</h1>
<h2 class="" data-start="132" data-end="154">Что такое REST API?</h2>
<p class="" data-start="156" data-end="492">REST API (Representational State Transfer Application Programming Interface) &mdash; это способ взаимодействия с сервером через стандартные HTTP-запросы (GET, POST, PUT, DELETE и др.).<br data-start="334" data-end="337" /> С помощью REST API можно программно получать данные, создавать, изменять и удалять объекты в системе HubEx, например, заявки, оборудование, компании и т.д.</p>
<hr class="" data-start="494" data-end="497" />
<h2 class="" data-start="131" data-end="172">Основные типы HTTP-запросов в REST API</h2>
<p class="" data-start="174" data-end="305">При работе с REST API для взаимодействия с сервером используются различные типы HTTP-запросов. Каждый из них имеет своё назначение.</p>
<h3 class="" data-start="307" data-end="336">1. GET &mdash; Получение данных</h3>
<ul data-start="338" data-end="727">
<li class="" data-start="338" data-end="385">
<p class="" data-start="340" data-end="385"><strong data-start="340" data-end="355">Что делает:</strong> Запрашивает данные с сервера.</p>
</li>
<li class="" data-start="386" data-end="508">
<p class="" data-start="388" data-end="508"><strong data-start="388" data-end="414">Для чего используется:</strong> Получить информацию (например, список заявок, детали конкретной заявки, список оборудования).</p>
</li>
<li class="" data-start="509" data-end="689">
<p class="" data-start="511" data-end="529"><strong data-start="511" data-end="527">Особенности:</strong></p>
<ul data-start="532" data-end="689">
<li class="" data-start="532" data-end="607">
<p class="" data-start="534" data-end="607">Запрос не меняет данные на сервере (безопасный и идемпотентный запрос).</p>
</li>
<li class="" data-start="610" data-end="689">
<p class="" data-start="612" data-end="689">Параметры передаются в URL (например, фильтры, смещение, количество записей).</p>
</li>
</ul>
</li>
<li class="" data-start="690" data-end="727">
<p class="" data-start="692" data-end="727"><strong data-start="692" data-end="703">Пример:</strong> Получить список заявок.</p>
</li>
</ul>
<hr class="" data-start="729" data-end="732" />
<h3 class="" data-start="734" data-end="787">2. POST &mdash; Создание данных или выполнение действий</h3>
<ul data-start="789" data-end="1266">
<li class="" data-start="789" data-end="885">
<p class="" data-start="791" data-end="885"><strong data-start="791" data-end="806">Что делает:</strong> Отправляет данные на сервер для создания новой записи или выполнения операции.</p>
</li>
<li class="" data-start="886" data-end="987">
<p class="" data-start="888" data-end="987"><strong data-start="888" data-end="914">Для чего используется:</strong> Создать новую заявку, сгенерировать токен, выполнить какую-либо команду.</p>
</li>
<li class="" data-start="988" data-end="1195">
<p class="" data-start="990" data-end="1008"><strong data-start="990" data-end="1006">Особенности:</strong></p>
<ul data-start="1011" data-end="1195">
<li class="" data-start="1011" data-end="1079">
<p class="" data-start="1013" data-end="1079">Обычно содержит тело запроса (JSON или другой формат) с данными.</p>
</li>
<li class="" data-start="1082" data-end="1119">
<p class="" data-start="1084" data-end="1119">Может изменять состояние сервера.</p>
</li>
<li class="" data-start="1122" data-end="1195">
<p class="" data-start="1124" data-end="1195">Не идемпотентен &mdash; повторные запросы могут создавать несколько объектов.</p>
</li>
</ul>
</li>
<li class="" data-start="1196" data-end="1266">
<p class="" data-start="1198" data-end="1266"><strong data-start="1198" data-end="1209">Пример:</strong> Получение access token путём отправки сервисного токена.</p>
</li>
</ul>
<hr class="" data-start="1268" data-end="1271" />
<h3 class="" data-start="1273" data-end="1313">3. PUT &mdash; Обновление данных полностью</h3>
<ul data-start="1315" data-end="1690">
<li class="" data-start="1315" data-end="1414">
<p class="" data-start="1317" data-end="1414"><strong data-start="1317" data-end="1332">Что делает:</strong> Отправляет новые данные, чтобы полностью заменить существующий объект на сервере.</p>
</li>
<li class="" data-start="1415" data-end="1481">
<p class="" data-start="1417" data-end="1481"><strong data-start="1417" data-end="1443">Для чего используется:</strong> Обновить заявку, заменив все её поля.</p>
</li>
<li class="" data-start="1482" data-end="1636">
<p class="" data-start="1484" data-end="1502"><strong data-start="1484" data-end="1500">Особенности:</strong></p>
<ul data-start="1505" data-end="1636">
<li class="" data-start="1505" data-end="1551">
<p class="" data-start="1507" data-end="1551">Требует полного набора данных для объекта.</p>
</li>
<li class="" data-start="1554" data-end="1636">
<p class="" data-start="1556" data-end="1636">Идемпотентен &mdash; повторный запрос с одними и теми же данными не изменит результат.</p>
</li>
</ul>
</li>
<li class="" data-start="1637" data-end="1690">
<p class="" data-start="1639" data-end="1690"><strong data-start="1639" data-end="1650">Пример:</strong> Полное обновление информации по заявке.</p>
</li>
</ul>
<hr class="" data-start="1692" data-end="1695" />
<h3 class="" data-start="1697" data-end="1739">4. PATCH &mdash; Частичное обновление данных</h3>
<ul data-start="1741" data-end="2076">
<li class="" data-start="1741" data-end="1816">
<p class="" data-start="1743" data-end="1816"><strong data-start="1743" data-end="1758">Что делает:</strong> Отправляет только изменённые поля для обновления объекта.</p>
</li>
<li class="" data-start="1817" data-end="1909">
<p class="" data-start="1819" data-end="1909"><strong data-start="1819" data-end="1845">Для чего используется:</strong> Обновить только некоторые поля заявки, не затрагивая остальные.</p>
</li>
<li class="" data-start="1910" data-end="2013">
<p class="" data-start="1912" data-end="1930"><strong data-start="1912" data-end="1928">Особенности:</strong></p>
<ul data-start="1933" data-end="2013">
<li class="" data-start="1933" data-end="1995">
<p class="" data-start="1935" data-end="1995">Позволяет экономить трафик и упрощает операции обновления.</p>
</li>
<li class="" data-start="1998" data-end="2013">
<p class="" data-start="2000" data-end="2013">Идемпотентен.</p>
</li>
</ul>
</li>
<li class="" data-start="2014" data-end="2076">
<p class="" data-start="2016" data-end="2076"><strong data-start="2016" data-end="2027">Пример:</strong> Изменить статус заявки или добавить комментарий.</p>
</li>
</ul>
<hr class="" data-start="2078" data-end="2081" />
<h3 class="" data-start="2083" data-end="2114">5. DELETE &mdash; Удаление данных</h3>
<ul data-start="2116" data-end="2399">
<li class="" data-start="2116" data-end="2169">
<p class="" data-start="2118" data-end="2169"><strong data-start="2118" data-end="2133">Что делает:</strong> Удаляет указанный объект с сервера.</p>
</li>
<li class="" data-start="2170" data-end="2248">
<p class="" data-start="2172" data-end="2248"><strong data-start="2172" data-end="2198">Для чего используется:</strong> Удалить заявку, оборудование или другую сущность.</p>
</li>
<li class="" data-start="2249" data-end="2357">
<p class="" data-start="2251" data-end="2269"><strong data-start="2251" data-end="2267">Особенности:</strong></p>
<ul data-start="2272" data-end="2357">
<li class="" data-start="2272" data-end="2357">
<p class="" data-start="2274" data-end="2357">Идемпотентен &mdash; повторные запросы с удалением того же объекта не изменяют результат.</p>
</li>
</ul>
</li>
<li class="" data-start="2358" data-end="2399">
<p class="" data-start="2360" data-end="2399"><strong data-start="2360" data-end="2371">Пример:</strong> Удаление заявки из системы.</p>
</li>
</ul>
<hr class="" data-start="2401" data-end="2404" />
<h2 class="" data-start="2406" data-end="2433">Как выбрать тип запроса?</h2>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" style="width: 335px;" data-start="2435" data-end="2644">
<thead data-start="2435" data-end="2469">
<tr data-start="2435" data-end="2469">
<th style="width: 157.788px;" data-start="2435" data-end="2454" data-col-size="sm">Действие</th>
<th style="width: 163.212px;" data-start="2454" data-end="2469" data-col-size="sm">Тип запроса</th>
</tr>
</thead>
<tbody data-start="2505" data-end="2644">
<tr data-start="2505" data-end="2539">
<td style="width: 157.788px;" data-start="2505" data-end="2524" data-col-size="sm">Получить данные</td>
<td style="width: 163.212px;" data-start="2524" data-end="2539" data-col-size="sm">GET</td>
</tr>
<tr data-start="2540" data-end="2574">
<td style="width: 157.788px;" data-start="2540" data-end="2559" data-col-size="sm">Создать запись</td>
<td style="width: 163.212px;" data-start="2559" data-end="2574" data-col-size="sm">POST</td>
</tr>
<tr data-start="2575" data-end="2609">
<td style="width: 157.788px;" data-start="2575" data-end="2594" data-col-size="sm">Обновить запись</td>
<td style="width: 163.212px;" data-start="2594" data-end="2609" data-col-size="sm">PUT/PATCH</td>
</tr>
<tr data-start="2610" data-end="2644">
<td style="width: 157.788px;" data-start="2610" data-end="2629" data-col-size="sm">Удалить запись</td>
<td style="width: 163.212px;" data-col-size="sm" data-start="2629" data-end="2644">DELETE</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>&nbsp;</p>
<hr class="" data-start="494" data-end="497" />
<h2 class="" data-start="499" data-end="537">&nbsp;</h2>
<h2 class="" data-start="499" data-end="537">Как начать работу с REST API HubEx?</h2>
<p class="" data-start="539" data-end="675">Для работы с API необходимо пройти авторизацию, получить <strong data-start="596" data-end="612">access token</strong> (токен доступа) и использовать его в каждом запросе к серверу.</p>
<hr class="" data-start="677" data-end="680" />
<h2 class="" data-start="682" data-end="748">Шаг 1. Настройка пользователя API и получение сервисного токена</h2>
<ol data-start="750" data-end="1161">
<li class="" data-start="750" data-end="845">
<p class="" data-start="753" data-end="845">В консоли администратора HubEx откройте раздел:<br data-start="800" data-end="803" /> <strong data-start="806" data-end="845">Интеграция &rarr; <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ServiceUsers.html#API">Служебные пользователи</a></strong></p>
</li>
<li class="" data-start="847" data-end="1009">
<p class="" data-start="850" data-end="1009">Активируйте пользователя с ролью <strong data-start="883" data-end="903">Пользователь API</strong> и назначьте ему необходимые роли/права для доступа к нужным данным (например, к заявкам, складам и т.п.).</p>
</li>
<li class="" data-start="1011" data-end="1161">
<p class="" data-start="1014" data-end="1161">Нажмите кнопку <strong data-start="1029" data-end="1060">Сгенерировать токен доступа</strong> и скачайте файл с сервисным токеном. Этот токен будет использоваться для получения <strong data-start="1144" data-end="1160">access token</strong>.</p>
</li>
</ol>
<hr class="" data-start="1163" data-end="1166" />
<h2 class="" data-start="1168" data-end="1200">Шаг 2. Получение Access Token</h2>
<p class="" data-start="1202" data-end="1267">Для авторизации в API необходимо выполнить POST-запрос по адресу:</p>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><strong><code class="whitespace-pre!"><span class="hljs-variable constant_">POST</span> <span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/api.hubex.ru/fsm</span><span class="hljs-regexp">/AUTHZ/</span><span class="hljs-title class_">AccessTokens</span> </code></strong></div>
</div>
<h3 class="" data-start="1327" data-end="1349">Заголовки запроса:</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!">Content-<span class="hljs-keyword">Type</span>: application/<span class="hljs-type">json</span> </code></div>
</div>
<h3 class="" data-start="1391" data-end="1415">Тело запроса (JSON):</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span class="hljs-punctuation">{</span> <span class="hljs-attr">"serviceToken"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"ВАШ_СЕРВИСНЫЙ_ТОКЕН_ИЗ_ФАЙЛА"</span> <span class="hljs-punctuation">}</span> </code></div>
</div>
<h3 class="" data-start="1485" data-end="1503">Пример ответа:</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span class="hljs-punctuation">{</span> <span class="hljs-attr">"access_token"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span> <span class="hljs-punctuation">}</span> </code></div>
</div>
<p class="" data-start="1582" data-end="1687"><strong data-start="1582" data-end="1687">Скопируйте значение <code data-start="1604" data-end="1618">access_token</code> &mdash; оно будет использоваться в заголовках всех последующих запросов.</strong></p>
<hr class="" data-start="1689" data-end="1692" />
<h2 class="" data-start="1694" data-end="1741">Шаг 3. Использование Access Token в запросах</h2>
<p class="" data-start="1743" data-end="1801">Для всех следующих запросов в заголовках нужно передавать:</p>
<ul data-start="1803" data-end="1934">
<li class="" data-start="1803" data-end="1841">
<p class="" data-start="1805" data-end="1841"><code data-start="1805" data-end="1841">Authorization: Bearer ACCESS_TOKEN</code></p>
</li>
<li class="" data-start="1842" data-end="1876">
<p class="" data-start="1844" data-end="1876"><code data-start="1844" data-end="1876">Content-Type: application/json</code></p>
</li>
<li class="" data-start="1877" data-end="1934">
<p class="" data-start="1879" data-end="1934"><code data-start="1879" data-end="1900">X-Application-ID: 5</code> (идентификатор вашего приложения)</p>
</li>
</ul>
<hr class="" data-start="1936" data-end="1939" />
<h2 class="" data-start="1941" data-end="1968">Примеры базовых запросов</h2>
<h3 class="" data-start="1970" data-end="1997">Получение списка заявок</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><strong><code class="whitespace-pre!"><span class="hljs-variable constant_">GET</span> <span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/api.hubex.ru/fsm</span><span class="hljs-regexp">/WORK/</span><span class="hljs-title class_">Tasks</span> </code></strong></div>
</div>
<p class="" data-start="2048" data-end="2089"><strong data-start="2048" data-end="2089">Примеры параметров запроса (query parameters):</strong></p>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" data-start="2091" data-end="2690">
<thead data-start="2091" data-end="2156">
<tr data-start="2091" data-end="2156">
<th data-start="2091" data-end="2106" data-col-size="sm">Параметр</th>
<th data-start="2106" data-end="2123" data-col-size="sm">Значение</th>
<th data-start="2123" data-end="2156" data-col-size="sm">Описание</th>
</tr>
</thead>
<tbody data-start="2223" data-end="2690">
<tr data-start="2223" data-end="2289">
<td data-start="2223" data-end="2238" data-col-size="sm">fetch</td>
<td data-start="2238" data-end="2255" data-col-size="sm">100</td>
<td data-start="2255" data-end="2289" data-col-size="sm">Количество записей на странице</td>
</tr>
<tr data-start="2290" data-end="2356">
<td data-start="2290" data-end="2305" data-col-size="sm">isClosed</td>
<td data-col-size="sm" data-start="2305" data-end="2322">false</td>
<td data-col-size="sm" data-start="2322" data-end="2356">Только открытые заявки</td>
</tr>
<tr data-start="2357" data-end="2422">
<td data-start="2357" data-end="2372" data-col-size="sm">isDeleted</td>
<td data-start="2372" data-end="2389" data-col-size="sm">false</td>
<td data-start="2389" data-end="2422" data-col-size="sm">Не удалённые</td>
</tr>
<tr data-start="2423" data-end="2489">
<td data-start="2423" data-end="2438" data-col-size="sm">offset</td>
<td data-start="2438" data-end="2455" data-col-size="sm">0</td>
<td data-col-size="sm" data-start="2455" data-end="2489">Смещение (для пагинации)</td>
</tr>
<tr data-start="2490" data-end="2556">
<td data-start="2490" data-end="2505" data-col-size="sm">orderBy</td>
<td data-start="2505" data-end="2522" data-col-size="sm">1</td>
<td data-start="2522" data-end="2556" data-col-size="sm">Сортировка по полю</td>
</tr>
<tr data-start="2557" data-end="2623">
<td data-start="2557" data-end="2572" data-col-size="sm">searchText</td>
<td data-start="2572" data-end="2589" data-col-size="sm">текст</td>
<td data-col-size="sm" data-start="2589" data-end="2623">Текст для поиска</td>
</tr>
<tr data-start="2624" data-end="2690">
<td data-start="2624" data-end="2639" data-col-size="sm">sortDirection</td>
<td data-start="2639" data-end="2656" data-col-size="sm">2</td>
<td data-start="2656" data-end="2690" data-col-size="sm">Направление сортировки</td>
</tr>
</tbody>
</table>
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>
</div>
</div>
<p class="" data-start="2692" data-end="2706"><strong data-start="2692" data-end="2706">Заголовки:</strong></p>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-http">Content-Type: application/json X-Application-ID: 5 Authorization: Bearer ACCESS_TOKEN </code></div>
</div>
<hr class="" data-start="2807" data-end="2810" />
<h3 class="" data-start="2812" data-end="2845">Получение списка оборудования</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><strong><code class="whitespace-pre!">GET https://api.hubex.ru/fsm/ES/assets </code></strong></div>
</div>
<p class="" data-start="2895" data-end="2909"><strong data-start="2895" data-end="2909">Параметры:</strong></p>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" data-start="2911" data-end="3590">
<thead data-start="2911" data-end="2986">
<tr data-start="2911" data-end="2986">
<th data-start="2911" data-end="2931" data-col-size="sm">Параметр</th>
<th data-start="2931" data-end="2951" data-col-size="sm">Значение</th>
<th data-start="2951" data-end="2986" data-col-size="sm">Описание</th>
</tr>
</thead>
<tbody data-start="3062" data-end="3590">
<tr data-start="3062" data-end="3136">
<td data-start="3062" data-end="3082" data-col-size="sm">fetch</td>
<td data-start="3082" data-end="3102" data-col-size="sm">100</td>
<td data-start="3102" data-end="3136" data-col-size="sm">Кол-во записей</td>
</tr>
<tr data-start="3137" data-end="3211">
<td data-start="3137" data-end="3157" data-col-size="sm">includePath</td>
<td data-start="3157" data-end="3177" data-col-size="sm">false</td>
<td data-start="3177" data-end="3211" data-col-size="sm">Не включать путь</td>
</tr>
<tr data-start="3212" data-end="3285">
<td data-start="3212" data-end="3232" data-col-size="sm">offset</td>
<td data-start="3232" data-end="3252" data-col-size="sm">0</td>
<td data-start="3252" data-end="3285" data-col-size="sm">Смещение</td>
</tr>
<tr data-start="3364" data-end="3438">
<td data-start="3364" data-end="3384" data-col-size="sm">parentID</td>
<td data-start="3384" data-end="3404" data-col-size="sm">-1</td>
<td data-start="3404" data-end="3438" data-col-size="sm">Родительский объект (-1 - все)</td>
</tr>
<tr data-start="3439" data-end="3513">
<td data-start="3439" data-end="3459" data-col-size="sm">isDeleted</td>
<td data-start="3459" data-end="3479" data-col-size="sm">false</td>
<td data-start="3479" data-end="3513" data-col-size="sm">Только не удалённые</td>
</tr>
<tr data-start="3514" data-end="3590">
<td data-start="3514" data-end="3534" data-col-size="sm">warrantyTill</td>
<td data-col-size="sm" data-start="3534" data-end="3556">9999-12-31T23:59:59</td>
<td data-col-size="sm" data-start="3556" data-end="3590">Гарантия до даты</td>
</tr>
</tbody>
</table>
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>
</div>
</div>
<p class="" data-start="3592" data-end="3625"><strong data-start="3592" data-end="3606">Заголовки:</strong> те же, что и выше.</p>
<hr class="" data-start="3627" data-end="3630" />
<h3 class="" data-start="3632" data-end="3680">Получение списка пользователей (сотрудников)</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><strong><code class="whitespace-pre!"><span class="hljs-variable constant_">GET</span> <span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/api.hubex.ru/fsm</span><span class="hljs-regexp">/ADM/</span><span class="hljs-title class_">Users</span> </code></strong></div>
</div>
<p class="" data-start="3730" data-end="3744"><strong data-start="3730" data-end="3744">Параметры:</strong></p>
<div class="_tableContainer_16hzy_1">
<div class="_tableWrapper_16hzy_14 group flex w-fit flex-col-reverse" tabindex="-1">
<table class="w-fit min-w-(--thread-content-width)" style="width: 383px;" data-start="3746" data-end="4235">
<thead data-start="3746" data-end="3805">
<tr data-start="3746" data-end="3805">
<th style="width: 80px;" data-start="3746" data-end="3762" data-col-size="sm">Параметр</th>
<th style="width: 62.775px;" data-start="3762" data-end="3773" data-col-size="sm">Значение</th>
<th style="width: 220.225px;" data-start="3773" data-end="3805" data-col-size="sm">Описание</th>
</tr>
</thead>
<tbody data-start="3866" data-end="4235">
<tr data-start="3866" data-end="3925">
<td style="width: 80px;" data-start="3866" data-end="3882" data-col-size="sm">fetch</td>
<td style="width: 62.775px;" data-start="3882" data-end="3893" data-col-size="sm">100</td>
<td style="width: 220.225px;" data-start="3893" data-end="3925" data-col-size="sm">Кол-во записей</td>
</tr>
<tr data-start="3993" data-end="4051">
<td style="width: 80px;" data-start="3993" data-end="4009" data-col-size="sm">offset</td>
<td style="width: 62.775px;" data-start="4009" data-end="4020" data-col-size="sm">0</td>
<td style="width: 220.225px;" data-start="4020" data-end="4051" data-col-size="sm">Смещение</td>
</tr>
<tr data-start="4052" data-end="4111">
<td style="width: 80px;" data-start="4052" data-end="4068" data-col-size="sm">isBanned</td>
<td style="width: 62.775px;" data-start="4068" data-end="4079" data-col-size="sm">false</td>
<td style="width: 220.225px;" data-start="4079" data-end="4111" data-col-size="sm">Исключить заблокированных</td>
</tr>
<tr data-start="4112" data-end="4175">
<td style="width: 80px;" data-start="4112" data-end="4128" data-col-size="sm">isCustomer</td>
<td style="width: 62.775px;" data-start="4128" data-end="4139" data-col-size="sm">false</td>
<td style="width: 220.225px;" data-start="4139" data-end="4175" data-col-size="sm">Только сотрудники (не заказчики)</td>
</tr>
<tr data-start="4176" data-end="4235">
<td style="width: 80px;" data-start="4176" data-end="4192" data-col-size="sm">isDeleted</td>
<td style="width: 62.775px;" data-start="4192" data-end="4203" data-col-size="sm">false</td>
<td style="width: 220.225px;" data-start="4203" data-end="4235" data-col-size="sm">Только не удалённые</td>
</tr>
</tbody>
</table>
<div class="sticky end-(--thread-content-margin) h-0 self-end select-none">&nbsp;</div>
</div>
</div>
<p class="" data-start="4237" data-end="4261"><strong data-start="4237" data-end="4251">Заголовки:</strong> как выше.</p>
<hr class="" data-start="4263" data-end="4266" />
<h3 class="" data-start="4268" data-end="4309">Получение данных по конкретной заявке</h3>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none rounded-t-[5px]">&nbsp;</div>
<div class="sticky top-9">&nbsp;</div>
<div class="overflow-y-auto p-4" dir="ltr"><strong><code class="whitespace-pre!"><span class="hljs-variable constant_">GET</span> <span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/api.hubex.ru/fsm</span><span class="hljs-regexp">/WORK/</span><span class="hljs-title class_">Tasks</span>/{<span class="hljs-title class_">Task</span>ID} </code></strong></div>
</div>
<p class="" data-start="4369" data-end="4407">Где <code data-start="4373" data-end="4383">{TaskID}</code> &mdash; идентификатор заявки.</p>
<p class="" data-start="4409" data-end="4430">Заголовки аналогичны.</p>
<hr class="" data-start="4432" data-end="4435" />
<h2 class="" data-start="4437" data-end="4446">Резюме</h2>
<ul data-start="4448" data-end="4795">
<li class="" data-start="4448" data-end="4511">
<p class="" data-start="4450" data-end="4511">Получите сервисный токен в админке и сгенерируйте его файл.</p>
</li>
<li class="" data-start="4512" data-end="4588">
<p class="" data-start="4514" data-end="4588">Выполните запрос на получение <strong data-start="4544" data-end="4560">access token</strong> с этим сервисным токеном.</p>
</li>
<li class="" data-start="4589" data-end="4664">
<p class="" data-start="4591" data-end="4664">Используйте полученный <strong data-start="4614" data-end="4630">access token</strong> в заголовках всех запросов API.</p>
</li>
<li class="" data-start="4665" data-end="4795">
<p class="" data-start="4667" data-end="4795">Вызывайте нужные методы API (например, список заявок, оборудование, пользователей) с соответствующими параметрами и заголовками.</p>
</li>
</ul>
</body>

____
- [Перейти в меню](http://wiki.hubex.ru)
