---
title: Множественный поиск по дополнительным полям Объектов в веб-версии HubEx, Упрощённый вход после создания пароля в WEB
description: Добавили возможность множественного поиска по дополнительным полям Объектов, Упростили вход в систему для новых пользователей после создания пароля в WEB
keywords: Поиск, Дополнительные поля, Объекты, Строка, Множественный текст, Регистрация, Новый пользователь, Вход, Авторизация, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>🔍 Множественный поиск по дополнительным полям объектов</strong></h3>
<p class="ds-markdown-paragraph">Мы расширили функционал множественного поиска на странице&nbsp;<strong>&laquo;Объекты&raquo;</strong>. Теперь вы можете фильтровать оборудование сразу по нескольким значениям в дополнительных полях &mdash; за один раз.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph">В боковой панели фильтров на странице&nbsp;<strong>&laquo;Объекты&raquo;</strong>&nbsp;появилась поддержка множественного поиска для&nbsp;<strong>дополнительных полей</strong>&nbsp;следующих типов:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Строка</p>
</li>
<li>
<p class="ds-markdown-paragraph">Многострочный текст</p>
</li>
<li>
<p class="ds-markdown-paragraph">Целое число (только для условия &laquo;Равно&raquo;)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Дробное число (только для условия &laquo;Равно&raquo;)</p>
</li>
</ul>
<p class="ds-markdown-paragraph">Для условий &laquo;Диапазон&raquo;, &laquo;Больше чем&raquo;, &laquo;Меньше чем&raquo; множественный поиск не работает &mdash; вставка через&nbsp;<code>Ctrl+V</code>&nbsp;или&nbsp;<code>Ctrl+Shift+V</code>&nbsp;вставляет только первое число, остальное обрезается.</p>
<p><img style="max-width: 80%; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges06042026/image1.jpg" alt="" /></p>
<h4>✨&nbsp;<strong>Как это работает?</strong></h4>
<p class="ds-markdown-paragraph"><strong>1. Разделитель&nbsp;<code>;;</code>&nbsp;(две точки с запятой)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Значения в поле фильтра нужно разделять специальным символом &mdash;&nbsp;<strong><code>;;</code></strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Например:&nbsp;<code>SN-778A1;;SN-992B2;;SN-554C3</code>&nbsp;&mdash; система найдет объекты, у которых значение этого дополнительного поля равно любому из перечисленных вариантов (логика&nbsp;<code>ИЛИ</code>).</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>2. &laquo;Умная вставка&raquo; (Paste Smart Input)</strong><br />Скопируйте список значений из Excel, Google Sheets или любого текстового файла и вставьте его в поле фильтра с помощью комбинации&nbsp;<strong><code>Ctrl+Shift+V</code></strong>. Система автоматически:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Распознает разделители (новая строка, табуляция, запятая).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Заменит их на правильный разделитель&nbsp;<code>;;</code>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Удалит лишние пробелы до и после разделителя.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Если разделитель оказался в конце строки &mdash; он также будет удалён.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Пример:</strong><br />Вы копируете из Excel столбец с серийными номерами:</p>
<div class="md-code-block md-code-block-light">
<div class="md-code-block-banner-wrap">
<div class="md-code-block-banner md-code-block-banner-lite">
<div class="_121d384">
<div class="d2a24f03"><span class="d813de27">text</span></div>
</div>
</div>
</div>
<pre>SN-778A1
SN-992B2
SN-554C3</pre>
</div>
<p class="ds-markdown-paragraph">Нажимаете&nbsp;<code>Ctrl+Shift+V</code>&nbsp;в поле фильтра &mdash; и строка автоматически преобразуется в:&nbsp;<code>SN-778A1;;SN-992B2;;SN-554C3</code>.</p>
<p class="ds-markdown-paragraph"><strong>3. Особенности для числовых полей</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Для полей типа &laquo;Целое число&raquo; и &laquo;Дробное число&raquo; действуют дополнительные правила:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Одиночный символ&nbsp;<code>;</code>&nbsp;внутри значения не считается разделителем и удаляется при отправке.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Двойной символ&nbsp;<code>;;</code>&nbsp;разделяет значения.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Разделители&nbsp;<code>;;</code>&nbsp;не учитываются в ограничении длины поля.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При умной вставке каждое числовое значение проверяется на допустимую длину и корректность &mdash; всё лишнее обрезается.</p>
</li>
</ul>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>4. Ограничения</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Максимум 50 значений</strong>&nbsp;за один запрос.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для условий &laquo;Диапазон&raquo;, &laquo;Больше чем&raquo;, &laquo;Меньше чем&raquo; множественный поиск недоступен.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обычный поиск по одному значению (без разделителя) работает как прежде.</p>
</li>
</ul>
<h4>🚀&nbsp;<strong>Преимущества для пользователей</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Экономия времени</strong>: Не нужно искать объекты по одному &mdash; можно загрузить целый список серийных номеров или кодов за секунду.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Удобство работы с реестрами</strong>: Идеально подходит для поиска оборудования по списку инвентарных номеров из Excel.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкость фильтрации</strong>: Быстро отбирайте объекты по нескольким значениям дополнительных полей.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Привычный интерфейс</strong>: Поля фильтров выглядят и работают как обычно, но с дополнительными возможностями.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в веб-версии HubEx.</strong>&nbsp;Попробуйте новый множественный поиск в фильтрах на странице&nbsp;<strong>&laquo;Объекты&raquo;</strong>&nbsp;&mdash; это сэкономит вам время при работе со списками оборудования!</p>
<hr>
<h3><strong>🔐 Упрощённый вход после создания пароля</strong></h3>
<p class="ds-markdown-paragraph">Мы убрали лишний шаг авторизации при первом входе в систему. Теперь после создания пароля пользователь попадает в HubEx сразу, без повторного ввода email и пароля.</p>
<h4>🎯&nbsp;<strong>Что изменилось?</strong></h4>
<p class="ds-markdown-paragraph"><strong>Было:</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Подтверждение email</p>
</li>
<li>
<p class="ds-markdown-paragraph">Создание пароля</p>
</li>
<li>
<p class="ds-markdown-paragraph">Нажатие &laquo;Продолжить&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Страница логина</strong>&nbsp;(лишний шаг)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Повторный ввод email и пароля</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вход в систему</p>
</li>
</ol>
<p class="ds-markdown-paragraph"><strong>Стало:</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Подтверждение email</p>
</li>
<li>
<p class="ds-markdown-paragraph">Создание пароля</p>
</li>
<li>
<p class="ds-markdown-paragraph">Нажатие &laquo;Продолжить&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Автоматический вход в систему</strong></p>
</li>
</ol>
<h4>✨&nbsp;<strong>Преимущества</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Меньше действий</strong>&nbsp;&mdash; не нужно запоминать и повторно вводить только что созданный пароль.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Быстрее</strong>&nbsp;&mdash; экономия времени при первом входе.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Понятнее</strong>&nbsp;&mdash; никаких лишних экранов между созданием пароля и началом работы.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Выше конверсия</strong>&nbsp;&mdash; снижен риск потери пользователя на дополнительном шаге.</p>
</li>
</ul>
<h4>🛠️&nbsp;<strong>Как это работает</strong></h4>
<p class="ds-markdown-paragraph">После успешного создания пароля система автоматически авторизует пользователя и перенаправляет его на рабочий стол HubEx. Сессия создаётся сразу, без повторного ввода учётных данных.</p>
<hr />
<p class="ds-markdown-paragraph"><strong>Изменение уже доступно в веб-версии HubEx.</strong>&nbsp;Новые пользователи теперь попадают в систему на один шаг быстрее!</p>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
