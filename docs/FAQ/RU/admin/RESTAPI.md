---
title: Что такое REST API
description: Описание способов взаимодействия одной компьютерной программы с другими через REST API.
keywords: API, интеграция, REST API, REST, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<meta charset="utf-8">
<body>
<h2>Что такое REST API и как он работает?</h2>
<p class="ds-markdown-paragraph">REST API (Representational State Transfer Application Programming Interface) &mdash; это стандартизированный способ взаимодействия между системами через HTTP-протокол. API HubEx работает по принципу клиент-серверной архитектуры:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Клиент</strong>&nbsp;(ваше приложение) отправляет HTTP-запрос к серверу HubEx</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сервер</strong>&nbsp;обрабатывает запрос и возвращает ответ в стандартном формате (обычно JSON)</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Обмен данными</strong>&nbsp;происходит через четко определенные конечные точки (endpoints)</p>
</li>
</ol>
<p class="ds-markdown-paragraph">Основные принципы работы:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Статусность</strong>: Каждый запрос содержит всю необходимую информацию для его обработки</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Кэширование</strong>: Ответы могут кэшироваться для повышения производительности</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Единообразие интерфейса</strong>: Все ресурсы доступны через стандартные HTTP-методы</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Слоистая архитектура</strong>: Промежуточные серверы (прокси, балансировщики) могут участвовать в обработке запроса</p>
</li>
</ul>
<h2>Основные типы HTTP-запросов в REST API</h2>
<h3>1. GET &mdash; Получение данных</h3>
<p class="ds-markdown-paragraph"><strong>Что делает</strong>: Запрашивает данные с сервера<br /><strong>Использование</strong>: Получение информации (списки заявок, детали объекта и т.д.)<br /><strong>Особенности</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Безопасный и идемпотентный запрос (не изменяет данные)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Параметры передаются в URL (фильтры, пагинация)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>GET /fsm/WORK/Tasks</code>&nbsp;&mdash; список заявок</p>
</li>
</ul>
<h3>2. POST &mdash; Создание данных или выполнение действий</h3>
<p class="ds-markdown-paragraph"><strong>Что делает</strong>: Отправляет данные для создания новой записи<br /><strong>Использование</strong>: Создание объектов, выполнение операций<br /><strong>Особенности</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Содержит тело запроса (обычно JSON)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Не идемпотентен (повторный запрос создаст новый объект)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>POST /fsm/AUTHZ/AccessTokens</code>&nbsp;&mdash; получение токена доступа</p>
</li>
</ul>
<h3>3. PUT &mdash; Полное обновление данных</h3>
<p class="ds-markdown-paragraph"><strong>Что делает</strong>: Полная замена существующего объекта<br /><strong>Использование</strong>: Обновление всех полей объекта<br /><strong>Особенности</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Требует полного представления объекта</p>
</li>
<li>
<p class="ds-markdown-paragraph">Идемпотентен</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>PUT /fsm/WORK/Tasks/{id}</code>&nbsp;&mdash; полное обновление заявки</p>
</li>
</ul>
<h3>4. PATCH &mdash; Частичное обновление</h3>
<p class="ds-markdown-paragraph"><strong>Что делает</strong>: Обновляет только указанные поля<br /><strong>Использование</strong>: Модификация отдельных атрибутов<br /><strong>Особенности</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Экономит трафик и упрощает обновления</p>
</li>
<li>
<p class="ds-markdown-paragraph">Идемпотентен</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>PATCH /fsm/WORK/Tasks/{id}</code>&nbsp;&mdash; изменение статуса заявки</p>
</li>
</ul>
<h3>5. DELETE &mdash; Удаление данных</h3>
<p class="ds-markdown-paragraph"><strong>Что делает</strong>: Удаляет указанный объект<br /><strong>Использование</strong>: Удаление записей из системы<br /><strong>Особенности</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Идемпотентен</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>DELETE /fsm/WORK/Tasks/{id}</code>&nbsp;&mdash; удаление заявки</p>
</li>
</ul>
<h2>Примеры сценариев интеграции с популярными системами</h2>
<h3>1. CRM-системы (Bitrix24, amoCRM)</h3>
<p class="ds-markdown-paragraph"><strong>Сценарии</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Создание заявок в HubEx из лидов CRM</p>
</li>
<li>
<p class="ds-markdown-paragraph">Синхронизация статусов заявок</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обмен данными о клиентах</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Рекомендации</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Используйте вебхуки CRM для триггеров событий</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для двусторонней синхронизации настройте регулярные GET-запросы</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример интеграции:&nbsp;<code>POST /fsm/WORK/Tasks</code>&nbsp;при создании лида</p>
</li>
</ul>
<h3>2. Системы учета (1С, SAP)</h3>
<p class="ds-markdown-paragraph"><strong>Сценарии</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Импорт оборудования и активов</p>
</li>
<li>
<p class="ds-markdown-paragraph">Синхронизация данных о ремонтах</p>
</li>
<li>
<p class="ds-markdown-paragraph">Учет материалов и запчастей</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Рекомендации</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Используйте пакетные операции для массовой загрузки</p>
</li>
<li>
<p class="ds-markdown-paragraph">Настройте расписание синхронизации (например, раз в час)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>GET /fsm/ES/assets</code>&nbsp;для получения списка оборудования</p>
</li>
</ul>
<h3>3. Мессенджеры и уведомления (Telegram, Slack)</h3>
<p class="ds-markdown-paragraph"><strong>Сценарии</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Оповещения о новых заявках</p>
</li>
<li>
<p class="ds-markdown-paragraph">Уведомления об изменении статусов</p>
</li>
<li>
<p class="ds-markdown-paragraph">Отправка отчетов</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Рекомендации</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Используйте webhook-уведомления HubEx</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для Telegram настройте бота с long-polling</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>GET /fsm/WORK/Tasks?isClosed=false</code>&nbsp;для мониторинга открытых заявок</p>
</li>
</ul>
<h3>4. Системы мониторинга (Zabbix, PRTG)</h3>
<p class="ds-markdown-paragraph"><strong>Сценарии</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Автоматическое создание заявок при инцидентах</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обновление статусов при восстановлении</p>
</li>
<li>
<p class="ds-markdown-paragraph">Привязка оборудования к заявкам</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Рекомендации</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Используйте скрипты-обертки для преобразования форматов</p>
</li>
<li>
<p class="ds-markdown-paragraph">Настройте фильтрацию по критичности событий</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>POST /fsm/WORK/Tasks</code>&nbsp;при срабатывании триггера</p>
</li>
</ul>
<h3>5. Мобильные приложения</h3>
<p class="ds-markdown-paragraph"><strong>Сценарии</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Просмотр и создание заявок</p>
</li>
<li>
<p class="ds-markdown-paragraph">Фотофиксация проблем</p>
</li>
<li>
<p class="ds-markdown-paragraph">Геолокация объектов</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Рекомендации</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Используйте OAuth 2.0 для авторизации</p>
</li>
<li>
<p class="ds-markdown-paragraph">Оптимизируйте запросы для мобильных сетей</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пример:&nbsp;<code>PATCH /fsm/WORK/Tasks/{id}</code>&nbsp;для обновления статуса с телефона</p>
</li>
</ul>
</body>
</html>
___
### Следующие шаги:
- [Начало работы с REST API HubEx](./StartIntegrationAPI)

____
- [Перейти в меню](http://wiki.hubex.ru)
