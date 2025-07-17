---
title: Поля на форме заявки, настройка доступа к полям заявки
description: Настроить доступ к полям на форме заявки можно в меню консоли администрирования Настройка заявки - Поля на форме заявки. Вы можете запретить редактировать основные поля на форме заявки для разных ролей и на разных стадиях заявки, можете настроить обязательное заполнение основных и дополнительных полей на форме заявки. 
keywords: поля на форме заявки, доступ к полям, дост к полю, видимость поля, дополнительные поля, hubex, хабекс, хубекс, хабикс
---

#### Поля на форме заявки: настройка доступа к полям заявки
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
<p>В этом разделе вы узнаете:</p>
<ul>
    <li><a href="#fieldsaccess">Как настраивается доступ к основным и дополнительным полям на форме заявки</a>;</li>
    <li><a href="#access">Какие бывают уровни доступа к полям на форме заявки</a>;</li>
    <li><a href="#importantfields">Какие поля на форме заявки нельзя исключать</a>;</li>
    <li><a href="#accesscopy">Как копировать настройки доступа в разрезе Ролей и Стадий</a>.</li>
</ul>
<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Поля на форме заявки: настройка доступа к полям заявки</strong>.</p>

<div class="video-player-container" data-player-id="player35">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/EVPSTI7zQ58" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239107&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>
        
<p>Доступ к полям на форме заявки настраивается с помощью раздела в консоли администрирования <Strong>Настройки заявки - Поля на форме заявки</Strong>: вы можете настроить
    отображение и возможность редактирования 
    всех полей на форме заявки. Настройки устанавливаются в разрезе <Strong>Ролей</Strong> и <Strong>Стадий
        заявки</Strong>.</p>
<p>Зачем это нужно? <Strong>Заявка</Strong> - ключевой элемент системы HubEx. С <Strong>Заявками</Strong> работают
    разные группы пользователей: мобильные
    сотрудники, диспетчера, администраторы, менеджеры, заказчики услуг и т.д.</p>
<p>Для каждой группы таких пользователей в системе создаются <Strong>Роли</Strong>, которые ограничивают функциональные
    возможности
    работы с системой и видимость некоторых данных в справочниках. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>. Но
    именно для <Strong>Заявки</Strong> существует тонкая настройка видимости и редактирования полей. Например, вы можете
    запретить
    мобильному сотруднику
    изменять исполнителя в <Strong>Заявке</Strong> на стадии <Strong>Назначена</Strong>.</p>

<h5 id="fieldsaccess">Как настроить доступ к основным и дополнительным полям на форме заявки</h5>
<p>К основным полям формы относятся те, которые находятся в <Strong>Заявке</Strong> на вкладке <Strong>Заявка</Strong>,
    блок <Strong>Рейтинг технического
        специалиста</Strong><!--и вкладка <Strong>Необходимые материалы</Strong>-->. Подробнее о полях в
    <Strong>Заявке</Strong> читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание заявки</a>.</p>

<p>Под дополнительными полями понимаются те, которые были созданы пользователями для хранения дополнительной учетной
    информации. Например, для ввода показателей наработки оборудования, площади объекта и т.д.
    Дополнительные поля создаются в консоли администратора в меню <Strong>Настройки системы - Дополнительные
        поля</Strong>. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание дополнительных
        полей</a>.</p>
<p>Теперь перейдем к настройке доступа к полям на форме заявки.</p>
<p>Откройте консоль администрирования, меню <Strong>Настройки заявки - Поля на форме заявки</Strong>. Затем укажите, для
    каких <Strong>Ролей</Strong> и
    <Strong>Стадий заявки</Strong> вы хотите сделать настройки. Перед вами откроется таблица основных и дополнительных
    полей в разрезе
    выбранных <Strong>Ролей</Strong> и <Strong>Стадий</Strong>,
    для каждой ячейки будет доступна своя настройка уровня
    доступа.</p>
<p>Дополнительные поля будут находиться в самом низу таблицы, с отметкой А (Additional Field (англ.) - Дополнительные
    поля).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Field.jpg"/>
</div>

<p id="access">Для каждого поля на форме заявки можно выбрать свой уровень доступа: </p>
<ul>
    <li><Strong>RO (только для чтения)</Strong> означает, что поле будет доступно только для просмотра, его нельзя будет
        редактировать.
        Например, в закрытой заявке никто не может изменить исполнителя, значит для всех ролей для поля Актуальный
        исполнитель по заявке необходимо указать настройку RO;
    </li>
    <li><Strong>RW (чтение и запись)</Strong> означает, что поле будет доступно и для просмотра, и для редактирования
        (необязательного редактирования). Например, в новой заявке исполнитель может изменить вид работ, но ему нельзя
        будет
        изменить вид работ, если он принял заявку в работу. Значит для поля Вид работ для роли сервисного специалиста и
        стадии «Новая» необходимо указать настройку RW, а для стадии «В работе» указать настройку RO;
    </li>
    <li><Strong>RWM (чтение и обязательная запись)</Strong> означает, что поле доступно для просмотра и обязательно
        должно быть заполнено. Например, в меню Настройки системы - Дополнительные поля можно создать дополнительное
        поле
        для заявки, например, Наработка оборудования. Исполнитель обязан по приезду на заявку внести в это поле данные
        по
        наработке объекта. Значит для роли сервисного специалиста для стадии «Назначена» (или «В работе») необходимо для
        поля «Наработка оборудования» установить настройку RWM;
    </li>
    <li><Strong>Настройка не выбрана</Strong> - этот пункт означает, что этого поля не будет видно на форме.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Access.jpg"/>
</div>

<p>Рассмотрим на примере: все заявки вашей компании доступны всем вашим сервисным сотрудникам, любой сотрудник может
    взять в работу
    заявку на стадии <Strong>Новая</Strong> из общего списка и назначить исполнителем на эту заявку себя. После перевода
    заявки в
    стадию <Strong>Назначена</Strong> нужно запретить редактирование исполнителя для роли <Strong>Сервисного
        специалиста</Strong>, но разрешить
    <Strong>Администратору изменять</Strong> исполнителя на любой из этих стадий.</p>
<ul>
    <li>выбираем роли <Strong>Сервисный специалист</Strong> и <Strong>Администратор</Strong> и две стадии
        <Strong>Новая</Strong> и <Strong>Назначена</Strong>;
    </li>
    <li>находим в таблице поле <Strong>Актуальный исполнитель по заявке</Strong>;</li>
    <li>устанавливаем для <Strong>Сервисного специалиста</Strong> для стадии <Strong>Новая - RW (чтение и
        запись)</Strong>, это значит, что пользователь
        сможет выбрать исполнителя на этой стадии;
    </li>
    <li>устанавливаем для <Strong>Сервисного специалиста</Strong> для стадии <Strong>Назначена - RO (только для
        чтения)</Strong>, это значит, что
        пользователь на этой стадии не сможет выбирать/изменять исполнителя;
    </li>
    <li>для роли <Strong>Администратора</Strong> и стадий <Strong>Новая</Strong> и <Strong>Назначена</Strong>
        устанавливаем <Strong>RW (чтение и запись)</Strong>, т.к. администратор может
        редактировать исполнителя на любой <Strong>Стадии заявки</Strong>.
    </li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Field2.jpg"/>
</div>

<h5 id="importantfields">Какие поля нельзя исключать из заявки</h5>
<p>Нельзя отключать видимость поля <Strong>Тип заявки</Strong>. Также для этих
    полей хотя бы для одной <Strong>Роли</Strong> и <Strong>Стадии</Strong> должна быть назначена настройка <Strong>RW
        (чтение и запись)</Strong>. Так как это поле является ключевым и создание <Strong>Заявки</Strong> без него невозможно. Остальные поля не являются обязательными и их можно исключить из формы <Strong>Заявки</Strong>.
</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Field4.jpg"/>
</div>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Field5.jpg"/>
</div></p>

<h5 id="accesscopy">Как копировать настройки доступа в разрезе Ролей и Стадий</h5>
<p>Для ускорения процесса настройки доступа к полям заявки для новых <Strong>Стадий заявки</Strong> или
    <Strong>Ролей</Strong>, можно
    воспользоваться функцией
    копирования настроек.</p>
<p>Скопировать можно как целиком настройки <Strong>Роли</Strong>, так и настройки <Strong>Стадии</Strong> отдельно.</p>
<p>Нажмите на контекстное меню (три точки) рядом с названием <Strong>Роли</Strong> и выберите пункт <Strong>Копировать
    в...</Strong> Установите флажок у
    той <Strong>Роли</Strong>, в которую необходимо перенести настройки.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Copy.jpg"/>
</div>
<p>Для копирования настроек <Strong>Стадии</Strong> нажмите на контекстное меню (три точки) рядом с названием <Strong>Стадии</Strong>
    и выберите пункт
    <Strong>Копировать в...</Strong> Установите флажки для тех <Strong>Стадий</Strong>, в которые необходимо скопировать
    настройки.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/ADMIN/InterfaceElements/Copy2.jpg"/>
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

___
### Следующие шаги:
- [Жизненный цикл заявки](./TicketLifeCycle.md)
- [Согласование заявок: линейное и параллельное согласование](./TicketsAgreement.md)
- [Согласование с заказчиком: жизненный цикл, стадии согласования, уведомления](./CustomerAgreement.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
