---
title: Согласование с заказчиком в HubEx
description: Согласование с заказчиком необходимо для подтверждения выполнения работ, соответствие техническому заданию и т.д. Для
    реализации согласования с заказчиком в HubEx создаются стадии согласования, настраивается жизненный цикл с веткой
    согласования и оповщения с правилами выбора получателя.
keywords: согласование, ветка действий заказчика, настройка триггера, сообщение, уведомление, hubex, хабекс, хубекс, хабикс
---

#### Согласование с заказчиком: жизненный цикл, стадии согласования, уведомления
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#customeragreement">Как настроить жизненный цикл для согласования с заказчиком</a>;</li>
    <li><a href="#message">Как настроить оповещение заказчика</a>;</li>
    <li><a href="#mobile">Как выглядит процесс согласования в мобильном приложении</a>.</li>
</ul>
</html>
<body>

<p>Согласование с заказчиком необходимо для подтверждения выполнения работ, соответствие техническому заданию и т.д. Для
    реализации согласования с заказчиком в HubEx создаются стадии согласования, настраивается жизненный цикл с веткой
    согласования и оповщения с правилами выбора получателя. Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Стадии заявки</a>,
    <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html">Жизненный цикл заявки</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Notifications.html">Настройка уведомлений</a>. </p>
<p>Рассмотрим пример: заказчику необходимо согласовать заявку после ее выполнения исполнителем - проверить
    выполненные работы, соответствие договору и т.д.</p>

<h5 id="customeragreement">Жизненный цикл для согласования с заказчиком</h5>
<p>Для согласования с заказчиком вам потребуется создать три новые стадии (если они не были созданы ранее) в меню
    консоли администратора <strong>Настройки заявки - Стадии заявки</strong>. Задайте стадиям различные цвета:</p>
<ul>
    <li><strong>Согласование с заказчиком</strong> - это стадия на которую исполнитель или диспетчер переводит <strong>Заявку</strong>
        послее ее
        выполнения;
    </li>
  <p>  <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/StageAgreement.jpg"/>
    </div></p>
    <li><strong>Согласована</strong> - первая из стадий на ветке действий заказчика, если заказчик согласует выполнение
        <strong>Заявки</strong>, он
        переводит заявку на эту стадию. Эта стадия доступна только заказчику;
    </li>
  <p>  <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/StageAgreement2.jpg"/>
    </div></p>
    <li><strong>Не согласована</strong> - вторая из стадий на ветке действий заказчика, если заказчик отказывается
        подтверждать
        выполнение <strong>Заявки</strong>, он
        переводит <strong>Заявку</strong> на эту стадию. Эта стадия доступна только заказчику.
    </li>
  <p>  <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/StageAgreement3.jpg"/>
    </div></p>
</ul>
<p>В меню <strong>Настройки заявки - Статусы заявки</strong> создайте статус для каждой из стадий, чтобы он отражался в
    мобильном
    приложении заказчика:</p>
<ul>
    <li><strong>На согласовании</strong> - для стадии <strong>Согласование с заказчиком</strong>;
    </li>
    <p><div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Status.jpg"/>
    </div></p>
    <li><strong>Согласована</strong> для стадии <strong>Согласована</strong>;
    </li>
   <p> <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Status2.jpg"/>
    </div></p>
    <li><strong>Не согласована</strong> для стадии <strong>Не согласована</strong>.
    </li>
 <p>   <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Status3.jpg"/>
    </div></p>
</ul>
<p>Далее перходим в меню <strong>Настройки заявки - Жизненный цикл заявки</strong>: </p>
<ul>
    <li>выберите жизненный цикл, для которого необходимо
        добавить процесс согласования;
    </li>
    <li>найдите стадию <strong>Выполнена</strong> и добавьте новый переход по кнопке <strong>+Добавить стадию</strong>
        ;
    </li>
    <li>в настройке перехода укажите переход на стадию <strong>Согласование с заказчиком</strong>;</li>
    <li>в поле <strong>Название перехода</strong> укажите <strong>Согласование заказчика</strong>. <strong>Название
        перехода</strong> - название кнопки в мобильном
        приложении инженера;
    </li>
    <li>в поле <strong>Ветка жизненного цикла</strong> выберите <strong>Ветка действий Заказчика</strong>;</li>
    <li>установите флажок <strong>Изменить статус</strong> и выберите статус - <strong>На согласовании</strong>;</li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/LifeCycle.jpg"/>
    </div>

    <li>нажмите кнопку <strong>Сохранить</strong>;</li>
    <li>затем слева выберите стадию <strong>Согласование заказчика</strong> и добавьте переход на стадию <strong>
        Согласована</strong> и <strong>Не согласована</strong> с
        соответствующими статусами и названиями переходов;
    </li>
    <li>установите флажок <strong>Предоставить доступ отдельным ролям</strong> и укажите роль <strong>
        Заказчик</strong>, т.к. обе эти стадии доступны
        только для заказчика;
    </li>
    <li>нажмите кнопку <strong>+Добавить роль</strong> для особенной настройки, укажите роль <strong>Заказчк</strong>
        и название перехода <strong>Согласована</strong> и <strong>Не
        согласована</strong> соответственно. Таким образом, в мобильном приложениии заказчика в <strong>Заявке</strong> будет две кнопки.
        После
        заполнения настройки перехода нажмите <strong>Сохранить</strong>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/ADMIN/CustomerAgreement/LifeCycle2.jpg"/>
    </div>


</ul>
<p>Вы можете настроить дальнейшие переходы со стадий <strong>Согласована</strong> на <strong>Закрыта</strong>, со стадии <strong>Не согласована</strong>,
    например, на менеджера по работе с заказчиками и т.д.</p>

<h5 id="message">Настройка оповещения заказчика</h5>
<p>После настройки жизненного цикла необходимо настроить оповещение заказчика по электронной почте или push-уведомление на телефон о том, что
    <strong>Заявку</strong> необходимо согласовать.</p>
<p>Перейдите в меню консоли <strong>Настройка оповещений - Правила выбора получателя</strong>. Создайте новое правило с названием
    <strong>Заказчик</strong>. В поле <strong>Рол</strong>ь, которая получит уведомление выберите <strong>Заказчик</strong> и сохраните правило.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Rule.jpg"/>
</div>

<p>Затем перейдите в меню <strong>Настройки оповещений - Триггеры уведомлений</strong>. Здесь настраивается условия получения уведомления
    и шаблон сообщения:</p>
<ul>
    <li>в <strong>Названии триггера</strong> напишите, например, <strong>Согласование с заказчиком (email)</strong>;</li>
    <li>в <strong>Заголовке сообщения</strong> введите текст "Заявка №@Model.TaskNumber" (без кавычек);</li>
    <li>в поле <strong>Текст сообщения</strong> введите текст (без кавычек) "&lt;table style="width: 650px; max-height: 300px;">
        &lt;tbody&gt;
        &lt;tr&gt;
        &lt;td&gt; &lt;p&gt;Здравствуйте!&lt;/p&gt;
        &lt;p&gt;Требуется согласование заявки &lt;b&gt;№@Model.TaskNumber&lt;/b&gt; по объекту &lt;b&gt;@Model.AssetFullName&lt;/b&gt;,
        причина обращения:&lt;/p&gt;
        &lt;p style="font-style:italic;"&gt;@Model.TaskNotes&lt;/p&gt; &lt;br/&gt;Вы будете получать уведомления на
        текущий
        адрес электронной почты или в мобильном приложении &lt;a href="https://dlhubex.page.link/wvwq"&gt;HubEx
        для заказчика&lt;/a&gt;.&lt;br/&gt;
        &lt;p style="margin-top: 20px; margin-bottom: 7px;"&gt;C уважением, Hubex&lt;/p&gt; &lt;a
        href="https://hubex.ru"&gt; &lt;img src="http://239911.selcdn.com/Public/hubex-logo-white%401x.png"
        alt="HubEx"/&gt; &lt;/a>&lt;/td&gt;
        &lt;/tr&gt;
        &lt;/tbody&gt;
        &lt;/table&gt;";
    </li>

    <li>в поле <strong>Способ отправки сообщения</strong> выберите <strong>Email</strong>;</li>
    <li>в блоке <strong>Условия отправки</strong> в поле <strong>Стадии заявки</strong>, на которых будет отправлено уведомление выберите стадию
        <strong>Согласование с заказчиком</strong> и установите флажки отправки по времени;
    </li>
    <li>добавьте правило выбора получателя, которое мы создали выше - <strong>Заказчик</strong> и сохраните настройку триггера.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Message.jpg"/>
</div>

<h5 id="mobile">Процесс согласования в мобильном приложении</h5>
<p>После перехода на стадию <strong>Выполнена</strong> в мобильном приложении инженера появится кнопка <strong>Согласование заказчика</strong>. Нажмите на
    нее и <strong>Заявка</strong> перейдет на стадию <strong>Согласование с заказчиком</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Mobile.jpg"/>
</div>

<p>Заказчик при этом получит сообщение на электронную почту в формате, который вы указали в настроках триггера.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Mobile2.jpg"/>
</div>
<p>В мобильном приложении заказчика в <strong>Заявке</strong> на стадии <strong>Согласование заказчика</strong> будет две кнопки <strong>Согласована</strong> и <strong>Не
    согласована</strong>. При нажатии на одну из них <strong>Заявка</strong> перейдет в соответствующую стадию. В мобильном приложении заказчика
    отразится соответствующий статус для этой <strong>Заявки</strong>
    в общем списке.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/ADMIN/CustomerAgreement/Mobile3.jpg"/>
</div>

</body>


____
- [Перейти в меню](http://wiki.hubex.ru)
