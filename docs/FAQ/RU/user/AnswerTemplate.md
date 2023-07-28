---
title: Шаблоны ответов
description: 
keywords: чат, сообщения, шаблоны ответов, база знаний, поддержка клиентов, hubex, хабекс, хубекс, хабикс
---


#### Шаблоны ответов
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#createaddfield">Как создать дополнительные поля для Заявки;</a></li>
    <li><a href="#createtickwithaddfield">Как создать Заявку с использованием дополнительных полей;</a></li>
    <li><a href="#checkmob">Где располагаются дополнительные поля в мобильном приложении.</a></li>
</ul>
</html>

<body>
<p>Дополнительные поля расширяют возможности внесения и хранения учетной информации, делают ваше взаимодействие с системой персонализированным: вы сможете вносить площадь объекта, стоимость оборудования и т.д. В HubEx вы можете создать дополнительные поля для формы <strong>Заявки</strong> и для карточки <strong>Объекта</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html">Создание дополнительных полей для объекта</a>.</p>

<p>Ознакомьтесь с видеороликом <strong>Как создать дополнительные поля в Hubex?</strong> и прочтите подробную статью ниже.</p>

<iframe src="https://www.youtube.com/embed/1hRsaFz_sEQ" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>

<h5 id="createaddfield">Создание дополнительных полей для Заявки</h5>
<p>Создать и настроить дополнительные поля можно в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администратора</a> в меню <strong>Настройки системы - Дополнительные поля</strong>. Далее представлена пошаговая инструкция создания дополнительных полей для <strong>Заявки</strong>:</p>

<ol type="1">
    
    <li>Нажмите кнопку <strong>Создать поле</strong>. В форме создания дополнительного поля заполните:
    </li>
    <ul>
        <li><strong>Название поля</strong> в свободной форме;</li>
        <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, вам нужно указать стоимость оборудования,
            подходящий для этого тип - <strong>Дробное число</strong>. Таким образом в это поле нельзя будет ввести ничего, кроме числового
            значения;
        </li>
        <li><strong>Единицу измерения</strong> можно выбрать согласно тому, в каких единицах вы хотите указывать информацию: например,
            если вы хотите внести стоимость, то выбирайте рубли;
        </li>
        <li>В поле <strong>Используется для</strong> нужно указать использование для <strong>Заявок</strong>. Остальные варианты
            рассмотрены в статьях <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html">Создание дополнительных
                полей для объекта</a> и <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html">Создание дополнительных полей для
                чек-листов</a>.
            Обратите внимание, ваше новое поле может одновременно использоваться и в <strong>Объектах</strong>, и в <strong>Заявках</strong> и в
            <strong>Чек-листах</strong>.

        </li>
    </ul>

    <p><div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDField.jpg"/>
    </div></p>


    <li> Далее необходимо настроить видимость и доступ к новому дополнительному полю. В консоли администратора в боковом меню перейдите
        на вкладку <strong>Настройки заявки - Поля на форме заявки</strong>.
        Вы можете выбрать сразу несколько <strong>Ролей</strong> и все доступные <strong>Стадии</strong>. Обратите внимание, необходимо
        выдать полномочия для каждой из <strong>Стадий</strong>, чтобы дополнительные поля стали доступны. Не забудьте сохранить внесенные
        изменения. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка доступа к полям заявки</a>.
    </li>
     <p>
     <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/AccessRights.jpg"/>
    </div></p>
 
</ol>

    <h5 id="createtickwithaddfield">Создание заявки с использованием дополнительных полей</h5>

 <p>Дополнительные поля, к которым у пользователя будет настроен доступ, отображаются в <strong>Заявке</strong>
        на вкладке <strong>Заявка</strong> внизу. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDFieldTicket.jpg"/>
    </div>
 

    <h5 id="checkmob">Просмотр дополнительных полей в мобильном приложении</h5>
    <p>Созданные вами дополнительные поля так же можно увидеть в <strong>Заявке</strong> в мобильном приложении.</p>
    
    <div>
        <img style="margin: 0 auto; display: block; max-width: 40%;"
             src="/attachments/images/FAQ/USER/AdditionalFields/ADDFieldMob.PNG"/>
    </div>


</body>


___
### Следующие шаги:
- [Календарь заявок](./Calendar.md)
- [Чек-листы](./Checklists.md)
- [Прикрепление выполненных работ](./AttachingFiles.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
