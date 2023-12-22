---
title: Создание дополнительных полей для объекта
description: Дополнительные поля расширяют возможности внесения и хранения учетной информации.  Это может быть
    стоимость обрудования, его размеры и другая информация, которой нет по умолчанию в системе HubEx. Создать дополнительные поля для Объекта можно в консоли администратора в меню Настройки системы - Дополнительные поля.
keywords: дополнительные поля в объекте, дополнительные поля для объекта, hubex, хабекс, хубекс, хабикс
---

#### Создание дополнительных полей для объекта
<html>
<meta charset="utf-8">
</html>
<body>
<p>Дополнительные поля расширяют возможности внесения и хранения учетной информации. Дополнительные поля можно создавать
    для <strong>Объекта</strong>, <strong>Заявки</strong>, выполненных работ, <strong>Компаний</strong>, договоров. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание дополнительных полей для заявки</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsWorks.html">Создание дополнительных полей для выполненных работ</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsCompany.html">Создание дополнительных полей для компаний</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsContracts.html">Создание дополнительных полей для договоров</a>.</p> 

    <p>Например, для <strong>Объекта</strong> можно создать поля, в которые можно внести
    стоимость оборудования, его размеры и другую информацию, которой нет по умолчанию в системе HubEx.</p>

<p>Рассмотрим пошагово создание дополнительных полей для карточки <strong>Объекта</strong>:</p>
<ol type="1">
    <li>Перейдите в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администратора</a>
        в меню <strong>Настройки системы - Дополнительные поля</strong>. Нажмите кнопку <strong>Создать
            поле</strong>. В открывшейся форме заполните следующие реквизиты:
    </li>
    <ul>
        <li><strong>Название поля</strong> в свободной форме. Например, Площадь номера;</li>
        <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, вам нужно указать площадь
            комнаты,
            подходящий для этого тип - <strong>Дробное число</strong>;
        </li>
        <li><strong>Единицу измерения</strong> можно выбрать согласно тому, в каких единцах вы хотите указывать
            информацию: если вы хотите внести площадь комнаты, то выбирайте квадратные метры;
        </li>
        <li>В поле <strong>Используется для</strong> нужно указать использование для <strong>Объектов</strong>.
            Остальные варианты
            рассмотрены в статьях <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание
                дополнительных
                полей для заявки</a> и <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html">Создание атрибутов для чек-листа</a>.
            Обратите внимание, ваше новое поле может одновременно использоваться и в <strong>Объектах</strong>, и в
            <strong>Заявках</strong> и в
            <strong>Чек-листах</strong>.
        </li>

        <li>При необходимости поставьте галочку напротив пункта <strong>Показывать в
            паспорте объекта</strong>. Таким образом ваше дополнительное поле отобразится при сканировании QR-кода
            объекта. Подробнее читайте в статьях: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>,
            <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки,
                подача заявки по QR-коду</a>, <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без
                приложения, самостоятельная регистрация нового пользователя</a>.

        </li>

    </ul>
    <p><div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/AdditionalFieldsObject/ADDField.jpg"/>
    </div></p>

  <p>Поля с установленным флажком <strong>Показывать в паспорте объекта</strong> отображаются как публичные, а без
        установленного флажка как приватные. Приватные поля не доступны для просмотра в паспорте объекта.</p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/AdditionalFieldsObject/Private.jpg"/>
    </div>

    <li>Теперь созданное поле можно добавить в карточку <strong>Объекта</strong> на вкладку <strong>Дополнительные
        поля</strong>. Нажмите кнопку <strong>+Добавить поле</strong> и в выпадающем
        списке выберите нужное поле, нажмите
        кнопку <strong>Добавить</strong>. Теперь дополнительное поле можно заполнить. Не забудьте сохранить изменения.
    </li>
    <p><div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/AdditionalFieldsObject/ADDFieldObj.jpg"/>
    </div></p>

</ol>


<p>Дополнительно вы можете ознакомиться с обучающим видеороликом <strong>Как создать дополнительные поля в Hubex?</strong></p>

<iframe src="https://www.youtube.com/embed/1hRsaFz_sEQ" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>

</body>


___
### Следующие шаги:
- [Быстрые фильтры и массовые действия для списка объектов](./GroupActions.md)
- [Создание заявки](./CreatingTicket.md)
- [Создание дополнительных полей в заявке](./AdditionalFields.md)


___
- [Перейти в меню](http://wiki.hubex.ru)


