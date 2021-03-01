---
title: Виды работ
description:
keywords: виды работ, вид работ, автораспределение исполнителей по виду работ, автоназначение по виду работ, вид работ в заявке, hubex, хабекс, хубекс, хабикс
---
#### Виды работ
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">

</html>

<body>

<p><Strong>Вид работ</Strong> – специфический вид деятельности (услуг), который может выполняться <Strong>Сотрудником</Strong> и быть направлен на <Strong>Объект</Strong>.
    Например, видами работ могут быть: услуги клининга, ремонт, диагностика, услуга аренды недвижимости, услуги доставки
    и т.д. <Strong>Вид работ</Strong> позволяет классифицировать <Strong>Объекты</Strong>, <Strong>Сотрудников</Strong> и <Strong>Заявки</Strong> по видам выполняемых работ. Например,
    отделить
    заявки на клининг от заявок на ремонт оборудования.</p>

<p> Чтобы в <Strong>Заявке</Strong> выбрать один из <Strong>Видов работ</Strong> по <Strong>Объекту</Strong>, необходимо сначала указать <Strong>Виды работ</Strong> в карточке этого
    <Strong>Объекта</Strong>.</p>
<p>Создать <Strong>Вид работ</Strong> можно в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
    администратора</a> в меню <Strong>Настройки заявки - Виды работ</Strong> по кнопке <Strong>Создать вид работ</Strong>.</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/WorkType/WorkType.jpg"/>
</div>

<p>Рассмотрим заполнение карточки <Strong>Вида рабо</Strong>т:</p>

<ul>
    <li>Название <Strong>Вида работ</Strong> заполняется в свободной форме;</li>
    <li>в поле <Strong>Описание</Strong> вы можете заполнить содержание выполняемых работ;</li>
    <li>в поле <Strong>Чек-лист выполняемых работ</Strong> можно указать <Strong>Чек-лист</Strong>, который автоматически будет подтягиваться в <Strong>Заявку</Strong> при
        выборе данного <Strong>Вида работ</Strong>. Чек-листы создаются в пользовательском меню системы <Strong>Чек-листы</Strong>. Подробнее читайте в
        статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Checklists.html">Чек-листы</a>.
    </li>
    <li>значение параметра <Strong>Плановые трудозатраты</Strong> устанавливается, если вы хотите автоматический расчет срока окончания
        работ на форме выбора исполнителя в <Strong>Заявке</Strong>;
    <li>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/WorkType/Engineer.jpg"/>
        </div>
    <li>Время закрытия заявки установится автоматически после сохранения <Strong>Заявки</Strong> с выбранным <Strong>Видом работ</Strong>. <Strong>Крайний срок
        закрытия<Strong> также может быть установлен в настройке <Strong>Типа заявки</Strong>.
        При создании заявки система выберет наименьшее значение срока закрытия из установленного в <Strong>Типе заявке</Strong> и <Strong>Виде
        работ</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>;
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/ADMIN/WorkType/Ticket.jpg"/>
    </div>
    <li><Strong>Основной вид работ</Strong> будет подставляться по умолчанию при создании нового <Strong>Объекта</Strong>;</li>
    <li><Strong>Не опубликованный вид работ</Strong> не будет доступен пользователям для работы в системе. <Strong>Опубликованный вид работ</Strong> можно
        будет указать у <Strong>Объекта</Strong>, <Strong>Сотрудника</Strong> и выбрать в <Strong>Заявке</Strong>.
    </li>
    <li><Strong>Стоимость вида работ</Strong> используется для формирования итоговой суммы по <Strong>Заявке</Strong> в <Strong>Акте выполненных работ</Strong>.
        <Strong>Стоимость вида работ</Strong> будет автоматически заполняться при создании выполненных работ в <Strong>Заявке</Strong> на вкладке
        <Strong>Выполнение</Strong>, при необходимости ее можно изменить вручную.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/ADMIN/WorkType/Works.jpg"/>
    </div>
</ul>

<p>Если заполнить <Strong>Виды работ</Strong> в карточке <Strong>Сотрудника</Strong> (исполнителя), то можно настроить правила автораспределения на
    <Strong>Заявки</Strong>. Система будет подбирать исполнителя по совпадению <Strong>Вида работ</Strong> в карточке <Strong>Сотрудника</Strong> и выбранного <Strong>Вида работ</Strong> в
    <Strong>Заявке</Strong>.
    Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила выбора
        исполнителя</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автораспределение на
        ближайшего исполнителя</a>.
</p>


</body>

### Следующие шаги:
- [Типы заявок](./TicketType.md)
- [Статусы заявок](./StatusType.md)
- [Актуальность заявки](./Actuality.md)


____
- [Перейти в меню](http://wiki.hubex.ru)
