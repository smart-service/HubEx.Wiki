---
title: Создание обслуживаемых компаний
description: Компании – это юридические или физические лица, которые выступают заказчиками и (или) подрядчиками. Также в справочник Компании вносятся данные по организации, от лица которой ведется учет в системе (наша компания). Создать новую Компанию можно в меню Компании по кнопке Создать компанию.
keywords: создание компании, создать компанию, заказчик, подрядчик, наша компания, договор, договор с заказчиком, банковские реквизиты, вид клиента, тип контрагента, hubex, хабекс, хубекс, хабикс
---

<h1>Создание обслуживаемых компаний</h1>

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

<p>Содержание статьи:</p>
<ul>
	<li><a href="#company1">Что такое "Компания" в HubEx;</a></li>
    <li><a href="#company2">Основные поля для создания компании;</a></li>
    <li><a href="#company3">Что представляет собой список созданных компаний;</a></li>
    <li><a href="#company4">Контактные лица;</a></li>
    <li><a href="#company5">Юридические и банковские реквизиты;</a></li>
    <li><a href="#company6">Договоры;</a></li>
    <li><a href="#company7">Импорт и экспорт;</a></li>
    <li><a href="#company8">Для интеграций (дополнительно).</a></li>
</ul>

<h2 id="company1">Что такое "Компания" в HubEx</h2>

<p><strong>Компании</strong> – это юридические или физические лица, которые выступают заказчиками и (или) подрядчиками. Также в компании вносятся данные по организации, от лица которой ведется учет в системе (наша компания).</p>

<p>Компании привязываются к объектам/оборудованию, к сотрудникам и заказчикам. В дальнейшем компании участвуют в распределении полномочий между сотрудниками и заказчиками. Например, за компанией "ООО Ромашка" закреплен один заказчик и две единицы оборудования, соответственно заказчик будет видеть только то оборудование, которое закреплено за его компанией.</p>
        
<h2 id="company2">Основные поля для создания компании</h2>

<p>Создать новую <strong>Компанию</strong> можно в разделе левого бокового меню <strong>"Компании"</strong> по кнопке <strong>"Создать компанию"</strong>.
</p>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew1.png"/>
</div>


<p>Основные поля для заполнения в карточке компании:</p>
<ul>
<li><strong>Вид компании:</strong>
    <ol>
        <li>Компания-подрядчик - компания, взявшая на себя обязательства выполнить определенную работу по оказанию работ/услуг.
        </li>
        <li>Компании-заказчики - компания, заинтересованная в выполнении работ/услуг нашей компанией или компанией-подрядчиком, как правило, выступает инициатором и потребителем работ/услуг.
        Компании-заказчики необходимы для:
            <ul>
                <li>учета заявок в разрезе объектов заказчиков;</li>
                <li>формирования платежных документов;</li>
                <li>создания пользователей, которые могут работать с заявками в мобильном приложении заказчика.</li>
            </ul>
        </li>
        <li>Наша компания - компания, от лица которой ведется учет в системе HubEx. Ввод данных нашей компании необходим для:
            <ul>
                <li>формирования платежных документов для заказчика: банковские реквизиты для оплаты отражаются в Акте выполненных работ и Счете на оплату;</li>
                <li>создания пользователей, которые могут работать в системе в web и мобильном приложении исполнителя.</li>
            </ul>
        </li>
    </ol>
</li>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew2.png"/>
</div>

<li><strong>Название компании</strong>: Наименование компании;</li>
<li><strong>Тип контрагента</strong>: Индивидуальный предприниматель, Физическое лицо, Юридическое лицо.</li>
<li><strong>Телефон</strong>: Телефон компании;</li>
<li><strong>Веб-сайт</strong>: Веб-сайт компании;</li>
<li><strong>Электронная почта</strong>: E-mail компании;</li>
<li><strong>Код компании</strong>: Идентификатор для <strong>Заявок</strong> от этой <strong>Компании</strong>. Используется в маске номера заявки для определенного типа заявки;</li>
<li><strong>Фактический адрес</strong>: Адрес компании;</li>
<li><strong>Файлы</strong>: Вы можете прикрепить любые файлы, например, дополнительное соглашение с компанией или любые другие важные документы.</li>
</ul>


<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew3.png"/>
</div>

<h2 id="company3">Что представляет собой список компаний</h2>
    
   <p>Список всех созданных компаний в бизнес-аккаунте HubEx представляет собой карточный вид:</p>
   
<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew4.png"/>
</div>
   
<p>Вы можете фильтровать список всех созданных компаний по фильтрам справа:</p>
   
<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew5.png"/>
</div>
   
<p>Карточка компании отображает:</p>

<ol>
<li>Название компании;</li>
<li>Вид компании;</li>
<li>Количество объектов/оборудования, принадлежащих к компании;</li>
<li>Количество пользователей, закрепленных за компанией.</li>
</ol>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew6.png"/>
</div>

<p>Если перейти в уже созданную компанию, то вы сможете посмотреть:</p>
<ul>
<li>Количество сотрудников, принадлежащих к выбранной компании;</li>
<li>Количество заказчиков, принадлежащих к выбранной компании;</li>
<li>Количество заявок, созданных на объекты/оборудование, принадлежащих к выбранной компании.</li>
</ul>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew7.png"/>
</div>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew8.png"/>
</div>

<p>Также вы сможете просмотреть список объектов, принадлежащих к выбранной компании.</p>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew9.png"/>
</div>

<h2 id="company4">Контактные лица</h2>

<p>По кнопке <strong>"Добавить контактное лицо"</strong> можно внести одно или несколько контактных лиц для связи:</p>
            
<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew10.png"/>
</div>

<p>Контактное лицо можно выбрать из списка (ранее созданных контактных лиц), либо создать новое контактное лицо по кнопке <strong>"+"</strong>.</p>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew11.png"/>
</div>

<p>Подробнее о контактных лицах вы можете почитать в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Contacts.html#company">Как заполнить контактные лица в карточке компании</a>.</p>

<h2 id="company5">Юридические и банковские реквизиты</h2>

<p>Закрепить данную информацию можно в карточке компании, на вкладке "Компания":</p>
<ul>
<li><strong>Юридические реквизиты</strong>: это ИНН, КПП и т.д.;

<p>Обратите внимание! Юридические реквизиты можно заполнить автоматически по данным ИНН: введите ИНН и нажмите кнопку <strong>+Заполнить по ИНН</strong>.</p>
</li>

<li><strong>Банковские реквизиты</strong>: платежные реквизиты вашей <strong>Компании</strong> будут фигурировать в <strong>Акте выполненных работ</strong> и <strong>Счете на оплату</strong> для покупателя. По ним <strong>Заказчики</strong> смогут оплатить ваши услуги. Если вы не нашли в списке необходимый банк, напишите в Чат с поддержкой в web-приложении 
или на почту <a href="mailto:support@hubex.ru" target="_blank" rel="noopener"> support@hubex.ru</a>.
</li>
</ul>


<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew12.png"/>
</div>

<h2 id="company6">Договоры</h2>

<p>Договор (или контракт) необходим для фиксации взаимоотношений с клиентом. С его помощью можно отслеживать сроки действия и классифицировать <strong>Заявки</strong>. </p>

<p>Прочтите инструкцию ниже или ознакомьтесь с обучающим видеороликом <strong>Договор в HubEx: как создать договор на объект/оборудование</strong>.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/uVLKXbTjuik" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239092&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p class="p1">Создать новый договор можно на вкладке&nbsp;<strong>Договоры</strong>&nbsp;в карточке&nbsp;<strong>Компании</strong>.</p>

<div>
        <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/CreatingCompany/Contract.jpg"/>
</div>

<p>Рассмотрим заполнение полей <strong>Договора</strong>:</p>

<ul>
        <li>в карточке <strong>Договора</strong> обязательным для заполнения является поле <strong>Наименование и номер договора</strong>;</li>
        <li>поля <strong>Описание</strong> и <strong>Условия договора</strong> заполняются в свободной форме - это дополнительная информация о деталях договора;</li>
<li>поле<strong> Компания</strong> является обязательным, из списка созданных вами <strong>Компаний</strong> необходимо выбрать ту, к которому данный <strong>Договор</strong> относится;</li>
        <li><strong>Срок действия</strong> необходимо заполнять, если вы контролируете срок окончания, в договоре имеются особые денежные условия;</li>
        <li><strong>Объекты по договору</strong> - <strong>Объекты</strong> позволяют классифицировать договоры, в <strong>Заявке</strong> можно будет выбрать только тот <strong>Договор</strong>, который принадлежит выбранному <strong>Объекту</strong>; </li>
        <li>в <strong>Файлах</strong> вы можете прикрепить электронную версию договора (текстовый документ, картинки);</li>
        <li>если хотите подключить уведомление на электронную почту об окончании договора, поставьте флажок <strong>Напомнить о завершении договора</strong> и заполните контактные данные.</li>
</ul>


<div>
        <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/CreatingCompany/Contract2.jpg"/>
</div>

<p>Для договоров также предусмотрено создание дополнительных полей. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html#AdditionalFields7">Создание дополнительных полей для договора</a>.</p>

<p>Обратите внимание! В <strong>Заявке</strong> выбрать договор можно будет только после выбора <strong>Объекта</strong>. В случае просрочки договора в <strong>Заявке</strong> вы увидите соответствующую информационную подсказку.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/CreatingCompany/Ticket.jpg"/>
    </div>
    
<h2 id="company7">Импорт и экспорт</h2>
    
<p> Вы можете ускорить процесс созданий <strong>Компаний</strong> с помощью функции <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#companies">Импорта</a>.</p>

<p> Выгрузить информацию по <strong>Компаниям</strong> из системы HubEx можно с помощью функции <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#companies">Экспорта</a>.</p>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew13.png"/>
</div>
            
<h2 id="company8">Для интеграций (дополнительно)</h2>

<ol>
<li><strong>ERP ID</strong>: идентификатор <strong>Компании</strong> во внешней системе, например, 1С или Битрикс, который используется при интеграции.</li>
</ol>

<div>
<img style="margin: 0 auto; display: block;  width:100%" src="/attachments/images/FAQ/USER/CreatingCompanyNew/CreateCompanyNew14.png"/>
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


### Следующие шаги:
- [Ввод обслуживаемого оборудования](./CreatingObjects.md)
- [Создание заказчика](./CreatingCustomer.md)
- [Создание заявки](./CreatingTicket.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
