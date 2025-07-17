---
title: Отчет по объектам обслуживания
description: Отчет по объектам обслуживания в HubEx дает возможность проанализировать данные, собранные по
    Объектам и Заявкам. С помощью визуализаций в отчете вы сможете ответить на
    вопросы\:\ по каким объектам нужно сокращать время закрытия Заявок? Какие темпы роста количества
    обслуживаемого оборудования - нужно ли нанимать новых специалистов для обслуживания? 
keywords:  hubex, хабекс, хубекс, хабикс
---

#### Отчет по объектам обслуживания
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
<p>В этом разделе вы научитесь работать с <Strong>Отчетом по объектам обслуживания</Strong>, который содержит в себе:</p>

<ul>
    <li><a href="#kpi">Ключевые показатели эффективности;</a></li>
    <li><a href="#objects">Динамику количества объектов;</a></li>
    <li><a href="#tickets">Поступившие заявки и скорость их закрытия;</a></li>
    <li><a href="#table">Таблицу показателей по объектам за период;</a></li>
    <li><a href="#objectmain">Детальный отчет по объекту;</a></li>
    <li><a href="#piecharts">Круговые диаграммы распределения объектов и заявок;</a></li>
    <li><a href="#geo">Географию распределения объектов.</a></li>

</ul>

<p>В HubEx представлены аналитические отчеты реализованные на платформе Power BI. С помощью бизнес-аналитики вы
    можете анализировать данные, получать ценные сведения для принятия бизнес-решений.</p>
<p>Каждый аналитический отчет реализован в виде панели с различными графиками, диаграммами, сводными
    таблицами и показателями.</p>
<p><Strong>Отчет по объектам обслуживания</Strong> в HubEx дает возможность проанализировать данные, собранные по
    <Strong>Объектам</Strong> и <Strong>Заявкам</Strong>. С помощью визуализаций в отчете вы сможете ответить на вопросы: по каким объектам нужно сокращать время закрытия <Strong>Заявок</Strong>? Какие темпы роста количества обслуживаемого оборудования - нужно ли нанимать новых специалистов для обслуживания? </p>

 <p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Отчет по объектам</strong>.</p>

<div class="video-player-container" data-player-id="player17">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/Kfdxmu6snHI" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239122&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p><Strong>Отчет по объектам обслуживания</Strong> находится в меню <Strong>Аналитика - Отчет по объектам
    обслуживания</Strong>. Данные
    в отчете обновляются один раз в
    сутки.
    Дата
    обновления отображается слева вверху. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/MainPage.jpg"/>
</div>
<p>Представление панели отчетов основывается на данных в <Strong>Заявках</Strong> в разрезе <Strong>Объектов</Strong>.
    <Strong>Объект (оборудование)</Strong> - элемент инфраструктуры, на который направлено предоставление услуг (видов работ).
    Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html#parentchild">Создание обслуживаемых
        объектов</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>.
</p>
<p>В левом верхнем углу вы можете указать период отображения данных в отчете.</p>
<p>С помощью кнопки <Strong>Фильтров</Strong> (справа) можно выбрать <Strong>Тип заявки</Strong>,
    <Strong>Участок</Strong> и т.д. Данные фильтры
    будут применены ко всем диаграммам и показателям в панели отчетов.</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/MainPageFilter.jpg"/>
</div>

<h5 id="kpi">Ключевые показатели эффективности</h5>
<p>Отчет по объектам содержит ключевые показатели эффективности работы с объектами. Рассмотрим подробнее:</p>
<ol>
    <li><Strong>Количество объектов</Strong> - общее количество созданных в системе объектов обслуживания;</li>
    <li><Strong>Среднее количество активных объектов</Strong> - среднее за выбранный период количество
        <Strong>Объектов</Strong>, по которым за последние
        4 недели была создана хотя бы одна <Strong>Заявка</Strong>. Значение 4 недели - заданное значение периода, вы можете изменить количество недель для расчета по кнопке <Strong>Фильтров</Strong>
        справа (от 1 до 7 недель);
    </li>
    <li><Strong>Среднее количество активных родительских объектов</Strong> - среднее за выбранный период количество
        родительских
        объектов, по которым за последние
        4 недели была создана хотя бы одна <Strong>Заявка</Strong>. Об отличии родительских объектов от дочерних читайте
        в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html#parentchild">Создание обслуживаемого
            оборудования</a>. Значение 4 недели - заданное значение периода, вы можете изменить количество недель для расчета по кнопке <Strong>Фильтров</Strong>
        справа (от 1 до 7 недель);
    </li>
    <li><Strong>MTBF (Среднее время между отказами)</Strong> - среднее количество часов между возникновением <Strong>Заявок</Strong>.
        Чем выше
        данный показатель, тем реже поступают <Strong>Заявки</Strong> по <Strong>Объектам</Strong>. Значит реже
        случаются отказы обслуживаемого
        оборудования, поломки и т.д.
        <p>Посмотреть данный показатель в разрезе одного или
            нескольких объектов можно с помощью кнопки <Strong>Фильтров</Strong> и выбора необходимых
            <Strong>Объектов</Strong> в списке.</p>
    </li>
    <li><Strong>MTTR (Среднее время восстановления работоспособности)</Strong> - среднее время требуемое для выполнения
        ремонта на
        <Strong>Объекте</Strong>. Рассчитывается как среднее время по выполненным работам.
        <p>Для корректного расчета данного показателя необходимо заполнять вкладку <Strong>Выполнение</Strong> в
            <Strong>Заявке</Strong>. Подробнее
            читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрепление выполненных работ</a>.
        </p>
    </li>

</ol>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/MainKPI.jpg"/>
</div>


<h5 id="objects">Динамика количества объектов</h5>
<p>График показывает динамику изменения количества <Strong>Объектов</Strong> в системе HubEx (создания новых <Strong>Объектов</Strong>),
    количество
    активных объектов и родительских активных объектов.</p>
<p>Активный объект - <Strong>Объект</Strong>, по которому в последние 4 недели поступила хотя бы одна
    <Strong>Заявка</Strong>. Значение 4 недели - заданное значение периода, вы можете изменить количество недель для расчета по кнопке <Strong>Фильтров</Strong>
    справа (от 1 до 7 недель).</p>
<p>Активный родительский объект - родительский <Strong>Объект</Strong>, по которому в последние 4 недели поступила хотя
    бы одна <Strong>Заявка</Strong>. Например, родительским объектом может являться бизнес-центр, а дочерним -
    оборудование внутри бизнес-центра. Об отличии родительских объектов от дочерних читайте в статье <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html#parentchild">Создание обслуживаемого
        оборудования</a>. </p>
<p>Вы можете изменять представление данных по дням, неделям и месяцам. Для этого используйте специальные кнопки ↑
    (увеличение уровня
    детализации), ↓↓ (уменьшение уровня детализации). Кнопки появляются при наведении на каждую визуализацию в верхнем правом углу этой визуализации. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/DynamicMain.jpg"/>
</div>

<h5 id="tickets">Поступившие заявки и скорость их закрытия</h5>
<p>С помощью данной визуализации можно понять, по какому <Strong>Типу оборудования/Объекту/Классу объектов</Strong>
    поступает больше
    всего
    <Strong>Заявок</Strong>, и на их выполнение тратится больше всего времени (верхний правая часть диаграммы). Выбрать разрез
    визуализации по <Strong>Типу оборудования</Strong>, <Strong>Объекту</Strong> или <Strong>Классу объекта</Strong>
    можно в настройках (синяя шестеренка в левом верхнем
    углу визуализации). </p>
    <p>Данная диаграмма поможет понять, по каким <Strong>Объектам</Strong> сокращение среднего времени выполнения заявки даст максимальную экономию времени исполнителей. </p>
<p>Размер точки зависит от среднего времени выполнения <Strong>Заявки</Strong> по <Strong>Объекту</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/DiagrammaMain.jpg"/>
</div>

<h5 id="table">Таблица показателей по объектам за период</h5>
<p><Strong>Таблица показателей по объектам за период</Strong> содержит в себе основные показатели по
    <Strong>Заявкам</Strong> в разрезе <Strong>Объектов</Strong>: сколько <Strong>Заявок</Strong>
    создано, закрыто, а также количество активных <Strong>Заявок</Strong>, среднее время выполнения <Strong>Заявки</Strong> и т.д. По
    щелчку на любой из
    показателей вы можете отсортировать таблицу.</p>
<p>С помощью кнопки <Strong>Открыть меню визуализации</Strong> (синяя шестеренка) можно изменить структуру таблицы с плоской на
    иерархическую. Это значит,
    что <Strong>Объекты</Strong> будут располагаться вложенным списком от родительских к дочерним.</p>
   <div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/MainTable2.jpg"/>
</div> 
    
<p>Вы можете
    экспортировать таблицу в
    Excel с помощью кнопки <Strong>Дополнительные параметры - Экспортировать данные</Strong>. Экспортировать можно только
    таблицу с плоской структурой. Кнопка появляется при наведении на правый верхний угол таблицы.</p>


<p>По щелчку на какой-либо <Strong>Объект</Strong> в таблице вы можете перейти в детальный отчет по кнопке <Strong>В
    отчет по объекту</Strong> из таблицы.</p>

 <div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/MainTable3.jpg"/>
</div> 

<h5 id="objectmain">Детальный отчет по объекту</h5>
<p>Детальный отчет по объекту также можно открыть по кнопке вверху отчета <Strong>В
    отчет по объекту</Strong> и на открывшейся странице выбрать <Strong>Объект</Strong>.</p>

    <p>Детальный отчет содержит в себе:</p>
<ul>
    <li><a href="#mainkpi">основные показатели эффективности</a>;</li>
    <li><a href="#maindynamic">визуализация Динамика количества поступивших, закрытых и незакрытых заявок</a>;</li>
    <li><a href="#maindynamic2">визуализация с динамикой по показателям</a>;</li>
    <li><a href="#mainuser">таблицу Закрытые заявки в разрезе исполнителей</a>;</li>
    <li><a href="#mainpiecharts">диаграммы соотношений заявок по типам оборудования, виду работ, критичности</a>;</li>
    <li><a href="#maintable">таблица со списком Заявок</a>;</li>
    <li><a href="#passport">Паспорт объекта и его месторасположение</a>.</li>

</ul>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/ObjectMain2.jpg"/>
</div> 

   
<p id="mainkpi">Показатели эффективности: </p>
<ul>
    <li><Strong>Закрыто заявок за период</Strong> - количество закрытых <Strong>Заявок</Strong> по выбранному <Strong>Объекту</Strong>;</li>
    <li><Strong>Создано заявок за период</Strong> - количество созданных <Strong>Заявок</Strong> по <Strong>Объекту</Strong>;</li>
    <li><Strong>Открытых заявок на конец периода</Strong> - количество незакрытых Заявок (новых, в работе, на согласовании);</li>
    <li><Strong>MTTR (Среднее время выполнения работ)</Strong>, в минутах - среднее время выполнения работ по выбранному <Strong>Объекту</Strong>;</li>
    <li><Strong>Общее время выполнения работ</Strong>, в минутах - общее время выполнения работ на <Strong>Объекте</Strong>. Рассчитывается как сумма всех
        выполненных работ (вкладка <Strong>Выполнение</Strong> в <Strong>Заявке</Strong>);
    </li>
    <li><Strong>Среднее время закрытия заявки</Strong>, в часах - среднее время за которое <Strong>Заявка</Strong> от создания переходит на стадию
        Выполнена или Закрыта;
    </li>
    <li><Strong>Рейтинг по выбранному объекту</Strong> - средний рейтинг по <Strong>Заявкам</Strong> по выбранному <Strong>Объекту</Strong>;</li>
    <li><Strong>Среднее поступление заявок в месяц</Strong> - среднее количество поступающих <Strong>Заявок</Strong> в месяц;</li>
    <li><Strong>Среднее время между заявками</Strong>, в часах - среднее время между созданиями <Strong>Заявок</Strong> по выбранному <Strong>Объекту</Strong>.</li>
</ul>

<p id="maindynamic">На графике <Strong>Динамика количества поступивших, закрытых и незакрытых заявок</Strong> отображается количество поступивших, закрытых и открытых <Strong>Заявок</Strong> за период. Вы можете изменять представление
    данных по дням, неделям и месяцам. Для этого используйте специальные кнопки ↑
    (увеличение уровня
    детализации), ↓↓ (уменьшение уровня детализации). Кнопки появляются при наведении на визуализацию в правом верхнем углу.</p>

 <div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/ObjectDynamic.jpg"/>
</div> 


<p id="maindynamic2">Визуализация с динамикой по показателям отображает выбранный показатель и линию тренда по этому показателю. Выбрать показатель можно по
    кнопке <Strong>Открыть меню визуализации</Strong> (синяя шестеренка). </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/ObjectDynamic2.jpg"/>
</div> 

<p id="mainuser">В таблице <Strong>Закрытые заявки в разрезе исполнителей</Strong> отображается количество закрытых <Strong>Заявок</Strong> в разрезе исполнителей.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 65%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/ObjectUser.jpg"/>
</div> 


<p id="mainpiecharts">Три круговые <Strong>Диаграммы соотношений заявок по типам оборудования, виду работ, критичности</Strong> могут отображать следующие показатели в разрезе <Strong>Типов
    оборудования</Strong>, <Strong>Видов работ</Strong>, <Strong>Критичностей</Strong>:</p>
<ul>
    <li><Strong>Закрытые заявки за период</Strong>;</li>
    <li><Strong>Открытые заявки за период</Strong>;</li>
    <li><Strong>Поступившие заявки за период</Strong>.</li>
</ul>
<p>Выбрать показатель можно по кнопке <Strong>Открыть меню визуализации</Strong> (синяя шестеренка).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/ObjectPiechart.jpg"/>
</div> 


<p id="maintable"><Strong>Таблица со списком заявок</Strong> отображается в свернутом виде. Развернуть таблицу можно по нажатию на кнопку <Strong>Открыть
    таблицу с заявками по объекту</Strong>. Таблица может быть отсортирована по закрытым, открытым и всем поступившим <Strong>Заявкам</Strong> за
    период.</p>

<p id="passport"> В <Strong>Паспорте объекта</Strong> отображается ключевая информация об <Strong>Объекте</Strong> (<Strong>Тип оборудования</Strong>, <Strong>Класс оборудования</Strong>, <Strong>Участок</Strong> и т.д.)
    и его месторасположение на карте. </p>

<p>Вернемся на главную страницу <Strong>Отчета по объектам</Strong> и продолжим рассматривать оставшиеся диаграммы и карту географии <Strong>Объектов</Strong>. Для возврата к первой странице нажмите кнопку <Strong>Назад</Strong> (синяя стрелка).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/Button.jpg"/>
</div>

<h5 id="piecharts">Круговые диаграммы распределения объектов и заявок</h5>
<p>Диаграммы распределения в разрезе типов объектов (типов оборудования) и классов объектов (классов оборудования)
    доступны по одному из выбранных параметров,
    открыть список параметров можно по кнопке <Strong>Открыть параметры визуализации</Strong> (синяя шестеренка для каждой диаграммы):
</p>
<ul>
    <li>параметр <Strong>Активных объектов</Strong> - показывает количество активных <Strong>Объектов</Strong> по <Strong>Типу оборудования/Классу оборудования</Strong>;
    </li>
    <li>параметр <Strong>Закрытых заявок</Strong> - отображает количество закрытых <Strong>Заявок</Strong> в разрезе <Strong>Типов оборудования/Классов
        оборудования</Strong>;
    </li>
    <li>параметр <Strong>Объектов</Strong> - показывает количество <Strong>Объектов</Strong> в системе в процентном соотношении по <Strong>Типам оборудования/Классам
        оборудования</Strong>;
    </li>
    <li>параметр <Strong>Открытых заявок</Strong> - отображает количество незакрытых за период <Strong>Заявок</Strong> в разрезе <Strong>Типов
        оборудования/Классов оборудования</Strong>;
    </li>
    <li>параметр <Strong>Поступивших заявок</Strong> - показывает количество поступивших за период <Strong>Заявок</Strong> в разрезе <Strong>Типов
        оборудования/Классов оборудования</Strong>.
    </li>

</ul>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/Piechart.jpg"/>
</div>

<p>При щелчке на какой-либо сектор диаграммы все визуализации будут отфильтрованы по <Strong>Типу объекта</Strong> выбранного сектора.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/Piechart2.jpg"/>
</div>

<h5 id="geo">География распределения объектов</h5>
<p>Карта показывает расположение <Strong>Объектов</Strong>, по которым за выбранный в отчете период, поступила хотя бы одна <Strong>Заявка</Strong>.
    Размер точек зависит от количества поступивших <Strong>Заявок</Strong>. </p>
<p>Для карты доступно изменение цветовой разбивки по <Strong>Заказчику</Strong>, <Strong>Типу оборудования</Strong>, <Strong>Классу оборудования</Strong>, <Strong>Участку</Strong>. </p>
<p>Карту можно развернуть на весь экран по кнопке <Strong>Режим фокусировки</Strong>. Кнопка появляется при наведении на верхний правый угол.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 45%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/GeoMain.jpg"/>
</div>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/GeoMain2.jpg"/>
</div></p>

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
- [Отчет по сотрудникам](./EngineersAnalytics.md)
- [Анализ эффективности процессов](./ProcessEfficiency.md)
- [Сервисный акт](./PrintedFormAct.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
