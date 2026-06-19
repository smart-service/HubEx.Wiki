---
title: Маркировка Честный знак (Data Matrix)
description: Общая информация о маркировки Честный зкак - Data Matrix, для чего нужен и как использовать
keywords: Маркировка, Честный знак, Честный, Знак, DataMatrix, Data Matrix, Дата Матрикс, материалы, списание, Выполненные работы, Выполнение, hubex, хабекс, хубекс, хабикс
---

#### Data Matrix в HubEx: основные понятия
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#chapter1">Что такое Data Matrix и система «Честный ЗНАК»;</a></li>
    <li><a href="#chapter2">Из каких шагов состоит настройка и работа с Data Matrix;</a></li>
    <li><a href="#chapter3">Шаг 1. Включение функции сканирования через настройку роли;</a></li>
    <li><a href="#chapter4">Шаг 2. Настройка маркируемых материалов;</a></li>
    <li><a href="#chapter5">Шаг 3. Настройка обязательности сканирования для статусов заявки;</a></li>
    <li><a href="#chapter6">Сканирование кодов в мобильном приложении (для исполнителя);</a></li>
    <li><a href="#chapter7">Просмотр отсканированных кодов в веб-версии.</a></li>
</ul>
</html>
<body>
<h3 id="chapter1" dir="auto">Что такое Data Matrix и система &laquo;Честный ЗНАК&raquo;</h3>
<p dir="auto"><strong>Data Matrix</strong> &mdash; это двумерный штрихкод, который наносится на каждую единицу товара и содержит уникальный цифровой код. <strong>&laquo;Честный ЗНАК&raquo;</strong> &mdash; государственная система обязательной маркировки товаров в России. Она вводится поэтапно для разных категорий продукции и направлена на борьбу с подделками, повышение безопасности и обеспечение прозрачности поставок.</p>
<p dir="auto">Под обязательную маркировку попадают, в частности:</p>
<ul dir="auto">
<li class="text-start ">С 1 сентября 2025 &mdash; масла;</li>
<li class="text-start ">С 1 октября 2025 &mdash; цемент, гипс, известь, сухие строительные смеси;</li>
<li class="text-start ">С 1 декабря 2025 &mdash; герметики, монтажные пены, шпатлёвки, мастики, пасты;</li>
<li class="text-start ">С 2026 года &mdash; перечень запчастей.</li>
</ul>
<p dir="auto">В HubEx реализована возможность сканирования кодов Data Matrix при списании маркированных материалов по заявке. Это позволяет соблюдать требования законодательства и вести юридически корректный учёт списаний.</p>
<p dir="auto">Функционал доступен на тарифах выше &laquo;Минимального&raquo;.</p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter2" dir="auto">Общая схема работы</h3>
<p dir="auto">Настройка работы с Data Matrix в HubEx состоит из трех шагов:</p>
<ol dir="auto" start="1">
<li class="text-start"><strong>Включение полномочия</strong> &mdash; администратор включает переключатель &laquo;Сканирование кодов для списания единиц материалов&raquo; в настройках роли.</li>
<li class="text-start"><strong>Настройка маркируемых материалов</strong> &mdash; в карточках материалов включается признак &laquo;Маркируемый материал&raquo;.</li>
<li class="text-start"><strong>Настройка обязательности сканирования</strong> &mdash; в &laquo;Полях на форме заявки&raquo; для поля &laquo;Выполнение&raquo; устанавливается уровень доступа RWM для нужных стадий и ролей.</li>
</ol>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter3" dir="auto">Шаг 1. Включение функции сканирования через настройку роли</h3>
<p dir="auto">Первым делом администратору необходимо включить возможность сканирования для нужной роли:</p>
<ol dir="auto" start="1">
<li class="text-start">Перейдите в <strong>Консоль администратора</strong> &rarr; <strong>Администрирование</strong> &rarr; <strong>Роли</strong>.</li>
<li class="text-start">Выберите роль, которой требуется доступ к сканированию (например, &laquo;Сервисный специалист&raquo;).</li>
<li class="text-start">Найдите блок полномочий <strong>&laquo;Выполненные работы и стоимости&raquo;</strong>.</li>
<li class="text-start">В подразделе <strong>&laquo;Элементы интерфейса&raquo;</strong> включите переключатель <strong>&laquo;Сканирование кодов для списания единиц материалов&raquo;</strong>.</li>
<li class="text-start">Сохраните изменения.</li>
</ol>
<p dir="auto"><strong>Обратите внимание!</strong> Если переключатель выключен &mdash; элементы интерфейса для сканирования в мобильном приложении отображаться не будут.</p>
<p dir="auto">Подробнее читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a></p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter4" dir="auto">Шаг 2. Настройка маркируемых материалов</h3>
<p dir="auto">После включения полномочия необходимо отметить, какие именно материалы подлежат обязательной маркировке:</p>
<ol dir="auto" start="1">
<li class="text-start">Перейдите в раздел <strong>&laquo;Склады &rarr; Материалы&raquo;</strong>.</li>
<li class="text-start">Откройте карточку нужного материала.</li>
<li class="text-start">Включите переключатель <strong>&laquo;Маркируемый материал&raquo;</strong>.</li>
<li class="text-start">Сохраните изменения.</li>
</ol>
<p dir="auto">Повторите эти действия для всех материалов, по которым требуется сканирование Data Matrix. В списке материалов доступна фильтрация по этому признаку.</p>
<p dir="auto"><strong>Обратите внимание!</strong> В мобильном приложении маркируемые материалы будут отмечены специальной иконкой Data Matrix &mdash; исполнитель сразу видит, какие позиции требуют сканирования.</p>
<p dir="auto">Подробнее читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html">Загрузка материалов и создание складов</a></p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter5" dir="auto">Шаг 3. Настройка обязательности сканирования для статусов заявки</h3>
<p dir="auto">Чтобы система контролировала обязательное сканирование перед закрытием заявки, настройте права доступа к полю &laquo;Выполнение&raquo;:</p>
<ol dir="auto" start="1">
<li class="text-start">Перейдите в <strong>Консоль администратора</strong> &rarr; <strong>Настройки заявки</strong> &rarr; <strong>Поля на форме заявки</strong>.</li>
<li class="text-start">Укажите, для каких <strong>Ролей</strong> и <strong>Стадий</strong> требуется настройка (например, роль &laquo;Сервисный специалист&raquo; и стадия &laquo;Выполнена&raquo;).</li>
<li class="text-start">В открывшейся таблице найдите поле <strong>&laquo;Выполнение&raquo;</strong>.</li>
<li class="text-start">Установите для него уровень доступа <strong>RWM</strong> (чтение и обязательная запись) для нужных стадий и ролей.</li>
<li class="text-start">Сохраните изменения.</li>
</ol>
<p dir="auto"><strong>Как это работает:</strong> при попытке перевести заявку на статус с требованием RWM для поля &laquo;Выполнение&raquo; система проверит, что для каждого маркируемого материала количество отсканированных кодов равно списанному количеству. Если условие не выполнено &mdash; смена статуса блокируется, и исполнитель видит сообщение об ошибке.</p>
<p dir="auto">Подробнее читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка доступа к полям заявки</a></p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter6" dir="auto">Сканирование кодов в мобильном приложении (для исполнителя)</h3>
<ol dir="auto" start="1">
<li class="text-start">Откройте заявку в мобильном приложении HubEx и перейдите в раздел <strong>&laquo;Выполнение&raquo;</strong>.</li>
<li class="text-start">Добавьте материал к списанию &mdash; у каждой позиции появится поле с количеством отсканированных <strong>&laquo;Кодов маркировки&raquo;</strong>.</li>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges16042026/2.jpg" alt="" /></p>
<li class="text-start">Нажмите на материал &mdash; откроется экран <strong>&laquo;Добавить материалы&raquo;</strong>, где отображается:
<ul dir="auto">
<li class="text-start ">наименование и количество материала к списанию;</li>
<li class="text-start ">список уже привязанных кодов;</li>
<li class="text-start ">кнопка <strong>&laquo;Сканировать&raquo;</strong>.</li>
</ul>
</li>
<li class="text-start">Нажмите <strong>&laquo;Сканировать&raquo;</strong> &mdash; активируется камера устройства. После распознавания код автоматически добавляется в список.</li>
<li class="text-start">Повторите сканирование для каждой единицы материала.</li>
</ol>
<p dir="auto"><strong>Обратите внимание!</strong></p>
<ul dir="auto">
<li class="text-start ">Система не позволит добавить больше кодов, чем указано в количестве материала к списанию.</li>
<li class="text-start ">Ошибочно отсканированный код можно удалить из списка.</li>
<li class="text-start ">Сканирование работает как онлайн, так и <strong>офлайн</strong> &mdash; данные сохраняются локально и синхронизируются с сервером автоматически при появлении интернета.</li>
</ul>
<hr class=" border-gray-100 dark:border-gray-850" />
<h3 id="chapter7" dir="auto">Просмотр отсканированных кодов в веб-версии</h3>
<p dir="auto">После того как исполнитель отсканировал коды Data Matrix в мобильном приложении, диспетчер или руководитель может проконтролировать результат в веб-версии HubEx. Для этого необходимо открыть карточку нужной заявки и перейти в раздел <strong>&laquo;Выполнение&raquo;</strong>.</p>
<p dir="auto"><strong>Что именно отображается:</strong></p>
<ul dir="auto">
<li class="text-start ">Для каждой позиции списанных материалов показывается <strong>количество отсканированных кодов маркировки</strong>.</li>
<li class="text-start ">У маркируемых материалов (с включённым признаком &laquo;Маркируемый материал&raquo;) дополнительно отображается <strong>специальная иконка Data Matrix</strong>, по которой видно, что по данной позиции требуется сканирование.</li>
<li class="text-start ">При клике на иконку или строку материала открывается <strong>список всех привязанных кодов</strong> &mdash; можно увидеть каждый уникальный код Data Matrix, который был отсканирован исполнителем.</li>
</ul>
<p dir="auto"><strong>Важно понимать:</strong></p>
<ul dir="auto">
<li class="text-start ">Просмотр в веб-версии работает <strong>только для чтения</strong> &mdash; диспетчер видит привязанные коды, но не может их редактировать или удалять.</li>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges30032026/image10.jpg" alt="" /></p>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges30032026/image10.2.jpg" alt="" /></p>
<li class="text-start ">Если на Шаге 3 настроен контроль обязательности сканирования (RWM для поля &laquo;Выполнение&raquo;), диспетчер сразу увидит: все ли коды отсканированы или каких-то не хватает. Пока все обязательные коды не будут привязаны, исполнитель не сможет перевести заявку на контролируемую стадию.</li>
<li class="text-start ">Коды синхронизируются с сервером автоматически, в том числе после офлайн-работы исполнителя в мобильном приложении.</li>
</ul>
<p dir="auto">Таким образом, веб-интерфейс даёт полную прозрачность: диспетчеры и руководители видят статус сканирования по каждому маркируемому материалу, не заходя в мобильное приложение.</p>
<hr class=" border-gray-100 dark:border-gray-850" />
<p dir="auto">Если у вас возникли вопросы &mdash; пишите в поддержку Telegram @hubex_bot или на почту <a href="mailto:support@hubex.ru" target="_blank" rel="nofollow">support@hubex.ru</a>.</p>
</body>

___
### Следующие шаги:
- [Настройка ролей](../admin/Roles.md)
- [Загрузка материалов и создание складов](./Materials.md)
- [Поля на форме заявки: настройка доступа к полям заявки](../admin/ElementsOfInterface.md)
- [Прикрепление выполненных работ в web- и мобильном приложении](./AttachingFiles.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
