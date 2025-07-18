---
title: Дополнительные поля
description: Дополнительные поля расширяют возможности внесения и хранения учетной информации, делают ваше взаимодействие с системой персонализированным. Вы сможете вносить площадь объекта, стоимость оборудования и т.д. Создать дополнительные поля на форме заявки можно в "Консоли администратора" в разделе левого бокового меню "Настройки системы" - подраздел "Дополнительные поля".
keywords: дополнительные поля в заявке, дополнительные поля для заявки, поля на форме заявки, доступ к дополнительному полю, дополнительные поля для компаний, дополнительные поля для договора, дополнительные поля в объекте, дополнительные поля в оборудовании, дополнительные поля для выполненных работ, hubex, хабекс, хубекс, хабикс
---

<h1>Дополнительные поля</h1>

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

<p>Содержание статьи:</p>

<ul>
    <li><a href="#AdditionalFields1">Создание дополнительных полей;</a></li>
    <li><a href="#AdditionalFields2">Дополнительные поля в компаниях;</a></li>
    <li><a href="#AdditionalFields3">Дополнительные поля в объектах/оборудовании;</a></li>
    <li><a href="#AdditionalFields4">Дополнительные поля в заявках;</a></li>
    <li><a href="#AdditionalFields5">Дополнительные поля в выполненных работах;</a></li>
    <li><a href="#AdditionalFields6">Дополнительные поля в чек-листах;</a></li>
    <li><a href="#AdditionalFields7">Дополнительные поля в договорах.</a></li>
</ul>

<h2 id="AdditionalFields1">Создание дополнительных полей</h2>

<p><strong>Дополнительные поля</strong> расширяют возможности внесения и хранения учетной информации.</p>
<p><strong>Дополнительные поля</strong> можно создать для:</p>

<ol>
    <li>Компаний;</li>
    <li>Объектов/оборудования;</li>
    <li>Заявок;</li>
    <li>Выполненных работ;</li>
    <li>Чек-листов;</li>
    <li>Договоров.</li>
</ol>

<p>Дополнительные поля для всех вышеуказанных сущностей системы создаются в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">Консоли администратора</a>, в разделе левого бокового меню <strong>"Настройки системы"</strong>, подраздел <strong>"Дополнительные поля"</strong>.</p> 
<p>Чтобы создать дополнительное поле нажмите на кнопку <strong>"Создать поле"</strong></p>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsNew/AdditionalFieldsNew1.png"/></div></p>
<p>Заполните форму создания дополнительного поля интересующими вас параметрами:</p>
<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsNew/AdditionalFieldsNew2.png"/></div></p>
<ol>
    <li><strong>Название поля</strong>: обязательное поле для заполнения в свободной форме;</li>
    <li><strong>Тип поля</strong>: обязательное поле для заполнения. Выберите один из предложенных типов для создаваемого дополнительного поля:
        <ul>
            <li>Строка;</li>
            <li>Целое число;</li>
            <li>Дробное число;</li>
            <li>Дата;</li>
            <li>Дата и время;</li>
            <li>Значение из списка (единственный выбор/множественный выбор);</li>
            <li>Многострочный текст</li>
            <li>Переключатель;</li>
            <li>Вложенный файл;</li>    
            <li>Значение из справочника (единственный выбор/множественный выбор).</li>
        </ul>
    </li>
    <li><strong>Единица измерения</strong>: необязательное поле для заполнения. Выберите одну из предложенных единиц измерений;</li>
    <li><strong>Используется для</strong>: обязательное поле для заполнения. Выберите в каких сущностях системы будет использоваться создаваемое дополнительное поле.
        <p><strong>Обратите внимание!</strong> Для одного дополнительного поля можно выбрать несколько сущностей. Например, одно дополнительное поле может использоваться как для заявок, так и для объектов/оборудования;</p>
    </li>
    <li><strong>Показывать в паспорте объекта</strong>: необязательное поле для заполнения.
        <p><strong>Обратите внимание!</strong> Данный параметр используется только для дополнительного поля объекта/оборудования. Паспорт объекта – это данные объекта/оборудования, которые отражаются в "Мобильном приложении HubEx для исполнителя" и "Мобильном приложении HubEx для заказчика" при сканировании QR-кода.</p>
    </li>
</ol>

<p>После заполнения всех интересующих вас параметров на форме создания дополнительного поля, нажмите на кнопку <strong>"Сохранить"</strong>, далее <strong>"Сохранить изменения"</strong>.</p>

<p><strong>Обратите внимание!</strong> В уже созданном дополнительном поле нет возможности изменить "Тип поля". Если вы хотите изменить "Тип поля" в существующем дополнительном поле, то нужно создать новое дополнительное поле, а старое удалить.</p>

<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsNew/AdditionalFieldsNew3.png"/></div></p>

<p>Дополнительно вы можете ознакомиться с обучающим видеороликом <strong>Как создать дополнительные поля в HubEx?</strong></p>

<div class="video-player-container" data-player-id="player1">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/1hRsaFz_sEQ" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239088&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h2 id="AdditionalFields2">Дополнительные поля в компаниях</h2>

<p>Для <strong>Компаний</strong> можно создавать условия сотрудничества, чтобы опираться на них при заключении новых сделок, поля для указания социальных сетей или внесения информации по отрасли.</p>
<p>Рассмотрим пошагово создание дополнительных полей для карточки <strong>Компании</strong>.</p>

<ul>
    <li><strong>Название поля</strong>: Например, для компании можно создать варианты условий сотрудничества, чтобы указывать разные наборы условий для разных компаний;</li>
    <li><strong>Тип поля</strong>: Например, подходящий тип для создания условий - <strong>Множественный выбор из списка</strong>.
        <p>Вы можете создавать строковые поля и указывать, например, комментарии, дату основания компании и другие поля для хранения полезной информации.</p>
    </li>
    <li><strong>Единица измерения</strong>: Можно выбрать согласно тому, в каких единицах вы хотите указывать информацию (единицы указываются для измеримых величин);</li>
    <li><strong>Используется для</strong>: нужно указать использование для <strong>Компаний</strong>;</li>
    <li><strong>Показывать в паспорте объекта</strong>: не нужно выбирать, так как этот параметр используется только в дополнительном поле для объектов/оборудования.</li>
</ul>

<p><div> <img style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/AdditionalFieldsCompany/AddFieldCompany0.jpg"/></div></p>

<p>Все дополнительные поля будут располагаться в карточке компании внизу под <strong>Контактными лицами</strong>.</p>

<p><strong>Обратите внимание!</strong> Созданные дополнительные поля для компаний будут доступны для заполнения в карточке уже созданных компаний, так и для новых.</p>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/AdditionalFieldsCompany/AddFieldCompany.jpg"/> </div></p>

<p>Таким образом, создание дополнительных полей для компаний позволит вам удобно хранить всю необходимую информацию в одном месте и эффективно управлять данными.</p>

<h2 id="AdditionalFields3">Дополнительные поля в объектах/оборудовании</h2>

<p>Рассмотрим пошагово создание дополнительных полей для карточки <strong>Объекта</strong>:</p>

<ul>
    <li><strong>Название поля</strong> Например, "Площадь номера";</li>
    <li><strong>Тип поля</strong>: Например, вам нужно указать площадь комнаты, подходящий для этого тип - "Дробное число"; </li>
    <li><strong>Единица измерения</strong>: Если для объекта нам нужно внести площадь комнаты, то "Квадратные метры";</li>
    <li><strong>Используется для</strong>: нужно указать использование для <strong>Объектов</strong>.</li>
    <li>При необходимости поставьте галочку напротив пункта <strong>Показывать в паспорте объекта</strong>. Таким образом ваше дополнительное поле отобразится при сканировании QR-кода объекта.
        <p>Подробнее читайте в статьях:</p>
            <ol>
                <li><a href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a></li>
                <li><a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки, подача заявки по QR-коду</a></li>
                <li><a href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без приложения, самостоятельная регистрация нового пользователя</a>.</li>
            </ol>
    </li>
</ul>

<p><div> <img style="margin: 0 auto; display: block; max-width: 60%;" src="/attachments/images/FAQ/USER/AdditionalFieldsObject/ADDField.jpg"/> </div></p>

<p>Теперь созданное поле можно добавить в карточку объекта/оборудования:</p>

<ul>
    <li>Перейдите на вкладку <strong>"Дополнительные поля"</strong>;</li>
    <li>Нажмите на кнопку <strong>"+Добавить поле";</strong></li>
    <li>В выпадающем списке выберите нужное поле;</li>
    <li>Нажмите кнопку <strong>"Добавить"</strong>.</li>
</ul>

<p>Теперь дополнительное поле можно заполнить. Не забудьте сохранить изменения.</p>

<p><div><img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsObject/ADDFieldObj.jpg"/></div></p>

<h2 id="AdditionalFields4">Дополнительные поля в заявках</h2>

<p>Рассмотрим пошагово создание дополнительных полей для <strong>Заявки</strong>:</p>

<ul>
    <li><strong>Название поля</strong>: Например, название <strong>"Стоимость оборудования"</strong>;</li>
    <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, вам нужно указать стоимость оборудования, подходящий для этого тип - <strong>Дробное число</strong>. Таким образом в это поле нельзя будет ввести ничего, кроме числового значения;</li>
    <li><strong>Единица измерения</strong>: Например, если вы хотите внести стоимость, то выбирайте рубли;</li>
    <li><strong>Используется для</strong>: Нужно указать использование для <strong>Заявок</strong>;</li>
    <li><strong>Показывать в паспорте объекта</strong>: не нужно выбирать, так как этот параметр используется только в дополнительном поле для объектов/оборудования.</li>
</ul>

<p> <div><img style="margin: 0 auto; display: block; max-width: 60%;" src="/attachments/images/FAQ/USER/AdditionalFields/ADDField.jpg"/></div> </p>

<p>Далее необходимо настроить видимость и доступ к новому дополнительному полю. В консоли администратора в левом боковом меню перейдите в раздел <strong>"Настройки заявки"</strong> - подраздел <strong>"Поля на форме заявки"</strong>.</p>

<ol>
<li>Выберите <strong>Роли пользователей</strong>, которым должно отображаться новое дополнительное поле для заявок;</li>
<li>Выберите <strong>Стадии заявки</strong>, на которых должно отображаться новое дополнительное поле для заявок;</li>
<li>В открывшейся таблице установите для нового дополнительного поля параметр RO / RW / RWM;
    <p><strong>Обратите внимание!</strong> Дополнительные поля располагаются внизу таблицы.</p>
</li>
<li>Сохраните изменения.</li>
</ol>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/AdditionalFields/AccessRights.jpg"/></div> </p>

Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка доступа к полям заявки</a>.

<p><strong>Обратите внимание!</strong> Дополнительные поля могут использоваться при фильтрации и поиске заявок в общем списке. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Filters.html">Список заявок, поиск заявок с помощью фильтров</a>.</p>

<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsNew/AdditionalFieldsNew4.png"/></div></p>

<p>Созданные вами дополнительные поля так же можно увидеть в <strong>Заявке</strong> в мобильном приложении.</p>
    
<div> <img style="margin: 0 auto; display: block; max-width: 40%;" src="/attachments/images/FAQ/USER/AdditionalFields/ADDFieldMob.PNG"/> </div>

<h2 id="AdditionalFields5">Дополнительные поля в выполненных работах</h2>

<p>Рассмотрим пошагово создание дополнительных полей для <strong>Выполненной работы</strong>.</p>

<ul>
    <li><strong>Название поля</strong>: в свободной форме. Например, Оценка внешнего вида объекта;</li>
    <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, вам нужно вписать текст, подходящий для этого тип - <strong>Строка</strong>;</li>
    <li><strong>Единица измерения</strong>: можно выбрать согласно тому, в каких единцах вы хотите указывать информацию: если поле подразумевает ввод текста, то выбирать единицу измерения не нужно;</li>
    <li><strong>Используется для</strong>: нужно указать использование для <strong>Выполненных работ</strong>.</li>
</ul>

<p> <div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/USER/AdditionalFieldsWorks/ADDField.jpg"/> </div> </p>

<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsNew/AdditionalFieldsNew5.png"/></div></p>

<h2 id="AdditionalFields6">Дополнительные поля в чек-листах</h2>

<p>Дополнительное поле для чек-листа это <strong>Атрибут</strong>.</p>
<p>Подробнее о создании атрибута читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Checklists.html#checklists3">Как создать атрибут</a>.</p>

<h2 id="AdditionalFields7">Дополнительные поля в договорах</h2>

<p>Рассмотрим пошагово создание дополнительных полей для карточки <strong>Договора</strong>.</p>

<p>Перейдите в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">Консоль администратора</a> в раздел левого бокового меню <strong>"Настройки системы"</strong> - подраздел <strong>"Дополнительные поля"</strong>. Нажмите кнопку <strong>"Создать поле"</strong>. В открывшейся форме заполните следующие реквизиты:</p>

<ul>
    <li><strong>Название поля</strong>: заполняется в свободной форме. Например, для создания переключателя о подписании договора в названии можно указать - Договор подписан;</li>
    <li><strong>Тип поля</strong>: выбирается под назначение данных. Например, подходящий тип для отображения статуса договора - <strong>Переключатель</strong>.
        <p>Вы можете создавать строковые поля и указывать, например, условия взаиморасчетов, создавать числовые поля и указывать максимальную стоимость сделки и так далее;</p>
    </li>
    <li><strong>Единица измерения</strong>: можно выбрать согласно тому, в каких единицах вы хотите указывать информацию (единицы указываются для измеримых величин);</li>
    <li><strong>Используется для</strong>: нужно указать использование для <strong>Договоров</strong>.</li>
</ul>

<p><div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsContract/AddField.jpg"/> </div></p>

<p>Все дополнительные поля будут располагаться в карточке договора внизу. Все договоры хранятся в разрезе заказчиков в карточке компании на вкладке <strong>"Договоры"</strong>.</p>
<p><strong>Обратите внимание!</strong> Созданные дополнительные поля будут доступны для каждого существующего в системе договора и каждого нового договора.</p>
<div> <img style="margin: 0 auto; display: block; max-width: 95%;" src="/attachments/images/FAQ/USER/AdditionalFieldsContract/AddField2.jpg"/> </div>

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
- [Календарь заявок](./Calendar.md)
- [Чек-листы](./Checklists.md)
- [Прикрепление выполненных работ](./AttachingFiles.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
