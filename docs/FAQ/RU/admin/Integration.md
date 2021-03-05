---
title: Интеграция с Битрикс 24
description: В системе HubEx предусмотрена интеграция с Битрикс 24. При создании Заявки в HubEx, она также будет появляться в Битрикс 24 на вкладке
Задачи и проекты (на сайте Битрикс 24). Рассмотрим по шагам настройку интеграции с Битрикс 24.
keywords: битрикс 24, интеграция, интеграция с битрикс 24, hubex, хабекс, хубекс, хабикс
---

#### Интеграция с Битрикс 24
<html>
<meta charset="utf-8">

</html>

<body>
<p>В системе HubEx предусмотрена интеграция с Битрикс 24. При создании <strong>Заявки</strong> в HubEx, она также будет появляться в Битрикс 24 на вкладке
    <strong>Задачи и проекты</strong> (на сайте Битрикс 24).</p>
<p> Рассмотрим по шагам настройку интеграции с Битрикс 24:</p>

<ol>
    <li>Перейдите в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
        администратора</a> в меню <strong>Интеграция - Служебные пользователи</strong>.
    </li>

       <li>Активируйте <strong>Пользователя API</strong>. Укажите, какие <strong>Роли</strong> получат
        возможность интеграции со сторонними системами (рекомендуется выдавать такие права только Начальнику
        сервисной службы и Администратору). Также выберите <strong>Участки</strong>, информацию по которым хотите интегрировать.
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
         <p> <div>
             <img style="margin: 0 auto; display: block; max-width: 70%;"
                  src="/attachments/images/FAQ/ADMIN/Integration/Keys.jpg"/>
         </div></p>
    </li>
    <li>Перейдите на сайт Битрикс 24 на вкладку <strong>Вебхуки</strong>. Нажмите на кнопку <strong>Добавить вебхук</strong> и выберите <strong>Входящий вебхук</strong>.
        На странице с правами доступа выбрерите только следующие пункты: <strong>Задачи</strong> и <strong>Задачи(расширенные
        права)</strong>. Внизу страницы нажмите кнопку <strong>Сохранить</strong>.
    </li>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/ADMIN/Integration/integr7.png"/>
</div></p>

    <p>После того, как вы сохранили новый вебхук, у вас появится ссылка, которую вам необходимо скопировать до текста
        <strong>/profile/</strong>.</p>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/ADMIN/Integration/integr8.png"/>
</div></p>

    <li> Вернитесь в HubEx в меню консоли администратора <strong>Интеграция - Webhook'и</strong>. Нажмите кнопку <strong>Добавить webhook</strong>.
    Укажите желаемое название для нового вебхука, а затем в поле <strong>URL webhook'a</strong> введите:
    <strong>http://localhost:19081/${request_path}/${hubex_token}/?bitrix24Url=</strong>. После знака равно (без пробелов) вставьте
    адрес, скопированный с Битрикс 24.
        <p>Привяжите новый вебхук к событию или <strong>Стадии заявки</strong>.
    Нажмите кнопку <strong>Активировать</strong> и <strong>Сохранить</strong>.</p> </li>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/Integration/integr9.png"/>
</div></p>

    <li> Теперь при создании <strong>Заявки</strong> в HubEx, она будет автоматически создаваться в Битрикс 24. <strong>Заявки</strong> в Битрикс 24 находятся на
        вкладке <strong>Задачи и проекты</strong> (на сайте Битрикс 24). Если в списке уже есть <strong>Заявки</strong>, то новые
        будут отображаться в конце списка. По нажатию на название <strong>Заявки</strong> вы сможете увидеть подробную информацию.
    </li>
    <p> <div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/ADMIN/Integration/integr10.png"/>
</div></p>

</ol>
</body>

____
- [Перейти в меню](http://wiki.hubex.ru)
