---
title: Множественный поиск по заявкам в веб-версии HubEx, Сканирование кодов DataMatrix для материалов в выполненных работах, Новый функционал "История перемещений" в разделе "Карты"
description: Добавили возможность множественного поиска по заявкам для поля поиск и дополнительных полей, Добавили возможность сканирование кодоав DataMatrix для материалов в выполненных работах, Обновили раздел по Истории перемещений к блоке Карты
keywords: Поиск, Дополнительные поля, Заявки, Строка, Множественный текст, Сканирование, Коды, DataMatrix, ДатаМатрикс, Дата Матрикс, Data Matrix, История перемещений, Карты, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>🔍 Множественный поиск по заявкам в веб-версии HubEx</strong></h3>
<p class="ds-markdown-paragraph">Мы внедрили новую функцию, которая значительно ускорит работу со списками заявок. Теперь вы можете искать сразу несколько заявок по номерам, а также фильтровать по нескольким значениям в дополнительных полях &mdash; за один раз.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph">На странице&nbsp;<strong>&laquo;Заявки&raquo;</strong>&nbsp;появилась поддержка&nbsp;<strong>множественного поиска</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Переделали строку поиск</strong>, теперь для запуска поиска требуется нажать кнопку <strong>"Найти"</strong> или <strong>"Enter"</strong> на клавиатуре.</p>
image1</li>
<li>
<p class="ds-markdown-paragraph">В&nbsp;<strong>глобальной строке поиска</strong>&nbsp;можно ввести несколько номеров заявок через специальный разделитель.</p>
image2</li>
<li>
<p class="ds-markdown-paragraph">В&nbsp;<strong>фильтрах по дополнительным полям</strong>&nbsp;(типы &laquo;Строка&raquo;, &laquo;Многострочный текст&raquo;, &laquo;Целое число&raquo;, &laquo;Дробное число&raquo;) теперь тоже можно искать по нескольким значениям одновременно.</p>
image3</li>
</ul>
<p class="ds-markdown-paragraph">Система найдет все заявки, которые соответствуют&nbsp;<strong>любому</strong>&nbsp;из введенных значений (логика&nbsp;<code>ИЛИ</code>).</p>
<h4>✨&nbsp;<strong>Как это работает?</strong></h4>
<p class="ds-markdown-paragraph"><strong>1. Разделитель&nbsp;<code>;;</code>&nbsp;(две точки с запятой)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Значения в поле поиска или фильтра нужно разделять специальным символом &mdash;&nbsp;<strong><code>;;</code></strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Например, в строке поиска:&nbsp;<code>12345;;12346;;12388</code>&nbsp;&mdash; система найдет заявки с любым из этих номеров.</p>
</li>
<li>
<p class="ds-markdown-paragraph">В фильтре по дополнительному полю:&nbsp;<code>SN-778A1;;SN-992B2;;SN-554C3</code>&nbsp;&mdash; найдет объекты, у которых это поле равно любому из перечисленных значений.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>2. &laquo;Умная вставка&raquo; (Paste Smart Input)</strong><br />Самое удобное &mdash; вы можете скопировать список значений из Excel, Google Sheets или любого текстового файла и вставить его в поле поиска или фильтра с помощью комбинации&nbsp;<strong><code>Ctrl+Shift+V</code></strong>. Система автоматически:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Распознает разделители (новая строка, табуляция, запятая).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Заменит их на правильный разделитель&nbsp;<code>;;</code>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Уберет лишние пробелы до и после значений.</p>
</li>
</ul>
<p>image4</p>
<p class="ds-markdown-paragraph"><strong>Пример:</strong><br />Вы копируете из Excel столбец с номерами заявок:</p>
<pre>12345
12346
12388</pre>
<p class="ds-markdown-paragraph">Нажимаете&nbsp;<code>Ctrl+Shift+V</code>&nbsp;в поле поиска &mdash; и строка автоматически преобразуется в:&nbsp;<code>12345;;12346;;12388</code>.</p>
<p class="ds-markdown-paragraph"><strong>3. Простое редактирование</strong><br />Вы можете не только вставлять, но и вручную вводить или редактировать значения, используя разделитель&nbsp;<code>;;</code>. Привычный поиск по одному значению (без разделителя) также полностью сохраняет свою работу.</p>
<h4>📋&nbsp;<strong>Где работает?</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Сущность</strong>: Заявки.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Глобальная строка поиска</strong>&nbsp;на странице &laquo;Заявки&raquo;.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Фильтры по дополнительным полям</strong>&nbsp;типов:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Строка</p>
</li>
<li>
<p class="ds-markdown-paragraph">Многострочный текст</p>
</li>
<li>
<p class="ds-markdown-paragraph">Целое число</p>
</li>
<li>
<p class="ds-markdown-paragraph">Дробное число</p>
</li>
</ul>
</li>
</ul>
<h4>⚙️&nbsp;<strong>Важные технические детали</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Разделитель&nbsp;<code>;;</code></strong>&nbsp;был выбран как оптимальный, поскольку он крайне редко встречается внутри реальных бизнес-данных (адресов, описаний, кодов), в отличие от запятой или одиночной точки с запятой. Это гарантирует, что поиск будет работать предсказуемо.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Ограничение</strong>: За один раз можно искать не более&nbsp;<strong>50 значений</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Ограничение длины</strong>: Для дополнительных полей Строка и Многострочный текст сохраняется текущее ограничение в&nbsp;<strong>1000 символов</strong>&nbsp;на ввод в фильтрах. Для дополнительных полей Целое число и Дробное число ограничение на поле сбрасывается сразу после ввода символов ;;.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Обработка пробелов</strong>: Лишние пробелы до и после разделителя&nbsp;<code>;;</code>&nbsp;автоматически удаляются при отправке запроса.</p>
</li>
</ul>
<h4>🚀&nbsp;<strong>Преимущества для пользователей</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Экономия времени</strong>: Не нужно искать заявки по одной &mdash; можно загрузить целый список номеров за секунду.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Удобство работы с реестрами</strong>: Идеально подходит для поиска заявок по списку номеров из Excel.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкость фильтрации</strong>: Можно быстро отобрать объекты по нескольким значениям дополнительных полей (например, несколько серийных номеров оборудования).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Привычный интерфейс</strong>: Поля поиска и фильтров выглядят и работают как обычно, но с дополнительными возможностями.</p>
</li>
</ul>
<hr>
<h3><strong>📱 Сканирование Data Matrix для маркированных материалов в мобильном приложении HubEx (Этап 1)</strong></h3>
<p class="ds-markdown-paragraph">Мы начинаем внедрение функционала для работы с маркированными материалами (система &laquo;Честный ЗНАК&raquo;). Это первый этап подготовки к законодательным изменениям 2025&ndash;2026 годов, который закладывает основу для юридически корректного учета списаний.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph">В мобильном приложении HubEx появилась возможность&nbsp;<strong>сканировать коды Data Matrix</strong>&nbsp;с маркированных материалов при их списании по заявкам. Функционал является опциональным инструментом сбора данных и работает как в онлайн, так и в офлайн-режиме.</p>
<h4>🔧&nbsp;<strong>Как это работает?</strong></h4>
<p class="ds-markdown-paragraph"><strong>Для администратора тенанта:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В настройках тенанта добавлен переключатель&nbsp;<strong>&laquo;Сканирование кодов для списания единиц материалов&raquo;</strong>&nbsp;(Администрирование &gt; Роли &gt; Полномочия "Выполненные работы и стоимости" &gt;&nbsp;Элементы интерфейса). Если он выключен, элементы интерфейса для сканирования не отображаются.</p>
</li>
</ul>
<p>image5</p>
<p class="ds-markdown-paragraph"><strong>Для исполнителя в заявке (МП):</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>В разделе &laquo;Выполненные работы&raquo;</strong>&nbsp;для каждой позиции Материалов, добавленных к списанию, появляется поле с количеством отсканированных&nbsp;<strong>&laquo;Кодов маркировки&raquo;</strong>.</p>
image6</li>
<li>
<p class="ds-markdown-paragraph">При нажатии на Материал открывается экран&nbsp;<strong>&laquo;Добавить материалы&raquo;</strong>, где отображается:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Наименование и количество материала к списанию.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Список уже привязанных кодов.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Кнопка&nbsp;<strong>&laquo;Сканировать&raquo;</strong>.</p>
</li>
</ul>
image7</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сканирование</strong>: Нажмите &laquo;Сканировать&raquo; &mdash; активируется камера. После распознавания кода Data Matrix он автоматически добавляется в список.</p>
image8</li>
<li>
<p class="ds-markdown-paragraph"><strong>Контроль количества</strong>: Система не позволит добавить больше кодов, чем указано в количестве материала к списанию.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Редактирование</strong>: Вы можете удалить любой код из списка, если ошиблись.</p>
image9</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сохранение</strong>: Все привязанные коды автоматически сохраняются локально и синхронизируются с сервером при появлении интернета.</p>
</li>
</ol>
<h4>🖥️&nbsp;<strong>Просмотр в веб-версии</strong></h4>
<p class="ds-markdown-paragraph">В карточке заявки в разделе&nbsp;<strong>&laquo;Выполненные работы&raquo;</strong>&nbsp;теперь отображается список привязанных кодов маркировки для каждой позиции (только просмотр).</p>
<p>image10</p>
<h4>⚙️&nbsp;<strong>Важные особенности первого этапа</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Опциональность</strong>: Сканирование не является обязательным &mdash; можно списать материал без кодов. Контроль полноты будет добавлен на втором этапе.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Офлайн-работа</strong>: Все операции (сканирование, привязка, удаление) выполняются и для случаев отсутствия интернета. Данные синхронизируются автоматически при подключении.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Управление на уровне тенанта</strong>: Функционал включается общим флагом для всей компании. Настройка отдельных материалов как маркируемых будет добавлена позже.</p>
</li>
</ul>
<h4>🚀&nbsp;<strong>Что дальше?</strong></h4>
<p class="ds-markdown-paragraph">Второй этап предусматривает:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Контроль обязательности сканирования для закрытия стадии (при наличии полномочий).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Возможность отмечать конкретные материалы как маркируемые.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в мобильном приложении HubEx.</strong>&nbsp;Для начала работы администратору необходимо включить функцию в настройках тенанта.</p>
<hr>
<h3><strong>🗺️ Новый функционал &laquo;История перемещений&raquo; в разделе &laquo;Карты&raquo;</strong></h3>
<p class="ds-markdown-paragraph">Мы запускаем новое приложение для визуализации перемещений сотрудников на карте. Инструмент позволяет анализировать маршруты за выбранную дату, просматривать точки остановок и связывать геоданные с объектами и заявками.</p>
<h4>🎯&nbsp;<strong>Как это работает</strong></h4>
<p class="ds-markdown-paragraph">Приложение доступно через стандартный механизм плагинов в разделе&nbsp;<strong>&laquo;Карты&raquo;</strong>.</p>
<p class="ds-markdown-paragraph">image11</p>
<p class="ds-markdown-paragraph"><strong>1. Выбор данных</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В сайдбаре расположены&nbsp;<strong>выпадающий список сотрудников</strong>&nbsp;и&nbsp;<strong>поле выбора даты</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">По умолчанию выбрана&nbsp;<strong>сегодняшняя дата</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Доступный диапазон: от&nbsp;<strong>года назад до сегодняшнего дня</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При смене даты список сотрудников не перезагружается. Точки загружаются только после выбора конкретного сотрудника.</p>
image12</li>
</ul>
<p class="ds-markdown-paragraph"><strong>2. Отображение маршрута</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">На карте строится&nbsp;<strong>линия маршрута</strong>&nbsp;сотрудника за выбранную дату.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Цвета точек:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">🟢&nbsp;<strong>Зелёный</strong>&nbsp;&mdash; начало маршрута</p>
</li>
<li>
<p class="ds-markdown-paragraph">🔴&nbsp;<strong>Красный</strong>&nbsp;&mdash; конец маршрута</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph">При наведении на линию маршрута появляется&nbsp;<strong>тултип с временем (HH:MM:SS)</strong>&nbsp;ближайшей точки.</p>
image13
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>3. Дополнительные слои (включаются в сайдбаре)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>&laquo;Показывать объекты&raquo; (иконка здания)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">На карте отображаются чёрные иконки зданий.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При наведении &mdash; тултип с названием объекта и адресом.</p>
image14
</li>
<li>
<p class="ds-markdown-paragraph">При клике &mdash; переход на страницу объекта.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Переключатель активен только после выбора сотрудника.</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>&laquo;Показывать заявки&raquo; (иконка клипборда)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">На карте отображаются синие-иконки.</p>
image15
</li>
<li>
<p class="ds-markdown-paragraph">При наведении &mdash; тултип с полными данными заявки (номер, тип, вид работ, описание, адрес).</p>
</li>
<li>
<p class="ds-markdown-paragraph">При клике &mdash; открытие заявки в новой вкладке.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Переключатель активен только после выбора сотрудника.</p>
</li>
</ul>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>4. Автоматическое позиционирование</strong><br />При загрузке данных карта автоматически подстраивает центр и масштаб, чтобы вместить все отображаемые элементы:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Точки маршрута сотрудника</p>
</li>
<li>
<p class="ds-markdown-paragraph">Объекты (если включены)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Заявки (если включены)</p>
</li>
</ul>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr />
<p class="ds-markdown-paragraph"><strong>Новый функционал уже доступен в разделе &laquo;Карты&raquo;.</strong>&nbsp;Попробуйте проанализировать маршруты сотрудников и свяжите их с работой на объектах и заявках!</p>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
