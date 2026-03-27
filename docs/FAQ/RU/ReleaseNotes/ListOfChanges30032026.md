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


<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
