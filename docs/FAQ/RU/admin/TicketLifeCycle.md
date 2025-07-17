---
title: Жизненный цикл заявки
description: Настройка жизненного цикла заявки в HubEx находится в меню консоли администрирования Настройки заявки - Жизненный цикл заявки. Жизненный цикл можно скопировать из уже созданного и настроенного для Типа заявки. Создайте новый Тип заявки в меню Настройки заявки - Типы заявок и заполните параметр Шаблонный тип заявки.
keywords: жизненный цикл заявки, жизненный цикл, ветки жизненного цикла, копирование жизненного цикла, копировать жизненный цикл, hubex, хабекс, хубекс, хабикс
---

#### Жизненный цикл заявки
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
<p>В этом разделе вы узнаете:</p>
<ul>
    <li><a href="#lifecyclecreate">Как создать и скопировать жизненный цикл</a>;</li>
      <li><a href="#lifecycle">Как настроить жизненный цикл</a>;</li>
    <li><a href="#lifecyclebrunch">Как использовать разные ветки жизненного цикла</a>.</li>
</ul>
<p><strong>Жизненный цикл заявки</strong> - это совокупность стадий, по которым проходит <Strong>Заявка</Strong>, и описание
    взаимодействия между
    стадиями. <Strong>Стадия</Strong> - это состояние <Strong>Заявки</Strong> на каждом этапе жизненного цикла,
    требующее определенных действий от системы
    или пользователя. Жизненный цикл строится на основе бизнес-процесса, который вы определяете для
    <Strong>Заявки</Strong>. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/BusinessProcess.html">Пример базового
        бизнес-процесса для Заявки</a>.</p>

        <p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Настройка жизненного цикла для заявок в HubEx</strong>.</p>

<div class="video-player-container" data-player-id="player28">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/81JjWYuMNwY" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239125&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="lifecyclecreate">Создание и копирование жизненного цикла</h5>
<p>Создание и настройка жизненного цикла находится в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администратора</a> в меню <Strong>Настройки заявки - Жизненный цикл заявки</Strong>. Жизненный цикл создается и настраивается для <Strong>Типа заявки</Strong> и содержит в себе информацию о переходах по <Strong>Стадиям заявки</Strong>. Поэтому перед созданием и настройкой жизненного цикла должны быть созданы <Strong>Стадии заявки</Strong> и <Strong>Тип заявки</Strong>. Есть два способа создания и настройки жизненного цикла:
<ol>
    <li>Копирование жизненного цикла: вы можете скопировать жизненный цикл настроенный для другого <Strong>Типа
        заявки</Strong>. Для
        этого откройте меню консоли <Strong>Настройки заявки - Типы
            заявки</Strong>. Создайте новый <Strong>Тип заявки</Strong> и заполните параметр <Strong>Шаблонный тип
            заявки</Strong> - здесь вы должны указать тот тип,
        для которого жизненный цикл уже был настроен. Затем перейдите в меню <Strong>Настройки заявки - Настройка
            жизненного
            цикла</Strong> и внесите необходимые изменения для созданного <Strong>Типа заявки</Strong>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 65%;"
             src="/attachments/images/FAQ/ADMIN/TicketLifeCycle/TicketType.jpg"/>
    </div>

    <li>Создание с нуля: вы можете создать <Strong>Тип заявки</Strong>, не указывая <Strong>Шаблонный тип
        заявки</Strong>. А затем перейти в меню
        <Strong>Настройки заявки - Настройка жизненного цикла</Strong> и создать жизненный цикл для созданного <Strong>Типа
            заявки</Strong> с нуля.
    </li>
</ol>
</p>

<p>Подробнее читайте в статьях: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>, <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a></p>

<h5 id="lifecycle">Настройка жизненного цикла</h5>
<p>Рассмотрим подробнее настройку жизненного цикла. Для каждого жизненного цикла должен быть задан <Strong>Маршрут
    заявки</Strong>: <Strong>Начальная</Strong> и
    <Strong>Конечная стадии</Strong>. Кликните левой кнопкой мыши на одну из них. Откроется форма настройки
    маршрута. Обратите внимание на поле <Strong>Статус заявки</Strong> – это визуальное отображение <Strong>Стадии
        заявки</Strong> для мобильного
    приложения заказчика. Создать <Strong>Статус заявки</Strong> можно в меню консоли <Strong>Настройки заявки - Статусы
        заявки</Strong>. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StatusType.html">Статусы заявки</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/TicketLifeCycle/StartEnd.jpg"/>
</div>
<p>Далее переходим к <Strong>Настройке переходов между стадиями</Strong> (этот пункт появляется только когда настроен
    <Strong>Маршрут заявки</Strong>).
    Здесь вы настраиваете всевозможные переходы. Что происходит со стандартной заявкой на ремонт после ее
    создания (стадия <Strong>Новая</Strong>)? Она должна быть назначена на специалиста для выполнения: со стадии
    <Strong>Новая</Strong> переходит на стадию <Strong>Назначена</Strong>. Значит необходимо добавить и описать
    такой переход.</p>
<p>Слева из списка выберите с какой стадии осуществлять переход. Справа нажимаете кнопку <Strong>Добавить стадию</Strong>,
    чтобы указать на какую стадию будет осуществляться переход. Если у вас уже есть добавленная
    стадия, нажмите на нее, чтобы открыть окно настройки перехода.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/TicketLifeCycle/StageSettings.jpg"/>
</div>
<p>Рассмотрим параметры перехода по стадиям:</p>
<ul>
    <li><Strong>Переход на стадию</Strong>: здесь вы указываете, на какую стадию совершается переход. Это поле
        скрывается после первого
        сохранения настройки перехода.
    </li>
    <li><Strong>Название перехода</Strong> - это название кнопки в заявке для перехода на стадию в мобильном приложении
        исполнителя и
        заказчика.
        Перевод <Strong>Заявки</Strong> по стадиям в мобильном приложении осуществляется в открытой
        <Strong>Заявке</Strong> на панели навигации,
        расположенной внизу формы.
    </li>
    <li><Strong>Описание перехода</Strong>: заполняется в свободной форме для пояснения перехода.</li>
    <li id="lifecyclebrunch">Выбор <Strong>Ветки жизненного цикла</Strong> позволяет визуально разделять переходы по
        <Strong>Стадиям заявки</Strong>:
        <ol>
            <li><Strong>основная ветка</Strong> - это ветка, на которой происходит движение <Strong>Заявки</Strong> по
                основным стадиям, например,
                назначение исполнителя, выезд на объект и т.д. (отображается красным маркером);
            </li>
            <li><Strong>ветка согласования</Strong> - ветка для этапов согласования, например, закупки новых материалов
                по заявке
                (отображается фиолетовым маркером). В мобильном приложении <Strong>Заявки</Strong>, находящиеся на ветке
                согласования,
                отображаются на отдельной вкладке <Strong>Согласование</Strong>;
            </li>
            <li><Strong>ветка действий заказчика</Strong> - эту ветку следует выбрать, если дальнейший переход зависит
                от действий
                заказчика (отображается голубым маркером).
            </li>
        </ol>
    </li>
    <li><Strong>Изменить статус заявки</Strong>: данный флажок устанавливается, если при переходе на стадию необходимо
        изменить <Strong>Статус
            заявки</Strong> в мобильном приложении заказчика.
    </li>
    <li><Strong>Выполнить автоматический переход</Strong>: автоматический переход необходим для той стадии, при переходе
        на которую
        применяется <Strong>Правило автоназначения исполнителя</Strong>.
        Спустя указанное время (например, 2 минуты) система с помощью правила подберет и назначит исполнителя и
        переведет заявку на эту стадию автоматически. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>.
    </li>
    <li><Strong>Автоматический переход до наступления срока исполнения</Strong> будет срабатывать за определенное время
        до наступления
        крайнего срока закрытия заявки (дедлайна). Время можно задать вручную.
        Например, может использоваться для перехода на стадию действия руководителя, если по каким-то причинам не был
        назначен исполнитель.
    </li>
    <li>Установка флажка <Strong>Предоставить доступ отдельным ролям</Strong> означает, что осуществлять переход на
        стадию смогут только
        пользователи с выбранными в данной настройке ролями. <Strong>Роли</Strong> создаются и настраиваются в консоли в
        меню
        <Strong>Администрировани - Роли</Strong> и привязываются к каждому пользователю системы (<Strong>Сотруднику</Strong> и <Strong>Заказчику</Strong>). Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.
    </li>
    <li><Strong>Добавить роль для особенной настройки</Strong> (кнопка)/<Strong>Настройка перехода для роли</Strong>:
        для определенных ролей можно задать
        свою настройку <Strong>Название перехода</Strong> - другое наименование кнопки в заявке для перехода
        на стадию в мобильном приложении исполнителя и заказчика.
        Например, в настройках стадии <Strong>Назначена</Strong> название перехода для всех ролей будет <Strong>Назначить</Strong>,
        а для сервисного
        специалиста название перехода будет <Strong>Принять заявку</Strong>, так в приложении сервисный специалист
        увидит кнопку с
        названием <Strong>Принять заявку</Strong>, а пользователи с другими ролями увидят кнопку
        <Strong>Назначить</Strong>.
        <p>Удалить роль для особенной настройки можно по кнопке <Strong>Удалить</Strong> (красный значок корзины).</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/TicketLifeCycle/SpecialRoleSettings.jpg"/>
        </div>
    </li>
</ul>

<p>С одной стадии заявка может переходить на несколько разных стадий. Например, после назначения заявки исполнитель
    может поехать на выполнение (стадия <Strong>Выехал на объект</Strong>), может отказаться по каким-то причинам
    (стадия <Strong>Отказ
        исполнителя</Strong>) и т.д., а также заказчик может отказаться от заявки (стадия <Strong>Отказ
        заказчика</Strong>). Каждый такой переход
    необходимо настроить.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/TicketLifeCycle/ManyStages.jpg"/>
</div>

<p>Обратите внимание! Если вы удалите стадию, переход на нее работать не будет (в web и мобильных приложениях в <Strong>Заявке</Strong> будет отсуствовать соответствующая кнопка). Если стадия была удалена, а затем создана снова с таким же наименованием, то переход на стадию в настройках жизненного цикла нужно будет удалить и создать заново. </p>

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
- [Согласование заявок: линейное и параллельное согласование](./TicketsAgreement.md)
- [Согласование с заказчиком: жизненный цикл, стадии согласования, уведомления](./CustomerAgreement.md)
- [Базовый бизнес-процесс для заявки](./BusinessProcess.md)


____
- [Перейти в меню](http://wiki.hubex.ru)
