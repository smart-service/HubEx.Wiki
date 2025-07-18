---
title: Прикрепление выполненных работ в web и мобильном приложении
description: Добавить выполненную работу можно Заявке на вкладке Выполнение по кнопке Создать работу. Вы можете добавлять несколько выполненных работ, если Заявка выполнялась в несколько этапов, дней и т.д. Все выполненные работы войдут в итоговую сумму Акта выполненных работ. Поэтому внимательно заполняйте время выполнения.
keywords: выполненные работы, офлайн, нет интернета, выполнение офлайн, создать работу, добавить работу, ставка работника, израсходованные материалы, работа, hubex, хабекс, хубекс, хабикс
---

### Прикрепление выполненных работ в web и мобильном приложении
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
    <li><a href="#web">Прикреплять выполненные работы к Заявке в web-приложении</a>;</li>
    <li><a href="#mobile">Прикреплять выполненные работы к Заявке в мобильном приложении исполнителя</a>;</li>
    <li><a href="#offline">Прикреплять выполненные работы в мобильном приложении без подключения к интернету.</a></li>
    <!-- <li><a href="#payment">Отправка Счета на оплату заказчику и оплата Акта.</a></li> -->
</ul>
<p>Заполнение выполненных работ в <strong>Заявке</strong> позволяет отслеживать выполнение согласно требованиям
    заказчика,
    контролировать ход выполнения <strong>Заявки</strong>, а также позволяет сформировать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a> и т.д. </p>

<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Заполнение выполненных работ и их помощь в оцифровке ваших показателей и KPI</strong>.</p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/4BK9PCQ60N0" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239095&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="web">Прикрепление выполненных работ в Заявке в web-приложении</h5>
<p>Чтобы добавить выполненную работу, перейдите в <strong>Заявке</strong> на вкладку <strong>Выполнение</strong> и
    нажмите кнопку <strong>Создать работу</strong>.</p>
<p>Вы можете добавлять несколько выполненных работ, если <strong>Заявка</strong> выполнялась в несколько этапов, дней и
    т.д. Все
    выполненные работы войдут в итоговую сумму <strong>Акта выполненных работ</strong>.</p>
<p>В форме выполненной работы заполните необходимые поля:</p>
<ul>
    <li><strong>Объект/Оборудование</strong> заполняется по данным вкладки <strong>Заявка</strong> и не изменяется;</li>
    <li><strong>Вид работ</strong> заполняется также по <strong>Заявке</strong>, но может быть изменен;</li>
    <li><strong>Исполнитель</strong> заполняется по вкладке <strong>Заявка</strong>, но его также можно изменить.
        Обратите внимание на параметр
        <strong>Ставка/час</strong>. Он устанавливается в карточке <strong>Сотрудника</strong> (на вкладке <strong>Квалификация</strong>).
        Ставку работника при заполнении
        работ вы можете изменить вручную;
    </li>
    <li>Укажите даты начала, окончания работ и время. Количество указанных часов будет умножено на ставку <strong>Сотрудника</strong>
        при
        формировании <strong>Акта выполненных работ</strong>;
    </li>
    <li>В поле <strong>Комментарий</strong> к выполненной работе можно указать подробную информацию о выполненных
        действиях на <strong>Объекте</strong>,
        оставить замечания. Эти заметки в дальнейшем помогут восстановить историю работ на <strong>Объекте</strong>;
    </li>
    <li>Стоимость <strong>Израсходованных материалов</strong> также будет формировать итоговую сумму <strong>Акта
        выполненных работ</strong>. Для
        работы с материалами необходимо импортировать их в систему HubEx. Подробнее об этом читайте в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Withdrawals.html">Загрузка материалов и создание
            складов</a>;
    </li>
    <li>В качестве <strong>Файлов</strong> вы можете прикрепить, например, фотографию готовой работы.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/Work.jpg"/>
</div>

<p>Обратите внимание! Для выполненных работ можно создать дополнительные поля. Дополнительные поля расширяют возможности внесения и хранения учетной информации. Например, для выполненных работ можно создать поля Дата следующей проверки, Описание внешнего состояния объекта и т.д. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsWorks.html">Создание дополнительных полей для выполненных работ</a>.</p>

<h5 id="mobile">Прикрепление выполненных работ к Заявке в мобильном приложении исполнителя</h5>

<p>Прочтите пошаговую инструкцию ниже или посмотрите обучающий видеоролик  <strong>Мобильное приложение инженера. Как работать сервисному специалисту на телефоне?</strong> В нем представлен широкий обзор функциональных возможностей мобильного приложения для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с <Strong>Заявками</Strong>, с чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом На смене. </p>

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

<p> Для <strong>Сотрудников</strong> доступно мобильное приложение <strong>HubEx исполнитель</strong>, которое можно скачать <a
        href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">для Android</a> или <a
        href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B/id1386688688">для
    iOS</a>.</p>
<p>В мобильном приложении <strong>HubEx исполнитель</strong> откройте <strong>Заявку</strong>. Внизу на панели навигации выберите пункт
    <strong>Выполнение</strong>. Для добавления новой выполненной работы нажмите кнопку плюса в правом нижнем углу.
    Обратите внимание! С помощью настройки доступа к полям на форме заявки вы можете регулировать доступ к добавлению
    выполненных работ. Например, открыть доступ к полю <strong>Выполненные работы</strong> на стадии <strong>В
        работе</strong>. Подробнее читайте в
    статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка
        доступа к полям заявки</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/AddWorks.jpg"/>
</div>

<p>Заполнение выполненных работ разделено на три страницы. Переход между страницами можно осуществлять по кнопке
    <strong>Далее</strong>
    (по порядку) либо по кнопке двойной стрелки вверх (откроется список всех страниц для выбора).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/AddWorks2.jpg"/>
</div>

<p>Заполните необходимые данные на страницах:</p>
<ol>
    <li>На странице <strong>Основное</strong> заполняется <strong>Объект</strong>, <strong>Вид работ</strong>, <strong>Исполнитель</strong>.
        Здесь вы можете изменить <strong>Вид работ</strong>.
        <p>Также укажите сколько времени в часах было потрачено на выполнение работы: заполните <strong>Начало
            выполнения</strong> и <strong>Окончание выполнения</strong>.
            Это время будет
            умножаться на часовую ставку <strong>Исполнителя</strong> и учитываться в <strong>Акте выполненных
                работ</strong>. Подробнее читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>. </p>
    </li>
    <li>На странице <strong>Материалы</strong> внесите необходимые материальные расходы и их количество. Для
        работы с материалами необходимо импортировать их в систему HubEx и настроить доступ <strong>Исполнителю</strong>
        до складов.
        Подробнее об этом читайте в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Withdrawals.html">Расход материалов по заявке, отчет по
            расходу</a>.
    </li>
    <li>Файлы и комментарии к работе вносятся на последней странице <strong>Дополнительно</strong>.</li>

</ol>
<p>После заполнения всех страниц нажмите кнопку <strong>Сохранить</strong>. Вы можете просматривать и при необходимости
    внести изменения
    в выполненную работу.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/AddWorks3.jpg"/>
</div>

<p>В одну <strong>Заявку</strong> вы можете добавлять несколько выполненных работ. Например, если по <strong>Заявке</strong> работы выполнялись в несколько этапов или разделить каждую работы на несколько
    исполнителей. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SeveralEngineers.html">Как
        выбрать нескольких исполнителей в заявке</a>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 35%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/AddWorks4.jpg"/>
</div>



<h5 id="offline">Прикрепление выполненных работ в мобильном приложении без подключения к интернету</h5>
<p>При отсутствии подключения к сети в приложении отображается нескрываемое уведомление <strong>Нет подключения к
    интернету</strong>. В
    этом случае вы все равно можете добавить и заполнить выполненные работы. Для этого откройте <strong>Заявку</strong> и <a
            href="#mobile">перейдите на вкладку Выполнение</a>. Заполните необходимые странницы выполненной работы и на последней нажмите <strong>Сохранить</strong>.
</p>
<p>Обратите внимание! Без подключения к интернету вы также можете прикреплять фотографии.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/WorksOffline.jpg"/>
</div>

<p>После сохранения выполненной работы вы увидите значок синхронизации. При появлении мобильной сети выполненная работа будет автоматически
    загружена в HubEx. Ваши коллеги смогут ее посмотреть в web-приложении. Значок синхронизации после загрузки
   выполненной работы пропадает. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/WorksOffline2.jpg"/>
</div>
<p></p>
<p>Все внесенные изменения будут отражаться в web-приложении в <strong>Заявке</strong> на вкладке <strong>История
    изменений</strong>.</p>

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
- [Переход заявки по стадиям и удаление заявки](./ChangingStatus.md)
- [Список заявок, поиск заявок с помощью фильтров](./Filters.md)
- [Заявки и сотрудники на карте](./TicketsOnMap.md)



___
- [Перейти в меню](http://wiki.hubex.ru)
