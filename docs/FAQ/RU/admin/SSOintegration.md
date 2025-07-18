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
<p class="ds-markdown-paragraph"><strong>SSO (Single Sign-On)</strong>&nbsp;&mdash; это технология единого входа, которая позволяет пользователям авторизоваться один раз и получать доступ к нескольким приложениям или сервисам без повторного ввода логина и пароля.</p>
<h3><strong>Как работает SSO?</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Пользователь входит в систему</strong>&nbsp;через центральный сервис аутентификации (например, Google, Microsoft Azure AD, Okta).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Сервис SSO генерирует токен</strong>&nbsp;(например, SAML, OAuth 2.0, OpenID Connect), подтверждающий личность пользователя.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Другие приложения (сервисы) доверяют этому токену</strong>&nbsp;и автоматически предоставляют доступ без запроса пароля.</p>
</li>
</ol>
<h3><strong>Примеры использования SSO</strong></h3>
<ul>
<li>
<p class="ds-markdown-paragraph">Вход в корпоративные системы (например, через Active Directory).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Авторизация на сайтах через Google, Facebook, Apple ID.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Доступ к облачным сервисам (Microsoft 365, Salesforce, HubEx).</p>
</li>
</ul>
<h3><strong>Преимущества SSO</strong></h3>
<p class="ds-markdown-paragraph">✅&nbsp;<strong>Удобство</strong>&nbsp;&ndash; не нужно запоминать много паролей.<br />✅&nbsp;<strong>Безопасность</strong>&nbsp;&ndash; снижает риск утечки паролей (меньше точек ввода).<br />✅&nbsp;<strong>Централизованное управление</strong>&nbsp;&ndash; админ может быстро отозвать доступ.<br />✅&nbsp;<strong>Интеграция с MFA</strong>&nbsp;&ndash; можно добавить двухфакторную аутентификацию.</p>
<h3><strong>Популярные протоколы SSO</strong></h3>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>SAML</strong>&nbsp;(Security Assertion Markup Language) &ndash; корпоративные решения.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>OAuth 2.0 / OpenID Connect</strong>&nbsp;&ndash; веб- и мобильные приложения.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>LDAP / Active Directory</strong>&nbsp;&ndash; внутренние корпоративные системы.</p>
</li>
</ul>
<h3><strong>Где применяется SSO?</strong></h3>
<ul>
<li>
<p class="ds-markdown-paragraph">Корпоративные порталы (например, доступ к CRM, почте, ERP).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Облачные сервисы (Google Workspace, Microsoft 365).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Государственные и банковские системы.</p>
</li>
</ul>
<h3><strong>SSO в HubEx</strong></h3>
<p class="ds-markdown-paragraph">Если HubEx поддерживает SSO, пользователи могут входить в систему через:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Google / Microsoft аккаунт</p>
</li>
<li>
<p class="ds-markdown-paragraph">Корпоративный Active Directory</p>
</li>
<li>
<p class="ds-markdown-paragraph">Другие Identity Provider (Okta, Auth0)</p>
</li>
</ul>
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
