---
title: Создание шаблона заявки, подача заявки по QR-коду
description: Шаблон заявки в HubEx необходим для автоматизации подачи Заявок через мобильное приложение исполнителя и заказчика по QR-коду, а также для подачи заявок незарегистрированными пользователями. С помощью шаблона заявки можно сгенерировать свой QR-код и наклеить его на объект (оборудование).
keywords: qr-код, шаблон заявки, скачать QR-код, паспорт объекта, экспорт qr-кодов, hubex, хабекс, хубекс, хабикс
---

#### Создание шаблона заявки, подача заявки по QR-коду
<html>
<head>
    <style>
        .video-player-container {
            margin: 20px 0;
        }
        .video-source-selector {
            margin-bottom: 10px;
        }
        .source-btn {
            padding: 8px 16px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 5px;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        .source-btn:hover {
            background: #e0e0e0;
        }
        .source-btn.active {
            background: #45688e;
            color: white;
            border-color: #45688e;
        }
        .video-frame {
            width: 560px;
            height: 315px;
            max-width: 100%;
        }
        .video-frame iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
<meta charset="utf-8">
В этом разделе вы узнаете:
<ul>
    <li><a href="#ticktempl">Как создать шаблон заявки и QR-код;</a></li>
    <li><a href="#passport">Как посмотреть паспорт объекта и подать заявку в мобильном приложении исполнителя и
        заказчика;</a></li>
    <li><a href="#role">Как настроить Роли для доступа к паспорту объекта;</a></li>
    <li><a href="#exportqr">Как экспортировать QR-коды;</a></li>
    <li><a href="#staymark">Как использовать QR-коды для подтверждения пребывания на объекте</a>.</li>
</ul>

<p>Шаблон заявки – образец <strong>Заявки</strong> с заполненными основными полями: <strong>Тип заявки</strong>, <strong>Объект</strong>, <strong>Заказчик</strong>, <strong>Вид работ</strong>, <strong>Критичность</strong>,
    <strong>Описание заявки</strong>, <strong>Исполнитель</strong>.
    Шаблон заявки привязывается к объекту (оборудованию) с помощью QR-кода. Шаблон используется при создании заявок с
    помощью
    сканирования QR-кода в мобильных приложениях исполнителя и заказчика, а также для подачи заявок пользователями,
    незарегистрированными в системе (любой человек с мобильным устройством может отсканировать QR-код через приложение
    сканера штрихкодов и оставить заявку).
</p>
<p>Также шаблон заявки необходим для настройки интеграции HubEx с электронной почтой. Подробнее читайте в статье: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketMail.html">Интеграция по электронной почте, подача заявок по
    электронной почте</a>.</p>

<p>Паспорт объекта – это данные <strong>Объекта|Оборудования</strong>, которые отражаются в мобильном приложении
    исполнителя или заказчика
    при
    сканировании QR-кода по кнопке <strong>Подача заявки</strong> (на главном экране в правом нижнем углу). Если шаблон
    заявки по объекту
    является публичным, то паспорт объекта (неполный паспорт) будет доступен при сканировании QR-кода в любом приложении
    со сканером
    QR-кодов.
</p>
<p>Обратите внимание! Если вы не привяжете QR-код к Объекту, при сканировании такого QR-кода паспорт объекта будет
    пустой.</p>

<p>Мобильное приложение <strong>HubEx исполнитель</strong> вы можете скачать <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B/id1386688688">для
    iOS</a>.</p>
<p>Мобильное приложение <strong>HubEx заказчик</strong> вы можете скачать также <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.customer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%87%D0%B8%D0%BA%D0%B0/id1386631658">для
    iOS</a>. </p>

<p>Пример создания QR-кода и подачи <strong>Заявки</strong> через приложение вы можете посмотреть в нашем обучающем
    видеоролике.</p>

<div class="video-player-container" data-player-id="player2">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/yPugQerNlvo" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239096&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="ticktempl">Cоздание шаблона заявки и QR-кода</h5>
<p>Создать QR-код и шаблон заявки можно в web-приложении двумя способами:
    <ol>
        <li>В карточке <strong>Объекта</strong> на вкладке <strong>QR-коды</strong> по кнопке
            <strong>Маркировать</strong>. Этот вариант перекинет вас в форму создания
            шаблона
            заявки из пункта 2.
<p>После создания QR-код будет отображаться в карточке <strong>Объекта</strong> на вкладке <strong>QR-коды</strong>.</p>
</li>
<li>В меню <strong>Заявки - Маркировка</strong> по кнопке <strong>Создать QR-код</strong>. На форме шаблона заполните основные поля:
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/TempCreate.jpg"/>
</div>
</p>
<ul>
<li><strong>Описание QR-кода</strong> можно внести согласно наименованию объекта;</li>
<li>флажок <strong>Опубликовать</strong> отвечает за доступность паспорта объекта для
    незарегистрированных пользователей: если флажок установлен, то любой человек сможет увидеть при
    сканировании
    QR-кода паспорт объекта (неполный паспорт), в противном случае
    только зарегистрированные пользователи смогут просмотреть паспорт. Если этот флажок установлен
    и
    указано <strong>Приглашение</strong> (поле внизу формы), то незарегистрированные ранее пользователи
    смогут подать
    заявку по
    данному
    шаблону и пройти регистрацию в HubEx;
</li>
<li><strong>Разрешить подачу заявки из Web</strong>: установленный флажок означает, что
    незарегистрированный пользователь
    при
    сканировании QR-кода с помощью любого сканера кодов на мобильном устройстве сможет открыть паспорт
    объекта в
    мобильном
    браузере и подать <strong>Заявку</strong> (появится кнопка <strong>Подать заявку</strong>);
</li>
<li><strong>Тип заявки</strong> - если используете разные <strong>Типы заявок</strong>, укажите самый
    востребованный, при подаче <strong>Заявки</strong>
    его можно
    изменить;
</li>
<li>в поле <strong>Заказчик</strong> укажите компанию-владельца выбранного <strong>Объекта</strong>;
</li>
<li>в поле <strong>Объект|Оборудование</strong> укажите тот объект или оборудование, к которому хотите
    присвоить
    (распечатать и
    наклеить) QR-код;
</li>
<li>в поле <strong>Вид работ</strong> укажите самый основной или популярный вариант, если их на объекте
    несколько. Выбор <strong>Вида работ</strong>
    осуществляется из тех, что установлены в карточке <strong>Объекта</strong>. Вид работ при подаче заявки
    можно будет
    изменить;
</li>
<li><strong>Критичность</strong> и <strong>Описание заявки</strong> заполняется на усмотрение, эти поля
    также можно будет менять при
    подаче <strong>Заявки</strong>;
</li>
<li><strong>Приглашение</strong> указывается для того, чтобы потенциальный пользователь смог
    зарегистрироваться в
    HubEx и в дальнейшем отслеживать через приложение заказчика историю заявок и подавать новые.
    <strong>Приглашение</strong> можно создать в меню <strong>Пользователи - Приглашение</strong>. В
    качестве <strong>Роли</strong> можно выбрать,
    например,
    <strong>Заказчика</strong> (с этой ролью будет создан новый пользователь), подробнее читайте в
    статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка
        ролей</a>. В поле <strong>Участок</strong> вы можете указать конкретный <strong>Участок</strong>
    (если у вас будут разные
    приглашения по участкам) или указать все. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без
        приложения, самостоятельная регистрация нового пользователя</a>.
</li>
<li>пункт <strong>Разрешить саморегистрацию</strong> позволяет подавать заявку пользователю через QR-код с регистрацией. Дополнительно, должен быть включен пункт <strong>Разрешить регистрацию без верификациии</strong>. В этом случае, пользователь сможет выбрать проходить ли регистрацию или подать заявку без регистрации в системе - <strong>Не получать уведомления</strong>;
</li>
<li>если включить дополнительно пункт <strong>Обязательная саморегистрация по QR-коду</strong>, то пользователь будет обязан зарегистрироваться в системе через <strong>EMAIL</strong> или <strong>СМС</strong> для подачи заявки. В этом случае, пункт <strong>Не получать уведомления</strong> пользователю будет недоступен;
</li>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Invitation.jpg"/>
</div>
</p>
</ul>
<p>После заполнения всех полей нажмите кнопку <strong>Сохранить</strong>. После сохранения будет сгенерирован
    QR-код. QR-код будет также отображаться в карточке указанного <strong>Объекта</strong> на вкладке <strong>QR-коды</strong>.
</p>
<p>По
    нажатию на
    кнопку <strong>Скачать QR-код</strong>, QR-код будет сохранен в папку загрузок на вашем компьютере. Вы можете
    открыть его и
    распечатать.</p>
<p>Обратите внимание! После сохранения на форме появляется поле <strong>Код шаблона</strong> - это поле
    отвечает за связь между шаблоном заявки и шаблоном объекта.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/TempSave.jpg"/>
</div>
</li>
</ol>
</p>

<p>Рассмотрим еще один способ, в результате которого, шаблон заявки создается автоматически.</p>
<p>Если у вас уже есть QR-код, наклеенный на объект (оборудование) и неиспользованный ранее в HubEx, то при привязке
    его к объекту автоматически будет создан шаблон заявки. В дальнейшем при сканировании такого кода вы
    также сможете подать <strong>Заявку</strong>. Подробно о привязке существующего QR-кода читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjTemplates.html#2">Создание шаблона оборудования,
        приемка и маркировка по QR-коду</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/TicketTemp.jpg"/>
</div>
<p>Шаблон заявки будет создан там же в меню <strong>Заявки - Маркировка</strong>. Но он будет не опубликован и в нем не
    будут заполнены
    поля <strong>Тип заявки</strong>, <strong>Вид работ</strong>, <strong>Приглашение</strong> и разрешение на подачу
    <strong>Заявки</strong>. Вы можете дозаполнить шаблон и сохранить
    его.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/TicketTemp2.jpg"/>
</div>

<h5 id="passport">Паспорт объекта и подача заявки в мобильном приложении исполнителя и заказчика</h5>
<p>Паспорт объекта - это данные объекта (оборудования), которые отражаются в мобильном приложении <strong>HubEx
    исполнитель</strong> и <strong>HubEx заказчик</strong> при сканировании QR-кода по кнопке подачи заявки (на главном
    экране в правом нижнем углу). Также паспорт объекта отображается при сканировании QR-кода через камеру телефона
    незарегистрированными в системе пользователями (без использования мобильных приложений HubEx, паспорт открывается в
    мобильном браузере). Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача
        заявок по QR-коду без приложения, самостоятельная регистрация нового пользователя</a>.</p>

<p>Теперь рассмотрим, как использовать созданный выше QR-код в мобильных приложениях HubEx.</p>
<p>Зайдите в мобильное приложение <strong>HubEx исполнитель</strong>:</p>
<ul>
    <li>Нажмите кнопку подачи заявки;</li>
    <li>Перед вами откроется список <strong>Объектов</strong>, нажмите кнопку подачи заявки по QR-коду в правом нижнем
        углу;
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingTickTemplates/MobEngineer.jpg"/>
    </div>
    <li>Отсканируйте QR-код: перед вами откроется паспорт объекта. В нем вы можете просмотреть <strong>Историю
        обслуживания</strong> -
        это перечень всех заявок по объекту. История доступна только в приложении исполнителя;
    </li>
    <li>Для подачи заявки нажмите кнопку <strong>Подать заявку</strong> и заполните необходимые поля, описание заявки и
        нажмите кнопку
        <strong>Создать заявку</strong>.
        Подробнее о заполнении полей заявки в мобильном приложении читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html#mobticket">Создание заявки</a>.
    </li>
</ul>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/MobEngineer2.jpg"/>
</div>
</p>

<p>Зайдите в мобильное приложение <strong>HubEx заказчик</strong>:</p>
<ul>
    <li>Нажмите кнопку подачи заявки;</li>
    <li>Перед вами откроется список <strong>Объектов</strong>, нажмите кнопку подачи заявки по QR-коду в правом нижнем
        углу;
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingTickTemplates/MobCustomer.jpg"/>
    </div>
    <li>Отсканируйте QR-код: для приложения заказчика просмотр паспорта объекта не доступен по умолчанию;
    </li>
    <li>Для подачи заявки нажмите кнопку <strong>Подать заявку</strong> и заполните необходимые поля, нажмите кнопку
        <strong>Создать заявку</strong>.
        Подробнее о заполнении полей заявки в мобильном приложении читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html#mobticket">Создание заявки</a>.
    </li>
</ul>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/MobEngineer2.jpg"/>
</div>
</p>

<h5 id="role">Настройка Роли для доступа к паспорту объекта</h5>
<p>Для того, чтобы паспорт объекта был доступен при сканировании QR-кода необходимо в настройке <strong>Роли</strong> в
    разделе
    <strong>Приложения</strong> включить настройку <strong>Электронный паспорт оборудования</strong>.</p>
<p>Настройку необходимо включать также для той <strong>Роли</strong>, которая указывается в <strong>Приглашении</strong>
    для подачи <strong>Заявок</strong> незарегистрированными пользователями. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Role.jpg"/>
</div>


<h5 id="exportqr">Экспорт QR-кодов</h5>
<p>Если вы создаете сразу множество QR-кодов для того, чтобы наклеить их на объекты (оборудование), воспользуйтесь
    экспортом QR-кодов. С помощью экспорта все созданные QR-коды будут скачаны в виде архива (.zip).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Export.jpg"/>
</div>
<p>Внутри архива вы
    найдете все созданные вами QR-кода по отдельности.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Export2.jpg"/>
</div>

<h5 id="staymark">Использование QR-кодов для подтверждения пребывания на объекте</h5>
<p>При работе с <strong>Заявкой</strong> ваш специалист сможет подтвердить свое нахождение на объекте в мобильном
    приложении <strong>HubEx исполнитель</strong> с помощью QR-кодов.</p>
<p>В чем преимущества этого функционала для вашей компании?</p>
<ul>
    <li>Гарантия качественного выполнения задачи.</li>
    <li>Предотвращение факта мошенничества, непрофессионального поведения.</li>
    <li>Повышение уровня ответственности исполнителей.</li>
</ul>

<p>Ознакомьтесь с обучающим видеороликом <strong>Контроль присутствия сотрудника на объекте</strong>. В нем мы на примере показываем, как выглядит подтверждение пребывания по QR-коду. Подробную инструкцию можно прочитать ниже. </p>

<div class="video-player-container" data-player-id="player2">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/FbMtjM_bgGU?si=ospj7f783SwEnLeg" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239128&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p>Как работает функционал подтверждения пребывания на объекте?</p>
<p>Сотрудник в мобильном приложении <strong>HubEx исполнитель</strong> при переводе <strong>Заявки</strong> на
    стадию <strong>В работе</strong> должен будет отсканировать QR-код <strong>Объекта</strong>. Только после этого
    исполнитель сможет внести выполненные работы и перевести <strong>Заявку</strong> на следующие стадии (<strong>Выполнение</strong>
    и т.д.).</p>

<p>Как создать QR-код описано в текущей статье в разделе <a href="#ticktempl">Cоздание шаблона заявки и QR-кода</a>.
</p>
<p>Настройка подтверждения пребывания на объекте находится в консоли администрирования в меню <strong>Настройки заявки -
    Стадии заявки</strong>:</p>
<ol>
    <li>откройте стадию (например, <strong>В работе</strong>) и в поле <strong>Требование</strong> выберите пункт
        <strong>Отсканировать QR код объекта</strong>;</li>
    <li>после внесения изменений нажмите кнопку <strong>Сохранить</strong>.</li>
</ol>
<p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Stage.jpg"/>
</div>
<p>В мобильном приложении <strong>HubEx исполнитель</strong>, когда сотрудник нажмет кнопку перехода на стадию <strong>В работе</strong>,
    появится окошко с запросом сканирования QR-кода.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Mobile1.jpg"/>
</div>
<p>QR-код будет проверяться на соответствие QR-коду из карточки <strong>Объекта</strong>, выбранного в
    <strong>Заявке</strong>.</p>
<p>Если QR-код не совпадет, то сотрудник получит уведомление о том, что QR-код неверный. Если QR-код будет корректным,
    то будет осуществлен переход на стадию <strong>В работе</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/CreatingTickTemplates/Error.jpg"/>
</div>

<script>
    function hideSiblingVideo(activeVideo){
        const nextSibling=activeVideo.nextElementSibling
        const prevSibling=activeVideo.previousElementSibling
        if(nextSibling){
            nextSibling.style.display="none"
        }
        if(prevSibling){
            prevSibling.style.display="none"
        }
    }
 
    function switchActiveButtons(activeButton){
        const nextSibling=activeButton.nextElementSibling
        const prevSibling=activeButton.previousElementSibling
        const activeClass="active"
        if(nextSibling){
            nextSibling.classList.remove(activeClass)
        }
        if(prevSibling){
            prevSibling.classList.remove(activeClass)
        }
        activeButton.classList.add(activeClass)
        return activeButton?.dataset?.source
    }

    function switchShowVideos(activeContainer,label){
        const videoClass=`video-frame ${label}-frame`
        const videoFrame=activeContainer.querySelector(videoClass)
        const videos=activeContainer.children[1].children
        const activeVideo=Array.from(videos).filter((item)=>item.className===videoClass)
        console.debug({activeVideo})
        hideSiblingVideo(activeVideo[0])
        activeVideo[0].style.display="block"
    }

    const allVideoContainers=document.querySelectorAll(".video-player-container")
    allVideoContainers.forEach((container)=>{
        container.addEventListener("click",(e)=>{
            if(!e.target.classList.contains('source-btn')) return;
            
            console.debug({e},{container})
            const targetButton=e.target
            const activeSource=switchActiveButtons(targetButton)
            console.debug(activeSource)
            if(activeSource){
                switchShowVideos(container,activeSource)
            }
        })
    })
</script>

</body>
</html>

___
### Следующие шаги:
- [Подача заявок по QR-коду без приложения, самостоятельная регистрация нового пользователя](./SelfRegister.md)
- [Общая аналитика](./GeneralAnalitics.md)
- [Срез по заявкам](./TicketsReport.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
