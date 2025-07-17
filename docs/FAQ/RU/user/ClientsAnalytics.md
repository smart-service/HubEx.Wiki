---
title: Отчет для клиента
description: Отчет для клиента в HubEx дает возможность получить сводные данные и основные показатели по Заявкам
    в разрезе ваших клиентов (заказчиков). Данный отчет вы сможете предоставлять своим клиентам в качестве оперативной сводки по
    состоянию выполнения Заявок. Также данный отчет поможет клиентам оценить частоту создания Заявок в разреде
    определенных Объектов, что позволит принять решение об изменении обслуживания, замене часто
    выходящего из строя оборудования и т.д.
keywords: отчет для клиента, клиентская аналитика,  hubex, хабекс, хубекс, хабикс
---

#### Отчет для клиента
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
<p>В этом разделе вы научитесь работать с <Strong>Отчетом для клиента</Strong>, который содержит в себе:</p>
<ul>
    <li><a href="#kpi">Ключевые показатели по заявкам;</a></li>
    <li><a href="#diagramms">Визуализации по выполненным заявкам и SLA;</a></li>
    <li><a href="#table">Таблицу со списком активных заявок.</a></li>
 
</ul>
<p>В HubEx представлены аналитические отчеты реализованные на платформе Power BI. С помощью бизнес-аналитики вы
    можете анализировать данные, получать ценные сведения для принятия бизнес-решений.</p>
<p>Каждый аналитический отчет реализован в виде панели с различными графиками, диаграммами, сводными
    таблицами и показателями.</p>

<p><Strong>Отчет для клиента</Strong> в HubEx дает возможность получить сводные данные и основные показатели по <Strong>Заявкам</Strong>
    в разрезе ваших клиентов (заказчиков). Данный отчет вы сможете предоставлять своим клиентам в качестве оперативной сводки по
    состоянию выполнения <Strong>Заявок</Strong>. Также данный отчет поможет клиентам оценить частоту создания <Strong>Заявок</Strong> в разрезе
    определенных <Strong>Объектов</Strong>, что позволит принять решение об изменении обслуживания, замене часто
    выходящего из строя оборудования и т.д. </p>

    
 <p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Отчет для клиента</strong>.</p>

<div class="video-player-container" data-player-id="player19">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/FOT_mWBU1vI" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239123&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p><Strong>Отчет для клиента</Strong> находится в меню <Strong>Аналитика - Отчет для клиента</Strong>. Данные
    в отчете обновляются один раз в
    сутки.
    Дата
    обновления отображается под наименованием отчета. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/ClientsAnalitics.jpg"/>
</div>

<p>Представление панели отчетов основывается на данных в <Strong>Заявках</Strong>. С помощью параметров фильтрации (панель справа) вы можете выбрать организацию
    (компанию-заказчика), сделать отбор по одному или нескольким <Strong>Объектам</Strong> заказчика, а также по
    компаниям-подрядчикам, которые выполняют с <Strong>Заявки</Strong> клиентов. Подрядчиком может являться в том числе и ваша организация.
</p>
<p>Данные в отчете выводятся за период, выбранный на панели фильтрации.</p>
<p>Список <Strong>Заявок</Strong> (таблица внизу) и визуализации изменяются в зависимости от выбора рассматриваемых заявок на панели фильтрации:</p>
<ul>
<li><Strong>Активные заявки</Strong>: в отчете будет отображаться таблица со списком активных <Strong>Заявок</Strong> за выбранный период, и две первых визуализации будут отражать данные по активным <Strong>Заявкам</Strong> (<Strong>Активные заявки по типу заявки/критичности</Strong> и <Strong>Активные заявки по типу оборудования</Strong>);</li>
<li><Strong>Выполненные заявки</Strong>: в отчете будет отображаться таблица со списком выполненных <Strong>Заявок</Strong> за выбранный период, и две первых визуализации будут отражать данные по выполненным <Strong>Заявкам</Strong> (<Strong>Выполненные заявки по типу заявки/критичности</Strong> и <Strong>Выполненные заявки по типу оборудования</Strong>);</li>
<li><Strong>Созданные заявки</Strong>: в отчете будет отображаться таблица со списком всех созданных <Strong>Заявок</Strong> за выбранный период, и две первых визуализации будут отражать данные по созданным <Strong>Заявкам</Strong> (<Strong>Созданные заявки по типу заявки/критичности</Strong> и <Strong>Созданные заявки по типу оборудования</Strong>).</li>
</ul>

<p>Далее в статье визуализации будут рассмотрены на примере <Strong>Выполненных заявок</Strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/ClientsAnalitics2.jpg"/>
</div>


<h5 id="kpi">Ключевые показатели по заявкам</h5>
<p>В верхней части отчета находятся основные показатели (показатели отображаются за выбранный период):</p>
<ul>
<li><Strong>Выполнено заявок</Strong> - это количество выполненных <Strong>Заявок</Strong>;</li>
<li><Strong>Просрочено</Strong> - это количество активных (открытых) и выполненных <Strong>Заявок</Strong> (которые были выполнены после крайнего срока закрытия), у которых истек крайний срок закрытия;</li>
<li><Strong>Непринятые заявки</Strong> - количество <Strong>Заявок</Strong>, на которые не был назначен исполнитель;</li>
<li><Strong>Заявок на согласовании</Strong> - количество <Strong>Заявок</Strong> на согласовании у заказчика (клиента);</li> 
<li><Strong>Без срока закрытия</Strong> - количество <Strong>Заявок</Strong>, в которых не был установлен параметр <Strong>Крайний срок закрытия</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>;</li>
<li><Strong>Выполнено работ, в часах</Strong> - это общее количество времени выполнения <Strong>Заявок</Strong> (параметр считается часам, указанным в выполненных работах на вкладке <Strong>Выполнение</Strong> в <Strong>Заявке</Strong>).</li>

</ul>

<h5 id="diagramms">Визуализации по выполненным заявкам и SLA</h5>
<p>Первые две визуализации изменяются в зависимости от выбора рассматриваемых заявок: <Strong>Активные заявки</Strong>, <Strong>Выполненные заявки</Strong>, <Strong>Созданные заявки</Strong>. В данном пункте визуализации будут рассмотрены на примере <Strong>Выполненных заявок</Strong>. </p>

<p>Визуализация <Strong>Выполненные заявки по типу заявки/критичности</Strong> показывает соотношение выполненных <Strong>Заявок</Strong> по <Strong>Типам заявок</Strong>. При
    нажатии на любой из секторов вы перейдете к диаграмме соотношений выполненных <Strong>Заявок</Strong> выбранного типа по
    критичности. Вернуться к исходной визуализации можно по щелчку в центр диаграммы.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/TypeCritical.jpg"/>
</div>

<p><div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/TypeCritical2.jpg"/>
</div></p>

<p>Визуализация <Strong>Выполненные заявки по типу оборудования</Strong> представляет собой количественные показатели выполненных <Strong>Заявок</Strong> в разрезе <Strong>Типов
    оборудования</Strong>. <Strong>Типы оборудования</Strong> создаются в <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
        администратора</a> и устанавливаются в карточках <Strong>Объектов</Strong>. Подробнее
    читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание обслуживаемого
        оборудования</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html">Типы оборудования</a>.</p>
        
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/Diagram.jpg"/>
</div>

<p>Данные для визуализации <Strong>SLA подрядных организаций</Strong> рассчитываются как отношение количества закрытых с
    просрочкой <Strong>Заявок</Strong> к общему количеству закрытых <Strong>Заявок</Strong> за предыдущий месяц.</p>
    
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/Diagram2.jpg"/>
</div>


<h5 id="table">Таблица со списком выполненных заявок</h5>
<p>Таблица изменяется в зависимости от выбора рассматриваемых заявок: <Strong>Активные заявки</Strong>, <Strong>Выполненные заявки</Strong>, <Strong>Созданные заявки</Strong>. В данном пункте таблица будет рассмотрена на примере <Strong>Выполненных заявок</Strong>.</p>
<p>В таблице <Strong>Список заявок</Strong> отражаются все выполненные <Strong>Заявки</Strong>. Вы можете открыть любую <Strong>Заявку</Strong> по ссылке из крайней колонки слева. </p>

<p>Также <Strong>Список заявок</Strong> можно отобразить в виде карты: выполненные <Strong>Заявки</Strong> будут располагаться на карте.</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ClientsAnalitics/list.jpg"/>
</div>

</body>
</html>

___
### Следующие шаги:
- [Отчет по объектам обслуживания](./ObjectsAnalytics.md)
- [Отчет по сотрудникам](./EngineersAnalytics.md)
- [Анализ эффективности процессов](./ProcessEfficiency.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
