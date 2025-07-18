---
title: Индивидуальный график работы. Функционал На смене
description: Зачастую, наряду со стандартными графиками работы, требуется индивидуальная настройка рабочих смен, например, указать больничные дни, отпуск, перенести рабочую смену на выходной день и т.д. Для этого в HubEx реализован функционал изменения рабочих смен. А также есть удобная опция для указания начала и завершения рабочей смены.
keywords: на смене, редактировать смену, индивидуальный график, график сотрудника, hubex, хабекс, хубекс, хабикс
---


#### Индивидуальный график работы: функционал На смене

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
    <li><a href="#scheduleweb">Как изменить график сотрудника в web-приложении;</a></li>
    <li><a href="#schedulemob">Как изменить свой график работы в мобильном приложении исполнителя;</a></li>
    <li><a href="#onduty">Как работает функционал На смене.</a></li>
</ul>

<p>График работы исполнителей назначается в карточке каждого <strong>Сотрудника </strong>на вкладке <strong>Трудоустройство</strong>.
    Подробнее читайте в
    статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>.</p>
<p>График позволяет
    определять рабочие и выходные дни ваших специалистов в <strong>Расписании заявок</strong>, а также в календаре при
    отображении <strong>Заявок</strong>
    на карте. А значит,
    вы легко сможете назначать <strong>Заявки</strong> на свободное время <strong>Сотрудника</strong>. Подробнее читайте
    в
    статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Calendar.html">Календарь заявок</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/TicketsOnMap.html">Заявки и сотрудники на карте</a>. </p>

<p>Еще график
    работы можно
    использовать при автоматическом распределении на <strong>Заявки</strong>. Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автоназначение на ближайшего
        исполнителя</a>. </p>

<p>Но зачастую, наряду со стандартными графиками работы, требуется индивидуальная настройка рабочих смен: указать
    больничные дни, отпуск, перенести рабочую смену на выходной день и т.д. Для этого в HubEx реализован функционал
    изменения рабочих смен. А также есть удобная опция для указания начала и завершения рабочей смены. Это позволит
    всегда поддерживать актуальную информацию о рабочем времени и, соответственно, назначать <strong>Заявки</strong> на
    <strong>Сотрудника</strong>, когда
    он на смене. </p>

<p>Отредактировать смены можно как в web-приложении, так и в мобильном приложении исполнителя.</p>

<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Как работать с
    функционалом На смене, работа с самозанятыми</strong>.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/x_5VAaPvYH0" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239099&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="scheduleweb">Изменение графика работы в web-приложении</h5>
<p>В web-приложении можно отредактировать смены можно двумя способами.</p>

<ol>
    <li><strong>Первый способ</strong>: в карточке <strong>Сотрудника</strong> (меню <strong>Пользователи -
        Сотрудники</strong>) на вкладке <strong>Трудоустройство</strong>. На вкладке <strong>Трудоустройство</strong> вы
        увидите уже заданный график работ. Подробнее
        читайте в
        статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/OnDuty/Schedule.jpg"/>
        </div>
        <p>Обратите внимание! Смены можно устанавливать, даже если в карточке сотрудника НЕ выбран график работ.</p>
        <p>Нажмите кнопку <strong>Редактировать смену</strong> и выберите необходимую дату для детальной настройки:</p>
        <ul>
            <li>если вы выбрали рабочий день, то вы можете отредактировать время выхода на смену, либо сделать день
                нерабочим, выбрав вариант <strong>Не на смене</strong>.
                <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>;</p>
                <p>
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/OnDuty/EdittingSchedule.jpg"/>
                </div>
                </p>
            </li>
            <li>если вы выбрали выходной день, то вы можете сделать день рабочим, выбрав вариант <strong>На
                смене</strong> и
                указать время
                смены;
                <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>.</p>
                <p>
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/OnDuty/EdittingSchedule2.jpg"/>
                </div>
                </p>
            </li>
        </ul>
    </li>
    <li><strong>Второй способ</strong>: в расписании заявок (меню <strong>Заявки -
        Расписание заявок</strong>) при работе в любом из режимов представления (день, неделя, месяц) у каждого <strong>Сотрудника</strong>
        в списке отображается индикатор смены: зеленый
        значок – на
        смене в текущее время, серый значок – не на смене. Для редактирования смены необходимо нажать на контекстное меню (три точки) и выбрать пункт <strong>
            Редактировать
            смену</strong>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/OnDuty/Calendar.jpg"/>
        </div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/OnDuty/Calendar2.jpg"/>
        </div>
        </p>
        <p>Выберите необходимую дату для детальной настройки:</p>
        <ul>
            <li>если вы выбрали рабочий день, то вы можете отредактировать время выхода на смену, либо сделать день
                нерабочим, выбрав вариант <strong>Не на смене</strong>.
                <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>;</p>
            </li>
            <li>если вы выбрали выходной день, то вы можете сделать день рабочим, выбрав вариант <strong>На
                смене</strong> и
                указать время
                смены;
                <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>.</p>
            </li>
        </ul>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/OnDuty/Calendar3.jpg"/>
        </div>
    </li>
</ol>

<h5 id="schedulemob">Изменение графика работы в мобильном приложении исполнителя</h5>

<p>Прочтите пошаговую инструкцию ниже или посмотрите обучающий видеоролик <strong>Мобильное приложение инженера. Как
    работать сервисному специалисту на телефоне?</strong> В нем вы найдете широкий обзор функциональных возможностей
    мобильного приложения для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с <Strong>Заявками</Strong>,
    с чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом На смене. </p>

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

<p>Отредактировать заданный график работы исполнитель может самостоятельно в мобильном приложении <strong>HubEx исполнитель</strong>. </p>
<p>Обратите внимание! Смены можно устанавливать, даже если в карточке сотрудника НЕ выбран график работ.</p>
<p>Скачать мобильное приложение можно по ссылкам <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B/id1386688688">для
    iOS</a>.</p>

<p>Откройте боковое меню и нажмите на иконку исполнителя. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob.jpg"/>
</div>

<p>Перед вами откроется заданный график работы.
    Напоминаем, что
    график работы устанавливается в web-приложении в карточке <strong>Сотрудника</strong> на вкладке <strong>Трудоустройство</strong>.
    Подробнее читайте в
    статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 55%;"
         src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob2.jpg"/>
</div>

<p>Выберите необходимую дату для детальной настройки:</p>

<ul>
    <li>если вы выбрали рабочий день, то вы можете отредактировать время выхода на смену, либо сделать день
        нерабочим, выбрав вариант <strong>Не на смене</strong>.
        <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>;</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 55%;"
                 src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob3.jpg"/>
        </div>
        </p>
    </li>
    <li>если вы выбрали выходной день, то вы можете сделать день рабочим, выбрав вариант <strong>На смене</strong> и
        указать время
        смены;
        <p>После внесения изменений нажмите кнопку <strong>Сохранить</strong>.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 55%;"
                 src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob4.jpg"/>
        </div>
        </p>
    </li>
</ul>

<h5 id="onduty">Функционал На смене</h5>

<p>Диспетчеру сервисной службы или начальнику сервиса удобно видеть сотрудников, которые работают в данный момент
    времени, чтобы оперативно назначать на них <strong>Заявки</strong>.</p>
<p>Сервисному специалисту также важно предупреждать работодателя о том, что он приступил к работе, чтобы получать
    <strong>Заявки</strong>, либо закончил смену и не может больше брать <strong>Заявки</strong>.</p>

<p>В мобильном приложении <strong>HubEx исполнитель</strong> перейдите в боковое меню. Для того чтобы начать смену, нажмите кнопку
    <strong>Начать смену</strong>.</p>
<p>Обратите внимание! Вы НЕ можете указать
    другое время начала смены. Поле
    <strong>Время по</strong> заполняется автоматически, исходя из настроек графика.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 55%;"
         src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob5.jpg"/>
</div>

<p>Если вы хотите уменьшить или
    увеличить количество часов в смене, то сначала измените ее, и только потом нажимайте кнопку <strong>Начать
        смену</strong>. Как изменить настройки смены на любой день, описано <a href="#schedulemob">выше</a>. </p>

<p>По завершению рабочего дня перейдите также в боковое меню и нажмите кнопку <strong>Завершить
    смену</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 55%;"
         src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob6.jpg"/>
</div>

<p>По завершению смены вы увидите расчет времени смены и нажмите кнопку <strong>Сохранить</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 55%;"
         src="/attachments/images/FAQ/USER/OnDuty/ScheduleMob7.jpg"/>
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
- [Создание плановой заявки](./PlannedTickets.md)
- [Календарь заявок](./Calendar.md)
- [Чек-листы](./Checklists.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
