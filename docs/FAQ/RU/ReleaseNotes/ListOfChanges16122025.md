---
title: Глобальное управление видимостью дополнительных полей заявок, Улучшенная работа с картой: новый переключатель кластеризации заявок, Фильтры теперь работают на вкладке «Неназначенные» на карте, Ручной офлайн режим в МП
description: Добавили возможность настраивать глобальный доступ к дополнительным полям по заявке; Добавили возможность переключать кластеризацию точек на карте; Добавили фильтрацию заявок для вкладке Неназначенные на карте, Добавили возможность включать офлайн режим в МП вручную
keywords: Полномочия, заявки, видимость, карта, фильтр, Неназначенные, кластеризация, офлайн, МП, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3>🔐&nbsp;Глобальное управление видимостью дополнительных полей заявок</h3>
<p class="ds-markdown-paragraph">Уважаемые администраторы HubEx!</p>
<p class="ds-markdown-paragraph">Мы внедрили важное обновление для точного контроля доступа к дополнительным полям заявок. Теперь вы можете централизованно управлять тем, какие дополнительные поля видят пользователи разных ролей во всей системе.</p>
<h4>🎯 Что решает эта доработка</h4>
<p class="ds-markdown-paragraph">Раньше видимость дополнительных полей можно было настраивать только в контексте конкретных типов заявок и стадий. Теперь вы можете установить&nbsp;<strong>глобальные правила</strong>, которые будут применяться ко всем типам заявок, всем стадиям и всем разделам системы для дополнительных полей.</p>
<h4>🚀 Основные возможности</h4>
<p class="ds-markdown-paragraph"><strong>Новые функции в панели администрирования:</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Глобальные настройки доступа</strong>&nbsp;- только для дополнительных полей</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Признак "Недоступно"</strong>&nbsp;- устанавливается отдельно для каждой роли</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Простая настройка</strong>&nbsp;- выбираете роль и отмечаете поля, которые нужно скрыть</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Мгновенное применение</strong>&nbsp;- изменения вступают в силу сразу после сохранения</p>
</li>
</ol>
<h4>📋 Где применяются ограничения?</h4>
<p class="ds-markdown-paragraph">Дополнительные поля, помеченные как &laquo;Недоступно&raquo; для роли, полностью скрываются:</p>
<div class="ds-scroll-area _1210dd7 c03cafe9">
<div class="ds-scroll-area__gutters">&nbsp;</div>
<table>
<thead>
<tr>
<th>Раздел системы</th>
<th>Что происходит с полем</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Списки заявок</strong></td>
<td>Исключается из отображения в таблицах</td>
</tr>
<tr>
<td><strong>Фильтрация</strong></td>
<td>Не предлагается в списке доступных фильтров</td>
</tr>
<tr>
<td><strong>Карточка заявки</strong></td>
<td>Скрывается на всех стадиях и для всех типов заявок</td>
</tr>
<tr>
<td><strong>Экспорт данных</strong></td>
<td>Не включается в выгрузки для расширенного экспорта</td>
</tr>
</tbody>
</table>
</div>
<h4>⚙️ Технические детали</h4>
<p class="ds-markdown-paragraph"><strong>Охватывает только:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Все дополнительные поля заявок</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Не затрагивает:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Системные поля заявок</p>
</li>
<li>
<p class="ds-markdown-paragraph">Стандартные поля интерфейса</p>
</li>
<li>
<p class="ds-markdown-paragraph">Обязательные системные атрибуты</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Принцип работы:</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Глобальные настройки имеют высший приоритет</p>
</li>
<li>
<p class="ds-markdown-paragraph">Если дополнительное поле помечено как &laquo;Недоступно&raquo; для роли, оно скрывается везде</p>
</li>
<li>
<p class="ds-markdown-paragraph">Другие настройки доступа (по типам заявок или стадиям) игнорируются для этих полей</p>
</li>
</ol>
<h4>🛠️ Как настроить?</h4>
<p class="ds-markdown-paragraph"><strong>Процесс настройки:</strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Откройте раздел&nbsp;<strong>&laquo;Поля на форме заявки&raquo;</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph">Перейдите&nbsp;на вкладку&nbsp;<strong>&laquo;Общий доступ к полям&raquo;</strong></p>
</li>
</ol>
<p><img style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges16122025/rfKvWHL4_image.png" alt="" /></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">В новой колонке&nbsp;<strong>&laquo;Роли&raquo;</strong>&nbsp;выберите нужную роль</p>
</li>
<li>
<p class="ds-markdown-paragraph">Отметьте галочкой&nbsp;<strong>&laquo;Недоступно&raquo;</strong>&nbsp;для полей, которые нужно скрыть</p>
</li>
<li>
<p class="ds-markdown-paragraph">Сохраните изменения</p>
</li>
</ol>
<p class="ds-markdown-paragraph"><strong>Важно:</strong>&nbsp;Можно сохранять настройки, выбрав только роль, без привязки к конкретному типу заявки.</p>
<h4>🎯 Преимущества для администраторов</h4>
<p class="ds-markdown-paragraph"><strong>Упрощенное управление</strong>&nbsp;- одна настройка для всех типов заявок<br /><strong>Повышенная безопасность</strong>&nbsp;- скрытие конфиденциальных или служебных данных<br /><strong>Чистый интерфейс</strong>&nbsp;- пользователи видят только релевантные для их задач поля<br /><strong>Быстрое внедрение</strong>&nbsp;- мгновенное применение изменений (требуется перезагрузка страницы)<br /><strong>Гибкость</strong>&nbsp;- разные наборы полей для разных ролей</p>
<h4>💡 Рекомендации по использованию</h4>
<p class="ds-markdown-paragraph"><strong>Типичные сценарии:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Скрытие финансовых полей от исполнителей</p>
</li>
<li>
<p class="ds-markdown-paragraph">Ограничение доступа к полям с персональными данными</p>
</li>
<li>
<p class="ds-markdown-paragraph">Упрощение интерфейса для новых сотрудников</p>
</li>
<li>
<p class="ds-markdown-paragraph">Создание разных рабочих пространств для разных отделов</p>
</li>
</ul>
<hr />
<p>&nbsp;</p>
<h3>🗺️ Улучшенная работа с картой: новый переключатель кластеризации заявок</h3>
<p class="ds-markdown-paragraph">Мы обновили систему отображения заявок на карте. Теперь вы можете управлять группировкой точек и выбирать удобный для вас режим просмотра.</p>
<h4>🔄 Что изменилось</h4>
<p class="ds-markdown-paragraph"><strong>Новый переключатель режимов:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>С кластеризацией</strong>&nbsp;&mdash; точки группируются при отдалении (как было раньше)</p>
</li>
</ul>
<p><img style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges16122025/HLfgxP67_image.png" alt="" /></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Без кластеризации</strong>&nbsp;&mdash; все заявки отображаются отдельными точками</p>
</li>
</ul>
<p><img style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges16122025/nMQ7CNMJ_image.png" alt="" /></p>
<p class="ds-markdown-paragraph"><strong>Как это работает:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">При масштабе от&nbsp;<strong>10</strong>&nbsp;до&nbsp;<strong>15 (примерно 2500 км<sup>2</sup> на карте)</strong>&nbsp;&mdash; появляется кнопка переключения режимов</p>
</li>
<li>
<p class="ds-markdown-paragraph">При масштабе&nbsp;<strong>15 и выше (примерно 7 км<sup>2</sup> на карте)</strong>&nbsp;&mdash; кластеризация всегда отключена, видны все отдельные точки</p>
</li>
<li>
<p class="ds-markdown-paragraph">При масштабе&nbsp;<strong>меньше 10</strong>&nbsp;&mdash; кластеризация всегда включена</p>
</li>
</ul>
<h4>🎯 Что это дает</h4>
<p class="ds-markdown-paragraph"><strong>Для точного поиска:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Видите все заявки на местности без группировки</p>
</li>
<li>
<p class="ds-markdown-paragraph">Легко находите конкретные&nbsp;заявки в плотной застройке</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Для общего обзора:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Сохраняете возможность группировки при отдалении</p>
</li>
<li>
<p class="ds-markdown-paragraph">Быстро оцениваете распределение заявок по районам</p>
</li>
</ul>
<h4>📍 Где доступно</h4>
<p class="ds-markdown-paragraph">Новый функционал работает в двух местах:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong>Карта в разделе &laquo;Заявки&raquo;</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Отдельный раздел &laquo;Карты&raquo;</strong></p>
</li>
</ol>
<h4>💡 Как пользоваться</h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Откройте карту с заявками</p>
</li>
<li>
<p class="ds-markdown-paragraph">Приблизьте карту до появления кнопки переключения</p>
</li>
<li>
<p class="ds-markdown-paragraph">Нажмите на переключатель для смены режима</p>
</li>
<li>
<p class="ds-markdown-paragraph">Выберите удобный для вашей задачи вариант</p>
</li>
</ol>
<h4>⚙️ Технические особенности</h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Дождитесь загрузки заявок (<span style="text-decoration: underline;">при необходимости после переключения режима подвиньте карту или увеличьте/уменьшите масштаб, чтобы запустить перерисовку точек на карте</span>)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Настройки сохраняются во время сессии</p>
</li>
<li>
<p class="ds-markdown-paragraph">Работает стабильно без &laquo;прыгающих&raquo; кластеров</p>
</li>
<li>
<p class="ds-markdown-paragraph">Все заявки на одном адресе по-прежнему группируются в один пин с количеством</p>
</li>
</ul>
<hr />
<p>&nbsp;</p>
<h3>🗺️ Фильтры теперь работают на вкладке &laquo;Неназначенные&raquo; на карте</h3>
<p class="ds-markdown-paragraph">Мы доработали фильтрацию заявок&nbsp;для карты заявок. Теперь фильтры применяются единообразно на всех вкладках - <strong>&laquo;Все&raquo;/&laquo;Неназначенные&raquo;</strong>, что делает планирование и распределение задач более эффективным.</p>
<h4>🔄 Что изменилось</h4>
<p class="ds-markdown-paragraph"><strong>Раньше:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Фильтры работали только на вкладке&nbsp;<strong>&laquo;Все&raquo;</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph">На вкладке&nbsp;<strong>&laquo;Неназначенные&raquo;</strong>&nbsp;показывались все задачи без фильтрации</p>
</li>
<li>
<p class="ds-markdown-paragraph">Это затрудняло поиск конкретных типов неназначенных заявок</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>Теперь:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Фильтры применяются&nbsp;<strong>одинаково на обеих вкладках</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph">При переключении на &laquo;Неназначенные&raquo; сохраняются все активные фильтры</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вы видите только те неназначенные заявки, которые соответствуют вашим критериям</p>
</li>
</ul>
<h4>🎯 Примеры использования</h4>
<p class="ds-markdown-paragraph"><strong>Для диспетчеров:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Фильтр &laquo;Тип: Протечка воды&raquo; &rarr; показываются только неназначенные заявки по протечкам</p>
</li>
<li>
<p class="ds-markdown-paragraph">Фильтр &laquo;Приоритет: Высокий&raquo; &rarr; только срочные неназначенные задачи</p>
</li>
<li>
<p class="ds-markdown-paragraph">Комбинированные фильтры &rarr; точный подбор задач для назначения</p>
</li>
</ul>
<h4>📊 Новая информация на вкладке</h4>
<p class="ds-markdown-paragraph">Теперь на вкладке отображается:</p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>&laquo;Неназначенные (12)&raquo;</strong>&nbsp;&mdash; общее количество без фильтров</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>&laquo;Неназначенные (3)&raquo;</strong>&nbsp;&mdash; количество после применения фильтров</p>
</li>
<li>
<p class="ds-markdown-paragraph">Активные фильтры подсвечиваются и остаются видимыми</p>
</li>
</ul>
<h4>⚙️ Особые условия</h4>
<p class="ds-markdown-paragraph"><strong>Единственное исключение:</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Фильтр&nbsp;<strong>&laquo;Исполнитель по заявке&raquo;</strong>&nbsp;не применяется на вкладке &laquo;Неназначенные&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph">Он остается видимым, но заблокированным (засеренным)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Логично: у неназначенных заявок еще нет исполнителей</p>
</li>
</ul>
<h4>💡 Как это работает</h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Устанавливаете фильтры на вкладке &laquo;Все&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph">Переключаетесь на &laquo;Неназначенные&raquo;</p>
</li>
<li>
<p class="ds-markdown-paragraph">Видите только те неназначенные заявки, которые соответствуют фильтрам</p>
</li>
<li>
<p class="ds-markdown-paragraph">Можете дальше уточнять фильтрацию прямо на этой вкладке</p>
</li>
</ol>
<hr>
<h3><strong>📶 Новая кнопка &laquo;Перейти в офлайн&raquo; в боковом меню</strong></h3>
<p class="ds-markdown-paragraph">Теперь в мобильном приложении HubEx вы можете вручную переключаться в офлайн-режим, если интернет работает нестабильно или отсутствует.</p>
<h4>🔄&nbsp;<strong>Как это работает:</strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">Откройте боковое меню приложения</p>
</li>
<li>
<p class="ds-markdown-paragraph">Найдите переключатель&nbsp;<strong>&laquo;Офлайн-режим&raquo;</strong></p>
</li>
<li>
<p class="ds-markdown-paragraph">Включите его, если хотите работать без интернета</p>
</li>
</ol>
<p><img style="max-width: 600px; width: 100%; height: auto; display: block; margin: 0 auto;" src="/attachments/images/FAQ/RELEASENOTES/ListOfChanges16122025/Kp5BjRmW_image.png" alt="" /></p>
<h4>⏰&nbsp;<strong>Особенности:</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Если вы перешли в офлайн&nbsp;<strong>вручную</strong>, система автоматически попытается вернуться в онлайн только через&nbsp;<strong>30 минут</strong>&nbsp;(при наличии сети)</p>
</li>
<li>
<p class="ds-markdown-paragraph">Вы можете&nbsp;<strong>в любой момент</strong>&nbsp;отключить офлайн-режим через тот же переключатель</p>
</li>
<li>
<p class="ds-markdown-paragraph">При закрытии или долгом сворачивании приложения ручной офлайн-режим сбрасывается</p>
</li>
</ul>
<h4>🎯&nbsp;<strong>Для чего это нужно:</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph">Работа в зонах со слабым сигналом</p>
</li>
<li>
<p class="ds-markdown-paragraph">Планирование задач без зависимости от интернета</p>
</li>
<li>
<p class="ds-markdown-paragraph">Избегание зависаний при нестабильном соединении</p>
</li>
</ul>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
