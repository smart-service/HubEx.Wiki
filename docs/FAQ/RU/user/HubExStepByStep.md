---
title: Знакомство с системой HubEx
description: Система HubEx предназначена для автоматизации подачи и обработки заявок, управления и контроля за мобильными
сотрудниками, управления сервисом оборудования. В HubEx представлен очень гибкий функционал, который легко можно
настроить под специфику вашего
бизнеса.
keywords: знакомство с системой, первые шаги, hubex, хабекс, хубекс, хабикс
---

#### Знакомство с системой HubEx
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
<p>Система HubEx предназначена для автоматизации подачи и обработки заявок, управления и контроля за мобильными
    сотрудниками, управления сервисом оборудования. В HubEx представлен очень гибкий функционал, который легко можно
    настроить под специфику вашего
    бизнеса.</p>

<p>Обзор на функциональные возможности HubEx представлен в видеоролике <strong>HubEx: Обзор. Контроль мобильных
    специалистов и управление процессами онлайн</strong>. В нем мы рассказываем о компонентах системы, основных
    сущностях, аналитике, мобильных приложениях и защите данных. </p>
<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/vyfhCnihTMQ" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239126&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>
<p>Работа в HubEx складывается из двух частей:</p>
<ol>
    <li>работа на стороне пользовательских приложений (web-версии и мобильных приложений): заполнение
        справочников, создание заявок, аналитика и т.д.;
    </li>
    <li>работа в консоли администрирования: настройки доступа, работы с заявками, пользовательского интерфейса и т.д..
    </li>
</ol>

<p>В этой статье мы рассмотрим стартовые шаги для работы с HubEx. Подробные статьи по функционалу и администрированию
    системы вы найдете в следующих
    <a href="https://wiki.hubex.ru/">разделах нашего руководства</a>.</p>

<!--<p>Ознакомьтесь с видеороликом <strong>С чего начать работу в HubEx?</strong> и прочтите пошаговую инструкцию ниже.</p>

<iframe src="https://www.youtube.com/embed/BJU4AUR2nOU" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>-->


<p>Для того, чтобы перейти к созданию <strong>Заявок</strong>, необходимо заполнить основные справочники системы:</p>
<ul>
    <li><a href="#addcompanies">Компании, которые вы обслуживаете;</a></li>
    <li><a href="#addobjects">Обслуживаемые объекты и оборудование;</a></li>
    <li><a href="#addusers">Заказчиков, которые подают заявки;</a></li>
    <li><a href="#addusers">Исполнителей, которые выполняют заявки.</a></li>
</ul>

<p>После внесения основных данных можно переходить к <a href="#ticketcreation">созданию <strong>Заявок</strong> в
    мобильном и
    web-приложении</a>.</p>
<p>Мобильное приложение <strong>HubEx исполнитель</strong> вы можете скачать <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B/id1386688688">для
    iOS</a>.</p>


<p>Мобильное приложение <strong>HubEx заказчик</strong> вы можете скачать также <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.customer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%87%D0%B8%D0%BA%D0%B0/id1386631658">для
    iOS</a>. </p>

<h5 id="addcompanies">Создание Компании</h5>
<p><strong>Компании</strong> – это юридические или физические лица, которые выступают заказчиками и (или) подрядчиками.
    Также в справочник
    <strong>Компании</strong> вносятся данные по организации, от лица которой ведется учет в системе (наша компания).
</p>

<p><strong>Компании</strong> позволяют:</p>
<ul>
    <li>создавать пользователей, которые смогут работать в системе, в привязке к конкретным компаниям: сотрудники
        компании-заказчика, наши исполнители (например, сервисные инженеры) и офисные работники;
    </li>
    <li>вести учет <strong>Заявок</strong> и получать аналитику и отчетность в разрезе компаний-заказчиков;</li>
    <li>вести учет <strong>Заявок</strong> по <strong>Объектам</strong> компаний.</li>
</ul>

<p>С помощью <strong>Компаний</strong> и настройки <strong>Ролей</strong> в системе можно разграничить доступ
    пользователей. Например, заказчики,
    создавая <strong>Заявки</strong>, будут видеть только <strong>Объекты</strong> принадлежащие к их
    <strong>Компании</strong>.
    Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание
        компаний</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.</p>

<p>Перед началом работы на вкладке <strong>Компании</strong> вы увидите одну уже созданную компанию - вашу.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/HubExStepByStep/stepbystep2.png"/>
</div>

<p>Если ваша компания обслуживает несколько организаций, добавляйте каждую из них в справочник по кнопке
    <strong>Создать компанию</strong>. Подробная инструкция по заполнению реквизитов <strong>Компании</strong>
    находится
    в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание обслуживаемых
        компаний</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/HubExStepByStep/Companies.jpg"/>
</div>

<h5 id="addobjects">Создание обслуживаемого оборудования</h5>
<p><strong>Объект (оборудование)</strong> - элемент инфраструктуры, на который направлено предоставление услуг (видов
    работ). Аналогом
    объекта в ITSM-системах является конфигурационная единица. <strong>Объекты (оборудование)</strong> привязываются к
    конкретным
    компаниям-заказчикам и необходимы для ведения учета <strong>Заявок</strong>, для привязки выполненных работ.</p>
<p>Например, объектами могут быть: офис, здание, АЗС, магазин, или другой элемент инфраструктуры. Оборудованием может
    быть: кондиционер, кофемашина, двигатель, топливный насос, медицинский аппарат и т.п.</p>
<p>Если детальный учет по различным объектам или оборудованию заказчика не требуется, можно завести один обслуживаемый
    <strong>Объект</strong> для каждого и он автоматически будет подставляться в <strong>Заявку</strong> при выборе
    заказчика.</p>

<p> Внести необходимое оборудование можно на вкладке бокового меню <strong>Объекты|Оборудование</strong> по кнопке
    <strong>Создать объект</strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/HubExStepByStep/Objects.jpg"/>
</div>

<p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание
    обслуживаемого оборудования</a>. Для оперативности ввода данных можно использовать функцию <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#objects">импорта</a>.</p>

<p>
    <details>
        <summary><span style="text-decoration: underline; color: #3366ff;"><span>Нажмите на строку, чтобы открыть и посмотреть видеоролик <strong>Как создавать объекты обслуживания в HubEx: способы создания объектов, маркировка, паспорт объекта</strong></span></span>.
        </summary>
        <div class="video-player-container" data-player-id="player1">
            <div class="video-source-selector">
                <button class="source-btn active" data-source="vk">VK</button>
                <button class="source-btn" data-source="youtube">YouTube</button>
            </div>
            <div class="video-embed">
                <div class="video-frame youtube-frame" style="display: none;">
                    <iframe src="https://www.youtube.com/embed/43uHUupRJZI" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-frame vk-frame" style="display: block;">
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239114&hd=2&autoplay=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </details>
</p>
<h5 id="addusers">Создание Сотрудников и Заказчиков</h5>
<p>В системе HubEx существует два типа пользователей: <strong>Сотрудники</strong> и <strong>Заказчики</strong>.</p>
<p><strong>Сотрудники</strong> – пользователи, которые могут создавать и выполнять <strong>Заявки</strong>. <strong>Сотрудники</strong>
    являются лицензируемыми
    пользователями системы. Для <strong>Сотрудников</strong> доступно web- и мобильное приложение исполнителя.
    <strong>Сотрудником</strong> может являться диспетчер вашей организации, который создает заявки в web-приложении,
    руководитель вашей
    организации, сервисный специалист (исполнитель), который работает по <strong>Заявкам</strong>.</p>


<p><strong>Заказчик</strong> - пользователь, который может создавать <strong>Заявки</strong> в мобильном приложении
    заказчика.
    <strong>Заказчик</strong> привязывается к компании-заказчику.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/HubExStepByStep/Customers.jpg"/>
</div>

<p>Подробнее читайте в статьях: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание заказчика</a> и <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей системы.</a></p>

<h5 id="ticketcreation">Создание Заявок</h5>

<p>Все варианты создания <strong>Заявок</strong> представлены в обучающем видеоролике <strong>Способы подачи заявки в
    HubEx</strong>.</p>
<div class="video-player-container" data-player-id="player1">
            <div class="video-source-selector">
                <button class="source-btn active" data-source="vk">VK</button>
                <button class="source-btn" data-source="youtube">YouTube</button>
            </div>
            <div class="video-embed">
                <div class="video-frame youtube-frame" style="display: none;">
                    <iframe src="https://www.youtube.com/embed/RtMhubKi7Jc" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-frame vk-frame" style="display: block;">
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239110&hd=2&autoplay=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
<p>
    <details>
        <summary><span style="text-decoration: underline; color: #3366ff;"><span>Нажмите на строку, чтобы открыть и посмотреть дополнительный видеоролик <strong>Создание заявки в HubEx: расшифровка и заполнение всех полей на форме заявки</strong></span></span>.
        </summary>       
<div class="video-player-container" data-player-id="player1">
            <div class="video-source-selector">
                <button class="source-btn active" data-source="vk">VK</button>
                <button class="source-btn" data-source="youtube">YouTube</button>
            </div>
            <div class="video-embed">
                <div class="video-frame youtube-frame" style="display: none;">
                    <iframe src="https://www.youtube.com/embed/oc8QgdcuPoU" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-frame vk-frame" style="display: block;">
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239115&hd=2&autoplay=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>      
    </details>
</p>
<p> В системе HubEx предусмотрено два способа подачи <strong>Заявки</strong>: вручную и в полуавтоматическом режиме.
    Рассмотрим подробнее:
</p>
<ol>
    <li>Вручную <strong>Заявку</strong> можно создать с помощью web- или мобильного приложения. Web-приложение для
        подачи <strong>Заявки</strong> используется диспетчерами, руководителями, начальниками подразделений и т.д., мобильные приложения –
        заказчиками и исполнителями.
        <p>Создать новую <strong>Заявку</strong> можно на вкладке <strong>Заявки</strong>
            бокового
            меню по кнопке <strong>Создать заявку</strong>. На форме <strong>Заявки</strong> обязательно указываются:
            объект, по которому будет создана заявка, адрес, описание и др.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/HubExStepByStep/Tickets.jpg"/>
        </div>
        <p>Для подачи <strong>Заявки</strong> через мобильное приложение необходимо нажать на кнопку в правом нижнем
            углу, выбрать из списка необходимый <strong>Объект</strong> и заполнить поля <strong>Заявки</strong>. Подробнее читайте в статье <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html#mobticket">Создание
                заявки.</a>
        </p>
        <p>
            <details>
                <summary><span style="text-decoration: underline; color: #3366ff;"><span>Нажмите на строку, чтобы открыть и посмотреть видеоролик <strong>Мобильное приложение инженера. Как работать сервисному специалисту на телефоне?</strong></span></span>.
                </summary>
<div class="video-player-container" data-player-id="player1">
            <div class="video-source-selector">
                <button class="source-btn active" data-source="vk">VK</button>
                <button class="source-btn" data-source="youtube">YouTube</button>
            </div>
            <div class="video-embed">
                <div class="video-frame youtube-frame" style="display: none;">
                    <iframe src="https://www.youtube.com/embed/JmMZzkI6o-c" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-frame vk-frame" style="display: block;">
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239104&hd=2&autoplay=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>      
            </details>
        </p>
        <p>
            <details>
                <summary><span style="text-decoration: underline; color: #3366ff;"><span>Нажмите на строку, чтобы открыть и посмотреть видеоролик <strong>Мобильное приложение заказчика. Как заказчику создавать и отслеживать заявки?</strong></span></span>.
                </summary>
<div class="video-player-container" data-player-id="player1">
            <div class="video-source-selector">
                <button class="source-btn active" data-source="vk">VK</button>
                <button class="source-btn" data-source="youtube">YouTube</button>
            </div>
            <div class="video-embed">
                <div class="video-frame youtube-frame" style="display: none;">
                    <iframe src="https://www.youtube.com/embed/TbCdCcZzVdc" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-frame vk-frame" style="display: block;">
                    <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239112&hd=2&autoplay=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
            </details>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/HubExStepByStep/CreateByMobile3.jpg"/>
        </div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/HubExStepByStep/CreateByMobile4.jpg"/>
        </div>
        </p>
    </li>
    <li>Полуавтоматический режим подразумевает сканирования QR-кода оборудования через мобильное приложение исполнителя
        или заказчика. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>.
        <p>
            <details>
                <summary><span style="text-decoration: underline; color: #3366ff;"><span>Нажмите на строку, чтобы открыть и посмотреть видеоролик <strong>Подача заявки по QR-коду</strong></span></span>.
                </summary>
<div class="video-player-container" data-player-id="player1">
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
            </details>
        </p>
    </li>
</ol>
<p>Также <strong>Заявки</strong> можно загрузить в систему с помощью импорта: вы подготавливаете специальный шаблон в формате Excel и с
    его помощью можете загрузить до 1000 <strong>Заявок</strong> за раз.
    Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#tickets">Импорт</a>.</p>
    
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
____
- [Перейти в меню](http://wiki.hubex.ru)
