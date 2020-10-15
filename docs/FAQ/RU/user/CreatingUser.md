---
title: Создание пользователей вашей системы.
description: Как создавать профили пользователей в системе HubEx?
---

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym('{{ site.yandex_metric }}', "init", {
        id: '{{ site.yandex_metric }}',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
</script>
<noscript>
    <div><img src="https://mc.yandex.ru/watch/'{{ site.yandex_metric }}'" style="position:absolute; left:-9999px;"
              alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->
#### Создание пользователя вашей системы
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#createadm">Создавать сотрудников: Сервисного инженера и Начальника сервисной службы;</a></li>
    <!--<li><a href="#createuser">Создавать сервисного инженера.</a></li>-->
    <li><a href="#movetocust">Переводить Сотрудника в Заказчики.</a></li>
</ul>
</html>

<p><strong>Сотрудники</strong> являются
    лицензируемыми пользователями системы. Они могут создавать и выполнять <strong>Заявки</strong>.  Для них доступно web- и мобильное приложение HubEx для сервисной службы.
    Мобильное приложение можно скачать по ссылке <a
            href="https://itunes.apple.com/ru/app//id1386688688?mt=8">App Store</a> или <a
            href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">Google Play</a>. Войти в приложение
    пользователь сможет только после создания его в системе и подтверждения регистрации по телефону или почте.</p>

<!--<div>
  <img  style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/CreatingUser/user1.png" />
</div>-->


<h5 id="createadm">Создание Сервисного инженера и Начальника сервисной службы</h5>

<p>Для создания пользователя перейдите на вкладку <strong>Пользователи</strong> бокового меню, выберите пункт <strong>Сотрудники</strong>
    и нажмите на кнопку <strong>Добавить сотрудника</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingUser/User1.jpg"/>
</div>
<!-- <p>В системе HubEx используется понятие <strong>Роль</strong> – это набор прав и полномочий, определяющих доступ к функционалу системы. Созданием и корректировкой <strong>Ролей</strong> занимается администратор вашей системы. Подробно об этом можно прочитать <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">здесь</a>.</p>-->

<!--<div>
  <img  style="margin: 0 auto; display: block; max-width: 50%;" src="/attachments/images/FAQ/USER/CreatingUser/user9.png" />
</div>
-->

<p>Форма создания нового сотрудника состоит из нескольких вкладок: <strong>Общее</strong>, <strong>Квалификация</strong>,
    <strong>Трудоустройство</strong>. На вкладке <strong>Общее</strong> обязательными
    для заполнения являются следующие поля:</p>
<p>
    <ul>
        <li><strong> Фамилия</strong>;</li>
        <li><strong> Имя</strong>;</li>
        <li><strong> Телефон</strong> или <strong>Электронная почта</strong>;</li>
        <li><strong> Мобильный сотрудник</strong>: эта функция разрешает сотруднику участвовать в
            автоматическом распределении на Заявку и указывать его, как исполнителя уже выполненных работ.
<p>Автоматическое распределение сотрудников настраивается администратором с помощью специальных правил (по видам работ,
    графику работ и тд) и позволяет
    системе HubEx автоматически подибрать подходящих на <strong>Заявку</strong> специалистов. Подробнее об этом можно прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">здесь</a>.</p>
</li>
<li><strong>Отслеживать местоположение сотрудника</strong>: данная функция разрешает отслеживание
    пользователя на карте и позволяет назначать Заявки на ближайшего сотрудника;
</li>
<li><strong>Роль</strong> - это набор прав и полномочий, определяющих доступ к функционалу системы. Созданием
    и корректировкой <strong>Ролей</strong> занимается администратор вашей системы. Подробно об этом можно
    прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">здесь</a>.

    <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/USER/CreatingUser/user9.png"/>
    </div>

    <p>Для сервисного инженера роль будет <strong>Сервисный специалист</strong>, для начальника - <strong>Начальник
        Сервисной Службы</strong>.</p>
    <p>Роль <strong>Начальника Сервисной Службы</strong> предоставляет больше прав для работы с системой: по умолчанию
        для
        этой роли доступны переходы <strong>Заяввки</strong> по различным стадиям, просмотр абсолютно всех
        <strong>Заявок</strong> и т.д. <strong>Сервисный специалист</strong> по умолчанию может принимать и выполнять
        <strong>Заявку</strong>, видеть только назначенные на него <strong>Заявки</strong> и т.д.</p></li>

</ul> </p>


<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingUser/User2.jpg"/>
</div>

<p>Обратите внимание, что одно из полей <strong>Телефон</strong> или <strong>Электронная почта</strong> будет являться
    логином для входа в систему через web- и мобильное приложение. После заполнения всех вкладок и сохранения карточки
    <strong>Сотрудника</strong>, на указанный номер телефона или адрес почты придет сообщение о завершении регистрации и
    создании пароля.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/USER/CreatingUser/user4.png"/>
</div>

<p>На вкладке <strong>Квалификация</strong> указываются:
<p>
    <ul>
        <li><strong>Участок</strong> - позволит разделить <strong>Объекты</strong>, <strong>Сотрудников</strong> и <strong>Заказчиков</strong> по различным зонам
            (например, географическим или областям деятельности). Например, вы можете создать участок Электрики и
            относить к нему все электрические приборы. А также указывать у сотрудников
            или заказчиков участок Электрики. Это позволит быстрее назначать <strong>Сотрудников</strong> на <strong>Заявки</strong> в большой
            компании, настраивать уровни доступ для сервисных специалистов. <strong>Участки</strong> создаются администратором системы.
            Подробнее об этом можно прочитать <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Places.html">здесь</a>.

<p>У одного <strong>Сотрудника</strong> может быть несколько <strong>Участков</strong>. Если
    разделения на участки нет, то выбрать необходимо <strong>Основной</strong> участок;</p>
</li>
<li><strong>Виды работ</strong> - специализация вашего сотрудника. Например, ваш сотрудник квалифицируется на
    Монтаже оборудования и (или) Ремонте. <strong>Виды работ</strong> могут применяться в автораспределении сотрудников по Заявкам. Также
    виды работ заполняются у <strong>Объектов</strong>.
    <p>Новый <strong>Вид работ</strong> может создать администратор системы, подробно об этом написано в соответствующей <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">статье</a>.</p>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/USER/CreatingUser/user7.png"/>
    </div>
</li>

<li><strong>Навыки</strong> - дополнительная специализация сотрудника. Благорадя <strong>Навыкам</strong> в системе
    можно настроить более точное автораспределение сотрудников на <strong>Заявку</strong>. <strong>Навыки</strong> создаются также
    администратором системы.
</li>
</ul></p>
<p>Выбор <strong>Участков</strong>, <strong>Видов работ</strong> и <strong>Навыков</strong> происходит по кнопке
    <strong>Добавить</strong>.</p></p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingUser/Qualification.jpg"/>
</div>

<p>На вкладке <strong>Трудоустройство</strong> в разделе <strong>Компания</strong> необходимо указать:</p>
<p>
<ul>
    <li><strong>Компанию</strong>, в которой работает <strong>Сотрудник</strong>;
    </li>
    <li><strong>Должность</strong> в свободной форме;</li>
    <li><strong>Табельный номер</strong> - не обязателен для заполнения.</li>

</ul></p>
<p>Также на вкладке <strong>Трудоустройство</strong> вы можете указать <strong>График работ</strong>. Он поможет учитывать рабочее время специалистов при назначении
    на <strong>Заявки</strong>. Это повысит оперативность вашего бизнеса.
    <strong>График работ</strong> можно учесть при настройке автоматического назначения сотрудников.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingUser/Employment.jpg"/>
</div>

<p>После внесения всей необходимой информации не забудьте сохранить пользователя.</p>
<p>Обратите внимание на ревизит <strong>Бан пользователя</strong>. Он повляется после сохранения данных о новом
    <strong>Сотруднике</strong> напротив его имени и используется в
    случае увольнения сотрудника, чтобы запретить ему доступ в систему.</p>


<!--<h5 id="createuser">Создание сервисного инженера</h5>-->


<!--<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingUser/user11.jpg"/>
</div>-->

<p>Перед началом работы в мобильном приложении пользователю нужно подтвердить использование геолокации, чтобы вы могли
    отслеживать местоположение своего работника.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingUser/user5.png"/>
</div>


<h5 id="movetocust">Перевод из Сотрудника в Заказчики</h5>
Если вы случайно создали <strong>Сотрудника</strong> вместо <strong>Заказчика</strong>, тип
<strong>Пользователя</strong> можно изменить. Сделать это необходимо, так как права <strong>Заказчика</strong> и<strong>Сотрудника</strong> разграничены. Например, отсканировав QR-код, пользователь с типом
<strong>Сотрудник</strong> может увидеть больше данных, чем нужно.

Откройте карточку <strong>Сотрудника</strong> и нажмите на <strong>Контекстное меню (3
    точки)</strong>, которое находится в правом верхнем углу. В этом меню нвыберите пункт <strong>Перевести к
    заказчикам</strong>.

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingUser/ChangeUserToCustomer.jpg"/>
</div>


Нажмите кнопку <strong>Подтвердить</strong> в появившемся диалоговом окне.
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingUser/user12.png"/>
</div>

При переводе пользователя из <strong>Сотрудников</strong> в <strong>Заказчики</strong> его
<strong>Роль</strong> необходимо изменить вручную, если это необходимо.


<p> Для ускорения процесса добавления <strong>Сотрудников</strong> в систему HubEx можно использовать функцию <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#workers"> Импорта.</a></p>
<p> Для выгрузки данных по <strong>Сотрудникам</strong> из системы HubEx можно воспользоваться функцией <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#workers"> Экспорта.</a></p>

### Следующие шаги:
- [Создание обслуживаемых компаний](./CreatingCompany.md)
- [Ввод обслуживаемого оборудования](./CreatingObjects.md)
- [Создание заказчика](./CreatingCustomer.md)


____
- [Перейти в меню](http://wiki.hubex.ru)
