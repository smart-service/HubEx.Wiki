---
title: Счет на оплату
description: 
keywords: счет на оплату, инвойс, печатная форма, счет, hubex, хабекс, хубекс, хабикс
---

#### Счет на оплату

<html>
<meta charset="utf-8">

</html>

<body>
<p><strong>Счет на оплату</strong> - это документ, содержащий платежные реквизиты продавца, по которым покупатель может осуществить оплату за услуги или товары. Счет можно выгружать в различных форматах (.xml, .csv, .xls и др.), что позволяет
    при необходимости отредактировать его вручную, загружать его в другие системы (например,
    1С) и избегать повторного ввода данных вручную. Также доступна функция печати напрямую из HubEx.</p>
<p><strong>Счет на оплату</strong> формируется за выбранный период индивидуально по каждому заказчику.
    Счет может включать в себя сведения по
    нескольким <strong>Заявкам</strong> сразу, которые можно отбирать с помощью фильтров или вручную. </p>
<p><strong>Счет на оплату</strong> находится в меню <strong>Печатные формы</strong>.</p>
<p>Рассмотрим, как сформировать счет для экспорта или печати. Перейдите в меню <strong>Печатные формы - Счет на оплату</strong>. </p>

    <p>Обратите внимание! При подключении <strong>Счета на оплату</strong> в панели <strong>Параметры</strong> будут доступно ограниченное количество фильтров, расширить функционал настроек вы можете, обратившись в нашу службу поддержки по почте <a
            href="mailto:support@hubex.ru" target="_blank" rel="noopener">
        support@hubex.ru</a>.</p>

<p>На панели <strong>Параметры</strong> необходимо указать настройки:</p>
<ul>
    <li><strong>Заказчик</strong>: выбор <strong>Заказчика</strong> - обязательное условие для формирования <strong>Счета на оплату</strong>. <strong>Счет на оплату</strong> формируется для
        каждого <strong>Заказчика</strong> индивидуально. <strong>Заказчик</strong> выбирается из списка <strong>Компаний</strong>,
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
   
    
    <li>в поле <strong>Компания</strong> необходимо выбрать нашу компанию, реквизиты которой будут отображаться в шапке счета.</li>
</ul>

<p>Для формирования <strong>Счета на оплату</strong> после заполнения всех параметров необходимо нажать кнопку <strong>Просмотр отчета</strong>. При изменении любых настроек отчета кнопку <strong>Просмотр отчета</strong> нужно нажимать повторно.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Form.jpg"/>
</div>

<p>Готовую форму можно распечатать с помощью меню <strong>Файл - Печать</strong>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Print.jpg"/>
</div>

<p>Также печатную форму можно экспортировать в различные форматы - pdf, xlsx, docx, xml и другие. Для последующего редактирования файла рекомендуется выбирать формат docx.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PaymentInvoice/Export.jpg"/>
</div>

<p>Если вы выбрали несколько <strong>Заявок</strong> для формирования акта, то данные по каждой из них будут располагаться на страницах акта по порядку. Переключаться между страницами можно на панели <strong>Параметров</strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/PrintedForm/PaymentInvoice/List.jpg"/>
</div>

</body>



___
### Следующие шаги:
- [Карта: текущая геопозиция сотрудников](./GeoPosition.md)
- [История перемещений](./Geotracking.md)
- [Экспорт](./Export.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
