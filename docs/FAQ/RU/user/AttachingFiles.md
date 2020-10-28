---
title: Прикрепление выполненных работ в WEB и мобильном приложении.
description: Как прикрепить отчет по выполнению работ по объекту в системе HubEx?
---

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym('{{ site.yandex_metric }}', "init", {
        id: '{{ site.yandex_metric }}',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
</script>
<noscript>
    <div><img src="https://mc.yandex.ru/watch/'{{ site.yandex_metric }}'" style="position:absolute; left:-9999px;"
              alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->


### Прикрепление выполненных работ в web и мобильном приложении
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#web">Прикреплять выполненные работы к Заявке в web-приложении</a>;</li>
    <li><a href="#mobile">Прикреплять выполненные работы к Заявке в мобильном приложении исполнителя</a>.</li>
    <!-- <li><a href="#payment">Отправка Счета на оплату заказчику и оплата Акта.</a></li> -->

</ul>
</html>

<p>Заполнение выполненных работ в <strong>Заявке</strong> позволяет отслеживать процесс согласования с требованиями заказчика,
    контролировать ход выполнения <strong>Заявки</strong>, а также позволяет сформировать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a> и т.д. </p>

<h5 id="web">Прикрепление выполненной работы в web-приложении</h5>
<p>Чтобы добавить выполненную работу, перейдите в <strong>Заявке</strong> на вкладку <strong>Выполнение</strong> и нажмите кнопку <strong>Создать работу</strong>.</p>
<p>Вы можете добавлять несколько выполненных работ, если <strong>Заявка</strong> выполнялась в несколько этапов, дней и т.д. Все
    выполненные работы войдут в итоговую сумму <strong>Акта выполненных работ</strong>.</p>
<p>В форме выполненной работы заполните необходимые поля:</p>
<ul>
    <li><strong>Объект/Оборудование</strong> заполняется по данным вкладки <strong>Заявка</strong> и не изменяется;</li>
    <li><strong>Вид работ</strong> заполняется также по <strong>Заявке</strong>, но может быть изменен;</li>
    <li><strong>Исполнитель</strong> заполняется по вкладке <strong>Заявка</strong>, но его также можно изменить. Обратите внимание на параметр
        <strong>Ставка/час</strong>. Он устанавливается в карточке <strong>Сотрудника</strong> (на вкладке <strong>Квалификация</strong>). Ставку работника при заполнении
        работ вы можете изменить вручную;
    </li>
    <li>Укажите даты начала, окончания работ и время. Количество указанных часов будет умножено на ставку <strong>Сотрудника</strong> при
        формировании <strong>Акта выполненных работ</strong>;
    </li>
    <li>В поле <strong>Комментарий</strong> к выполненной работе можно указать подробную информацию о выполненных действиях на <strong>Объекте</strong>,
        оставить замечания. Эти заметки в дальнейшем помогут восстановить историю работ на <strong>Объекте</strong>;
    </li>
    <li>Стоимость <strong>Израсходованных материалов</strong> также будет формировать итоговую сумму <strong>Акта выполненных работ</strong>. Для
        работы с материалами необходимо импортировать их в систему HubEx. Подробнее об этом читайте в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Withdrawals.html">Загрузка и работа с материалами</a>;
    </li>
    <li>В качестве <strong>Файлов</strong> вы можете прикрепить, например, фотографию готовой работы.</li>
</ul>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/Work.jpg"/>
</div>

<h5 id="mobile">Прикрепление выполненных работ к Заявке в мобильном приложении исполнителя</h5>
<p>В мобильном приложении HubEx Engineer (скачать можно в App Store или Google Play) откройте <strong>Заявку</strong>, пролистайте вниз и
    выбрерите пункт <strong>Выполнение</strong>. Нажмите кнопку плюса в правом нижнем углу.</p>
<p>Перед вами откроется форма, состоящая из четырех страниц. Переход между страницами можно осуществлять по кнопке <strong>Далее</strong>
    (по порядку) либо по кнопке двойной стрелки вверх (откроется список всех страниц для выбора).</p>

<div style="display: flex;">
    <img style="margin: 0 auto; display: block; max-width: 30%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/FirstPage.jpg"/> <img
        style="margin: 0 auto; display: block; max-width: 30%;"
        src="/attachments/images/FAQ/USER/AttachingFiles/AllPages.png"/>
</div>
<p>Заполните все страницы:</p>
<ol>
    <li>На странице <strong>Основное</strong> заполняется <strong>Исполнитель</strong>, <strong>Объект</strong> и <strong>Вид работ</strong>. На данном этапе можно изменить <strong>Вид работ</strong>.</li>
    <li>На странице <strong>Материалы</strong> внесите необходимые материальные расходы и их количество. Для
        работы с материалами необходимо импортировать их в систему HubEx и настроить доступ <strong>Исполнителю</strong> до складов.
        Подробнее об этом читайте в статье <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/Withdrawals.html">Загрузка и работа с материалами</a>.
    </li>
    <li>На странице <strong>Трудозатраты</strong> укажите сколько времени в часах было потрачено на выполнение работы. Это время будет
        умножаться на часовую ставку <strong>Исполнителя</strong> и учитываться в <strong>Акте выполненных работ</strong>.
    </li>
    <li>Файлы и комментарии к работе вносятся на последней странице <strong>Дополнительно</strong>.</li>

</ol>
<p>После заполнения всех страниц нажмите кнопку <strong>Сохранить</strong>. Вы можете просматривать и при необходимости внести изменения
    в выполненную работу.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 30%;"
         src="/attachments/images/FAQ/USER/AttachingFiles/MobileWork.png"/>
</div>
<p>Все внесенные изменения будут отражаться в web-приложении в <strong>Заявке</strong> на вкладке <strong>История изменений</strong>.</p>

### Следующие шаги:
- [Создание шаблона оборудования и маркировка](./CreatingObjTemplates.md)
- [Создание шаблона заявок и паспорт объекта](./CreatingTickTemplates.md)
- [Создание паспорта объекта с возможностью саморегистрации](./HowToMakePassport.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
