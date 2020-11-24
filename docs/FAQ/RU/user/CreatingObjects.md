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
    требует ремонта, обслуживания и т.д. Объекты в системе привязываются к компаниии-заказчику. Указывая в
    заявках объект/оборудование, можно в дальнейшем получать детальную
    аналитику обращений клиентов, заказов, выполненных работ по каждой единице оборудования заказчика. Также можно
    назначать заявки по разным объектам/оборудованию на разных исполнителей.</p>

<p>Если детальный учет по различным объектам или оборудованию заказчика не требуется, можно завести один обслуживаемый
    объект для каждого заказчика и он автоматически будет подставляться в <strong>Заявку</strong> при выборе заказчика.
</p>

<p>Для добавления обслуживаемого оборудования необходимо перейти на вкладку <strong>Объекты|Оборудование</strong>
    бокового меню и нажать кнопку <strong>Создать объект</strong>. При создании форма <strong>Объекта</strong> состоит
    из следующих
    вкладок: Объект|Оборудование, Контакты, Обслуживание, Дополнительные поля. После сохранения карточки
    <strong>Объекта</strong> на
    форме появятся дополнительные вкладки: QR-коды, Дочерние объекты и История обслуживания.
</p>

<div style="display: flex;">
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/ObjectEmpty.jpg"/> <img
        style="margin: 0 auto; display: block; max-width: 40%;"
        src="/attachments/images/FAQ/USER/CreatingObjects/ObjectMain.jpg"/>
</div>


Далее рассмотрим определение <strong>Типа объекта</strong>, создание дочерних объектов и заполнение полей на форме.

<h5 id="poch">Отличие родительских объектов от дочерних</h5>

<p><strong>Типы объекта</strong> позволяют создать иерархический список обслуживаемых объектов. </p>
<p>Иерархический список представляет собой расположение элементов от родительских к дочерним. В системе HubEx
    родительским является объект с типом <strong>Объект</strong>, а дочерним - с типом <strong>Оборудование</strong>.
</p>
<p>Для родительского объекта с типом
    <strong>Объект</strong> обязательным условием является наличие адреса. Дочерние объект может иметь свой адрес, или
    наследовать его от родительского.</p>


<p>Разницу между дочерними и родительскими объектами легко понять на примере: в бизнес-центре Авеню (тип Объект),
    который является
    родительским объектом, есть офис 514 (тип Объект). Офис будет дочерним объектом по отношению к
    бизнес-центру. В офисе 514 есть кофемашина (тип Оборудование), которая будет дочерним объектом по отношению и к
    офису и к самому бизнес-центру.</p>

<p>Добавить новые <strong>Типы объекта</strong> можно в консоли администратора. Подробнее об этом
    читайте в статье <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html">Типы объектов</a>.</p>

<p>Таким образом будет выглядеть родительский объект.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/ParentObject.jpg"/>
</div>

<p>Созать дочерний объект в системе можно несколькими способами:</p>
<ol>
    <li>
        После сохранения карточки родительсого объекта на вкладке <strong>Дочерние объекты</strong> по кнопке + можно
        создать новый дочерний объект.</p>
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject3.jpg"/>
    </div>

    <li><p>Из карточки родительского объекта по кнопке <strong>Контекстного меню</strong> (3 точки) в правом верхнем
        углу - <strong>Создать
            дочерний объект|оборудование</strong>.</p>
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject2.jpg"/>
    </div>

    <li><p>В главном меню <strong>Объекты|Оборудование</strong> по кнопке <strong>Создать объект</strong> с указанием
        родительского элемента.</p></li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject.jpg"/>
    </div>

    <li><p>Выбрав конкретный объект из списка всех объектов в главном меню <strong>Объекты|Оборудование</strong> и нажав
        на кнопку <strong>Контекстного меню</strong> (3 точки) -
        <strong>Создать дочерний объект|оборудование</strong>.</p>
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/CreatingObjects/ObjectList.jpg"/>
    </div>

</ol>

<h5 id="tga">Разрешение на подачу заявок</h5>
<p>При создании нового объекта на форме отображается флажок <strong>Разрешить подавать заявки по этому объекту</strong>.
    Включение этой функции позволяет подавать
    <strong>Заявки</strong> по объеут/оборудованию. Если
    вы хотите добавить в систему объект, который в данный момент не обслуживаете или который нуждается в дальнейшем
    редактировании, то влючить эту функцию можно
    позже. Это позволит оптимизировать список объектов и
    рассматривать как те объекты, которые уже обслуживаются, так и те по которым вы еще не проводите работы.</p>
<p>Если флажок был установлен и объект был записан, то снять флажок нельзя - он исчезает с формы записанного
    объекта.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/AllowsCreateTicket.jpg"/>
</div>

<h5 id="fillelse">Заполнение остальных полей в карточке объекта</h5>

<p>На вкладке <strong>Объекты|Оборудование</strong> заполняются также следующие поля:</p>
<ul>
    <li><strong>Компания-владелец</strong>;</li>
    <li><strong>Адрес</strong>;</li>
    <li><strong>Участок</strong>;</li>
    <li><strong>Файлы</strong>.</li>
</ul>
<p>В поле <strong>Компания-владелец</strong> выберите, какой компании принадлежит обслуживаемое оборудование. Выбор
    осуществляется из списка созданных вами компаний.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/Owner.jpg"/>
</div>

<p>В поле <strong>Участок</strong> выберите, к какому участку принадлежит оборудование. С помощью
    <strong>Участков</strong> происходит разделение объектов/оборудования на зоны. <strong>Участки</strong> обеспечивают
    видимость <strong>Объектов</strong> для одних
    инженеров,
    но не позволяют видеть <strong>Заявки</strong> и <strong>Объекты</strong> другим. Например, Северо-Запад
    Санкт-Петербурга, Краснодарский
    край и др. <strong>Объект</strong> может принадлежать к нескольким участкам одновременно. Также участки заполняются
    у пользователей, со стороны заказчиков</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj3.JPG"/>
</div>


<p><strong>Адрес</strong> объекта добавляется по кнопке <strong>Добавить адрес</strong>. <strong>Адрес</strong>
    обязательно указывать для родительских объектов. Дочерний объект может иметь свой собственный адрес или наследовать
    его от родителя.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj6.png"/>
</div>


<p>При создании нового <strong>Объекта</strong> вы можете приложить файлы, которые способны помочь сервисным инженерам в
    работе с
    оборудованием. Это могут быть фотографии, инструкции в текстовых файлах.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj7.png"/>
</div>


<p>На вкладке <strong>Контакты</strong> можно указать контактную информацию
    ответственного по объекту со стороны заказчика.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj4.png"/>
</div>

<p>Также можно ввести дополнительные контакты, например, директора, диспетчера.</p>

<!--<div>
  <img style="margin: 0 auto; display: block; max-width: 70%;" src="/attachments/images/FAQ/USER/CreatingObjects/obj9.png" />
</div>-->

<p>На вкладке <strong>Обслуживание</strong> запоняются следующие поля:</p>
<ul>
    <li><strong>Ответственный за объкт</strong>;</li>
    <li><strong>Вид работ</strong>;</li>
    <li><strong>Навыки</strong>;</li>
    <li><strong>На гарантии до</strong>;</li>
    <li><strong>Чек-лист</strong>.</li>
</ul>

<p>В поле <strong>Ответственный за объект</strong> можно указать сервисного инженера, который постоянно обслуживает этот
    обект. Эту информацию в дальнейшем можно использовать при настройке автораспределения сотрудников на Заявки.
    Подробнее об этом
    читайте <a href="https://wiki.hubex.ru/docs/FAQ/RU/users/CreatingTicket.html"> здесь</a>.</p>

<p>В поле <strong>Вид работ</strong> необходимо выбрать те виды деятельности, которые можно осуществлять над <strong>Объектом</strong>.
    Например, видом работ может являться Монтаж оборудования, Техническое обслуживание, либо более детальные варианты -
    Ремонт холодильной техники.
    Один из заданных <strong>Видов работ</strong> затем будет выбираться при создании <strong>Заявки</strong>. Также
    <strong>Виды работ</strong> настраиваются в карточке сотрудников-исполнителей (меню Пользователи - Сотрудники). То
    есть при выборе в Заявке объекта и
    вида работ по нему специалиста можно будет выбрать только по совпадению с видом работ в его карточке.</p>

<p><strong>Навыки</strong>: здесь можно указать дополнительную квалификацию, которой должен обладать Сотрудник, чтобы
    взаимодействовать с Объектом. Навыки также могут быть использованы в настройке автораспределения исполнителей на
    Заявки.</p>

<p>Если вы даете гарантию на свои услуги, то ее срок можно отразить с помощью реквизита <strong>На гарантии до</strong>.
</p>

<p>К <strong>Объекту</strong> можно привязать один <strong>Чек-лист</strong>. <strong>Чек-лист</strong> - это
    контрольный список дел или задач, которые необходимо
    выполнить или проверить по <strong>Объекту</strong>. Подробнее о создании <strong>Чек-листов</strong> читайте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/Checklists.html"> здесь</a>.</p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/ObjectService.jpg"/>
</div>


<p>Вкладка <strong>QR-коды</strong> позволит вам промаркировать <strong>Объект</strong> - создать и привязать <strong>Паспорт
    объекта</strong>. С помощью него вы можете просмотреть основную информацию об
    объекте, отсканировав <strong>QR-код</strong>. Подробнее про создание <strong>Паспорта объекта</strong> и <strong>QR-кода</strong>
    можно прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTickTemplates.html">здесь</a>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/obj8.png"/>
</div>

<p>На вкладку <strong>Дополнительные поля</strong> вы можете добавить дополнительные поля для заполнения. Создать
    дополнительные поля можно в консоли администратора. Например, можно указать
    площадь объекта, если это необходимо. Подробнее об этом читайте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html">здась</a>.
</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/AdditionalField.jpg"/>
</div>

<p>На вкладке <strong>Дочерние объекты</strong> отображаются все дочерние объекты, а также есть возможность создать
    новый дочерний объект по кнопке +.
</p>
<p>Во вкладке <strong>История обслуживания</strong> отражаются все созданные по объекту заявки. При установке флажка С
    вложенными объектами в списке заявок будут отражаться заявки по дочерним объектам
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingObjects/History.jpg"/>
</div>

<p> Вы можете ускорить процесс добавления <strong>Объектов</strong> в систему HubEx с помощью функциии <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#objects"> Импорта</a>.</p>
<p> Для выгрузки информации по <strong>Объектам</strong> из системы HubEx можно воспользоваться функцией <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#objects"> Экспорта</a>.</p>


### Следующие шаги:
- [Создание заказчика](./CreatingCustomer.md)
- [Использование МП Заказчика](./CustomerApp.md)
- [Создание плановой заявки](./PlannedTickets.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
