#### Создание дополнительных полей в заявке
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#createaddfield">Добавлять дополнительные поля в консоли администратора;</a></li>
    <li><a href="#createtickwithaddfield">Создавать заявки с использованием дополнительных полей;</a></li>
    <li><a href="#checkmob">Просматривать дополнительные поля в мобильном приложении.</a></li>

</ul>
</html>

<p>Одним из существенных преимуществ системы HubEx является возможность добавления персональных полей на форму <strong>Заявки</strong>.
    Это может потребоваться для внутренних нужд вашей компании. Например, если вам необходимо видеть площадь объекта или стоимость оборудования в
    <strong>Заявке</strong>.</p>

<html>
<body>
<h5 id="createaddfield">Добавление дополнительных полей в консоли администратора</h5>
<p>Рассмотрим пошагово, как создавать индивидуальные поля:</p>

<ol type="1">
    <li> Для начала необходимо зайти в консоль администратора: нажмите на иконку пользователя в
        правом верхнем углу, выберите Консоль администратора. Для этого у вас должны быть настроены права
        доступа.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/AdmConsole.jpg"/>
    </div>

    <li>На вкладке <strong>Настройки системы</strong> бокового меню выберите <strong>Дополнительные поля</strong>. Новое поле можно создать по кнопке
        в правом верхнем углу <strong>Создать поле</strong>. В открывшемся окне заполните:
    </li>
    <ul>
        <li><strong>Название поля</strong> в свободной форме;</li>
        <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, вам нужно указать год постройки здания,
            подходящий для этого тип - <strong>Целое число</strong>. Таким образом в это поле нельзя будет ввести ничего, кроме числового
            значения;
        </li>
        <li><strong>Единицу измерения</strong> можно выбрать согласно тому, в каких единцах вы хотите указывать информацию: например,
            если вы хотите внестии площадь объекта, то выбирайте квадратные метры;
        </li>
        <li>В поле <strong>Используется для</strong> нужно указать использование для <strong>Заявок</strong>. Остальные варианты
            рассмотрены в статьях <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html">Создание дополнительных
                полей в объекте</a> и <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html">Создание дополнительных полей в
                чек-листах</a>.
            Обратите внимание, ваше новое поле может одновременно использоваться и в <strong>Объектах</strong>, и в <strong>Заявках</strong> и в
            <strong>Чек-листах</strong>.

        </li>
    </ul>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDField.jpg"/>
    </div>


    <li> Далее необходимо настроить видимость и доступ к новому полю. В консоли администратора в боковом меню перейдите
        на вкладку <strong>Настройки заявки</strong> в пункт <strong>Поля на форме заявки</strong>.
        Вы можете выбрать сразу несколько <strong>Ролей</strong> и все доступные <strong>Стадии</strong>. Обратите внимание, необходимо
        выдать полномочия для каждой из <strong>Стадий</strong>, чтобы дополнительные поля стали доступны. Не забудьте сохранить внесенные
        изменения.
    </li>
     
     <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/AccessRights.jpg"/>
    </div>
 

    <h5 id="createtickwithaddfield">Создание заявки с использованием дополнительных полей</h5>

    <p> Теперь при создании <strong>Заявки</strong> вы можете перейти в блок <strong>Дополнительные поля</strong>, выбрать и заполнить ваши персональные поля. Подробнее о создании <strong>Заявки</strong> читайте <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html"> здесь</a>.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDFieldTicket.jpg"/>
    </div>
 

    <h5 id="checkmob">Просмотр дополнительных полей в мобильном приложении</h5>
    <p>Созданные вами дополнительные поля так же можно увидеть в <strong>Заявке</strong> в мобильном приложении.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDFieldMob.PNG"/>
    </div>

</ol>
</body>
</html>


___
### Следующие шаги:
- [Использование фильтров для поиска заявок](./Filters.md)
- [Переход заявки по стадиям и удаление заявки](./ChangingStatus.md)
- [Прикрепление выполненных работ](./AttachingFiles.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
