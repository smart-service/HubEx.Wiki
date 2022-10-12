---
title: Календарь заявок
description: Календарь помогает начальникам сервисной службы эффективно планировать расписание исполнителей. Исполнители в мобильном приложении в календаре могут просматривать свою дневную загрузку.
keywords: календарь, календарь заявок, расписание заявок, hubex, хабекс, хубекс, хабикс
---


#### Календарь заявок
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#calweb">Как работает календарь в web-приложении: неназначенные, назначенные и плановые заявки;</a>
    </li>
    <li><a href="#ondutty">Как редактировать смены сотрудников в календаре;</a</li>
    <li><a href="#calmob">Как работает календарь в мобильном приложении инженера;</a></li>
    <li><a href="#pushdelay">Как работают уведомления при назначении Заявки в Расписании заявок.</a></li>
</ul>
</html>
<body>
<p>Календарь помогает начальникам сервисной службы или диспетчерам эффективно планировать расписание исполнителей.
    Исполнители в мобильном приложении в календаре могут просматривать свою дневную загрузку.</p>

<h5 id="calweb">Как работает календарь в web-приложении</h5>

<p>Открыть календарь можно в меню <strong>Заявки - Расписание заявок</strong>. </p>
<p>Календарь доступен в трех вариантах: на день, на неделю и на месяц. Рассмотрим подробнее функциональные возможности
    каждого варианта календаря.</p>

<ol>

    <li><strong>Расписание на месяц</strong>
        <p>Календарь на месяц отображает загруженность <strong>Заявками</strong> на каждый день выбранного месяца. </p>

        <p id="monthcalendar">Справа расположены три вкладки с <strong>Заявками</strong>:</p>
        <ul>
            <li><strong>Неназначенные</strong> - здесь находятся все <strong>Заявки</strong>, для которых не был выбран
                исполнитель.

                <p><strong>Заявки</strong>, <strong>Крайний срок закрытия</strong> которых попадает на какую-либо дату
                    выбранного месяца, будут отображаться в календаре на эту дату. </p>
                <p>Например, если срок закрытия у <strong>Заявки</strong> 29 октября, то такая <strong>Заявка</strong>
                    будет отображаться на дату 29 октября как
                    <strong>Неназначенные 1</strong>, где 1 - это количество таких <strong>Заявок</strong>.</p>

                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar.jpg"/>
                </div>

                <p>С помощью кнопки фильтров можно изменить временные границы <strong>Крайнего срока закрытия</strong>,
                    сделать отбор по <strong>Объектам</strong>, <strong>Виду работ</strong> и т.д.
                </p>
                <p>Например, отфильтровать список неназначенных <strong>Заявок</strong> со сроком закрытия до 31
                    октября. </p>

                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar2.jpg"/>
                </div>


                <p>Посмотреть детали по <strong>Заявке</strong> можно щелкнув по ее номеру в списке. </p>

                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar3.jpg"/>
                </div>

                <p>Откроется боковое окошко с деталями: <strong>Типом заявки</strong>, описанием и т.д.. По кнопке
                    <strong>Открыть в соседнем окне</strong> вы можете открыть
                    полную форму выбранной <strong>Заявки</strong> в соседнем окне браузера. </p>
                <p>
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar4.jpg"/>
                </div>
                </p>


            </li>

            <li><strong>Назначенные</strong> - в списке отображаются все <strong>Заявки</strong> на выбранный месяц, на
                которые был назначен исполнитель.
                <strong>Заявки</strong> в списке <strong>Назначенные</strong> не фильтруются.
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar5.jpg"/>
                </div>
                <p>По нажатию на номер <strong>Заявки</strong> откроется боковое окошко с информацией: <strong>Тип
                    заявки</strong>, описание и т.д. Обратите внимание! У
                    назначенных <strong>Заявок</strong> вы можете менять время выполнения. Это необходимо в случае, если
                    <strong>Заявку</strong> назначили на исполнителя, а он ушел на больничный или не может ее выполнить
                    в связи с большой нагрузкой.</p>
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar6.jpg"/>
                </div>
            </li>

            <li>В web-приложении для календаря на месяц доступно отображение плановых заявок на отдельной вкладке
                <strong>Планировщик</strong>. Подробнее читайте в
                статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/PlannedTickets.html">Создание плановой
                    заявки</a>.
                <p>Плановые заявки будут располагаться как на вкладке <strong>Планировщик</strong>, так и в самом
                    календаре на запланированную дату.</p>

                <p>Например, если у вас запланирована <strong>Заявка</strong> на 19 октября, то вы увидите ее в
                    календаре
                    отметку <strong>Планировщик 1</strong> на дату 19 октября, где 1 - это количество плановых заявок.
                </p>

                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar7.jpg"/>
                </div>

                <p>Обратите внимание! Во вкладке <strong>Планировщик</strong> отображаются все плановые заявки на
                    выбранный месяц. Если вы выберете конкретный день, в который запланирована, например, одна плановая
                    заявка, то на вкладке <strong>Планировщик</strong> отобразится именно одна эта заявка. Чтобы вернуть
                    отображение всех плановых заявок на выбранный месяц еще раз щелкните правой кнопкой мыши по
                    выбранному дню, чтобы снять фокус с этого дня. </p>

                <p>Если в настройках плановой заявки не указан исполнитель, то по кнопке <strong>+</strong> на вкладке
                    <strong>Планировщик</strong> вы можете выбрать подходящего сотрудника и назначить его на выполнение
                    плановой заявки.</p>

                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar8.jpg"/>
                </div>

                <p>
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/MonthCalendar9.jpg"/>
                </div>
                </p>
            </li>

        </ul>

        <p>Календарь на месяц отображает загруженность <strong>Заявками</strong> на каждый день выбранного месяца. </p>

        <p>Занятость по дням отображается с помощью индикатора загрузки: в каждой ячейке указано количество
            часов загруженности в день, количество <strong>Заявок</strong>, а также цветной индикатор, который позволит
            визуально очень
            быстро
            определять загруженность дня. </p>
        <p>Чтобы определить загрузку специалиста в месяц, выберите его в списке слева. Тогда календарь отфильтруется
            только по выбранному <strong>Сотруднику</strong>. Чтобы снять фильтр, щелкните на выбранного сотрудника еще
            раз.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/MonthCalendar10.jpg"/>
        </div>
        <p>По щелчку на ячейку с загрузкой исполнителя будет доступна только вкладка <strong>Назначенные</strong>. Таким
            образом вы
            просматриваете назначенные <strong>Заявки</strong> на выбранный день по <strong>Сотруднику</strong>. По
            повторному щелчку на выбранный день календаря фильтрация по назначенным <strong>Заявкам</strong>
            сбрасывается.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/MonthCalendar11.jpg"/>
        </div>

        <p>Чтобы посмотреть, какие <strong>Сотрудники</strong> работают в определенный день, щелкните по этому дню
            мышкой. Справа в
            списке <strong>Назначенные</strong> отобразятся все <strong>Заявки</strong> на выбранный день, с метками
            назначенных исполнителей. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/MonthCalendar12.jpg"/>
        </div>

        <p>Дневная занятость выбранного в месячном календаре <strong>Сотрудника</strong> отображается с помощью
            индикатора загрузки: в каждой ячейке
            указано количество
            часов загруженности, количество <strong>Заявок</strong>, а также цветной индикатор, который позволит
            визуально очень быстро
            определять занятость исполнителя на день. Цветной индикатор разбит на 8 точек от зеленого до красного цвета,
            что соответствует неполной и максимальной загрузке специалиста. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator.jpg"/>
        </div>

        <p>Если у <strong>Сотрудника</strong> занято мало рабочего времени, то индикатор будет ярким и зеленым только в
            начале, остальные
            точки будут бледными - свободное время. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator2.jpg"/>
        </div>

        <p>Если у <strong>Сотрудника</strong> занято максимум рабочего времени, то индикатор будет ярким от зеленого до
            красного. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator3.jpg"/>
        </div>

        <p>Обратите внимание! У каждого <strong>Сотрудника</strong> в списке отображается индикатор смены: зеленый
            значок – на
            смене в текущее время, серый значок – не на смене. Отредактировать смену можно
            прямо в календаре. Для этого необходимо нажать на контекстное меню (три точки) и выбрать пункт </strong>
            Редактировать
            смену</strong>. Внесите необходимые изменения и нажмите <strong>Сохранить</strong>. Подробнее читайте в
            статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/OnDuty.html">Индивидуальный график работы:
                функционал На смене</a>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Dutty.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Dutty2.jpg"/>
        </div>
        </p>

        <p>Как назначить <strong>Заявки</strong> с помощью месячного календаря? <strong>Заявки</strong> без исполнителя
            отображаются справа на вкладке <strong>Неназначенные</strong>, а
            также в ячейках согласно установленному в
            них <strong>Крайнему сроку закрытия</strong>.</p>

        <p>Назначить свободную <strong>Заявку</strong> на специалиста из месячного календаря можно по кнопке
            <strong>+</strong>.</p>
        <p>Заявка из неназначенных будет перенесена в список <strong>Назначенных</strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/MonthCalendar13.jpg"/>
        </div>

        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/MonthCalendar14.jpg"/>
        </div>
        </p>

    </li>


    <li><strong>Расписание на неделю</strong>

        <p>Календарь на неделю отличается от календаря на месяц тем, что здесь каждая строка соответствует исполнителю
            из списка слева, отбор по сотрудникам здесь делать не нужно.</p>

        <p>Аналогично <a href="#monthcalendar">месячному календарю</a> в недельном присутствуют три вкладки <strong>Неназначенные</strong>, <strong>Назначенные</strong>
            и <strong>Планировщик</strong>.</p>

        <p>Обратите внимание! Неназначенные <strong>Заявки</strong> также отображаются в ячейках самой верхней строки
            <strong>Без
                исполнителя</strong>. Располагаются они согласно <strong>Крайнему сроку закрытия</strong>. При нажатии
            на любую ячейку <strong>Без исполнителя</strong>
            все <strong>Заявки</strong> этой ячейки отобразятся в списке <strong>Неназначенные</strong>, либо на вкладке
            <strong>Планировщик</strong>, если заявки
            плановые.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/WeekCalendar.jpg"/>
        </div>

        <p>В календаре на неделю отображается занятость каждого <strong>Сотрудника</strong> согласно графику его работы.
            График работы
            также отображается в календаре: </p>
        <ul>
            <li>ячейки белого цвета - рабочий день;</li>
            <li>ячейки, заштрихованные серым цветом - выходной/нерабочий день;</li>
            <li>ячейки, заштрихованные желтым цветом - ночная смена.</li>
        </ul>
        <p>График работы задается для каждого <strong>Сотрудника</strong> в его карточке на вкладке <strong>Трудоустройство</strong>.
            Подробнее читайте в
            статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы исполнителей</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/WeekCalendar1.jpg"/>
        </div>

        <p>Дневная занятость <strong>Сотрудника</strong> отображается с помощью индикатора загрузки: в каждой ячейке
            указано количество
            часов загруженности, количество <strong>Заявок</strong>, а также цветной индикатор, который позволит
            визуально очень быстро
            определять занятость исполнителя на день. Цветной индикатор разбит на 8 точек от зеленого до красного цвета,
            что соответствует неполной и максимальной загрузке специалиста. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator.jpg"/>
        </div>
        <p>Если у <strong>Сотрудника</strong> занято мало рабочего времени, то индикатор будет ярким и зеленым только в
            начале, остальные
            точки будут бледными - свободное время. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator2.jpg"/>
        </div>

        <p>Если у <strong>Сотрудника</strong> занято максимум рабочего времени, то индикатор будет ярким от зеленого до
            красного. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/Calendar/Indicator3.jpg"/>
        </div>


        <p>Как назначить <strong>Заявку</strong> на исполнителя с помощью недельного календаря? Неназначенные <strong>Заявки</strong>
            также отображаются в
            ячейках самой верхней строки <strong>Без исполнителя</strong>. Располагаются они согласно <strong>Крайнему
                сроку закрытия</strong>. При
            нажатии на любую ячейку <strong>Без исполнителя</strong> все <strong>Заявки</strong> этой ячейки отобразятся
            в списке <strong>Неназначенные</strong>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/WeekCalendar2.jpg"/>
        </div>

        <p>Назначить <strong>Заявку</strong> можно несколькими способами:</p>

        <ol>
            <li>перетащить <strong>Заявку</strong> из списка <strong>Неназначенные</strong> на доступный рабочий день
                исполнителя;
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/WeekCalendar3.jpg"/>
                </div>
            </li>

            <li>по кнопке <strong>+</strong> у <strong>Заявки</strong> в списке <strong>Неназначенные</strong>;
                <div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/WeekCalendar4.jpg"/>
                </div>
                <p><div>
                    <img style="margin: 0 auto; display: block; max-width: 95%;"
                         src="/attachments/images/FAQ/USER/Calendar/WeekCalendar5.jpg"/>
                </div></p>
            </li>
        </ol>

        <p>Переназначить <strong>Заявку</strong> на другого исполнителя можно из списка <strong>Назначенные</strong>
            перетащив <strong>Заявку</strong> на другого
            <strong>Сотрудника</strong>. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/WeekCalendar6.jpg"/>
        </div>
    </li>


    <li><strong>Расписание на день</strong>
        <p>Расписание на текущий день отображает занятость каждого <strong>Сотрудника</strong> на день с разбивкой по
            часам. </p>
        <p>График работы
        также отображается в календаре: </p>
        <ul>
            <li>ячейки белого цвета - рабочий день;</li>
            <li>ячейки, заштрихованные серым цветом - выходной/нерабочий день;</li>
            <li>ячейки, заштрихованные желтым цветом - ночная смена.</li>
        </ul>

        <p>Справа в дневном расписании находится список <strong>Неназначенные заявки</strong>. Вы можете перетащить
            <strong>Заявку</strong> из этого списка на необходимого исполнителя. Сотрудник сразу
            получит
            push-уведомление о назначении. Также эта <strong>Заявка</strong> отобразится в его личном расписании.</p>
        <p>При назначении <strong>Заявки</strong> через календарь срок ее выполнения устанавливается исходя из плановых
            трудозатрат, либо по умолчанию
            4 часа.
            Плановые трудозатраты могут быть установлены в карточках <strong>Видов работ</strong> или <strong>Типов
                заявки</strong>. Подробнее читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a></p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Calendar.jpg"/>
        </div>

        <p>Для изменения срока исполнения <strong>Заявки</strong> потяните ее за «хвост» в левую или правую сторону.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 50%;"
                 src="/attachments/images/FAQ/USER/Calendar/TicketsTail.jpg"/>
        </div>
        <p> Вы можете поставить <strong>Заявку</strong> на другое время или перенести ее на другого специалиста. Нажмите
            на нее в календаре и передвиньте на
            нужное
            время или нужного исполнителя. </p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/TimeChange.jpg"/>
        </div>

        <p>Обратите
            внимание на Попову Марию. На 05.04.2022 не видно начала <strong>Заявки</strong>в рамках рабочего дня. Это
            значит, что <strong>Заявка</strong> назначена на несколько дней, например, с 01.04 по 10.04.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/Calendar2.jpg"/>
        </div>

        <p>Если на сервисного специалиста назначено несколько <strong>Заявок</strong> в один и тот же промежуток
            времени, то
            поле с его <strong>Заявками</strong>
            будет расширено. Обе заявки будут отображены.</p>

        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Calendar/TwoTickets.jpg"/>
        </div>
        </p>

    </li>


</ol>


<p>Из <strong>Расписания заявок</strong> вы можете подать <strong>Заявку</strong> по кнопке + в правом верхнем углу. В
    новом окне откроется стандартная форма Заявки. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Calendar/CreateTicket.jpg"/>
</div>

<p>Обратите внимание! При создании <strong>Заявки</strong> и выборе исполнителя вам необходимо проверить заполненность
    поля <strong>Дата и время
        выполнения</strong>, чтобы
    <strong>Заявка</strong> сразу отразилась в календаре.</p>
<p>Когда вы выбираете исполнителя, <strong>Дата и время выполнения</strong> заполняются автоматически. В поле <strong>Начало</strong>
    устанавливается
    текущий день и ближайший час. В поле <strong>Окончание</strong> дата и время может быть рассчитано в двух вариантах:
</p>
<ul>
    <li>Если у <strong>Вида работ</strong> заполнены <strong>Плановые трудозатраты</strong> в количестве часов (минут
        или дней), то это значение
        прибавляется к начальной дате и времени;

    </li>
    <li>Если у <strong>Вида работ</strong> не заполнены <strong>Плановые трудозатраты</strong>, то по умолчанию система
        прибавит один час к начальной дате
        и времени.
    </li>
</ul>

<p>Подробнее читайте в статье: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Calendar/Time.jpg"/>
</div>


<h5 id="calmob">Использование календаря в мобильном приложении инженера</h5>

<p>Прочтите статью ниже или посмотрите обучающий видеоролик <strong>Мобильное приложение инженера. Как работать
    сервисному специалисту на телефоне?</strong>. В нем представлен широкий обзор функциональных возможностей мобильного
    приложения для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с
    <Strong>Заявками</Strong>, с чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом
    На смене. </p>
<iframe src="https://www.youtube.com/embed/JmMZzkI6o-c" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>

<p>При создании <strong>Заявки</strong> в мобильном приложении инженера вы также можете указать <strong>Дату и время
    выполнения</strong> после выбора
    исполнителя. Таким образом <strong>Заявка</strong> отобразится у исполнителя в календаре на указанную дату и время.
</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 35%;" src="/attachments/images/FAQ/USER/Calendar/Mob1.jpg"/>
</div>

<p>В мобильном приложении календарь можно открыть по кнопке в правом
    верхнем углу. Либо с помощью бокового меню.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 35%;"
         src="/attachments/images/FAQ/USER/Calendar/Mob2.jpg"/>
</div>

<p>Инженер сможет увидеть <strong>Заявки</strong>, которые ему необходимо выполнить в течение дня. Текущее время дня
    отображается в
    календаре красной горизонтальной чертой. <strong>Заявка</strong> на несколько дней будет растянута на весь указанный
    срок.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 35%;" src="/attachments/images/FAQ/USER/Calendar/Mob3.jpg"/>
</div>

<p>Вы можете просмотреть расписание на любой день месяца. Нажмите на наименование месяца вверху, например, у вас выбран
    Август.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 35%;"
         src="/attachments/images/FAQ/USER/Calendar/Mob4.jpg"/>
</div>

<p>Можно открыть любую <strong>Заявку</strong> из календаря, нажав на нее.
    Обратите внимание! Если вы не указали <strong>Дату и время выполнения</strong>, <strong>Заявка</strong> не будет
    отображаться в календаре у сервисного
    исполнителя.</p>


<h5 id="pushdelay">Отложенные уведомления при назначении Заявки в в Расписании заявок</h5>
<p>При назначении <strong>Заявок</strong> в <strong>Расписании заявок</strong> уведомления будут приходить с задержкой
    в 5 минут по умолчанию. Эта задержка позволит избежать отправки лишних push-уведомлений во время планирования
    расписания каждого из сотрудников.
    Если <strong>Заявка</strong> была назначена на инженера и не была переназначена на другого или перенесена по времени
    в течение 5 минут, то инженеру придет
    уведомление. Если в течение 5 минут <strong>Заявка</strong> была переназначена на
    другого специалиста, то первому назначенному уведомление не придет. Если <strong>Заявка</strong> была снята спустя 5
    минут, то инженеру придет новое
    push-уведомление с текстом «С вас была снята заявка <span style="color: #8b0000">номер заявки</span>». Если <strong>Заявка</strong>
    была перенесена по времени после 5 минут, сотруднику придет новое push-уведомление с текстом
    «Время выполнения по заявке <span style="color: darkred">номер заявки</span> было изменено». Подробнее читайте в
    статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Notifications.html">Настройка оповещений</a>.
</p>
</body>


___
### Следующие шаги:
- [Чек-листы](./Checklists.md)
- [Прикрепление выполненных работ](./AttachingFiles.md)
- [Переход заявки по стадиям и удаление заявки](./ChangingStatus.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
