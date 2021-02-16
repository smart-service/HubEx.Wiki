---
title: Создание заявки
description:
keywords:  hubex, хабекс, хубекс, хабикс
---


#### Создание заявки
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#webticket">Создавать Заявки в web-приложении;</a></li>
    <li><a href="#webticket2">Создавать Объекты и Заказчиков из формы создания Заявки;</a></li>
    <li><a href="#mobticket">Создавать Заявки в мобильном приложении.</a></li>
</ul>
</html>

<body>

<p><strong>Заявка</strong> в системе HubEx используется для отражения необходимости проведения каких-либо работ: сервиса, клининга, ремонта и т.д</p>
<p>Учет по <strong>Заявкам</strong> позволит вам:</p>
<ul>
    <li>зафиксировать обращения клиентов;</li>
    <li>сформировать платежные документы и выставить счета на оплату;</li>
    <li>спланировать загрузку сотрудников.</li>
</ul>
<p><strong>Заявки</strong> также создаются в разрезе <strong>Объектов</strong>, что позволяет хранить историю всех обращений (<strong>Заявок</strong>) по каждому
    <strong>Объекту</strong>.</p>

<p>С помощью настройки различных <strong>Типов заявок</strong> можно реализовать как простые процессы прохождения
    <strong>Заявки</strong> (Новая→Назначена
    диспетчером→ Принята исполнителем→ Выполнена), так и более сложные. <strong>Тип заявки</strong> определяет по
    каким стадиям должна проходить <strong>Заявка</strong>, срок ее закрытия. Например, когда <strong>Заявка</strong>
    создана она
    находится в стадии <strong>Новая</strong>,
    после назначения сервисного
    специалиста <strong>Заявка</strong> переходит в стадию <strong>Назначена</strong>. Когда сервисный специалист
    выезжает на объект, он переводит <strong>Заявку</strong>
    в стадию <strong>Выехал на объект</strong> и т.д. Одной из конечных стадий <strong>Заявки</strong> может быть стадия
    <strong>Закрыта</strong>.</p>
<p>Рассмотрим подробнее создание <strong>Заявки</strong>.</p>

<h5 id="webticket">Создание Заявки в web-приложении</h5>


<p>Создать новую <strong>Заявку</strong> можно в меню <strong>Заявки - Все заявки</strong>. В списке будут находиться
    все
    <strong>Заявки</strong> по вашей компании (или компаниям). Нажмите кнопку <strong>Создать заявку</strong>. Обратите
    внимание: <strong>Заявка</strong> на момент создания имеет только одну
    вкладку слева - <strong>Заявка</strong>. После
    сохранения
    <strong>Заявки</strong> на форме появятся еще несколько вкладок:<strong> Необходимые
        материалы</strong>, <strong>Сообщения</strong>, <strong>Чек-листы</strong>, <strong>Дочерние заявки</strong>
    <strong>Выполнение</strong>, <strong>Акт выполненных работ</strong> <strong>История
        изменений</strong>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/NewTicket.jpg"/>
</div>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/TicketSave.jpg"/>
</div>
</p>
<p>Для удобства заполнение вкладки <strong>Заявки</strong> разделено на смысловые блоки - <strong>Заявка</strong>,
    <strong>Обслуживание
        заказчика</strong>, <strong>Трудозатраты</strong>. </p>

<p>Рассмотрим заполнение полей на вкладке <strong>Заявка</strong>:</p>
<ul>
    <li><strong>Заказчик</strong> выбирается из списка созданных вами компаний. Если вы не нашли в списке необходимого
        <strong>Заказчика</strong>, его
        можно создать прямиком из <strong>Заявки</strong>. Подробно об этом читайте <a href="#webticket2">ниже</a>.
    </li>
    <li><strong>Объект/оборудование</strong> выбирается из списка <strong>Объектов</strong>. Обратите
        внимание, дочерние объекты заключены
        в папки родительских объектов. Чтобы выбрать дочерний объект, нажмите на родительский объект, папка раскроется.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание
            обслуживаемого оборудования</a>.
    </li>

    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/FolderObj.jpg"/>
    </div>
    </p>
    <li><strong>Адрес</strong> заполняется автоматически по адресу родительского объекта, но вы можете изменить его
        вручную. Обратите внимание! Если в карточке выбранного Объекта установлен флажок Мобильное оборудование, то при
        изменении адреса в Заявке адрес изменится и в карточке этого Объекта.
    </li>
    <li>Выбор <strong>Вида работ</strong> зависит от выбранного <strong>Объекта/оборудования</strong>. Какие <strong>Виды
        работ</strong> были указаны у <strong>Объекта</strong>, такие и
        будут доступны в <strong>Заявке</strong>.
    </li>
    <li><strong>Компания-плательщик</strong> может отличаться от <strong>Заказчика</strong>.</li>
    <li>В <strong>Контактных лицах</strong> можно указать, с кем связаться по вопросам <strong>Заявки</strong>.
    </li>
    <li><strong>Тип заявки</strong> - это классификация Заявок определяющая последовательность действий и этапов
        жизненного цикла заявки. <strong>Тип заявки</strong> определяет стадии, по которым она будет проходить и срок ее
        закрытия. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.
    </li>
    <li><strong>Критичность</strong> позволяет разделять <strong>Заявки</strong> по важности и срочности. Например, вы
        можете создать
        Срочную, Плановую, Стандартную критичности и задать им различные цвета. <strong>Заявки</strong> будут отмечены
        цветными маркерами
        в web и мобильном приложении.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/Criticality.jpg"/>
        </div>
        </p>
    </li>
    <li>В поле <strong>Описание заявки</strong> в свободной форме можно указать подробности по <strong>Заявке</strong>.
    </li>
    <li>В поле <strong>Исполнитель</strong> можно сразу указать специалиста, либо оставить это поле
        незаполненным.
        Назначить Исполнителя можно будет позже. Варианты назначения исполнителей на заявки:
        <ol>
            <li>ручной выбор исполнителя из справочника <strong>Сотрудники</strong>;</li>
            <li>с помощью Календаря в меню <strong>Заявки - Расписание заявок</strong> можно перетянуть
                <strong>Заявку</strong> на свободное время исполнителя. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Calendar.html">Календарь заявок</a>;
            </li>
            <li>с помощью настройки автораспределения заявок: в таком случае настраивается специальное правило выбора
                исполнителя и привязывается к стадии заявки. Например, можно настроить автоматический переход на стадию
                Назначена и в ее настройках указать правило выбора исполнителя. Подробнее читайте в статьях: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила выбора исполнителя</a>,
                <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автораспределение на ближайшего
                    исполнителя</a>.
            </li>
        </ol>
        Также на Заявку может быть назначено несколько исполнителей. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/SeveralEngineers.html">Как выбрать нескольких исполнителей
            в заявке</a>.
    </li>
    <li><strong>Срок закрытия</strong> - это максимально возможная дата и время закрытия <strong>Заявки</strong>.
        Он
        может быть установлен автоматически,
        если это настроено у <strong>Вида работ</strong> или <strong>Типа заявки</strong>. Подробнее читайте в
        статьях:
        <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.
    </li>
    <li>Также вы можете прикрепить фотографию или документ к <strong>Заявке</strong>.Это может быть фотография
        поломки,
        инструкция и
        т.д.
    </li>
    <li><strong>Неисправность обнаружена</strong>: заполняется автоматически по дате создания, но может быть
        изменена
        вручную.
    </li>
    <li><strong>Метод подачи заявки</strong> заполняется автоматически и зависит от того, откуда была
        зарегистрирована
        <strong>Заявка</strong> - web- или
        мобильное приложение.
    </li>
    <li>Параметр <strong>ERPID</strong> необходимо заполнять, если вы интегрируете HubEx с другими системами,
        например
        1С.
    </li>
    <li><strong>Инициатор заявки</strong> устанавливается автоматически, если <strong>Заявка</strong> создается
        зарегистрированным пользователем через
        web- или мобильное приложение.
    </li>
    <li>На вкладку <strong>Заявка</strong> могут быть добавлены дополнительные поля для внесения и хранения
        учетной
        информации. Это может быть стоимость оборудования, габариты и т.д. Дополнительные поля располагаются
        внизу
        страницы. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание
            дополнительных полей в заявке</a>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/AddField.jpg"/>
        </div>
        </p>
    </li>
    <li>В блоке <strong>Трудозатраты</strong> заполняются <strong>Оценочные</strong> и <strong>Фактические
        трудозатраты</strong> в часах, а также <strong>Оценочная</strong> и <strong>фактическая
        стоимость</strong>
        работ. Эти поля не являются обязательными для заполнения.
    </li>
</ul>

<p>Рассмотрим вкладку <strong>Необходимые материалы</strong>. Она носит рекомендательный характер. Здесь можно отразить
    перечень
    материалов, которые могут понадобиться специалисту для выполнения <strong>Заявки</strong>.</p>
<p>Нажмите на кнопку <strong>Добавить материалы</strong>. Выбор можно осуществлять с отбором по определенному складу или
    всем
    складам. Укажите количество и нажмите кнопку <strong>Выбрать</strong>.</p>
<p>Обратите внимание: <strong>Материалы</strong> предварительно должны быть внесены в систему. Как это сделать можно
    прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html"> здесь</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Materials.jpg"/>
</div>

<p>На вкладке <strong>Сообщения</strong> можно вести переписку всем заинтересованным лицам по данной
    <strong>Заявке</strong>.</p>
<p>На вкладке Чек-листы вы увидите Чек-лист, если он был привязан к <strong>Объекту</strong>. Подробнее о создании
    <strong>Чек-листов</strong> читайте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/Checklists.html"> здесь</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/CheckList.jpg"/>
</div>

<p>На вкладке <strong>Выполнение</strong> будут отражаться работы по <strong>Заявке</strong>, которые внесет
    исполнитель. Подробнее об этом читайте в статье <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/AttachingFiles.html">Прикрепление выполненных работ в web- и
        мобильном приложении</a>. Все выполненные работы по Заявке располагаются в списке справа.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Works.jpg"/>
</div>

<p>Вкладка <strong>История изменений</strong> хранит все действия над <strong>Заявкой</strong> с момента ее первого
    сохранения.</p>

<h5 id="webticket2">Создание объектов и заказчиков из формы создания заявки</h5>
<p>Вы можете создать <strong>Заказчика</strong> и <strong>Объект</strong> напрямую из формы создания
    <strong>Заявки</strong> без предварительного заполнения в
    соответствующих справочниках. А также можете создать <strong>Вид работ</strong>, если у вас есть права
    администратора для входа в консоль. О создании Вида работ можно прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">здесь</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/CreateCO.jpg"/>
</div>


<p>Еще один способ создать новый <strong>Объект</strong>: созадть его через форму выбора объекта из списка существующих.
    Пример: вы вводите значение в поисковую строку, вам выдаются результаты поиска. Вы можете выбрать найденных
    <strong>Объект</strong> или создать новый <strong>Объект</strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/SearchObj.jpg"/>
</div>


<h5 id="mobticket">Создание заявки в мобильном приложении</h5>
<p>Чтобы создать <strong>Заявку</strong> в мобильном приложении необходимо:</p>
<ol>
    <li>Нажать на кнопку <strong>Подачи заявки</strong> в правом нижнем углу.</li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 30%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/CreateByMobile.jpg"/>
    </div>

    <li>Если у <strong>Объекта</strong> есть QR-код, то отсканировать этот QR-код. Далее заполнить все необходимые поля
        <strong>Заявки</strong>. По кнопке
        <strong>Показать дополнительные поля</strong> откроются поля для ввода адреса, телефона и т.д. По окончанию
        заполнения нажмите
        кнопку <strong>Создать заявку</strong>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/tick3.jpg"/>
    </div>

    <p>Если у <strong>Объекта</strong> нет QR-кода, то после нажатия кнопки подачи <strong>Заявки</strong> в правом
        нижнем углу, нажмите кнопку <strong>Выбрать из
            списка</strong> на
        экране сканирования QR-кода. Далее самостоятельно выберите необходимый <strong>Объект</strong>.
    </p>
</ol>


<p>Для того чтобы выгрузить всю информацию по <strong>Заявкам</strong> из системы HubEx воспользуйтесь функцией <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#tickets"> Экспорта.</a></p>

</body>

___
### Следующие шаги:
- [Создание плановой заявки](./PlannedTickets.md)
- [Создание дополнительных полей в заявке](./AdditionalFields.md)
- [Использование фильтров для поиска заявок](./Filters.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
