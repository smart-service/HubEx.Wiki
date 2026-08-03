---
title: 'Исправление перевода пользователей из сотрудников в заказчики и обратно, Расширение истории изменений: Необходимые материалы, Дочерние заявки, Акт, Безопасное удаление стадий, Восстановить по умолчанию в настройке формы заявки, Оптимизация карточки объекта, оборудования'
description: Добавили корректный перевод пользователей между заказчиками и сотрудникам, Расширили историю изменений, Добавили сброс настройки формы заявки по умолчанию, Добавили отображения зависимостей в жизненном цикле при удалении стадии, Оптимизировали работы карточки объекта, оборудования
keywords: История изменений, заказчики, сотрудники, жизненный цикл, стадия, Необходимые материалы, Дочерние заявки, акт, объект, hubex, хабекс, хубекс, хабикс
category: releasenotes
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>🔄 Исправлена логика переноса трудоустройств при изменении типа пользователя</strong></h3>
<p class="ds-markdown-paragraph">Мы исправили ошибку в логике изменения типа пользователя (сотрудник &harr; заказчик), которая могла приводить к некорректному отображению списка компаний или потере данных о трудоустройстве.</p>
<h4>🐞&nbsp;<strong>Суть проблемы</strong></h4>
<p class="ds-markdown-paragraph">В системе существовал следующий проблемный сценарий:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Заказчик</strong>&nbsp;был привязан к&nbsp;<strong>двум компаниям</strong>&nbsp;(имел 2 трудоустройства).</p>
</li>
<li>
<p class="ds-markdown-paragraph">При переводе такого пользователя в&nbsp;<strong>сотрудники</strong>&nbsp;в его профиле оставалось только&nbsp;<strong>одно трудоустройство</strong>&nbsp;(первое из списка). Второе не отображалось.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Если затем добавить сотруднику новую компанию и перевести его обратно в&nbsp;<strong>заказчики</strong>, в профиле неожиданно появлялись&nbsp;<strong>все три трудоустройства</strong>, включая то, которое ранее "пропало".</p>
</li>
</ol>
<h4>🛠️&nbsp;<strong>Что было исправлено</strong></h4>
<p class="ds-markdown-paragraph">Мы переработали логику работы, чтобы обеспечить корректный и предсказуемый перенос данных о трудоустройстве:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>При переводе Заказчика &rarr; Сотрудника:</strong></p>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges02012026
/1.png"/></div></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В профиле сотрудника теперь сохраняются&nbsp;<strong>все актуальные трудоустройства</strong>, которые были у пользователя в статусе заказчика.</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>При переводе Сотрудника &rarr; Заказчика:</strong></p>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges02012026
/2.png"/></div></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В профиле заказчика теперь остаются&nbsp;<strong>только те трудоустройства, которые были явно указаны в его форме как сотрудника</strong>. Это исключает появление "лишних" или исторических записей.</p>
</li>
</ul>
</li>
</ul>
<h4>🎯&nbsp;<strong>Результат для пользователей и администраторов</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Предсказуемость</strong>: При изменении типа пользователя список его компаний (трудоустройств) больше не "теряется" и не "размножается" неожиданным образом.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Целостность данных</strong>: Информация о трудоустройстве переносится корректно и соответствует тому, что видит администратор в интерфейсе на момент изменения.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Стабильность</strong>: Исправление исключает появление ошибок в смежных процессах, которые могли опираться на некорректные данные о трудоустройстве пользователя.</p>
</li>
</ul>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr />
<p class="ds-markdown-paragraph">&nbsp;</p>
<h3><strong>📋 Расширена история изменений в заявках: теперь логируются материалы, дочерние заявки и акты</strong></h3>
<p class="ds-markdown-paragraph">В систему HubEx добавлено детальное логирование изменений по трем важным вкладкам карточки заявки. Это повышает прозрачность, облегчает аудит и помогает восстановить ход работы над задачей.</p>
<h4>🔍&nbsp;<strong>Что теперь отслеживается?</strong></h4>
<h4>1.&nbsp;<strong>Вкладка &laquo;Необходимые материалы&raquo;</strong></h4>
<p class="ds-markdown-paragraph"><strong>Логируются все операции с материалами:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Добавление</strong>&nbsp;нового материала в заявку.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Удаление</strong>&nbsp;материала из списка.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Изменение количества</strong>&nbsp;уже добавленного материала.</p>
</li>
</ul>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges02012026
/3.png"/></div></p>
<hr />
<h4>2.&nbsp;<strong>Вкладка &laquo;Дочерние заявки&raquo;</strong></h4>
<p class="ds-markdown-paragraph"><strong>Логируется привязка родительской заявки.</strong><br />Система фиксирует номер заявки, для которой текущая задача становится дочерней. Это работает для обоих сценариев:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Когда заявку создают отдельно и вручную заполняют поле &laquo;Родительская заявка&raquo;.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Когда дочернюю заявку создают напрямую из соответствующей вкладки родительской заявки.</p>
</li>
</ul>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr />
<h4>3.&nbsp;<strong>Вкладка &laquo;Акт выполненных работ&raquo;</strong></h4>
<p class="ds-markdown-paragraph"><strong>Логируются ключевые действия по закрывающему документу:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Получение подписи</strong>&nbsp;заказчика (фиксируется факт подписания).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Данные принявшего акт</strong>: ФИО и должность сотрудника.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph">🎯&nbsp;<strong>Преимущества нововведения</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Полная картина</strong>: Теперь история изменений заявки отражает работу не только с основными полями, но и с комплектацией, связанными задачами и документами.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Повышенная ответственность</strong>: Все операции фиксируются с указанием автора и времени, что способствует дисциплине и упрощает разбор спорных ситуаций.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Удобство аудита</strong>: Аналитикам и руководителям проще отслеживать ход выполнения сложных заявок, требующих материалов или состоящих из нескольких задач.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Восстановление данных</strong>: В случае ошибок легче понять, какие именно изменения были внесены и кем.</p>
</li>
</ul>
<h4>⚙️&nbsp;<strong>Как посмотреть историю?</strong></h4>
<p class="ds-markdown-paragraph">Все перечисленные изменения отображаются в&nbsp;<strong>общей истории изменений заявки</strong>&nbsp;(вкладка &laquo;История изменений&raquo;). Записи появляются автоматически при сохранении заявки после редактирования соответствующих вкладок.</p>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr />
<h3><strong>🛡️ Безопасное удаление стадий заявок с проверкой на использование</strong></h3>
<p class="ds-markdown-paragraph">Мы внедрили новую процедуру удаления стадий заявок, которая защищает от случайного нарушения настроенных бизнес-процессов. Теперь перед удалением система проверяет, используется ли стадия в жизненных циклах.</p>
<h4>🔍&nbsp;<strong>Что изменилось в интерфейсе?</strong></h4>
<p class="ds-markdown-paragraph">Раньше при нажатии кнопки&nbsp;<strong>&laquo;Удалить&raquo;</strong>&nbsp;для стадии отправлялся запрос на удаление без каких-либо предупреждений.<br />Теперь перед удалением срабатывает<strong>&nbsp;проверка</strong>:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Система анализирует, в каких типах заявок и переходах участвует выбранная стадия.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Если стадия не используется нигде</strong>&nbsp;&mdash; появляется стандартное подтверждение удаления.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Если стадия используется</strong>&nbsp;&mdash; система покажет&nbsp;<strong>детальное предупреждение</strong>&nbsp;со списком всех типов заявок и переходов, где она задействована.</p>
</li>
</ol>
<h4>⚠️&nbsp;<strong>Как выглядит новое предупреждение?</strong></h4>
<p class="ds-markdown-paragraph">Если стадия используется, администратор увидит сообщение следующего формата:</p>
<p class="ds-markdown-paragraph"><strong>&laquo;Данная стадия участвует в ЖЦ следующих типов заявок:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Ремонт</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><code>[Название удаляемой стадии]</code>&nbsp;&rarr; Завершить работу по заявке</p>
</li>
<li>
<p class="ds-markdown-paragraph"><code>[Название удаляемой стадии]</code>&nbsp;&rarr; В пути</p>
</li>
<li>
<p class="ds-markdown-paragraph">Назначена &rarr;&nbsp;<code>[Название удаляемой стадии]</code></p>
</li>
<li>
<p class="ds-markdown-paragraph">Новая &rarr;&nbsp;<code>[Название удаляемой стадии]</code>&raquo;</p>
</li>
</ul>
</li>
</ul>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges02012026
/4.png"/></div></p>
<h4>🎯&nbsp;<strong>Зачем это нужно?</strong></h4>
<p class="ds-markdown-paragraph">Новый механизм помогает администраторам:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Избежать ошибок</strong>: Исключает случайное удаление стадий, критичных для работы бизнес-процессов.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Предотвратить &laquo;битые&raquo; переходы</strong>: Защищает от появления &laquo;висящих&raquo; ссылок в жизненных циклах заявок.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Принять осознанное решение</strong>: Дает полную информацию перед выполнением необратимого действия.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Упростить аудит</strong>: Позволяет быстро понять, в каких процессах задействована стадия.</p>
</li>
</ul>
<h4>💡&nbsp;<strong>Важные детали</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Удаление все равно возможно</strong>: Система только&nbsp;<strong>предупреждает</strong>, но не блокирует удаление. Окончательное решение остается за администратором.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>После исправлений</strong>: Если администратор зайдет в настройки жизненных циклов и удалит все переходы, связанные со стадией, то при следующей попытке удаления предупреждение&nbsp;<strong>не появится</strong>&nbsp;&mdash; будет стандартное окно подтверждения.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Полная картина</strong>: В предупреждении сначала перечисляются переходы&nbsp;<strong>ИЗ</strong>&nbsp;удаляемой стадии, затем переходы&nbsp;<strong>В</strong>&nbsp;неё, что делает список максимально наглядным.</p>
</li>
</ul>
<p>&nbsp;</p>
<hr />
<h3><strong>🔧 Новая кнопка &laquo;Восстановить по умолчанию&raquo; в настройке формы заявки</strong></h3>
<p class="ds-markdown-paragraph">Администраторы HubEx теперь могут одним кликом вернуть внешний вид формы заявки к исходному состоянию. Это упрощает настройку и исправление ошибок конфигурации.</p>
<h4>🎯&nbsp;<strong>Что делает новая функция?</strong></h4>
<p class="ds-markdown-paragraph">В интерфейсе настройки формы заявки, рядом с другими кнопками действий, появилась новая опция&nbsp;<strong>&laquo;Восстановить по умолчанию&raquo;</strong>. Она позволяет:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Сбросить все пользовательские изменения в расположении блоков и полей.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вернуть форму к её изначальному, системному виду.</p>
</li>
</ul>
<h4>🔄&nbsp;<strong>Как это работает?</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">В шапке раздела настройки формы заявки нажмите на кнопку меню (&nbsp;<strong><code>⋮</code></strong>&nbsp;).</p>
</li>
<li>
<p class="ds-markdown-paragraph">В выпадающем списке выберите пункт&nbsp;<strong>&laquo;Восстановить по умолчанию&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Система мгновенно загрузит и применит стандартный шаблон формы.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вы увидите форму в её первоначальной конфигурации.</p>
</li>
</ol>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges02012026
/5.png"/></div></p>
<h4>💾&nbsp;<strong>Что происходит после восстановления?</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Если вы хотите сохранить дефолтный вид</strong>&nbsp;&mdash; просто нажмите основную кнопку&nbsp;<strong>&laquo;Сохранить&raquo;</strong>. Система обновит конфигурацию формы.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Если вы передумали</strong>&nbsp;&mdash; нажмите&nbsp;<strong>&laquo;Отменить&raquo;</strong>. Все изменения, сделанные кнопкой восстановления, будут отменены, и форма вернётся к своему последнему сохранённому состоянию.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Преимущества для администраторов:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Экономия времени</strong>: Не нужно вручную удалять или перемещать десятки полей для отката изменений.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Быстрый старт</strong>: Легко вернуться к чистой конфигурации для тестирования или создания новой кастомной формы &laquo;с нуля&raquo;.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Исправление ошибок</strong>: Простой способ устранить проблемы с вёрсткой или некорректной настройкой полей.</p>
</li>
</ul>
<p>&nbsp;</p>
<hr />
<h3><strong>⚙️ Оптимизация: планы помещений загружаются только при наличии прав</strong></h3>
<p>Мы оптимизировали работу веб-интерфейса при открытии формы объекта. Теперь запросы для отображения разделов &laquo;Планы помещений&raquo; загружаются только у пользователей, имеющих соответствующие права.</p>
<h4>🎯&nbsp;<strong>Что изменилось?</strong></h4>
<p class="ds-markdown-paragraph">Раньше при открытии или редактировании карточки объекта система&nbsp;<strong>всегда</strong>&nbsp;отправляла запросы для получения данных о планах помещений, независимо от прав пользователя.<br />Теперь система&nbsp;<strong>проверяет права</strong>&nbsp;пользователя, полученные при авторизации, и загружает эти данные&nbsp;<strong>только при необходимости</strong>.</p>
<h4>🔐&nbsp;<strong>Какие права проверяются?</strong></h4>
<p class="ds-markdown-paragraph">Система анализирует наличие двух полномочий:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">&laquo;Планы помещений - планы на форме объекта&raquo; (право на просмотр).</p>
</li>
<li>
<p class="ds-markdown-paragraph">&laquo;Планы помещений - добавление и модификация существующих планов&raquo; (право на управление).</p>
</li>
</ol>
<h4>⚡&nbsp;<strong>Как это работает?</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">При открытии формы редактирования/копирования объекта система проверяет, есть ли у текущего пользователя хотя бы одно из двух указанных выше полномочий.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Если прав нет</strong>&nbsp;&mdash; запросы на получение плана объекта&nbsp;<strong>не отправляются:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Соответствующий раздел интерфейса (&laquo;Планы помещений&raquo;)&nbsp;<strong>не отображается</strong>.</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Если права есть</strong>&nbsp;&mdash; запросы отправляются, данные загружаются, и раздел отображается как обычно.</p>
</li>
</ol>
<h4>🚀&nbsp;<strong>Результат и преимущества</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Ускорение загрузки формы</strong>: Для пользователей без соответствующих прав форма объекта теперь открывается быстрее, так как исключаются лишние сетевые запросы.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Снижение нагрузки</strong>: Уменьшается нагрузка как на браузер пользователя, так и на серверную часть приложения.</p>
</li>
</ul>
<p class="ds-markdown-paragraph">&nbsp;</p>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
