---
title: Переход заявки по стадиям.
description: Как изменить стадию (статус) заявки во время проведения работ по заявке в системе HubEx?
---

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym('{{ site.yandex_metric }}', "init", {
        id: '{{ site.yandex_metric }}',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
</script>
<noscript>
    <div><img src="https://mc.yandex.ru/watch/'{{ site.yandex_metric }}'" style="position:absolute; left:-9999px;"
              alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->

#### Переход заявки по стадиям и удаление заявки
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#changingstatus">Переводить Заявки по стадиям</a></li>
    <li><a href="#deletetick">Удалять Заявку на любой стадии</a></li>
</ul>
</html>
<p><strong>Стадия</strong> - это состояние <strong>Заявки</strong> на каждом этапе выполнения бизнес-процесса. Стадии заявки складываются в определенный
    жизненный цикл. Например, <strong>Заявка</strong> может проходить по следующим стадиям: <strong>Новая → Назначена диспетчером → Принята
    исполнителем → Выполнена</strong>. </p>
<p>Подробнее о настройке жизненного цикла читайте в статьях: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/BusinessProcess.html">Базовый бизнес-процесс для заявки</a> и <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный цикл заявки</a>.</p>

<h5 id="changingstatus">Переход Заявки по стадиям</h5>
<p><strong>Стадии заявки</strong> создаются в консоли администратора. Подробно об этом читайте <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">здесь</a>.</p>
<p>Переход <strong>Заявки</strong> по стадиям осуществляется пользователями системы при выполнении определенных условий. Например,
    переход на стадию <strong>Принята исполнителем</strong> осуществляется, когда сервисный специалист в мобильном приложении принимает
    назначенную на него <strong>Заявку</strong>.</p>
<p>В мобильном приложении инженера у пользователя ограниченный выбор вариантов перевода <strong>Заявки</strong> на стадии (<strong>Принять</strong>, а
    затем <strong>Выполнить</strong> или <strong>Отказаться от Заявки</strong>). В
    web-приложении диспетчер может иметь права на перевод <strong>Заявки</strong> на любую стадию.</p>
<p>В общем списке <strong>Заявок</strong> у каждой из них в правом нижнем углу отображается текущая стадия.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/TicketsList.jpg"/>
</div>

<p>В открытой <strong>Заявке</strong> ее стадия отображается сверху. Для перевода <strong>Заявки</strong> по стадиям необходимо нажать на кнопку <strong>Перейти
    на стадию</strong> и выбрать необходимую. После изменения стадии нажмите кнопку <strong>Сохранить</strong> в правом верхнем углу.</p>

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

<p><strong>Заявку</strong> можно удалить на любой стадии. Например, если вы внесли неправильную информацию, создали документ по
    ошибке. </p>
<p>Удалить <strong>Заявку</strong> можно только в том случае, если у пользователя достаточно на это прав. Права настраиваются с помощью
    <strong>Ролей</strong> в консоли администратора. Подробно о настройке <strong>Ролей</strong> читатйте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html"> читайте здесь.</a></p>

<p>Право удалять <strong>Заявки</strong> рекомендуется назначать только Начальникам Сервисной службы, либо
    Администраторам системы). В консоли администратора в меню <strong>Роли</strong> откройте необходимую:</p>
<ol>
    <li>Перейдите во вкладку <strong>Расширенные полномочия</strong>. Напишите слово
        Удалять в графе <strong>Поиск</strong>. В списке из подобранных совпадений выберите пункт <strong>Удалять незакрытые заявки</strong> и нажмите на
        флажок рядом.
    </li>
    <li>Перейдите во вкладку <strong>UI Полномочия</strong>. Напишите слово
        Удаления в графе <strong>Поиск</strong>. В списке выберите пункт <strong>Кнопка удаления заявки</strong> и нажмите на флажок рядом.
    </li>
</ol>
<div style="display: flex;">
    <img style="margin: 0 auto; display: block; max-width: 45%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/Rules.jpg"/> <img
        style="margin: 0 auto; display: block; max-width: 45%;"
        src="/attachments/images/FAQ/USER/ChangingStatus/Rules2.jpg"/>
</div>

<p>Теперь <strong>Заявку</strong> можно будет удалить из списка <strong>Заявок</strong>: нажмите на контекстное меню (три точки) и выберите пункт <strong>Удалить</strong>,
    либо также в контекстном меню (три точки) открытой <strong>Заявки</strong> выберите пункт <strong>Удалить</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/DeleteTicket.jpg"/>
</div>
<p>Обратите внимание! <strong>Заявки</strong> не удаляются из системы полностью. Удаленные <strong>Заявки</strong> скрываются из общего списка. С
    помощью фильтров вы можете отобразить <strong>Все заявки</strong> или показать <strong>Только удаленные</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChangingStatus/Filters.jpg"/>
</div>

### Следующие шаги:
- [Прикрепление выполненных работ](./AttachingFiles.md)
- [Создание шаблона оборудования и маркировка](./CreatingObjTemplates.md)
- [Создание шаблона заявок и паспорт объекта](./CreatingTickTemplates.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
