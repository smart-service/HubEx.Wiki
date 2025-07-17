---
title: Автоназначение на ближайшего исполнителя
description: Назначать сотрудников по геопозиции можно с помощью настройки Стадии заявки. В настрйоках Стадии заявки выберите в поле Действие пункт Назначить заявку на наиболее подходящего с учетом его удаленности от заявки.
keywords: автораспределение на ближайшего, автоназначение ближайшего исполнителя, автовыбор ближайшего исполнителя, правило выбора исполнителя, правила выбора, правило выбора, автоназначение исполнителя, правило автоназначения, hubex, хабекс, хубекс, хабикс
---

#### Автоназначение на ближайшего исполнителя
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

<p>В этом разделе вы научитесь:</p>
<ul>
    <li><a href="#rulesgeo">Назначать ближайшего по геопозиции исполнителя на Заявку;</a></li>
    <li><a href="#customrules">Настраивать Стадии заявки и Правила автоназначения исполнителя.</a></li>

</ul>

<p>Правила автоназначения исполнителя помогут системе
    Hubex в автоматическом режиме подбирать исполнителя по заданным критериям. Подробно о создании правил автоназначения
    сотрудников можно прочитать <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">здесь</a>. В
    текущей статье будет рассмотрено, как настроить подбор сотрудника по геопозиции и сделать комплексную настройку
    подбора по
    геопозиции и <strong>Виду работ</strong>.</p>

<h5 id="rulesgeo">Назначение ближайшего по геопозиции исполнителя на Заявку</h5>
<p>Назначать сотрудников по геопозиции можно с помощью настройки <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>:</p>
<ol>
    <li>В консоли администрирования перейдите на вкладку <strong>Настройки заявки - Стадии
        заявки</strong>.
    </li>
    <li>Выберите необходимую стадию, например, <strong>Назначена</strong>. При переходе на выбранную стадию будет
        происходить
        назначение
        сотрудника на <strong>Заявку</strong>.

    </li>
    <li>В поле <strong>Действие</strong> выберите пункт <Strong>Автоназначение с учетом удаленности от заявки</Strong>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/StageTicket.jpg"/>
    </div>
    <li>Сохраните изменения.
        <p> Обратите внимание! Если вы будете создавать новую <strong>Стадию заявки</strong>, необходимо будет
            изменить настройку <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненного цикла заявки</a>,
            если он уже был создан и настроен.</p>
    </li>
    <li>Автоматическое назначение сотрудника подразумевает автоматический переход на <strong>Стадию заявки</strong>,
        которую вы настроили
        в пункте 3. Настроить переход необходимо там же в консоли администратора в меню <strong>Жизненный цикл
            заявки</strong>:
    </li>
    <ul>
        <li>Выберите <strong>Тип заявки</strong>, для которого настраивается цикл;</li>
        <li>Выберите необходимый переход. В пункте 3 мы настраивали стадию <strong>Назначена</strong>, значит и здесь
            выбрать должны
            переход на нее;
        </li>
        <li>По щелчку мыши на стадию <strong>Назначена</strong> справа откроется форма <strong>Настройки
            перехода</strong>. Установите флажок <strong>Выполнить
            автоматический переход</strong> и укажите, спустя какое время система должна назначить исполнителя.
            Например, 1 минуту.
            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 90%;"
                     src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/CustomStage.jpg"/>
            </div>
            </p>
        </li>
        <li>Сохраните изменения.</li>
    </ul>
    <p>Создадим <strong>Заявку</strong> на ремонт кофемашины и посмотрим, какого специалиста подберет система спустя
        одну минуту. </p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/Ticket.jpg"/>
    </div>
    <p>Система подобрала специалиста, и в <strong>Заявке</strong> на карте отобразилось расстояние исполнителя до
        <strong>Объекта</strong>. По карте мы можем удостовериться, что наш специалист находится в зоне
        <strong>Заявки</strong>. </p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/TicketAssigned.jpg"/>
    </div>
    <p>Карту можно открыть в <strong>Заявке</strong>, в пункте <strong>Исполнитель - Показать исполнителей на
        карте</strong>.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/Map.jpg"/>
    </div>

</ol>

<h5 id="customrules">Настройка Стадии заявки и Правила автоназначения исполнителя</h5>
<p>В дополнение к автоматическому назначению по геопозиции в системе HubEx можно настроить правило автоназначения. То
    есть
    уточнить подбор <strong>Сотрудника</strong>. Например, подобрать <strong>Сотрудника</strong> по геопозиции и
    <strong>Виду работ</strong>.</p>
<p><strong>Вид работ</strong> - специализация вашего сотрудника. Например, он квалифицируется на Монтаже оборудования и
    (или)
    Ремонте. Также виды работ заполняются у <strong>Объектов</strong>. Это один из способов настроить четкое разделение
    в системе HubEx в
    случае специализации на разнообразных услугах.</p>
<p>Рассмотрим, как создать <strong>Правило автоназначения исполнителя</strong> по виду
    работ и добавить его к автоматическому выбору по геопозиции.</p>
<ol>
    <li>Создать <strong>Правило автоназначения исполнителя</strong> можно двумя способами:
        <ul>
            <li>в консоли администрирования в меню <strong>Настройки заявки - Автоназначение
                исполнителя</strong>.
                Нажмите кнопку <strong>Создать правило</strong>. Подробную статью о правилах автоназначения можно
                прочитать <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">здесь</a>;
            </li>
            <li>на форме создания/редактирования <strong>Стадии заявки</strong>. После выбора действия <Strong>Автоназначение с учетом
                удаленности от заявки</Strong> (или <Strong>Автоназначение по правилу</Strong>) появится поле для выбора
                правила. По кнопке <strong>+</strong> можно создать новое правило.
            </li>
        </ul>
<p>Рассмотрим далее создание правила по второму способу - на форме Стадии заявки.</p>
    </li>
    <li>Ведите название, например, Выбор исполнителя по видам работ. Установите флажок у параметра <strong>Вид
        работ</strong>.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/RulesOfChoiseGEO/RulesOfChoise.jpg"/>
    </div>
    </p>
    <li>Сохраняем действия. Таким образом, система будет
        подбирать
        исполнителя
        с совпадающим <strong>Видом работ</strong> в <strong>Заявке</strong> и карточке <strong>Сотрудник</strong>.
    </li>
    
</ol>

<p>Дополнительно ознакомьтесь с видеороликом <strong>Автоназначение исполнителей на заявки</strong>.</p>

<div class="video-player-container" data-player-id="player27">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/IEsB3xWJVRQ" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239098&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
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
- [Стадии заявки](/docs/FAQ/RU/admin/StageType.html)
- [Поля на форме заявки: настройка доступа к полям заявки](/docs/FAQ/RU/admin/ElementsOfInterface.html)
- [Жизненный цикл заявки](/docs/FAQ/RU/admin/TicketLifeCycle.html)

___
- [Перейти в меню](http://wiki.hubex.ru)
