---
title: Чек-листы (Старая)
description: (Старая)
---

#### Чек-листы
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#checklist">Создавать Чек-листы;</a></li>
    <li><a href="#atribute">Создавать атрибуты;</a></li>
    <li><a href="#checklist2">Выбирать Чек-листы в Заявке в web приложении;</a></li>
    <li><a href="#checklistmob">Заполнять Чек-листы в Заявке в мобильном приложении исполнителя;</a></li>
    <li><a href="#offline">Заполнять Чек-листы в мобильном приложении без подключения к интернету.</a></li>

</ul>
</html>
<body>

<p>Подробная статья о назначении и работе с чек-листами представлена ниже. Знакомство с темой можно начать с обучающего видеоролика <strong>Чек-листы в HubEx: контролируйте качество работ, обучайте
    новых сотрудников</strong>.</p>
<iframe src="https://www.youtube.com/embed/FBFe4tBnZVE" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>

<p><strong>Чек-лист</strong> – список дел или задач, которые необходимо выполнить для достижения определенного
    результата. Использование <strong>Чек-листов</strong> позволяет:</p>
<ul>
    <li>контролировать процесс выполнения работ;</li>
    <li>разбивать работы на мелкие задачи, требующие внимания исполнителя;</li>
    <li>обучить новых сотрудников, сформировав для них <strong>Чек-листы</strong> с перечнем обязательных действий.</li>
</ul>
<p>Например, выдержка из чек-листа по ремонту автомобиля.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Checklists/Example.jpg"/>
</div>
<p><strong>Чек-листы</strong> отображаются в <strong>Заявке</strong> на вкладке <strong>Чек-листы</strong>. </p>
<p>С помощью настройки определенной <strong>Cтадии заявки</strong> в консоли администрирования (меню <strong>Настройки
    заявки - Стадии заявки</strong>) можно установить <strong>Требование =
    Обработаны чек-листы</strong>. Например, установить такую настройку можно на стадию <strong>Выполнена</strong>.
    Тогда
    исполнитель не сможет перевести заявку на стадию <strong>Выполнена</strong>, пока не заполнит пункты <strong>Чек-листа</strong>
    в <strong>Заявке</strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/Checklists/Stage.jpg"/>
</div>

<h5 id="checklist">Создание Чек-листа</h5>
<p>Создать <strong>Чек-лист</strong>
    можно в меню
    <strong>Чек-листы</strong>
    по кнопке
    <strong>Создать чек-лист</strong>. <strong>Чек-лист</strong> можно привязать к <strong>Объекту</strong>
    (оборудованию) и (или) к <strong>Виду
        работ</strong>. Если
    <strong>Чек-лист</strong> привязан к <strong>Объекту</strong> и (или) <strong>Виду работ</strong>, он автоматически
    отразится в <strong>Заявке</strong> при выборе этого <strong>Объекта</strong> и (или)
    <strong>Вида работ</strong>.
</p>


<p>Рассмотрим создание <strong>Чек-листа</strong>:</p>
<ul>
    <li>Введите <strong>Название чек-листа</strong> и заполните <strong>Описание</strong>.</li>
    <li>Укажите для каких <strong>Объектов</strong> и (или) <strong>Видов работ</strong> будет использоваться данный
        <strong>Чек-лист</strong>. Тогда при выборе в <strong>Заявке</strong> <strong>Объекта</strong> и (или) <strong>Вида
            работ</strong>,
        <strong>Чек-лист</strong> прикрепится автоматически.
        <p>Вы можете не указывать <strong>Объекты</strong> и <strong>Виды работ</strong>. В <strong>Заявке</strong>
            можно будет <a href="#checklist2">вручную добавить необходимый <strong>Чек-лист</strong></a>.</p>
    

        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Checklists/CheckList.jpg"/>
        </div>
        </p>
    </li>
    <li>Перейдите к созданию пунктов <strong>Чек-листа</strong>. Пункты - действия, которые необходимо выполнить, или
        данные, которые необходимо собрать: проверить, измерить и т.д.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Checklists/CheckListPoint.jpg"/>
        </div>
        <p>Каждый
            пункт может иметь атрибут. Атрибут - это способ измерения/выражения для пункта <strong>Чек-листа</strong>.
            Атрибут используется в случае, когда требуется вписать ответ в виде числа, даты, текстовой строки или
            прикрепить файл.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 50%;"
                 src="/attachments/images/FAQ/USER/Checklists/Atribute.jpg"/>
        </div>

        <p> Как добавить новый или изменить имеющийся атрибут для
            <strong>Чек-листов</strong>
            , подробно читайте в статье <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html">Создание
                атрибутов для чек-листа</a>.</p>

        <p>Без указания атрибутов <strong>Чек-лист</strong> будет представлять собой список пунктов, выполнение которых
            нужно
            будет отметить с помощью установки флажка. </p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Checklists/CheckBox.jpg"/>
        </div>
    </li>
</ul>

<p>Ниже на
    примере
    рассмотрим, как создать в качестве атрибута вложенный файл. Зачем может пригодиться прикрепление файла? Например,
    зафиксировать
    выполнение какого-либо пункта <strong>Чек-листа</strong> с помощью фотографии.
</p>


<h5 id="atribute">Создание атрибута</h5>
<p>Рассмотрим добавление вложенного файла в качестве атрибута к уже созданному
    <strong>Чек-листу</strong>.
</p>

<ol type="1">
    <li>Создать новый атрибут можно в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
        администратора</a> в меню <strong>Настройки системы - Дополнительные поля</strong>. Нажмите кнопку
        <strong>Создать новое поле</strong>.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/Checklists/NewAtribute.jpg"/>
        </div>
        </p>
    </li>

    <li>Введите <strong>Наименование поля</strong>, например, Фотография. Укажите <strong>Тип поля = Вложенный
        файл</strong>. В параметре
        <strong>Используется для</strong> установите <strong>Чек-листы</strong>. Нажмите <strong>Сохранить</strong>.
        <p>
<!--<p>Обратите внимание! Вложенным файлом может быть не только фотография, но и видео, а также документы в форматах .doc, .xls, .pdf. Допускается загрузка нескольких файлов к одному пункту чек-листа.</p>-->

        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/Checklists/NewAtribute2.jpg"/>
        </div>
        </p>
    </li>


    <li>Теперь можно в любой
        <strong>Чек-лист</strong>
        добавить поле, которое позволит загружать фотографии.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Checklists/CheckListNA.jpg"/>
        </div>
        </p>
    </li>


</ol>


<!--<p>В итоге вы можете удостовериться, что сервисный специалист действительно выполнил работы по объекту, так как он будет
    обязан прикрепить фотографию.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Checklists/check3.jpg"/>
</div>-->

<h5 id="checklist2">Выбор Чек-листов в Заявке в web-приложении</h5>
<p>Если вы создаете <strong>Чек-лист</strong> без привязки к конкретному <strong>Объекту</strong> и (или) <strong>Виду
    работ</strong>, то в <strong>Заявке</strong> можно добавить необходимые
    <strong>Чек-листы</strong> вручную. Откройте <strong>Заявку</strong> и перейдите на вкладку
    <strong>Чек-листы</strong>. Нажмите кнопку <strong>Добавить чек-лист</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Checklists/ADDCheckList.jpg"/>
</div>
<p>Выберите подходящий <strong>Чек-лист</strong> из списка. Обратите внимание! Создать новый <strong>Чек-лист</strong>
    вы можете только в меню программы
    <strong>Чек-листы</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Checklists/ChoiseCheckList.jpg"/>
</div>

<p> Также в <strong>Заявке</strong> доступна функция удаления <strong>Чек-листов</strong>. <strong>Чек-лист</strong>
    можно удалить с
    помощью контекстного меню (три точки) - <strong>Удалить</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Checklists/DeletCheckList.jpg"/>
</div>

<h5 id="checklistmob">Заполнение Чек-листа в Заявке в мобильном приложении исполнителя</h5>

<p>Прочтите пошаговую инструкцию ниже или посмотрите обучающий видеоролик <strong>Мобильное приложение инженера. Как работать сервисному специалисту на телефоне?</strong>. В нем представлен широкий обзор функциональных возможностей мобильного приложения для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с <Strong>Заявками</Strong>, с чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом На смене. </p>
<iframe src="https://www.youtube.com/embed/JmMZzkI6o-c" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>

<p>В мобильном приложении исполнителя <strong>Чек-листы</strong> отображаются в <strong>Заявке</strong> на панели навигации
    внизу. Выберите из списка <strong>Чек-лист</strong> и заполните его. Выполнение пунктов <strong>Чек-листа</strong>
    может заключаться в установке флажков напротив действий, прикреплении фотографий, заполнении строковых полей и т.д.
    Например, прикрепить фото необходимо для подтверждения, что мобильный сотрудник был на объекте, и зафиксировал
    выполнение работ.
</p>

<!--<p>Обратите внимание! Вы можете добавить несколько фотографий к одному пункту чек-листа.</p>-->

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckListMob.jpg"/>
</div>

<p>После заполнения всех пунктов нажмите кнопку <strong>Сохранить</strong>. В общем списке <strong>Чек-листов</strong>
    заполненный <strong>Чек-лист</strong> отмечается зеленой галочкой.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckListMob2.jpg"/>
</div>



<h5 id="offline">Заполнение Чек-листа в мобильном приложении без подключения к интернету</h5>
<p>При отсутствии подключения к сети в приложении отображается нескрываемое уведомление <strong>Нет подключения к
    интернету</strong>. В
    этом случае вы все равно можете заполнить <strong>Чек-лист</strong>. Для этого откройте <strong>Заявку</strong> и <a href="#checklistmob">перейдите к Чек-листам</a>.
</p>

<p>Заполните необходимый <strong>Чек-лист</strong> в обычном порядке и нажмите кнопку <strong>Сохранить</strong>.</p>
<p>Обратите внимание! Без подключения к интернету вы также можете прикреплять фотографии в <strong>Чек-листы</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckListOffline.jpg"/>
</div>

<p>После сохранения у <strong>Чек-листа</strong> вы увидите значок синхронизации. При появлении мобильной сети <strong>Чек-лист</strong> будет автоматически
    загружен в HubEx, ваши коллеги смогут его просмотреть с web-приложения. Значок синхронизации после загрузки
    <strong>Чек-листа</strong> пропадает. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 75%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckListOffline2.jpg"/>
</div>



</body>

___
### Следующие шаги:
- [Прикрепление выполненных работ](./AttachingFiles.md)
- [Переход заявки по стадиям и удаление заявки](./ChangingStatus.md)
- [Список заявок, поиск заявок с помощью фильтров](./Filters.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
