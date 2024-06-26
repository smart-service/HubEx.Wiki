---
title: Виды работ
description: Вид работ – специфический вид деятельности (услуг), который может выполняться Сотрудником и быть направлен на Объект. Создать Вид работ можно в консоли администратора в меню Настройки заявки - Виды работ по кнопке Создать вид работ.
keywords: виды работ, вид работ, автораспределение исполнителей по виду работ, автоназначение по виду работ, вид работ в заявке, hubex, хабекс, хубекс, хабикс
---

<h1>Виды работ</h1>

<html lang="ru">
<meta charset="utf-8">

<p>Содержание статьи:</p>

<ul>
    <li><a href="#worktype1">Что такое виды работ в HubEx;</a></li>
    <li><a href="#worktype2">Создание новых видов работ;</a></li>
    <li><a href="#worktype3">Виды работ в заявках;</a></li>
    <li><a href="#worktype4">Виды работ в объектах/оборудовании;</a></li>
    <li><a href="#worktype5">Виды работ в сотрудниках.</a></li>
</ul>
</html>

<body>

<h2 id="worktype1">Что такое виды работ в HubEx</h2>

<p><Strong>Вид работ</Strong> – это специфический вид деятельности (услуг), который может выполняться <Strong>Сотрудником</Strong> и быть направлен на <Strong>Объект</Strong>.</p>
<p>Например, видами работ могут быть: услуги клининга, ремонт, диагностика, услуга аренды недвижимости, услуги доставки и т.д.</p>
<p><Strong>Вид работ</Strong> позволяет классифицировать <Strong>Объекты</Strong>, <Strong>Сотрудников</Strong> и <Strong>Заявки</Strong> по видам выполняемых работ. Например, отделить заявки на клининг от заявок на ремонт оборудования.</p>

<h2 id="worktype2">Создание новых видов работ</h2>

<p>Создать новый <Strong>Вид работ</Strong> можно в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">Консоли администратора</a> в разделе левого бокового меню <Strong>"Настройки заявки" - "Виды работ"</Strong> по кнопке <Strong>"Создать вид работ"</Strong>.</p>

<div> <img style="margin: 0 auto; display: block; max-width: 70%;" src="/attachments/images/FAQ/ADMIN/WorkType/WorkType.jpg"/> </div>

<p>Рассмотрим заполнение карточки <Strong>Вида работ</Strong>:</p>

<ul>
    <li><strong>Название вида работ</strong>: заполняется в свободной форме;</li>
    <li><Strong>Описание</Strong>: вы можете заполнить содержание выполняемых работ;</li>
    <li><Strong>Чек-лист выполняемых работ</Strong>: можно указать чек-лист, который автоматически будет подтягиваться в <Strong>Заявку</Strong> при выборе данного <Strong>Вида работ</Strong>. Чек-листы создаются в пользовательском меню системы <Strong>Чек-листы</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Checklists.html">Чек-листы</a>;</li>
    <li><Strong>Плановые трудозатраты</Strong>: устанавливаются, если вы хотите автоматический расчет срока окончания работ на форме выбора исполнителя в <Strong>Заявке</Strong>;</li>
        <p> <div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/WorkType/Engineer.jpg"/> </div> </p>
    <li><strong>Время закрытия заявки</strong>:установится автоматически после сохранения <Strong>Заявки</Strong> с выбранным <Strong>Видом работ</Strong>. <Strong>Крайний срок закрытия</Strong> также может быть установлен в настройке <Strong>Типа заявки</Strong>. При создании заявки система выберет наименьшее значение срока закрытия из установленного в <Strong>Типе заявке</Strong> и <Strong>Виде работ</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>
        <p><Strong>Крайний срок закрытия</Strong> также может быть рассчитан с помощью учета SLA в разрезе заказчиков и с учетом различных параметров <Strong>Заявки</Strong> и создания правил расчета крайнего срока закрытия. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - Правила расчета крайнего срока закрытия заявки</a>;</p>
    </li>
        <p> <div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/WorkType/Ticket.jpg"/> </div> </p>
    <li><Strong>Основной вид работ</Strong>: будет подставляться по умолчанию при создании нового <Strong>Объекта</Strong>; </li>
    <li><Strong>Опубликован</Strong>: будет доступен пользователям для работы в системе. <Strong>Опубликованный вид работ</Strong> можно будет указать у <Strong>Объекта</Strong>, <Strong>Сотрудника</Strong> и выбрать в <Strong>Заявке</Strong>.</li>
    <li><Strong>Стоимость вида работ</Strong>: используется для формирования итоговой суммы по <Strong>Заявке</Strong> в <Strong>Акте выполненных работ</Strong>. <Strong>Стоимость вида работ</Strong> будет автоматически заполняться при создании выполненных работ в <Strong>Заявке</Strong> на вкладке <Strong>Выполнение</Strong>, при необходимости ее можно изменить вручную. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.</li>
        <p> <div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/WorkType/Works.jpg"/> </div> </p>
</ul>

<p><strong>Дополнительно!</strong> Если добавить созданные виды работ в карточку сотрудника (исполнителя), то можно настроить <Strong>Правила автоназначения исполнителя</Strong>. Система будет подбирать исполнителя по совпадению <Strong>Вида работ</Strong> в карточке <Strong>Сотрудника</Strong> и выбранного <Strong>Вида работ</Strong> в <Strong>Заявке</Strong>. Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автоназначение на ближайшего исполнителя</a>.</p>

<h2 id="worktype3">Виды работ в заявках</h2>

<p>Чтобы в <Strong>Заявке</Strong> выбрать один из <Strong>Видов работ</Strong> по <Strong>Объекту</Strong>, необходимо, чтобы <Strong>Виды работ</Strong> были указаны в карточке этого <Strong>Объекта</Strong> и добавлены к <Strong>Типу заявки</Strong>.</p>

<p>При создании нового <Strong>Вида работ</Strong> во всех уже созданных в системе <Strong>Объектах</Strong> этот вид работ <strong>НЕ добавится</strong> автоматически.</p>

<p>Создать новый вид работ можно через форму заявки:</p>

<ul>
    <li>При создании <Strong>Заявки</Strong>, в поле выбора <Strong>Вида работ</Strong> создать новый можно по кнопке <Strong>"+"</Strong> или <Strong>"Создать +"</Strong>;
        <p> <div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/ADMIN/WorkType/Ticket2.jpg"/> </div> </p>
    </li>
    <li>Откроется боковая форма <Strong>Вида работ</Strong> с основными полями. После заполнения всех необходимых полей нажмите кнопку <Strong>"Создать"</Strong>.
        <p> <div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/ADMIN/WorkType/Ticket3.jpg"/> </div> </p>
    </li>
</ul>

<h2 id="worktype4">Виды работ в объектах/оборудовании</h2>

<p>При создании или редактировании <Strong>Объекта</Strong> на вкладке <Strong>"Обслуживание"</Strong> можно также создать новый <Strong>Вид работ</Strong>: нажмите кнопку <Strong>"Добавить"</Strong>, чтобы открыть список доступных <Strong>Видов работ</Strong>.</p>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/ADMIN/WorkType/Object.jpg"/> </div> </p>
    
<p>Внизу списка нажмите кнопку <Strong>"+ Добавить"</Strong>.</p>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/ADMIN/WorkType/Object2.jpg"/> </div> </p>

<p>Откроется боковая форма <Strong>Вида работ</Strong> с основными полями. После заполнения всех необходимых полей нажмите кнопку <Strong>"Создать"</Strong>.</p>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/ADMIN/WorkType/Object3.jpg"/> </div> </p>

<h2 id="worktype5">Виды работ в сотрудниках</h2>

<p>Новые виды работ нет возможности создать через карточку сотрудника.</p>

<p>В карточку сотрудника можно добавить вручную только ранее созданные виды работ.</p>

<p>После создания нового вида работ, новый вид работ автоматически <strong>НЕ привяжется</strong> к карточкам уже существующих сотрудников. Новый вид работ нужно привязать к сотрудникам вручную, если это необходимо.</p>

</body>

___
### Следующие шаги:
- [Типы заявок](./TicketType.md)
- [Статусы заявок](./StatusType.md)
- [Критичность заявки](./Criticality.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
