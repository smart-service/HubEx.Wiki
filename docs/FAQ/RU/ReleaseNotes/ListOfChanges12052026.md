---
title: Настройка точности сбора координат в МП, Реализация всплывающих окон по ошибка в МП, Применение быстрых фильтров в МП для заявок
description: Добавили возможность настраивать точность сбора координат в МП, Переделали уведомления об ошибка в МП для заяовк, Добавили возможность применения быстрых фильтров по заявкам в МП
keywords: точность, кординаты, геокоординаты, ошибки, всплывающие окна, быстрые фильтры, МП, coordinates, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong><span class="">📍 Новые настройки точности сбора геокоординат для мобильных сотрудников</span></strong></h3>
<p class="ds-markdown-paragraph"><span class="">Теперь администраторы могут выбирать режим сбора геолокации для каждого мобильного сотрудника. Это позволяет оптимизировать расход батареи устройств в зависимости от задач сотрудника.</span></p>
<h4><span class="">🎯&nbsp;</span><strong><span class="">Зачем это нужно?</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">Чем выше точность и частота сбора координат, тем быстрее разряжается телефон или планшет сотрудника. Раньше все работали в едином &laquo;максимальном&raquo; режиме, который требовал много энергии, но позволял получить наибольшую точность в отслеживании перемещений сотрудника. Теперь вы можете гибко настроить баланс между детализацией отслеживания и временем автономной работы.</span></p>
<h4><span class="">⚙️&nbsp;</span><strong><span class="">Три режима на выбор</span></strong></h4>
<p class="ds-markdown-paragraph"><strong><span class="">1. Максимальная точность (режим по умолчанию &mdash; как работает сейчас)</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Координаты фиксируются&nbsp;</span><strong><span class="">максимально точно и часто</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Расход батареи &mdash; высокий</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Когда использовать</span></strong><span class="">: для сотрудников, работающих со срочными вызовами, в плотной городской застройке, где важна каждая минута перемещения.</span></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong><span class="">2. Сбалансированный режим</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Координаты фиксируются с&nbsp;</span><strong><span class="">умеренной частотой</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Оптимальный баланс</span></strong><span class="">&nbsp;между точностью и энергопотреблением.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Когда использовать</span></strong><span class="">: для большинства сервисных задач, где не нужна сверхточная геолокация в реальном времени.</span></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong><span class="">3. Минимальная точность</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Координаты определяются&nbsp;</span><strong><span class="">приблизительно, с редкими обновлениями</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Минимальный расход батареи</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Когда использовать</span></strong><span class="">: для сотрудников, работающих в удалённых районах или в полях, где важно максимально продлить время работы устройства без подзарядки.</span></p>
</li>
</ul>
<h4><span class="">🛠️&nbsp;</span><strong><span class="">Для администратора: как настроить</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">В карточке пользователя (раздел WEB) для сотрудника, у которого включены опции&nbsp;</span><strong><span class="">&laquo;Мобильный сотрудник&raquo;</span></strong><span class="">&nbsp;и&nbsp;</span><strong><span class="">&laquo;Отслеживать местоположение&raquo;</span></strong><span class="">, теперь доступен выбор:</span></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><span class="">Перейдите в профиль сотрудника.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">В блоке настроек мобильного доступа выберите нужный режим точности.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Сохраните изменения &mdash; они вступят в силу после ближайшей синхронизации мобильного приложения.</span></p>
</li>
</ol>
<blockquote>
<p class="ds-markdown-paragraph"><strong><span class="">По умолчанию для всех пользователей установлен режим &laquo;Максимальная точность&raquo;</span></strong><span class="">&nbsp;&mdash; система продолжит работать так же, как и раньше, без дополнительных действий с вашей стороны.</span></p>
</blockquote>
<p>image1</p>
<h4><span class="">📱&nbsp;</span><strong><span class="">Для пользователя</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">Ничего менять не нужно. Приложение автоматически получит новые настройки от сервера и начнёт собирать геоданные в соответствии с выбранным администратором режимом. Интерфейс мобильного приложения остаётся прежним &mdash; все изменения происходят незаметно на уровне фоновых служб.</span></p>
<h4><span class="">⚙️&nbsp;</span><strong><span class="">Детали реализации</span></strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Обновление на устройстве</span></strong><span class="">: МП запрашивает актуальный режим при авторизации и запуске приложения.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Расширяемость</span></strong><span class="">: справочник режимов открыт для добавления новых вариантов в будущем.</span></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong><span class="">Новые настройки уже доступны в веб-интерфейсе HubEx.</span></strong><span class="">&nbsp;Администраторы могут гибко управлять энергопотреблением мобильных устройств сотрудников, выбирая оптимальный для каждой задачи режим сбора геолокации.</span></p>
<hr />
<h3><strong><span class="">📱 Улучшенные подсказки об ошибках в мобильном приложении</span></strong></h3>
<p class="ds-markdown-paragraph"><span class="">Теперь при заполнении форм в мобильном приложении HubEx вы будете видеть полный текст ошибки в удобном модальном окне. Это поможет быстрее понимать, что именно нужно исправить, и снизит количество повторов отправки данных.</span></p>
<h4><span class="">🎯&nbsp;</span><strong><span class="">Какие ошибки теперь показываются в модальном окне?</span></strong></h4>
<p class="ds-markdown-paragraph"><strong><span class="">При работе с заявкой:</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Заполнение обязательных системных полей и дополнительных полей.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Заполнение акта выполненных работ.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Создание самой выполненной работы.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Заполнение чек-листа.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Перевод заявки на следующую стадию (если не все обязательные поля заполнены).</span></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong><span class="">Внутри выполненной работы:</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Отсутствие заполненного поля&nbsp;</span><strong><span class="">&laquo;Объект&raquo;</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Отсутствие заполненного поля&nbsp;</span><strong><span class="">&laquo;Вид работ&raquo;</span></strong><span class="">.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Отсутствие указанного&nbsp;</span><strong><span class="">&laquo;Исполнителя&raquo;</span></strong><span class="">.</span></p>
</li>
</ul>
<h4><span class="">✨&nbsp;</span><strong><span class="">Как это работает?</span></strong></h4>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Если при попытке сохранить данные допущена ошибка</span></strong><span class="">, на экране появляется модальное окно.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">В окне указано:</span></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Название поля</span></strong><span class="">, в котором допущена ошибка.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Полный текст ошибки</span></strong><span class="">&nbsp;(без обрезания).</span></p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">После прочтения нажмите кнопку&nbsp;</span><strong><span class="">&laquo;OK&raquo;</span></strong><span class="">, чтобы закрыть окно и исправить ошибку.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Если ошибок несколько, текст в окне можно прокручивать.</span></p>
</li>
</ol>
<p>image2</p>
<h4><span class="">👍&nbsp;</span><strong><span class="">Преимущества для пользователей</span></strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Понятно</span></strong><span class="">&nbsp;&mdash; больше не нужно гадать, что означает короткое сообщение об ошибке.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Быстро</span></strong><span class="">&nbsp;&mdash; сразу видно, какое поле и почему заполнено неверно.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Удобно</span></strong><span class="">&nbsp;&mdash; сообщения не исчезают через секунду, как раньше, и их можно спокойно прочитать.</span></p>
</li>
</ul>
<hr />
<h3><strong><span class="">📱 Быстрые фильтры для заявок теперь доступны в мобильном приложении</span></strong></h3>
<p class="ds-markdown-paragraph"><span class="">Управлять списком заявок в телефоне стало ещё удобнее. Теперь вы можете применять быстрые фильтры, которые заранее настроили в веб-версии, прямо в мобильном приложении &mdash; без ручного ввода параметров.</span></p>
<h4><span class="">🎯&nbsp;</span><strong><span class="">Что нового?</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">В верхней части экрана списка заявок в мобильном приложении появилась строка с&nbsp;</span><strong><span class="">быстрыми фильтрами</span></strong><span class="">&nbsp;(теми же, что вы создали в веб-версии). Достаточно нажать на нужный фильтр &mdash; и система покажет только подходящие под него заявки.</span></p>
<p class="ds-markdown-paragraph"><span class="">image3</span></p>
<h4><span class="">✨&nbsp;</span><strong><span class="">Как это работает</span></strong></h4>
<p class="ds-markdown-paragraph"><strong><span class="">Получение и применение:</span></strong></p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph"><span class="">Система автоматически загружает список доступных для вас быстрых фильтров.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Фильтры отображаются в виде кнопок в верхней части экрана (над списком заявок).</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">При выборе фильтра:</span></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">Список заявок обновляется.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Выбранный фильтр визуально выделяется.</span></p>
</li>
</ul>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Чтобы сбросить фильтрацию, просто нажмите на активный фильтр повторно.</span></p>
</li>
</ol>
<p class="ds-markdown-paragraph"><strong><span class="">Пример:</span></strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">У вас настроен фильтр &laquo;Плановые&raquo;.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">В мобильном приложении вы видите кнопку с этим названием.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Нажимаете на неё &mdash; и видите только заявки, назначенные на вас на текущий день.</span></p>
</li>
</ul>
<h4><span class="">📱&nbsp;</span><strong><span class="">Где доступно</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">Новый функционал работает:</span></p>
<ul>
<li>
<p class="ds-markdown-paragraph"><span class="">На вкладке&nbsp;</span><strong><span class="">&laquo;Список заявок&raquo;</span></strong><span class="">&nbsp;(любой таб: Мои, Все, Архив и т.д.).</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">На вкладке&nbsp;</span><strong><span class="">&laquo;Карта заявок&raquo;</span></strong><span class="">.</span></p>
</li>
</ul>
<h4><span class="">🛠️&nbsp;</span><strong><span class="">Важные особенности</span></strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong><span class="">Создание фильтров</span></strong><span class="">&nbsp;(пока) доступно&nbsp;</span><strong><span class="">только в веб-версии</span></strong><span class="">. В мобильном приложении вы можете только применять уже готовые.</span></p>
</li>
<li>
<p class="ds-markdown-paragraph"><span class="">Если фильтры не созданы &mdash; отображается обычный список заявок.</span></p>
</li>
</ul>
<h4><span class="">🔄&nbsp;</span><strong><span class="">Что будет в следующих версиях</span></strong></h4>
<p class="ds-markdown-paragraph"><span class="">В будущем планируется добавить возможность создавать и редактировать быстрые фильтры прямо в мобильном приложении.</span></p>
<hr />
<p class="ds-markdown-paragraph"><strong><span class="">Обновление уже доступно в мобильном приложении HubEx.</span></strong><span class="">&nbsp;Настройте фильтры один раз в веб-версии и пользуйтесь ими на телефоне &mdash; это экономит время! 🚀</span></p>
<hr />
<p class="ds-markdown-paragraph"><strong><span class="">Обновление уже доступно в мобильном приложении HubEx.</span></strong><span class="">&nbsp;Ошибки валидации стали понятнее &mdash; заполнять формы стало проще!</span></p>
<hr />
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr />
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
