---
title: Интеграция HubEx с Битрикс24
description: Узнайте о возможностях интеграции HubEx с системой Битрикс24 по передачи данных между системам.
keywords: Интеграция, Битрикс, Битрикс24, bitrix, integration, заявка, заявки, hubex, хабекс, хубекс, хабикс
---
<html lang="ru">
<head>
</head>
<body>
<h1><strong>Инструкция по интеграции Битрикс24 и HubEx</strong></h1>
<h2><strong>Назначение интеграции</strong></h2>
<p class="ds-markdown-paragraph">Интеграция между&nbsp;<strong>Битрикс24</strong>&nbsp;и&nbsp;<strong>HubEx</strong>&nbsp;позволяет автоматизировать передачу данных между системами:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Создание заявок в HubEx при переходе сделки на заданную стадию в Битрикс24.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обновление стадии сделки в Битрикс24 после завершения заявки в HubEx.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Преимущества интеграции:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Снижение ручного ввода данных.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Ускорение процессов между отделами продаж и сервиса.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Минимизация ошибок при передаче информации.</p>
</li>
</ul>
<hr />
<h2><strong>Подготовка к настройке</strong></h2>
<p class="ds-markdown-paragraph">Перед началом убедитесь, что:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">У вас есть права администратора в&nbsp;<strong>Битрикс24</strong>&nbsp;и&nbsp;<strong>HubEx</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">В HubEx создан служебный пользователь для API-доступа.</p>
</li>
</ol>
<hr />
<h2><strong>Настройка в Битрикс24</strong></h2>
<h3><strong>1. Установка приложения HubEx</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Перейдите в&nbsp;<strong>Маркетплейс Битрикс24</strong>&nbsp;&rarr; найдите приложение&nbsp;<strong>HubEx</strong>&nbsp;&rarr; установите его.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Откройте приложение. В нём доступны два раздела:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Создание робота</strong>&nbsp;(для автоматизации создания заявок).</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Генерация токена</strong>&nbsp;(для связи аккаунтов).</p>
</li>
</ul>
</li>
</ol>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок1.png" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<h3><strong>2. Настройка робота для создания заявок</strong></h3>
<p class="ds-markdown-paragraph">2.1 В<strong>&nbsp;Битрикс24</strong>, в&nbsp;приложении HubEx нажмите&nbsp;<strong>&laquo;Создать робота&raquo;</strong>.</p>
<p class="ds-markdown-paragraph">2.2 Перейдите в&nbsp;<strong>CRM &rarr; Роботы</strong>.</p>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок2.jpg" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<p class="ds-markdown-paragraph">2.3 Выберите воронку и стадию, при переходе на которую должна создаваться заявка.</p>
<p class="ds-markdown-paragraph">2.4 Нажмите&nbsp;<strong>&laquo;+&raquo;</strong>&nbsp;под стадией &rarr; выберите&nbsp;<strong>&laquo;Другие роботы&raquo;</strong>.</p>
<p class="ds-markdown-paragraph">2.5 Найдите робота&nbsp;<strong>&laquo;[HubEx] Создание заявки HubEx&raquo;</strong>.</p>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок3.png" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<p>2.6 Настройте параметры:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Когда выполнять</strong>: &laquo;Сразу&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Порядок выполнения</strong>: &laquo;Независимо от других роботов&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Стадию сделки</strong>, когда будет создаваться заявка в HubEx.</p>
</li>
</ul>
<img src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок4.png" style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;">
<p class="ds-markdown-paragraph">2.7 Сохраните изменения.</p>
<h3><strong>3. Создание токена для интеграции</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Вернитесь в приложение HubEx в Битриск24 &rarr; нажмите&nbsp;<strong>&laquo;Создать новый токен&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Скопируйте сгенерированный токен (он понадобится для настройки в HubEx).</p>
</li>
</ol>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок5.png" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<hr />
<h2><strong>Настройка в HubEx</strong></h2>
<h3><strong>1. Получение API-ключа</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Войдите в&nbsp;<strong>Консоль администратора HubEx</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Перейдите в&nbsp;<strong>Интеграции &rarr; Служебные пользователи</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Сгенерируйте&nbsp;<strong>токен доступа (API-ключ)</strong>&nbsp;и сохраните его.</p>
</li>
</ol>
<p>Подробнее читайте в статье:&nbsp;<a href="./ServiceUsers.html">Служебные пользователи</a></p>
<h3><strong>2. Связывание аккаунтов</strong></h3>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Откройте веб-приложение HubEx &rarr; вкладка&nbsp;<strong>&laquo;Интеграция с Б24&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Заполните поля:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>API-ключ HubEx</strong>: вставьте токен из консоли администратора.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Токен интеграции</strong>: вставьте токен из Битрикс24.</p>
</li>
</ul>
</li>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок6.png" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<li>
<p class="ds-markdown-paragraph">Нажмите&nbsp;<strong>&laquo;Проверить подключение&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">После успешной проверки настройте:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Тип заявки в HubEx.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Воронку Битрикс24 для автоматизации.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Стадию на которую будет переведена сделка в Битрикс24.</p>
</li>
</ul>
</li>
<img 
  src="/attachments/images/FAQ/ADMIN/IntegrationBitrix24/Рисунок7.png" 
  style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;"
>
<li>
<p class="ds-markdown-paragraph">Сохраните изменения.</p>
</li>
</ol>
<hr />
<h2><strong>Проверка работы интеграции</strong></h2>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Тест создания заявки</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Переведите сделку на заданную стадию в Битрикс24.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Убедитесь, что заявка появилась в HubEx с корректными данными.</p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Тест завершения заявки</strong>:</p>
<ul>
<li>
<p class="ds-markdown-paragraph">Завершите заявку в HubEx (стадия, которая в жизненном цикле заявки указана как 
<strong>Конечная стадия</strong>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Проверьте, что сделка в Битрикс24 перешла на указанную стадию.</p>
</li>
</ul>
</li>
</ol>
<hr />
<h2><strong>Перечень полей, которые приходят из Битрикс24 при создании заявки</strong></h2>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Название сделки в Битрикс24 переносится в поле Комментарий в HubEx</p>
</li>
<li>
<p class="ds-markdown-paragraph">Комментарий из сделки в Битрикс24 переносится в поле Комментарий в HubEx</p>
</li>
<li>
<p class="ds-markdown-paragraph">Тип заявки в HubEx задается при создании робота</p>
</li>
<li>
<p class="ds-markdown-paragraph">Критичность выбирается по заявке HubEx по умолчанию</p>
</li>
<li>
<p class="ds-markdown-paragraph">Компания-заказчик в заявке HubEx заполняется по компании из сделки Битрикс24. В случае, если такой компании нет в HubEx - будет создана новая компания</p>
</li>
</ol>
<hr />
<h2><strong>Частые вопросы (FAQ)</strong></h2>
<p class="ds-markdown-paragraph"><strong>Q1: Что делать, если заявка не создается?</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Проверьте, правильно ли настроен робот в Битрикс24.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Убедитесь, что токены введены корректно.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Q2: Как изменить стадию для создания заявки?</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Отредактируйте робота в Битрикс24, выбрав новую стадию.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Q3: Где найти токены для повторной настройки?</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Токен Битрикс24: в приложении HubEx.</p>
</li>
<li>
<p class="ds-markdown-paragraph">API-ключ HubEx: в Консоли администратора HubEx.</p>
</li>
</ul>
<hr />
<h2><strong>Заключение</strong></h2>
<p class="ds-markdown-paragraph">Интеграция&nbsp;<strong>Битрикс24 и HubEx</strong>&nbsp;значительно упрощает взаимодействие между отделами. Если у вас возникнут вопросы, обратитесь в поддержку HubEx или Битрикс24.</p>
<p class="ds-markdown-paragraph"><strong>Готово!</strong>&nbsp;Ваши системы теперь работают согласованно. 🚀</p>
</body>
</html>

____
- [Перейти в меню](http://wiki.hubex.ru)
