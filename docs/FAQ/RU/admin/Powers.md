---
title:
description:
keywords: роль, полномочия, hubex, хабекс, хубекс, хабикс
---

#### Полномочия роли

<html>
<meta charset="utf-8">

</html>

<body>
<p>Для настройки доступа к различному функционалу, работы с определенными данными в HubEx используются Роли. Для каждой
    Роли в консоли администрирования
    в меню Администрирование - Роли можно задать набор полномочий (разрешений). Подробнее читайте в статье Настрйока
    ролей.</p>
<p><Strong>Полномочия роли</Strong> - это основной раздел настройки Ролей, который отвечает за настройку доступа к
    элементам интерфейса и
    справочникам. Полномочия
    разделены на тематические блоки. Например, импорт, экспорт,
    копирование и другие действия с <Strong>Заявками</Strong> находятся в блоке <Strong>Заявки</Strong>.</p>
<p>Включить полномочия можно сразу на весь блок,
    переместив переключатель вправо. Либо можно развернуть блок и сделать детальную настройку по пунктам. </p>

<p>Каждый блок полномочий содержит одну или
    две группы:</p>
<ul>
    <li><Strong>Элементы интерфейса</Strong>: здесь можно настроить видимость пунктов основного меню и
        консоли
        администрирования, например, скрыть меню <Strong>Карты</Strong>, <Strong>Аналитика</Strong>, <Strong>Жизненный
            цикл</Strong> и т.д.;
    </li>
    <li><Strong>Справочники</Strong>: здесь можно настроить доступ к отображению данных в справочниках.
        Например, разрешить
        просматривать список
        объектов, которые относятся только к участку пользователя.
    </li>

</ul>

<p>Рассмотрим подробно назначение каждого полномочия в тематических блоках.</p>
<table style="width 900px; border-style: hidden;" cellspacing="0" cellpadding="0">
    <tr>
        <td width="300">
            <p>QR</p>
            <p>Аналитика</p>
            <p>Виды работ</p>
            <p>Выполненные работы и стоимости</p>
            <p>Дополнительные поля</p>
            <p>Другие</p>
            <p>Жизненный цикл заявки</p>
            <p>Заявки</p>
            <p>Интеграция</p>
            <p>Интеграция по электронной почте</p>
            <p>Календарь</p>
            <p>Карты</p>
        </td>
        <td width="300">

            <p>Классы объекта</p>
            <p>Компании</p>
            <p>Критичности</p>
            <p>Материалы и склады</p>
            <p>Навыки</p>
            <p>Объекты</p>
            <p>Плановые заявки</p>
            <p>Пользователи и контакты</p>
            <p>Поля на форме заявки</p>
            <p>Автоматическое назначение заявок</p>
            <p>Настройка рейтингов исполнителей</p>
            <p>Роли</p>
        </td>
        <td width="300">

            <p>API полномочия</p>
            <p>Сообщения</p>
            <p>Стадии</p>
            <p>Статусы заявки</p>
            <p>Теги</p>
            <p>Типы заявки</p>
            <p>Типы объектов</p>
            <p>Настройка уведомлений</p>
            <p>Участки</p>
            <p>Файлы</p>
            <p>Чек-листы</p>
            <p>Шаблоны объектов</p>
        </td>
    </tr>
</table>

<ol>
    <li><Strong>QR</Strong>: данный блок отвечает за настройку доступа к работе с QR-кодами и шаблонами заявок (меню
        <Strong>Заявки -
            Маркировка</Strong>).
        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx:
            основные
            понятия</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjTemplates.html">Создание шаблона
            оборудования, приемка и маркировка по QR-коду</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки,
            подача
            заявки по QR-коду</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок
            по
            QR-коду без приложения, самостоятельная регистрация нового пользователя</a>. </p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/QR.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Публикация QR кодов и запуск планировщика</Strong>: включение полномочия разрешает при создании
                QR-кода
                опубликовать его (для подачи <Strong>Заявок</Strong> незарегистрированными пользователями в том числе);
                ЧТО ЗДЕСЬ ЗА
                ПЛАНИРОВЩИК?
            </li>
            <li><Strong>Отмена публикации QR кода</Strong>: при включении данного полномочия в карточке QR-кода (шаблона
                заявки) появится
                кнопка <Strong>Снять с публикации</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QRPublic.jpg"/>
            </div>
            <li><Strong>Пункт главного меню - Маркировка</Strong>: полномочие отвечает за доступ к меню <Strong>Заявки -
                Маркировка</Strong>. Если
                выключить полномочие роли, то пользователь с данной ролью не увидит этого пункта в HubEx (web- и
                мобильных приложениях);
            </li>
            <li><Strong>Создание QR кодов и планировщика</Strong>: при включении данного полномочия в меню <Strong>Заявки
                - Маркировка</Strong> появится
                кнопка <Strong>Создать QR-код</Strong>;
            </li>
            <li><Strong>Удаление QR кодов и планировщика</Strong>: при включении данного полномочия в меню <Strong>Заявки
                - Маркировка</Strong> в
                карточках QR-кодов (шаблонов заявок) в контекстном меню (три точки) появится пункт
                <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QRDelete.jpg"/>
            </div>
            <li><Strong>Копирование QR кодов и планировщиков</Strong> Я НЕ НАШЛА КНОПКУ КОПИРОВАТЬ</li>
            <li><Strong>Изменение QR кодов и планировщика</Strong>: включение данного полномочия разрешает изменять поля
                шаблона заявки
                (<Strong>Объект</Strong>, <Strong>Адрес объекта</Strong>, <Strong>Вид работ</Strong> и т.д.). При
                отключении данного полномочия пользователь увидит пустую
                карточку шаблона заявки.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QREmpty.jpg"/>
            </div>
        </ul>
    </li>


    <li><Strong>Аналитика</Strong>: данный блок отвечает за настройку доступа к работе с меню web-приложения <Strong>Аналитика</Strong>.
        С помощью
        полномочий можно открыть/закрыть доступ к определенным аналитическим отчетам.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Analytic.jpg"/>
        </div>
        </p>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Срез по заявкам</Strong>: полномочие отвечает за доступ к отчету <Strong>Срез по
                заявкам</Strong> в меню <Strong>Аналитика</Strong>.
                Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/TicketsReport.html">Срез по
                    заявкам</a>;
            </li>
            <li><Strong>История перемещений</Strong>: полномочие отвечает за доступ к отчету <Strong>История
                перемещений</Strong> в меню <Strong>Карты</Strong>. Подробнее читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/Geotracking.html">История перемещений</a>;
            </li>
            <li><Strong>Общая аналитика</Strong>: полномочие отвечает за доступ к отчету <Strong>Общая
                аналитика</Strong> в меню <Strong>Аналитика</Strong>. Подробнее читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/GeneralAnalitics.html">Общая аналитика</a>;
            </li>
            <li><Strong>Отчет для клиента</Strong>: полномочие отвечает за доступ к <Strong>Отчету для клиента</Strong>
                в меню <Strong>Аналитика</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/ClientsAnalitics.html">Отчет для клиента</a>;
            </li>
            <li><Strong>Отчет по объектам</Strong>: полномочие отвечает за доступ к <Strong>Отчету по объектам</Strong>
                в меню <Strong>Аналитика</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/ObjectsAnalitics.html">Отчет по объектам</a>;
            </li>
            <li><Strong>Отчет по сотрудникам</Strong>: полномочие отвечает за доступ к </Strong>Отчету по
                сотрудникам</Strong> в меню <Strong>Аналитика</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/EngineersAnalitics.html">Отчет по сотрудникам</a>;
            </li>
            <li><Strong>Мои отчеты</Strong>: полномочие отвечает за доступ к печатным формам <Strong>Сервисного
                акта</Strong>, <Strong>Акта выполненных работ</Strong> и
                <Strong>Счета на оплату</Strong>.
            </li>
        </ul>

    </li>

    <li><Strong>Виды работ</Strong>: данный блок предназначен для настройки доступа к работе с меню консоли
        администрирования <Strong>Настройки
            заявки - Виды работ</Strong>.
        <p>Подробнее о создании и использовании Видов работ читайте в статье:<a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/WorkType.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Виды работ</Strong>: включение полномочия предоставляет доступ к
                меню консоли
                администрирования <Strong>Настройки заявки - Виды работ</Strong>;
            </li>
            <li><Strong>Изменение видов работ</Strong>: полномочие позволяет вносить изменения в уже созданные <Strong>Виды
                работ</Strong>;
            </li>
            <li><Strong>Создание видов работ</Strong>: при включении данного полномочия в меню <Strong>Настройки заявки
                - Виды работ</Strong> появляется
                кнопка <Strong>Создать вид работ</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/WorkType1.jpg"/>
            </div>
            <li><Strong>Копирование видов работ</Strong>: при включении данного полномочия в меню <Strong>Настройки
                заявки - Виды работ</Strong> и в
                карточках <Strong>Видов работ</Strong> в контекстном меню (три точки) появится пункт
                <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление видов работ</Strong>: при включении данного полномочия в меню <Strong>Настройки заявки
                - Виды работ</Strong> и в
                карточках <Strong>Видов работ</Strong> в контекстном меню (три точки) появится пункт
                <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/WorkType2.jpg"/>
            </div>
            <li><Strong>Пересортировка видов работ</Strong>: ЧТО ДЕЛАЕТ?;</li>
            <li><Strong>Публикация видов работ</Strong>: ЭТО И СЛЕДУЮЩЕЕ НИ НА ЧТО НЕ ВЛИЯЕТ;</li>
            <li><Strong>Отмена публикации видов работ</Strong>: .</li>
        </ul>
    </li>

    <li><Strong>Выполненные работы и стоимости</Strong>: данный блок предназначен для стоимостного учета выполненных
        работ в <Strong>Заявке</Strong>
        (вкладка <Strong>Выполнение</Strong>).
        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрепление
            выполненных работ в web и мобильном приложении</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Works.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Поле "Количество" на форме выполненных работ по заявке</Strong>: ЭТО И СЛЕДУЮЩЕЕ НИ НА ЧТО НЕ
                ВЛИЯЕТ;
            </li>
            <li><Strong>Поле "Единицы измерения" на форме выполненных работ по заявке</Strong>: ;</li>
            <li><Strong>Поле "Вид Работ" на форме выполненных работ по заявке</Strong>: при включении данного полномочия
                на форме
                <Strong>Выполненной работы</Strong> становится доступным для редактирования поле <Strong>Вид
                    работ</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works2.jpg"/>
            </div>
            <li><Strong>Израсходованные материалы на форме выполненных работ</Strong>: при включении данного полномочия
                на форме
                <Strong>Выполненной работы</Strong> появится раздел <Strong>Израсходованные материалы</Strong>, где
                можно указать материалы,
                использованные для выполнения работ по <Strong>Заявке</Strong>. Обратите внимание! Для добавления
                материалов на форме
                <Strong>Выполненной работы</Strong> необходимо включить полномочие <Strong>Материалы и склады -
                    Справочники - Все склады</Strong>;
            </li>
            <li><Strong>Поле "Стоимость вида работ" на форме выполненных работ по заявке</Strong>: при включении данного
                полномочия на
                форме <Strong>Выполненной работы</Strong> появляется поле <Strong>Стоимость</Strong>;
            </li>

            <li><Strong>Поле "Cтоимость материала" на форме выполненных работ по заявке</Strong>: с помощью данного
                полномочия можно
                отобразить поле <Strong>Стоимость</Strong> при выборе израсходованных материалов;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works3.jpg"/>
            </div>
            <li><Strong>Поле "Ставка/Час исполнителя" на форме выполненных работ по заявке</Strong>: при включении
                полномочия на форме
                <Strong>Выполненной работы</Strong> при выборе <Strong>Исполнителя</Strong> будет отображаться поле
                <Strong>Ставка/час</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works4.jpg"/>
            </div>
            <li><Strong>Ставка/час в карточке сотрудника</Strong>: при включении данного полномочия в карточке <Strong>Сотрудника</Strong>
                (вкладка
                <Strong>Квалификация</Strong>) станет
                доступным поле <Strong>Ставка/час</Strong>. Обратите внимание! Чтобы карточка
                <Strong>Сотрудника</Strong> была доступна необходимо
                включить полномочие <Strong>Пользователи и контакты - Элементы интерфейса - Пункт галвного
                    меню-Сотрудники</Strong>, а
                также <Strong>Пользователи и контакты - Справочники - Все пользователи</Strong>.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works5.jpg"/>
            </div>
        </ul>
    </li>


    <li><Strong>Дополнительные поля</Strong>: данный блок предназначен для настройки доступа к работе с дополнительными
        полями в меню
        консоли администрирования <Strong>Настройки системы - Дополнительные поля</Strong>.
        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html">Создание
            дополнительных полей в объекте</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание дополнительных полей в
            заявке</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание атрибутов для чек-листа</a>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ADDFields.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание атрибутов заявок</Strong>: при включении данного полномочия в меню консоли
                администрирования <Strong>Настройки
                    системы - Дополнительные</Strong> поля появляется кнопка <Strong>Создать поле</Strong>;
            </li>
            <li><Strong>Пункт административной панели - Дополнительные поля</Strong>: включение полномочия предоставляет
                доступ к меню
                консоли
                администрирования <Strong>Настройки системы - Дополнительные поля</Strong>;
            </li>
            <li><Strong>Сохранение атрибутов заявок</Strong>: при включении полномочия на форме создания <Strong>Дополнительного
                поля</Strong> появится
                кнопка <Strong>Сохранить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/ADDFields2.jpg"/>
            </div>
            <li><Strong>Копирование атрибутов заявок</Strong>: при включении полномочия в меню <Strong>Настройки системы
                - Дополнительные поля</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление атрибутов заявок</Strong>: при включении полномочия в меню <Strong>Настройки системы -
                Дополнительные поля</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/ADDFields3.jpg"/>
            </div>

        </ul>
    </li>


    <li><Strong>Другие</Strong>: ЧТО ЭТО??.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ADDFields.jpg"/>
        </div>
        <p><Strong>API полномочия:</Strong></p>
        <ul>
            <li>Метод получения списка доступных атрибутов SLA: ЧТО ДЕЛАЕТ??;</li>

        </ul>
    </li>

    <li><Strong>Жизненный цикл заявки</Strong>: данный блок предназначен для настройки доступа к работе с меню консоли
        администрирования
        <Strong>Настройки заявки - Жизненный цикл заявки</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный
            цикл заявки</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/LifeCycle.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Жизненный цикл заявок</Strong>: включение полномочия
                предоставляет доступ к меню
                консоли
                администрирования <Strong>Настройки заявки - Жизненный цикл заявки</Strong>. Обратите внимание! Работать
                с жизненным
                циклом можно только при включенном полномочии <Strong>Участки - Справочники - Все участки</Strong>;
            </li>
            <li><Strong>Сохранение жизненного цикла заявки</Strong>: НЕ ВЛИЯЕТ НИ НА ЧТО, КНОПКА ДОБАВИТЬ СТАДИЮ
                ПОЯВЛЯЕТСЯ ПРИ ВКЛЮЧЕНИИ
                ДРУГИХ ПОЛНОМОЧИЙ. Обратите внимание! Кнопка +Добавить стадию
                доступна только при включении следующих полномочий: <Strong>Поля на форме заявки</Strong> (полностью
                блок), <Strong>Роли -
                    Справочники - Все роли</Strong>, <Strong>Стадии - Элементы интерфейса - Пункт административной
                    панели - Стадии заявок</Strong>,
                <Strong>Статусы заявки - Элементы интерфейса - Пункт административной панели - Статусы заявок</Strong>,
                <Strong>Типы заявки -
                    Элементы интерфейса - Пункт административной панели - Тип заявок</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/LifeCycle2.jpg"/>
            </div>

        </ul>
    </li>

    <li><Strong>Заявки</Strong>: данный блок предназначен для настройки работы с меню <Strong>Заявки - Все
        заявки</Strong>. Здесь вы можете настроить доступ к работе и просмотру Заявок в разрезе Компаний, Объектов и
        т.д.
        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание
            заявки</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChildTicket.html">Дочерние заявки</a>.</p>

        <p><Strong>Элементы интерфейса:</Strong></p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Ticket.jpg"/>
        </div>
        <ul>
            <li><Strong>Сохранение переходов по заявке</Strong>: НА ЧТО ВЛИЯЕТ??;
            </li>
            <li><Strong>Создание заявки</Strong>: при включение полномочия в меню <Strong>Заявки - Все заявки</Strong>
                появляется кнопка <Strong>Создать заявку</Strong>
                (для web-приложения);
            </li>

            <li><Strong>Вкладка истории изменений на форме заявки</Strong>: НЕ РАБОТАЕТ -вкладка история видна и без
                включения этого
                полномочия;
            </li>

            <li><Strong>Удаление заявок</Strong>: при включении полномочия в меню <Strong>Заявки - Все заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket4.jpg"/>
            </div>
            <li><Strong>Кнопка создания заявки, выбрав объект из списка в Мобильном Приложении</Strong>: при включение
                полномочия в меню
                <Strong>Заявки</Strong> мобильного приложения появится кнопка создания. Обратите внимание! Подать
                <Strong>Заявку</Strong>
                можно будет
                только с доступом к <Strong>Объектам</Strong> (<Strong>Оборудованию</Strong>). Для этого необходимо
                включить подходящее полномочие в блоке
                <a href="#object"><Strong>Объекты
                    - Справочники</Strong></a>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket5.jpg"/>
            </div>

            <li><Strong>Подача заявки по сканированию QR-кода</Strong>: при включение полномочия в меню
                <Strong>Заявки</Strong> мобильного приложения появится возможность создавать <Strong>Заявки</Strong> с
                помощью QR-кодов. Обратите
                внимание! Подать <Strong>Заявку</Strong> по QR-коду можно будет
                только с доступом к <Strong>Объектам</Strong> (<Strong>Оборудованию</Strong>). Для этого необходимо
                включить подходящее полномочие в блоке
                <a href="#object"><Strong>Объекты
                    - Справочники</Strong></a>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket6.jpg"/>
            </div>
            <li><Strong>Пункт главного меню - Заявки</Strong>: включение полномочия открывет доступ к основному меню
                <StrongЗаявки - Все заявки
                </Strong;
            </li>
            <li><Strong>Копирование заявок</Strong>: при включении полномочия в меню <Strong>Заявки - Все
                заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Изменение заявок</Strong>: при включении полномочия будет доступно изменение полей на форме
                <Strong>Заявки</Strong>, иначе все
                поля будут заблокированы. Обратите
                внимание! Настройка отображения конкретных полей на форме <Strong>Заявки</Strong> находится в меню
                <Strong>Настройки заявки -
                    Поля на
                    форме заявки</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки:
                    настройка доступа к полям
                    заявки</a>;
            </li>
            <li><Strong>Экспорт заявок</Strong>: при включении полномочия в меню <Strong>Заявки - Все заявки</Strong>
                появится кнопка <Strong>Экспорт</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html">Экспорт</a>;
            </li>
            <li><Strong>Импорт заявок</Strong>: при включении полномочия в меню <Strong>Заявки - Все заявки</Strong>
                появится кнопка <Strong>Импорт</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html">Импорт</a>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket7.jpg"/>
            </div>
            <li><Strong>Добавление участника в список в сообщениях</Strong>: при включении данного полномочия в <Strong>Заявке</Strong>
                на вкладке
                <Strong>Сообщение</Strong> появляется кнопка <Strong>Добавить</Strong> (доступно только для чата с
                командой). Обратите внимание! Доступ к
                сообщениям и чату с командой включается с
                помощью полномочий <Strong>Сообщения - Элементы интерфейса - Чат с сотрудниками</Strong>. Доступ к
                списку пользователей
                для добавления в чат будет доступен при включении полномочия <Strong>Пользователи и контакты -
                    Справочники - Все
                    пользователи</Strong> (или <Strong>Пользователи и контакты - Справочники - Все пользователи на
                    участках</Strong>). Просмотр списка
                участников чата доступен при включении полномочия <Strong>Сообщения - Элементы интерфейса -
                    Просмотр списка участников в сообщениях</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket8.jpg"/>
            </div>
            <li><Strong>Удаление участника из списка в сообщениях</Strong>: при включении полномочия в
                <Strong>Заявке</Strong> на вкладке <Strong>Сообщения</Strong> по
                щелчку на участников чата откроется форма с возможностью удалять участников. Обратите внимание! Просмотр
                списка участников чата доступен при включении полномочия <Strong>Сообщения - Элементы интерфейса -
                    Просмотр списка участников в сообщениях</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket9.jpg"/>
            </div>
            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket10.jpg"/>
            </div>
            </p>
            <li><Strong>Календарь заявок сотрудника при назначении</Strong>: при включении полномочия в
                <Strong>Заявке</Strong> при выборе исполнителя
                (<Strong>Выбрать исполнителя из списка</Strong>) на форме отображается календарь для просмотра занятости
                выбранного
                исполнителя. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График
                    работы исполнителей</a>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket11.jpg"/>
            </div>
        </ul>

        <p><Strong>Справочники:</Strong></p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Ticket2.jpg"/>
        </div>
        <ul>
            <li><Strong>Активные заявки в моем подразделении</Strong>: КАК РАБОТАЮТ ПОДРАЗДЕЛЕНИЯ? или этого нет?</li>
            <li><Strong>Активные заявки на сотрудниках моих участков</Strong>: для пользователя будут доступны <Strong>Заявки</Strong>
                по <Strong>Сотрудникам</Strong> с
                такими же <Strong>Участками</Strong>, как у этого пользователя. <Strong>Участки</Strong> устанавливаются
                в карточках <Strong>Сотрудников</Strong>,
                <Strong>Заказчиков</Strong> (меню <Strong>Пользователи</Strong>). Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>;
            </li>
            <li><Strong>Активные заявки на объектах моей компании</Strong>: пользователь будет видеть
                <Strong>Заявки</Strong> по <Strong>Объектам</Strong>, в которых
                <Strong>Компания</Strong> совпадает с <Strong>Компанией</Strong> пользователя.
                <Strong>Компания-владелец</Strong> устанавливается в карточке <Strong>Объекта</Strong> и <Strong>Заказчика</Strong>
                на вкладк е<Strong>Общее</Strong>, у <Strong>Сотрудника</Strong> на вкладке
                <Strong>Трудоустройство</Strong>. Такая настройка очень актуальна для
                настрйоки роли <Strong>Заказчика</Strong>, чтобы ваши заказчики могли просматривать только свои <Strong>Заявки</Strong>;
            </li>
            <li><Strong>Все активные заявки</Strong>: доступ ко всем Заявкам без исключения;</li>
            <li><Strong>Активные заявки по моим видам работ</Strong>: пользователь будет видеть <Strong>Заявки</Strong>,
                в которых установленные <Strong>Виды
                    работ</Strong> совпадают с его <Strong>Видами работ</Strong>. В карточке <Strong>Сотрудника</Strong>
                заполнить <Strong>Виды работ</Strong> можно на вкладке <Strong>Квалификация</Strong>;
            </li>
            <li><Strong>Дочерние активные заявки</Strong>: пользователь сможет работать с дочерними заявками. Подробнее
                читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChildTicket.html">Дочерние заявки</a>;
            </li>
            <li><Strong>Заявки, на которые я когда-либо был назначен</Strong>: пользователю будут доступны те <Strong>Заявки</Strong>,
                в которых он
                когда-либо был выбран как <Strong>Исполнитель</Strong>;
            </li>
            <li><Strong>Предоставляет доступ на чтение и запись для всех компонентов формы заявки вне зависимости от
                полномочий
                и настроек
                стадии</Strong>: данная настройка разрешает просматривать и изменять все поля <Strong>Заявки</Strong>,
                независимо от настроек в
                меню <Strong>Настройки заявки - Поля на форме заявки</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки:
                    настройка доступа к полям заявки</a>;
            </li>
            <li><Strong>Заявки на дочерних подразделениях пользователя</Strong>: КАК РАБОТАЮТ ПОДРАЗДЕЛЕНИЯ? или этого
                нет?
            </li>
            <li><Strong>Заявки, где пользователь - ответственный за объект по заявке</Strong>: пользователю будут
                доступны <Strong>Заяявки</Strong> по
                <Strong>Объектам</Strong>, в карточках которых во вкладке <Strong>Обслуживание</Strong> в поле <Strong>Отчетственный
                    за объект</Strong> указан этот
                пользователь
                (<Strong>Сотрудник</Strong>);
            </li>
            <li><Strong>Заявки на объектах, доступных пользователю</Strong>: видимость <Strong>Заявок</Strong> для
                пользователя будет зависеть от настроек
                полномочий в блоке <a href="#object"><Strong>Объекты - Справочники</Strong></a>. В зависимости от того, к
                каким <Strong>Объектам</Strong> будет разрешен доступ, такие и
                будут доступны
                <Strong>Заявки</Strong>;
            </li>
            <li><Strong>Заявки на подразделениях, где пользователь - менеджер</Strong>: СНОВА ПОДРАЗДЕЛЕНИЯ</li>
            <li><Strong>Заявки по объектам, где пользователь - предпочтительный инженер</Strong> - ЭТО ГДЕ</li>
            <li><Strong>Игнорировать эксклюзивные полномочия для доступа к полям заявки</Strong>: ЭТО НЕ ТО ЖЕ САМОЕ ЧТО
                И ????
                Предоставляет доступ на чтение и запись для всех компонентов формы Заявки вне зависимости от полномочий
                и настроек
                стадии:
            </li>
            <li><Strong>Архивные заявки</Strong>: ЧТО ТАКОЕ АРХИВНЫЕ? ЗАКРЫТЫЕ?</li>

        </ul>
    </li>


    <li><Strong>Интеграция</Strong>: данный блок предназначен для настройки доступа к разделам меню консоли
        администрирования
        <Strong>Интеграция - Ключи</Strong>, <Strong>Webhook'и</Strong> и <Strong>Служебные пользователи</Strong>. ЧТО С
        ВЕБХУКАМИ И КЛЮЧАМИ ?? Я УБРАЛА СТАТЬЮ ПРО
        ИНТЕГРАЦИЮ С БИТРИКС ГДЕ БЫЛИ ВЕБХУКИ И ТД

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ServiceUsers.html">Служебные
            пользователи</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Integration.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Webhook'и</Strong>: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Интеграция - Webhook'и</Strong>;
            </li>
            <li><Strong>Создание webhook'а</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Webhook'и</Strong> появляется кнопка <Strong>Создать
                Webhook</Strong>;
            </li>

            <li><Strong>Удаление webhook'а webhook'а</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Webhook'и</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Копирование webhook'а</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Webhook'и</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Сохранение webhook'а</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Webhook'и</Strong> на форме создания/редактирования
                Webhook'a появится кнопка <Strong>Сохранить</Strong>;
            </li>

            <li><Strong>Активация webhook'а</Strong>: НИ НА ЧТО НЕ ВЛИЯЕТ;
            </li>

            <li><Strong>Деактивация webhook'а</Strong>: НИ НА ЧТО НЕ ВЛИЯЕТ;
            </li>
            <li><Strong>Пункт административной панели - Переменные</Strong>: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Интеграция - Ключи</Strong>;
            </li>
            <li><Strong>Создание переменных в интеграции</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Ключи</Strong> появляется кнопка
                <Strong>Создать ключ</Strong>;
            </li>
            <li><Strong>Удаление переменных в интеграции</Strong>: при включении полномочия в меню <Strong>Интеграция -
                Ключи</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <li><Strong>Копирование переменных в интеграции</Strong>: при включении полномочия в меню <Strong>Интеграция
                - Ключи</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Изменение переменных в интеграции</Strong>: НИ НА ЧТО НЕ ВЛИЯЕТ;</li>
            <li><Strong>Пункт административной панели - Служебные пользователи</Strong>: включение полномочия
                предоставляет доступ к меню
                консоли
                администрирования <Strong>Интеграция - Служебные пользователи</Strong>;
            </li>
            <li><Strong>Управление API-пользователем</Strong> - НИ НА ЧТО НЕ ВЛИЯЕТ ЭТО И СЛЕДУЮЩЕЕ , УПРАВЛЯТЬ МОЖНО
                НАСТРОЙКОЙ
                ПОЛЬЗОВАТЕЛЕЙ;
            </li>
            <li><Strong>Управление анонимным пользователем</Strong>;
            </li>
        </ul>
    </li>

    <li><Strong>Интеграция по эл. почте</Strong>: блок предназначен для настройки доступа к меню консоли
        администрирования
        <Strong>Интеграция - Интеграция по эл. почте</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketMail.html">Интеграция по
            электронной почте, подача заявок по электронной почте</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Email.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Интеграция по эл. почте</Strong>: включение полномочия
                предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Интеграция - Интеграция по эл. почте</Strong>;
            </li>
            <li><Strong>Создание интеграции по электронной почте</Strong>: при включении полномочия в меню <Strong>Интеграция
                - Интеграция по эл.
                почте</Strong> появляется кнопка <Strong>Подключить эл.почту</Strong>;
            </li>

            <li><Strong>Удаление интеграции по электронной почте</Strong>: при включении полномочия в меню <Strong>Интеграция
                - Интеграция по эл.
                почте</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Копирование интеграции по электронной почте</Strong>: при включении полномочия в меню <Strong>Интеграция
                - Интеграция по
                эл. почте</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Изменение интеграции по электронной почте</Strong>: при включении полномочия в меню <Strong>Интеграция
                - Интеграция по
                эл. почте</Strong> на форме создания/редактирования электронной почты поля станут доступными для
                редактрирования;
            </li>

            <li><Strong>Активация интеграции по электронной почте</Strong>: НИ НА ЧТО НЕ ВЛИЯЕТ активировать можно без
                этой настройки;
            </li>

            <li><Strong>Отключение интеграции по электронной почте</Strong>: НИ НА ЧТО НЕ ВЛИЯЕТ тоже самое;
            </li>

        </ul>
    </li>


    <li><Strong>Календарь</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения <Strong>Заявки
        - Расписание заявок</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Calendar.html">Календарь
            заявок</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Calendar.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт главного меню - Расписание заявок</Strong>: полномочие предоставляет доступ к пункту меню
                web-приложения <Strong>Заявки - Расписание заявок</Strong>.
            </li>

        </ul>
    </li>

    <li><Strong>Карты</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
        <Strong>Карты</Strong> для работы с геопозицией мобильных сотрудников.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/GeoPosition.html">Карта: текущая
            геопозиция сотрудников</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Map.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт главного меню - Локации</Strong>: ЭТО ЧТО;
            </li>
            <li><Strong>Пункт главного меню - Карта</Strong>: полномочие предоставляет доступ к пункту меню
                web-приложения <Strong>Карты</Strong>.
            </li>


        </ul>
    </li>

    <li><Strong>Классы объекта</Strong>: блок предназначен для настройки доступа к пункту меню консоли администрирования
        <Strong>Структура
            предприятия - Классы оборудования</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectClass.html">Классы
            оборудования</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ObjectClass.jpg"/>
        </div>


        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Классы объектов</Strong>: включение полномочия предоставляет
                доступ к
                меню
                консоли
                администрирования <Strong>Структура предприятия - Классы оборудования</Strong>;
            </li>
            <li><Strong>Добавление классов объекта</Strong>: при включении полномочия в меню консоли
                администрирования Структура предприятия - Классы оборудования появится кнопка Создать класс
                оборудования;
            </li>
            <li><Strong>Копирование классов объекта</Strong>: при включении полномочия в меню <Strong>Структура
                предприятия - Классы оборудования</Strong>
                в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Удаление классов объекта</Strong>: при включении полномочия в меню <Strong>Структура предприятия
                - Классы оборудования</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/ObjectClass2.jpg"/>
            </div>

            <li><Strong>Изменение классов объекта</Strong>: при включении полномочия откроется возможность вносить
                изменения в уже
                созданные классы объектов, на форме <Strong>Класса оборудования</Strong> появится кнопка <Strong>Сохранить</Strong>;
            </li>


        </ul>
    </li>


    <li><Strong>Компании</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
        <Strong>Компании</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание
            обслуживаемых компаний</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Company.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Типы орг. единиц</Strong>: НЕ НАШЛА ЧТО ЭТО;
            </li>
            <li><Strong>Пункт главного меню - Компании</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Компании</Strong>;
            </li>
            <li><Strong>Создание компании</Strong>: при включении полномочия в меню <Strong>Компании</Strong> появится
                кнопка <Strong>Создать компанию</Strong>;
            </li>
            <li><Strong>Удаление компании</Strong>: при включении полномочия в меню <Strong>Компании</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Company2.jpg"/>
            </div>
            <li><Strong>Копирование компании</Strong>: ТАКОГО НЕТ;
            </li>

            <li><Strong>Изменение компании</Strong>: при включении полномочия откроется возможность вносить изменения в
                уже созданные
                карточки <Strong>Компаний</Strong>, на форме <Strong>Компании</Strong> появится кнопка
                <Strong>Сохранить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Company3.jpg"/>
            </div>
            <li><Strong>Экспорт компаний</Strong>: при включении полномочия в меню <Strong>Компании</Strong> появится
                кнопка <Strong>Экспорт компаний</Strong>;
            </li>
            <li><Strong>Импорт компаний</Strong>: при включении полномочия в меню <Strong>Компании</Strong> появится
                кнопка <Strong>Импорт компаний</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Company4.jpg"/>
            </div>
            <li><Strong>Договоры</Strong>: при включении полномочия в карточке <Strong>Компании</Strong> появится
                вкладка <Strong>Договоры</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Company5.jpg"/>
            </div>
        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Все компании</Strong>: пользователю в справочнике будут видны все созданные
                <Strong>Компании</Strong>;
            </li>
            <li><Strong>Все организационные единицы</Strong>: ЭТО ЧТО?</li>
            <li><Strong>Все организационные единицы компаний пользователя</Strong>: И ЭТО</li>
            <li><Strong>Удаленные компании</Strong>: НЕ РАБОТАЕТ, БЕЗ ВКЛЮЧЕНИЯ ПОЛНОМОЧИЯ Я ВИЖУ УДАЛЕННЫЕ КОМПАНИИ
            </li>

        </ul>

    </li>


    <li><Strong>Критичности</Strong>: блок предназначен для настройки доступа к пункту меню консоли администрирования
        <Strong>Настройки заявки -
            Критичности</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Criticality.html">Критичность
            заявки</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Critical.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание критичностей заявок</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Настройки заявки - Критичности</Strong> появится кнопка <Strong>Создать
                    критичность заявки</Strong>;
            </li>
            <li><Strong>Пункт административной панели - Критичности</Strong>: включение полномочия предоставляет доступ
                к
                меню
                консоли
                администрирования <Strong>Настройки заявки - Критичности</Strong>;
            </li>
            <li><Strong>Пересортировка критичностей заявок</Strong>: НЕ ПОНЯЛА ЧТО Это;
            </li>
            <li><Strong>Сохранение критичностей заявок</Strong>: при включении полномочия пользователю будет доступно
                редактрирование уже
                созданных <Strong>Критичностей</Strong> и их сохранение;
            </li>
            <li><Strong>Копирование критичностей заявок</Strong>: при включении полномочия в меню <Strong>Настройки
                заявки - Критичности</Strong> в
                контекстном меню (три точки) появится пункт<Strong> Копировать</Strong>;
            </li>


            <li><Strong>Удаление критичностей заявок</Strong>: при включении полномочия в меню <Strong>Настройки заявки
                - Критичности</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Critical2.jpg"/>
            </div>

        </ul>
    </li>


    <li><Strong>Материалы и склады</Strong>: блок предназначен для настройки доступа к работе с загрузкой материалов,
        просмотром расхода
        по материалам. Эти функции находятся в меню web-приложения <Strong>Склады</Strong>.

        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html">Загрузка
            материалов и создание складов</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Withdrawals.html">Расход
            материалов по заявке, отчет по расходу</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/SettingsWithMaterials.html">Настройки системы для работы с
            материалами</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Materials.jpg"/>
        </div>

        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт главного меню - Склады</Strong>: включение полномочия предоставляет доступ к
                меню <Strong>Склады</Strong> в мобильном и web-приложении;
            </li>
            <li><Strong>Пункт главного меню - Склады - Материалы</Strong>: включение полномочия предоставляет доступ к
                разделу <Strong>Материалы</Strong>, который находится в меню <Strong>Склады</Strong>. Обратите внимание!
                Для просмотра материалов,
                экспорта и импорта необходимо включить полномочие <Strong>Материалы и склады - Справочники - Все
                    склады</Strong> и
                настроить доступ пользователя к определенным складам, если это необходимо. Предоставить доступ к
                складам можно в карточке <Strong>Сотрудника</Strong> на вкладке <Strong>Квалификация</Strong>. Также
                данные настройки необходимы для
                добавления материалов в <Strong>Заявку</Strong> (вкладка <Strong>Выполнение</Strong>). Подробнее читайте
                в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html">Загрузка материалов и создание
                    складов</a>;
            </li>
            <li><Strong>Пункт главного меню - Склады - Расход</Strong>: полномочие предоставляет доступ к
                разделу <Strong>Расход</Strong> в меню <Strong>Склады</Strong>;
            </li>
            <li><Strong>Экспорта данных по складам и материалам</Strong>: при включении полномочия в меню <Strong>Склады
                - Материалы</Strong> появится
                кнопка <Strong>Экспорт материалов</Strong> для выгрузки материалов в файл Excel. Обратите внимание! Для
                просмотра
                материалов,
                экспорта и импорта необходимо включить полномочие <Strong>Материалы и склады - Справочники - Все
                    склады</Strong> и
                настроить доступ пользователя к определенным складам, если это необходимо. Предоставить доступ к
                складам можно в карточке <Strong>Сотрудника</Strong> на вкладке Квалификация. Подробнее читайте в
                статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html">Загрузка материалов и создание
                    складов</a>;
            </li>
            <li><Strong>Импорт материалов и складов</Strong>: при включении полномочия в меню <Strong>Склады - Материалы</Strong>
                появится кнопка <Strong>Импорт
                материалов</Strong>;
            </li>


            <li><Strong>Добавление материалов</Strong>: НЕ ПОНЯЛА, НА ЧТО ВЛИЯЕТ, ИМПОРТ РАБОТАЕТ БЕЗ ЭТОГО ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Копирование складов пользователя</Strong>: НЕ ПОНЯЛА, НА ЧТО ВЛИЯЕТ, ИМПОРТ РАБОТАЕТ БЕЗ ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Создание складов пользователя</Strong>: НЕ ПОНЯЛА, НА ЧТО ВЛИЯЕТ, ИМПОРТ РАБОТАЕТ БЕЗ ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Удаление складов пользователя</Strong>: НЕ ПОНЯЛА, НА ЧТО ВЛИЯЕТ, ИМПОРТ РАБОТАЕТ БЕЗ ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Сохранение складов пользователя</Strong>: НЕ ПОНЯЛА, НА ЧТО ВЛИЯЕТ, ИМПОРТ РАБОТАЕТ БЕЗ ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Все склады</Strong>: пользователь будет видеть все материалы на всех складах. Чтобы ограничить
                пользователя в
                работе со складами необходимо указать в карточке <Strong>Сотрудника</Strong> (на вкладке <Strong>Квалификаиция</Strong>)
                те склады, к
                которым у пользователя должен быть доступ. С этих же складов пользователь сможет указывать материалы в
                <Strong>Заявке</Strong> на вкладке <Strong>Выполнение</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/SettingsWithMaterials.html">Настройки системы для
                    работы с материалами</a>.;
            </li>
        </ul>
    </li>

    <li><Strong>Навыки</Strong>: БЛОК НЕ РАБОТАЕТ !!! БЛОК НАЧИНАЕТ ОТОБРАЖАТЬСЯ И РАБОТАТЬ КОГДА ВКЛЮЧЕНО ПОЛНОМОЧИЕ РОЛИ - ЭЛЕМЕНТЫ
        ИНТЕРФЕЙСА - ПУНКТ МЕНЮ РОЛИ

        блок предназначен для настройки доступа
        к пункту меню консоли администрирования <Strong>Структура предприятия - Навыки</Strong>.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Skills.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li>Пункт административной панели - Навыки: включение полномочия предоставляет доступ к
                меню консоли администрирования Структура предприятия - Навыки;
            </li>
            <li>Создание навыков: при включении полномочия в меню консоли
                администрирования Структура предприятия - Навыки появится кнопка Создать навык;
            </li>


            <li>Копирование навыков: при включении полномочия в меню Структура предприятия - Навыки в
                контекстном меню (три точки) появится пункт Копировать;
            </li>


            <li>Удаление критичностей заявок: при включении полномочия в меню Структура предприятия - Навыки в
                контекстном меню (три точки) появится пункт Удалить;
            </li>

            <li>Изменение навыков: ;
            </li>
        </ul>
    </li>


    <li id="object">Объекты: блок предназначен для настройки доступа к пункту меню web-приложения Объекты|Оборудование,
        а также для
        доступа к
        Объектам в мобильном приложении для подачи Заявок.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Object.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Публикация объекта: НЕ ВЛИЯЕТ НИ НА ЧТО, флажок Разрешить подавать заявки есть и без этого полномочия и
                установить его можно (при включении полномочия на создание объекта);
            </li>
            <li>Отмена публикации объекта: при включении полномочия на форме Объекта появится кнопка Снять с публикации.
                По Объекту снятому с публикации нельзя подавать Заявки;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object2.jpg"/>
            </div>
            <li>Пункт главного меню - Объекты|Оборудование: включение полномочия предоставляет доступ к
                меню web-приложения Объекты|Оборудование - Объекты|Оборудование;
            </li>

            <li>Удаление объекта: при включении полномочия в меню Объекты|Оборудование в
                контекстном меню (три точки) появится пункт Удалить и Удалить с вложенными объектами;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object3.jpg"/>
            </div>

            <li>Создание объекта: при включении полномочия в меню web-приложения Объекты|Оборудование появится кнопка
                Создать объект. Для того, чтобы в карточке Объекта появились поля для заполнения необходимо также
                включить полномочие Объекты - Элементы интерфейса - Изменения данных объекта;
            </li>

            <li>Копирование объекта: при включении полномочия в меню Объекты|Оборудование в
                контекстном меню (три точки) появится пункт Копировать;
            </li>

            <li>Изменения данных объекта: при включении полномочия откроется возможность вносить изменения в уже
                созданные
                карточки Объектов, а также заполнять поля при создании новых Объектов;
            </li>

            <li>Экспорт объектов: при включении полномочия в меню Объекты|Оборудование появится кнопка Экспорт объектов
                и оборудования;
            </li>
            <li>Импорт объектов: при включении полномочия в меню Объекты|Оборудование появится кнопка Импорт объектов и
                оборудования;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object4.jpg"/>
            </div>

        </ul>

        <p>Справочники:</p>
        <ul>
            <li>Все активные объекты: пользователю в справочнике будут видны все созданные объекты и оборудования;</li>
            <li>Удаленные объекты: пользователю станут доступны для работы Объекты, которые были удалены;</li>
            <li>Объекты на участках пользователя: пользователю будут достуны Объекты, у которых Участок совпадает с
                Участком пользователя. Участок устанавливается в карточке Объекта на вкладке Объекты|Оборудование, у
                Заказчика и Сотрудника на вкладке Квалификация. Такая настройка очень актуальна для разделения доступа к
                Объектам в разрезе Участков;
            </li>
            <li>Объекты у компаний пользователя: пользователю будут достуны Объекты, у которых Компания совпадает с
                Компанией пользователя. Компания-владелец устанавливается в карточке Объекта, у
                Заказчика на вкладке Общее, у Сотрудника на вкладке Трудоустройство. Такая настройка очень актуальна,
                например, для
                настрйоки роли Заказчика, чтобы ваши заказчики могли подавать Заявки только по своим Объектам;
            </li>
            <li>Компании и объекты, находящиеся на участке пользователя: НЕ ПОНЯЛА. У КОМПАНИЙ НЕТ УЧАСТКОВ, ПРО ОБЪЕКТЫ
                НА УЧАСТКЕ УЖЕ ЕСТЬ ПОЛНОМОЧИЕ.
            </li>
        </ul>

    </li>

    <li>Плановые заявки: блок предназначен для настройки доступа к пункту меню web-приложения Заявки - Планировщик
        работ.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание плановой заявки: при включении полномочия в меню web-приложения Заявки - Планировщик работ
                появится кнопка
                Создать заявку;
            </li>
            <li>Удаление плановой заявки: при включении полномочия в меню Заявки - Планировщик работ в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <li>Копирование плановой заявки: при включении полномочия в меню Заявки - Планировщик работ в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket2.jpg"/>
            </div>

            <li>Изменение плановой заявки: при включении полномочия откроется возможность вносить изменения в уже
                созданные
                плановые заявки;
            </li>

            <li>Активация плановой заявки: при включении полномочия в карточке Плановой заявки появится кнопка
                Запланировать;
            </li>
            <li>Приостановка плановой заявки: при включении полномочия в карточке Плановой заявки появится кнопка
                Приостановить. Эта кнопка необходима для отмены запланированных Заявок;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket3.jpg"/>
            </div>

            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket4.jpg"/>
            </div>
            </p>

            <li>Пункт главного меню - Плановые заявки: включение полномочия предоставляет доступ к
                меню web-приложения Заявки - Планировщик работ;
            </li>
            <li>Пункт главного меню - Планировщик заявок: ЧТО ЭТО?;
            </li>


        </ul>
    </li>

    <li>Пользователи и контакты: блок предназначен для настройки доступа к пункту меню web-приложения Пользователи для
        работы со справочниками Сотрудники и Заказчики.
        Также настройки блока необходимы для выбора исполнителей в Заявке, добавления пользователей в чат и т.д.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Users.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Пункт административной панели - Графики работ: НЕ ПОНЯЛА ГДЕ ГРАФИКИ;
            </li>
            <li>Пункт главного меню - Сотрудники: включение полномочия предоставляет доступ к
                меню web-приложения Пользователи - Сотрудники;
            </li>

            <li>Пункт главного меню - Заказчики: включение полномочия предоставляет доступ к
                меню web-приложения Пользователи - Заказчики;
            </li>

            <li>Пункт главного меню - Приглашения: включение полномочия предоставляет доступ к
                меню web-приложения Пользователи - Приглашения;
            </li>

            <li>Удаление сотрудников и заказчиков: при включении полномочия в меню Пользователи - Сотрудники и
                Пользователи - Заказчики в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users3.jpg"/>
            </div>

            <li>Создание сотрудников и заказчиков: при включении полномочия в меню Пользователи - Сотрудники появится
                кнопка Создать сотрудника, а в меню Пользователи - Заказчики появится кнопка Создать заказчика. Обратите
                внимание! Для заполнения полей карточки Сотрудника или Заказчика необходимо также включить полномочие
                Пользователи и контакты - Элементы интерфейса - Изменение данных сотрудника или заказчика;

            </li>

            <li>Создание приглашений: при включении полномочия в меню Пользователи - Приглашения появится кнопка Создать
                приглашение. Обратите внимание! для заполнения полей нового Приглашения необходимо включить полномочие
                Пользователи и контакты - Элементы интерфейса - Изменение приглашений;
            </li>

            <li>Удаление приглашений: при включении полномочия в меню Пользователи - Приглашения в
                контекстном меню (три точки) появится пункт Удалить;
            </li>

            <li>Копирование сотрудников и заказчиков: при включении полномочия в меню Пользователи - Сотрудники и
                Пользователи - Заказчики в
                контекстном меню (три точки) появится пункт Копировать;
            </li>

            <li>Изменение данных сотрудника или заказчика: полномочие позволяет вносить изменения в уже созданные
                карточки Сотрудников и Заказчиков, а также открывает доступ к полям при создании новых карточек;
            </li>

            <li>Копирование приглашений: при включении полномочия в меню Пользователи - Приглашения в
                контекстном меню (три точки) появится пункт Копировать;
            </li>

            <li>Изменение приглашений: полномочие позволяет вносить изменения в уже созданные
                карточки Сотрудников и Заказчиков, а также открывает доступ к полям при создании новых карточек;
            </li>

            <li>Экспорт сотрудников и заказчиков: при включении полномочия в меню Пользователи - Сотрудники появится
                кнопка Создать сотрудника, а в меню Пользователи - Заказчики появится кнопка Создать заказчика.
            </li>

            <li>Импорт сотрудников и заказчиков: при включении полномочия в меню Пользователи - Сотрудники появится
                кнопка Создать сотрудника, а в меню Пользователи - Заказчики появится кнопка Создать заказчика.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users4.jpg"/>
            </div>

            <li>Перевод сотрудника в заказчики: при включении полномочия в карточке Сотрудника в контекстном меню
                появится
                кнопка Перевести сотрудника к заказчикам;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users5.jpg"/>
            </div>
            <li>Перевод заказчика в сотрудники: при включении полномочия в карточке Заказчика в контекстном меню
                появится
                кнопка Перевести к сотрудникам; КНОПКИ НАЗВАНЫ В РАЗНЫХ СТИЛЯХ
            </li>


            <li>Добавление контактов: при включении данного полномочия в карточке Компании появится кнопка для
                добавления Контактного лица для связи;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users6.jpg"/>
            </div>

            <li>Удаление контактов: при включении данного полномочия в карточке Компании в списке контактных лиц
                появится кнопка Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users7.jpg"/>
            </div>
        </ul>

        <p>Справочники:</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Users2.jpg"/>
        </div>
        <ul>
            <li>Все пользователи: пользователю будут видны все созданные Сотрудники и Заказчики;</li>
            <li>Заблокированные пользователи: в справочниках Сотрудники и Заказчики будут отображаться заблокированные
                пользователи;
            </li>
            <li>Все пользователи внутри компании: пользователю будут достуны Сотрудники и Заказчики, у которых Компания
                совпадает с
                Компанией пользователя. Компания устанавливается в карточке Сотрудника на вкладке Трудоустройство, у
                Заказчика на вкладке Общее. Такая настройка актуальна, когда ведется учет по нескольким компаниям;
            </li>
            <li>Все пользователи на участках: пользователю будут достуны Сотрудники и Заказчики, у которых Участок
                совпадает с
                Участком пользователя. Участок устанавливается в карточке Сотрудника и Заказчика на вкладке
                Трудоустройство;
            </li>
            <li>Удаленные пользователи: ЭТО КАККИЕ?
            </li>
            <li>Операции над сервисными пользователями: ЧТО ЭТО?
            </li>
            <li>Созданные пользователи: А ЭТО К ЧЕМУ ДОСТУП?
            </li>
        </ul>

    </li>


    <li>Поля на форме заявки: блок предназначен для настройки доступа к пункту меню консоли администрирования Настройки
        заявки -
        Поля на форме заявки. Раздел предназначен для детального доступа к различным полям на форме Заявки в разрезе
        Стадий и Ролей. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки:
            настройка доступа к полям
            заявки</a>.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TicketFields.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>
                Пункт административной панели - Поля на форме заявки: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки - Поля на форме заявки;
            </li>
            <li>Сохранение настроек полей на форме заявки: НЕ РАБОТАЕТ ЭТО И СЛЕДУЮЩЕЕ! КНОПКА СОХРАНИТЬ ПОЯВЛЯЕТСЯ
                ТОЛЬКО ПРИ ВКЛЮЧЕНИИ ПОЛНОМОЧИЯ В ЖИЗНЕННОМ ЦИКЛЕ КАКАЯ СВЯЗЬ?; Обратите внимание! Для сохранения
                настроек полей также необходимо включить полномочие Жизненный цикл заявки - Элементы интерфейса -
                Сохранение жизненного цикла заявки.
            </li>
            <li>Сохранение настройки элементов интерфейса: ;
            </li>


        </ul>
    </li>

    <li>Автоматическое назначение заявок: блок предназначен для настройки доступа к пункту меню консоли
        администрирования Настройки заявки -
        Автоназначение исполнителя.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Rules.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>
                Пункт административной панели - Правила выбора исполнителя: НАЗЫВАЕТСЯ УЖЕ ПО-ДРУГОМУ включение
                полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки - Автоназначение исполнителя;
            </li>
            <li>Изменение правила выбора исполнителя: НЕ ВЛИЯЕТ НА ИЗМЕНЕНИЯ, Я МОГУ МЕНЯТЬ ПРАВИЛА БЕЗ ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>
            <li>Создание правила выбора исполнителя: при включении полномочия в меню web-приложения Настройки заявки -
                Автоназначение исполнителя появится кнопка
                Создать правило.
            </li>
            <li>Копирование правила выбора исполнителя: при включении полномочия в меню Настройки заявки -
                Автоназначение исполнителя в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление правила выбора исполнителя: при включении полномочия в меню Настройки заявки - Автоназначение
                исполнителя в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rules2.jpg"/>
            </div>
        </ul>
    </li>


    <li>Настройка рейтингов исполнителей: блок предназначен для настройки доступа к пункту меню консоли
        администрирования Настройки заявки -
        Автоназначение исполнителя.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Rating.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Кнопка исключения оценки исполнителя из рейтинга: НЕ НАШЛА ЧТО ЭТО;
            </li>
            <li>Пункт административной панели - Критерии рейтинга: НАЗЫВАЕТСЯ ПО-ДРУГОМУ включение
                полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки - Критерии оценки заявок;
            </li>

            <li>Сохранение критериев рейтинга: при включении полномочия на форме создания/редактирования Критерия
                рейтинга появится кнопка Сохранить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rating3.jpg"/>
            </div>
            <li>Создание критериев рейтинга: при включении полномочия в меню web-приложения Настройки заявки - Критерии
                оценки заявок появится кнопка
                Создать критерий.
            </li>
            <li>Копирование критериев рейтинга: при включении полномочия в меню Настройки заявки - Критерии оценки
                заявок в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление критериев рейтинга: при включении полномочия в меню Настройки заявки - Критерии оценки заявок в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rating2.jpg"/>
            </div>
        </ul>
    </li>


    <li>Роли: блок предназначен для настройки доступа к пункту меню консоли
        администрирования Администрирование - Роли.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Roles.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание ролей: при включении полномочия в меню Администрирование - Роли появится кнопка Добавить роль.
                Чтобы создать новую Роль и сохранить ее необходимо также включить полномочие Роли - Элементы интерфейса
                - Изменение ролей;
            </li>
            <li>Создание UI полномочий: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>

            <li>Пункт административной панели - Роли: включение полномочия предоставляет доступ к
                меню консоли администрирования Администрирование - Роли;
            </li>

            <li>Пункт административной панели - API полномочия ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>
            <li>Пункт административной панели - Дополнительные полномочия ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>
            <li>Пункт административной панели - UI полномочия ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>

            <li>Изменение ролей: при включении полномочия на форме создания/редактирования Ролей
                появится кнопка Сохранить;
            </li>

            <li>Изменение UI полномочий: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>
            <li>Удаление UI полномочий ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>
            <li>Копирование ролей: при включении полномочия в меню Администрирование - Роли в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление ролей: при включении полномочия в меню Администрирование - Роли в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <li>Копирование UI полномочий: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>

        </ul>

        <p>Справочники:</p>
        <ul>
            <li>Удаленные роли: пользователю будут доступны удаленные Роли в справочнике;
            </li>
            <li>Удаленные UI-полномочия: ЭТОГО ТОЖЕ НЕТ?
            </li>
            <li>Все роли: пользователю будут доступны все созданные Роли;
            </li>


        </ul>
    </li>


    <li>API полномочия: данный блок предназначен для настройки доступа к различным
        методам взаимодействия с данными. Например, для того, чтобы создать новый Объект не достаточно включить в блоке
        <Strong>Объекты - Создание объекта</Strong>, необходимо также включить настройку <Strong>API полномочия -
            Метод создания нового объекта</Strong>. Методов API в настройках большое количество, поэтому мы рекомендуем
        включать этот блок
        полностью для
        всех ролей.
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/ADMIN/Powers/API.jpg"/>
    </div>

    <li>Сообщения: блок предназначен для настройки доступа к пункту меню Сообщения, а также настройки чатов в Заявках
        для web- и мобильного приложения.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Messages.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Отправка сообщения по заявке: НЕ РАБОТАЕТ, СООБЩЕНИЯ ОТПРАВЛЯЮТСЯ ПРИ ВКЛЮЧЕННОМ ЧАТЕ;
            </li>
            <li>Кнопка отправки внутреннего сообщения по заявке: КАК ЭТО РАБОТАЕТ НЕ РАЗОБРАЛАСЬ
            </li>

            <li>Пункт главного меню - Сообщения: включение полномочия предоставляет доступ к
                меню web-приложения Сообщения; ДЛЯ МОБИЛЬНОГО НЕ РАБОТАЕТ, ТАМ ПУНКТ СООБЩЕНИЯ ВИДЕН ДАЖЕ ЕСЛИ ВЫКЛЮЧИТЬ
                ВЕСЬ БЛОК СООБЩЕНИЯ
            </li>

            <li>Просмотр списка участников в сообщениях: полномочие необходимо для работы со списком участников в Заявке
                на вкладке сообщения. При включении этого полномочия пользовтаель сможет добавлять и удалять участников
                в чаты. Для этого необходимо также включить полномочия Заявки - Элементы интерфейса - Добавление
                участника в список в сообщениях и Заявки - Элементы интерфейса - Удаление участника в список;
            </li>

            <li>Чат с заказчиками: пользователю будет доступен чат с Заказчиком в Заявке на вкладке Сообщения. В чате вы
                сможете отправлять сообщения и прикреплять файлы;
            </li>

            <li>Чат с сотрудниками: пользователю будет доступен чат с Сотрудниками в Заявке на вкладке Сообщения. В чате
                вы сможете отправлять сообщения и прикреплять файлы;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Messages2.jpg"/>
            </div>

        </ul>

        <p>Справочники:</p>
        <ul>
            <li>Сообщения с заказчиками по заявке: Я ИТАК ИХ ВИЖУ ПРИ ВКЛЮЧЕНИИ ЧАТА С ЗАКАЗЧИКАМИ??
            </li>
            <li>Операции над всеми сообщениями по доступным заявкам: А ЭТО ЧТО? НЕ ПОНЯЛА
            </li>
            <li>Сообщения по всем доступным заявкам: пользователю будут доступны сообщения по Заявкам, к котормы у него
                открыт доступ. Доступ к работе с Заявками настраивается в блоке полномочий Заявки. ССЫЛ КА НА БЛОК
                ПОЛНОМОЧИЙ
            </li>

        </ul>
    </li>

    <li>Стадии: блок предназначен для настройки доступа к пункту меню консоли администрирования Настройки заявки -
        Стадии заявки. Доступ к стадиям необходим для дальнейшей настройки жизненного цикла. САМ БЛОК НАЗЫВАЕТСЯ СТАДИИ,
        МЕНЮ СТАДИИ ЗАЯВКИ, ПРЕДЛАГАЮ В НАЗВАНИЕ БЛОКА ТОЖЕ ДОПИСАТЬ СТАДИИ ЗАЯВКИ, У СТАТУСОВ ТОЖЕ НАПИСАНО СТАТУСЫ
        ЗАЯВКИ
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Stage.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание стадий заявок: при включении полномочия в меню консоли
                администрирования Настройки заявки - Стадии заявки появится кнопка Создать стадию заявки; А ЗДЕСЬ ЧТОБ
                СОЗДАТЬ И ИЗМЕНИТЬ ПОЛЯ СТАДИИ НЕ НАДО ВКЛЮЧАТЬ ОТДЕЛЬНО ПОЛНОМОЧИЕ ДЛЯ ИЗМЕНЕНИЯ КАК ЭТО СДЕЛАНО
                ВЕЗДЕ!!
            </li>
            <li>Пункт административной панели - Стадии заявок: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки -
                Стадии заявки; РАЗНЫЕ ОКОНЧАНИЯ ЗАЯВОК ЗАЯВКИ
            </li>

            <li>Изменение стадий заявок: НЕ РАБОТАЕТ Я МОГУ ИЗМЕНИТЬ БЕЗ ЭТОГО ПОЛНОМОЧИЯ;
            </li>
            <li>Копирование стадий заявок: при включении полномочия в меню Настройки заявки -
                Стадии заявки в
                контекстном меню (три точки) появится пункт Копировать;
            </li>


            <li>Удаление стадий заявок: при включении полномочия в меню Настройки заявки -
                Стадии заявки в
                контекстном меню (три точки) появится пункт Удалить; ХОТЯ КНОПКА УДАЛИТЬ ДОСТУПНА В КАРТОЧКЕ СТАДИИ БЕЗ
                ЭТОГО ПОЛНОМОЧИЯ
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Stage2.jpg"/>
            </div>

        </ul>
    </li>

    <li>Статусы заявки: блок предназначен для настройки доступа к пункту меню консоли администрирования Настройки заявки
        - Статусы заявки.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Status.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание статусов заявок: при включении полномочия в меню консоли
                администрирования Настройки заявки - Статусы заявки появится кнопка Создать статус заявки; А ЗДЕСЬ ЧТОБ
                СОЗДАТЬ И ИЗМЕНИТЬ ПОЛЯ СТАДИИ НЕ НАДО ВКЛЮЧАТЬ ОТДЕЛЬНО ПОЛНОМОЧИЕ ДЛЯ ИЗМЕНЕНИЯ КАК ЭТО СДЕЛАНО
                ВЕЗДЕ!!
            </li>
            <li>Пункт административной панели - Статусы заявок: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки -
                Статусы заявки; РАЗНЫЕ ОКОНЧАНИЯ ЗАЯВОК ЗАЯВКИ
            </li>

            <li>Пересортировка статусов заявок: ЧТО ЭТО
            </li>
            <li>Сохранение статусов заявок: при включении полномочия на форме создания статуса появится кнопка
                Сохранить;
            </li>
            <li>Копирование статусов заявок: при включении полномочия в меню Настройки заявки -
                Статусы заявки в
                контекстном меню (три точки) появится пункт Копировать;
            </li>


            <li>Удаление статусов заявок: при включении полномочия в меню Настройки заявки -
                Статусы заявки в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Status2.jpg"/>
            </div>

        </ul>
    </li>


    <li>Теги: ЭТО ЧТО???</li>

    <li>Типы заявки: блок предназначен для настройки доступа к пункту меню консоли администрирования Настройки заявки
        - Типы заявок. ТИПЫ ЗАЯВКИ ТИПЫ ЗАЯВОК-ОПЯТЬ БЕДА С ОКОНЧАНИЯМИ
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Type.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание типов заявок: при включении полномочия в меню консоли
                администрирования Настройки заявки - Типы заявок появится кнопка Создать тип заявки;
            </li>
            <li>Пункт административной панели - Типы заявок: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки заявки -
                Типы заявок; РАЗНЫЕ ОКОНЧАНИЯ ТИП ТИПЫ
            </li>

            <li>Изменение типов заявок: при включении полномочия на форме создания типа появится кнопка Сохранить, а
                также вы сможете изменять уже созданные Типы заявок;
            </li>
            <li>Копирование типов заявок: при включении полномочия в меню Настройки заявки -
                Типы заявок в
                контекстном меню (три точки) появится пункт Копировать;
            </li>


            <li>Удаление типов заявок: при включении полномочия в меню Настройки заявки -
                Типы заявок в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Type2.jpg"/>
            </div>

        </ul>
    </li>

    <li>Типы объектов: блок предназначен для настройки доступа к пункту меню консоли администрирования Структура
        предприятия - Типы оборудования. РАЗНЫЕ НАЗВАНИЯ
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TypeObject.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание типов объектов: при включении полномочия в меню консоли
                администрирования Структура предприятия - Типы оборудования появится кнопка Создать тип оборудования;
            </li>
            <li>Пункт административной панели - Типы объектов: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Структура предприятия -
                Типы оборудования; РАЗНЫЕ ОКОНЧАНИЯ ТИП ТИПЫ
            </li>

            <li>Сохранение типов объектов: при включении полномочия на форме создания Типа оборудования появится кнопка
                Сохранить, а также вы сможете изменять уже созданные Типы оборудования;
            </li>
            <li>Копирование типов объектов: при включении полномочия в меню Структура предприятия -
                Типы оборудования в
                контекстном меню (три точки) появится пункт Копировать;
            </li>


            <li>Удаление типов объектов: при включении полномочия в меню Структура предприятия -
                Типы оборудования в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/TypeObject2.jpg"/>
            </div>

        </ul>
    </li>

    <li>Настройка уведомлений: блок предназначен для настройки доступа к пункту меню консоли администрирования Настройки
        оповещений. РАЗНЫЕ НАЗВАНИЯ
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Notification.jpg"/>
        </div>

        <p>Элементы интерфейса:</p>
        <ul>
            <li>Пункт административной панели - Триггеры уведомлений: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки оповещений - Триггеры уведомлений для настройки событий для получения
                уведомлений;
            </li>
            <li>Пункт административной панели - Шаблоны уведомлений: ЭТО ЧТО ТАКОЕ?
            </li>

            <li>Изменение триггеров уведомлений: при включении полномочия в меню Настройки оповещений - Триггеры
                уведомлений на форме создания/редактирования триггера станет доступна кнопка Сохранить, а также
                пользователь сможет изменять уже
                существующие триггеры;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification2.jpg"/>
            </div>
            <li>Создание триггеров уведомлений: при включении полномочия в меню Настройки оповещений - Триггеры
                уведомлений появится кнопка Создать триггер уведомлений, а также вы сможете изменять уже созданные Типы
                оборудования;
            </li>
            <li>Копирование триггеров уведомлений: при включении полномочия в меню Настройки оповещений - Триггеры
                уведомлений в
                контекстном меню (три точки) появится пункт Копировать;
            </li>

            <li>Удаление триггеров уведомлений: при включении полномочия в меню Настройки оповещений - Триггеры
                уведомлений в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification3.jpg"/>
            </div>

            <li>Пункт административной панели - Правила выбора получателя: включение полномочия предоставляет доступ к
                меню
                консоли
                администрирования Настройки оповещений - Правила выбора получателя. В этом меню вы можете создать
                правила, по которым определенные пользователи будут получать уведосления;
            </li>

            <li>Кнопка сохранения изменения правила выбора получателя: при включении полномочия в меню Настройки
                оповещений - Правила выбора получателя на форме правила станет доступна кнопка Сохранить, а также
                пользователь сможет изменять уже
                существующие триггеры; СЛОВО ИЗМЕНЕНИЯ ПРИСУТСТВУЕТ ЗДЕСЬ И В КАЖДОЙ СЛЕДУЮЩЕЙ СТРОЧКЕ - СТРАННО
            </li>
            <li>Кнопка создания изменения правила выбора получателя: при включении полномочия в меню Настройки
                оповещений - Правила выбора получателя появится кнопка Создать правило выбора;
            </li>
            <li>Кнопка копирования изменения правила выбора получателя: при включении полномочия в меню Настройки
                оповещений - Правила выбора получателя в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Кнопка удаления изменения правила выбора получателя: при включении полномочия в меню Настройки
                оповещений - Правила выбора получателя в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification4.jpg"/>
            </div>

        </ul>
    </li>

    <li>Участки: блок предназначен для настройки доступа к пункту меню консоли администрирования Структура предприятия -
        Участки, а также доступа к Участкам из карточек Сотрудника, Заказчика, Объекта и т.д.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Places.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>

            <li>Пункт административной панели - Участки: включение полномочия предоставляет доступ к
                меню консоли администрирования Структура предприятия -
                Участки;
            </li>

            <li>Сохранение участков: при включении полномочия на форме создания/редактирования участка появится кнопка
                Сохранить, также пользователь сможет редактировать уже созданные Участки;
            </li>

            <li>Создание участков: при включении полномочия в меню консоли администрирования Структура предприятия -
                Участки появится кнопка Создать участок;
            </li>

            <li>Копирование участков: при включении полномочия в меню Структура предприятия -
                Участки в контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление участков: при включении полномочия в меню Структура предприятия -
                Участки в контекстном меню (три точки) появится пункт Удалить;
            </li>
            <li>Пресортировка участков: ЧТО ЭТО???
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Places2.jpg"/>
            </div>

        </ul>

        <p>Справочники:</p>
        <ul>
            <li>Все участки: пользователю будут доступны все созданные Участки для выбора при создании Сотрудников,
                Заказчиков, Типов заявок, Объектов.
            </li>
            <li>Вложенные участки: А ЭТО ЧТО? НЕ ПОНЯЛА
            </li>


        </ul>
    </li>

    <li>Файлы: КАК РАБОТАЕТ? Я МОГУ ФАЙЛЫ В ЗАЯВКУ ПРИКРЕПЛЯТЬ БЕЗ ЭТОГО БЛОКА
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ЧЧЧЧЧЧЧЧЧЧЧЧЧЧ.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>

            <li>Кнопка добавления фото из галереи
            </li>

            <li>Ограничение доступа к файлам
            </li>

        </ul>

        <p>Справочники:</p>
        <ul>
            <li>Операции над любыми вложенными файлами
            </li>
            <li>Удаленные вложенные файлы
            </li>


        </ul>
    </li>


    <li>Чек-листы: блок предназначен для настройки доступа к пункту web-приложения Чек-листы.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/CheckList.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>

            <li>Пункт главного меню - Чек листы: включение полномочия предоставляет доступ к
                меню web-приложения Чек-листы;
            </li>


            <li>Создание чек-листов: при включении полномочия в меню Чек-листы появится кнопка Создать чек-лист;
            </li>

            <li>Удаление чек-листов: при включении полномочия в меню Структура предприятия -
                Участки в контекстном меню (три точки) появится пункт Удалить;
            </li>

            <li>Копирование чек-листов: при включении полномочия в меню Структура предприятия -
                Участки в контекстном меню (три точки) появится пункт Копировать;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/CheckList2.jpg"/>
            </div>

            <li>Изменение чек-листов: при включении полномочия на форме создания/редактирования участка появится кнопка
                Сохранить, также пользователь сможет редактировать уже созданные Чек-листы;
            </li>

            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/.jpg"/>
            </div>

        </ul>


    </li>

    <li>Шаблоны объектов: блок предназначен для настройки доступа к пункту web-приложения Объекты|Оборудование - Шаблон
        объектов и оборудования.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TemplateObj.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>

            <li>Пункт главного меню - Шаблоны объектов: включение полномочия предоставляет доступ к
                меню web-приложения Объекты|Оборудование - Шаблон объектов и оборудования; НЕ РАБОТАЕТ ДЛЯ МОБИЛЬНОГО
                ПРИЛОЖЕНИЯ, Я МОГУ СОЗДАВАТЬ НОВЫЕ ОБЪЕКТЫ ПО ШАБЛОНАМ БЕЗ ПОДКЛЮЧЕНИЯ ЭТОГО БЛОКА
            </li>


            <li>Создание шаблона объекта: при включении полномочия в меню Чек-листы появится кнопка Создать шаблон;
            </li>

            <li>Удаление шаблона объекта: при включении полномочия в меню Объекты|Оборудование - Шаблон объектов и
                оборудования в контекстном меню (три точки) появится пункт Удалить;
            </li>

            <li>Копирование шаблона объекта: при включении полномочия в меню Объекты|Оборудование - Шаблон объектов и
                оборудования в контекстном меню (три точки) появится пункт Копировать;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/TemplateObj2.jpg"/>
            </div>

            <li><Strong>Изменение шаблона объекта</Strong>: при включении полномочия на форме создания/редактирования
                шаблона появится
                кнопка <Strong>Сохранить</Strong>, также пользователь сможет редактировать уже созданные <Strong>Шаблоны
                    объектов</Strong>.
            </li>


        </ul>


    </li>


</ol>


</body>

### Следующие шаги:
- [Настройка участков](./Places.md)
- [Типы оборудования](./ObjectsType.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
