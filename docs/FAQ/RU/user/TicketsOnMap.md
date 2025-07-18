---
title: Отображение Заявок и Сотрудников на карте
description: В меню Заявки - Все заявки вы можете отобразить все Заявки на карте по кнопке Заявки на карте. Помимо всех Заявок на карте также отображаются исполнители. Заявки на карте отображаются цветными флажками.
keywords: заявки на карте, назначить заявку на карте, геопозиция заявки, адрес заявки, hubex, хабекс, хубекс, хабикс
---

#### Заявки и сотрудники на карте
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
    <li><a href="#ticketsonmap">Как посмотреть местоположение Заявкок и Сотрудников (исполнителей) на карте;</a></li>
    <li><a href="#calendar">Для чего нужен календарь загруженности Сотрудников;</a></li>
    <li><a href="#engineersonmap">Как назначить Заявку на исполнителя на карте;</a></li>
    <li><a href="#ticketsedit">Как посмотреть и отредактировать Заявку в режиме карты.</a></li>
</ul>

<p>Представление <strong>Заявок</strong> и <strong>Сотрудников</strong> в режиме карты поможет визуально определять
    местоположение <strong>Объектов</strong> по Заявкам и удаленность
    исполнителей от этих <strong> Заявок</strong>. Благодаря оперативному назначению Заявок на ближайших исполнителей,
    вы сможете экономить время и топливо на дорогу. Рассмотрим
    подробнее весь функционал работы в режиме <strong>Заявки на карте</strong>.</p>
    <p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Распределение заявок в Hubex с помощью календаря и карты</strong>.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/E1H9pTZi0vA" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239090&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="ticketsonmap">Отображение Заявок и Сотрудников на карте</h5>
<p>В меню <strong>Заявки - Все заявки</strong> вы можете отобразить все <strong>Заявки</strong> на карте по кнопке
    <strong>Заявки на карте</strong>. Помимо всех <strong>Заявок</strong> на
    карте также отображаются исполнители (<strong>Сотрудники</strong>).</p>


<p><strong>Заявки</strong> отображаются на карте с помощью булавок (или пинов, от англ. pin - булавка). При уменьшении
    масштаба карты
    <strong>Заявки</strong> группируются в один пин. Таким
    образом на карте вы увидите группу <strong>Заявок</strong>, находящихся в одном районе.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap.jpg"/>
</div>

<p>Если <strong>Заявки</strong> находятся на разных адресах, их группировка будет уточняться при увеличении масштаба
    карты. Если
    разные <strong>Объекты</strong> находятся на одном и том же адресе, они также будут объединены в один пин.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap1.jpg"/>
</div>

<p>В центре каждой булавки отображается общее количество <strong>Заявок</strong> по адресу. Также каждая булавка по
    кругу окрашена либо в
    один цвет, либо разделена на цветные сектора. По кнопке подсказки в левом верхнем углу отображается справка
    обозначения цветов:</p>
<ul>
    <li>красный цвет булавки - просроченные <strong>Заявки</strong>, дата закрытия которых меньше текущей даты;</li>
    <li>синий - <strong>Заявки</strong> назначенные на исполнителей;</li>
    <li>желтые - неназначенные <strong>Заявки</strong> (не назначен исполнитель);</li>
    <li>желтый и красный сектора - присутствуют неназначенные на исполнителей и просроченные <strong>Заявки</strong>;
    </li>
    <li>желтый и синий сектора - присутствуют неназначенные и назначенные на исполнителей <strong>Заявки</strong>;</li>
    <li>красный и синий сектора - присутствуют просроченные и назначенные на исполнителей <strong>Заявки</strong>;</li>
    <li>желтый, красный и синий сектора - присутствуют просроченные, неназначенные и назначенные на исполнителей
        <strong>Заявки</strong>.
    </li>

</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMapColor.jpg"/>
</div>

<p>На карте также отображаются <strong>Сотрудники</strong> (исполнители). Они отображаются метками с инициалами или
    фотографией (если она установлена в
    качестве аватара
    в карточке <strong>Сотрудника</strong>).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMapUsers.jpg"/>
</div>

<p>В режиме карты справа пользователю доступны два списка <strong>Заявок</strong>: </p>
<ul>
    <li><strong>Неназначенные</strong> - все доступные пользователю <strong>Заявки</strong>, у которых нет исполнителя;
    </li>
    <li><strong>Все</strong> - в данном списке отображаются назначенные, просроченные и неназначенные
        <strong>Заявки</strong>. При нажатии на цифру на пине данный список фильтруется: в нем отображаются только
        <strong>Заявки</strong>,
        относящиеся к выбранному пину. По нажатию на любое другое место на карте (кроме другого пина) фильтрация
        сбрасывается.
    </li>
</ul>
<p>Рассмотрим на примере: ниже на скриншоте на вкладке <strong>Все</strong> мы видим 39 <strong>Заявок</strong> - это
    все доступные пользователю <strong>Заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMapAll.jpg"/>
</div>
<p>Далее по щелчку на пин с цифрой 5 вкладка <strong>Все</strong> фильтруется, в ней отображается 5
    <strong>Заявок</strong>, сгруппированных по адресу. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMapFiltered.jpg"/>
</div>

<p>В каждом списке <strong>Заявки</strong> могут различаться по цвету - это зависит от параметра
    <strong>Критичность</strong>, указанного в <strong>Заявке</strong> (как и в карточном отображении
    <strong>Заявок</strong>). Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Criticality.html">Критичность заявки</a>.</p>
<p>Например, срочные Заявки отображаются красным цветом, а несрочные - синим.</p>

<p>По каждой <strong>Заявке</strong> в обоих списках отображается ее номер, название <strong>Объекта</strong> и <strong>Заказчика</strong>,
    описание и <strong>Крайний срок закрытия</strong>.</p>

<p>Также для каждой <strong>Заявки</strong> доступно определение ее точной геопозиции: по нажатию на
    <strong>Заявку</strong> в списке
    карта увеличивается в масштабе (при необходимости) и расположение
    <strong>Заявки</strong> отображается в центре. Слева появляется краткое
    информационное окно по <strong>Заявке</strong>. По нажатию на номер <strong>Заявки</strong> в
    соседнем окне откроется полная форма <strong>Заявки</strong>.
</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap2.jpg"/>
</div>

<p>Для списка <strong>Все</strong> работает фильтрация в обычном режиме. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap4-1.jpg"/>
</div>

<p>С помощью настройки фильтров вы можете
    отфильтровать <strong>Заявки</strong> по необходимым параметрам, например, по <strong>Заказчику</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap4-2.jpg"/>
</div>

<p>Активные
    примененные фильтры отображаются в разделе <strong>Активные фильтры</strong> над списками <strong>Заявок</strong>.
    Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Filters.html">Список заявок, поиск
        заявок с помощью фильтров</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap4-3.jpg"/>
</div>


<h5 id="calendar">Календарь загруженности Сотрудников</h5>
<p>В календаре вы можете видеть загрузку ваших <strong>Сотрудников</strong> на выбранный день и легко определять
    свободное время для
    назначения Заявки. Назначение Заявок с помощью календаря будет рассмотрено ниже.</p>

<p>При наведении курсора на границу календаря вы можете изменять его размер - сделать больше или меньше.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar.jpg"/>
</div>

<p>Также в календаре доступна кнопка отображения пути исполнителя по карте - это планируемый маршрут от Заявки до
    Заявки.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar2.jpg"/>
</div>


<h5 id="engineersonmap">Назначение Заявки на исполнителя на карте</h5>
<p>Неназначенную <strong>Заявку</strong> из списка <strong>Неназначенные</strong> или <strong>Все</strong> можно
    назначить на одного из
    исполнителей,
    отображенных на карте и в календаре.</p>

<p>Как на вкладке <strong>Все</strong> понять, что <strong>Заявка</strong> неназначена? У
    неназначенной <strong>Заявки</strong> не отображается маркер исполнителя. У распределенных <strong>Заявок</strong>
    есть маркер с инициалами <strong>Сотрудника</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 55%;"
         src="/attachments/images/FAQ/USER/TicketsOnMap/Users.jpg"/>
</div>

<p>Рассмотрим три способа назначить <strong>Заявку</strong> с помощью календаря и карты:</p>

<ol>
    <li>Распределить неназначенную <strong>Заявку</strong> можно с помощью календаря: зажмите нераспределенную <strong>Заявку</strong>
        из списка справа (<strong>Неназначенные</strong> или <strong>Все</strong>) и перетащите ее на свободное время в
        графике <strong>Сотрудника</strong>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar4.jpg"/>
        </div>
        </p>
        <p><strong>Заявка</strong> в календаре займет то время, на которое вы ее перенесли.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar5.jpg"/>
        </div>
        </p>
    </li>
    <li><p>Чтобы распределить неназначенную <strong>Заявку</strong>, необходимо правой кнопкой
        мыши зажать <strong>Заявку</strong> в списке и перетащить ее на маркер исполнителя на
        карте.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap3.jpg"/>
        </div>
        <p>Если <strong>Заявку</strong> перетаскивали из списка <strong>Неназначенные</strong>, то после назначения она
            пропадает из этого списка. Если <strong>Заявку</strong> назначали из списка <strong>Все</strong>, то у нее
            появится
            маркер с инициалами исполнителя.</p>
        <p><strong>Заявка</strong> назначается на исполнителя на текущее ближайшее время.
            Например, если вы перетащили <strong>Заявку</strong> на исполнителя в 14.45, назначится она на 15.00. Если
            перетащили <strong>Заявку</strong> в 13.10, она назначится на 13.30. При этом продолжительность <strong>Заявки</strong> устанавливается исходя из плановых трудозатрат, либо по умолчанию 4 часа.
            Плановые трудозатраты могут быть установлены в карточках <strong>Видов работ</strong> или <strong>Типов заявки</strong>. Подробнее читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.</p>
        <p>Назначенная <strong>Заявка</strong> сразу же отобразится в календаре загруженности
            <strong>Сотрудника</strong>.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/TicketsOnMap3-1.jpg"/>
        </div>
        </p>
    </li>
    <li>По кнопке <strong>+</strong> у <strong>Заявки</strong> в списке <strong>Неназначенные</strong> или
        <strong>Все</strong>. В
        выпадающем списке нужно будет выбрать подходящего <strong>Сотрудника</strong>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar3.jpg"/>
        </div>
        </p>
        <p><strong>Заявка</strong> назначается на исполнителя на текущее ближайшее время.
            Например, если вы перетащили <strong>Заявку</strong> на исполнителя в 14.45, назначится она на 15.00. Если
            перетащили <strong>Заявку</strong> в 13.10, она назначится на 13.30. При этом продолжительность <strong>Заявки</strong> устанавливается исходя из плановых трудозатрат, либо по умолчанию 4 часа.
            Плановые трудозатраты могут быть установлены в карточках <strong>Видов работ</strong> или <strong>Типов заявки</strong>. Подробнее читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.</p>
        <p>Назначенная <strong>Заявка</strong> сразу же отобразится в календаре загруженности
            <strong>Сотрудника</strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Calendar6.jpg"/>
        </div>
    </li>
</ol>
<h5 id="ticketsedit">Просмотр и редактирование Заявки в режиме карты</h5>
<p>Посмотреть детали по <strong>Заявке</strong> можно щелкнув по ее номеру в списке <strong>Все</strong> или <strong>Неназначенные</strong>. </p>

 <div>
     <img style="margin: 0 auto; display: block; max-width: 95%;"
     src="/attachments/images/FAQ/USER/TicketsOnMap/Tickets.jpg"/>
     </div>

 <p>Откроется боковое окно с основными полями <strong>Заявки</strong>: поля можно редактировать и внесенные изменения сохранять по кнопке <strong>Сохранить</strong> внизу боковой формы. По нажатию на кнопку <strong>К заявке</strong> в соседней вкладке будет открыта полная форма текущей <strong>Заявки</strong>. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Tickets2.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/TicketsOnMap/Tickets3.jpg"/>
        </div>
        </p> 

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
- [Ограничение доступа к файлам в заявке и объекте](./ViewRestriction.md)
- [Сообщения по заявке](./Messages.md)
- [Оценка заявок и рейтинг сотрудников](./Rating.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
