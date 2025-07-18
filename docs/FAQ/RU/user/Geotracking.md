---
title: История перемещений (геотрекинг)
description: Посмотреть историю перемещений и остановки сотрудника на карте можно в web-приложении в меню Карты - История перемещений. История перемещений (геотрекинг) отображает перемещения каждого сотрудника, у которого включена
    функция использования геопозиции. С помощью геотрекинга вы можете оценить эффективность работы мобильных исполнителей (время в пути, на заявке, остановки, простои).
keywords: история перемещений, геотрекинг, геотрэкинг, путевой лист, путевые листы, карта, перемещения сотрудника, сотрудники на карте, мобильные сотрудники, hubex, хабекс, хубекс, хабикс
---

#### История перемещений
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
В этом разделе вы узнаете:
<ul>
    <li><a href="#geo">Как работает История перемещений</a>;</li>
   <!-- <li><a href="#waybill">Как просмотреть и выгрузить путевой лист</a>;</li> -->
    <li><a href="#nomap">Что делать, если в меню нет пункта Карты</a>;</li>
    <li><a href="#noengineer">Что сделать, чтобы мобильные сотрудники отображались на карте</a>;</li>
        <li><a href="#settings">Какие настройки разных моделей телефонов могут повлиять на некорректную работу GPS.</a></li>
</ul>
<p><strong>История перемещений</strong> (геотрекинг) отображает перемещения каждого сотрудника, у которого включена
    функция использования геопозиции. С помощью геотрекинга вы можете оценить эффективность работы мобильных
    исполнителей: время в пути, на заявке, остановки, простои.</p>
<p>Для руководства контроль мобильных сотрудников - это сокращение рисков и сохранение репутации. Для исполнителей карта
    перемещений - это прозрачность работы и опора для разрешения спорных рабочих ситуаций.</p>

    <p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Как работает геотрекинг в HubEx</strong>.</p>

<div class="video-player-container" data-player-id="player36">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/gZjA_Vp7gh8" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239134&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="geo">Как работает История перемещений</h5>
<p>История перемещений (геотрекинг) доступна только в web-версии HubEx в меню <Strong>Карты - История перемещений</Strong>. Геотрекинг используется для ретроспективного анализа перемещений мобильных сотрудников, поэтому обновляется
    отчет один раз в день.</p>

    <p>Координаты в мобильном приложении считываются не чаще одного раза в три минуты. Также новые координаты считываются, когда перемещение сотрудника с мобильным телефоном происходит на 10 и более метров. Соответственно, погрешность координат составляет 10 метров. </p>
    <!-- В меню <Strong>История перемещний</Strong> вы также можете сформировать <Strong>Путевые листы</Strong> для сотрудников.-->

<p>Выберите дату, на которую хотите отследить перемещения сотрудников.</p>
<p>Система отберет данные по всем <Strong>Заявкам</Strong>, которые попали в выбранную дату. Также вы увидите общий пробег по исполнителям, время и сами <Strong>Заявки</Strong>. Обратите внимание! Если вы укажете дату позднее даты обновления
    отчета, то никакие данные в отчете не отобразятся. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Map.jpg"/>
</div>

<p>После установки даты вам станут доступны детальные отборы по <Strong>Исполнителям</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Map2.jpg"/>
</div>
<p>Приближать и отдалять карту можно с помощью колесика мышки.</p>

<p>Перемещение исполнителей на карте отображается зеленой пунктирной линией, направление стрелки указывает направление
    движения сотрудника.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Arrow.jpg"/>
</div>

<p>Серым маркером на карте отмечаются остановки сотрудника. Остановкой считается нахождение исполнителя в точке радиусом
    200 метров более 5 минут.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Stop.jpg"/>
</div>

<p>С помощью установки флажка <Strong>Отображение объектов</Strong> на карте вы можете включить отображение всех родительских объектов, которые есть в
    вашей системе и доступны вашему пользователю. Объекты будут отображаться черными метками на карте.</p>
<p>Данная настройка может пригодиться, например, в случае если вы хотите проверить, заезжал ли ваш сотрудник на
    какой-либо объект без заявки, были ли у него там незапланированные остановки.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Map3.jpg"/>
</div>

<p><Strong>Заявки</Strong> отображаются на карте синим маркером. При наведении мышки на синий маркер появляется основная информация по
    заявке.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Ticket.jpg"/>
</div>

<p>В правом нижнем углу находится блок <Strong>Движения по заявкам</Strong>. В нем отображаются все <Strong>Заявки</Strong>, по которым были
    движения по стадиям в заданный период времени. Список фильтруется при выборе исполнителя. </p>
<!--<p>Вы можете выбрать одну <Strong>Заявку</Strong> щелчком мыши, тогда на карте скроются все <Strong>Заявки</Strong> кроме выбранной.</p>-->
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Map4.jpg"/>
</div>

<!--
<h5 id="waybill">Как просмотреть и выгрузить путевой лист</h5>
<p>Вы можете получить путевой лист в разрезе <Strong>Сотрудников</Strong> и выгрузить его для работы с другими системами.</p>
<p>Путевые листы могут использоваться в качестве подтверждения целевого использования транспортного средства, топлива и
    т.д.</p>
<p>Получить путевой лист можно по кнопке <Strong>Путевой лист</Strong> в правом нижнем углу. Предварительно вы можете сделать отборы по
    <Strong>Заявкам</Strong>, исполнителям и т.д. В самом путевом листе также предусмотрен отбор по исполнителям. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Waybill.png"/>
</div>

<p>Путевой лист можно выгрузить по кнопке <Strong>Дополнительные параметры (три точки) - Экспортировать данные</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Waybill2.jpg"/>
</div>

<p>Выгрузить путевой лист можно либо
    в формате XLSX (таблицы Excel, объем до 150000 строк), либо в формате CSV (объем до 30000
    строк).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Waybill3.jpg"/>
</div>
<p>По нажатию кнопки <Strong>Экспортировать</Strong> автоматически будет создан и скачан файл, например, в Google Chrome скачанные файлы
    отображаются отдельной строкой внизу (все скачанные файлы сохраняются на вашем
    компьютере в папке Загрузки).</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Waybill4.jpg"/>
</div>

<p>Готовый файл в формате XLSX (таблицы Excel) выглядит следующим образом. Он может быть использован для загрузки данных
    в другие системы, например 1С.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Waybill5.jpg"/>
</div>

<p>Для путевого листа в меню <Strong>Дополнительные параметры (три точки) - Сортировка</Strong> доступно несколько вариантов сортировки
    данных.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/GeoTracking/WBSort.jpg"/>
</div>

<p>Обратите внимание! Если вы работаете с большими объемами данных в таблицах, при выборе различных вариантов сортировки
    системе потребуется некоторое время для обновления их а таблице. При обнолвении данных вы увидите символ загрузки в
    левом верхнем углу.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/GeoTracking/WBLoading.jpg"/>
</div>

-->

<h5 id="nomap">Что делать, если в меню нет пункта Карты</h5>
<p>Если в меню нет пункта <Strong>Карты</Strong>, настроить его отображение можно в
    консоли администратора в меню <Strong>Администрирование - Роли</Strong>. Для этого выберите и откройте роль пользователя, для
    которого недоступны Карты.</p>
<p>Найдите в разделе <Strong>Полномочия</Strong> блок <Strong>Карты</Strong> и установите для него флажок выбора.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Role.jpg"/>
</div>

<p>Подробнее читайте в статьях: <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">Вход в консоль администратора</a> и
    <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.</p>

<h5 id="noengineer">Что сделать, чтобы мобильные сотрудники отображались на карте</h5>
<p>Чтобы на карте отображались перемещения исполнителя, необходимо в карточке <Strong>Сотрудника</Strong> установить флажок
    <Strong>Отслеживание местоположения сотрудника</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Engineer.jpg"/>
</div>
<p>Сотрудник после установки на свой мобильный телефон приложения <strong>HubEx исполнитель</strong> должен разрешить приложению считывать
    свою геопозицию. Это можно сделать в настройках телефона c операционной системой iOS и Android.</p>

<div style="display: flex;">
    <img style="margin: 0 auto; display: block; max-width: 30%;"
         src="/attachments/images/FAQ/USER/GeoTracking/Mob1.jpg"/> <img
        style="margin: 0 auto; display: block; max-width: 30%;"
        src="/attachments/images/FAQ/USER/GeoTracking/Mob2.jpg"/>
</div>

<h5 id="settings">Настройки разных моделей телефонов, влияющие на некорректную работу GPS</h5>
<p>Корректная геолокация необходима не только для непосредственной работы с Заявками, но также и для корректного
    фиксирования передвижений исполнителя. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/GEOinMob.html">Геолокация в мобильном приложении исполнителя</a>.</p>
<p>Дополнительные настройки на устройствах Android, которые могут влиять на корректное использование геолокации
    (экономия батареи, режимы энергосбережения, оптимизация и тд):</p>
<ul>
    <li>для телефонов HTC: Настройки - Аккумулятор - Оптимизация аккумулятора - Не оптимизировано - Все приложения -
        HubEx - Не оптимизировать - Готово;
    </li>
    <li>для телефонов Huawei: Откройте настройки - Приложения - Настройки (значок гайки внизу) - Специальный доступ - Игнорировать оптимизацию
        батареи - Разрешено - Выбрать "Все приложения" - Включить приложение HubEx в список разрешенных - Разрешить;
    </li>
    <li>для телефонов LG: Настройки - Аккумулятор и экономия энергии - Использование заряда - Игнорировать оптимизацию - включить HubEx;</li>
    <li>для телефонов Samsung: Настройки - Приложения - выберите меню (три точки) в правом верхнем углу - Специальный доступ - Экономия заряда батареи - Все приложения - Выключить для HubEx;</li>
    <li>для телефонов Sony: Настройки > Аккумулятор - выберите меню (три точки) в правом верхнем углу - Оптимизация аккумулятора - Приложения - выберите HubEx;</li>
    <li>для телефонов Xiaomi:</li>
    <ol>
        <li>Настройки > Дополнительные настройки - Аккумулятор & работа - Управлять использованием аккумулятора приложениями - apps - HubEx;</li>
        <li>Настройки > Дополнительные настройки - Доступ - Местоположение - Использовать высокую точность для режима местоположения и разрешить доступ к данным о местоположении.</li>
    </ol>
</ul>

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
- [Экспорт](./Export.md)
- [Импорт](./Import.md)
- [Бренд компании](./Branding.md)


____
- [Перейти в меню](http://wiki.hubex.ru)
