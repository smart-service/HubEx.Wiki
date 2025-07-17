---
title: Правила автоназначения исполнителя
description: Правила автоназначения исполнителя используются при автораспределении (автоназначении) исполнителей на Заявки. Создать и настроить новое правило выбора исполнителя можно в консоли администратора в меню Настройки заявки - Правила выбора исполнителя по кнопке Создать правило выбора исполнителя.
keywords: правило автоназначения исполнителя, автораспределение, правило выбора, правила выбора, правило выбора, автоназначение исполнителя, правило автоназначения, hubex, хабекс, хубекс, хабикс
---

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
<h1>Правила автоназначения исполнителя</h1>

<p>В этом разделе вы узнаете:</p>
<p>Содержание статьи:</p>
<ul>
    <li><a href="#RulesOfChoice1">Что такое правила автоназначения исполнителя;</a></li>
    <li><a href="#RulesOfChoice2">Создание правил автоназначения исполнителя;</a></li>
    <li><a href="#RulesOfChoice3">Применение правил автоназначения исполнителя на стадию заявки;</a></li>
    <li><a href="#RulesOfChoice4">Особенности правил автоназначения исполнителя.</a></li>
</ul>

<h2 id="RulesOfChoice1">Что такое правила автоназначения исполнителя</h2>

<p>В HubEx существует возможность настроить робота-диспетчера (автоназначение/автораспределение) для назначения исполнителей на <strong>Заявки</strong>. Робот-диспетчер использует специальные правила автоназначения для подбора исполнителей на <strong>Заявки</strong>.</p>
<p>Использование правил автоназначения исполнителя на <strong>Заявки</strong> значительно экономит время диспетчеров при ручном выборе исполнителей, а также позволяет настроить автоматический переход <strong>Заявки</strong> на ответственных менеджеров, сервисных специалистов и т.д. </p>

<p>Прочтите инструкцию ниже или ознакомьтесь с видеороликом <strong>"Автоназначение исполнителей на заявки"</strong>.</p>

<div class="video-player-container" data-player-id="player27">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/IEsB3xWJVRQ" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239098&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h2 id="RulesOfChoice2">Создание правил автоназначения исполнителя</h2>

<p>Создать и настроить правило автоназначения исполнителя можно в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администратора</a> в разделе левого бокового меню <strong>"Настройки заявки"</strong> - подраздел <strong>"Автоназначение исполнителя"</strong> по кнопке <strong>"Создать правило"</strong>.</p>
<div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/RulesOfChoice/Rule.jpg"/> </div>

<ul>
    <li><strong>Обязательные навыки</strong>: при выборе этого параметра для правила автоназначения система будет выбирать совпадение обязательных навыков в карточке объекта (указанного в заявке) с карточками сотрудников. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Skills.html">Навыки</a>.</li>
    <li><strong>Вид работ</strong>: при выборе этого параметра для правила автоназначения система будет выбирать совпадение вида работ, указанного в заявке, с карточками сотрудников.
        <p><strong>Вид работ</strong> - это самый популярный параметр для настройки автораспределения заявок. Например, вид работ удобно использовать при наличии специалистов разного профиля - услуги ремонта холодильного оборудования, сантехнического, электрического и т.д. Виды работ создаются в консоли администратора. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>.</p>
    </li>
    <li><strong>График работы</strong>: при выборе этого параметра для правила автоназначения система анализирует установленные графики работ в карточках сотрудников и подбирает исполнителя, у которого стоит рабочая смена на момент подачи заявки.</li>
    <li><strong>Ответственный за объект</strong>: ответственного исполнителя можно указать в карточке объекта на вкладке <strong>"Обслуживание"</strong>. Тогда на заявку будет назначаться закрепленный за объектом исполнитель.</li>
    <li><strong>Часто назначается на объект</strong>: при подборе исполнителя система проанализирует, кто чаще всего назначался на объект, указанный в заявке.</li>
    <li><strong>Участок</strong>: при выборе этого параметра для правила автоназначения система будет сравнивать участки, установленные в карточке объекта, с участками, установленными в карточках сотрудников (вкладка карточки сотрудника <strong>"Квалификация"</strong>).</li>

    <!-- <li><strong>Предпочтительный исполнитель</strong>: система подберет исполнителя, который чаще всего назначался на
         <strong>Заявки</strong> по
         выбранному <strong>Объекту</strong>.
     </li>-->

    <!--<li><strong>Коэффициент заказчика</strong>: система вернет <strong>Заявку</strong> обратно на заказчика. Например,
          такая настройка правила может
          применяться, если не удалось
          назначить исполнителя по <strong>Заявке</strong>. </li>-->
</ul>

<p>Настройка правила заключается в выборе параметров необходимых для подбора исполнителя. Также можно включить <strong>"Детальную настройку"</strong> и установить степень важности учета параметров при подборе (в процентах):</p>
<div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/RulesOfChoice/RuleDetailing.jpg"/> </div>

<h2 id="RulesOfChoice3">Применение правил автоназначения исполнителя на стадию заявки</h2>

<p>После создания правила автоназначения исполнителя нужно указать, на какой <strong>Стадии заявки</strong> его необходимо применить. Для этого необходимо перейти в консоль администратора, далее раздел левого бокового меню <strong>"Настройки заявки"</strong> - подраздел <strong>"Стадии заявки"</strong> и выбрать стадию. Например, это может быть стадия <strong>Назначена</strong>: исполнитель будет подбираться на <strong>Заявку</strong> при переходе со стадии <strong>Новая</strong> на стадию <strong>Назначена</strong>.</p>

<ol>
        <li>В настройках <strong>Стадии заявки</strong> выберите действие <Strong>"Автоназначение по правилу"</Strong> или <Strong>"Автоназначение с учетом удаленности от заявки"</Strong>;</li>
        <li>В появившемся поле, откройте выпададающий список и выберите правило автоназначения;</li>
        <li>Сохраните изменения.</li>
</ol>

<p>Подробнее про автоназначение с учетом удаленности от заявки читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автоназначение на ближайшего исполнителя</a>.</p>

<p><strong>Обратите внимание!</strong> При применении правила автоназначения на стадию заявки, появится новый параметр <strong>"Роль"</strong>. </p>

<div> <img style="margin: 0 auto; display: block; max-width: 60%;" src="/attachments/images/FAQ/ADMIN/RulesOfChoice/StageTicket.jpg"/> </div>

<h2 id="RulesOfChoice4">Особенности правил автоназначения исполнителя</h2>

<OL>
    <li> Чтобы исполнитель мог участвовать в автораспределении, в карточке <strong>Сотрудника</strong> должен быть установлен флажок <strong>"Мобильный сотрудник"</strong>.
        <p><div> <img style="margin: 0 auto; display: block; max-width: 80%;" src="/attachments/images/FAQ/ADMIN/RulesOfChoice/Engineer.jpg"/> </div></p>
    </li>
    <li>Если вы выбираете несколько параметров в правиле автоназначение, то:
        <ul>
            <li>C выключенным переключателем "Детальная настройка": параметры, которые вы выбрали в правиле, будут применяться с союзом "И";</li>
            <li>C включенным переключателем "Детальная настройка": параметры, которые вы выбрали в правиле, будут применяться с союзом "ИЛИ", в зависимости от того, какой процент вы выставили.</li>
        </ul>
    </li>
    <li>Переход на стадию, для которой устанавливается правило автоназначения, может осуществляться как в ручном режиме, так и в автоматическом. Если необходимо настроить автоматический переход по времени, то в настройках жизненного цикла при переходе на эту стадию нужно установить флажок <strong>Выполнить автоматический переход</strong> и установить время перехода. Если пользователь вручную сделает переход на стадию, для которой настроено правило, то подбор <strong>Сотрудника</strong> также будет произведен автоматически.
        <p><div> <img style="margin: 0 auto; display: block; max-width: 90%;" src="/attachments/images/FAQ/ADMIN/RulesOfChoice/CustomStage.jpg"/> </div></p>
    </li>
</OL>

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
- [Автоназначение на ближайшего исполнителя](/docs/FAQ/RU/user/RulesOfChoiceGEO.html)
- [Стадии заявки](./StageType.md)
- [Поля на форме заявки: настройка доступа к полям заявки](./ElementsOfInterface.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
