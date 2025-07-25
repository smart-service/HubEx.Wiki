---
title: Настройка оповещений
description: Настройка оповещений в HubEx находится в консоли администратора в меню Настройки оповещений и состоит из двух этапов. Настройки Правила выбора получателя, с помощью котрого определяются пользователи для получения уведомления. И настройки Триггера уведомления - специального условия, выполнение которого запускает отправку оповещений. Также в триггере содержится шаблон сообщения, способ его отправки и указание правила выбора получателя.
keywords: оповещения, уведомления, пуш-уведомление, триггер уведомления, hubex, хабекс, хубекс, хабикс
---


#### Настройка оповещений
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
<meta charset="utf-8">
</head>
<body>
<p>В этом разделе вы узнаете, как настроить:</p>
<ul>
    <li><a href="#rule">Правила выбора получателя;</a></li>
    <li><a href="#notiftrig">Триггеры уведомления.</a></li>
</ul>

<p>С помощью оповещений вы всегда будете в курсе происходящего. Любое событие: переход на стадию, назначение
    исполнителя,
    изменение времени заявки - может быть преобразовано в сообщение и отправлено либо на электронную почту, либо в
    виде
    push-уведомления (пуш-уведомления) на мобильное устройство/в web-приложении.</p>
<p>Push-уведомление - это короткое всплывающее уведомление на мобильном телефоне/в web-приложении. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/ADMIN/Notifications/Push.jpg"/>
</div>
<p>Также уведомления будут отображаться в разделе <strong>Уведомления</strong> мобильного приложения. Подробнее читайте в статье: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/NotificationInMob.html">Лента уведомлений в мобильном
    приложении</a>. </p>

<p>Прочтите пошаговую инструкцию ниже или посмотрите пример настройки push-уведомления в нашем обучающем
    видеоролике.</p>

<div class="video-player-container" data-player-id="player22">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/93iMHUnSK94" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239091&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p>Обратите внимание! Настраивайте уведомления под одной учетной записью в web-приложении (например, администратора
    системы, руководителя и т.д.), а проверку получения уведомлений делайте в мобильном приложении <strong>HubEx
        исполнитель</strong> под другой учетной записью (например, сервисного специалиста). </p>

<p>Настройка оповещений в HubEx находится в консоли администратора в меню <strong>Настройки оповещений</strong> и
    состоит из двух
    этапов:</p>
<ol>
    <li>настройка <strong id="#rule">Правила выбора получателя</strong>: с помощью правила определяются пользователи,
        которые должны получить
        уведомление;
    </li>
    <li>настройка <strong id="#notiftrig">Триггера уведомления</strong>. Триггер уведомления - это условие, выполнение
        которого запускает отправку
        оповещений. Также в триггере содержится шаблон сообщения, способ его отправки и указание правила выбора
        получателя (выбрать можно будет несколько правил для отправки оповещений).
    </li>
</ol>

<h5 id="rule">Правила выбора получателя</h5>
<p>Перейдите в меню <strong>Настройки оповещений - Правила выбора получателя</strong>. Здесь вы можете отредактировать
    уже созданное
    ранее правила или создать новое по кнопке <strong>Создать правило выбора получателя</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/Notifications/Rule.jpg"/>
</div>
<p>Рассмотрим заполнение формы правила на примере создания правила для отправки push-уведомления исполнителю о том, что
    на него назначена <strong>Заявка</strong>:</p>
<ul>
    <li>в <strong>Названии правила выбора получателя</strong> укажите название, вы можете прописать в названии для
        какого типа оповещения
        вы создаете правило (push/mail), например, <strong>Назначена заявка (PUSH для исполнителя)</strong>;
    </li>
    <li>в поле <strong>Получатели уведомления</strong> выберите из выпадающего списка одну категорию пользователей,
        которая должна
        получить уведомление, например, <strong>Выбранный исполнитель по заявке</strong>;
    </li>
    <li>в поле <strong>Пользователь, который получит уведомление</strong> можно выбрать конкретного пользователя
        системы;
    </li>
    <li>в поле <strong>Роль, которая получит уведомление</strong> можно указать одну из <strong>Ролей</strong>, которая
        должна получить уведомление.
        Обратите внимание! Если вы выберете конкретного пользователя системы и еще укажете его <strong>Роль</strong>, то
        он
        получит 2 уведомления.
    </li>
    <li>в полях <strong>Email адреса</strong> и <strong>Номера телефонов</strong> можно указать через запятую варианты
        для отправки оповещений, если это
        необходимо.
    </li>

</ul>
<p>После создания правила нажмите кнопку <strong>Сохранить</strong>.</p>


<h5 id="notiftrig">Триггеры уведомления</h5>

<p>Следующий этап - создание <strong>Триггера уведомления</strong>. Перейдите в меню <strong>Настройки оповещений -
    Триггеры уведомления</strong>. Для
    создания нового нажмите кнопку <strong>Создать триггер уведомления</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/ADMIN/Notifications/Trigger.jpg"/>
</div>
<p>Рассмотрим заполнение формы триггера для отправки push-уведомления на мобильное приложение исполнителю о том, что
    на него назначена <strong>Заявка</strong>:</p>

<ul>
    <li>в поле <strong>Название триггера</strong> укажите его название, например, <strong>Назначена заявка (PUSH для
        исполнителя</strong>);
    </li>
    <li>в разделе <strong>Шаблон сообщения</strong> в поле <strong>Описании сообщения</strong> вы можете выбрать уже
        существующий вариант, который будет являться шаблоном к <strong>Заголовку сообщения</strong> и <strong>Тексту
            сообщения</strong>. Например, <strong>Назначена заявка (PUSH для исполнителя)</strong>.
        <p>Обратите внимание! <strong>Заголовок сообщения</strong> и <strong>Текст сообщения</strong> содержат в себе
            специальную разметку, которую не
            нужно удалять (обращение к
            номерам заявок @Model.TaskNumber и т.д.).</p>
        <p>Важно! Если вы будете менять текст сообщения в шаблоне, то он изменится во всех Триггерах уведомлений,
            созданных с данным шаблоном. Поэтому, если вам необходимо изменить текст сообщения в готовом шаблоне,
            рекомендуем скопировать текст и создать новый шаблон.</p>
    </li>
    <!--<li>в нижней части поля <strong>Описание сообщения</strong> находятся технические символы для оформления сообщения.
        Если вам необходимо отправить сообщение;
    </li>-->
    <!-- <img src="/attachments/images/FAQ/ADMIN/Notifications/TT.jpg" align="left" width="18" height="16"/>-->

    <!--<li>в <strong>Тексте сообщения</strong> внизу выберите символ  <strong>Тт</strong>, если хотите отправить push-уведомление или же символ <strong>M со стрелкой
    вниз</strong> для email (станет доступен после выбора способа <strong>Email</strong>);
</li>-->
    <li>в <strong>Способах отправки сообщения</strong> выберите <strong>Push</strong> или <strong>Email</strong>. В
        текущем
        примере мы настраиваем push-уведомление для
        исполнителя;
    </li>
    <li>при выборе варианта <strong>Push</strong> ниже появятся поля <strong>Куда отправлять сообщения</strong>: здесь
        нужно выбрать, для какого
        мобильного приложения или веб-приложения настраивается push-уведомление. Для примера выбираем <strong>Мобильное
            приложение инженера</strong>;
    </li>
    <li>в блоке <strong>Условия отправки</strong> укажите условия, при которых будет отправлено
        уведомление:
        <ul>
            <li><strong>Событие, из-за которого сработает триггер</strong>: можно выбрать из предложенных вариантов,
                например,
                <strong>Изменено назначение по заявке (отложенное)</strong>. Слово "отложенное" в названии события
                означает, что
                уведомление придет не моментально при назначении заявки, а спустя пару минут. Эта задержка сделана
                специально на случай, если исполнителя выбрали ошибочно и сразу же изменили на другого, для избежания
                отправки большого количества оповещений;
            </li>
            <li>в поле <strong>Критичности заявки, при которых будет отправлено уведомление</strong> можно выбрать одну
                или несколько
                критичностей, созданных в меню <strong>Настройки заявки - Критичности заявки</strong>. Указать несколько
                критичностей
                можно выбирая их последовательно из списка;
            </li>
            <li>в поле <strong>Стадии заявки, на которых будет отправлено уведомление</strong> можно указать одну или
                несколько стадий
                заявки. Указать несколько стадий можно выбирая их последовательно из списка.
            </li>
        </ul>
        Обратите внимание! Если вы заполните поле <strong>Событие из-за которого сработает триггер</strong> и
        <strong>Стадии заявки, на которых будет отправлено уведомление</strong>, то пользователь получит 2 уведомления;
    </li>

    <li>чтобы добавить правило, нажмите кнопку <strong>Добавить правило выбора получателя</strong> и выберите его из
        списка. Выше мы создали правило <strong>Назначена заявка (PUSH для исполнителя)</strong>. Правил выбора может
        быть добавлено несколько.
    </li>
</ul>

<p>После заполнения всех полей, нажмите кнопку <strong>Сохранить</strong>.</p>
<p>Работу триггеров уведомлений можно ограничивать с помощью переключателей в общем списке. Неиспользуемый триггер можно отключить (перевести переключатель влево - в положение выключен). Таким образом можно эффективно управлять отправкой уведомлений по различным событиям. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/ADMIN/Notifications/Trigger2.jpg"/>
</div>

<p>Еще один пример настройки оповещений описан в статье <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/CustomerAgreement.html">Согласование с заказчиком: жизненный цикл,
    стадии согласования, уведомления</a>.</p>

<p>Если вам не приходят уведомления из приложения <strong>HubEx исполнитель</strong> или <strong>HubEx заказчик</strong>,
    откройте раздел Настройки на
    вашем мобильном устройстве и перейдите к списку всех приложений. Найдите приложение HubEx и включите показ всех
    уведомлений, а также разрешите показывать всплывающие уведомления. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/HowToNotificationsToMobile.html">Проверка получения уведомлений
        от приложений HubEx</a>.
</p>

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
___
### Следующие шаги:
- [Создание дополнительных полей в объекте](https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFieldsObject.html)
- [Создание дополнительных полей в заявке](https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html)
- [Создание атрибутов для чек-листа](./TicketAttribute.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
