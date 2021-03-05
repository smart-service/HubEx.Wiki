---
title: Служебные пользователи
description: Служебные пользователи или сервисные учетные записи необходимы для интеграции с внешними системами (Битрикс 24) и
    подачи заявок незарегистрированными пользователями. Настройка сервисный учетных записей происходит в меню консоли администрирования Интеграция - Служебные пользователи.
keywords: служебные пользователи, сервисные учетные записи, анонимный пользователь, пользователь апи, пользователь api, hubex, хабекс, хубекс, хабикс
---

#### Служебные пользователи
<html>
<meta charset="utf-8">

</html>

<body>
<p>Служебные пользователи или сервисные учетные записи необходимы для интеграции с внешними системами (Битрикс 24) и
    подачи заявок незарегистрированными пользователями. Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Integration.html">Пошаговая интеграция с Битрикс
        24</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без
        приложения, самостоятельная регистрация нового пользователя</a>. </p>

<p>Подключить и настроить сервисные учетнеы записи можно в <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
    администратора</a> в меню <strong>Интеграция - Служебные пользователи</strong>:</p>
<ol>

    <li><strong>Пользователь API</strong> используется для настройки интеграции со сторонними системами (Битрикс 24).</li>
    <ul>
  <li>  Переключите тумблер
        вправо и установите необходимые настройки: выберите какие <strong>Роли</strong> получат
        возможность использовать интеграцию со сторонними системами (рекомендуется выдавать такие права только Начальнику
        сервисной службы и Администратору). 
        Также выберите <strong>Участки</strong>, информацию по которым хотите интегрировать.
        Нажмите кнопку <strong>Сгенерировать</strong> и скачайте сформированный токен доступа.
        <p>В скачанном текстовом документе скопируйте ключ.</p>
    </li>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 85%;"
         src="/attachments/images/FAQ/ADMIN/Integration/API.jpg"/>
</div></p>

    <li>Перейдите в меню консоли <strong>Интеграция - Ключи</strong> и создайте два ключа:

        <ul>
            <li>Первый ключ: с названием <strong>hubex_token</strong>, в поле <strong>Значение</strong> введите код из скачанного файла;</li>
            <p> <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Integration/integr4.png"/>
        </div></p>

            <li>Второй ключ: с названием <strong>request_path</strong>, в поле Значение введите <strong>HubEx.INT.Bitrix24.Api/Api/webhook</strong>.</li>
            <p> <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Integration/integr5.png"/>
        </div></p>
        </ul>
        <p>После создания двух ключей вкладка <strong>Ключи</strong> должна выглядеть так:</p>
    </li>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/Integration/Keys.jpg"/>
</div></p>
    </ul>
    <li><strong>Анонимный пользователь</strong> используется для того, чтобы незарегистрированные пользователи могли подавать <Strong>Заявки</Strong>.
        В настройках Анонимного пользователя укажите,
        какая <Strong>Роль</Strong> будет использована для незарегистрированного пользователя. Например,
        <Strong>Заказчик</Strong>. Укажите <Strong>Участки</Strong>, по которым возможно создание <Strong>Заявок</Strong>.
        </p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/SelfRegister/Anonym.jpg"/>
        </div>
    </li>
</ol>
</body>
____
- [Перейти в меню](http://wiki.hubex.ru)
