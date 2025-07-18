---
title: Вход в мобильное приложение Заказчика и Сотрудника
description: Для того чтобы Сотрудники и Заказчики могли пользоваться мобильными приложениями необходимо выполнить следующие действия.
keywords: авторизация по смс, sms авторизация, вход в мобильное приложение, войти в приложение, приложение заказчика, приложение исполнителя, мобильное приложение заказчика, мобильное приложение исполнителя, hubex, хабекс, хубекс, хабикс
---

#### Вход в мобильное приложение Заказчика и Сотрудника
<html>
<head>
    <style>
        .video-player-container {
            margin: 20px 0;
        }
        .video-source-selector {
            margin-bottom: 10px;
        }
        .source-btn {
            padding: 8px 16px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 5px;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        .source-btn:hover {
            background: #e0e0e0;
        }
        .source-btn.active {
            background: #45688e;
            color: white;
            border-color: #45688e;
        }
        .video-frame {
            width: 560px;
            height: 315px;
            max-width: 100%;
        }
        .video-frame iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
<meta charset="utf-8">
<p>В этом разделе вы узнаете:</p>
<ul>
    <li><a href="#registration">Как сотруднику и заказчику зарегистрироваться в мобильном приложении;</a></li>
    <li><a href="#password">Как создать пароль при первом входе в мобильное приложение;</a></li>
    <li><a href="#role">Какие настройки ролей необходимо задать для использования мобильных приложений.</a></li>
</ul>

<h5 id="registration">Регистрация сотрудника и заказчика в мобильном приложении</h5>

<p>Для того чтобы <Strong>Сотрудники</Strong> и <Strong>Заказчики</Strong> могли пользоваться мобильными приложениями
    необходимо выполнить следующие действия:</p>
<ol>
    <li>пользователю необходимо скачать мобильное приложение <strong>HubEx исполнитель</strong> <a
            href="https://play.google.com/store/apps/details?id=ru.hubex.engineer">для Android</a> или <a
            href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B/id1386688688">для
        iOS</a>;
        <p>или скачать мобильное приложение <strong>HubEx заказчик</strong> <a
                href="https://play.google.com/store/apps/details?id=ru.hubex.customer">для Android</a> или <a
                href="https://apps.apple.com/ru/app/hubex-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%87%D0%B8%D0%BA%D0%B0/id1386631658">для
            iOS</a>. </p>
    </li>
    <li>для пользователя необходимо создать учетную запись <Strong>Сотрудника</Strong> и (или) <Strong>Заказчика</Strong>
        в HubEx: создать учетную
        запись - это то же самое, что и создать
        пользователя в меню <Strong>Пользователи</Strong> в справочниках <Strong>Сотрудники</Strong> и (или) <Strong>Заказчики</Strong>.

        <p>Подробнее читайте в
            статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание
                пользователя вашей системы</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание
                заказчика</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.</p>

        <p>При создании нового пользователя необходимо указать его мобильный телефон или электронную почту. Мобильный
            телефон или адрес электронной почты будет являться логином в системе
            HubEx. </p>
        
        <p>Новый пользователь получит письмо на указанный адрес почты или сообщение на указанный номер телефона.
            В письме (сообщении) будет находиться ссылка для подтверждения регистрации и создания пароля.</p>
        <p></p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Mob.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Mob2.jpg"/>
        </div>
        </p>


        <p>Обратите внимание! Пользователь должен пройти регистрацию и создать пароль для HubEx. Иначе он не сможет
            авторизоваться в мобильном приложении по логину и паролю, а также не сможет авторизоваться по одноразовому
            код-паролю. Чтобы пользователь мог пользоваться авторизацией по код-паролю, при создании его учетной записи,
            обязательно указывайте мобильный телефон.</p>
            <p>Новый пользователь также может пройти регистрацию при первом входе в мобильное приложение. Об этом читайте <a href="#password">ниже</a>.</p>

        <!--скачать скрины и заменить картинки!!!!-->
        <p>Альтернативный способ авторизации в HubEx для зарегистрированных пользователей - это вход по
            одноразовому код-паролю (sms авторизация, авторизация по смс). Для этого при входе в мобильное приложение нужно нажать кнопку <strong>Вход по
                одноразовому коду</strong>.</p>
                    <p>Обратите внимание! Вход по код-паролю доступен только для мобильных номеров, зарегистрированных в Российской Федерации (формат +7хххххххххх).</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 35%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Mob4.jpg"/>
        </div>

        <p>Затем необходимо будет указать номер телефона (который был указан для пользователя в учетной записи) и нажать
            кнопку
            <strong>Продолжить</strong>. На указанный номер телефона в sms-сообщении будет отправлен пароль из четырех
            цифр. Если сообщение не пришло
            в течение 60 секунд,
            можно запросить код-пароль повторно.</p>
        <p>Ввести код из sms-сообщения можно вручную, либо с помощью автоматического заполнения.</p>
        <p>Если код был введен верно, приложение запустится в обычном режиме.</p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Code.jpg"/>
        </div>

    </li>

</ol>

<h5 id="password">Создание пароля при первом входе в приложение</h5>
<p>Если пользователь не завершил процедуру регистрации через электронную почту или sms-приглашение, то он сможет завершить ее при первом входе в мобильное приложение. </p>
<p>Когда пользователь входит в систему в первый раз, он получит приглашение создать пароль, а затем подвтердить решистрацию через sms-код. Этот удобный для пользователя подход обеспечивает беспрепятственный процесс завершения регистрации в приложении. Затем пользователь сможет входить в приложение, используя созданный пароль или используя авторизацию по sms (напоминаем, что авторизация по sms становится доступной только после завершения регистрации пользователя и создания пароля для учетной записи). </p>
 <div>
            <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Password.jpg"/>
        </div>

 <div>
 <img style="margin: 0 auto; display: block; max-width: 70%;"
                 src="/attachments/images/FAQ/USER/EnterToMob/Password2.jpg"/>
 </div>

<h5 id="role">Настройка ролей для использования мобильного приложения</h5>
<p>При создании учетной записи пользователя очень важно предоставить для <Strong>Роли</Strong> этого пользователя доступ к использованию мобильных приложений. </p>
    <p>в настройках <Strong>Роли</Strong> в разделе <Strong>Приложения</Strong> необходимо указать, к каким приложениям
        разрешить доступ:</p>
        <ul>
            <li><Strong>Веб-приложение</Strong> открывает доступ к использованию приложения с помощью браузера (Chrome,
                Opera, Mozilla
                Firefox и т.д.;
            </li>
            <li><Strong>Веб-приложение администрирования</Strong> открывает доступ к консоли администрирования;</li>
            <li><Strong>Доступ только к API</Strong> относится к системному доступу взаимодействия с HubEx
                (рекомендовано включать для
                всех);
            </li>
            <li><Strong>Мобильное приложение заказчика</Strong> разрешит пользователю входить в <strong>HubEx
                заказчик</strong>;
            </li>
            <li><Strong>Мобильное приложение инженера</Strong> разрешит пользователю входить в <strong>HubEx
                исполнитель</strong>;
            </li>
            <li><Strong>Электронный паспорт оборудования</Strong> разрешит просматривать паспорт Объекта при
                сканировании QR-кода.
                Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание
                    шаблона заявки, подача заявки по QR-коду</a>.
            </li>


        </ul>
   
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/EnterToMob/Role.jpg"/>
    </div>


<p>Дополнительно ознакомьтесь с обучающим видеороликом <strong>Мобильное приложение инженера. Как работать сервисному
    специалисту на телефоне?</strong> В нем представлен широкий обзор функциональных возможностей мобильного приложения
    для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с <Strong>Заявками</Strong>, с
    чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом На смене. </p>

<div class="video-player-container" data-player-id="player7">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/JmMZzkI6o-c" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239104&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p>Для заказчиков также доступен обучающий видеоролик <strong>Мобильное приложение заказчика. Как заказчику создавать и отслеживать заявки?</strong> В обучающем видео показан функционал работы с мобильным приложением заказчика: работа с <Strong>Заявками</Strong>, подписание акта, общение в чатах. Дополнительно по теме ознакомьтесь со статьей: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CustomerApp.html">Работа с заявками в мобильном приложении HubEx заказчик: заявки, акты, оценка исполнителей</a>. </p>

<div class="video-player-container" data-player-id="player8">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/TbCdCcZzVdc" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239112&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<script>
    function hideSiblingVideo(activeVideo){
        const nextSibling=activeVideo.nextElementSibling
        const prevSibling=activeVideo.previousElementSibling
        if(nextSibling){
            nextSibling.style.display="none"
        }
        if(prevSibling){
            prevSibling.style.display="none"
        }
    }
 
    function switchActiveButtons(activeButton){
        const nextSibling=activeButton.nextElementSibling
        const prevSibling=activeButton.previousElementSibling
        const activeClass="active"
        if(nextSibling){
            nextSibling.classList.remove(activeClass)
        }
        if(prevSibling){
            prevSibling.classList.remove(activeClass)
        }
        activeButton.classList.add(activeClass)
        return activeButton?.dataset?.source
    }

    function switchShowVideos(activeContainer,label){
        const videoClass=`video-frame ${label}-frame`
        const videoFrame=activeContainer.querySelector(videoClass)
        const videos=activeContainer.children[1].children
        const activeVideo=Array.from(videos).filter((item)=>item.className===videoClass)
        console.debug({activeVideo})
        hideSiblingVideo(activeVideo[0])
        activeVideo[0].style.display="block"
    }

    const allVideoContainers=document.querySelectorAll(".video-player-container")
    allVideoContainers.forEach((container)=>{
        container.addEventListener("click",(e)=>{
            if(!e.target.classList.contains('source-btn')) return;
            
            console.debug({e},{container})
            const targetButton=e.target
            const activeSource=switchActiveButtons(targetButton)
            console.debug(activeSource)
            if(activeSource){
                switchShowVideos(container,activeSource)
            }
        })
    })
</script>

</body>
</html>
____
- [Перейти в меню](http://wiki.hubex.ru)

