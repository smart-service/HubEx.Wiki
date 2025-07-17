---
title: Счет на оплату
description: Счет на оплату - это документ, содержащий платежные реквизиты продавца, по которым покупатель может осуществить оплату за услуги или товары.
keywords: счет на оплату, инвойс, печатная форма, счет, hubex, хабекс, хубекс, хабикс
---

#### Счет на оплату
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
<p><strong>Счет на оплату</strong> - это документ, содержащий платежные реквизиты продавца, по которым покупатель может осуществить оплату за услуги или товары. Счет можно выгружать в различных форматах (.xml, .csv, .xls и др.), что позволяет
    при необходимости отредактировать его вручную, загружать его в другие системы (например,
    1С) и избегать повторного ввода данных вручную. Также доступна функция печати напрямую из HubEx.</p>
<p><strong>Счет на оплату</strong> формируется исходя из выполненных работ по отфильтрованным <strong>Заявкам</strong> за выбранный период индивидуально по каждому <strong>Заказчику</strong>.
    Счет может включать в себя сведения по работам из
    нескольких <strong>Заявок</strong> сразу, которые можно отбирать с помощью фильтров или вручную. </p>

<p>Ознакомьтесь с обучающим видеороликом <strong>Электронные документы HubEx</strong>. В нем мы рассказываем о всех печатных формах HubEx и о том, как заказать индивидуальную форму для вашей компании. Подробная инструкция о формировании <strong>Счета на оплату</strong> представлена ниже. </p>

<div class="video-player-container" data-player-id="player26">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/WhKGc-GrOjI" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239127&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p><strong>Счет на оплату</strong> находится в меню <strong>Печатные формы</strong>.</p>
<p>Рассмотрим, как сформировать счет для экспорта или печати. Перейдите в меню <strong>Печатные формы - Счет на оплату</strong>. </p>

<p>Обратите внимание! При подключении <strong>Счета на оплату</strong> в панели <strong>Параметры</strong> будет доступно ограниченное количество фильтров, расширить функционал настроек вы можете, обратившись в нашу службу поддержки по почте <a
        href="mailto:support@hubex.ru" target="_blank" rel="noopener">
    support@hubex.ru</a>.</p>

<p>На панели <strong>Параметры</strong> необходимо указать настройки:</p>
<ul>
    <li><strong>Заказчик</strong>: выбор <strong>Заказчика</strong> - обязательное условие для формирования <strong>Счета на оплату</strong>. <strong>Счет на оплату</strong> формируется только по <strong>Заявкам</strong> одного <strong>Заказчика</strong>. <strong>Заказчик</strong> выбирается из списка <strong>Компаний</strong>,
        в карточке которых выбран тип <strong>Заказчик</strong>
        или <strong>Наша компания</strong>;
    </li>
    <p><div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Customer.jpg"/>
</div></p>

    <li><strong>Объект</strong>: вы можете выбрать один или несколько <strong>Объектов</strong> компании-заказчика, по которым хотите
        подготовить счет. Обратите внимание, выбрать можно только родительский объект. При выборе родительского объекта автоматически будут выбраны все его дочерние объекты;
    </li>

    <li>в поле <strong>Стадия</strong> можно уточнить <strong>Стадии заявки</strong>, на которые был совершен переход <strong>Заявок</strong> за выбранный период времени, по умолчанию устанавливается стадия <strong>Выполнена</strong> (стадия, в настройках которой установлено действие <strong>Завершить работу по заявке</strong>);</li>

    <p><div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Stage.jpg"/>
</div></p>

    <li>дату перехода на выбранную <strong>Стадию заявки</strong> необходимо указать в полях <strong>С - По</strong>;</li>

    <li>в поле <strong>Заявка</strong> будет отображаться список <strong>Заявок</strong>, подходящих по всем вышеперечисленным параметрам. Здесь вы можете
        самостоятельно выбрать <strong>Заявки</strong> для формирования акта;
    </li>

    <p><div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Tickets.jpg"/>
</div> </p>

    <li><strong>Тип счета</strong> необходимо выбрать один из двух: <strong>Сводный счет</strong> - общий счет на все выбранные <strong>Заявки</strong> либо <strong>По каждой заявке</strong> - на каждую выбранную <strong>Заявку</strong> будет сформирован свой счет;
    </li>

    <li><strong>№ счета</strong> можно задать в свободной форме. По умолчанию номер счета формируется по номеру <strong>Заявки</strong>. Если заполнить
        поле № счета, он будет отображаться перед номером <strong>Заявки</strong>;
    </li>


    <li>в поле <strong>Компания</strong> необходимо выбрать нашу компанию, реквизиты которой будут отображаться в шапке счета;</li>
    <li>в поле <strong>НДС</strong> выберите один из вариантов:
        <ol>

            <li><strong>Без НДС</strong>: данный вариант подойдет, если вы ведете учет сумм в системе без НДС (вариант
                подходит, если счета выставляются без
                учета НДС), в акте все суммы будут указаны точно так, как и указаны в <strong>Заявках</strong>;
            </li>
            <li><strong>Без НДС (вычитание НДС)</strong>: при выборе данного варианта из всех сумм будет вычтен НДС
                (вариант подходит, если в системе
                все суммы указываются с НДС, но счета выставляются без НДС);
            </li>
            <li><strong>НДС сверху</strong>: при выборе данного варианта будет рассчитан НДС к каждой сумме (вариант
                подходит, если в
                системе все суммы указываются без НДС и счет выставляется с НДС);
            </li>

            <li><strong>НДС включен</strong>: суммы будут указаны в акте точно такие же, что и указаны в
                <strong>Заявках</strong>, будет рассчитан НДС, который включен в
                стоимость (вариант подходит, если в системе все ведется с НДС и счет выставляется с НДС).
            </li>
        </ol>
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 95%;"
             src="/attachments/images/FAQ/USER/PaymentInvoice/NDS.jpg"/>
    </div>
    </p>
</ul>

<p>Для формирования <strong>Счета на оплату</strong> после заполнения всех параметров необходимо нажать кнопку <strong>Просмотр отчета</strong>. При изменении любых настроек отчета кнопку <strong>Просмотр отчета</strong> нужно нажимать повторно.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Form.jpg"/>
</div>

<p>Готовую форму можно распечатать с помощью меню <strong>Файл - Печать</strong>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Print.jpg"/>
</div>

<p>Печатная форма сервисного акта будет выглядеть следующим образом. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/PrintForm.jpg"/>
</div>

<p>Также печатную форму можно экспортировать в различные форматы - pdf, xlsx, docx, xml и другие в меню <strong>Главная - Экспорт</strong>. Для последующего редактирования файла рекомендуется выбирать формат docx.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Export.jpg"/>
</div>

<p>Если вы выбрали несколько <strong>Заявок</strong> для формирования акта, то данные по каждой из них будут располагаться на страницах акта по порядку. Переключаться между страницами можно на панели <strong>Параметров</strong> в меню <strong>Главная</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/List.jpg"/>
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
- [Карта: текущая геопозиция сотрудников](./GeoPosition.md)
- [История перемещений](./Geotracking.md)
- [Экспорт](./Export.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
