---
title: Ввод обслуживаемого оборудования.
description: Как добавить обслуживаемые компанией объекты в систему HubEx?
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

#### Создание обслуживаемого оборудования
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#poch">Отличать родительские и дочерние объекты/оборудование;</a></li>
    <li><a href="#tga">Разрешать подачу заявок на объекты/оборудование;</a></li>
    <li><a href="#fillelse">Заполнять дополнительные поля при создании объектов/оборудования.</a></li>
</ul>
</html>

<p>Под <strong>Объектом</strong> в системе HubEx понимается здание, помещение, оборудование, прибор и т.д., который
    требует ремонта, обслуживания и т.д.</p>

<p>Для добавления обслуживаемого оборудования необходимо перейти на вкладку <strong>Объекты|Оборудование</strong>
    бокового меню и нажать кнопку <strong>Создать объект</strong>. Форма <strong>Объекта</strong> состоит из нескольких
    вкладок: <strong>Объект|Оборудование</strong>, <strong>Контакты</strong>, <strong>Обслуживание</strong>, <strong>Доп.поля</strong>.
</p>

![obj1.png](/attachments/images/FAQ/USER/CreatingObjects/obj1.png)

Рассмотрим определение <strong>Типа объекта</strong> и заполнение остальных полей.

<h5 id="poch">Отличие родительских объектов от дочерних</h5>

<p>Выбор <strong>Типа объекта</strong> позволяет создать иерархию обслуживаемого оборудования, помещений и т.д. Тип <strong>Оборудование</strong> - низший уровень
    иерархии. Тип <strong>Объект</strong> - недвижимая сущность, которая является родителем для Оборудования. Для типа
    <strong>Объект</strong> обязательным условием является наличие адреса. Обязательным условием создания карточки с типом <strong>Оборудование</strong>
    является выбор родительского <strong>Объекта</strong>.</p>

<p>Разницу между дочерними и родительскими объектами легко понять на примере: в бизнес-центре Авеню, который является
    родительским объектом, есть офис 514. Офис будет дочерним объектом по отношению к
    бизнес-центру. В офисе 514 есть кофемашина, которая будет дочерним объектом по отношению и к офису и к самому
    бизнес-центру.</p>

<p>Добавить новые <strong>Типы объектов</strong> для вашего бизнеса может администратор системы. Подробно об этом написано в статье <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html"> Типы объектов.</a>

<p>Таким образом будет выглядеть родительский объект.</p>
 <div>
   <img  src="/attachments/images/FAQ/USER/CreatingObjects/obj10.jpg" />
 </div>
<!--![obj10.png](/attachments/images/FAQ/USER/CreatingObjects/obj10.png)-->

<p>Созать дочерний объект в системе можно тремя способами:</p>
<ol>
    <li>По кнопке <strong>Создать объект</strong> на вкладке <strong>Объекты|Оборудование</strong> с указанием родительского элемента.</li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/obj12.png"/>
    </div>

    <li>Из профиля родительского объекта по кнопке <strong>Контекстного меню</strong> (3 точки) - <strong>Создать дочерний объект|оборудование</strong>.
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/obj13.jpg"/>
    </div>

    <li>Из перечня всех <strong>Объектов</strong>, нажав на кнопку <strong>Контекстного меню</strong> (3 точки) - <strong>Создать дочерний объект|оборудование</strong> на
        конкретном объекте.
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/obj14.jpg"/>
    </div>

</ol>

<h5 id="tga">Разрешение на подачу заявок</h5>
<p>Включение функции <strong>Разрешить подавать заявки по этому объекту</strong> позволит вам подавать
    <strong>Заявки</strong> по этому оборудованию. Если
    вы хотите добавить в систему объект, который в данный момент не обслуживаете или который нуждается в дальнейшем
    редактировании, то влючить эту функцию можно
    позже. Это позволит оптимизировать список объектов и
    рассматривать как те объекты, которые уже обслуживаются, так и те по которым вы еще не проводите работы.</p>

![obj11.png](/attachments/images/FAQ/USER/CreatingObjects/obj11.png)

<h5 id="fillelse">Заполнение остальных полей</h5>

<p>На вкладке <strong>Объекты|Оборудование</strong> заполняются также следующие поля:</p>
<ul>
    <li><strong>Компания-владелец</strong>;</li>
    <li><strong>Адрес</strong>;</li>
    <li><strong>Участок</strong>;</li>
    <li><strong>Прикрепление файлов</strong>.</li>
</ul>
<p>В поле <strong>Компания-владелец</strong> выберите, какой компании принадлежит обслуживаемое оборудование. Выбор
    осуществляется из списка созданных вами компаний.</p>

![obj2.png](/attachments/images/FAQ/USER/CreatingObjects/obj2.png)

<p>В поле <strong>Участок</strong> выберите, к какому участку принадлежит оборудование. С помощью <strong>Участков</strong> происходит разделение объектов
    и оборудования на зоны. <strong>Участки</strong> обеспечивают видимость <strong>Объектов</strong> для одних инженеров,
    но не позволяют видеть <strong>Заявки</strong> и <strong>Объекты</strong> другим. Например, Северо-Запад Санкт-Петербурга, Краснодарский
    край и др. <strong>Объект</strong> может принадлежать к нескольким участкам одновременно.</p>

![obj3.JPG](/attachments/images/FAQ/USER/CreatingObjects/obj3.JPG)

<p><strong>Адрес</strong> объекта добавляется по кнопке <strong>Добавить адрес</strong>. <strong>Адрес</strong> обязателен для родительских объектов.</p>

![obj6.png](/attachments/images/FAQ/USER/CreatingObjects/obj6.png)

<p>При создании нового <strong>Объекта</strong> вы можете приложить файлы, которые способны помочь сервисным инженерам в работе с
    оборудованием. Это могут быть фотографии, инструкции в текстовых файлах.</p>

![obj7.png](/attachments/images/FAQ/USER/CreatingObjects/obj7.png)

<p>На вкладке <strong>Контакты</strong> при создании нового <strong>Объекта</strong> можно указать контактную информацию ответственного по объекту,
    например сервисного инженера.</p>

![obj4.png](/attachments/images/FAQ/USER/CreatingObjects/obj4.png)

<p>Также можно ввести дополнительные контакты, например, охранника или вахтёра.</p>

![obj9.png](/attachments/images/FAQ/USER/CreatingObjects/obj9.png)

<p>На вкладке <strong>Обслуживание</strong> запоняются следующие поля:</p>
<ul>
    <li><strong>Ответственный за объкт</strong>;</li>
    <li><strong>Вид работ</strong>;</li>
    <li><strong>Навыки</strong>;</li>
    <li><strong>На гарантии до</strong>;</li>
    <li><strong>Чек-лист</strong>.</li>
</ul>

<p>В поле <strong>Ответственный за объект</strong> можно указать сервисного инженера, который постоянно обслуживает
    обект. Эту информацию в дальнейшем можно использовать при настройке автораспределения сотрудников на Заявки. Подробнее об этом
    читайте <a href="https://wiki.hubex.ru/docs/FAQ/RU/users/CreatingTicket.html"> здесь</a></p>

<p>В поле <strong>Вид работ</strong> необходимо выбрать те виды деятельности, которые можно осуществлять над <strong>Объектом</strong>.
    Эти <strong>Виды работ</strong> затем будут использоваться при создании <strong>Заявок</strong>.</p>

<p><strong>Навыки</strong>: здесь можно указать дополнительную квалификацию, которой должен обладать Сотрудник, чтобы
    взаимодействовать с Объектом. Навыки используются в настройке автораспределения исполнителей на Заявки.</p>

<p>Если вы даете гарантию на свои услуги, то ее срок можно отразить с помощью реквизита <strong>На гарантии до</strong>.
</p>

<p>К <strong>Объекту</strong> можно привязать один <strong>Чек-лист</strong>. <strong>Чек-лист</strong> - это контрольный список дел или задач, которые необходимо
    выполнить или проверить по <strong>Объекту</strong>. Подробнее о создании <strong>Чек-листов</strong> читайте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/Checklists.html"> здесь</a>.</p>

![obj5.png](/attachments/images/FAQ/USER/CreatingObjects/ObjectService.jpg)

<p>Вкладка <strong>QR-коды</strong> позволит вам промаркировать <strong>Объект</strong> - создать и привязать <strong>Паспорт
    объекта</strong>. С помощью него вы можете просмотреть основную информацию об
    объекте, отсканировав <strong>QR-код</strong>. Подробнее про создание <strong>Паспорта объекта</strong> и <strong>QR-кода</strong> можно прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTickTemplates.html">здесь</a>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj8.png"/>
</div>


<p> Вы можете ускорить процесс добавления <strong>Объектов</strong> в систему HubEx с помощью функциии <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#objects"> Импорта.</a></p>
<p> Для выгрузки информации по <strong>Объектам</strong> из системы HubEx можно воспользоваться функцией <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#objects"> Экспорта.</a></p>

### Следующие шаги:
- [Создание заказчика](./CreatingCustomer.md)
- [Использование МП Заказчика](./CustomerApp.md)
- [Создание плановой заявки](./PlannedTickets.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
