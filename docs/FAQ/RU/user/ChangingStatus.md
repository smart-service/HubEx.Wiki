---
title: Переход заявки по стадиям, удаление заявки
description: Переход Заявки по стадиям осуществляется пользователями системы при выполнении определенных условий.
    Например,
    переход на стадию Принята исполнителем осуществляется, когда сервисный специалист в мобильном
    приложении принимает
    назначенную на него Заявку.
keywords: переход по стадиям, перевод заявки по стадиям, удаление заявки, hubex, хабекс, хубекс, хабикс
---

#### Переход заявки по стадиям и удаление заявки
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#changingstatus">Переводить Заявки по стадиям</a></li>
    <li><a href="#deletetick">Удалять Заявку на любой стадии</a></li>
</ul>
</html>
<p><strong>Стадия</strong> - это состояние <strong>Заявки</strong> на каждом этапе выполнения бизнес-процесса. Стадии
    заявки складываются в определенный
    жизненный цикл. Например, <strong>Заявка</strong> может проходить по следующим стадиям: <strong>Новая → Назначена
        диспетчером → Принята
        исполнителем → Выполнена</strong>. <strong>Стадии заявки</strong> создаются в <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>.</p>
<p>Подробнее читайте в статьях: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/BusinessProcess.html">Базовый бизнес-процесс для заявки</a>, <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный цикл заявки</a>, <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>.</p>

<h5 id="changingstatus">Переход Заявки по стадиям</h5>
<p>Переход <strong>Заявки</strong> по стадиям осуществляется пользователями системы при выполнении определенных условий.
    Например,
    переход на стадию <strong>Принята исполнителем</strong> осуществляется, когда сервисный специалист в мобильном
    приложении принимает
    назначенную на него <strong>Заявку</strong>.</p>
<p>В мобильном приложении инженера у пользователя ограниченный выбор вариантов перевода <strong>Заявки</strong> на
    стадии (<strong>Принять</strong>, а
    затем <strong>Выполнить</strong> или <strong>Отказаться от Заявки</strong>). В
    web-приложении диспетчер может иметь права на перевод <strong>Заявки</strong> на любую стадию.</p>
<p>В общем списке <strong>Заявок</strong> у каждой из них в правом нижнем углу отображается текущая стадия.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/TicketsList.jpg"/>
</div>

<p>В открытой <strong>Заявке</strong> ее стадия отображается сверху. Для перевода <strong>Заявки</strong> по стадиям
    необходимо нажать на кнопку <strong>Перейти
        на стадию</strong> и выбрать необходимую. После изменения стадии нажмите кнопку <strong>Сохранить</strong> в
    правом верхнем углу.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/Status.jpg"/>
</div>

<p>После изменения стадии каждому, кто связан с <strong>Заявкой</strong>, придет push-уведомление об изменениях.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/stat3.jpg"/>
</div>


<h5 id="deletetick">Удаление Заявки на любой стадии</h5>

<p><strong>Заявку</strong> можно удалить на любой стадии. Например, если вы внесли неправильную информацию, создали
    документ по
    ошибке. </p>
<p>Удалить <strong>Заявку</strong> можно только в том случае, если у пользователя достаточно на это прав. Права
    настраиваются с помощью
    <strong>Ролей</strong> в консоли администратора. Подробнее читатйте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.</p>

<p>Право удалять <strong>Заявки</strong> рекомендуется назначать только Начальникам Сервисной службы, либо
    Администраторам системы. В консоли администратора в меню <strong>Администрирование - Роли</strong> откройте
    необходимую <strong>Роль</strong> и внесите изменения:</p>
<ol>
    <li>Перейдите во вкладку <strong>Полномочия</strong>, выберите блок <strong>Заявки</strong>. Напишите часть слова
        "удал" (от слова "удаление") в графе <strong>Поиск</strong>.
    </li>
    <li>В списке из подобранных совпадений выберите пункты <strong>Удаление заявок</strong> и <strong>Удалять незакрытые
        заявки</strong>. Сохраните внесенные изменения.
    </li>
</ol>
<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/Roles.jpg"/>
</div>

<p>Теперь <strong>Заявку</strong> можно будет удалить из списка <strong>Заявок</strong>: нажмите на контекстное меню
    (три точки) и выберите пункт <strong>Удалить</strong>,
    либо также в контекстном меню (три точки) открытой <strong>Заявки</strong> выберите пункт <strong>Удалить</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/DeleteTicket.jpg"/>
</div>
<p>Обратите внимание! <strong>Заявки</strong> не удаляются из системы полностью. Удаленные <strong>Заявки</strong>
    скрываются из общего списка. С
    помощью фильтров вы можете отобразить <strong>Все заявки</strong> или показать <strong>Только удаленные</strong>.
    Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/DeletedObjects.html">Почему нельзя
        удалить объекты/сотрудников/заявки и т.д. навсегда?</a></p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/Filters.jpg"/>
</div>

<p>Обратите внимание! Возможность просматривать удаленные заявки доступна только для учетной записи владельца тенанта.</p>

### Следующие шаги:
- [Прикрепление выполненных работ](./AttachingFiles.md)
- [Создание шаблона оборудования и маркировка](./CreatingObjTemplates.md)
- [Создание шаблона заявок и паспорт объекта](./CreatingTickTemplates.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
