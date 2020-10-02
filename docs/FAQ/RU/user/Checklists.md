<!-- ---
title: Чеклисты по выполненным работам.
layout: default
description: Как создавать и настраивать чеклисты в системе HubEx?
---
-->
<!-- Yandex.Metrika counter -->
<!--
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
-->

#### Чек-листы
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#checklist">Создавать <Srtong>Чек-листы</Srtong>;</a></li>
    <li><a href="#atribute">Создавать атрибуты.</a></li>

</ul>
</html>

<p><Srtong>Чек-лист</Srtong> поможет не упустить важных деталей в ходе выполнении <Srtong>Заявки</Srtong>. А также поможет новому сотруднику войти в курс
    дела без длительного обучения. Отмечая выполнение пунктов <Srtong>Чек-листа</Srtong>, сотрудник предоставляет вам полную информацию
    по выполненным работам на объекте.</p>

<h5 id="checklist">Создание Чек-листа</h5>
<p>Создать <Srtong>Чек-лист</Srtong> можно в одноименном пункте бокового меню программы по кнопке <Srtong>Создать чек-лист</Srtong>.</p>
<p>Введите название и описание. Укажите для каких <Srtong>Объектов</Srtong> и (или) <Srtong>Видов работ</Srtong> будет использоваться данный <Srtong>Чек-лист</Srtong>. При
    выборе в <Srtong>Заявке</Srtong> <Srtong>Объекта</Srtong> и (или) <Srtong>Вида работ</Srtong>, <Srtong>Чек-лист</Srtong> прикрепится автоматически.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckList.jpg"/>
</div>

<p> Перейдите к созданию пунктов <Srtong>Чек-листа</Srtong>. Пункты - действия по выполнению <Srtong>Чек-листа</Srtong>: проверить, измерить и т.д. Каждый
    пункт
    может иметь атрибут в случае, когда требуется вписать ответ в виде числа, даты, текстовой строки или даже файла.

    Как добавить или изменить атрибут для <Srtong>Чек-листа</Srtong>, подробно читайте <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketAttribute.html"> здесь.</a> А ниже на примере
    рассмотрим, как создать в качестве атрибута вложенный файл. Зачем может пригодиться файл? Например, зафиксировать
    выполнение какого-либо пункта с помощью фотографии.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/Checklists/Atribute.jpg"/>
</div>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Checklists/CheckListPoint.jpg"/>
</div>

<h5 id="atribute">Создание атрибута</h5>
<p>Рассмотрим добавление вложенного файла в качестве атрибута к уже созданному <Srtong>Чек-листу</Srtong>.</p>

<ol type="1">
    <li>Войдите в Консоль администратора.</li>
    <p>Нажмите на иконку своего пользователя в правом верхнем углу и выберите пункт <Srtong>Консоль администратора</Srtong>. Для доступа
        вас должны быть настроены соответствующие права. Также войти в консоль может администратор вашей системы.</p>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/Checklists/AdmConsole.jpg"/>
    </div>

    <li>Откройте раздел <Srtong>Настройки системы - Дополнительные поля</Srtong>. Нажмите кнопку <Srtong>Создать новое поле</Srtong>.</li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/Checklists/NewAtribute.jpg"/>
    </div>

    <li>Введите наименование, например, Фотография. Выберите <Srtong>Тип поля = Вложенный файл</Srtong>. В параметре <Srtong>Используется для</Srtong>
        установите <Srtong>Чек-листы</Srtong>. Нажмите <Srtong>Сохранить</Srtong>.
    </li>

    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/USER/Checklists/NewAtribute2.jpg"/>
    </div>

    <li>Теперь можно в любой <Srtong>Чек-лист</Srtong> добавить поле, которое позволит загружать фотографии.</li>
    
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/Checklists/CheckListNA.jpg"/>
    </div>

</ol>

<p>В итоге вы можете удостовериться, что сервисный специалист действительно выполнил работы по объекту, так как он будет
    обязан прикрепить фотографию.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/Checklists/check3.jpg"/>
</div>


### Следующие шаги:
- [Аналитика](./Analytics.md)
- [Геопозиция](./GeoPosition.md)
- [Рейтинги](./Ratings.md)


___
- [Перейти в меню](http://wiki.hubex.ru)
