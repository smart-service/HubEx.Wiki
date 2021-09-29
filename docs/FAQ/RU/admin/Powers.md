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
    <p>Роли</p>
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

<p>Для настройки доступа к различному функционалу, работы с определенными данными в HubEx используются Роли. Для каждой
    Роли в консоли администрирования
    в меню Администрирование - Роли можно задать набор полномочий (разрешений). Подробнее читайте в статье Настрйока
    ролей.</p>
<p><Strong>Полномочия роли</Strong> - это основной раздел настройки Ролей, который отвечает за настройку доступа к
    элементам интерфейса и
    справочникам. Полномочия
    разделены на тематические блоки. Например, импорт, экспорт,
    копирование и другие действия с <Strong>Заявками</Strong> находятся в блоке <Strong>Заявки</Strong>.
<p>Включить полномочия можно сразу на весь блок,
    переместив переключатель вправо. Либо можно развернуть блок и сделать детальную настройку по пунктам. </p>

<p>Каждый блок полномочий содержит одну или
    две группы:</p>
<ul>
    <li><Strong>Элементы интерфейса</Strong>: здесь можно настроить видимость пунктов основного меню и
        консоли
        администрирования, например, скрыть меню Карты, Аналитика, Жизненный цикл и т.д.;
    </li>
    <li><Strong>Справочники</Strong>: здесь можно настроить доступ к отображению данных в справочниках.
        Например, разрешить
        просматривать список
        объектов, которые относятся только к участку пользователя.
    </li>

</ul>

<p>Рассмотрим подробно назначение каждого полномочия в тематических блоках.</p>
<ol>
    <li>QR: данный блок отвечает за настройку доступа к работе с QR-кодами и шаблонами заявок (меню Заявки -
        Маркировка).

        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/QR.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Публикация QR кодов и запуск планировщика: включение полномочия разрешает при создании QR-кода
                опубликовать его (для подачи Заявок незарегистрированными пользователями в том числе); ЧТО ЗДЕСЬ ЗА
                ПЛАНИРОВЩИК?
            </li>
            <li>Отмена публикации QR кода: при включении данного полномочия в карточке QR-кода (шаблона заявки) появится
                кнопка Снять с публикации;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QRPublic.jpg"/>
            </div>
            <li>Пункт главного меню - Маркировка: полномочие отвечает за доступ к меню Заявки - Маркировка. Если
                выключить полномочие роли, то пользователь с данной ролью не увидит этого пункта в HubEx (web- и
                мобильных приложениях);
            </li>
            <li>Создание QR кодов и планировщика: при включении данного полномочия в меню Заявки - Маркировка появится
                кнопка Создать QR-код;
            </li>
            <li>Удаление QR кодов и планировщика: при включении данного полномочия в меню Заявки - Маркировка в
                карточках QR-кодов (шаблонов заявок) в контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QRDelete.jpg"/>
            </div>
            <li>Копирование QR кодов и планировщиков Я НЕ НАШЛА КНОПКУ КОПИРОВАТЬ</li>
            <li>Изменение QR кодов и планировщика: включение данного полномочия разрешает изменять поля шаблона заявки
                (Объект, Адрес объекта, Вид работ и т.д.). При отключении данного полномочия пользователь увидит пустую
                карточку шаблона заявки.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/QREmpty.jpg"/>
            </div>
        </ul>
    </li>


    <li>Аналитика: данный блок отвечает за настройку доступа к работе с меню web-приложения Аналитика. С помощью
        полномочий можно открыть/закрыть доступ к определенным аналитическим отчетам.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Analytic.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Срез по заявкам: полномочие отвечает за доступ к отчету Срез по заявкам;</li>
            <li>История перемещений: полномочие отвечает за доступ к отчету Срез по заявкам;</li>
            <li>Общая аналитика: полномочие отвечает за доступ к отчету Общая аналитика;</li>
            <li>Отчет для клиента: полномочие отвечает за доступ к Отчету для клиента;</li>
            <li>Отчет по объектам: полномочие отвечает за доступ к Отчету по объектам</li>
            <li>Отчет по сотрудникам: полномочие отвечает за доступ к Отчету по сотрудникам;</li>
            <li>Мои отчеты: полномочие отвечает за доступ к печатным формам Сервисного акта, Акта выполненных работ и
                Счета на оплату.
            </li>
        </ul>

    </li>

    <li>Виды работ: данный блок предназначен для настройки доступа к работе с меню консоли администрирования Настройки
        заявки - Виды работ.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/WorkType.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Пункт административной панели - Виды работ: включение полномочия предоставляет доступ к меню консоли
                администрирования Настройки заявки - Виды работ;
            </li>
            <li>Изменение видов работ: полномочие позволяет вносить изменения в уже созданные Виды работ;</li>
            <li>Создание видов работ: при включении данного полномочия в меню Настройки заявки - Виды работ появляется
                кнопка Создать вид работ;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/WorkType1.jpg"/>
            </div>
            <li>Копирование видов работ: при включении данного полномочия в меню Настройки заявки - Виды работ и в
                карточках Видов работ в контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление видов работ: при включении данного полномочия в меню Настройки заявки - Виды работ и в
                карточках Видов работ в контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/WorkType2.jpg"/>
            </div>
            <li>Пересортировка видов работ: ЧТО ДЕЛАЕТ?;</li>
            <li>Публикация видов работ: ЭТО И СЛЕДУЮЩЕЕ НИ НА ЧТО НЕ ВЛИЯЕТ;</li>
            <li>Отмена публикации видов работ: .
            </li>
        </ul>
    </li>

    <li>Выполненные работы и стоимости: данный блок предназначен для стоимостного учета выполненных работ в Заявке
        (вкладка Выполнение).
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Works.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Поле "Количество" на форме выполненных работ по заявке: ЭТО И СЛЕДУЮЩЕЕ НИ НА ЧТО НЕ ВЛИЯЕТ;</li>
            <li>Поле "Единицы измерения" на форме выполненных работ по заявке: ;</li>
            <li>Поле "Вид Работ" на форме выполненных работ по заявке: при включении данного полномочия на форме
                Выполненной работы становится доступным для редактирования поле Вид работ;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works2.jpg"/>
            </div>
            <li>Израсходованные материалы на форме выполненных работ: при включении данного полномочия на форме
                Выполненной работы появится раздел Израсходованные материалы, где можно указать материалы,
                использованные для выполнения работ по Заявке. Обратите внимание! Для добавления материалов на форме
                Выполненной работы необходимо включить полномочие Материалы и склады - Справочники - Все склады;
            </li>
            <li>Поле "Стоимость вида работ" на форме выполненных работ по заявке: при включении данного полномочия на
                форме Выполненной работы появляется поле Стоимость;
            </li>

            <li>Поле "Cтоимость материала" на форме выполненных работ по заявке: с помощью данного полномочия можно
                отобразить поле Стоимость при выборе израсходованных материалов;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works3.jpg"/>
            </div>
            <li>Поле "Ставка/Час исполнителя" на форме выполненных работ по заявке: при включении полномочия на форме
                Выполненной работы при выборе Исполнителя будет отображаться поле Ставка/час;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works4.jpg"/>
            </div>
            <li>Ставка/час в карточке сотрудника: при включении данного полномочия в карточке Сотрудника (вкладка
                Квалификация) станет
                доступным поле Ставка/час. Обратите внимание! Чтобы карточка Сотрудника была доступна необходимо
                включить полномочие Пользователи и контакты - Элементы интерфейса - Пункт галвного меню-Сотрудники, а
                также Пользователи и контакты - Справочники - Все пользователи.
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Works5.jpg"/>
            </div>
        </ul>
    </li>


    <li>Дополнительные поля: данный блок предназначен для настройки доступа к работе с дополнительными полями в меню
        консоли администрирования Настройки системы - Дополнительные поля.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ADDFields.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Создание атрибутов заявок: при включении данного полномочия в меню консоли администрирования Настройки
                системы - Дополнительные поля появляется кнопка Создать поле;
            </li>
            <li>Пункт административной панели - Дополнительные поля: включение полномочия предоставляет доступ к меню
                консоли
                администрирования Настройки системы - Дополнительные поля;
            </li>
            <li>Сохранение атрибутов заявок: при включении полномочия на форме создания Дополнительного поля появится
                кнопка Сохранить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/ADDFields2.jpg"/>
            </div>
            <li>Копирование атрибутов заявок: при включении полномочия в меню Настройки системы - Дополнительные поля в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Удаление атрибутов заявок: при включении полномочия в меню Настройки системы - Дополнительные поля в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/ADDFields3.jpg"/>
            </div>

        </ul>
    </li>


    <li>Другие: ЧТО ЭТО??.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/ADDFields.jpg"/>
        </div>
        <p>API полномочия:</p>
        <ul>
            <li>Метод получения списка доступных атрибутов SLA: ЧТО ДЕЛАЕТ??;</li>

        </ul>
    </li>

    <li>Жизненный цикл заявки: данный блок предназначен для настройки доступа к работе с меню консоли администрирования
        Настройки заявки - Жизненный цикл заявки.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/LifeCycle.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <ul>
            <li>Пункт административной панели - Жизненный цикл заявок: включение полномочия предоставляет доступ к меню
                консоли
                администрирования Настройки заявки - Жизненный цикл заявки. Обратите внимание! Работать с жизненным
                циклом можно только при включенном полномочии Участки - Справочники - Все участки;
            </li>
            <li>Сохранение жизненного цикла заявки: НЕ ВЛИЯЕТ НИ НА ЧТО, КНОПКА ДОБАВИТЬ СТАДИЮ ПОЯВЛЯЕТСЯ ПРИ ВКЛЮЧЕНИИ
                ДРУГИХ ПОЛНОМОЧИЙ. Обратите внимание! Кнопка +Добавить стадию
                доступна только при включении следующих полномочий: Поля на форме заявки (полностью блок), Роли -
                Справочники - Все роли, Стадии - Элементы интерфейса - Пункт административной панели - Стадии заявок,
                Статусы заявки - Элементы интерфейса - Пункт административной панели - Статусы заявок, Типы заявки -
                Элементы интерфейса - Пункт административной панели - Тип заявок;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/LifeCycle2.jpg"/>
            </div>

        </ul>
    </li>

    <li>Заявки: данный блок предназначен для настройки работы с меню Заявки - Все заявки.
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/.jpg"/>
        </div>
        <p>Элементы интерфейса:</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Ticket.jpg"/>
        </div>
        <ul>
            <li>Сохранение переходов по заявке: НА ЧТО ВЛИЯЕТ??;
            </li>
            <li>Создание заявки: при включение полномочия в меню Заявки - Все заявки появляется кнопка Создать заявку
                (для web-приложения);
            </li>

            <li>Вкладка истории изменений на форме заявки: НЕ РАБОТАЕТ -вкладка история видна и без включения этого
                полномочия;
            </li>

            <li>Удаление заявок: при включении полномочия в меню Заявки - Все заявки в
                контекстном меню (три точки) появится пункт Удалить;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket4.jpg"/>
            </div>
            <li>Кнопка создания заявки, выбрав объект из списка в Мобильном Приложении: при включение полномочия в меню
                Заявки мобильного приложения появится кнопка создания. Обратите внимание! Подать Заявку можно будет
                только с доступом к Объектам (Оборудованию). Для этого необходимо включить подходящее полномочие в блоке
                Объекты
                - Справочники !!!!!СДЕЛАТЬ ССЫЛКУ НА ПОЛНОМОЧИЯ С ОБЪЕКТАМИ;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket5.jpg"/>
            </div>

            <li>Подача заявки по сканированию QR-кода: при включение полномочия в меню
                Заявки мобильного приложения появится возможность создавать Заявки с помощью QR-кодов. Обратите
                внимание! Подать Заявку по QR-коду можно будет
                только с доступом к Объектам (Оборудованию). Для этого необходимо включить подходящее полномочие в блоке
                Объекты
                - Справочники - СДЕЛАТЬ ССЫЛКУ НА ПОЛНОМОЧИЯ С ОБЪЕКТАМИ;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket6.jpg"/>
            </div>
            <li>Пункт главного меню - Заявки: включение полномочия открывет доступ к основному меню Заявки - Все заявки;
            </li>
            <li>Копирование заявок: при включении полномочия в меню Заявки - Все заявки в
                контекстном меню (три точки) появится пункт Копировать;
            </li>
            <li>Изменение заявок: при включении полномочия будет доступно изменение полей на форме Заявки, иначе все
                поля будут заблокированы. Обратите
                внимание! Настройка отображения конкретных полей на форме Заявки находится в меню Настройки заявки -
                Поля на
                форме заявки. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки:
                    настройка доступа к полям
                    заявки</a>;
            </li>
            <li>Экспорт заявок: при включении полномочия в меню Заявки - Все заявки появится кнопка Экспорта;
            </li>
            <li>Импорт заявок: при включении полномочия в меню Заявки - Все заявки появится кнопка Импорта;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket7.jpg"/>
            </div>
            <li>Добавление участника в список в сообщениях: при включении данного полномочия в Заявке на вкладке
                Сообщение появляется кнопка Добавить (доступно только для чата с командой). Обратите внимание! Доступ к
                сообщениям и чату с командой включается с
                помощью полномочий Сообщения - Элементы интерфейса - Чат с сотрудниками. Доступ к списку пользователей
                для добавления в чат будет доступен при включении полномочия Пользователи и контакты - Справочники - Все
                пользователи (или Пользователи и контакты - Справочники - Все пользователи на участках). Просмотр списка
                участников чата доступен при включении полномочия Сообщения - Элементы интерфейса -
                Просмотр списка участников в сообщениях;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket8.jpg"/>
            </div>
            <li>Удаление участника из списка в сообщениях: при включении полномочия в Заявке на вкладке Сообщения по
                щелчку на участников чата откроется форма с возможностью удалять участников. Обратите внимание! Просмотр
                списка участников чата доступен при включении полномочия Сообщения - Элементы интерфейса -
                Просмотр списка участников в сообщениях;
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
            <li>Календарь заявок сотрудника при назначении: при включении полномочия в Заявке при выборе исполнителя
                (Выбрать исполнителя из списка) на форме отображается календарь для просмотра занятости выбранного
                исполнителя. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График
                    работы исполнителей</a>;
            </li>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 80%;"
                     src="/attachments/images/FAQ/ADMIN/Powers/Ticket11.jpg"/>
            </div>
        </ul>
        <p>Справочники:</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/ADMIN/Powers/Ticket2.jpg"/>
        </div>
        <ul>
            <li>Активные заявки в моем подразделении: КАК РАБОТАЮТ ПОДРАЗДЕЛЕНИЯ? или этого нет?</li>
            <li>Активные заявки на сотрудниках моих участков: для пользователя будут доступны Заявки по Сотрудникам с
                такими же участками, как у этого пользователя. Участки устанавливаются в карточках Сотрудников,
                Заказчиков (меню Пользователи);
            </li>
            <li>Активные заявки на объектах моей компании</li>
            <li>Все активные заявки</li>
            <li>Активные заявки по моим видам работ</li>
            <li>Дочерние активные заявки</li>
            <li>Заявки, на которые я когда-либо был назначен</li>
            <li>Предоставляет доступ на чтение и запись для всех компонентов формы заявки вне зависимости от полномочий
                и настроек
                стадии
            </li>
            <li>Заявки на дочерних подразделениях пользователя</li>
            <li>Заявки, где пользователь - ответственный за объект по заявке</li>
            <li>Заявки на объектах, доступных пользователю</li>
            <li>Заявки на подразделениях, где пользователь - менеджер</li>
            <li>Заявки по объектам, где пользователь - предпочтительный инженер</li>
            <li>Игнорировать эксклюзивные полномочия для доступа к полям заявки</li>
            <li>Архивные заявки</li>

        </ul>
    </li>


    <li></li>
    <li></li>
    <li></li>

    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>

</ol>


<p>Скопировать настройки <Strong>Роли</Strong> можно еще одним способом: в справочнике <Strong>Роли</Strong>
    нажать на
    контектное меню (три точки) у
    названия <Strong>Роли</Strong> и выбрать
    пункт <Strong>Копировать</Strong>. Появится новая плитка, в
    названии которой будет стоять слово Копия + название той <Strong>Роли</Strong>, которую вы копировали. После
    чего
    можно
    открыть скопированную <Strong>Роли</Strong> и приступить к самостоятельной настройке.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/ADMIN/Roles/RoleCopy.jpg"/>
</div>
</body>

### Следующие шаги:
- [Настройка участков](./Places.md)
- [Типы оборудования](./ObjectsType.md)

____
- [Перейти в меню](http://wiki.hubex.ru)