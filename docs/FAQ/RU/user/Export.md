---
title: Экспорт
description: С помощью функций экспорта вы можете выгрузить Заявки, Объекты, Сотрудников, Компании в формате таблиц Excel. Функции Экспорт и Импорт в системе HubEx полностью совместимы с Excel, ExcelOnline, частично с Google Spreadsheet, но не совместимы с Mac Spreadsheet.
keywords: экспорт компаний, экспорт объектов, экспорт сотрудников, экспорт заказчиков, экспорт, hubex, хабекс, хубекс, хабикс
---

#### Экспорт
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#tickets">Экспортировать заявки;</a></li>
    <li><a href="#media">Экспортировать медиафайлы из заявок;</a></li>
    <li><a href="#objects">Экспортировать объекты;</a></li>
    <li><a href="#workers">Экспортировать пользователей;</a></li>
    <li><a href="#companies">Экспортировать компании.</a></li>

</ul>
</html>
<body>
<p>С помощью функций экспорта вы можете выгрузить <strong>Заявки</strong>, <strong>Объекты</strong>, <strong>Пользователей</strong>
    (<strong>Сотрудников</strong>, <strong>Заказчиков</strong>), <strong>Компании</strong> в формате таблиц Excel.</p>
<P>Функции экспорта и импорта в системе HubEx полностью совместимы с Excel, ExcelOnline, частично с Google Spreadsheet,
    но
    не
    совместимы с Mac Spreadsheet. Также не рекомендуем использовать сторонние сервисы для работы с шаблонами Excel из-за
    возможных ограничений
    функционала.</P>
<p>Обратите внимание! Для <strong>Заявок</strong>, <strong>Объектов</strong>, <strong>Пользователей</strong> (<strong>Сотрудников</strong>
    и <strong>Заказчиков</strong>) и <strong>Компаний</strong> вы можете настроить
    фильтрацию и экспортировать только отобранные элементы. Фильтры доступны в правой части справочников. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Filters.html">Список заявок, поиск заявок с
        помощью фильтров</a>.</p>

<h5 id="tickets">Экспорт заявок</h5>

<p>Экспорт заявок находится в меню <strong>Заявки - Все заявки</strong>. Чтобы начать экспорт, нажмите кнопку <strong>Экспорт
    заявок</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportTickets.jpg"/>
</div>

<p>В появившемся окне вы можете выбраь один из вариантов экспорта:</p>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportVariant.jpg"/>
</div>
</p>

<ol>
    <li><strong>Обычный экспорт</strong> позволяет выгрузить минимальный набор основных данных по
        <strong>Заявке</strong>: <strong>Номер</strong>, <strong>Тип заявки</strong>, <strong>Описание заявки</strong>,
        <strong>Оборудование</strong>, <strong>Вид работ</strong>, <strong>Крайний срок закрытия</strong>, <strong>Критичность</strong>,
        <strong>Исполниитель</strong> и т.п. По нажатию на кнопку <strong>Экспорт</strong> начнется
        автоматическая выгрузка данных полей в таблицу
        Excel.
    </li>
    <li><strong>Расширенный экспорт</strong> позволяет пользователю самостоятельно выбрать набор выгружаемых полей.
        После выбора
        необходимых для выгрузки полей нажмите кнопку <strong>Экспорт</strong> для автоматической выгрузки в таблицу
        Excel. Выбранные в
        расширенном экспорте поля локально сохраняются на вашем компьютере. То есть при повторном экспорте
        у вас будут выбраны те поля, которые были выбраны при предыдущем экспорте <strong>Заявок</strong>.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/Export/Export.jpg"/>
    </div>
    </p>
</ol>


<h5 id="media">Экпорт медиафайлов из заявок</h5>
<p>Экспорт медиафайлов предполагает выгрузку всех файлов (текстовых, фото и др.) из <strong>Заявок</strong>, а также чек-листов и выполненных работ (вкладки <strong>Заявка</strong>, <strong>Чек-листы</strong>, <strong>Выполнение</strong>). Нажмите кнопку экспорта и выберите вариант <strong>Экспорт вложений</strong>. Затем нажмите кнопку <strong>Экспорт</strong>. </p>
   <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/Export/MediaExport.jpg"/>
    </div>

<p>Выгрузка осуществляется в отдельный архив, внутри которого находятся отдельные папки по каждой <strong>Заявке</strong> с номером и наименование оборудования.</p>
  <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/Export/MediaExport2.jpg"/>
    </div>
     <p> <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/USER/Export/MediaExport3.jpg"/>
    </div></p>

    <p>Внутри каждой папки будут находиться папки с файлами из самой <strong>Заявки</strong> (вкладка <strong>Заявка</strong>), <strong>Чек-листов</strong> и (или) <strong>Выполненных работ</strong>.</p>
     <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/USER/Export/MediaExport4.jpg"/>
    </div>
<p>Обратите внимание! Для экспорта меиафайлов также действуют настройки фильтров.
Вы можете отобрать определенные <strong>Заявки</strong> и выгрузить медиафайлы только по ним. </p>



<h5 id="objects">Экспорт объектов</h5>

<p>Экспорт объектов находится в меню <strong>Объекты|Оборудование - Объекты|Оборудование</strong>. Чтобы начать экспорт, нажмите кнопку <strong>Экспорт
    объектов и оборудования</strong></p>

<p>В появившемся окне вы можете выбраь один из вариантов экспорта:</p>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportObject.jpg"/>
</div>
</p>

<ol>
    <li><strong>Обычный экспорт</strong> позволяет выгрузить минимальный набор основных данных по
        <strong>Объектам</strong>: <strong>Название</strong>, <strong>Компания</strong>, <strong>Тип</strong>,
        <strong>Участок</strong>, <strong>Вид работ</strong>, <strong>Родительский элемент</strong>, <strong>Адрес</strong> и т.п. По нажатию на кнопку <strong>Экспорт</strong> начнется
        автоматическая выгрузка данных полей в таблицу
        Excel.
    </li>
    <li><strong>Расширенный экспорт</strong> позволяет пользователю самостоятельно выбрать набор выгружаемых полей.
        После выбора
        необходимых для выгрузки полей нажмите кнопку <strong>Экспорт</strong> для автоматической выгрузки в таблицу
        Excel. Выбранные в
        расширенном экспорте поля локально сохраняются на вашем компьютере. То есть при повторном экспорте
        у вас будут выбраны те поля, которые были выбраны при предыдущем экспорте <strong>Объектов</strong>.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/Export/ExportObject2.jpg"/>
    </div>
    </p>
</ol>

<p>По нажатию на кнопку экспорт автоматически начнется выгрузка списка объектов в формате Excel в папку загрузок на вашем локальном компьютере.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportObject3.jpg"/>
</div>


<h5 id="workers">Экспорт пользователей</h5>
<p>Экспорт пользователей предполагает раздельный импорт <strong>Сотрудников</strong> и <strong>Заказчиков</strong>.
    Находится в меню <strong>Пользователи -
        Сотрудники</strong> и в меню <strong>Пользователи - Заказчики</strong>. По нажатию на кнопку <strong>Экспорт
        сотрудников</strong> или <strong>Экспорт заказчиков</strong> автоматически начнется выгрузка данных в таблицу
    Excel.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportUser.jpg"/>
</div>


<h5 id="companies">Экспорт компаний</h5>
<p>Экспорт компаний находится в меню <strong>Компании</strong>. По нажатию на кнопку <strong>Экспорт компаний</strong>
    автоматически начнется выгрузка данных в таблицу Excel.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Export/ExportCompany.jpg"/>
</div>




</body>


___
### Следующие шаги:
- [Импорт](./Import.md)
- [Бренд компании](./Branding.md)
- [Загрузка материалов и создание складов](./Materials.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
