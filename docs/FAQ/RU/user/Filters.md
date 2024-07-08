---
title: Список заявок, поиск заявок с помощью фильтров и строки поиска
description: В списке заявок предусмотрено два режима представления всех Заявок. Карточное отображение заявок представляет список Заявок в виде отдельных карточек с краткой информацией. Табличное отображение заявок представляет список в виде таблицы. Отображение полей такой таблицы можно настроить самостоятельно.
keywords: табличное представление заявок, карточное представление заявок, поиск заявок, фильтры, быстрые фильтры, отбор, hubex, хабекс, хубекс, хабикс
---

#### Список заявок, поиск заявок с помощью фильтров и строки поиска
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#ticketlist">Работать со списком Заявок;</a></li>
    <li><a href="#ticketlist">Использование фильтров;</a></li>
    <li><a href="#ticketlist">Настройка панели фильтрации;</a></li>
    <li><a href="#deltick3">Сохранять и использовать быстрые фильтры;</a>
    <li><a href="#deltick1">Фильтровать закрытые Заявки;</a></li>
    <li><a href="#deltick2">Фильтровать удаленные Заявки;</a></li>
    <li><a href="#stringsearch">Искать Заявки с помощью строки поиска.</a></li>
    </li>
</ul>
</html>
<body>
<p>В данной статье будут рассмотрены варианты работы со списком <strong>Заявок</strong>, а также поиском
    <strong>Заявок</strong> с помощью фильтров. Подробнее о создании <strong>Заявок</strong> и заполнении всех полей в
    web- и мобильных приложениях читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание
        заявки</a>. Также дополнительно ознакомьтесь со статьей: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ElectedTicket.html">Копирование и удаление заявок, заявки в
        избранном</a>.</p>

<h5 id="ticketlist">Работа со списком Заявок</h5>
<p>В списке заявок предусмотрено два режима представления всех <strong>Заявок</strong>: </p>
<ol>
    <li><strong>Карточное отображение заявок</strong>: представляет список <strong>Заявок</strong> в виде отдельных
        карточек;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/Filters/CardList.jpg"/>
    </div>
    </p>
    <li><strong>Табличное отображение заявок</strong>: представляет список <strong>Заявок</strong> в виде таблицы. Для
        табличного отображения вы можете
        самостоятельно настроить поля, которые будут отображаться в таблице. Для этого нажмите значок шестеренки и
        выберите необходимые поля.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/Filters/TableList.jpg"/>
    </div>
    </p>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/Filters/TableList2.jpg"/>
    </div>
    </p>
    </ol>
<p>Также в табличное представление <strong>Заявок</strong> можно добавить отображение дополнительных полей.
    Дополнительные поля могут быть настроены для формы <strong>Заявки</strong> в консоли администратора. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание дополнительных
        полей</a>.</p>
<p>Это позволит сразу видеть всю необходимую информацию в таблице, не проваливаясь внутрь <strong>Заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/AddField.jpg"/>
</div>


<p>В табличном отображении <strong>Заявок</strong> доступно для отображения поле <strong>Дата изменения</strong> - это
    дата последних внесенных в <strong>Заявку</strong> изменений. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/Date.jpg"/>
</div>
<p>Все изменения по <strong>Заявке</strong> хранятся на вкладке <strong>История изменений</strong> в
    <strong>Заявке</strong>. В поле <strong>Дата изменений</strong> отображается последняя строка из истории.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/HistoryOfChange.jpg"/>
</div>


<p>Также в табличном отображении списка вы можете настраивать очередность полей. Для этого зажмите и удерживайте правую
    кнопку мышки на наименовании колонки и перенесите ее в нужное место. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/List.jpg"/>
</div>


<p>Обратите внимание! Список заявок для каждого пользователя может отличаться. Это связано с настройкой
    <strong>Ролей</strong>. Для
    разных <strong>Ролей</strong> пользователей могут быть настроены ограничения, например по работе с
    <strong>Участками</strong>. То есть пользователь
    будет видеть только <strong>Заявки</strong>, находящиеся на его участке. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html#exrole">Настройка ролей: как настроить доступ
        пользователей в разрезе участков</a>.</p>
<h5 id="deltick3">Использование фильтров</h5>
<p dir="auto">Для быстрого поиска по&nbsp;<strong>Заявкам</strong>&nbsp;воспользуйтесь кнопкой&nbsp;<strong>Фильтры</strong>. Она находится в правом верхнем углу в меню&nbsp;<strong>Все заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FiltersButton.jpg"/>
</div>

<p>С помощью фильтров вы можете установить отборы по различным полям <strong>Заявки</strong>. Фильтрация <strong>Заявок</strong> возможна
    также по дополнительным полям, они отображаются в конце списка всех фильтров. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание дополнительных полей для
        заявки</a>. </p>

<!--<div style="display: flex;">
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Filters/filter2.jpg"/><img
        style="margin: 0 auto; display: block; max-width: 100%;"
        src="/attachments/images/FAQ/USER/Filters/filter3.jpg"/>

</div>-->
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Filters/Filters.jpg"/>
</div>
<p>Фильровать можно по списочным форматам, текстовым, форматам дат и времени, числовым форматам полей. Для числовых форматов дополнительных полей
    доступен выбор настроек (<strong>Равно</strong>, <strong>Диапазон</strong>, <strong>Больше чем</strong> и<strong>
        Меньше чем</strong>). Для списочных форматов полей доступен соответствующий выбор значений - единичный или множественный выбор. Таким образом вы сможете быстро и эффективно находить <strong>Заявки</strong>. После
    указания параметров необходимо нажимать кнопку <strong>Применить</strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/Filter2.jpg"/>
</div>

<p>Например, вам необходимо найти все <strong>Заявки</strong> по определенному оборудованию. Тогда в окошке фильтров в
    поле <strong>Объекты</strong>
    выберите оборудование и нажмите на кнопку <strong>Применить</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FilterObj.jpg"/>
</div>

<p>При использовании дополнительных полей формата дат и списков можно отфильтровать <strong>Заявки</strong>, например, по дате осмотра объекта, инструментам, типу выезда (первичный/вторичный) или другим параметрам, для которых используются форматы списков и дат.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FilterList.jpg"/>
</div>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/ListsFilter.jpg"/>
</div></p>

<p>Для отмены фильтрации нажмите на кнопку сброса фильтров.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/ClearFilters.jpg"/>
</div>
<h5 id="ticketlist">Настройка панели фильтрации</h5>
<p dir="auto">По клику на кноку <strong>Фильтры&nbsp;</strong>открывается панель фильтров с параметрами фильтрации по <strong>Заявкам</strong>. При наведении курсора на область поля параметра появляется значок перемещения.</p>
<div><img style="margin: 0 auto; display: block; max-width: 100%;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/FilterSettings2.png" width="800" height="auto" /></div>
<p>Перетаскиванием поля вверх или вниз вы можете изменять порядок отображения фильтров. В процессе перетаскивания вы увидите, как другие поля автоматически подстраиваются, чтобы освободить место. Все изменения расположения полей будут сохранены автоматически.</p>
<p>Добавить необходимые поля для фильтрации можно по клику на кнопку <strong>Добавить</strong>, расположенную в нижней части панели фильтров.&nbsp;</p>
<div><img style="margin: 0 auto; display: block; max-width: 100%;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/FilterSettings3.png" width="800" height="auto" /></div>
<p>Откроется окно выбора полей, в верхней части которого расположены основные поля, в нижней - дополнительные поля, созданные в вашем тенанте.</p>
<div><img style="margin: 0 auto; display: block; max-width: 40%;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/FilterSettings4.png" width="800" height="auto" /></div>
<p>Выбранные вами поля на этом шаге&nbsp;будут отображаться на панели фильтров в той последовательности, в которой вы их добавляли.</p>
<p>Если вы удалите поле с панели фильтрации, то снова добавить его можно также через кнопку <strong>Добавить</strong>.&nbsp;</p>
<h5 id="deltick3">Сохранение и использование быстрых фильтров</h5>
<p>Вы можете сохранять настройки фильтрации. Это сэкономит ваше время поиска необходимых <strong>Заявок</strong>.
    Например, вы часто
    работаете с <strong>Заявками</strong> определенного <strong>Заказчика</strong> или с <strong>Заявками</strong> по
    конкретному <strong>Объекту</strong>. Настройте необходимые
    пункты и нажмите на кнопку сохранения фильтра.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/SavingFilters.jpg"/>
</div>

<p>Введите название быстрого фильтра.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FiltersName.jpg"/>
</div>

<p>Быстрый фильтр отобразится над списком всех <strong>Заявок</strong>. Чтобы просмотреть все доступные быстрые фильтры
    и удалить неактуальные, нажмите на кнопку <strong>Все быстрые фильтры</strong>. В списке фильтров по нажатию на
    крестик можно удалять неиспользуемые быстрые фильтры. Быстрые фильтры - это индивидуальные настройки для конкретного
    пользователя. Каждый пользователь может настраивать и сохранять только необходимые ему фильтры.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FastFilters.jpg"/>
</div>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/FastFilters2.jpg"/>
</div>
</p>


<h5 id="deltick1">Фильтрация закрытых Заявок</h5>
<p><strong>Заявка</strong> в стадии <strong>Закрыта</strong> не отображается в списке всех заявок, так как в системе по
    умолчанию настроен фильтр
    показывать только <strong>Открытые заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/ActiveFilters.jpg"/>
</div>

<p>Для того чтобы увидеть все <strong>Заявки</strong>, нажмите кнопку <strong>Фильтры</strong>. Выберите в пункте
    <strong>Состояние заявки</strong> один из вариантов:</p>
<ul>
    <li><strong>Только закрытые</strong>: вы увидите в списке только закрытые <strong>Заявки</strong>;</li>
    <li><strong>Все заявки</strong>: в списке отразятся и открытые, и закрытые <strong>Заявки</strong>.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/ClosedTickets.jpg"/>
</div>


<h5 id="deltick2">Фильтрация удаленных Заявок</h5>
<p>Вы можете удалить <strong>Заявку</strong>, созданную по ошибке. Подробнее читайте в статье: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChangingStatus.html#deletetick">Переход заявки по стадиям и
    удаление заявки</a>. Она перестанет
    отображаться в списке всех <strong>Заявок</strong>.
    Но с помощью фильтра <strong>Видимость заявок</strong> ее можно будет найти. Выберите один из вариантов: </p>
<ul>
    <li><strong>Только удаленные</strong>: вы увидите в списке только удаленные <strong>Заявки</strong>;</li>
    <li><strong>Все заявки</strong>: в списке отразятся и удаленные, и действующие <strong>Заявки</strong>.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/DeletedTickets.jpg"/>
</div>
<p>Обратите внимание! Возможность просматривать удаленные заявки доступна только для учетной записи владельца
    тенанта.</p>

<h5 id="stringsearch">Поиск Заявок с помощью строки поиска</h5>
<p>Помимо панели фильтров для поиска необходимых <strong>Заявок</strong> можно также использовать специальную строку
    поиска. Строка
    поиска находится в правом верхнем углу списка <strong>Заявок</strong>. При фильтрации по строке поиска над самой
    строкой будет отображаться количество <strong>Заявок</strong>, подходящих под условия отбора.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/Filters/SearchString.jpg"/>
</div>
<p>Поиск по строке доступен для списочного, табличного отображения, а также для режима отображения на карте.</p>

<p>Если часть слова, слово целиком, словосочетания или числа совпадут с данными в одной или нескольких
    <strong>Заявках</strong>, то
    такие <strong>Заявки</strong> останутся в списке, а неподходящие будут скрыты. Чем точнее будет поисковый запрос,
    тем точнее будут результаты поиска. Поиск осуществляется одновременно по следующим полям:</p>

<ul>
    <li><strong>Номер заявки</strong>: для поиска по номеру можно вводить числа и буквы, если они используется в формате номера для более точного поиска.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Filters/Number.jpg"/>
        </div>
        </p>
        
        <p>Обратите внимание! Текст из строки поиска будет основой для поиска по всем нижеперечисленным полям одновременно.
            Например, если вы напишите в строку поиска цифру 70 и она будет частью номеров <strong>Заявок</strong> и встречается
            в названии <strong>Объектов</strong>, то все
            такие <strong>Заявки</strong> будут отображаться в списке;</p>
    </li>
   
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/SearchString2.jpg"/>
    </div>
    </p>

    <li><strong>Описание заявки</strong>: чем точнее и уникальнее будет задан поисковый запрос, тем лучше система обработает поиск по
        описанию заявки. Например, используйте для поиска уникальные фразы, наименования материалов и т.д.;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/Text.jpg"/>
    </div>
    </p>
    <!--<li>Заказчик: если часть слова, слово целиком, словосочетания или числа совпадут с наименованием
        <strong>Заказчика</strong>,
        указанного в одной или нескольких <strong>Заявках</strong>, то такие <strong>Заявки</strong> останутся в списке,
        а неподходящие будут скрыты;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/SearchString2.jpg"/>
    </div>
    </p>-->
    <li><strong>Объект</strong>: если часть слова, слово целиком, словосочетания или числа совпадут с наименованием
        <strong>Объекта</strong>,
        указанного в одной или нескольких <strong>Заявках</strong>, то такие <strong>Заявки</strong> останутся в списке,
        а неподходящие будут скрыты;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/Object.jpg"/>
    </div>
    </p>
    
    <li><strong>Адрес объекта</strong>: адрес для поиска можно вводить, как часть названия города, улицы, сочетания улицы и
        номера дома через запятую.
        <p>Обратите внимание! Чем точнее вы введете данные адреса, тем точнее будет отработан поиск подходящих <strong>Заявок</strong>.
            Например, улицу и номер дома через запятую. Но не забывайте, что поиск будет осуществлен одновременно по
            всем полям, то есть если заданный в строке поиска адрес будет фигурировать в описании к Заявке по другому
            адресу, то она все равно отобразится в списке подходящих. </p>
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/Adress.jpg"/>
    </div>
    </p>
    <li><strong>Вид работ</strong>: если часть слова, слово целиком, словосочетания совпадут с наименованием
        <strong>Вида работ</strong>,
        указанного в одной или нескольких <strong>Заявках</strong>, то такие <strong>Заявки</strong> останутся в списке,
        а неподходящие будут скрыты.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/Filters/WorkType.jpg"/>
    </div>
    </p>
</ul>


</body>

___
### Следующие шаги:
- [Заявки и сотрудники на карте](./TicketsOnMap.md)
- [Ограничение доступа к файлам в заявке и объекте](./ViewRestriction.md)
- [Сообщения по заявке](./Messages.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
