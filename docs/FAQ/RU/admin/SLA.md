---
title: SLA - Правила расчета крайнего срока закрытия заявки
description: Важный критерий качества предоставляемых услуг - соблюдение сроков выполнения заявок. Временные нормы могут быть прописны в договорах с вашими закзчиками и  отличаться по критичности, видам выполняемых работ и т.д. Закрепленные в договорах показатели качества услуг называют специальным термином - SLA (Service Level Agreement, Соглашение об уровне сервиса).
keywords: сла, sla, правило расчета крайнего срока закрытия, расчет срока закрытия, расчет крайнего срока, крайний срок закрытия, срок закрытия заявки, срок выполнения заявки, hubex, хабекс, хубекс, хабикс
---

#### SLA - Правила расчета крайнего срока закрытия заявки
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
<meta charset="utf-8">
</head>
<body>
<!--В этом разделе вы узнаете:
<ul>
    <li><a href="#rules">Как создавать правила расчета крайнего срока закрытия заявки.</a></li>
    <li><a href="#schedule">Как создавать графики работ</a></li>
</ul>-->

<p>Важный критерий качества предоставляемых услуг - соблюдение сроков выполнения заявок. Временные нормы могут быть
    прописаны в
    договорах (контрактах) с вашими заказчиками и отличаться по критичности, видам выполняемых работ и т.д. </p>
<p>Закрепленные в договорах показатели качества услуг называют специальным термином - SLA (Service Level Agreement,
    Соглашение об уровне сервиса). </p>
    
<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Настройка SLA: расчет крайнего срока закрытия заявки</strong>.</p>

<div class="video-player-container" data-player-id="player2">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/kSNXDTwOQuo" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239097&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="rules">Правила расчета крайнего срока закрытия заявки</h5>

<p>Учет SLA в HubEx позволяет создавать гибкие правила для расчета крайнего срока закрытия заявки. При совпадении
    параметров в <strong>Заявке</strong> и правиле расчета <strong>Крайний срок закрытия</strong> (поле в <strong>Заявке</strong>) заполняется автоматически. Правило, по
    которому был рассчитан срок будет указано на форме <strong>Заявки</strong> внизу. </p>

   <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/ADMIN/SLA/Ticket.jpg"/>
        </div>


<p>Если <strong>Крайний
    срок закрытия</strong> в <strong>Заявке</strong> был установлен вручную, он не будет изменен с помощью правила. Если в системе не настроено или
    не включено ни одного правила срок закрытия может быть установлен по параметрам, заданным в <strong>Типе заявки</strong> или <strong>Виде
        работ</strong>. Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>.</p>


<p>Правила расчета крайнего срока закрытия находятся в консоли администратора в меню <strong>Настройки заявки - SLA: расчет
    крайнего срока закрытия</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/ADMIN/SLA/SLA.jpg"/>
</div>

<p>Создать новое можно по кнопке <strong>Создать правило</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/ADMIN/SLA/SLA2.jpg"/>
</div>


<p>В названии введите наименование правила для удобной идентификации. Название правила будет отображаться в поле <strong>Правило расчета крайнего срока закрытия</strong> на форме <strong>Заявки</strong>.</p>
    <p>Правило расчета времени закрытия заявки может быть настроено в разрезе <strong>Типа заявки</strong>, <strong>Критичности</strong>, <strong>Вида работ</strong>, а также
    индивидуально для конкретной <strong>Компании-заказчика(ов)</strong> и <strong>Объекта(ов)</strong> обслуживания. При создании <strong>Заявки</strong> система определит
    соответствие с параметрами, указанными в правилах и установит значение даты и времени в поле <strong>Крайний срок закрытия</strong> в
    <strong>Заявке</strong>. </p>
<p>Правило можно создать только на один <strong>Тип заявки</strong>, одну <strong>Критичность</strong> и один <strong>Вид работ</strong>. Либо по каждому из пунктов можно
    выбрать значение <strong>Все</strong> - оно
    означает, что правило будет работать для всех <strong>Типов заявок</strong>, <strong>Видов работ</strong> и <strong>Всех критичностей</strong>.</p>
<p><strong>Заказчика(ов)</strong> можно выбрать из справочника <strong>Компании</strong> с помощью следующих параметров:</p>
<ul>
    <li><strong>Все</strong>: означает, что правило расчета крайнего срока будет действовать на всех уже внесенных в систему <strong>Компаний-заказчиков</strong>,
        а также на тех, которые будут создаваться в будущем;
    </li>
    <li><strong>По списку</strong>: позволяет выбрать из списка уже созданных заказчиков.</li>
</ul>

<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/ADMIN/SLA/SLA3.jpg"/>
</div>

<p>При выборе <strong>Заказчика(ов)</strong> становится доступным выбор <strong>Объектов</strong>, которые принадлежат выбранному
    <strong>Заказчику(ам)</strong>. </p>
<p><strong>Объекты</strong> можно выбрать по следующим параметрам:</p>
<ul>
    <li><strong>Все</strong>: означает, что правило расчета крайнего срока будет действовать на все уже внесенные в систему <strong>Объекты</strong>
        выбранного <strong>Заказчика</strong>, а также на те, которые будут создаваться в будущем;
    </li>
    <li><strong>По списку</strong>: позволяет выбрать из списка уже созданных <strong>Объектов</strong>;</li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 85%;"
             src="/attachments/images/FAQ/ADMIN/SLA/SLA4.jpg"/>
    </div>


    <li><strong>Все за исключением</strong>: правило будет распространяться на все <strong>Объекты</strong>, которые НЕ выбраны в исключениях, а
        также на те, которые будут создаваться в будущем.
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 85%;"
             src="/attachments/images/FAQ/ADMIN/SLA/SLA5.jpg"/>
    </div>

</ul>

<p><strong>График обслуживания</strong> определяет рабочее время выполнения <strong>Заявок</strong>. <strong>Графики обслуживания</strong>, как и <strong>Графики работ</strong>
    исполнителей встроены в систему. Если вы не нашли подходящий,
    напишите в Чат с
    поддержкой в web-приложении или на почту <a href="mailto:support@hubex.ru" target="_blank" rel="noopener">
        support@hubex.ru</a>. Мы добавим ваш уникальный график.</p>

<p><strong>Плановое время закрытия заявки</strong> определяет максимальный срок выполнения работ по <strong>Заявке</strong>.
    Например, обслуживание заказчика происходит по будням с 9:00 до 18:00, <strong>Заявка</strong> была подана в четверг в 17.00,
    <strong>Плановое время закрытия заявки</strong> равно 6 часам, значит <strong>Крайний срок закрытия</strong> будет установлен на пятницу
    14:00.
</p>
<p>Чтобы правило начало работать, его необходимо включить. Включить правило также можно позже в общем списке всех правил
    с помощью переключателя (установить в положение "Включено").</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/ADMIN/SLA/SLA6.jpg"/>
</div>


<p>Если в разрезе <strong>Типа заявки</strong>, <strong>Критичности</strong>, <strong>Вида работ</strong>, <strong>Заказчика</strong> и <strong>Объекта</strong> будет создано несколько правил, работать
    будет, то, которое по <strong>Графику обслуживания</strong> попадает на текущее время. Если совпадают <strong>Графики обслуживания</strong>, то
    выбрано будет правило с наименьшим сроком закрытия.</p>

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
- [Настройка оповещений](./Notifications.md)
- [Создание дополнительных полей в объекте](https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html)
- [Создание дополнительных полей в заявке](https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html)

____
- [Перейти в меню](http://wiki.hubex.ru)
