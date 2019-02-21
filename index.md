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
<div class="site-header-container {% if site.cover %}has-cover{% endif %}" {% if site.cover %}style="background-image: url({{ site.cover | prepend: site.baseurl }});"{% endif %}>
  <div class="scrim {% if site.cover %}has-cover{% endif %}">
    <header class="site-header">
      <h1 class="title">{{ site.title }}</h1>
      {% if site.subtitle %}<p class="subtitle">{{ site.subtitle }}</p>{% endif %}
       <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
<link rel="stylesheet" href="assets/tipuesearch/tipuesearch.css">
<form action="assets/tipuesearch/search.html" style="
    padding: 0px;
">
<div class="tipue_search_group" style="
    display: flex;
    justify-content: flex-end;
">
<input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required placeholder = "Поиск по статьям"><button type="submit" class="tipue_search_button" style="
    color: #ccc;
"><div class="tipue_search_icon">&#9906;</div></button>
</div>
</form>
    </header>
  </div>
</div>




## Как начать работу с HubEx
Для начала работы Вам будет выдан именной тенант. Если Вы его уже получили, то для того чтобы зайти в систему HubEx Вам необходимо установить пароль для Вашей учетной записи. Обязательно проверьте Ваш почтовый ящик, в который после регистрации придёт письмо для подтверждения Вашего аккаунта.

Чтобы облегчить Вам работу, мы уже создали в системе Вашу компанию, также вы можете увидеть предопределенные Роли для пользователей, Типы заявок и Виды работ.

Для успешного начала работы выполните следующие шаги:
#### [Создание пользователя вашей системы](docs/CreatingUser.md)
#### [Создание обслуживаемых компаний](docs/CreatingCompany.md)
#### [Ввод обслуживаемого оборудования](docs/CreatingObjects.md)
#### [Создание заказчика](docs/CreatingCustomer.md)
#### [Создание заявки](docs/CreatingTicket.md)
#### [Переход заявки по стадиям](docs/ChangingStatus.md)
#### [Прикрепление выполненных работ](docs/AttachingFiles.md)
#### [Создание шаблона оборудования и маркировка](docs/CreatingObjTemplates.md)
#### [Создание шаблона заявок и паспорт объекта](docs/CreatingTickTemplates.md)
#### [Саморегистрация и подача заявок](docs/SelfRegister.md)
#### [Ограничение видимости файлов](docs/ViewRestriction.md)
#### [Сообщения по заявке и вкладка сообщения](docs/Messages.md)
#### [Чеклисты](docs/Checklists.md)
#### [Аналитика](docs/Analytics.md)
#### [Геопозиция](docs/GeoPosition.md)
