---
title: Отчет по объектам обслуживания
description:
keywords:  hubex, хабекс, хубекс, хабикс
---

#### Отчет по объектам обслуживания
В этом разделе вы научитесь работать с <Strong>Отчетом по объектам обслуживания</Strong>, который содержит в себе:
<html>
<meta charset="utf-8">

<ul>
    <li><a href="#kpi">Ключевые показатели эффективности;</a></li>
    <li><a href="#objects">Динамику количества объектов;</a></li>
    <li><a href="#tickets">Поступившие заявки и скорость их закрытия;</a></li>
    <li><a href="#table">Таблицу показателей по объектам за период;</a></li>
    <li><a href="#piecharts">Круговые диаграммы распределения объектов;</a></li>
    <li><a href="#geo">Карту географии распределения объектов по участкам.</a></li>

</ul>
</html>

<body>
<p>В HubEx представлены аналитические отчеты реализованные на платформе Power BI. С помощью бизнес-аналитики вы
    можете анализировать данные, получать ценные сведения для принятия бизнес-решений.</p>
<p>Каждый аналитический отчет реализован в виде панели с различными графиками, диаграммами, сводными
    таблицами и показателями.</p>
<p><Strong>Отчет по объектам обслуживания</Strong> в HubEx дает возможность проанализировать данные, собранные по
    <Strong>Объектам</Strong> и <Strong>Заявкам</Strong>. С помощью этих визуализаций
    вы
    сможете
    ответить на
    вопросы - по каким объектам нужно сокращать время закрытия <Strong>Заявок</Strong>? как растет количество
    обслуживаемого оборудования - нужно ли нанимать еще специалистов для обслуживания? </p>

<p><Strong>Отчет по объектам обслуживания</Strong> находится в меню <Strong>Аналитика - Отчет по объектам
    обслуживания</Strong>. Данные
    в отчете обновляются один раз в
    сутки.
    Дата
    обновления отображается под наименованием отчета. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/XXXXXXXXXXXXXXXXXXXXXXXX.jpg"/>
</div>
<p>Представление панели отчетов основывается на данных в <Strong>Заявках</Strong> в разрезе <Strong>Объектов</Strong>. Объект (оборудование) - элемент инфраструктуры, на который направлено предоставление услуг (видов работ). 
    Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html#parentchild">Создание обслуживаемых
        объектов</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>.
</p>
<p>В правом верхнем углу вы можете указать период отображения данных в отчете.</p>
<p>С помощью кнопки <Strong>Фильтров</Strong> можно выбрать <Strong>Тип заявки</Strong>,
    <Strong>Участок</Strong> и т.д. Данный фильтр
    будет применен ко всем диаграммам и показателям в панели отчетов.</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/XXXXXXXXXXXXXXX.jpg"/>
</div>

<h5 id="kpi">Ключевые показатели эффективности</h5>
<p>Отчет по объектам содержит ключевые показатели эффективности работы с объектами. Рассмотрим подробнее:</p>
<ol>
    <li>Количество объектов - общее количество созданных в системе объектов обслуживания;</li>
    <li>Среднее количество активных объектов - среднее за выбранный период количество объектов, по которым за последние
        4 недели была создана хотя бы одна Заявка. Значение 4 недели - среднее
        заданное значение периода, вы можете изменить количество недель для расчета по кнопке Фильтров;
    </li>
    <li>Среднее количество активных родительских объектов - среднее за выбранный период количество родительских
        объектов, по которым за последние
        4 недели была создана хотя бы одна Заявка. Об отличии родительских объектов от дочерних читайте в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html#parentchild">Создание обслуживаемого
            оборудования</a>. Значение 4 недели - среднее
        заданное значение периода, вы можете изменить количество недель для расчета по кнопке Фильтров
    </li>
    <li>MTBF (Среднее время между отказами) - среднее количество часов между возникновением Заявок. Чем выше
        данный показатель, тем реже поступают Заявки по Объектам. Значит реже случаются отказы обслуживаемого
        оборудования, поломки и т.д.
        <p>Посмотреть данный показатель в разрезе одно или
            нескольких объектов можно с помощью кнопки Фильтров и выбора необходимых Объектов в списке.</p>
    </li>
    <li>MTTR (Среднее время восстановления работоспособности) - среднее время требуемое для выполнения ремонта на
        Объекте. Рассчитывается как среднее время по выполненным работам.
        <p>Для корректного расчета данного показателя необходимо заполнять вкладку Выполнение в Заявке. Подробнее
            читайте в статьях: С<a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрепление выполненных работ</a>.
        </p>
    </li>
    <li></li>
</ol>

<h5 id="objects">Динамика количества объектов</h5>
<p>График показывает динамику изменения количества объектов в системе HubEx (создания новых объектов), количество
    активных объектов и родительских активных объектов.</p>
<p>Активный объект - объект, по которому в последние 4 недели поступила хотя бы одна Заявка. Значение 4 недели - среднее
    заданное значение периода, вы можете изменить количество недель для расчета по кнопке Фильтров.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/ObjectsAnalitics/XXXXXXXXXXXXXXX.jpg"/>
</div>

<h5 id="tickets">Поступившие заявки и скорость их закрытия</h5>
<p>График показывает динамику изменения количества объектов в системе HubEx (создания новых объектов), количество
    активных объектов и родительских активных объектов.</p>

<h5 id="table">Таблицу показателей по объектам за период</h5>
<p></p>

<h5 id="piecharts">Круговые диаграммы распределения объектов</h5>
<p></p>

<h5 id="geo">Карту географии распределения объектов по участкам/h5>
<p></p>



</body>

### Следующие шаги:
- [Карта: текущая геопозиция сотрудников](./GeoPosition.md)
- [История перемещений](./Geotracking.md)

___
- [Перейти в меню](http://wiki.hubex.ru)