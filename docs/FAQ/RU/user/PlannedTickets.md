---
title: Создание плановой заявки
description: Создание Плановой заявки необходимо для автоматизации подачи заявок в случаях регулярного ремонта или обслуживания объектов (оборудования). Создать Плановую заявку можно в меню Заявки - Планировщик работ по кнопке Создать заявку.
keywords: плановая заявка, планировщик работ, hubex, хабекс, хубекс, хабикс
---

#### Создание плановой заявки
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
В этом разделе вы научитесь:
<ul>
    <li><a href="#planticket">Создавать Плановые заявки в web-приложении;</a></li>
    <li><a href="#editticket">Просматривать и редактировать Плановые заявки;</a></li>
    <li><a href="#plantick">Просматривать плановые заявки в календаре.</a></li>
</ul>

<p>Создание <strong>Плановой заявки</strong> необходимо для автоматизации подачи <strong>Заявок</strong> в случаях
    регулярного
    ремонта или обслуживания объектов (оборудования). По заданным настройкам система самостоятельно будет создавать
    <strong>Заявки</strong> и
    уведомлять ваших
    сервисных специалистов о предстоящей работе.</p>


<p>Ознакомьтесь с видеороликом <strong>Как создавать плановые заявки в системе</strong> и прочтите пошаговую инструкцию
    ниже.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/S9YxwQzZ2o4" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239086&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="planticket">Создание Плановой заявки в web-приложении</h5>

<p>Создать <strong>Плановую заявку</strong> можно в меню <strong>Заявки - Планировщик работ</strong> по кнопке <strong>Создать
    заявку</strong>. Форма создания <strong>Плановой заявки</strong> состоит из нескольких разделов:
    <strong>Название</strong>, <strong>Тип
        заявки</strong>, <strong>Вид работ</strong>, <strong>Объект/оборудование</strong>, <strong>Описание</strong>
    <strong>Исполнитель</strong>, <strong>Плановое создание заявок</strong>, раздел <strong>Ограничить
        повторения</strong> (раздел появляется после выбора <strong>Частоты создания заявок</strong>).</p>


<p>Процесс заполнения полей <strong>Плановой заявки</strong> похож на заполнение стандартной <strong>Заявки</strong> в HubEx.
    Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html#webticket">Создание заявки</a>.</p>
<p>Рассмотрим подробнее заполнение полей <strong>Плановой заявки</strong>:</p>
<ul>
    <li><strong>Название</strong> заполняется в свободной форме;</li>
    <li>с указанным <strong>Типом заявки</strong> будут создаваться <strong>Плановые заявки</strong>. <strong>Тип
        заявки</strong> может быть выбран только один;
    </li>
    <li><strong>Вид работ</strong> может быть выбран только один. По <strong>Виду работ</strong> подбираются <strong>Объекты/оборудование</strong>
        для создания <strong>Плановой
            заявки</strong> (<strong>Виды работ</strong> заполняются в карточке <strong>Объекта</strong>). На следующем
        шаге вы можете уточнить выбор <strong>Объектов</strong>;
    </li>

 <p><div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/PlannedTicket0.jpg"/>
</div></p>
    <li><strong>Плановые заявки</strong> можно подавать не только на один <strong>Объект/оборудование</strong>, но и на
        группу <strong>Объектов</strong> с указанным выше <strong>Видом работ</strong>. После выбора <strong>Вида
            работ</strong> станут активными кнопки <strong>К списку объектов</strong> для выбора <strong>Объектов</strong> вручную, а также кнопка <strong>Подобрать объекты</strong> для установки дополнительных фильтров для подбора <strong>Объектов</strong>.<p><div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/PlannedTicket1.jpg"/>
</div></p>
<p>Нажмите на кнопку <strong>К списку объектов</strong> и установите флажки на <strong>Объектах</strong>,
        которые вам нужны для
        создания <strong>Заявок</strong>, затем нажмите кнопку <strong>Выбрать</strong>.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/ListObj.jpg"/>
        </div>
        </p>Если необходимо, то можно уточнить выбор <strong>Объектов</strong> с помощью фильтров по кнопке <strong>Подобрать объекты</strong>.<p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/FilterObj.jpg"/>
        </div>
        </p>
    </li>
    <li>в поле <strong>Описание</strong> можно внести описание заявки в свободной форме;</li>
    <li>в разделе <strong>Плановое создание заявок</strong> настраивается частота создания <strong>Плановых
        заявок</strong>. В
        выпадающем списке
        выберите один из вариантов: <strong>Ежедневно</strong>, <strong>Еженедельно</strong> и т.д.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 40%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/plantick3.png"/>
        </div>
        </p>
        Для каждого из вариантов будет доступна детальная настройка времени. Например, необходимо каждые 3 недели по
        вторникам создавать <strong>Плановую заявку</strong> в 10 часов утра.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 40%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/TimeManager.jpg"/>
        </div>
        </p>
    </li>
    <li>параметр <strong>Отложить начало выполнения работ</strong> позволит скорректировать срок закрытия заявки.
        Например, <strong>Плановая
            заявка</strong> будет создана в 12:00 и плановый срок закрытия заявки 4 часа. Если данный параметр не
        указан, то срок по
        заявке будет 16:00. Если же данный параметр равен 2 часа, то срок будет определен как 18:00.
    </li>
    <li>в разделе <strong>Ограничить повторения</strong> вы можете указать <strong>Период создания заявки</strong>,
        например, <strong>Плановые заявки</strong> вам нужно
        создавать в течение года. Либо ограничить повторения по количеству, например, вам нужно всего 10 заявок.
    </li>
    <li>в поле <strong>Исполнитель</strong> вы можете выбрать одного или нескольких исполнителей на выполнение <strong>Плановой заявки</strong>. Для этого нажмите кнопку <strong>+Добавить исполнителя</strong>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/SelectEngineer.jpg"/>
        </div>
        </p>
 <p>С помощью установки флажков выберите исполнителей и нажмите кнопку <strong>Выбрать</strong>.</p>
 <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/SelectEngineer2.jpg"/>
        </div>
        </p>
        <p>Для <strong>Плановой заявки</strong> можно установить переключатель <strong>Автоматическое назначение исполнителя</strong>. Это означает, что исполнитель будет подбираться при создании
        заявки по
        специальным
        правилам автоназначения исполнителя.</p>
         <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/SelectEngineer3.jpg"/>
        </div>
        </p>
        <p><strong>Правило автоназначения исполнителя</strong> можно создать в <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
            администратора</a> в меню Настройки заявки - Автоназначение исполнителя. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>.</p>
        <p>После создания правила его необходимо привязать к стадии заявки <strong>Новая</strong>, чтобы исполнитель
            назначался
            автоматически именно при создании <strong>Плановой заявки</strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/Stage.jpg"/>
        </div>
        <p>Обратите внимание! Внося изменения в стадию заявки эти изменения будут работать для всех <strong>Типов
            заявок</strong>, в
            жизненный цикл которых включена эта стадия. Вы можете создать отдельный <strong>Тип заявки</strong> для
            <strong>Плановой заявки</strong>,
            создать новую стадию Новая (для плановой заявки), настроить жизненный цикл. И выбрать такой тип для создания
            <strong>Плановой заявки</strong>. Подробнее читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный цикл заявки</a>.</p>
    </li>
</ul>

<p>После заполнения всех полей нажмите кнопку <strong>Сохранить и запланировать</strong>. Таким образом вы запустите
    процесс автоматического создания <strong>Заявок</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/PlannedTicket.jpg"/>
</div>

<h5 id="editticket">Просмотр и редактирование Плановой заявки</h5>
<p>Для редактирования <strong>Плановой заявки</strong> необходимо сначала приостановить ее действие. Для этого зайдите
    в <strong>Плановую заявку</strong> и нажмите кнопку <strong>Приостановить</strong>. Теперь вы можете вносить
    изменения. После внесения изменений необходимо заново нажать кнопку <strong>Сохранить и запланировать</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/Pause.jpg"/>
</div>

<h5 id="plantick">Плановые заявки в календаре</h5>
<p>В web-приложении для календаря на месяц доступно отображение плановых заявок. Подробнее читайте в статье: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Calendar.html">Календарь заявок</a>.</p>
<p>Плановые заявки будут располагаться как в самом календаре на запланированную дату, так и на отдельной вкладке
    <strong>Планировщик</strong>.</p>

<p>Например, если у вас запланирована <strong>Заявка</strong> на 19 апреля, то вы увидите ее в календаре отметку
    <strong>Планировщик 1</strong> на дату 19 апреля, где 1 - это количество плановых заявок.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Calendar/PlanTicket.jpg"/>
</div>

<p>Обратите внимание! Во вкладке <strong>Планировщик</strong> отображаются все плановые заявки на выбранный месяц. Если
    вы выберете конкретный день, в который запланирована, например, одна плановая заявка, то на вкладке <strong>Планировщик</strong>
    отобразится именно одна эта заявка. Чтобы вернуть отображение всех плановых заявок на выбранный месяц, еще раз
    щелкните правой кнопкой мыши по выбранному дню, чтобы снять фокус с этого дня. </p>

<p>Если в настройках плановой заявки не указан исполнитель, то по кнопке <strong>+</strong> на вкладке <strong>Планировщик</strong>
    вы можете выбрать подходящего сотрудника и назначить его на выполнение плановой заявки.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Calendar/ChoiceUser.jpg"/>
</div>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Calendar/ChoiceUser2.jpg"/>
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
- [Создание дополнительных полей в заявке](./AdditionalFieldsOld.md)
- [Календарь заявок](./Calendar.md)
- [Чек-листы](./Checklists.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
