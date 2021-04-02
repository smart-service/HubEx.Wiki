---
title: Почему пользователь не видит Заявки/Объекты/Исполнителей?
description:
keywords:  hubex, хабекс, хубекс, хабикс
---

#### Почему пользователь не видит Заявки/Объекты/Исполнителей?
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#hiddentickets">Почему пользователь не видит Заявки;</a></li>
    <li><a href="#hiddenobjects">Почему пользователь не видит Объекты;</a></li>
    <li><a href="#hiddenusers">Почему пользователь не видит исполнителей при выборе в Заявку.</a></li>
</ul>
</html>

<body>


<h5 id="hiddentickets">Почему пользователь не видит Заявки</h5>
<p>В системе HubEx пользователь может столкнуться с проблемой: <Strong>Заказчик</Strong> создал <Strong>Заявку</Strong>, но ее не видно в общем списке,
    или исполнитель в мобильном приложении инженера создал новую <Strong>Заявку</Strong>, а диспетчер в web приложении ее не видит. Или, например,
    пользователь в мобильном приложении не видит ни одной <Strong>Заявки</Strong>. Все это сводится к одному - по какой-то причине <Strong>Заявки</Strong> не
    отображаются в списке. Как можно решить эту проблему рассмотрим в данной статье.</p>
<p>На отображения <Strong>Заявок</Strong> могут влиять несколько настроек системы:</p>
<ol>
    <li>фильтрация списка <Strong>Заявок</Strong>: в web- и мобильных приложениях инженера и заказчика списки <Strong>Заявок</Strong> могут быть
        отсортированы с помощью фильтров.
        <p>Рассмотрим пример: в мобильном приложении инженера HubEx Engineer на вкладке <Strong>Мои</Strong> (мои заявки) не отображаются
            <Strong>Заявки</Strong>. Обратите внимание на кнопку фильтров - на ней находится красная точка. Это значит, что для списка
            работает фильтрация. Нажмем на кнопку фильтров и увидим, что список отфильтрован по
            стадии заявки <Strong>Новая</Strong>. Чтобы сбросить фильтры нажмите кнопку <Strong>Сбросить</Strong>. Когда фильтры не применяются на кнопке
            фильтрации отсутствует красная точка.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/InMob.jpg"/>
        </div>
        </p>
        <p>В web приложении в меню <Strong>Заявки - Все заявки</Strong> также обращайте внимание на Активные фильтры. Подробнее читайте в
            статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Filters.html">Список заявок, поиск заявок с помощью
                фильтров</a>.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/InWeb.jpg"/>
        </div>
        </p>
    </li>

    <li>права доступа в настройке <Strong>Ролей</Strong>: <Strong>Заявки</Strong> полностью или частично могут быть скрыты настройками доступа. За
        доступ к справочникам отвечают настройки <Strong>Ролей</Strong>. <Strong>Роль</Strong> (или <Strong>Роли</Strong>) назначается каждому пользователю (<Strong>Сотруднику</Strong> и <Strong>Заказчику</Strong>) системы. Таким
        образом и происходит ограничение просмотра справочников и других действия в системе для определенных
        пользователей в web и мобильных приложениях. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.
        <p>Перейдите в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a> в меню <Strong>Администрирование - Роли</Strong>. Откройте <Strong>Роль</Strong> пользователя, для
            которого необходимо настроить доступ отображения списка <Strong>Заявок</Strong>. На вкладке <Strong>Полномочия</Strong> найдите блок <Strong>Заявки</Strong>, раздел
            <Strong>Справочники</Strong> - здесь сосредоточены всевозможные настройки отображения данных в справочнике <Strong>Заявки</Strong>, рассмотрим
            самые популярные: </p>

        <ul>
            <li><Strong>Активные заявки на сотрудниках моих участков</Strong>: в HubEx <Strong>Участки</Strong> используются для классификации <Strong>Объектов</Strong>,
                <Strong>Типов заявок</Strong>, <Strong>Сотрудников</Strong>, <Strong>Заказчиков</Strong> по различным критериям: географическим, функциональным и т.д. Если
                в карточке вашего <Strong>Сотрудника</Strong> (чью <Strong>Роль</Strong> вы хотите отредактировать) установлен определенный <Strong>Участок</Strong>, то в
                общем списке всех <Strong>Заявок</Strong> он сможет увидеть только те <Strong>Заявки</Strong>, назначенные на других <Strong>Сотрудников</Strong> с точно
                таким же
                <Strong>Участком</Strong>. Например, в вашей компании с помощью <Strong>Участков</Strong> реализовано географическое разделение по всей
                России. Для диспетчера (<Strong>Роль = Диспетчер</Strong>), который работает на Дальнем Востоке не нужно видеть <Strong>Заявки</Strong> из
                Сибири. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html#exrole">Настройка ролей: Как настроить доступ пользователей в разрезе участков</a>;
            </li>

            <li><Strong>Активные заявки на объектах моей компании</Strong>: в списке будут доступны
                <Strong>Заявки</Strong> по <Strong>Объектам</Strong> той компании, к которой принадлежит также пользователь (<Strong>Сотрудник</Strong> или <Strong>Заказчик</Strong>).
                В карточке <Strong>Сотрудника</Strong> на
                вкладке
                <Strong>Трудоустройство</Strong> указывается <Strong>Компания</Strong>, в которой работает пользователь, в карточке <Strong>Заказчика</Strong>
                на вкладке <Strong>Общее</Strong> также указывается <Strong>Компания</Strong>. В карточке <Strong>Объекта</Strong> на вкладке
                <Strong>Объект|Оборудование</Strong> указывается <Strong>Компания-владелец</Strong>. Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей системы</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание заказчика</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание обслуживаемых компаний</a>;
            </li>
            <li><Strong>Активные заявки на сотрудниках моей компании</Strong>: пользователю будут доступны <Strong>Заявки</Strong>, назначенные на других <Strong>Сотрудников</Strong>, но в рамках одной компании;
            </li>
            <li><Strong>Все активные заявки</Strong>: открывает доступ ко всем <Strong>Заявкам</Strong> без ограничений;</li>
            <li><Strong>Активные заявки по моим видам работ</Strong>: будут доступны <Strong>Заявки</Strong>, в которых указан <Strong>Вид работ</Strong> совпадающий с
                <Strong>Видами работ</Strong> в карточке <Strong>Сотрудника</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей системы</a>;
            </li>
            <li><Strong>Дочерние активные заявки</Strong>: пользователь дополнительно к установленным правам будет видеть дочерние <Strong>Заявки</Strong>
                от тех, что ему доступны. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChildTicket.html">Дочерние заявки</a>;
            </li>
            <li><Strong>Заявки, на которые я когда-либо был назначен</Strong>: будут доступны все <Strong>Заявки</Strong>, где пользователь проходил как
                исполнитель (даже если его заменили);
            </li>
            <li><Strong>Предоставляет доступ на чтение и запись для всех компонентов формы заявки вне зависимости от полномочий
                и
                настроек стадии</Strong>: доступ к полям на форме <Strong>Заявки</Strong> могут быть дополнительно ограничен в меню консоли
                администратора <Strong>Настройки заявки - Поля на форме заявки</Strong>. С помощью установки этого полномочия ограничения
                доступа снимаются. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка доступа к полям заявки</a>;
            </li>
            <li><Strong>Заявки, где пользователь - ответственный за объект по заявке</Strong>: в карточке <Strong>Объекта</Strong> на вкладке <Strong>Обслуживание</Strong>
                можно указать <Strong>Ответственного за объект</Strong> сотрудника. Например, это может быть исполнитель, который чаще
                всего выезжает на объект обслуживания. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание обслуживаемого оборудования</a>;
            </li>
            <li><Strong>Заявки на объектах, доступных пользователю</Strong>: эта настройка будет отталкиваться от настроек установленных
                для <Strong>Роле</Strong>й на вкладке <Strong>Полномочия</Strong> в блоке <Strong>Объекты</Strong>, раздел <Strong>Справочники</Strong>. Какие <Strong>Объекты</Strong> будут доступны пользователю -
                такие <Strong>Заявки</Strong> он и увидит;
            </li>
            <li><Strong>Удалять незакрытые заявки</Strong>: разрешает пользователю удалять <Strong>Заявки</Strong> на любой стадии.</li>
        </ul>
    </li>
</ol>


<h5 id="hiddenobjects">Почему пользователь не видит Объекты</h5>
<p>Пользователь создает <Strong>Заявку</Strong>, но не может найти в справочнике нужный <Strong>Объект</Strong>. Например, диспетчер или администратор
    создал новый <Strong>Объект</Strong>, и просит сервисного инженера создать по нему <Strong>Заявку</Strong>. Но сервисный инженер, по каким-то причинам
    в мобильном приложении инженера HubEx Engineer не видит этот <Strong>Объект</Strong>.</p>
<p>На отображение <Strong>Объектов</Strong> в системе влияет несколько настроек:</p>
<ol>
    <li>права доступа в настройке <Strong>Ролей</Strong>: Объекты полностью или частично могут быть скрыты настройками доступа. За
        доступ к справочникам отвечают настройки <Strong>Ролей</Strong>. <Strong>Роль</Strong> (или Роли) назначается каждому пользователю системы. Таким
        образом и происходит ограничение просмотра справочников и других действия в системе для определенных
        пользователей в web и мобильных приложениях. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.
        <p>Перейдите в консоль администрирования в меню <Strong>Администрирование - Роли</Strong>. Откройте <Strong>Роль</Strong> пользователя, для
            которого необходимо настроить доступ отображения списка <Strong>Объектов</Strong>. Найдите блок <Strong>Объекты</Strong>, раздел
            <Strong>Справочники</Strong> - здесь сосредоточены всевозможные настройки отображения данных в справочнике <Strong>Объектов</Strong>,
            рассмотрим
            самые популярные: </p>
        <uL>
            <li><Strong>се активные объекты</Strong>: полный доступ ко всем <Strong>Объектам</Strong> в системе;</li>
            <li><Strong>Удаленные объекты</Strong>: доступ к просмотру удаленных <Strong>Объектов</Strong>;</li>
            <li><Strong>Объекты на участках пользователя</Strong>: <Strong>Участок</Strong> - классификация <Strong>Объектов</Strong>, <Strong>Типов заявок</Strong>, <Strong>Сотрудников</Strong>,
                <Strong>Заказчиков</Strong> по различным критериям: географическим, функциональным и т.д. Для того, чтобы настроить
                ограничение доступа по <Strong>Участкам</Strong> необходимо создать <Strong>Участки</Strong> в консоли администратора в меню <Strong>Структура
                предприятия - Участки</Strong> и указать их в карточках <Strong>Объектов</Strong>, <Strong>Сотрудников</Strong>, <Strong>Заказчиков</Strong> и <Strong>Типов заявок</Strong>.
                <p>Например, в вашей компании есть услуги по обслуживанию оборудования разного назначения - Пищевая
                    промышленность, Обслуживание банкоматов и т.д. Исполнители для разных направлений
                    услуг - разные. <Strong>Сотруднику</Strong>, который ремонтирует банкоматы совсем не нужно видеть грили, печи и
                    т.д. </p>
                <p>Для <Strong>Сотрудника</Strong>, <Strong>Объекта</Strong>, <Strong>Заказчика</Strong> и <Strong>Типа заявки</Strong> можно указать несколько участков. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>.</p>

            </li>
            <li><Strong>Объекты у компаний пользователя</Strong>: в справочнике будут отображаться только те <Strong>Объекты</Strong>, в карточке которых
                <Strong>Компания-владелец</Strong> совпадает с компанией, установленной в карточке <Strong>Сотрудника</Strong> на вкладке
                <Strong>Трудоустройство</Strong> или <Strong>Заказчика</Strong> на вкладке <Strong>Общее</Strong>. С помощью установки этой настройки можно предоставлять
                доступ для роли <Strong>Заказчика</Strong> только к тем <Strong>Объектам</Strong>, которые относятся к компании-заказчику. Другие
                настройки для отображения <Strong>Объектов</Strong> в таком случае необходимо отключить. Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание пользователя вашей системы</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание заказчика</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание обслуживаемого оборудования</a>.
            </li>
        </uL>
    </li>
    <li>классификация с помощью <Strong>Участков</Strong>: эта настройка тесно связана с настройкой <Strong>Ролей</Strong>, в частности пункта <Strong>Объекты</Strong> на
        участках пользователя (см.выше). Если вы решаете вести разделение по <Strong>Участкам</Strong>, то <Strong>Участок</Strong> необходимо
        добавлять ко всем элементам справочников <Strong>Сотрудники</Strong>, <Strong>Объекты</Strong>, <Strong>Заказчики</Strong> и <Strong>Типы заявок</Strong>, которые должны быть
        объединены по какому-либо признаку. Если у <Strong>Сотрудника</Strong> будет
        стоять <Strong>Участок</Strong> = Пищевая промышленность, то такой же <Strong>Участок</Strong> необходимо указать в карточках всех <Strong>Объектов</Strong>
        (оборудования), которое относится к пищевой промышленности.
        <p>Установим <Strong>Участок</Strong> = Пищевая промышленность в карточке только одного <Strong>Объекта</Strong> и <Strong>Сотрудника</Strong>. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/Object.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/User.jpg"/>
        </div>
        </p>
        <p>Также в настройках <Strong>Ролей</Strong> для
            Сервисного специалиста в блоке <Strong>Объекты</Strong>, раздел
            <Strong>Справочники</Strong> установим только настройку <Strong>Объекты на участках пользователя</Strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Hidden/Role.jpg"/>
        </div>
        <p>Теперь посмотрим, что увидит <Strong>Сотрудник</Strong> Кошкин Иван в мобильном приложении инженера при попытке подать <Strong>Заявку</Strong>.
            Он увидит только тот <Strong>Объект</Strong>, у которого установлен такой же <Strong>Участок</Strong>, как и у него.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Hidden/OneObject.jpg"/>
        </div>

        <p>Обратите внимание! Если у <Strong>Сотрудника</Strong> (или <Strong>Заказчика</Strong>) будет стоять <Strong>Участок</Strong> = Пищевая
            промышленность, а в <Strong>Типе заявки</Strong> не будет выбрано никакого
            <Strong>Участка</Strong>, то пользователь не сможет выбрать <Strong>Тип заявки</Strong> при создании <Strong>Заявки</Strong>. Подробнее
            читайте в статьях: Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">Настройка участков</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html#exrole">Настройка ролей: Как настроить доступ пользователей в разрезе участков</a>.</p>
        <p>Продолжим рассматривать пример с <Strong>Участком</Strong> = Пищевая промышленность. Мы указали его в карточке <Strong>Сотрудника</Strong> и
            <Strong>Объекта</Strong>, но не указали ни в одном <Strong>Типе заявки</Strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/NoPlace.jpg"/>
        </div>
        <p>Если мы попытаемся создать <Strong>Заявку</Strong> в мобильном приложении инженера, то мы увидим следующую ошибку.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/NoPlace2.jpg"/>
        </div>
        <p>Для пользователя отсутствуют доступные <Strong>Типы заявок</Strong>, поэтому создать <Strong>Заявку</Strong> он не сможет. Чтобы <Strong>Тип заявки</Strong>
            стал доступен для пользователя, мы должны установить <Strong>Участок</Strong> такой же как указан в карточке <Strong>Сотрудника</Strong>
            (пользоватя, который работает в приложении). <Strong>Участков</Strong> можно указывать несколько. Если один и тот же <Strong>Тип заявки</Strong> с определенным жизненным циклом используется на всех <Strong>Участках</Strong> - укажите все. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>. </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/Type.jpg"/>
        </div>
        <p>И для наглядности добавим этот же <Strong>Участок</Strong> в еще один <Strong>Тип заявки</Strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/Hidden/Type2.jpg"/>
        </div>
        <p>Теперь посмотрим, как изменится создание <Strong>Заявки</Strong> в мобильном приложении инженера. Открылась форма <Strong>Заявки</Strong> и
            есть возможность выбрать один из <Strong>Типов заявки</Strong>, у которых был установлен <Strong>Участок</Strong> = Пищевая промышленность.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Hidden/Mob.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/Hidden/Mob2.jpg"/>
        </div>
        </p>
    </li>
</ol>


<h5 id="hiddenusers">Почему пользователь не исполнителей при выборе в Заявку</h5>
<p>Диспетчер при создании <Strong>Заявки</Strong> не видит нужного исполнителя в списке, хотя точно знает, что он есть. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Hidden/UserPlace.jpg"/>
</div>

<p>Такая ситуация связана с отличием установленных <Strong>Участков</Strong> в карточках <Strong>Сотрудников</Strong>. <Strong>Сотрудник</Strong>, создающий <Strong>Заявку</Strong>, должен
    принадлежать тому же <Strong>Участку</Strong>, что и исполнители, которых он может назначить на <Strong>Заявку</Strong>.</p>
<p>Например, <Strong>Заявку</Strong> создает диспетчер. В карточке <Strong>Сотрудника</Strong> (диспетчера) следующие настройки:</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Hidden/User2.jpg"/>
</div>
<p>Диспетчеру необходимо создать <Strong>Заявку</Strong> и назначить на нее специалиста Кошкина Ивана. Но при создании <Strong>Заявки</Strong>, такой
    исполнитель не отображается. Почему? Потому что в карточке <Strong>Сотрудника</Strong> у Кошкина Ивана стоит совсем другой
    <Strong>Участок</Strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Hidden/User.jpg"/>
</div>
<p>Добавляем в карточку <Strong>Сотрудника</Strong> (диспетчера) необходимый <Strong>Участок</Strong> и возвращаемся к созданию <Strong>Заявки</Strong>. Как видим, теперь
    диспетчеру стало доступно еще больше исполнителей для выбора. Так как у них в карточках так же стоят <Strong>Участки</Strong>
    совпадающие с <Strong>Участками</Strong> диспетчера.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/Hidden/UserPlace2.jpg"/>
</div>
</body>
____
- [Перейти в меню](http://wiki.hubex.ru)
