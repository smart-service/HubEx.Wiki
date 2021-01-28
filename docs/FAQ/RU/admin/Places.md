---
title: Настройка участков
description: Участок в HubEx-это классификация Объектов, Типов заявок, Сотрудников и Заказчиков. Участки создаются в консоли администрирования Структура предприятия-Участки. Укажите новый участок в карточках Объектов, Типов заявок, Сотрудников и Заказчиков и настройте роли (доступ по участкам).
---

#### Настройка участков
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#place">Что такое участок</a>;</li>
    <li><a href="#newplace">Как создать новый участок</a>.</li>

</ul>
</html>
<body>
<p id="place"><Strong>Участок</Strong> – это классификация <Strong>Объектов</Strong>, <Strong>Типов заявок</Strong>,
    <Strong>Сотрудников</Strong>, <Strong>Заказчиков</Strong> по различным критериям:
    географическим,
    функциональным и т.д.
    С помощью настройки ролей по участкам можно разграничить доступ сотрудников и заказчиков к работе с определенными
    объектами и типами заявок и заявками. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html#exrole">Настройка ролей: Как настроить доступ пользователей в разрезе участков</a>.
</p>
<p>Например, можно создать участок «Электрооборудование» и отнести к нему все подходящие объекты. Далее создать тип
    заявки, например, «Ремонт электрооборудования», который будет иметь специфический жизненный цикл, и указать у него
    участок «Электрооборудование». Затем указать у сотрудника тот же участок. Таким образом, этот сотрудник сможет
    создавать заявки с типом «Ремонт электрооборудования» и выбирать объекты только по участку
    «Электрооборудования».</p>

<p>Для <Strong>Объекта</Strong>, <Strong>Типа заявки</Strong>,
    <Strong>Сотрудника</Strong>, <Strong>Заказчика</Strong> можно указать несколько участков.</p>

<h5 id="newplace">Как создать участок</h5>
<p>Для создания и настройки нового <Strong>Участка</Strong> перейдите в меню <Strong>Структура предприятия - Участки</Strong> в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>. Нажмите кнопку <Strong>Создать участок</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Places.jpg"/>
</div>
<p>В окне создания участка введите
    <Strong>Название</Strong>. Поле
    <Strong>Идентификатор из внешней системы</Strong> заполняется в случае, если вы хотите связать HubEx с внешней
    системой, например 1С.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/NewPlace.jpg"/>
</div>
<p>У каждого <Strong>Участка</Strong> есть статистика по количеству связей с <Strong>Объектами</Strong>, <Strong>Пользователями</Strong> (<Strong>Сотрудники + Заказчики</Strong>) и <Strong>Типами
    заявок</Strong>. Статистика необходима для принятия решений об удалении <Strong>Участка</Strong>, переноса всех элементов, относящихся к <Strong>Участку</Strong> на другой и т.д.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Statistic.jpg"/>
</div>

<p>Участками могут быть связаны <Strong>Объекты</Strong>, <Strong>Сотрудники</Strong>, <Strong>Заказчики</Strong> и
    <Strong>Типы заявок</Strong>. После создания нового участка необходимо
    указать его в карточках этих справочников.</p>
<p>Выбор <Strong>Участков</Strong> в карточке <Strong>Объекта</Strong> находится на вкладке
    <Strong>Объект|Оборудование</Strong> внизу страницы (меню <Strong>Объекты|Оборудование
        - Объекты|Оборудование</Strong>).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Object.jpg"/>
</div>

<p>У <Strong>Сотрудника</Strong> добавить участок можно на вкладке <Strong>Квалификация</Strong> (меню <Strong>Пользователи
    - Сотрудники</Strong>).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Employee.jpg"/>
</div>

<p>Участок в карточке <Strong>Заказчика</Strong> можно указать на вкладке <Strong>Квалификация</Strong> (меню <Strong>Пользователи
    - Заказчики</Strong>).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Customer.jpg"/>
</div>

<p><Strong>Тип заявки</Strong> - справочник, который находится в консоли администрирования в меню <Strong>Настройки
    заявки - Типы заявок</Strong>. Если
    вам необходимо, чтобы определенный тип заявки со своим жизненным циклом использовался на поределенном участке, то
    укажите этот участок в карточке <Strong>Типа заявки</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Places/Type.jpg"/>
</div>
</body>

- [Типы оборудования](./ObjectsType.md)
- [Виды работ](./WorkType.md)
- [Типы заявок](./TicketType/.md)

____
- [Перейти в меню](http://wiki.hubex.ru)