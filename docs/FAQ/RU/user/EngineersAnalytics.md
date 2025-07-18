---
title: Отчет по сотрудникам
description: Отчет по сотрудникам в HubEx дает возможность проанализировать данные, собранные по Сотрудникам и Заявкам. С помощью этих визуализаций вы сможете ответить на вопросы - Как загружены ваши сотрудники? Кто из исполнителей чаще других закрывает Заявки с нарушением срока?
keywords: отчет по сотрудникам, sla, показатели по сотрудникам, нарушение срока, просрочка заявок, нарушения sla, эффективность исполнителей, эффективность сотрудников, переработки, отработанное время, hubex рейтинг, хабекс рейтинг, hubex, хабекс, хубекс, хабикс
---

#### Отчет по сотрудникам
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
<p>В этом разделе вы научитесь работать с <Strong>Отчетом по сотрудникам</Strong>, который включает в себя следующие вкладки и отчет-карточку:</p>
<ul>
    <li><a href="#first">Заявки и SLA;</a></li>
    <li><a href="#second">Отработанноое время;</a></li>
    <li><a href="#third">Показатели и KPI по сотрудникам;</a></li>
    <li><a href="#fourth">Отчет-карточка сотрудника.</a></li>
</ul>
<p>В HubEx представлены аналитические отчеты реализованные на платформе Power BI. С помощью бизнес-аналитики вы
    можете анализировать данные, получать ценные сведения для принятия бизнес-решений.</p>
<p>Каждый аналитический отчет реализован в виде панели с различными графиками, диаграммами, сводными
    таблицами и показателями.</p>
<p><Strong>Отчет по сотрудникам</Strong> в HubEx дает возможность проанализировать данные, собранные по
    <Strong>Сотрудникам</Strong> и <Strong>Заявкам</Strong>. С помощью этих визуализаций
    вы
    сможете
    ответить на
    вопросы - Как загружены ваши сотрудники? Кто из исполнителей чаще других закрывает <Strong>Заявки</Strong> с
    нарушением срока? Кто из
    сотрудников и в какие дни перерабатывает сверх своего графика? Кто из исполнителей считается самым эффективным в
    выбранном периоде? и т.д. </p>

    
<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>HubEx: как работает бизнес-аналитика по выездным сотрудникам</strong>.</p>

<div class="video-player-container" data-player-id="player18">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/7oC98ISShGg" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239082&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p><Strong>Отчет по сотрудникам</Strong> находится в меню <Strong>Аналитика - Отчет по сотрудникам</Strong>. Данные в отчете обновляются один раз в сутки. <Strong>Дата обновления</Strong> отображается слева от наименования отчета.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEA.jpg"/>
</div>
<p>Представление панели отчетов основывается на данных, собранных по <Strong>Заявках</Strong> в разрезе <Strong>Сотрудников</Strong>.
    <Strong>Сотрудники</Strong> – пользователи, которые могут создавать и выполнять <Strong>Заявки</Strong>. <Strong>Сотрудником</Strong>
    может являться диспетчер вашей
    организации, который создает заявки в web-приложении, руководитель вашей
    организации, сервисный специалист (исполнитель), который работает по <Strong>Заявкам</Strong>. В контексте данного
    отчета будут
    рассматриваться данные по специалистам, которые назначались и выполняли <Strong>Заявки</Strong> в рамках выбранного
    периода.

    Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей
        системы</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>.
</p>
<p>В левом верхнем углу вы можете указать период отображения данных в отчете.</p>
<p>С помощью кнопки <Strong>Открыть панель фильтров</Strong> можно выбрать <Strong>Тип заявки</Strong>,
    <Strong>Участок</Strong> и т.д. Данный фильтр
    будет применен ко всем диаграммам и показателям в отчете (на всех вкладках).</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEA3.jpg"/>
</div>

<p><Strong>Отчет по сотрудникам</Strong> состоит из трех вкладок, разбитых по тематикам и содержащих в себе различные
    графики,
    отчеты, матрицы и показатели:</p>
<ol>
    <li><a href="#first">вкладка <Strong>Заявки и SLA</Strong></a>, где SLA - показатель качества
        предоставляемых услуг, основывающийся соблюдении времени исполнения (закрытия) <Strong>Заявки</Strong>,
        установленного по договору (контракту) с заказчиком;
    </li>
    <li><a href="#second">вкладка <Strong>Отработанное время</Strong></a>;</li>
    <li><a href="#third">вкладка <Strong>Показатели и KPI</Strong></a>.</li>
</ol>
<p>Рассмотрим подробнее каждую вкладку.</p>


<h5 id="first">Заявки и SLA</h5>
<p>В верхней части представлены основные показатели по количеству <Strong>Заявок</Strong> за выбранный период по всем
    исполнителям:</p>
<ol>
    <li><Strong>Количество закрытых заявок</Strong>;</li>
    <li><Strong>Количество открытых заявок</Strong>;</li>
    <li><Strong>Количество переназначенных заявок</Strong> - количество <Strong>Заявок</Strong>, с которых исполнители
        снимали свое
        назначение/отказывались от <Strong>Заявки</Strong>;
    </li>
    <li><Strong>% закрытых с просрочкой заявок</Strong>: просроченной считается <Strong>Заявка</Strong>, которую закрыли
        позже установленного в ней
        крайнего срока закрытия. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>;
    </li>
    <li><Strong>Рейтинг</Strong> - средний рейтинг по всем специалистам. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Rating.html">Оценка заявок и рейтинг сотрудников</a>.
    </li>
</ol>
<p>Детальная информация по показателям в разрезе исполнителей представлена ниже в <a href="#table">таблице <strong>Показатели
    по
    сотрудникам</strong></a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEA4.jpg"/>
</div>

<p>Далее представлены две визуализации:</p>
<ul>
    <li><strong>Количество закрытых заявок и количество нарушений SLA</strong>. Данная диаграмма представляет рейтинг
        исполнителей по
        закрытым <strong>Заявкам</strong>: синие столбцы - количество закрытых <strong>Заявок</strong> исполнителем за
        выбранный период, красные
        столбцы - количество из этих <strong>Заявок</strong>, закрытых с просрочкой.

        <!-- <p>Данный отчет можно <a href="fourth">расшифровать по каждому сотруднику в отдельности</a>. Щелкните на
             исполнителя и нажмите значок
             стрелки справа на панели настроек.</p>
         <div>
             <img style="margin: 0 auto; display: block; max-width: 95%;"
                  src="/attachments/images/FAQ/USER/EngineersAnalitics/XXXXXXXXXXXXXXX.jpg"/> ЗДЕСЬ СКРИН про отчет-карточку по сотруднику с аналитическими разрезами
         </div>

         <p>Перед вами откроется детальный отчет по сотруднику. С помощью расшифровки по аналитическим разрезам можно
             ответить на впоросы: В чем причина закрытия <strong>Заявок</strong> с просрочкой? Например, можно выбрать разрезы - <strong>Закрытые
             заявки - Закрытые с просрочкой - Клиенты - Объекты</strong> и проанализировать полученные <strong>Заявки</strong>.</p> -->

    </li>
    <li>Визуализация <strong>Сравнение эффективности исполнителей</strong>
        представляет собой зависимость закрытых с просрочкой <strong>Заявок</strong> от общего количества закрытых
        <strong>Заявок</strong> по специалисту. С ее помощью вы сможете
        ответить на вопросы: Кто из специалистов справляется с работой эффективнее? Кому из специалистов нужна помощь
        (по работе с системой, по распределению нагрузки и тд)?
        <p>На данной визуализации представлено две оси (два показателя):</p>
        <ol>
            <li><strong>Среднее кол-во выполненных заявок в день</strong>
                - это среднее
                количество <strong>Заявок</strong> в день, которые закрыты специалистом;
            </li>

            <li><strong>Закрыто в срок, %</strong> - отражает процент <strong>Заявок</strong>, которые были закрыты с
                просрочкой. Каждый исполнитель на
                графике отображается
                точкой.
            </li>
        </ol>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 75%;"
                 src="/attachments/images/FAQ/USER/EngineersAnalitics/SLA.jpg"/>
        </div>

        <p>По каждой оси графика высчитывается средний показатель по всем исполнителям. Эти средние показатели образуют
            4
            квадранта - категории, на которые делятся исполнители: </p>
        <ol>
            <li><strong>Первая категория (верхний правый квадрант)</strong>: сюда попадают исполнители, у которых оба
                показателя
                превышают средние значения по организации. Эти исполнители закрывают больше всего
                <strong>Заявок</strong> и успевают закрывать их в срок;
            </li>
            <li><strong>Вторая категория (верхний левый квадрант)</strong>: сюда попадают исполнители, у которых
                количество закрытых <strong>Заявок</strong> меньше
                среднего, но они стабильно закрывают их без нарушений SLA (без просрочки). Возможно, на таких
                исполнителей следует переназначать <strong>Заявки</strong> с исполнителей
                <strong>Четвертой категории</strong>. Будьте внимательны, здесь могут оказаться специалисты, которые
                работают у вас
                на непостоянной основе, приходящие мастера и т.д. В таком случае, распределить на них
                <strong>Заявки</strong>
                специалистов из <strong>Первой категории</strong> скорее всего не получится (у приходящих исполнителей
                могут быть
                индивидуальные графики работ, и мало <strong>Заявок</strong> в принципе);
            </li>
            <li><strong>Третья категория (нижний левый квадрант)</strong>: сюда попадают исполнители, закрывающие
                <strong>Заявки</strong> с нарушениями SLA (при количестве закрытых <strong>Заявок</strong> ниже
                среднего). Нужно искать причины,
                почему исполнители нарушают сроки закрытия при загруженности меньше остальных (возможно, нужна
                дополнительная помощь или обучение по работе HubEx, возможно эти исполнители выполняют
                <strong>Заявки</strong>
                не по своему <strong>Виду работ</strong>, в связи с чем тратят на них большое количество времени и
                т.д.);
            </li>
            <li><strong>Четвертая категория (нижний правый квадрант)</strong>: сюда попадают исполнители с большим
                количеством закрытых <strong>Заявок</strong>, среди которых % процент закрытых с просрочкой. Такие
                исполнители перегружены работой, не успевают закрывать <strong>Заявки</strong>. <strong>Заявки</strong>
                с таких
                исполнителей можно переназначить на исполнителей <strong>Второй категории</strong>.
            </li>
        </ol>
    </li>
</ul>


<p>Таблица <strong>Среднее количество выполненных заявок по дням недели</strong> показывает среднее количество <strong>Заявок</strong>
    закрываемых специалистом на каждый день недели. Ячейки с минимальной загруженностью окрашиваются в светло-голубой
    цвет, с максимальной загруженностью - в темно-синий. С помощью данной таблицы вы сможете определить, в какие дни
    ваша сервисная служба загружена больше всего. </p>
<p>Если вы указали период два месяца, значит данные в таблице будут браться по всем дням недели в течение этих месяцев
    (все понедельники, все вторники и тд). Равномерное распределение закрытых <strong>Заявок</strong> означает, что
    процесс планирования и
    распределения <strong>Заявок</strong>
    выстроен эффективно.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEA5.jpg"/>
</div>
<p>С помощью кнопки <strong>Открыть панель фильтров</strong> вы можете задать отбор по <strong>Должности</strong>
    исполнителей или <strong>Виду работ</strong>, для получения информации
    по конкретному направлению работ в вашей организации.</p>

<p>Рассмотрим пример: по таблице <strong>Среднее количество выполненных заявок по дням недели</strong> видим, что один
    из сотрудников загружен больше остальных, он выполняет больше всех <strong>Заявок</strong> - 70 за период, из
    которых 20 закрыто с просрочкой. Данный сотрудник занимается ремонтом мелкой бытовой техники, не ремонтирует технику
    на пищевых производствах, ресторанах и т.д. Выберем его в таблице с помощью щелчка мыши и посмотрим детализацию по
    <strong>Заявкам</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEAexample2.jpg"/>
</div>
<p>Детализацию можно посмотреть с помощью кнопки <strong>Открыть аналитические разрезы</strong> на боковой панели.
    Откроется дополнительный отчет <strong>Аналитические разрезы</strong>, в котором по кнопке <strong>+</strong> можно
    углубляться в данные для детального анализа. В примере нужно понять, какие <strong>Заявки</strong> специалист
    выполняет, может его нужно разгрузить от лишней работы. Мы видим, что у специалиста были закрыты 4
    <strong>Заявки</strong> из Кофейни Ривьера, но этот специалист не должен ездить на <strong>Заявки</strong> от
    ресторанов, кофеен. Он может их выполнять, но это занимает гораздо больше времени, чем если бы этим занимался другой
    работник. Таким образом, мы можем определить проблемные места, с которыми можно работать, например, при
    распределении <strong>Заявок</strong> на сотрудников. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEAexample3.jpg"/>
</div>

<p>С помощью выбора показателя для <strong>Аналитических разрезов</strong> можно выводить <strong>Закрытые
    заявки</strong>, <strong>Открытые заявки</strong> и <strong>Переназначенные заявки</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEAexample4.jpg"/>
</div>

<p id="table">В таблице <strong>Показатели по сотрудникам</strong> находятся основные показатели по
    <strong>Заявкам</strong> в разрезе
    исполнителей. Таблицу можно отсортировать, кликнув по наименованию показателя в шапке таблицы.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/MainEA6.jpg"/>
</div>

<p>Например, с помощью показателя <strong>Переназначенные заявки</strong> вы сможете выявить специалиста, который часто
    отказывается от <strong>Заявок</strong>. Какие именно <strong>Заявки</strong> исполнитель "сбрасывает" с себя?
    Возможно было ошибочное назначение
    специалиста не по
    его профилю и т.д. </p>

<!--   Чтобы оценить, какие от каких <strong>Заявок</strong> исполнитель отказывается, щелкните на него в таблице, а
   затем нажмите значок
   стрелки справа на панели настроек. С помощью аналитических разрезов вы сможете найти эти <strong>Заявки</strong>.
скрин по аналитически мразрезам-->
<p>Для таблицы показателей также
    доступна
    функция выгрузки в Excel: нажмите на всплывающее <strong>контекстное меню (три точки) - Экспортировать
        данные</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Table.jpg"/>
</div>

<p>Таблица <strong>Закрытые и незакрытые заявки по исполнителям</strong> показывает количество закрытых и незакрытых
    <strong>Заявок</strong> за выбранный период с детализацией по дням. Также доступна для выгрузки в Excel: нажмите на
    всплывающее
    <strong>контекстное меню (три точки) - Экспортировать данные</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Table.jpg"/>
</div>

<h5 id="second">Отработанное время</h5>
<p>В верхней части вкладки представлены основные показатели по отработанному времени за выбранный период по всем
    исполнителям:</p>
<ol>
    <li><strong>Отработано всего</strong> (в часах) - сумма рабочего времени исполнителей по выполненным работам,
        которое указывается на вкладке <strong>Выполнение</strong> в <strong>Заявке</strong>, но с учетом пересечения
        времени. Например, если сотрудник внес три разных выполненных работы на одно и то же время с 12:00 до 13:00, то
        это время будет учитываться как 1 час.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрпеление
            выполненных работ</a>;
    </li>
    <li><strong>Выполнено работ</strong> (в часах) - это сумма отработанного времени, которое указывается на вкладке
        <strong>Выполнение</strong> в <strong>Заявке</strong>, без учета пересечения времени. Например, если сотрудник
        внес три разных выполненных работы на одно и то же время с 12:00 до 13:00, то это время будет учитываться как 3
        часа.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрпеление
            выполненных работ</a>;
    </li>
    <li><strong>Переработки</strong> (в часах) - считаются как часы, указанные во вкладке <strong>Выполнение</strong> в
        <strong>Заявке</strong>, но не входящие в рамки
        Графика работы исполнителей;
    </li>
    <li><strong>Средняя переработка в день</strong> (в часах) - предыдущий показатель делится на количество
        исполнителей;
    </li>
    <li><strong>Средняя загрузка в день</strong> (в часах) - сколько в среднем отмечается часов во вкладке <strong>Выполнение</strong>
        в <strong>Заявке</strong>.
    </li>
</ol>
<p>Детальная информация по показателям в разрезе исполнителей представлена ниже в <a href="#table2">таблице <strong>Временные
    показатели
    по
    сотрудникам</strong></a>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Second.jpg"/>
</div>

<p>Далее представлены две визуализации:</p>
<ul>
    <li>Гистограмма <strong>Выполненные работы и переработки</strong> отображает количество отработанных часов (синие
        столбцы) в разрезе
        исполнителей.
        Красными столбцами отображаются переработанные часы. Например, график работы исполнителя с 9.00 до
        18.00, в <strong>Заявке</strong> во вкладке <strong>Выполнение</strong> он отмечает выполнение работы с 18.00 до
        19.00 - этот час, вне его
        графика, будет считаться переработкой, даже если до этого времени у него не было внесено никаких больше
        выполненных работ.
        <p>Для корректного отображения данных необходимо устанавливать графики работ в карточке
            <strong>Сотрудников</strong>. Подробнее
            читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>.</p>
    </li>
    <li>На гистограмме <strong>Динамика отработанных часов и переработок</strong> отображаются отработанные часы и
        переработки исполнителей
        в сравнении с графиком работ.
        <p>Данный график полезно анализировать в разрезе конкретного исполнителя. Выбрать его
            можно щелкнув по исполнителю в гистограмме <strong>Выполненные работы и переработки</strong>. Таким образом,
            на гистограмме
            появится линия с графиком работ выбранного исполнителя.</p>
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 75%;"
             src="/attachments/images/FAQ/USER/EngineersAnalitics/Dynamic.png"/>
    </div>

</ul>


<p>Таблица <strong>Среднее количество переработок по дням недели</strong> показывает среднее количество переработанного
    времени
    специалистом на каждый день недели. Ячейки с минимальным количеством часов по переработке окрашиваются в
    светло-голубой
    цвет, с максимальным - в красный. С помощью данной таблицы вы сможете определить, в какие дни
    ваши специалисты перерабатывают больше всего. Возможно, нужно изменить график работ и т.д.</p>
<p>Если вы указали период один месяц, значит данные в таблице будут браться по всем дням недели в течение этого месяца
    (все понедельники, все вторники и тд). </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Second2.jpg"/>
</div>

<p>С помощью кнопки <strong>Включить аналитические разрезы</strong> на боковой панели вы можете открыть дополнительный
    отчет <strong>Аналитические разрезы</strong>, который позволяет детализировать данные. Например, рассмотрим таблицу
    <strong>Среднее количество переработок по дням недели</strong>, в которой у одного из специалистов очень высокие
    показатели по переработке. Также можем это видеть на визуализации <strong>Отработанные часы и переработки</strong>.
</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/SecondEAexample.jpg"/>
</div>

<p>Выбираем щелчком мыши в таблице специалиста и нажимаем кнопку <strong>Включить аналитические разрезы</strong>. По
    кнопке <strong>+</strong> детализируем отчет по клиентам и дням недели, чтобы оценить показатели переработки. Дальше
    вы можете смотреть Заявки по дням недели и искать причину переработок. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/SecondEAexample2.jpg"/>
</div>
<p>С помощью выбора показателя вы можете отобразить в аналитике <strong>Отработанное время</strong> или <strong>Переработки</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/SecondEAexample3.jpg"/>
</div>

<p id="table2">В таблице <strong>Временные показатели по сотрудникам</strong> находятся основные показатели по
    отработанному времени, переработкам, загрузке в разрезе
    исполнителей. Таблицу можно отсортировать, кликнув по наименованию показателя в шапке таблицы.</p>
<p>Для таблицы показателей также
    доступна
    функция выгрузки в Excel: нажмите на всплывающее <strong>контекстное меню (три точки) - Экспортировать
        данные</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Table2.jpg"/>
</div>

<p>Таблица <strong>Разбивка отработанного времени и переработок</strong> отображает: </p>
<ul>
    <li>время, которое сотрудники должны были отработать согласно графику работ;</li>
    <li>отработанное время, согласно отраженному времени во вкладке <strong>Выполнение</strong> в
        <strong>Заявках</strong>;
    </li>
    <li>количество часов переработки.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Second3.jpg"/>
</div>
<p>Данная таблица особенно полезна для анализа по каждому <strong>Cотруднику</strong> в отдельности. Для того чтобы
    выбрать конкретного
    исполнителя, щелкните на его ФИО в любой таблице или графике на странице.</p> <!--скрин карточки-->
<p>Для таблицы показателей также
    доступна
    функция выгрузки в Excel: нажмите на всплывающее контекстное меню (три точки) - Экспортировать данные.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Table3.jpg"/>
</div>

<h5 id="third">Показатели и KPI</h5>
<p>В верхней части расположены основные показатели:</p>
<ul>
    <li>количество <strong>Мобильных сотрудников</strong> - количество выездных специалистов. Флажок <strong>Мобильный
        сотрудник</strong> устанавливается
        в карточке <strong>Сотрудника</strong>. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей
            системы</a>;
    </li>
    <li>количество <strong>Офисных сотрудников</strong> - количество специалистов, у которых не стоит в карточке
        <strong>Сотрудника</strong> флажок
        <strong>Мобильный сотрудник</strong>;
    </li>
    <li>количество <strong>Открытых заявок</strong> - количество открытых <strong>Заявок</strong> на всех исполнителях;
    </li>
    <li><strong>Коэффициент полезной загрузки исполнителей</strong> - коэффициент, позволяющий оценить загрузку
        исполнителей. Подробнее
        представлен в визуализации слева;
    </li>
    <li>количество <strong>Заявок на человека в день</strong> - среднее количество поступающих <strong>Заявок</strong>
        на одного исполнителя;
    </li>
    <li><strong>Рейтинг</strong> - средний рейтинг по исполнителям. Оценка устанавливается отдельно для каждой <strong>Заявки</strong>.
        Подробнее читайте в
        статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Rating.html">Оценка заявок и рейтинг сотрудников</a>.
    </li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Third.jpg"/>
</div>

<p>Слева представлена визуализация по показателю <Strong>Коэффициент полезной загрузки исполнителей</Strong>
    (Utilization
    Rate). Он рассчитывается, как продолжительность всех
    выполненных работ за период (указанных во вкладке Выполнение в Заявках) поделенная на количество часов, отработанных
    согласно графикам работ исполнителей. </p>
<P> Чтобы показатель считался корректно необходимо указывать графики
    работы в карточках <Strong>Сотрудников</Strong> и
    поддерживать
    их в актуальном состоянии, а также заполнять
    выполненные работы в <Strong>Заявках</Strong> на вкладке <Strong>Выполнение</Strong>. Подробнее читайте в статьях:
    <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрепление выполненных работ в
        web и мобильном приложении</a>.</P>

<p>Сверху представлен <Strong>Коэффициент полезной загрузки исполнителей</Strong> общий по всем исполнителям. Снизу он
    детализирован по
    каждому исполнителю в отдельности. Межотраслевым стандартом считается значение 80%. Оно отмечено на графике черной
    линией.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/UR.jpg"/>
</div>

<p>График <Strong>Динамики показателей</Strong> - универсальный график, который покажет динамику, выбранного вами
    показателя. Выбрать
    показатель можно по нажатию на кнопку <Strong>Настроек</Strong> на боковой панели (справа). Например,
    Динамика изменения среднего количества закрытых заявок в день на исполнителя отображает изменения среднего
    количества закрытых <Strong>Заявок</Strong> за выбранный период в разбивке по дням (неделям или месяцам). </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Dynamic2.jpg"/>
</div>

<p>Таблица <Strong>Базовые показатели по сотрудникам</Strong> содержит базовые показатели в разрезе сотрудников, а также универсальный
    показатель <Strong>HubEx Рейтинг</Strong>. </p>
<p><Strong>HubEx Рейтинг</Strong> рассчитывается индивидуально по каждому исполнителю на основе четырех показателей:</p>
<ul>
    <li><Strong>Количество закрытых заявок за период</Strong>;</li>
    <li><Strong>% закрытых заявок с нарушением SLA</Strong>;</li>
    <li><Strong>Количество выполненных работ за период (часов)</Strong>;</li>
    <li><Strong>Рейтинг</Strong> (оценка сотрудников заказчиками).</li>
</ul>


<p>Сотрудники с <Strong>HubEx Рейтингом</Strong> = 1 считаются самыми эффективными за выбранный период. Чем больше
    цифра
    показателя <Strong>HubEx Рейтинга</Strong>, тем больше нужно уделить внимания исполнителю и разобраться с возможными
    трудностями при
    выполнении <Strong>Заявок</Strong>. </p>
<p>Также <Strong>HubEx Рейтинг</Strong> может использоваться для введения системы премирования сотрудников.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Table4.jpg"/>
</div>

<p>При наведении на ФИО исполнителя в таблице будет всплывать окошко с четырьмя показателями, по которым рассчитывается
    <Strong>HubEx Рейтинг</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/HR.jpg"/>
</div>


<p>Диаграмма <Strong>Закрытые заявки по должностям</Strong> отображает процентное соотношение закрытых
    <Strong>Заявок</Strong> в разрезе должностей.
    <Strong>Должность</Strong> устанавливается в карточке <Strong>Сотрудника</Strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей
        системы</a>. </p>

 <p>Дополнительно ознакомьтесь с обучающим видео <strong>Заполнение выполненных работ и их помощь в оцифровке ваших показателей и KPI</strong>.</p>

<div class="video-player-container" data-player-id="player25">
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

<h5 id="fourth">Отчет-карточка сотрудника</h5>
<p>В отчет-карточку по сотруднику можно перейти из любой вкладки <Strong>Отчета по сотруднику</Strong>, щелкнув на его
    ФИО в любой
    визуализации и нажав на кнопку значок
    стрелки справа на панели настроек.</p>
<p>Подробный отчет по сотруднику содержит в себе ключевые показатели по <Strong>Заявкам</Strong> и отработанному
    времени:</p>
<uL>
    <li>количество <Strong>Открытых заявок</Strong>;</li>
    <li>количество <Strong>Закрытых заявок</Strong>;</li>
    <li>процент <Strong>Закрытых с просрочкой</Strong>;</li>
    <li><Strong>Заявок в день</Strong>;</li>
    <li><Strong>Выполнено работ</Strong> (в часах);</li>
    <li><Strong>Переработки</Strong> (в часах);</li>
    <li><Strong>Рейтинг</Strong>.</li>

</uL>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/EngineersAnalitics/Card.jpg"/>
</div>
<p>Также по <Strong>Cотруднику</Strong> представлен график динамики изменения <Strong>HubEx рейтинга</Strong> за
    выбранный период времени.</p>

<p><Strong>История перемещений</Strong> (геотрекинг) отображает перемещения каждого исполнителя, у которого включена
    функция использования геопозиции. Включить функцию отслеживания исполнителя можно в карточке
    <Strong>Сотрудника</Strong> (флажок
    <Strong>Отслеживать местоположение сотрудника</Strong>).
    С помощью геотрекинга вы можете оценить эффективность работы мобильных
    исполнителей: время в пути, на заявке, остановки, простои. </p>


<p>В нижней части отчета представлены круговые диаграммы по закрытым <Strong>Заявкам</Strong>: по <Strong>Типу
    заявки</Strong>, по <Strong>Критичности</Strong> и по <Strong>Видам
    работ</Strong>. </p>

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
- [Анализ эффективности процессов](./ProcessEfficiency.md)
- [Сервисный акт](./PrintedFormAct.md)
- [Карта: текущая геопозиция сотрудников](./GeoPosition.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
