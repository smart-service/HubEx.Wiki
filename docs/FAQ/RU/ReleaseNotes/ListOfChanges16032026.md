---
title: Редактор чек-листов удобный выбор объектов с поддержкой иерархии, Плагины в верхнем меню
description: Поменяли диалоговое окно выбора объектов при создании или редактировании чек-листов, Добавили поддержку плагинов в верхнем меню панели диспетчера
keywords: hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>📋 Чек-листы HubEx: поддержка дополнительных полей-справочников в МП и WEB</strong></h3>
<p class="ds-markdown-paragraph">Мы рады сообщить о расширении функциональности чек-листов. Теперь в них можно использовать дополнительные поля типа&nbsp;<strong>&laquo;Значение из справочника&raquo;</strong>&nbsp;как в веб-версии, так и в мобильном приложении. Это позволит сервисным специалистам привязывать к пунктам проверки конкретные объекты, сотрудников, материалы и другие сущности прямо из системы.</p>
<h4>🚀&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph"><strong>1. Новый тип поля доступен в чек-листах</strong><br />В панели администратора, в разделе дополнительных полей, для типа&nbsp;<strong>&laquo;Значение из справочника&raquo;</strong>&nbsp;теперь можно выбрать область применения&nbsp;<strong>&laquo;Чек-листы&raquo;</strong>. Это позволяет создавать поля, которые будут доступны для заполнения внутри чек-листов в заявках.</p>
<p class="ds-markdown-paragraph"><strong>2. Работа с разными справочниками</strong><br />Поле может ссылаться на один из пяти справочников системы:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Объекты/Оборудование</strong>&nbsp;&mdash; иерархический выбор.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Компании</strong>&nbsp;&mdash; выбор организации.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сотрудники</strong>&nbsp;&mdash; выбор пользователя системы.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Заказчики</strong>&nbsp;&mdash; выбор контактного лица.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Материалы</strong>&nbsp;&mdash; выбор номенклатуры.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>3. Два режима выбора</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Единичный выбор</strong>&nbsp;&mdash; позволяет выбрать только одно значение.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Множественный выбор</strong>&nbsp;&mdash; позволяет отметить несколько значений.</p>
</li>
</ul>
<p><img style="max-width: 80%; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges16032026/1.jpg" alt="" /></p>
<h4>📱&nbsp;<strong>Как это выглядит в мобильном приложении (МП)</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Поля отображаются в чек-листе так же, как и другие атрибуты.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При клике на поле открывается экран выбора, соответствующий типу справочника.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для&nbsp;<strong>множественного выбора</strong>&nbsp;доступны функции&nbsp;<strong>&laquo;Выбрать все&raquo;</strong>, сброс выбора и счетчик выбранных элементов.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Работает&nbsp;<strong>поиск</strong>&nbsp;по названияю.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Выбранные значения в чек-листе отображаются:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">При единичном выборе &mdash; одно значение.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При множественном &mdash; через запятую (длинный текст обрезается с троеточием).</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph">У поля есть&nbsp;<strong>крестик для быстрой очистки</strong>.</p>
</li>
</ul>
<h4>🖥️&nbsp;<strong>Как это выглядит в веб-версии (WEB)</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Интерфейс выбора значений в чек-листе аналогичен МП, но адаптирован для большого экрана.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для справочника &laquo;Объекты&raquo; доступна иерархия с раскрытием родительских элементов.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Выбранные элементы отображаются в поле с возможностью удаления по одному.</p>
</li>
</ul>
<p><img style="max-width: 80%; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges16032026/2.jpg" alt="" /></p>
<h4>🚫&nbsp;<strong>Ограничения в офлайн-режиме</strong></h4>
<p class="ds-markdown-paragraph">Заполнение любых дополнительных полей-справочников в чек-листах в МП&nbsp;<strong>недоступно в офлайн-режиме</strong>. Это связано с тем, что для корректной работы требуется актуальный список значений, который загружается с сервера.</p>
<h3>⚙️&nbsp;<strong>Для администраторов: важные изменения в настройках</strong></h3>
<ul>
<li>
<p class="ds-markdown-paragraph">В разделе&nbsp;<strong>&laquo;Настройки системы &rarr; Дополнительные поля&raquo;</strong>&nbsp;для типа &laquo;Значение из справочника&raquo; в поле&nbsp;<strong>&laquo;Используется для&raquo;</strong>&nbsp;теперь доступен пункт&nbsp;<strong>&laquo;Чек-листы&raquo;</strong>.</p>
</li>
</ul>
<h4>🎯&nbsp;<strong>Преимущества для пользователей</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Точность и единообразие</strong>: Исключается ручной ввод названий, которые могут содержать ошибки.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Скорость заполнения</strong>: Выбор из готового списка происходит быстрее, чем набор текста.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Связанные данные</strong>: В чек-лист можно включать конкретные материалы, инструменты или ответственных лиц, что делает отчётность прозрачнее.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в веб-версии и мобильном приложении HubEx.</strong>&nbsp;Для использования новых возможностей администраторам необходимо настроить соответствующие дополнительные поля в разделе &laquo;Чек-листы&raquo;.</p>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr />
<p class="ds-markdown-paragraph">&nbsp;</p>
<h3><strong>📝 Редактирование выполненных работ (ВР) в офлайн-режиме стало доступно!</strong></h3>
<p class="ds-markdown-paragraph">Мы расширили возможности работы в офлайн-режиме мобильного приложения. Теперь вы можете не только создавать, но и сразу редактировать выполненную работу (ВР), даже если только что создали её без доступа к интернету.</p>
<h4>🔍&nbsp;<strong>Что изменилось?</strong></h4>
<p class="ds-markdown-paragraph">Раньше в офлайне можно было редактировать только те заявки и ВР, которые уже были загружены в кэш приложения ранее (например, открытые до потери связи). Если вы создавали новую ВР, находясь в офлайне, и хотели тут же её отредактировать &mdash; это было невозможно.</p>
<p class="ds-markdown-paragraph"><strong>Теперь</strong>&nbsp;сценарий работает полностью:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Вы создаёте заявку или открываете существующую.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Переходите в офлайн-режим (сознательно или из-за потери сети).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Создаёте новую выполненную работу (ВР) прямо в этой заявке.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сразу же открываете созданную ВР</strong>&nbsp;&mdash; она доступна для редактирования всех полей.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вносите изменения, заполняете чек-листы, добавляете материалы.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При появлении интернета все данные автоматически синхронизируются, и в заявке отобразятся корректные итоговые изменения.</p>
</li>
</ol>
<h4>⚙️&nbsp;<strong>Как это работает технически</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">При создании ВР в офлайне система сохраняет её локально и присваивает временный идентификатор.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При попытке открыть эту ВР приложение работает с локальной копией, позволяя её полноценно редактировать.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Все изменения фиксируются в очереди на отправку.</p>
</li>
<li>
<p class="ds-markdown-paragraph">После восстановления соединения созданная ВР регистрируется на сервере, а все внесённые в неё правки применяются к уже реальной записи.</p>
</li>
</ul>
<h4>🎯&nbsp;<strong>Преимущества для пользователя</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Непрерывность работы</strong>: Не нужно ждать появления сети, чтобы оформить или исправить выполненную работу.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сохранение данных</strong>: Риск потери информации из-за нестабильной связи сведён к минимуму.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Привычный интерфейс</strong>: Редактирование ВР в офлайне выглядит и работает так же, как и в онлайне.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в последней версии мобильного приложения HubEx.</strong>&nbsp;Просто создавайте и редактируйте выполненные работы, даже если интернет временно недоступен!</p>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
