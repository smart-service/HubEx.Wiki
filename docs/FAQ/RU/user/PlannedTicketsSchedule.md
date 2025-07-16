---
title: График обслуживания объектов
description: График обслуживания объектов - это форма представления Плановых заявок. График позволяет увидеть картину запланированных работ в разрезе оборудования и периода, а также сокращает время работы исполнителей, работающих с Плановыми заявками.
keywords: плановая заявка, планировщик работ, график обслуживания объектов, график обслуживания, hubex, хабекс, хубекс, хабикс
---

#### График обслуживания объектов

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

<p><strong>График обслуживания объектов</strong> - это форма представления <strong>Плановых заявок</strong>. Он
    используется при работе с
    планово-предупредительными работами, техническим обслуживанием объектов.</p>

<p>График позволяет увидеть картину запланированных работ в разрезе оборудования и периода, а также сокращает время работы
    исполнителей, работающих с <strong>Плановыми заявками</strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/PlannedTickets.html">Создание плановой заявки</a>.</p>

<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>График обслуживания</strong>.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/tC8K8xPxTSM" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239124&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p>График находится в меню <strong>Заявки - Планировщик работ</strong>. С помощью переключателя можно выбрать режим
    работы либо с
    <strong>Плановыми заявками</strong>, либо с <strong>Графиком обслуживания объектов</strong>. При работе с графиком кнопка <strong>Создать заявку</strong> также будет доступна для создания <strong>Плановой заявки</strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Menu.jpg"/>
</div>

<p>В графике отображаются <strong>Заявки</strong>, созданные через планировщик за выбранный период времени.</p>
<p>На панели параметров график необходимо настроить:</p>
<ul>
    <li><strong>Тип заявки</strong>: выбор <strong>Тип заявки</strong> - обязательное условие для формирования графика,
        можно выбрать как один, так и несколько типов;
    </li>
    <li><strong>Вид работ</strong>: также позволяет уточнить построение графика для одного или нескольких <strong>Видов
        работ</strong>, указанных в плановых Заявках;
    </li>
    <li><strong>Заказчик</strong>: выбор <strong>Заказчика</strong> - одно из условий для формирования <strong>Графика
        обслуживания объектов</strong>. <strong>График обслуживания объектов</strong> может быть сформирован как для одного, так и для нескольких  <strong>Заказчиков</strong>. <strong>Заказчик</strong> выбирается из списка <strong>Компаний</strong>,
        в карточке которых выбран тип <strong>Заказчик</strong>
        или <strong>Наша компания</strong>. В списке будут доступны только те <strong>Заказчики</strong>, по которым были созданы <strong>Плановые заявки</strong>;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Customer.jpg"/>
    </div>
    </p>
    <li>в полях <strong>Тип объекта</strong> и <strong>Класс объекта</strong> можно уточнить параметры для дальнейшего
        выбора <strong>Объектов</strong> для построения графика. Также класс и тип могут участвовать в группировке
        графика (задать группировку можно в параметре <strong>Группировка объектов по</strong>);
    </li>
    <li><strong>Объект</strong>: вы можете выбрать один или несколько <strong>Объектов</strong> компании-заказчика, по
        которым хотите сформировать график. Обратите внимание, выбрать можно только родительский объект. При выборе
        родительского объекта
        автоматически будут выбраны все его дочерние объекты;
    </li>
    <li>в полях <strong>Период С - По</strong> необходимо задать период, на который нужно отобразить график
        обслуживания;
    </li>
    <li>в параметре <strong>Группировка периода по</strong> можно указать одно из трех значений:
        <ul>
            <li><strong>по дням</strong> - график будет представлен в виде таблицы по каждому <strong>Объекту</strong> с
                детализацией по
                количеству <strong>Заявок</strong> на каждый день выбранного периода;
            </li>
            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 95%;"
                     src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Day.jpg"/>
            </div>
            </p>
            <li><strong>неделям</strong> - график будет представлен в виде таблицы по каждому <strong>Объекту</strong> с
                детализацией по
                количеству <strong>Заявок</strong> на каждую неделю выбранного периода. В заголовке столбца указана дата начала недели;
            </li>
            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 95%;"
                     src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Week.jpg"/>
            </div>
            </p>
            <li><strong>месяцам</strong> - график будет представлен в виде таблицы по каждому <strong>Объекту</strong> с
                детализацией по
                количеству <strong>Заявок</strong> на каждый месяц выбранного периода;
            </li>
            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 95%;"
                     src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Month.jpg"/>
            </div>
            </p>
        </ul>
    </li>
    <li>в поле <strong>Группировка объектов по</strong> можно задать группировку <strong>Объектов</strong> в таблице по классам, типу или
        оставить группировку по умолчанию.
    </li>
</ul>
<p>Обратите внимание! Для формирования <strong>Графика обслуживания объектов</strong> после заполнения всех параметров необходимо нажать кнопку
    <strong>Просмотр отчета</strong>. При изменении любых настроек графика кнопку <strong>Просмотр отчета</strong> нужно
    нажимать повторно.</p>
     <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Button.jpg"/>
    </div>
    </p>
<p>Готовый график можно распечатать с помощью меню <strong>Файл - Печать</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Print.jpg"/>
</div>
<p>Также график можно экспортировать в различные форматы - pdf, xlsx, docx, xml и другие. Для последующего
    редактирования файла рекомендуется выбирать формат xlsx.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PlannedTicketsSchedule/Export.jpg"/>
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
- [Создание дополнительных полей в заявке](./AdditionalFieldsOld.md)
- [Календарь заявок](./Calendar.md)
- [Чек-листы](./Checklists.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
