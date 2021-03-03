---
title: Создание плановой заявки
description: Создание Плановой заявки необходимо для автоматизации подачи заявок в случаях регулярного ремонта или обслуживания объектов (оборудования). Создать Плановую заявку можно в меню Заявки - Планировщик работ по кнопке Создать заявку.
keywords: плановая заявка, планировщик работ, hubex, хабекс, хубекс, хабикс
---

#### Создание плановой заявки
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#planticket">Создавать Плановые заявки в web-приложении;</a></li>
    <li><a href="#editticket">Просматривать и редактировать Плановые заявки.</a></li>
</ul>
</html>
<body>
<p>Создание <strong>Плановой заявки</strong> необходимо для автоматизации подачи <strong>Заявок</strong> в случаях регулярного
    ремонта или обслуживания объектов (оборудования). По заданным настройкам система самостоятельно будет создавать
    <strong>Заявки</strong> и
    уведомлять ваших
    сервисных специалистов о предстоящей работе.</p>

<h5 id="planticket">Создание Плановой заявки в web-приложении</h5>

<p>Создать <strong>Плановую заявку</strong> можно в меню <strong>Заявки - Планировщик работ</strong> по кнопке <strong>Создать
    заявку</strong>. Форма создания <strong>Плановой заявки</strong> состоит из нескольких разделов:
    <strong>Название</strong>, <strong>Тип
        заявки</strong>, <strong>Вид работ</strong>, <strong>Объект/оборудование</strong>, <strong>Описание</strong>
    <strong>Исполнитель</strong>, <strong>Плановое создание заявок</strong>, раздел <strong>Ограничить
        повторения</strong> (раздел появляется после выбора <strong>Частоты создания заявок</strong>).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/PlannedTicket.jpg"/>
</div>

<p>Процесс заполнения полей <strong>Плановой заявки</strong> основан на заполнении обычной <strong>Заявки</strong>.
    Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html#webticket">Создание заявки</a>.</p>
            <p> Рассмотрим
    заполнение <strong>Плановой заявки</strong>:</p>
<ul>
    <li><strong>Название</strong> заполняется в свободной форме;</li>
    <li>с указанным <strong>Типом заявки</strong> будут создаваться <strong>Плановые заявки</strong>. <strong>Тип заявки</strong> может быть выбран только один;</li>
    <li><strong>Вид работ</strong> может быть выбран только один. По <strong>Виду работ</strong> подбираются <strong>Объекты/оборудование</strong> для создания <strong>Плановой
        заявки</strong> (<strong>Виды работ</strong> заполняются в карточке <strong>Объекта</strong>). На следующем шаге вы можете уточнить выбор <strong>Объектов</strong>;
    </li>
    <li><strong>Плановые заявки</strong> можно подавать не только на один <strong>Объект/оборудование</strong>, но и на
        группу <strong>Объектов</strong> с указанным выше <strong>Видом работ</strong>. После выбора <strong>Вида работ</strong> вы увидите ссылку на
        подобранные <strong>Объекты</strong>
        - <strong>К списку объектов</strong>. Перейдите по ссылке и установите флажки на <strong>Объектах</strong>, которые вам нужны для
        создания <strong>Заявок</strong>.
        <p>        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/ListObj.jpg"/>
        </div>        </p>

        Либо уточните выбор <strong>Объектов</strong> с помощью фильтров по кнопке <strong>Подобрать объекты</strong>.
        <p>        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/FilterObj.jpg"/>
        </div>        </p>
    </li>
    <li>в поле <strong>Описание</strong> можно внести описание заявки в свободной форме;</li>
    <li>в разделе <strong>Плановое создание заявок</strong> настраивается частота создания <strong>Плановых заявок</strong>. В
        выпадающем списке
        выберите один из вариантов: <strong>Ежедневно</strong>, <strong>Еженедельно</strong> и т.д.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 40%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/plantick3.png"/>
        </div>
        </p>
        Для каждого из вариантов будет доступна детальная настройка времени. Например, необходимо каждые 3 недели по
        вторникам создавать <strong>Плановую заявку</strong> в 10 часов утра.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 40%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/TimeManager.jpg"/>
        </div>
        </p>
    </li>
    <li>параметр <strong>Отложить начало выполнения работ</strong> позволит скорректировать срок закрытия заявки. Например, <strong>Плановая
        заявка</strong> будет создана в 12:00 и плановый срок закрытия заявки 4 часа. Если данный параметр не указан, то срок по
        заявке будет 16:00. Если же данный параметр равен 2 часа, то срок будет определен как 18:00.
    </li>
    <li>в разделе <strong>Ограничить повторения</strong> вы можете указать <strong>Период создания заявки</strong>, например, <strong>Плановые заявки</strong> вам нужно
        создавать в течение года. Либо ограничить повторения по количеству, например, вам нужно всего 10 заявок.
    </li>
    <li>в поле <strong>Исполнитель</strong> по умолчанию установлено значение <strong>Автоматическое назначение
        исполнителя</strong>. Если вы хотите выбрать определенного специалиста, отключите данную функцию.

        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/SelectEngineer.jpg"/>
        </div>
        </p>

        <strong>Автоматическое назначение исполнителя</strong> означает, что исполнитель будет подбираться при создании заявки по
        специальным
        правилам выбора исполнителя.
        <strong>Правило выбора исполнителя</strong> можно создать в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
            администратора</a> в меню Настройки заявки - Правила выбора исполнителя. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила выбора исполнителя</a>.
        <p>После создания правила его необходимо привязать к стадии заявки <strong>Новая</strong>, чтобы исполнитель назначался
            автоматически именно при создании <strong>Плановой заявки</strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/USER/PlannedTickets/Stage.jpg"/>
        </div>
        <p>Обратите внимание! Внося изменения в стадию заявки эти изменения будут работать для всех <strong>Типов заявок</strong>, в
            жизненный цикл которых включена эта стадия. Вы можете создать отдельный <strong>Тип заявки</strong> для <strong>Плановой заявки</strong>,
            создать новую стадию Новая (для плановой заявки), настроить жизненный цикл. И выбрать такой тип для создания
            <strong>Плановой заявки</strong>. Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный цикл заявки</a>.</p>
    </li>
</ul>

<p>После заполнения всех полей нажмите кнопку <strong>Сохранить</strong>. После сохранения нажмите кнопку
    <strong>Запланировать</strong>. Таким образом вы запустите процесс автоматического создания <strong>Заявок</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/PlannedTicketDone.jpg"/>
</div>


<h5 id="editticket">Просмотр и редактирование Плановой заявки</h5>
<p>Для редактирования <strong>Плановой заявки</strong> необходимо сначала приостановить ее действие. Для этого зайдите
    в <strong>Плановую заявку</strong> и нажмите кнопку <strong>Приостановить</strong>. Теперь вы можете вносить
    изменения. После внесения изменений необходимо заново нажать кнопку <strong>Запланировать</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/PlannedTickets/plantick5.png"/>
</div>
</body>

___
### Следующие шаги:
- [Создание дополнительных полей в заявке](./AdditionalFields.md)
- [Использование фильтров для поиска заявок](./Filters.md)
- [Переход заявки по стадиям и удаление заявки](./ChangingStatus.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
