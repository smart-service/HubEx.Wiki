---
title: Создание обслуживаемого оборудования (Новая)
description: (Новая)
---

<h2>Создание обслуживаемого оборудования</h2>

<html lang="RU">
<meta charset="utf-8">

<p>Содержание статьи:</p>

<ul>
	<li><a href="#object1">Что такое "Объект/Оборудование" в HubEx;</a></li>
    <li><a href="#object2">Основные поля;</a></li>
    <li><a href="#object3">Что представляет собой список объектов/оборудования;</a></li>
    <li><a href="#object4">Раздел объекта "Контактные лица";</a></li>
    <li><a href="#object5">Функционал "Мобильное оборудование";</a></li>
    <li><a href="#object6">Функционал "Планы помещений";</a></li>
    <li><a href="#object7">Раздел объекта "QR-коды" (функционал "Приемка и маркировка");</a></li>
    <li><a href="#object8">Раздел объекта "Дополнительные поля";</a></li>
    <li><a href="#object9">Раздел объекта "Дочерние объекты";</a></li>
    <li><a href="#object10">Раздел объекта "История обслуживания";</a></li>
    <li><a href="#object11">Для интеграций (дополнительно).</a></li>
</ul>

</html>

<body>

<h3 id="object1">Что такое "Объект/Оборудование" в HubEx</h3>

<p><strong>Объект (оборудование)</strong> - элемент инфраструктуры, на который направлено предоставление услуг (видов работ). Аналогом объекта в ITSM-системах является конфигурационная единица. Например, объектами могут быть: офис, здание, АЗС, магазин, или другой элемент инфраструктуры. Оборудованием может быть: кондиционер, кофемашина, двигатель, топливный насос, медицинский аппарат и т.п.</p>
<p><strong>Объекты</strong> необходимы для ведения учета заявок по различным сущностям: объектам, оборудованию, его компонентам, узлам, агрегатам и т.п.</p>
<p><strong>Объекты (оборудование)</strong> привязываются к конкретным компаниям-заказчикам. Если детальный учет по различным объектам или оборудованию заказчика не требуется, можно завести один обслуживаемый объект для каждого заказчика и он автоматически будет подставляться в заявку при выборе заказчика.</p>
<p>Указывая в <strong>Заявках</strong> <strong>Объект (оборудование)</strong>, можно в дальнейшем получать детальную аналитику обращений клиентов, заказов, выполненных работ по каждой единице оборудования заказчика. Также можно назначать <strong>Заявки</strong> по разным <strong>Объектам (оборудованию)</strong> на разных исполнителей.</p>

<p>Все варианты создания <strong>Объектов</strong> представлены в обучающем видеоролике <strong>Создание объектов обслуживания в HubEx: способы создания объектов обслуживания, маркировка, паспорт объекта</strong>. Подробная инструкция о создании и заполнении карточки <strong>Объекта</strong> представлена ниже.</p>

<iframe src="https://www.youtube.com/embed/43uHUupRJZI" width="100%" height="450px" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

<h3 id="object2">Основные поля</h3>

<p>Создать новый <strong>Объект</strong> можно в меню <strong>Объекты|Оборудование</strong> по кнопке <strong>Создать объект</strong>.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object1.png"/></div>

<p>При создании форма <strong>Объекта</strong> состоит из следующих вкладок:</p>

<ul>
    <li><strong>Объект|Оборудование</strong>;</li>
    <li><strong>Контакты</strong></li>
    <li><strong>Обслуживание</strong>;</li>
    <li><strong>Дополнительные поля</strong>;</li>
</ul>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object2.png"/></div>

<p>После создания <strong>Объекта/оборудования</strong> на форме появятся дополнительные вкладки:</p>

<ul>
    <li><strong>QR-коды</strong>;</li>
    <li><strong>Дочерние объекты</strong>;</li>
    <li><strong>История обслуживания</strong>.</li>
</ul>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object3.png"/></div>

<p>Рассмотрим основные поля для создания <strong>Объекта|Оборудования</strong>:</p>

<ul>
    <li><strong>Название</strong>: Наименование объекта/оборудования</li>
    <li><strong>Родительский объект</strong>: Объекты отображаются в системе иерархическим списком. Иерархический список представляет собой расположение элементов от родительских к дочерним. Родительский объект обязательно должен иметь адрес, а для дочернего объекта наличие адреса необязательно, так как он будет наследоваться от родительского объекта. Адрес объекта в дальнейшем автоматически подставляется в заявку по этому объекту. Признак наличия адреса регулируется <strong>Типом</strong>.</li>
        <p>Если вы создаете объект без иерархии, то в этом поле ничего указывать не нужно.</p>
    <li><strong>Серийный номер</strong>: заполняется для идентификации объектов с одинаковым наименованием. Например, у вас несколько одинаковых станков в одном заводском помещении.</li>
    <li><strong>Тип (Тип оборудования)</strong> - это классификатор объектов и оборудования по функциональному назначению, техническим характеристикам и другим особенностям.</li>
        <p>В системе HubEx по умолчанию созданы следующие базовые типы: <strong>Объект</strong> и <strong>Оборудование</strong>. У типа <strong>Объект</strong> по умолчанию в настройках установлен флажок <strong>Обязательное наличие адреса</strong>, у типа <strong>Оборудование</strong> его нет. Значит, создавая объекты, родительским будет элемент с типом <strong>Объект</strong>, а дочерними с типом <strong>Оборудование</strong>. Например, <strong>Объектом</strong> может быть Бизнес-центр с адресом ул. Ермакова 3, а <strong>Оборудованием</strong> – Кофемашина внутри центра, при этом у кофемашины может не быть своего адреса, но она будет его наследовать от Бизнес-центра. Другой пример: <strong>Объектом</strong> может быть Двигатель, а <strong>Оборудованием</strong> его более мелкая часть - Топливный насос.</p>
        <p>Создать новый или изменить существующие <strong>Типы</strong> можно в консоли администратора. Подробнее читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html">Типы оборудования</a>;</p>
    <li><strong>Компания-владелец</strong>: выберите, к какой компании принадлежит обслуживаемое оборудование.</li>
        <p>Выбор осуществляется из списка уже созданных компаний. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание обслуживаемых компаний</a></p>
    <li><strong>Описание</strong>: поле для ввода любой дополнительной информации.</li>
    <li><strong>Адрес</strong>: обязательно указывать для родительских объектов. Дочерний объект может иметь свой собственный адрес или наследовать его от родительского объекта. Адрес автоматически подставляется в <strong>Заявку</strong>;</li>
    <li><strong>Файлы</strong>: При создании нового <strong>Объекта</strong> вы можете приложить файлы для помощи в работе с оборудованием. Это могут быть фотографии, инструкции в текстовых файлах.</li>
</ul>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object4.png"/></div>

<p>Другие поля в разделе объекта/оборудования "Объект/оборудование"</p>

<ul>
    <li><strong>Разрешить создавать заявки по этому объекту</strong>: делает <strong>Объект</strong> доступным объект для выбора в <strong>Заявке</strong>.</li>
        <p>Объект может быть опубликованным или неопубликованным.</p>
    <li><strong>Участок</strong>: определяет к какому участку принадлежит оборудование. <strong>Участок</strong> – классификация <strong>Объектов</strong>, <strong>Типов заявок</strong>, <strong>Сотрудников</strong>, <strong>Заказчиков</strong> по различным критериям: географическим, функциональным и т.д. Например, разделение по географии: Северо-Западный округ, Краснодарский край, Сибирь и т.д. <strong>Объект</strong> может принадлежать к нескольким участкам одновременно. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>;</li>
    <li><strong>График работы</strong>: носит исключительно справочную информацию.</li>
    <li><strong>Класс (Класс оборудования)</strong> - совокупность объектов (оборудования) с общими характеристиками, отличительными особенностями. <strong>Классы оборудования</strong> используются для группировки <strong>Объектов</strong> и для группировки <strong>Заявок</strong> по <strong>Объектам</strong>. Вы можете не использовать <strong>Классы</strong> и устанавливать у всех <strong>Объектов</strong> значение <strong>По умолчанию</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectClass.html">Классы оборудования</a>.</li>
</ul>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object5.png"/></div>

<p>Основные поля в разделе объекта/оборудования "Обслуживание"</p>

<ul>
    <li><strong>Ответственный за объект</strong>: можно указать исполнителя, который постоянно обслуживает этот <strong>Объект</strong>. Эту информацию в дальнейшем можно использовать при настройке автораспределения исполнителей на <strong>Заявки</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>.</li>
    <li><strong>Вид работ</strong>: это специфический вид деятельности (услуг), который может выполняться сотрудником и быть направлен на объект. Например, видами работ могут быть: услуги клининга, ремонт, диагностика, услуга аренды недвижимости, услуги доставки и т.д. Один из <strong>Видов работ</strong> установленных в карточке <strong>Объекта</strong> выбирается при создании <strong>Заявки</strong>. Также <strong>Вид работ</strong> может быть использован в настройке автораспределения исполнителей на <strong>Заявки</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>.</li>
    <li><strong>Навыки</strong>: это дополнительные, особые умения, необходимые для выполнения определенной работы. <strong>Навыки</strong> позволяют дополнительно классифицировать <strong>Объекты </strong>и <strong>Сотрудников</strong> (исполнителей). С помощью <strong>Навыков</strong> можно детализировать особые знания, которыми должен обладать специалист для работы с <strong>Объектом</strong>. Например, знать английский язык для настройки приборов на английском языке. Указав <strong>Навыки</strong> в <strong>Объекте</strong> и карточке <strong>Сотрудника</strong> (исполнителя), можно настроить правила автоназначения. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения исполнителя</a>.</li>
    <li><strong>На гарантии до</strong>: если вы даете гарантию на свои услуги, то вы можете установить срок гарантии.</li>
    <li><strong>Чек-лист</strong>: вы можете привязывать заранее созданные<strong>Чек-листы</strong> к объекту, чтобы они автоматически подставлялись в заявку. Чек-лист - это контрольный список дел или задач, которые необходимо выполнить или проверить по <strong>Объекту</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/users/Checklists.html">Чек-листы</a>.</li>
</ul>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/ObjectService.jpg"/></div>

<h3 id="object3">Что представляет собой список объектов/оборудования</h3>

<p>Список всех созданных объектов в бизнес-аккаунте HubEx представляет собой карточный вид:</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object6.png"/></div>

<p>Вы можете фильтровать объекты, используя правое боковое меню:</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object7.png"/></div>

<p>В разделе левого бокового меню «Объекты/Оборудование», карточка объекта отображает:</p>

<ol>
    <li>Название и адрес объекта;</li>
    <li>Компанию, к которой принадлежит объект;</li>
    <li>Количество активных заявок, созданных на этот объект</li>
</ol>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object8.png"/></div>

<p>Объекты/оборудование можно импортировать или экспортировать.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object9.png"/></div>

<p>Подробнее об <strong>импорте</strong> вы можете прочитать в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#objects">Импорт объектов</a></p>
<p>Подробнее об <strong>экспорте</strong> вы можете прочитать в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#objects">Экспорт объектов</a></p>

<h3 id="object4">Раздел объекта "Контактные лица"</h3>

<p>В разделе объекта/оборудования <strong>Контакты</strong> можно указать контактную информацию ответственного по объекту со стороны заказчика. Также можно ввести дополнительные контакты, например, директора, диспетчера.</p>
<p>Подробнее читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Contacts.html#object">Контактные лица в карточке Компании</a>.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/Contact.jpg"/></div>

<h3 id="object5">Функционал "Мобильное оборудование"</h3>

<p>В разделе объекта/оборудования "Объект/оборудование" флажок <strong>Мобильное оборудование</strong> отвечает за возможность изменить адрес <strong>Объекта</strong> при изменении адреса в <strong>Заявке</strong>. То есть заполняя <strong>Заявку</strong>, вы можете изменить автоматически подставленный из карточки <strong>Объекта</strong> адрес, тогда он изменится и в карточке <strong>Объекта</strong></p>;

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object10.png"/></div>

<p>Подробнее о функционале читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/MobileObjects.html">: Мобильное оборудование - заявка по мобильному оборудованию</a>.</p>

<h3 id="object6">Функционал "Планы помещений"</h3>

<p>В разделе объекта/оборудования "Объект/оборудование" параметр <strong>План объекта</strong>: вы можете загрузить план помещения самого объекта, или план, на котором находится оборудование. Использование планов помещений позволяет сократить затраты времени на поиск и устранение неисправностей: при подаче <Strong>Заявки</Strong> можно указать точное местоположение проблемы на карте бизнес-центра. План помещения добавляется индивидуально для каждого <Strong>Объекта</Strong> в формате .jpg, .jpeg, .png.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object11.png"/></div>

<p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/FloorPlan.html">Планы помещений</a>.</p>

<h3 id="object7">Раздел объекта "QR-коды" (функционал "Приемка и маркировка")</h3>

<p>В разделе объекта/оборудования <strong>QR-коды</strong> можно промаркировать <strong>Объект</strong> - создать шаблон заявки с привязанным QR-кодом, паспорт объекта.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/QR1.jpg"/></div>

<p>Сканируя QR-код в мобильном приложении, вы можете просмотреть паспорт объекта и подать по нему Заявку. Также QR-коды могут сканировать незарегистрированные в системе пользователи и подавать заявки. Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки, подача заявки по QR-коду</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без приложения, самостоятельная регистрация нового пользователя</a>.</p>

<div><img style="margin: 0 auto; display: block; max-width: 85%;" src="/attachments/images/FAQ/USER/CreatingObjects/QR2.jpg"/></div>

<h3 id="object8">Раздел объекта "Дополнительные поля"</h3>

<p>В разделе объекта/оборудования <strong>Дополнительные поля</strong> вы можете добавить дополнительные поля для заполнения. Создать дополнительные поля можно в консоли администратора. Например, можно указать площадь объекта, если это необходимо. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html">Создание дополнительных полей для объекта</a>.</p>

<div><img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/USER/CreatingObjects/AdditionalField.jpg"/></div>

<h3 id="object9">Раздел объекта "Дочерние объекты"</h3>

<p>В разделе объекта/оборудования <strong>Дочерние объекты</strong> отображаются все дочерние объекты родительского объекта, а также есть возможность создать новый дочерний объект по кнопке +.</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object13.png"/></div>

<p>Создать дочерний объект в системе можно несколькими способами:</p>

<ol>
    <li> После сохранения карточки родительского объекта на вкладке <strong>Дочерние объекты</strong> по кнопке + можно создать новый дочерний объект.</li>
        <p><div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject3.jpg"/></div></p>
    <li>Из карточки родительского объекта по кнопке <strong>Контекстного меню</strong> (3 точки) в правом верхнем углу - <strong>Создать дочерний объект|оборудование</strong>.</li>
        <p><div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject2.jpg"/></div></p>
    <li>В главном меню <strong>Объекты|Оборудование</strong> по кнопке <strong>Создать объект</strong> с указанием родительского элемента.</li>
        <p><div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/ChildObject.jpg"/></div></p>
    <li>Выбрав конкретный объект из списка всех объектов в главном меню <strong>Объекты|Оборудование</strong> и нажав на кнопку <strong>Контекстного меню</strong> (3 точки) - <strong>Создать дочерний объект|оборудование</strong>.</li>
        <p><div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/ObjectList.jpg"/></div></p>
</ol>

<h3 id="object10">Раздел объекта "История обслуживания"</h3>

<p>Во вкладке <strong>История обслуживания</strong> отображаются все созданные по объекту <strong>Заявки</strong>. При установке флажка <strong>С вложенными объектами</strong> в списке отразятся <strong>Заявки</strong> по дочерним объектам. По щелчку на любую <strong>Заявку</strong> из списка истории обслуживания она откроется в боковой панели справа.</p>
    <div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/History.jpg"/></div>
<p>Боковое окно содержит основные поля из полной формы <strong>Заявки</strong>, их можно редактировать и сохранять изменения. Кнопка <strong>Сохранить</strong> находится внизу боковой формы <strong>Заявки</strong>. По нажатию на кнопку <strong>К заявке</strong> в соседней вкладке будет открыта полная форма текущей <strong>Заявки</strong>.</p>
    <div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/History2.jpg"/></div>
    <div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjects/History3.jpg"/></div>

<h3 id="object11">Для интеграций (дополнительно)</h3>

<p>В разделе объекта/оборудования "Объект/оборудование" поле <strong>ERP ID</strong>: идентификатор объекта во внешней системе, например, 1С или Битрикс, который используется при интеграции;</p>

<div><img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/USER/CreatingObjectsNew/Object12.png"/></div>

</body>


___
### Следующие шаги:
- [Создание дополнительных полей для объекта](./AdditionalFieldsObject.md)
- [Создание заявки](./CreatingTicket.md)
- [Создание плановой заявки](./PlannedTickets.md)


___
- [Перейти в меню](http://wiki.hubex.ru)