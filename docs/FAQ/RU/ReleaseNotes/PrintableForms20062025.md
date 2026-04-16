---
title: 
description: 
keywords: 
---

#### Создание печатных форм пользователем: обновление от 20.06.2025
<html>
<meta charset="utf-8">

</html>
<body>
<h2 class="" data-start="100" data-end="140">🔧 1. Создание шаблона печатной формы</h2>
<h3 class="" data-start="142" data-end="158">📍 Где найти</h3>
<p class="" data-start="159" data-end="224">В WEB-интерфейсе появился новый раздел &mdash; <strong data-start="200" data-end="223">Конструктор отчетов</strong>.</p>
<h3 class="" data-start="226" data-end="263">➕ Добавление новой печатной формы</h3>
<ol data-start="264" data-end="766">
<li class="" data-start="264" data-end="310">
<p class="" data-start="267" data-end="310">Перейдите в раздел <strong data-start="286" data-end="309">Конструктор отчетов</strong>.</p>
</li>
<li class="" data-start="311" data-end="362">
<p class="" data-start="314" data-end="362">Нажмите кнопку <strong data-start="329" data-end="336">&laquo;+&raquo;</strong> для создания новой формы.</p>
</li>
<li class="" data-start="363" data-end="567">
<p class="" data-start="366" data-end="393">В открывшемся окне укажите:</p>
<ul data-start="397" data-end="567">
<li class="" data-start="397" data-end="454">
<p class="" data-start="399" data-end="454"><strong data-start="399" data-end="411">Название</strong> &mdash; будет отображаться как вкладка в заявке;</p>
</li>
<li class="" data-start="397" data-end="454"><a><img style="display: block; max-width: 100%; height: auto; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/PrintableForms20062025/k2rbc46F_image.jpg" alt="image" border="0" /></a></li>
<li class="" data-start="458" data-end="489">
<p class="" data-start="460" data-end="489"><strong data-start="460" data-end="472">Описание</strong> (необязательно);</p>
</li>
</ul>
</li>
<li class="" data-start="568" data-end="766">
<p class="" data-start="571" data-end="625">В теле редактора задайте структуру шаблона, используя:</p>
<ul data-start="629" data-end="766">
<li class="" data-start="629" data-end="649">
<p class="" data-start="631" data-end="649">Статический текст;</p>
</li>
<li class="" data-start="653" data-end="681">
<p class="" data-start="655" data-end="681">Таблицы, заголовки, стили;</p>
</li>
<li class="" data-start="685" data-end="766">
<p class="" data-start="687" data-end="766"><strong data-start="687" data-end="701">Переменные</strong>, обернутые в &#123;&#123;&#125;&#125; они будут заменены на значения из заявки.</p>
</li>
</ul>
</li>
</ol>
<h3 class="" data-start="768" data-end="795">🔄 Доступные переменные</h3>
<ul data-start="796" data-end="1370">
<li class="" data-start="796" data-end="873">
<p class="" data-start="798" data-end="873">Переменные заявки: &#123;&#123;Номер&#125;&#125;, &#123;&#123;Описание&#125;&#125;, &#123;&#123;Адрес из заявки&#125;&#125; и др.</p>
</li>
<li class="" data-start="874" data-end="941">
<p class="" data-start="876" data-end="941">Переменные объекта: &#123;&#123;Название объекта&#125;&#125;, &#123;&#123;Адрес объекта&#125;&#125; и др.</p>
</li>
<li class="" data-start="942" data-end="1034">
<p class="" data-start="944" data-end="1034">Переменные компании: &#123;&#123;Компания-заказчик | ИНН&#125;&#125;, &#123;&#123;Компания-плательщик | ОГРН&#125;&#125; и др.</p>
</li>
<li class="" data-start="1035" data-end="1138">
<p class="" data-start="1037" data-end="1138">Переменные чек-листа: &#123;&#123;Чек-листы&#125;&#125;, &#123;&#123;Чек-листы | Выполненные&#125;&#125;, &#123;&#123;Чек-листы | Без содержания&#125;&#125;</p>
</li>
<li class="" data-start="1139" data-end="1185">
<p class="" data-start="1141" data-end="1185">Выполненные работы: &#123;&#123;Выполненные работы&#125;&#125;</p>
</li>
<li class="" data-start="1186" data-end="1370">
<p class="" data-start="1188" data-end="1208">Дополнительные поля:</p>
<ul data-start="1211" data-end="1370">
<li class="" data-start="1211" data-end="1278">
<p class="" data-start="1213" data-end="1278">Заявка: &#123;&#123;Заявка_Атрибут_001&#125;&#125;, &#123;&#123;Заявка_Атрибут_002&#125;&#125; и т.д.</p>
</li>
<li class="" data-start="1281" data-end="1322">
<p class="" data-start="1283" data-end="1322">Объект: &#123;&#123;Объект_Атрибут_001&#125;&#125; и т.д.</p>
</li>
<li class="" data-start="1325" data-end="1370">
<p class="" data-start="1327" data-end="1370">Компания: &#123;&#123;Компания_Атрибут_001&#125;&#125; и т.д.</p>
</li>
</ul>
</li>
<li>где "001", "002" - это номер переменной</li>
</ul>
<blockquote data-start="1372" data-end="1496">
<p class="" data-start="1374" data-end="1496">💡 При добавлении переменной из выпадающего списка она вставляется в конец шаблона, откуда можно перенести в нужное место.</p>
</blockquote>
<hr class="" data-start="1498" data-end="1501" />
<h2 class="" data-start="1503" data-end="1541">📄 2. Отображение шаблонов в заявке</h2>
<h3 class="" data-start="1543" data-end="1568">✅ Условие отображения</h3>
<p class="" data-start="1569" data-end="1632">Если в <strong data-start="1576" data-end="1600">Конструкторе отчетов</strong> создан хотя бы один шаблон, то:</p>
<ul data-start="1633" data-end="1819">
<li class="" data-start="1633" data-end="1768">
<p class="" data-start="1635" data-end="1768">В интерфейсе заявки появляются <strong data-start="1666" data-end="1699">вкладки с названиями шаблонов</strong></p>
</li>
<li class="" data-start="1633" data-end="1768"><strong data-start="1666" data-end="1699"><a><img style="display: block; max-width: 100%; height: auto; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/PrintableForms20062025/6R2HghK6_image.jpg" alt="image" border="0" /></a></strong></li>
</ul>
<ul data-start="1633" data-end="1819">
<li class="" data-start="1769" data-end="1819">
<p class="" data-start="1771" data-end="1819">При открытии вкладки загружается печатная форма.</p>
</li>
</ul>
<h3 class="" data-start="1821" data-end="1862">🔁 Поведение при подстановке значений</h3>
<ul data-start="1863" data-end="1986">
<li class="" data-start="1863" data-end="1919">
<p class="" data-start="1865" data-end="1919">Все &#123;&#123;переменные&#125;&#125; заменяются на значения из заявки.</p>
</li>
<li class="" data-start="1920" data-end="1986">
<p class="" data-start="1922" data-end="1986">Если значение отсутствует &mdash; отображается <strong data-start="1963" data-end="1980">пустая строка</strong> "".</p>
</li>
</ul>
<hr class="" data-start="1988" data-end="1991" />
<h2 class="" data-start="1993" data-end="2015">🖨️ 3. Печать формы</h2>
<p class="" data-start="2017" data-end="2084">В каждой вкладке печатной формы добавлена кнопка <strong data-start="2066" data-end="2083">&laquo;Распечатать&raquo;</strong>:</p>
<ul data-start="2085" data-end="2206">
<li class="" data-start="2085" data-end="2142">
<p class="" data-start="2087" data-end="2142">При нажатии открывается системное окно печати браузера;</p>
</li>
<li class="" data-start="2143" data-end="2206">
<p class="" data-start="2145" data-end="2206">Печатается сформированный шаблон с подставленными значениями.</p>
</li>
</ul>
<hr class="" data-start="2208" data-end="2211" />
<h2 class="" data-start="2213" data-end="2243">🗂️ 4. Управление шаблонами</h2>
<h3 class="" data-start="2245" data-end="2263">📋 Список форм</h3>
<p class="" data-start="2264" data-end="2332">В разделе <strong data-start="2274" data-end="2297">Конструктор отчетов</strong> отображается список всех шаблонов:</p>
<ul data-start="2333" data-end="2376">
<li class="" data-start="2333" data-end="2344">
<p class="" data-start="2335" data-end="2344">Название;</p>
</li>
<li class="" data-start="2345" data-end="2376">
<p class="" data-start="2347" data-end="2376">Статус (Активен / Неактивен).</p>
</li>
</ul>
<h3 class="" data-start="2378" data-end="2405">⚙️ Действия с шаблонами</h3>
<p class="" data-start="2406" data-end="2435">Для каждого шаблона доступны:</p>
<ul data-start="2436" data-end="2551">
<li class="" data-start="2436" data-end="2454">
<p class="" data-start="2438" data-end="2454">✏️ <strong data-start="2441" data-end="2453">Изменить</strong>;</p>
</li>
<li class="" data-start="2455" data-end="2506">
<p class="" data-start="2457" data-end="2506">📴 <strong data-start="2460" data-end="2478">Деактивировать</strong> &mdash; скрывает форму из заявки;</p>
</li>
<li class="" data-start="2507" data-end="2551">
<p class="" data-start="2509" data-end="2551">🗑️ <strong data-start="2513" data-end="2524">Удалить</strong> &mdash; полное удаление шаблона.</p>
</li>
</ul>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<img style="display: block; max-width: 100%; height: auto; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/PrintableForms20062025/v4NZ14XY_image.jpg" alt="image" border="0">
</div>
<hr class="" data-start="2553" data-end="2556" />
<h2 class="" data-start="2558" data-end="2595">📌 Пример использования переменных</h2>
<div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary">
<div><img style="display: block; max-width: 100%; height: auto; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/PrintableForms20062025/zhkwkV7h_image.jpg" alt="image" border="0" /></div>
<div><img style="display: block; max-width: 100%; height: auto; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/PrintableForms20062025/Cst49q4p_image.jpg" alt="image" border="0" /></div>
</div>
<hr class="" data-start="3160" data-end="3163" />
<p class="" data-start="3165" data-end="3344">Инструкции по работе с конструктором печатных форм можно посмотреть <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/PrintingFormDesigner.html" target="_blank" rel="noopener">здесь</a></p>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
</body>

____
- [Перейти в меню](http://wiki.hubex.ru)
