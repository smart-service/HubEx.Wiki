---
title:
description:
keywords: роль, полномочия, hubex, хабекс, хубекс, хабикс
---
<!--текущая статья - это копия статьи о полномочиях с отметками/вопросами по непонятным полномочиям-->
#### Полномочия роли

<html>
<meta charset="utf-8">

</html>

<body>
<p>Для настройки доступа к различному функционалу, работы с определенными данными в HubEx используются <Strong>Роли</Strong>. Для каждой
    <Strong>Роли</Strong> в консоли администрирования
    в меню <Strong>Администрирование - Роли</Strong> можно задать набор полномочий (разрешений). Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.</p>
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
            <p><a href="#QR">QR</a></p>
            <p><a href="#analytic">Аналитика</a></p>
            <p><a href="#worktype">Виды работ</a></p>
            <p><a href="#works">Выполненные работы и стоимости</a></p>
            <p><a href="#addfields">Дополнительные поля</a></p>
            <p><a href="#other">Другие</a></p>
            <p><a href="#lifecycle">Жизненный цикл заявки</a></p>
            <p><a href="#tickets">Заявки</a></p>
            <p><a href="#integration">Интеграция</a></p>
            <p><a href="#mailintegration">Интеграция по электронной почте</a></p>
            <p><a href="#calendar">Календарь</a></p>
            <p><a href="#map">Карты</a></p>
        </td>
        <td width="300">

            <p><a href="#objectclass">Классы объекта</a></p>
            <p><a href="#company">Компании</a></p>
            <p><a href="#critical">Критичности</a></p>
            <p><a href="#materials">Материалы и склады</a></p>
            <p><a href="#skills">Навыки</a></p>
            <p><a href="#object">Объекты</a></p>
            <p><a href="#planticket">Плановые заявки</a></p>
            <p><a href="#users">Пользователи и контакты</a></p>
            <p><a href="#ticketfields">Поля на форме заявки</a></p>
            <p><a href="#rules">Автоматическое назначение заявок</a></p>
            <p><a href="#rating">Настройка рейтингов исполнителей</a></p>
            <p><a href="#roles">Роли</a></p>
        </td>
        <td width="300">

            <p><a href="#api">API полномочия</a></p>
            <p><a href="#messages">Сообщения</a></p>
            <p><a href="#stage">Стадии</a></p>
            <p><a href="#status">Статусы заявки</a></p>
            <p><a href="#tags">Теги</a></p>
            <p><a href="#tickettype">Типы заявки</a></p>
            <p><a href="#objecttype">Типы объектов</a></p>
            <p><a href="#notification">Настройка уведомлений</a></p>
            <p><a href="#places">Участки</a></p>
            <p><a href="#files">Файлы</a></p>
            <p><a href="#checklist">Чек-листы</a></p>
            <p><a href="#objecttemplate">Шаблоны объектов</a></p>
        </td>
    </tr>
</table>

<ol>
    <li id="QR"><Strong>QR</Strong>: данный блок отвечает за настройку доступа к работе с QR-кодами и шаблонами заявок
        (меню
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


    <li id="analytic"><Strong>Аналитика</Strong>: данный блок отвечает за настройку доступа к работе с меню
        web-приложения <Strong>Аналитика</Strong>.
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
            <li><Strong>Отчет по сотрудникам</Strong>: полномочие отвечает за доступ к <Strong>Отчету по
                сотрудникам</Strong> в меню <Strong>Аналитика</Strong>. Подробнее читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/user/EngineersAnalitics.html">Отчет по сотрудникам</a>;
            </li>
            <li><Strong>Мои отчеты</Strong>: полномочие отвечает за доступ к печатным формам <Strong>Сервисного
                акта</Strong>, <Strong>Акта выполненных работ</Strong> и
                <Strong>Счета на оплату</Strong>.
            </li>
        </ul>

    </li>

    <li id="worktype"><Strong>Виды работ</Strong>: данный блок предназначен для настройки доступа к работе с меню
        консоли
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

    <li id="works"><Strong>Выполненные работы и стоимости</Strong>: данный блок предназначен для стоимостного учета
        выполненных
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


    <li id="addfields"><Strong>Дополнительные поля</Strong>: данный блок предназначен для настройки доступа к работе с
        дополнительными
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


    <li id="other"><Strong>Другие</Strong>: ЧТО ЭТО??.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ADDFields.jpg"/>
        </div>
        <p><Strong>API полномочия:</Strong></p>
        <ul>
            <li>Метод получения списка доступных атрибутов SLA: ЧТО ДЕЛАЕТ??;</li>

        </ul>
    </li>

    <li id="lifecycle"><Strong>Жизненный цикл заявки</Strong>: данный блок предназначен для настройки доступа к работе
        с меню консоли
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

    <li id="tickets"><Strong>Заявки</Strong>: данный блок предназначен для настройки работы с меню <Strong>Заявки - Все
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
                <Strong>Заявки - Все заявки
                </Strong>;
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
                полномочий в блоке <a href="#object"><Strong>Объекты - Справочники</Strong></a>. В зависимости от того,
                к
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


    <li id="integration"><Strong>Интеграция</Strong>: данный блок предназначен для настройки доступа к разделам меню
        консоли
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

    <li id="mailintegration"><Strong>Интеграция по эл. почте</Strong>: блок предназначен для настройки доступа к меню
        консоли
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


    <li id="calendar"><Strong>Календарь</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
        <Strong>Заявки
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

    <li id="map"><Strong>Карты</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
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

    <li id="objectclass"><Strong>Классы объекта</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования
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


    <li id="company"><Strong>Компании</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
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


    <li id="critical"><Strong>Критичности</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования
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


    <li id="materials"><Strong>Материалы и склады</Strong>: блок предназначен для настройки доступа к работе с загрузкой
        материалов,
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
            <li><Strong>Импорт материалов и складов</Strong>: при включении полномочия в меню <Strong>Склады -
                Материалы</Strong>
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

    <li id="skills"><Strong>Навыки</Strong>: БЛОК НЕ РАБОТАЕТ !!! БЛОК НАЧИНАЕТ ОТОБРАЖАТЬСЯ И РАБОТАТЬ КОГДА ВКЛЮЧЕНО
        ПОЛНОМОЧИЕ
        РОЛИ - ЭЛЕМЕНТЫ
        ИНТЕРФЕЙСА - ПУНКТ МЕНЮ РОЛИ

        блок предназначен для настройки доступа
        к пункту меню консоли администрирования <Strong>Структура предприятия - Навыки</Strong>.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Skills.html">Навыки</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Skills.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Навыки</Strong>: включение полномочия предоставляет доступ к
                меню консоли администрирования <Strong>Структура предприятия - Навыки</Strong>;
            </li>
            <li><Strong>Создание навыков</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Структура предприятия - Навыки</Strong> появится кнопка <Strong>Создать
                    навык</Strong>;
            </li>


            <li><Strong>Копирование навыков</Strong>: при включении полномочия в меню <Strong>Структура предприятия -
                Навыки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>


            <li>Удаление навыков: при включении полномочия в меню <Strong>Структура предприятия - Навыки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Изменение навыков</Strong>: при включении полномочия пользователю будут доступны поля на форме
                создания/редактирования <Strong>Навыка</Strong>, а также доступно изменение уже созданных <Strong>Навыков</Strong>;
            </li>
        </ul>
    </li>


    <li id="object"><Strong>Объекты</Strong>: блок предназначен для настройки доступа к пункту меню web-приложения
        <Strong>Объекты|Оборудование</Strong>,
        а также для
        доступа к
        <Strong>Объектам</Strong> в мобильном приложении для подачи <Strong>Заявок</Strong>.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание
            обслуживаемого оборудования</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Object.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Публикация объекта</Strong>: НЕ ВЛИЯЕТ НИ НА ЧТО, флажок Разрешить подавать заявки есть и без
                этого полномочия и
                установить его можно (при включении полномочия на создание объекта);
            </li>
            <li><Strong>Отмена публикации объекта</Strong>: при включении полномочия на форме <Strong>Объекта</Strong>
                появится кнопка <Strong>Снять с публикации</Strong>.
                По <Strong>Объекту</Strong> снятому с публикации нельзя подавать <Strong>Заявки</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object2.jpg"/>
            </div>
            <li><Strong>Пункт главного меню - Объекты|Оборудование</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Объекты|Оборудование - Объекты|Оборудование</Strong>;
            </li>

            <li><Strong>Удаление объекта</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудовани</Strong>е
                в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong> и <Strong>Удалить с вложенными
                    объектами</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object3.jpg"/>
            </div>

            <li><Strong>Создание объекта</Strong>: при включении полномочия в меню web-приложения <Strong>Объекты|Оборудование</Strong>
                появится кнопка
                <Strong>Создать объект</Strong>. Для того, чтобы в карточке Объекта появились поля для заполнения
                необходимо также
                включить полномочие <Strong>Объекты - Элементы интерфейса - Изменения данных объекта</Strong>;
            </li>

            <li><Strong>Копирование объекта</Strong>: при включении полномочия в меню
                <Strong>Объекты|Оборудование</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копироват</Strong>ь;
            </li>

            <li><Strong>Изменения данных объекта</Strong>: при включении полномочия откроется возможность вносить
                изменения в уже
                созданные
                карточки <Strong>Объектов</Strong>, а также заполнять поля при создании новых <Strong>Объектов</Strong>;
            </li>

            <li><Strong>Экспорт объектов</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудование</Strong>
                появится кнопка <Strong>Экспорт объектов
                    и оборудования</Strong>;
            </li>
            <li><Strong>Импорт объектов</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудование</Strong>
                появится кнопка <Strong>Импорт объектов и
                    оборудования</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Object4.jpg"/>
            </div>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Все активные объекты</Strong>: пользователю в справочнике будут видны все созданные <Strong>Объекты</Strong>
                и <Strong>Оборудования</Strong>;
            </li>
            <li><Strong>Удаленные объекты</Strong>: пользователю станут доступны для работы <Strong>Объекты</Strong>,
                которые были удалены;
            </li>
            <li><Strong>Объекты на участках пользователя</Strong>: пользователю будут достуны Объекты, у которых
                <Strong>Участок</Strong> совпадает с
                <Strong>Участком</Strong> пользователя. <Strong>Участок</Strong> устанавливается в карточке <Strong>Объекта</Strong>
                на вкладке <Strong>Объекты|Оборудование</Strong>, у
                <Strong>Заказчика</Strong> и <Strong>Сотрудника</Strong> на вкладке <Strong>Квалификация</Strong>. Такая
                настройка очень актуальна для разделения доступа к
                <Strong>Объектам</Strong> в разрезе <Strong>Участков</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>;
            </li>
            <li><Strong>Объекты у компаний пользователя</Strong>: пользователю будут достуны <Strong>Объект</Strong>ы, у
                которых <Strong>Компания-владелец</Strong> совпадает с
                <Strong>Компанией</Strong> пользователя. <Strong>Компания-владелец</Strong> устанавливается в карточке
                <Strong>Объекта</Strong>, в карточке
                <Strong>Заказчика</Strong> на вкладке <Strong>Общее</Strong>, в карточке <Strong>Сотрудника</Strong> на
                вкладке <Strong>Трудоустройство</Strong>. Такая настройка очень актуальна,
                например, для
                настрйоки роли <Strong>Заказчика</Strong>, чтобы ваши заказчики могли подавать <Strong>Заявки</Strong>
                только по своим <Strong>Объектам</Strong>;
            </li>
            <li><Strong>Компании и объекты, находящиеся на участке пользователя</Strong>: НЕ ПОНЯЛА. У КОМПАНИЙ НЕТ
                УЧАСТКОВ, ПРО ОБЪЕКТЫ
                НА УЧАСТКЕ УЖЕ ЕСТЬ ПОЛНОМОЧИЕ.
            </li>
        </ul>

    </li>

    <li id="planticket"><Strong>Плановые заявки</Strong>: блок предназначен для настройки доступа к пункту меню
        web-приложения Заявки - Планировщик
        работ.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/PlannedTickets.html">Создание
            плановой заявки</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание плановой заявки</Strong>: при включении полномочия в меню web-приложения <Strong>Заявки
                - Планировщик работ</Strong>
                появится кнопка
                <Strong>Создать заявку</Strong>;
            </li>
            <li><Strong>Удаление плановой заявки</Strong>: при включении полномочия в меню <Strong>Заявки - Планировщик
                работ</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <li><Strong>Копирование плановой заявки</Strong>: при включении полномочия в меню <Strong>Заявки -
                Планировщик работ</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/PlanTicket2.jpg"/>
            </div>

            <li><Strong>Изменение плановой заявки</Strong>: при включении полномочия откроется возможность вносить
                изменения в уже
                созданные
                плановые заявки;
            </li>

            <li><Strong>Активация плановой заявки</Strong>: при включении полномочия в карточке <Strong>Плановой
                заявки</Strong> появится кнопка
                <Strong>Запланировать</Strong>;
            </li>
            <li><Strong>Приостановка плановой заявки</Strong>: при включении полномочия в карточке <Strong>Плановой
                заявки</Strong> появится кнопка
                <Strong>Приостановить</Strong>. Эта кнопка необходима для отмены запланированных <Strong>Заявок</Strong>;
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

            <li><Strong>Пункт главного меню - Плановые заявки</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Заявки - Планировщик работ</Strong>;
            </li>
            <li><Strong>Пункт главного меню - Планировщик заявок</Strong>: ЧТО ЭТО?;
            </li>


        </ul>
    </li>

    <li id="users"><Strong>Пользователи и контакты</Strong>: блок предназначен для настройки доступа к пункту меню
        web-приложения <Strong>Пользователи</Strong> для
        работы со справочниками <Strong>Сотрудники</Strong> и <Strong>Заказчики</Strong>.
        Также настройки блока необходимы для выбора исполнителей в <Strong>Заявке</Strong>, добавления пользователей в
        чат и т.д.
        <p>Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание
            пользователя вашей системы</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание
            заказчика</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Users.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Графики работ</Strong>: НЕ ПОНЯЛА ГДЕ ГРАФИКИ;
            </li>
            <li><Strong>Пункт главного меню - Сотрудники</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Пользователи - Сотрудники</Strong>;
            </li>

            <li><Strong>Пункт главного меню - Заказчики</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Пользователи - Заказчики</Strong>;
            </li>

            <li><Strong>Пункт главного меню - Приглашения</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Пользователи - Приглашения</Strong>;
            </li>

            <li><Strong>Удаление сотрудников и заказчиков</Strong>: при включении полномочия в меню <Strong>Пользователи
                - Сотрудники</Strong> и
                <Strong>Пользователи - Заказчики</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users3.jpg"/>
            </div>

            <li><Strong>Создание сотрудников и заказчиков</Strong>: при включении полномочия в меню <Strong>Пользователи
                - Сотрудники</Strong> появится
                кнопка <Strong>Создать сотрудника</Strong>, а в меню <Strong>Пользователи - Заказчики</Strong> появится
                кнопка <Strong>Создать заказчика</Strong>. Обратите
                внимание! Для заполнения полей карточки <Strong>Сотрудника</Strong> или <Strong>Заказчика</Strong>
                необходимо также включить полномочие
                <Strong>Пользователи и контакты - Элементы интерфейса - Изменение данных сотрудника или
                    заказчика</Strong>;

            </li>

            <li><Strong>Создание приглашений</Strong>: при включении полномочия в меню <Strong>Пользователи -
                Приглашения</Strong> появится кнопка <Strong>Создать
                приглашение</Strong>. Обратите внимание! Для заполнения полей нового <Strong>Приглашения</Strong>
                необходимо включить полномочие
                <Strong> Пользователи и контакты - Элементы интерфейса - Изменение приглашений</Strong>;
            </li>

            <li><Strong>Удаление приглашений</Strong>: при включении полномочия в меню <Strong>Пользователи -
                Приглашения</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Копирование сотрудников и заказчиков</Strong>: при включении полномочия в меню <Strong>Пользователи
                - Сотрудники</Strong> и
                <Strong>Пользователи - Заказчики</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Изменение данных сотрудника или заказчика</Strong>: полномочие позволяет вносить изменения в уже
                созданные
                карточки <Strong>Сотрудников</Strong> и <Strong>Заказчиков</Strong>, а также открывает доступ к полям
                при создании новых карточек;
            </li>

            <li><Strong>Копирование приглашений</Strong>: при включении полномочия в меню <Strong>Пользователи -
                Приглашения</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Изменение приглашений</Strong>: полномочие позволяет вносить изменения в уже созданные
                карточки <Strong>Сотрудников</Strong> и <Strong>Заказчиков</Strong>, а также открывает доступ к полям
                при создании новых карточек;
            </li>

            <li><Strong>Экспорт сотрудников и заказчиков</Strong>: при включении полномочия в меню <Strong>Пользователи
                - Сотрудники</Strong> появится
                кнопка <Strong>Экспорт сотрудников</Strong>, а в меню <Strong>Пользователи - Заказчики</Strong> появится
                кнопка <Strong>Экспорт заказчиков</Strong>.
            </li>

            <li><Strong>Импорт сотрудников и заказчиков</Strong>: при включении полномочия в меню <Strong>Пользователи -
                Сотрудники</Strong> появится
                кнопка <Strong>Импорт сотрудников</Strong>, а в меню <Strong>Пользователи - Заказчики</Strong> появится
                кнопка<Strong> Импорт заказчиков</Strong>.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users4.jpg"/>
            </div>

            <li><Strong>Перевод сотрудника в заказчики</Strong>: при включении полномочия в карточке
                <Strong>Сотрудника</Strong> в контекстном меню
                появится
                кнопка <Strong>Перевести сотрудника к заказчикам</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users5.jpg"/>
            </div>
            <li><Strong>Перевод заказчика в сотрудники</Strong>: при включении полномочия в карточке
                <Strong>Заказчика</Strong> в контекстном меню
                появится
                кнопка <Strong>Перевести к сотрудникам</Strong>; КНОПКИ НАЗВАНЫ В РАЗНЫХ СТИЛЯХ
            </li>


            <li><Strong>Добавление контактов</Strong>: при включении данного полномочия в карточке
                <Strong>Компании</Strong> появится кнопка для
                добавления <Strong>Контактного лица</Strong> для связи;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users6.jpg"/>
            </div>

            <li><Strong>Удаление контактов</Strong>: при включении данного полномочия в карточке Компании в списке
                контактных лиц
                появится кнопка <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Users7.jpg"/>
            </div>
        </ul>

        <p><Strong>Справочники:</Strong></p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Users2.jpg"/>
        </div>
        <ul>
            <li><Strong>Все пользователи</Strong>: пользователю будут видны все созданные <Strong>Сотрудники</Strong> и
                <Strong>Заказчики</Strong>;
            </li>
            <li>Заблокированные пользователи: в справочниках <Strong>Сотрудники</Strong> и <Strong>Заказчики</Strong>
                будут отображаться заблокированные
                пользователи;
            </li>
            <li><Strong>Все пользователи внутри компании</Strong>: пользователю будут достуны
                <Strong>Сотрудники</Strong> и <Strong>Заказчики</Strong>, у которых <Strong>Компания</Strong>
                совпадает с
                <Strong> Компанией</Strong> пользователя. <Strong>Компания</Strong> устанавливается в карточке <Strong>Сотрудника</Strong>
                на вкладке <Strong>Трудоустройство</Strong>, у
                <Strong>Заказчика</Strong> на вкладке<Strong> Общее</Strong>. Такая настройка актуальна, когда ведется
                учет по нескольким компаниям;
            </li>
            <li><Strong>Все пользователи на участках</Strong>: пользователю будут достуны <Strong>Сотрудники</Strong> и
                <Strong>Заказчики</Strong>, у которых <Strong>Участок</Strong>
                совпадает с
                <Strong>Участком</Strong> пользователя. <Strong>Участок</Strong> устанавливается в карточке <Strong>Сотрудника</Strong>
                и <Strong>Заказчика</Strong> на вкладке
                <Strong>Трудоустройство</Strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>;
            </li>
            <li><Strong>Удаленные пользователи</Strong>: ЭТО КАККИЕ?
            </li>
            <li><Strong>Операции над сервисными пользователями</Strong>: ЧТО ЭТО?
            </li>
            <li><Strong>Созданные пользователи</Strong>: А ЭТО К ЧЕМУ ДОСТУП?
            </li>
        </ul>

    </li>


    <li id="ticketfields"><Strong>Поля на форме заявки</Strong>: блок предназначен для настройки доступа к пункту меню
        консоли администрирования <Strong>Настройки
            заявки -
            Поля на форме заявки</Strong>. Раздел предназначен для детального доступа к различным полям на форме
        <Strong>Заявки</Strong> в разрезе
        <Strong>Стадий заявки</Strong> и <Strong>Ролей</Strong>.
        <p>Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки:
            настройка доступа к полям
            заявки</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TicketFields.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Поля на форме заявки</Strong>: включение полномочия
                предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Настройки заявки - Поля на форме заявки</Strong>;
            </li>
            <li><Strong>Сохранение настроек полей на форме заявки</Strong>: НЕ РАБОТАЕТ ЭТО И СЛЕДУЮЩЕЕ! КНОПКА
                СОХРАНИТЬ ПОЯВЛЯЕТСЯ
                ТОЛЬКО ПРИ ВКЛЮЧЕНИИ ПОЛНОМОЧИЯ В ЖИЗНЕННОМ ЦИКЛЕ КАКАЯ СВЯЗЬ?; Обратите внимание! Для сохранения
                настроек полей также необходимо включить полномочие <Strong>Жизненный цикл заявки - Элементы интерфейса
                    -
                    Сохранение жизненного цикла заявки</Strong>.
            </li>
            <li><Strong>Сохранение настройки элементов интерфейса</Strong>: ;
            </li>


        </ul>
    </li>

    <li id="rules"><Strong>Автоматическое назначение заявок</Strong>: блок предназначен для настройки доступа к пункту
        меню консоли
        администрирования <Strong>Настройки заявки -
            Автоназначение исполнителя</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила
            выбора исполнителя</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Rules.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Правила выбора исполнителя</Strong>: НАЗЫВАЕТСЯ УЖЕ ПО-ДРУГОМУ
                включение
                полномочия предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Настройки заявки - Автоназначение исполнителя</Strong>;
            </li>
            <li><Strong>Изменение правила выбора исполнителя</Strong>: НЕ ВЛИЯЕТ НА ИЗМЕНЕНИЯ, Я МОГУ МЕНЯТЬ ПРАВИЛА БЕЗ
                ЭТОГО
                ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Создание правила выбора исполнителя</Strong>: при включении полномочия в меню web-приложения
                <Strong>Настройки заявки -
                    Автоназначение исполнителя</Strong> появится кнопка
                <Strong>Создать правило</Strong>.
            </li>
            <li><Strong>Копирование правила выбора исполнителя</Strong>: при включении полномочия в меню <Strong>Настройки
                заявки -
                Автоназначение исполнителя</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление правила выбора исполнителя</Strong>: при включении полномочия в меню <Strong>Настройки
                заявки - Автоназначение
                исполнителя</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rules2.jpg"/>
            </div>
        </ul>
    </li>


    <li id="rating"><Strong>астройка рейтингов исполнителей</Strong>: блок предназначен для настройки доступа к пункту
        меню консоли
        администрирования<Strong> Настройки заявки -
            Критерии оценки заявки</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Rating.html">Оценка заявок и
            рейтинг сотрудников</a>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Rating.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Кнопка исключения оценки исполнителя из рейтинга</Strong>: НЕ НАШЛА ЧТО ЭТО;
            </li>
            <li><Strong>Пункт административной панели - Критерии рейтинга</Strong>: НАЗЫВАЕТСЯ ПО-ДРУГОМУ включение
                полномочия предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Настройки заявки - Критерии оценки заявок</Strong>;
            </li>

            <li><Strong>Сохранение критериев рейтинга</Strong>: при включении полномочия на форме
                создания/редактирования <Strong>Критерия
                    рейтинга</Strong> появится кнопка <Strong>Сохранить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rating3.jpg"/>
            </div>
            <li><Strong>Создание критериев рейтинга</Strong>: при включении полномочия в меню web-приложения <Strong>Настройки
                заявки - Критерии
                оценки заявок</Strong> появится кнопка
                <Strong>Создать критерий</Strong>.
            </li>
            <li><Strong>Копирование критериев рейтинга</Strong>: при включении полномочия в меню <Strong>Настройки
                заявки - Критерии оценки
                заявок</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление критериев рейтинга</Strong>: при включении полномочия в меню <Strong>Настройки заявки -
                Критерии оценки заявок</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Rating2.jpg"/>
            </div>
        </ul>
    </li>


    <li id="roles"><Strong>Роли</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования <Strong>Администрирование - Роли</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Roles.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание ролей</Strong>: при включении полномочия в меню<Strong>Администрирование -
                Роли</Strong> появится кнопка <Strong>Добавить роль</Strong>.
                Чтобы создать новую <Strong>Роль</Strong> и сохранить ее необходимо также включить полномочие <Strong>Роли
                    - Элементы интерфейса
                    - Изменение ролей</Strong>;
            </li>
            <li><Strong>Создание UI полномочий</Strong>: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>

            <li><Strong>Пункт административной панели - Роли</Strong>: включение полномочия предоставляет доступ к
                меню консоли администрирования <Strong>Администрирование - Роли</Strong>;
            </li>

            <li><Strong>Пункт административной панели - API полномочия</Strong> ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>
            <li><Strong>Пункт административной панели - Дополнительные полномочия</Strong> ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>
            <li><Strong>Пункт административной панели - UI полномочи</Strong>я ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>

            <li><Strong>Изменение ролей</Strong>: при включении полномочия на форме создания/редактирования
                <Strong>Роли</Strong>
                появится кнопка <Strong>Сохранить</Strong>;
            </li>

            <li><Strong>Изменение UI полномочий</Strong>: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>
            <li><Strong>Удаление UI полномочий</Strong> ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ</li>
            <li><Strong>Копирование ролей</Strong>: при включении полномочия в меню <Strong>Администрирование -
                Роли</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление ролей</Strong>: при включении полномочия в меню <Strong>Администрирование -
                Роли</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <li><Strong>Копирование UI полномочий</Strong>: ЭТОГО ВРОДЕ БЫ БОЛЬШЕ НЕТ
            </li>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Удаленные роли</Strong>: пользователю будут доступны удаленные <Strong>Роли</Strong> в
                справочнике;
            </li>
            <li><Strong>Удаленные UI-полномочия</Strong>: ЭТОГО ТОЖЕ НЕТ?
            </li>
            <li><Strong>Все роли</Strong>: пользователю будут доступны все созданные <Strong>Роли</Strong>;
            </li>


        </ul>
    </li>


    <li id="api"><Strong>API полномочия</Strong>: данный блок предназначен для настройки доступа к различным
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

    <li id="messages"><Strong>Сообщения</Strong>: блок предназначен для настройки доступа к пункту меню Сообщения, а
        также настройки чатов в Заявках
        для web- и мобильного приложения.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Messages.html">Сообщения по
            заявке</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Messages.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Отправка сообщения по заявке</Strong>: НЕ РАБОТАЕТ, СООБЩЕНИЯ ОТПРАВЛЯЮТСЯ ПРИ ВКЛЮЧЕННОМ ЧАТЕ;
            </li>
            <li><Strong>Кнопка отправки внутреннего сообщения по заявке</Strong>: КАК ЭТО РАБОТАЕТ НЕ РАЗОБРАЛАСЬ
            </li>

            <li><Strong>Пункт главного меню - Сообщения</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Сообщения</Strong>; ДЛЯ МОБИЛЬНОГО НЕ РАБОТАЕТ, ТАМ ПУНКТ СООБЩЕНИЯ ВИДЕН
                ДАЖЕ ЕСЛИ ВЫКЛЮЧИТЬ
                ВЕСЬ БЛОК СООБЩЕНИЯ
            </li>

            <li><Strong>Просмотр списка участников в сообщениях</Strong>: полномочие необходимо для работы со списком
                участников в <Strong>Заявке</Strong>
                на вкладке сообщения. При включении этого полномочия пользовтаель сможет добавлять и удалять участников
                в чаты. Для этого необходимо также включить два полномочия: <Strong>Заявки - Элементы интерфейса -
                    Добавление
                    участника в список в сообщениях</Strong> и <Strong>Заявки - Элементы интерфейса - Удаление участника
                    из списка в сообщениях</Strong>;
            </li>

            <li><Strong>ат с заказчиками</Strong>: пользователю будет доступен чат с <Strong>Заказчиком</Strong> в
                <Strong>Заявке</Strong> на вкладке <Strong>Сообщения</Strong>. В чате вы
                сможете отправлять сообщения и прикреплять файлы;
            </li>

            <li><Strong>Чат с сотрудниками</Strong>: пользователю будет доступен чат с <Strong>Сотрудниками</Strong> в
                <Strong>Заявке</Strong> на вкладке <Strong>Сообщения</Strong>. В чате
                вы сможете отправлять сообщения и прикреплять файлы;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Messages2.jpg"/>
            </div>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Сообщения с заказчиками по заявке</Strong>: Я ИТАК ИХ ВИЖУ ПРИ ВКЛЮЧЕНИИ ЧАТА С ЗАКАЗЧИКАМИ??
            </li>
            <li><Strong>Операции над всеми сообщениями по доступным заявкам</Strong>: А ЭТО ЧТО? НЕ ПОНЯЛА
            </li>
            <li><Strong>Сообщения по всем доступным заявкам</Strong>: пользователю будут доступны сообщения по <Strong>Заявкам</Strong>,
                к котормы у него
                открыт доступ. Доступ к работе с <Strong>Заявками</Strong> настраивается в блоке полномочий <a
                        href="tickets"><Strong>Заявки</Strong></a>.
            </li>

        </ul>
    </li>

    <li id="stage"><Strong>Стадии</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования <Strong>Настройки заявки -
            Стадии заявки</Strong>. Доступ к стадиям необходим для дальнейшей настройки жизненного цикла. САМ БЛОК
        НАЗЫВАЕТСЯ СТАДИИ,
        МЕНЮ СТАДИИ ЗАЯВКИ, ПРЕДЛАГАЮ В НАЗВАНИЕ БЛОКА ТОЖЕ ДОПИСАТЬ СТАДИИ ЗАЯВКИ, У СТАТУСОВ ТОЖЕ НАПИСАНО СТАТУСЫ
        ЗАЯВКИ
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии
            заявки</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Stage.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание стадий заявок</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Настройки заявки - Стадии заявки</Strong> появится кнопка <Strong>Создать
                    стадию заявки</Strong>; А ЗДЕСЬ ЧТОБ
                СОЗДАТЬ И ИЗМЕНИТЬ ПОЛЯ СТАДИИ НЕ НАДО ВКЛЮЧАТЬ ОТДЕЛЬНО ПОЛНОМОЧИЕ ДЛЯ ИЗМЕНЕНИЯ КАК ЭТО СДЕЛАНО
                ВЕЗДЕ!!
            </li>
            <li><Strong>Пункт административной панели - Стадии заявок</Strong>: включение полномочия предоставляет
                доступ к
                меню
                консоли
                администрирования <Strong>Настройки заявки -
                    Стадии заявки</Strong>; РАЗНЫЕ ОКОНЧАНИЯ ЗАЯВОК ЗАЯВКИ
            </li>

            <li><Strong>Изменение стадий заявок</Strong>: НЕ РАБОТАЕТ Я МОГУ ИЗМЕНИТЬ БЕЗ ЭТОГО ПОЛНОМОЧИЯ;
            </li>
            <li><Strong>Копирование стадий заявок</Strong>: при включении полномочия в меню <Strong>Настройки заявки -
                Стадии заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>


            <li><Strong>Удаление стадий заявок</Strong>: при включении полномочия в меню <Strong>Настройки заявки -
                Стадии заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>; ХОТЯ КНОПКА УДАЛИТЬ ДОСТУПНА В
                КАРТОЧКЕ СТАДИИ БЕЗ
                ЭТОГО ПОЛНОМОЧИЯ
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Stage2.jpg"/>
            </div>

        </ul>
    </li>

    <li id="status"><Strong>Статусы заявки</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования <Strong>Настройки заявки
            - Статусы заявки</Strong>.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StatusType.html">Статусы
            заявки</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Status.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание статусов заявок</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Настройки заявки - Статусы заявки</Strong> появится кнопка <Strong>Создать
                    статус заявки</Strong>; А ЗДЕСЬ ЧТОБ
                СОЗДАТЬ И ИЗМЕНИТЬ ПОЛЯ СТАДИИ НЕ НАДО ВКЛЮЧАТЬ ОТДЕЛЬНО ПОЛНОМОЧИЕ ДЛЯ ИЗМЕНЕНИЯ КАК ЭТО СДЕЛАНО
                ВЕЗДЕ!!
            </li>
            <li><Strong>Пункт административной панели - Статусы заявок</Strong>: включение полномочия предоставляет
                доступ к
                меню
                консоли
                администрирования <Strong>Настройки заявки -
                    Статусы заявки</Strong>; РАЗНЫЕ ОКОНЧАНИЯ ЗАЯВОК ЗАЯВКИ
            </li>

            <li><Strong>Пересортировка статусов заявок</Strong>: ЧТО ЭТО
            </li>
            <li><Strong>Сохранение статусов заявок</Strong>: при включении полномочия на форме создания статуса появится
                кнопка
                <Strong>Сохранить</Strong>;
            </li>
            <li><Strong>Копирование статусов заявок</Strong>: при включении полномочия в меню <Strong>Настройки заявки -
                Статусы заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>


            <li><Strong>Удаление статусов заявок</Strong>: при включении полномочия в меню <Strong>Настройки заявки -
                Статусы заявки</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Status2.jpg"/>
            </div>

        </ul>
    </li>


    <li id="tags">Теги: ЭТО ЧТО???</li>

    <li id="tickettype"><Strong>Типы заявки</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования Настройки заявки
        - Типы заявок. ТИПЫ ЗАЯВКИ ТИПЫ ЗАЯВОК-ОПЯТЬ БЕДА С ОКОНЧАНИЯМИ

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы
            заявок</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Type.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание типов заявок</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Настройки заявки - Типы заявок</Strong> появится кнопка <Strong>Создать тип
                    заявки</Strong>;
            </li>
            <li><Strong>Пункт административной панели - Типы заявок</Strong>: включение полномочия предоставляет доступ
                к
                меню
                консоли
                администрирования <Strong>Настройки заявки -
                    Типы заявок</Strong>; РАЗНЫЕ ОКОНЧАНИЯ ТИП ТИПЫ
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

    <li id="objecttype"><Strong>Типы объектов</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования <Strong>Структура
            предприятия - Типы оборудования</Strong>. РАЗНЫЕ НАЗВАНИЯ
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html">Типы
            оборудования</a>.</p>


        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TypeObject.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Создание типов объектов</Strong>: при включении полномочия в меню консоли
                администрирования <Strong>Структура предприятия - Типы оборудования</Strong> появится кнопка <Strong>Создать
                    тип оборудования</Strong>;
            </li>
            <li><Strong>Пункт административной панели - Типы объектов</Strong>: включение полномочия предоставляет
                доступ к
                меню
                консоли
                администрирования <Strong>Структура предприятия -
                    Типы оборудования</Strong>; РАЗНЫЕ ОКОНЧАНИЯ ТИП ТИПЫ
            </li>

            <li><Strong>Сохранение типов объектов</Strong>: при включении полномочия на форме создания <Strong>Типа
                оборудования</Strong> появится кнопка
                <Strong>Сохранить</Strong>, а также вы сможете изменять уже созданные <Strong>Типы оборудования</Strong>;
            </li>
            <li><Strong>Копирование типов объектов</Strong>: при включении полномочия в меню <Strong>Структура
                предприятия -
                Типы оборудования</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>


            <li><Strong>Удаление типов объектов</Strong>: при включении полномочия в меню <Strong>Структура предприятия
                -
                Типы оборудования</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/TypeObject2.jpg"/>
            </div>

        </ul>
    </li>

    <li id="notification"><Strong>Настройка уведомлений</Strong>: блок предназначен для настройки доступа к пункту меню
        консоли администрирования <Strong>Настройки
            оповещений</Strong>. РАЗНЫЕ НАЗВАНИЯ
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Notifications.html">Настройка
            оповещений</a>.</p>


        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Notification.jpg"/>
        </div>

        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>
            <li><Strong>Пункт административной панели - Триггеры уведомлений</Strong>: включение полномочия
                предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Настройки оповещений - Триггеры уведомлений</Strong> для настройки событий для
                получения
                уведомлений;
            </li>
            <li><Strong>Пункт административной панели - Шаблоны уведомлений</Strong>: ЭТО ЧТО ТАКОЕ?
            </li>

            <li><Strong>Изменение триггеров уведомлений</Strong>: при включении полномочия в меню <Strong>Настройки
                оповещений - Триггеры
                уведомлений</Strong> на форме создания/редактирования триггера станет доступна кнопка
                <Strong>Сохранить</Strong>, а также
                пользователь сможет изменять уже
                существующие триггеры;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification2.jpg"/>
            </div>
            <li><Strong>Создание триггеров уведомлений</Strong>: при включении полномочия в меню <Strong>Настройки
                оповещений - Триггеры
                уведомлений</Strong> появится кнопка <Strong>Создать триггер уведомлений</Strong>, а также вы сможете
                изменять уже созданные триггеры;
            </li>
            <li><Strong>Копирование триггеров уведомлений</Strong>: при включении полномочия в меню <Strong>Настройки
                оповещений - Триггеры
                уведомлений</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>

            <li><Strong>Удаление триггеров уведомлений</Strong>: при включении полномочия в меню <Strong>Настройки
                оповещений - Триггеры
                уведомлений</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification3.jpg"/>
            </div>

            <li><Strong>Пункт административной панели - Правила выбора получателя</Strong>: включение полномочия
                предоставляет доступ к
                меню
                консоли
                администрирования <Strong>Настройки оповещений - Правила выбора получателя</Strong>. В этом меню вы
                можете создать
                правила, по которым определенные пользователи будут получать уведосления;
            </li>

            <li><Strong>Кнопка сохранения изменения правила выбора получателя</Strong>: при включении полномочия в меню
                <Strong>Настройки
                    оповещений - Правила выбора получателя</Strong> на форме правила станет доступна кнопка <Strong>Сохранить</Strong>,
                а также
                пользователь сможет изменять уже
                существующие правила выбора; СЛОВО ИЗМЕНЕНИЯ ПРИСУТСТВУЕТ ЗДЕСЬ И В КАЖДОЙ СЛЕДУЮЩЕЙ СТРОЧКЕ - СТРАННО
            </li>
            <li><Strong>Кнопка создания изменения правила выбора получателя</Strong>: при включении полномочия в меню
                <Strong>Настройки
                    оповещений - Правила выбора получателя</Strong> появится кнопка <Strong>Создать правило
                    выбора</Strong>;
            </li>
            <li><Strong>Кнопка копирования изменения правила выбора получателя</Strong>: при включении полномочия в меню
                <Strong>Настройки
                    оповещений - Правила выбора получателя</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Кнопка удаления изменения правила выбора получателя</Strong>: при включении полномочия в меню
                <Strong>Настройки
                    оповещений - Правила выбора получателя</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Notification4.jpg"/>
            </div>

        </ul>
    </li>

    <li id="places"><Strong>Участки</Strong>: блок предназначен для настройки доступа к пункту меню консоли
        администрирования <Strong>Структура предприятия -
            Участки</Strong>, а также доступа к <Strong>Участкам</Strong> из карточек <Strong>Сотрудника</Strong>,
        <Strong>Заказчика</Strong>, <Strong>Объекта</Strong> и т.д.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка
            участков</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Places.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>

            <li><Strong>Пункт административной панели - Участки</Strong>: включение полномочия предоставляет доступ к
                меню консоли администрирования <Strong>Структура предприятия -
                    Участки</Strong>;
            </li>

            <li><Strong>Сохранение участков</Strong>: при включении полномочия на форме создания/редактирования участка
                появится кнопка
                <Strong>Сохранить</Strong>, также пользователь сможет редактировать уже созданные
                <Strong>Участки</Strong>;
            </li>

            <li><Strong>Создание участков</Strong>: при включении полномочия в меню консоли администрирования <Strong>Структура
                предприятия -
                Участки</Strong> появится кнопка <Strong>Создать участок</Strong>;
            </li>

            <li><Strong>Копирование участков</Strong>: при включении полномочия в меню <Strong>Структура предприятия -
                Участки</Strong> в контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <li><Strong>Удаление участков</Strong>: при включении полномочия в меню <Strong>Структура предприятия -
                Участки</Strong> в контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>
            <li><Strong>Пресортировка участков</Strong>: ЧТО ЭТО???
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Places2.jpg"/>
            </div>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Все участки</Strong>: пользователю будут доступны все созданные <Strong>Участки</Strong> для
                выбора при создании <Strong>Сотрудников</Strong>,
                <Strong>Заказчиков</Strong>, <Strong>Типов заявок</Strong>, <Strong>Объектов</Strong>.
            </li>
            <li><Strong>Вложенные участки</Strong>: А ЭТО ЧТО? НЕ ПОНЯЛА
            </li>


        </ul>
    </li>

    <li id="files"><Strong>Файлы</Strong>: КАК РАБОТАЕТ? Я МОГУ ФАЙЛЫ В ЗАЯВКУ ПРИКРЕПЛЯТЬ БЕЗ ЭТОГО БЛОКА
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ЧЧЧЧЧЧЧЧЧЧЧЧЧЧ.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>

            <li><Strong>Кнопка добавления фото из галереи</Strong>
            </li>

            <li><Strong>Ограничение доступа к файлам</Strong>
            </li>

        </ul>

        <p><Strong>Справочники:</Strong></p>
        <ul>
            <li><Strong>Операции над любыми вложенными файлами</Strong>
            </li>
            <li><Strong>Удаленные вложенные файлы</Strong>
            </li>


        </ul>
    </li>


    <li id="checklist"><Strong>Чек-листы</Strong>: блок предназначен для настройки доступа к пункту web-приложения
        <Strong>Чек-листы</Strong>.

        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Checklists.html">Чек-листы</a>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/CheckList.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>

            <li><Strong>Пункт главного меню - Чек листы</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Чек-листы</Strong>;
            </li>


            <li><Strong>Создание чек-листов</Strong>: при включении полномочия в меню <Strong>Чек-листы</Strong>
                появится кнопка <Strong>Создать чек-лист</Strong>;
            </li>

            <li><Strong>Удаление чек-листов</Strong>: при включении полномочия в меню в меню <Strong>Чек-листы</Strong>
                в контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Копирование чек-листов</Strong>: при включении полномочия в меню <Strong>Чек-листы</Strong> в
                контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/CheckList2.jpg"/>
            </div>

            <li><Strong>Изменение чек-листов</Strong>: при включении полномочия на форме создания/редактирования участка
                появится кнопка
                <Strong>Сохранить</Strong>, также пользователь сможет редактировать уже созданные
                <Strong>Чек-листы</Strong>;
            </li>

            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/.jpg"/>
            </div>

        </ul>


    </li>

    <li id="objecttemplate"><Strong>Шаблоны объектов</Strong>: блок предназначен для настройки доступа к пункту
        web-приложения <Strong>Объекты|Оборудование - Шаблон
            объектов и оборудования</Strong>.
        <p>Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjTemplates.html">Создание
            шаблона оборудования, приемка и маркировка по QR-коду</a>.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/TemplateObj.jpg"/>
        </div>
        <p><Strong>Элементы интерфейса:</Strong></p>
        <ul>

            <li><Strong>Пункт главного меню - Шаблоны объектов</Strong>: включение полномочия предоставляет доступ к
                меню web-приложения <Strong>Объекты|Оборудование - Шаблон объектов и оборудования</Strong>; НЕ РАБОТАЕТ
                ДЛЯ МОБИЛЬНОГО
                ПРИЛОЖЕНИЯ, Я МОГУ СОЗДАВАТЬ НОВЫЕ ОБЪЕКТЫ ПО ШАБЛОНАМ БЕЗ ПОДКЛЮЧЕНИЯ ЭТОГО БЛОКА
            </li>


            <li><Strong>Создание шаблона объекта</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудование
                - Шаблон объектов и
                оборудования</Strong> появится кнопка <Strong>Создать шаблон</Strong>;
            </li>

            <li><Strong>Удаление шаблона объекта</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудование
                - Шаблон объектов и
                оборудования</Strong> в контекстном меню (три точки) появится пункт <Strong>Удалить</Strong>;
            </li>

            <li><Strong>Копирование шаблона объекта</Strong>: при включении полномочия в меню <Strong>Объекты|Оборудование
                - Шаблон объектов и
                оборудования</Strong> в контекстном меню (три точки) появится пункт <Strong>Копировать</Strong>;
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


____
- [Перейти в меню](http://wiki.hubex.ru)
