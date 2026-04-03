---
title: Вставка скриншотов в описание заявки, Улучшенная надёжность доставки вебхуков, Предпросмотр PDF-файлов в веб-версии HubEx, Кастомный паспорт объекта для QR-кодов, Сканирование Data Matrix в МП — Этап 2 Контроль списания маркируемых материалов
description: Добавили возможность вставлять изображение в описание заявки, Улучшели работу вебхуков, Добавили возможность предпросмотра PDF прямо в браузере, Добавили возможность заказа кастомного паспорта объектов, Реализовали второй этап для Data Matrix по контролю списания маркируемых материалов
keywords: Скриншот, описание, вебхуки, PDF, предпросмотр, паспорт, QR, Data Matrix, DataMatrix, Дата Матрикс, списание, маркируемые материалы, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>🖼️ Вставка скриншотов в описание заявки</strong></h3>
<p class="ds-markdown-paragraph">Теперь вы можете добавлять изображения (скриншоты, фотографии, схемы) прямо в поле&nbsp;<strong>&laquo;Описание заявки&raquo;</strong>&nbsp;&mdash; как в веб-версии, так и в мобильном приложении. Это делает описание проблемы или задачи более наглядным и информативным.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph"><strong>В веб-версии и мобильном приложении:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В поле&nbsp;<strong>&laquo;Описание заявки&raquo;</strong>&nbsp;появился визуальный редактор, поддерживающий вставку изображений.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Изображения можно&nbsp;<strong>вставлять из буфера обмена</strong>&nbsp;(например, сделав скриншот и нажав&nbsp;<code>Ctrl+V</code>&nbsp;/&nbsp;<code>Cmd+V</code>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Изображения можно&nbsp;<strong>вставлять через вложения из редактора</strong>&nbsp;.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вставленные изображения сразу отображаются в поле в виде миниатюр.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При клике на миниатюру открывается полноразмерный просмотр изображения.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Размер изображения:</strong><br />Ограничен настройками системы для загружаемых файлов (аналогично другим вложениям).</p>
<h4>✨&nbsp;<strong>Как это работает?</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Откройте карточку заявки (создание или редактирование).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Перейдите в поле&nbsp;<strong>&laquo;Описание заявки&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Сделайте скриншот или скопируйте изображение в буфер обмена.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вставьте его в поле (<code>Ctrl+V</code>&nbsp;/&nbsp;<code>Cmd+V</code>) или добавьте изображение через вложения в редакторе описания.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Изображение автоматически загружается на сервер, и в редакторе появляется его миниатюра.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При сохранении заявки изображение остаётся в описании.</p>
</li>
</ol>
<h4>🖥️&nbsp;<strong>Отображение ранее загруженных изображений</strong></h4>
<p class="ds-markdown-paragraph">При открытии уже существующей заявки все ранее добавленные изображения корректно отображаются в поле описания.</p>
<h4>🗑️&nbsp;<strong>Удаление изображения</strong></h4>
<p class="ds-markdown-paragraph">Чтобы удалить изображение &mdash; просто сотрите его из текста описания (как обычный символ). Сам файл при этом остаётся на сервере (как и для всех вложений в системе).</p>
<h4>🚀&nbsp;<strong>Преимущества для пользователей</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Наглядность</strong>: скриншот ошибки или схема оборудования лучше объясняют проблему, чем текст.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Экономия времени</strong>: не нужно сохранять изображение на диск, а потом прикреплять файлом &mdash; достаточно вставить скопированное изображение.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Единый опыт</strong>: одинаково работает в веб-версии и мобильном приложении.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в веб-версии и мобильном приложении HubEx.</strong>&nbsp;Делайте описание заявок ещё понятнее с помощью изображений!</p>
<hr />
<h3><strong>🔄 Улучшенная надёжность доставки вебхуков</strong></h3>
<p class="ds-markdown-paragraph">Мы внедрили новый фоновый механизм отправки вебхуков, который гарантирует более надёжную доставку событий в интегрированные системы. Теперь отправка происходит через очередь с возможностью повторных попыток при сбоях.</p>
<h4>🎯&nbsp;<strong>Что изменилось?</strong></h4>
<p class="ds-markdown-paragraph"><strong>Новый механизм доставки:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Вебхуки ставятся в&nbsp;<strong>очередь по тенанту</strong>, что позволяет обрабатывать их независимо друг от друга.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При недоступности целевого сервера или сетевой ошибке система автоматически&nbsp;<strong>повторяет отправку</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Очередь обрабатывается в фоновом режиме, не блокируя основные операции пользователя.</p>
</li>
</ul>
<h4>✨&nbsp;<strong>Преимущества нового подхода</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Надёжность</strong>: Событие будет доставлено даже при временных сбоях на стороне получателя.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Масштабируемость</strong>: Очереди по тенантам позволяют обрабатывать большие объёмы без взаимных блокировок.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Прозрачность</strong>: Все отправки логируются для диагностики проблем.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Изоляция</strong>: Проблемы с одним вебхуком не влияют на отправку других.</p>
</li>
</ul>
<h4>🛠️&nbsp;<strong>Как это работает</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">При наступлении события система не отправляет вебхук мгновенно, а помещает его в очередь.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Фоновый процесс последовательно обрабатывает события из очереди.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При успешной отправке событие удаляется из очереди.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При ошибке система делает повторные попытки с увеличивающимися интервалами.</p>
</li>
</ol>
<h4>📊&nbsp;<strong>Какие события доставляются</strong></h4>
<p class="ds-markdown-paragraph">Все ранее настроенные вебхуки (для заявок, объектов, материалов и других сущностей) теперь работают через новый надёжный механизм.</p>
<hr />
<p class="ds-markdown-paragraph"><strong>Изменение уже активна на стороне backend.</strong>&nbsp;Вам не нужно перенастраивать существующие вебхуки &mdash; они автоматически перешли на новую систему доставки.</p>
<hr>
<h3><strong>📄 Предпросмотр PDF-файлов в веб-версии HubEx</strong></h3>
<p class="ds-markdown-paragraph">Теперь вы можете просматривать PDF-файлы (сертификаты, акты, счета, сервисные листы) прямо в веб-интерфейсе HubEx, без необходимости скачивать их на компьютер.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph"><strong>Всплывающее окно с полноценным просмотром PDF:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Открывается по клику на иконку или название PDF-файла.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Работает аналогично существующему просмотру изображений.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Доступные функции просмотра:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">📄&nbsp;<strong>Навигация по страницам</strong>&nbsp;&mdash; кнопки &laquo;Предыдущая&raquo; / &laquo;Следующая&raquo;.</p>
</li>
<li>
<p class="ds-markdown-paragraph">🔍&nbsp;<strong>Масштабирование</strong>&nbsp;(зум) &mdash; приближайте и отдаляйте страницы.</p>
</li>
<li>
<p class="ds-markdown-paragraph">🔢&nbsp;<strong>Счётчик страниц</strong>&nbsp;&mdash; отображается номер текущей страницы и общее количество.</p>
</li>
</ul>
<h4>✨&nbsp;<strong>Где это работает?</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Во всех разделах системы, где есть вложенные PDF-файлы:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Заявки (вложения, выполненные работы, чек-листы).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Объекты и оборудование.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Договоры и компании.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Любые другие места с файловыми вложениями.</p>
</li>
</ul>
</li>
</ul>
<h4>🖥️&nbsp;<strong>Как это выглядит</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">На иконке PDF-файла появляется значок для предпросмотра.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При клике открывается модальное окно с встроенным PDF-просмотрщиком.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вы можете листать страницы, приближать и отдалять документ.</p>
</li>
<li>
<p class="ds-markdown-paragraph">При необходимости &mdash; скачать файл (кнопка остаётся доступной).</p>
</li>
</ol>
<h4>🎯&nbsp;<strong>Преимущества для пользователей</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Экономия времени</strong>&nbsp;&mdash; не нужно скачивать файл, чтобы быстро посмотреть его содержимое.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Удобство</strong>&nbsp;&mdash; единый интерфейс для всех типов документов.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Быстрая навигация</strong>&nbsp;&mdash; листайте страницы и ищите нужную информацию без лишних действий.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно в веб-версии HubEx.</strong>&nbsp;Откройте любой PDF-файл в системе и попробуйте новый удобный просмотр!</p>
<hr>
<h3><strong>🔗 Кастомный паспорт объекта для QR-кодов</strong></h3>
<p class="ds-markdown-paragraph">Теперь QR-коды с объектов могут вести на ваш собственный домен вместо стандартного&nbsp;<code>plate.hubex.ru</code>. Это позволяет использовать корпоративный брендинг для паспортов объектов и повышает доверие пользователей.</p>
<h4>🎯&nbsp;<strong>Что изменилось?</strong></h4>
<p class="ds-markdown-paragraph"><strong>Раньше:</strong><br />Все QR-коды вели на стандартный домен HubEx.</p>
<p class="ds-markdown-paragraph"><strong>Теперь:</strong><br />Вы можете настроить&nbsp;<strong>кастомный URL</strong>&nbsp;(например,&nbsp;<code>passport.вашакомпания.ru</code>). При сканировании QR-кода пользователь попадает на ваш домен, а паспорт объекта открывается уже в рамках вашего бренда.</p>
<h4>✨&nbsp;<strong>Как это работает?</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Вы обращаетесь к нам с запросом на создание брендированного паспорта объекта.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Мы связываем ваш тенант добавляем в Ваш тенант новый паспорт.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Все QR-коды на ваших объектах автоматически начинают вести на ваш домен.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Старые QR-коды продолжают работать &mdash; ничего перевыпускать не нужно.</p>
</li>
</ol>
<h4>🎯&nbsp;<strong>Преимущества для вас</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Ваш бренд</strong>&nbsp;&mdash; паспорта объектов открываются на вашем домене.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Доверие пользователей</strong>&nbsp;&mdash; кастомный URL выглядит профессионально и безопасно.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкость</strong>&nbsp;&mdash; возможность изменить домен при необходимости.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Совместимость</strong>&nbsp;&mdash; существующие QR-коды не требуют замены.</p>
</li>
</ul>
<h4>💰&nbsp;<strong>Как заказать услугу?</strong></h4>
<p class="ds-markdown-paragraph">Функционал предоставляется по запросу. Для создания брендированного паспорта объектов обратитесь к вашему менеджеру или оставьте заявку по ссылке:</p>
<p class="ds-markdown-paragraph"><strong><a target="_blank" rel="noreferrer">👉 </a><a href="https://hubex.ru/services/automate#poluchit_konsultatsiyu_uslugi" target="_blank">Заказать настройку кастомного домена для паспортов объектов</a></strong></p>
<hr />
<p class="ds-markdown-paragraph"><strong>Новый функционал уже доступен.</strong>&nbsp;Обращайтесь &mdash; поможем настроить ваш корпоративный домен для паспортов объектов!</p>
<hr>
<h3><strong>📱 Сканирование Data Matrix в МП &mdash; Этап 2: Контроль списания маркируемых материалов</strong></h3>
<p class="ds-markdown-paragraph">Мы завершили второй этап внедрения работы с маркированными материалами. Теперь система контролирует, что все обязательные коды Data Matrix отсканированы перед закрытием заявки.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph"><strong>1. Признак &laquo;Маркируемый материал&raquo; в карточке номенклатуры (WEB)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В разделе&nbsp;<strong>&laquo;Склады &rarr; Материалы&raquo;</strong>&nbsp;добавлен переключатель&nbsp;<strong>&laquo;Маркируемый материал&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">По умолчанию признак выключен (<code>false</code>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Доступна фильтрация списка материалов по этому признаку.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>2. Визуальная индикация в мобильном приложении</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В списке выполненных работ маркируемые материалы отмечены специальной иконкой (Data Matrix).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пользователь сразу видит, какие позиции требуют сканирования кодов.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>3. Контроль при смене статуса заявки (МП)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Если для статуса заявки в настройках&nbsp;<strong>&laquo;Поля на форме заявки&raquo;</strong>&nbsp;включено требование&nbsp;<code>RWM</code>&nbsp;к полю &laquo;Выполненные работы&raquo;, при попытке перевести заявку на этот статус срабатывает проверка.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Система проверяет, что для&nbsp;<strong>каждого маркируемого материала</strong>&nbsp;количество отсканированных кодов&nbsp;<strong>равно</strong>&nbsp;списанному количеству.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Если условие не выполнено &mdash;&nbsp;<strong>смена статуса блокируется</strong>, и пользователь видит ошибку.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>4. Отображение в веб-версии</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В карточке заявки для маркируемых материалов отображается количество отсканированных кодов и иконка для просмотра списка.</p>
</li>
</ul>
<h4>🚀&nbsp;<strong>Преимущества для бизнеса</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Юридическая защита</strong>&nbsp;&mdash; гарантия, что все маркируемые материалы списаны корректно, с соблюдением требований законодательства.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Прозрачность</strong>&nbsp;&mdash; диспетчеры и руководители видят статус сканирования в веб-интерфейсе.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Контроль на месте</strong>&nbsp;&mdash; исполнитель не может закрыть заявку, не отсканировав все обязательные коды.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкость настройки</strong>&nbsp;&mdash; администратор сам решает, какие материалы считаются маркируемыми, и для каких статусов требуется обязательное сканирование.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно.</strong>&nbsp;Администраторам необходимо:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">В карточках соответствующих материалов включить признак&nbsp;<strong>&laquo;Маркируемый материал&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">В настройках&nbsp;<strong>&laquo;Поля на форме заявки&raquo;</strong>&nbsp;для поля &laquo;Выполненные работы&raquo; включить опцию&nbsp;<code>RWM</code>&nbsp;для нужных статусов.</p>
</li>
</ol>
<p class="ds-markdown-paragraph">После этого исполнители в мобильном приложении не смогут перевести заявку на эти статусы, не отсканировав все коды.</p>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
