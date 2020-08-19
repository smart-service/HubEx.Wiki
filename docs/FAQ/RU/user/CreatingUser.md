---
title: Создание пользователей вашей системы.
description: Как создавать профили пользователей в системе HubEx?
---

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym('{{ site.yandex_metric }}', "init", {
        id:'{{ site.yandex_metric }}',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/'{{ site.yandex_metric }}'" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
#### Создание пользователя вашей системы
В этом разделе вы научитесь:
<html>
  <meta charset="utf-8">
  <title>Быстрый переход внутри документа</title>
 <ul>
       <li><a href="#createadm">Создавать сотрудников: сервисного инженера и начальника сервисной службы;</a></li>
      <!--<li><a href="#createuser">Создавать сервисного инженера.</a></li>-->
       <li><a href="#movetocust">Переводить сотрудника в заказчики.</a></li>
 </ul>
</html>

<p>Для создания пользователя необходимо перейти на вкладку <strong>Пользователи</strong> бокового меню, а затем выбрать <strong>Сотрудники</strong>. По нажатию на кнопку <strong>Добавить сотрудника</strong> откроется форма создания пользователя.</p>
![User1](/attachments/images/FAQ/USER/CreatingUser/user1.png)

В системе HubEx используется понятие <strong>Роль</strong> – это набор прав и полномочий, определяющих доступ к функционалу системы. Созданием и корректировкой <strong>Ролей</strong> занимается администратор вашей системы. Подробную статью об этом можно прочитать [здесь](https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html).
![User9.png](/attachments/images/FAQ/USER/CreatingUser/user9.png)



<h5 id="createadm">Создание сервисного инженера и начальника сервисной службы</h5>

<p>Форма создания нового сотрудника состоит из нескольких вкладок: <strong>Общее</strong>, <strong>Квалификация</strong>, <strong>Трудоустройство</strong>, <strong>Прочее</strong>. При создании нового пользователя на вкладке <strong>Общее</strong> обязательными для заполнения являются следующие поля:</p>
<p> <ul>
      <li><strong> Фамилия</strong>;</li>
      <li><strong> Имя</strong>;</li>
      <li><strong> Телефон</strong> или <strong>Электронная почта</strong>;</li>
      <li> <strong>Роль</strong>: для сервисного инженера роль будет <strong>Сервисный специалист</strong>, для начальника - <strong>Начальник Сервисной Службы</strong>;</li>
      <li> <strong>Отслеживать местоположение сотрудника</strong>: включать эту функцию необходимо для <strong>Сервисного специалиста</strong>, чтобы отслеживтаь его местоположение. Для остальных ролей это необязательно. </li>
</ul> </p>
 
   <p>Обратите внимание, что одно из полей <strong>Телефон</strong> или <strong>Электронная почта</strong> будет являться логином для входа в систему через web- и мобильное приложение. После сохранения карточки <strong>Сотрудника</strong>, на указанный номер телефона или адрес почты придет сообщение о завершении регистрации и создании пароля.</p>

![User4.png](/attachments/images/FAQ/USER/CreatingUser/user4.png)

<p>Роль <strong>Начальника Сервисной Службы</strong> предоставляет больше прав для работы с системой: по умолчанию для этой роли доступны переходы <strong>Заяввки</strong> по различным стадиям, просмотр абсолютно всех <strong>Заявок</strong> и т.д. <strong>Сервисный специалист</strong> по умолчанию может принимать и выполнять <strong>Заявку</strong>, видеть только назначенные на него <strong>Заявки</strong> и т.д.</p>

![User2.png](/attachments/images/FAQ/USER/CreatingUser/user2.png) 
![User3.png](/attachments/images/FAQ/USER/CreatingUser/user3.png)

<p>На вкладке <strong>Квалификация</strong> указываются:
<p> <ul>
      <li><strong>Участок</strong> - если ваше предприятие располагается на нескольких участках (например, по географическому принципу), то необходимо указать, на каком участке работает данный Сотрудник, их может быть несколько. Если разделения на участки нет, то выбрать необходимо <strong>Основной</strong> участок;</li>
      <li><strong>Виды работ</strong> - специализация вашего сотрудника. Например, ваш сотрудник квалифицируется на Монтаже оборудования и (или) Ремонте;</li>
      <li><strong>Навыки</strong> - дополнительная специализация сотрудника. Благорадя <strong>Навыкам</strong> в системе можно настроить более точное автоматическое распределение сотрудников на <strong>Заявку</strong>. </li>
      </ul></p>
      <p>Добавление <strong>Участков</strong>, <strong>Видов работ</strong> и <strong>Навыков</strong> происходит по кнопке <strong>Добавить</strong>.</p></p>
    
![User6.png](/attachments/images/FAQ/USER/CreatingUser/user6.png)

<p>Новые участки и виды работ может добавить администратор вашей системы через специальную Консоль администрировани.</p>
![User7.png](/attachments/images/FAQ/USER/CreatingUser/user7.png)

<p>На вкладке <strong>Трудоустройство</strong> по кнопке <strong>Добавить должность</strong> необходимо внести информацию:</p>
<p> <ul>
      <li><strong>Должность</strong> - вносится в свободной форме;</li>
      <li><strong>Табельный номер</strong> - не обязателен для заполнения;</li>
      <li><strong>Компания</strong> - указывается <strong>Компания</strong>, в которой работает <strong>Сотрудник</strong>. </li>
      </ul></p>

![User8.png](/attachments/images/FAQ/USER/CreatingUser/user8.png)   

<p>На вкладке <strong>Прочее</strong> находится всего один ревизит <strong>Бан пользователя</strong>. Он используется в случае увольнения сотрудника, чтобы запретить ему доступ в систему.</p>
После внесения всей необходимой информации не забудьте сохранить пользователя.

<!--<h5 id="createuser">Создание сервисного инженера</h5>-->

<p>Как толкьо пользователь подтвердит свою регистрацию по телефону или электронной почте, он сможет войти в систему через мобильное приложение. Его можно скачать по ссылке <a href="https://itunes.apple.com/ru/app//id1386688688?mt=8">App Store</a> или <a href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">Google Play</a>.</p>

<div>
  <img  style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/CreatingUser/user11.jpg" />
</div>

<p>Перед началом работы в мобильном приложении пользователю нужно подтвердить использование геолокации, чтобы вы могли отслеживать местоположение своего работника.</p>
![User5.png](/attachments/images/FAQ/USER/CreatingUser/user5.png)


<h5 id="movetocust">Перевод из сотрудников в заказчики</h5>
Теперь в системе HubEx вы можете перевести пользователя из раздела «Сотрудники» в раздел «Заказчики» буквально нажатием одной кнопки. Это может потребоваться, если вы случайно создали сотрудника, а это заказчик. Поскольку права заказчика и сотрудника разграничены, то, например, отсканировав QR-код, пользователь может получить больше данных, чем ему следовало бы увидеть.

Для того, чтобы перевести сотрудника в заказчики, нужно просто зайти в профиль сотрудника, после чего нажать на кнопку «3 точки», находящуюся в правом верхнем углу, а затем нажать «Перевести к заказчикам».
![User11.png](/attachments/images/FAQ/USER/CreatingUser/user11.png)

Теперь вам осталось подтвердить желаемое изменение, нажав кнопку «Подтвердить» в всплываемом окошке.

![User12.png](/attachments/images/FAQ/USER/CreatingUser/user12.png)

Обратите внимание, что при переводе пользователя из сотрудников в заказчики, его роль не меняется.


<p> Для того, чтобы ускорить процесс добавления сотрудников в систему HubEx, воспользуйтесь функцией «Импорт». Подробнее про это читайте <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#workers"> здесь.</a></p>
<p> А для того чтобы выгрузить всю информацию по сотрудникам из системы HubEx, воспользуйтесь функцией «Экспорт». Подробнее про эту функцию читайте <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#workers"> здесь.</a></p>

### Следующие шаги:
- [Создание обслуживаемых компаний](./CreatingCompany.md)
- [Ввод обслуживаемого оборудования](./CreatingObjects.md)
- [Создание заказчика](./CreatingCustomer.md)




____
- [Перейти в меню](http://wiki.hubex.ru)
