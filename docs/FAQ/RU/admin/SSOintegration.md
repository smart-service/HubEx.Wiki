---
title: Универсальная интеграция SSO для всех клиентов HubEx
description: Узнайте о возможностях настройки SSO для HubEX.
keywords: Интеграция, SSO, ССО, hubex, хабекс, хубекс, хабикс
---
<html lang="ru">
<head>
</head>
<body>
<h2>Универсальная интеграция SSO для всех клиентов HubEx</h2>
<h2>🌟 Что нового?</h2>
<p class="ds-markdown-paragraph">Мы рады сообщить о значительном расширении возможностей единого входа (SSO) в HubEx! Теперь все клиенты могут настроить безопасную авторизацию через корпоративные системы идентификации.</p>
<h2>🔐 Ключевые возможности</h2>
<h3>Для администраторов:</h3>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкая настройка SSO</strong>&nbsp;для любого тенанта через Keycloak</p>
</li>
<li>
<p class="ds-markdown-paragraph">Поддержка&nbsp;<strong>различных стандартов</strong>&nbsp;аутентификации:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">SAML 2.0</p>
</li>
<li>
<p class="ds-markdown-paragraph">OpenID Connect/OAuth 2.0</p>
</li>
<li>
<p class="ds-markdown-paragraph">LDAP/Active Directory</p>
</li>
<li>
<p class="ds-markdown-paragraph">Kerberos</p>
</li>
<li>
<p class="ds-markdown-paragraph">CAS</p>
</li>
<li>
<p class="ds-markdown-paragraph">Azure AD</p>
</li>
<li>
<p class="ds-markdown-paragraph">Google Workspace</p>
</li>
</ul>
</li>
</ul>
<h3>Для пользователей:</h3>
<ul>
<li>
<p class="ds-markdown-paragraph">Простой и&nbsp;<strong>безопасный вход</strong>&nbsp;через корпоративные учетные данные</p>
</li>
<li>
<p class="ds-markdown-paragraph">Возможность&nbsp;<strong>выбора тенанта</strong>&nbsp;при наличии нескольких доступных</p>
</li>
<li>
<p class="ds-markdown-paragraph">Единый процесс авторизации&nbsp;<strong>во всех интерфейсах</strong>&nbsp;(WEB и МП)</p>
</li>
</ul>
<h2>🛠️ Как это работает?</h2>
<h3>Процесс настройки:</h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Администратор предоставляет параметры интеграции</p>
</li>
<li>
<p class="ds-markdown-paragraph">Настраивается Realm в Keycloak</p>
</li>
<li>
<p class="ds-markdown-paragraph">Указывается SSO-логин для пользователей тенанта</p>
</li>
</ol>
<h3>Процесс авторизации:</h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Пользователь выбирает "Вход через SSO"</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вводит корпоративный логин</p>
</li>
<li>
<p class="ds-markdown-paragraph">Система перенаправляет в корпоративную систему аутентификации</p>
</li>
<li>
<p class="ds-markdown-paragraph">После успешной проверки &mdash; автоматический вход в HubEx</p>
</li>
</ol>
<h2>⚙️ Требуемые параметры для настройки</h2>
<h3>Для SAML 2.0:</h3>
<ul>
<li>
<p class="ds-markdown-paragraph">Entity ID</p>
</li>
<li>
<p class="ds-markdown-paragraph">SSO URL</p>
</li>
<li>
<p class="ds-markdown-paragraph">X.509 сертификат</p>
</li>
<li>
<p class="ds-markdown-paragraph">NameID Format</p>
</li>
<li>
<p class="ds-markdown-paragraph">(опционально) Metadata URL/XML</p>
</li>
</ul>
<h3>Для OpenID Connect:</h3>
<ul>
<li>
<p class="ds-markdown-paragraph">Client ID</p>
</li>
<li>
<p class="ds-markdown-paragraph">Client Secret</p>
</li>
<li>
<p class="ds-markdown-paragraph">Authorization Endpoint URL</p>
</li>
<li>
<p class="ds-markdown-paragraph">Token Endpoint URL</p>
</li>
<li>
<p class="ds-markdown-paragraph">UserInfo Endpoint URL</p>
</li>
<li>
<p class="ds-markdown-paragraph">Redirect URI</p>
</li>
<li>
<p class="ds-markdown-paragraph">(опционально) Scopes</p>
</li>
</ul>
<h2>⚠️ Важная информация</h2>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Интеграция требует индивидуальной настройки</strong>&nbsp;для каждого клиента</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Необходимо время</strong>&nbsp;на тестирование и отладку</p>
</li>
<li>
<p class="ds-markdown-paragraph">Для сложных интеграций может потребоваться&nbsp;<strong>дополнительное согласование</strong></p>
</li>
</ol>
<h2>📅 Следующие шаги</h2>
<p class="ds-markdown-paragraph">Для подключения SSO вашей организации:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Соберите необходимые параметры аутентификации</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обратитесь в службу поддержки HubEx</p>
</li>
<li>
<p class="ds-markdown-paragraph">Наша команда поможет с настройкой интеграции</p>
</li>
</ol>
<p class="ds-markdown-paragraph">💡&nbsp;<strong>Вопросы?</strong>&nbsp;Наши специалисты всегда готовы проконсультировать по возможностям SSO-интеграции! Пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
</body>
</html>

____
- [Перейти в меню](http://wiki.hubex.ru)
