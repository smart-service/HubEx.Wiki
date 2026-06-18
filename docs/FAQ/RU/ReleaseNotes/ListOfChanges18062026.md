---
title: Ручное создание складов в Панели диспетчера, Ручное создание материалов в Панели диспетчера
description: Добавили возможность создавать вручную склады и метариалы в панели диспетчера
keywords: Склады, Материалы, импорт, создание, склад, материал, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3 dir="auto">Ручное создание складов и материалов в Web</h3>
<p dir="auto"><strong>от 18.06.2026</strong></p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h4 dir="auto">📦 Ручное создание складов</h4>
<p dir="auto"><strong>Описание изменений</strong></p>
<p dir="auto">Ранее склады можно было создать только через импорт Excel-файла. Теперь появилась возможность ручного создания склада прямо в Web-интерфейсе &mdash; быстро, без подготовки шаблонов.</p>
<p dir="auto"><strong>Ключевые возможности</strong></p>
<p dir="auto"><strong>Создание через боковую панель</strong><br />В меню <strong>Склады | Материалы</strong> на странице справочника складов нажмите кнопку <strong>Создать склад</strong> &mdash; откроется боковая панель с полями:</p>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges18062026/1.jpg" alt="" /></p>
<ul dir="auto">
<li class="text-start "><strong>Название склада</strong> &mdash; текстовое поле, обязательное для заполнения.</li>
<li class="text-start "><strong>Адрес склада</strong> - поле для выбора адреса размещения склада, необязательное поле.</li>
<li class="text-start "><strong>Пользователи склада</strong> &mdash; радиобаттон с тремя значениями:
<ul dir="auto">
<li class="text-start "><em>Никто</em> &mdash; значение по умолчанию. Склад недоступен никому, кроме пользователей с полномочием доступа ко всем складам;</li>
<li class="text-start "><em>Все</em> &mdash; склад доступен всем сотрудникам тенанта;</li>
<li class="text-start "><em>По списку</em> &mdash; выбор конкретных сотрудников через модальное окно с поиском по ФИО, сортировкой по алфавиту и пагинацией. Доступен чекбокс &laquo;Выбрать все&raquo;.</li>
</ul>
</li>
<li class="text-start "><strong>ERP ID</strong> &mdash; числовое поле для синхронизации с внешней системой, необязательное поле.</li>
<li class="text-start "><strong>Выбрать основным складом</strong> &mdash; чекбокс, помечающий склад как основной.</li>
</ul>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges18062026/2.jpg" alt="" /></p>
<p dir="auto"><strong>Важно</strong></p>
<ul dir="auto">
<li class="text-start ">При выборе режима &laquo;По списку&raquo; необходимо добавить хотя бы одного сотрудника.</li>
<li class="text-start ">Настроить доступ пользователя к определённым складам по-прежнему можно в карточке Сотрудника на вкладке <strong>Квалификация</strong>.</li>
<li class="text-start ">При импорте Материалов через Excel для склада указывать <strong>адрес</strong> необходимо через ручное редактирование на вкладке <strong>Склады</strong>. Все уже существующие скады работают без изменений, поле адрес в них остается пустым, пока не будет заполнено вручную.</li>
</ul>
<p><strong>Табличный список складов</strong></p>
<ul>
<li dir="auto">В таблице теперь отображаются<strong> новые поля.</strong></li>
<li dir="auto">В<strong> фильтрах переименовано</strong> поле<strong> "Склад доступен" </strong>в<strong> "Пользователи склада"</strong></li>
</ul>
<p dir="auto">&nbsp;</p>
<hr class=" border-gray-100 dark:border-gray-850" />
<h4 dir="auto">📦 Ручное создание материалов</h4>
<p dir="auto"><strong>Описание изменений</strong></p>
<p dir="auto">Справочник материалов пополнился возможностью не только редактировать, но и <strong>вручную создавать и копировать</strong>&nbsp;материалы через Web-интерфейс.</p>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges18062026/3.jpg" alt="" /></p>
<div class="my-2"><strong>Ключевые возможности</strong></div>
<p dir="auto"><strong>Создание через боковую панель</strong><br />В меню <strong>Склады | Материалы</strong> на вкладке &laquo;Материалы&raquo; нажмите кнопку <strong>Создать материал</strong> &mdash; откроется боковая панель с полями:</p>
<ul dir="auto">
<li class="text-start "><strong>Наименование</strong> &mdash; текстовое поле, обязательное для заполнения.</li>
<li class="text-start "><strong>Описание</strong> &mdash; многострочное текстовое поле, необязательное.</li>
<li class="text-start "><strong>Артикул</strong> &mdash; текстовое поле, необязательное.</li>
<li class="text-start "><strong>Единица измерения</strong> &mdash; выпадающий список. Теперь это обязательное поле, как и для импорта&nbsp;через Excel (по умолчанию &mdash; &laquo;Штука&raquo;).</li>
<li class="text-start "><strong>Стоимость</strong> &mdash; дробное числовое поле, необязательное.</li>
<li class="text-start "><strong>ERP ID</strong> &mdash; текстовое поле для связи с внешней системой.</li>
<li class="text-start "><strong>Маркируемый материал</strong> &mdash; чекбокс, признак маркируемого материала для DataMatrix ("Честный знак").</li>
</ul>
<p><img style="max-width: 80%; max-height: 1000px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges18062026/4.jpg" alt="" /></p>
<p dir="auto"><strong>Контекстное меню в таблице</strong><br />В таблице материалов появилось контекстное меню (три точки) с действиями:</p>
<ul dir="auto">
<li class="text-start ">🆕<strong> Копировать</strong> &mdash; открывает боковую панель создания со всеми заполненными полями оригинала. Название автоматически дополняется префиксом &laquo;Копия&raquo;.</li>
<li class="text-start "><strong>Удалить</strong> &mdash; отображается диалоговое окно подтверждения. После удаления появляется алерт об успешном выполнении.</li>
</ul>
<p dir="auto"><strong>Важно</strong></p>
<ul dir="auto">
<li class="text-start ">Функционал импорта материалов через Excel сохраняется и работает параллельно с ручным созданием.</li>
<li class="text-start ">При копировании материала значение ERP ID также переносится &mdash; убедитесь, что оно не дублируется с существующими записями.</li>
</ul>
<hr class=" border-gray-100 dark:border-gray-850" />
<h4 dir="auto">🎯 Преимущества для пользователей</h4>
<ul dir="auto">
<li class="text-start "><strong>Скорость</strong> &mdash; больше не нужно готовить Excel-шаблоны для добавления одного склада или материала.</li>
<li class="text-start "><strong>Гибкость</strong> &mdash; настройка доступа к складу через выбор сотрудников прямо в форме создания.</li>
<li class="text-start "><strong>Удобство</strong> &mdash; копирование материалов экономит время при создании похожих позиций.</li>
</ul>
<hr>
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr>
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
