---
title: Переход заявки по стадиям.
description: Как изменить стадию (статус) заявки во время проведения работ по заявке в системе HubEx?
---

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym('{{ site.yandex_metric }}', "init", {
        id:'{{ site.yandex_metric }}',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/'{{ site.yandex_metric }}'" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

#### Переход заявки по стадиям и удаление заявки
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
     <li><a href="#changingstatus">Переводить заявки по стадиям</a></li>
     <li><a href="#deletetick">Удалять заявку на любой стадии</a></li>
</ul>
</html>

<h5 id="changingstatus">Перевод заявки по стадиям.</h5>
Заявка обладает несколькими стадиями выполнения, настраиваемыми отдельно для каждой сервисной компании администратором. Различные стадии необходимы для отображения прогресса выполнения заявки. Стадия заявки отображается в списке заявок.

![stat4.png](/attachments/images/FAQ/USER/ChangingStatus/stat4.png)

Для перевода заявки по стадиям, перейдите в список заявок через боковое меню, выберите необходимую заявку, затем в пункте «Перейти на стадию» выберите стадию, на которую требуется перевести данную заявку. Сохраните.

<div>
  <img  style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/ChangingStatus/stat1.png" />
</div>

Например, при переходе со стадии «В работе», Вы можете перейти на одну из следующих стадий, для этого просто нажмите на один из вариантов, после чего нажмите кнопку «Сохранить», чтобы применить и сохранить изменения.

<div>
  <img  style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/ChangingStatus/stat2.png" />
</div>

После того как Вы измените стадию, каждому, кто связан с заявкой придет push-уведомление о том, что произошло изменение.

<div>
  <img  style="margin: 0 auto; display: block; max-width: 100%;" src="/attachments/images/FAQ/USER/ChangingStatus/stat3.jpg" />
</div>

Также Вы можете самостоятельно настроить жизненный цикл заявки в разделе для администратора, подробнее про это можете прочитать в статье [Жизненный цикл заявки](https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketLifeCycle.html).

<h5 id="deletetick">Удаление заявки на любой стадии.</h5>

В процессе работы может потребоваться удалить заявку, например при создании дубля или же при внесении неправильной информации в заявку.
Для того чтобы это сделать, необходимо перейти в «Консоль Администратора», затем открыть раздел «Администрирование», после чего открыть вкладку «Роли».
![del1.png](/attachments/images/FAQ/USER/ChangingStatus/tickdelete1.png)

<p>Перед Вами откроется страница со всеми ролями (Что такое роли и зачем они нужны? - <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html"> читайте здесь.</a>), на ней выберите, кому хотите дать право удалять заявки (рекомендуется давать такую возможность только Начальникам Сервисной службы, либо Администраторам внутри системы), для этого нажмите на выбранную роль и, в открывшемся окошке, нажмите на вкладку «Расширенные полномочия». Напишите слово «Удалять» в графе поиск, после чего перед вами отобразится полномочие: «Позволяет удалять заявки на любых стадиях», выдайте данное полномочие выбранной Вами роли, нажав на галочку рядом.</p>
![del2.png](/attachments/images/FAQ/USER/ChangingStatus/tickdelete2.png)

Не забудьте сохранить изменения, нажав на соответствующую кнопку.
![del3.png](/attachments/images/FAQ/USER/ChangingStatus/tickdelete3.png)


### Следующие шаги:
- [Прикрепление выполненных работ](./AttachingFiles.md)
- [Создание шаблона оборудования и маркировка](./CreatingObjTemplates.md)
- [Создание шаблона заявок и паспорт объекта](./CreatingTickTemplates.md)



___
- [Перейти в меню](http://wiki.hubex.ru)
