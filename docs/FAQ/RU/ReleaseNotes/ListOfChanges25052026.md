---
title: Множественный поиск по объектам
description: Добавили возможность множественного поиска для поля поиск по объектам
keywords: поиск, множественный, объекты, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong><span class="">🔍 Множественный поиск по объектам: теперь можно искать по списку за раз</span></strong></h3>
<p class="ds-markdown-paragraph"><span class="">Мы продолжаем расширять возможности множественного поиска в веб-версии HubEx. Теперь на странице&nbsp;</span><strong><span class="">&laquo;Объекты&raquo;</span></strong><span class="">&nbsp;можно ввести в глобальный поиск сразу несколько названий, серийных номеров или инвентарных кодов &mdash; и система найдёт всё, что соответствует любому из них.</span></p>
<h4><strong><span class="">Что изменилось?</span></strong></h4>
<p class="ds-markdown-paragraph"><strong><span class="">Раньше:</span></strong><br /><span class="">Вы могли искать объекты только по одному значению за раз.</span></p>
<p class="ds-markdown-paragraph"><strong><span class="">Теперь:</span></strong><br /><span class="">В&nbsp;</span><strong><span class="">глобальную строку поиска</span></strong><span class="">&nbsp;на странице &laquo;Объекты&raquo; можно ввести несколько значений через специальный разделитель&nbsp;</span><code>;;</code><span class="">&nbsp;(две точки с запятой). Система отобразит все объекты, у которых название, серийный номер или инвентарный номер совпадает с любым из введённых вариантов.</span></p>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges25052026/Image3.jpg" alt="" /></p>
<h4><strong><span class="">Как это работает</span></strong></h4>
<p class="ds-markdown-paragraph"><strong><span class="">1. Ручной ввод:</span></strong><br /><span class="">В поле поиска введите значения через&nbsp;</span><code>;;</code><span class="">, например:</span><br /><code>Объект 12;;Объект 45;;Склад-Север</code><br /><span class="">Нажмите&nbsp;</span><code>Enter</code><span class="">&nbsp;&mdash; и вы увидите все три объекта в результатах.</span></p>
<p class="ds-markdown-paragraph"><strong><span class="">2. &laquo;Умная вставка&raquo; из Excel/таблиц (Ctrl+Shift+V):</span></strong><br /><span class="">Скопируйте столбец с названиями объектов из Excel, нажмите&nbsp;</span><code>Ctrl+Shift+V</code><span class="">&nbsp;в поле поиска &mdash; система автоматически:</span></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Заменит переносы строк на разделитель&nbsp;</span><code>;;</code></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Удалит лишние пробелы до и после значений</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Удалит разделитель в конце строки, если он там оказался</span></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong><span class="">Пример:</span></strong><br /><span class="">Вы копируете из таблицы:</span></p>
<div class="md-code-block md-code-block-light">
<pre>Объект 12
Объект 45
Склад-Север</pre>
</div>
<p class="ds-markdown-paragraph"><span class="">Нажимаете&nbsp;</span><code>Ctrl+Shift+V</code><span class="">&nbsp;в поле поиска &mdash; вставляется строка:</span><br /><code>Объект 12;;Объект 45;;Склад-Север</code></p>
<p class="ds-markdown-paragraph"><strong><span class="">3. Обычная вставка (Ctrl+V):</span></strong><br /><span class="">Если вы просто скопируете столбец и нажмёте&nbsp;</span><code>Ctrl+V</code><span class="">&nbsp;(без Shift), значения склеятся без разделителей (сохраняется стандартное поведение).</span></p>
<h4><strong><span class="">Важные ограничения</span></strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">За один раз можно искать не более&nbsp;</span><strong><span class="">50 значений</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Если ввести одно значение без разделителя &mdash; поиск работает как обычно (например, по адресу, содержащему запятые).</span></p>
</li>
</ul>
<h4><strong><span class="">Преимущества для пользователей</span></strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Экономия времени</span></strong><span class="">&nbsp;&mdash; не нужно искать объекты по одному.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Работа со списками</span></strong><span class="">&nbsp;&mdash; удобно проверять наличие нескольких объектов по их номерам из Excel.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Привычный интерфейс</span></strong><span class="">&nbsp;&mdash; поле поиска выглядит и работает как обычно, но с расширенными возможностями.</span></p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong><span class="">Обновление уже доступно в веб-версии HubEx.</span></strong><span class="">&nbsp;Попробуйте новый поиск на странице &laquo;Объекты&raquo; &mdash; это сэкономит вам время при работе со списками оборудования! 🚀</span></p>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
