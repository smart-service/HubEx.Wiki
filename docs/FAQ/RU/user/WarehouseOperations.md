---
title: Виды складских документов
description: "Складские документы — это новый подраздел в меню «Склады», который
  объединяет все операции с материалами в одном месте. Здесь вы можете
  создавать, проводить и управлять складскими документами: оприходованием,
  списанием, перемещением и инвентаризацией."
keywords: Склады, документы, операции, материалы, hubex, хабекс, хубекс, хабикс
category: user
---
<h2 dir="auto">Складские документы</h2>

<p dir="auto"><strong>Складские документы</strong> &mdash; это новый подраздел в меню &laquo;Склады&raquo;, который объединяет все операции с материалами в одном месте. Здесь вы можете создавать, проводить и управлять складскими документами: оприходованием, списанием, перемещением и инвентаризацией.</p>

<div class="my-2">&nbsp;</div>

<blockquote dir="auto">

<p dir="auto">⚠️ <strong>Важно.</strong> На данный момент в подразделе доступен только документ <strong>&laquo;Оприходование&raquo;</strong>. Документы <strong>&laquo;Списание&raquo;</strong> и <strong>&laquo;Перемещение&raquo;</strong> находятся в разработке и будут добавлены в следующих обновлениях.</p>

</blockquote>

<p dir="auto">В этом разделе вы узнаете:</p>

<ul dir="auto">

<li class="text-start ">Как устроен список складских документов;</li>

<li class="text-start ">Как фильтровать, искать и управлять документами;</li>

<li class="text-start ">Как создать и провести документ &laquo;Оприходование&raquo;.</li>

</ul>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Обзор раздела &laquo;Складские документы&raquo;</h3>

<p dir="auto">Подраздел находится в меню <strong>&laquo;Склады&raquo; &rarr; &laquo;Складские документы&raquo;</strong> веб-версии HubEx. В табличном списке отображаются все созданные документы с ключевыми атрибутами:</p>

<div class="my-2">&nbsp;</div>

<div class="relative w-full group mb-2">

<div class="scrollbar-hidden relative overflow-x-auto max-w-full">

<table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl">

<thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none">

<tr>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Колонка</div>

</div>

</th>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Описание</div>

</div>

</th>

</tr>

</thead>

<tbody>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Номер</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Номер документа (генерируется автоматически или вводится вручную)</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Тип документа</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Оприходование, Списание, Перемещение, Инвентаризация</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Тип операции</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Выбранный тип складской операции</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Статус</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Черновик / Проведён</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Ответственный</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Сотрудник, создавший документ</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Дата создания</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Когда документ был создан</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Дата изменения</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Дата последнего редактирования</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Со склада</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Склад-источник (заполняется в зависимости от типа документа)</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>На склад</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Склад-приёмник (заполняется в зависимости от типа документа)</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal"><strong>Комментарий</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal">Произвольный текстовый комментарий</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<h3 dir="auto">Правила отображения складов</h3>

<ul dir="auto">

<li class="text-start "><strong>Оприходование</strong> &rarr; &laquo;Со склада&raquo; = <code class="codespan cursor-pointer">&mdash;</code>, &laquo;На склад&raquo; = выбранный склад;</li>

<li class="text-start "><strong>Списание</strong> &rarr; &laquo;Со склада&raquo; = выбранный склад, &laquo;На склад&raquo; = <code class="codespan cursor-pointer">&mdash;</code>;</li>

<li class="text-start "><strong>Перемещение</strong> &rarr; оба склада заполнены;</li>

<li class="text-start "><strong>Инвентаризация</strong> &rarr; оба поля = <code class="codespan cursor-pointer">&mdash;</code>.</li>

</ul>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Фильтрация, поиск и сортировка</h3>

<p dir="auto">Для быстрого поиска нужных документов используйте:</p>

<div class="my-2">&nbsp;</div>

<ul dir="auto">

<li class="text-start "><strong>Поиск</strong> по номеру документа (строка поиска над таблицей);</li>

<li class="text-start "><strong>Фильтры</strong> по:

<ul dir="auto">

<li class="text-start ">Статусу (множественный выбор);</li>

<li class="text-start ">Ответственному (множественный выбор);</li>

<li class="text-start ">Типу документа (множественный выбор);</li>

<li class="text-start ">Типу операции (множественный выбор);</li>

<li class="text-start ">Складам (откуда/куда);</li>

<li class="text-start ">Диапазону дат создания и изменения;</li>

</ul>

</li>

<li class="text-start "><strong>Сортировку</strong> по дате создания или изменения;</li>

<li class="text-start "><strong>Настройку видимости</strong> удалённых документов &mdash; по умолчанию включена опция &laquo;Скрыть удалённые&raquo;.</li>

</ul>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Управление документами</h3>

<h3 dir="auto">Переход к документу</h3>

<p dir="auto">Кликните по строке с документом &mdash; откроется страница просмотра или редактирования.</p>

<div class="my-2">&nbsp;</div>

<h3 dir="auto">Контекстное меню (три точки)</h3>

<p dir="auto">Доступные действия зависят от статуса документа:</p>

<div class="my-2">&nbsp;</div>

<div class="relative w-full group mb-2">

<div class="scrollbar-hidden relative overflow-x-auto max-w-full">

<table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl">

<thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none">

<tr>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Статус</div>

</div>

</th>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Доступные действия</div>

</div>

</th>

</tr>

</thead>

<tbody>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Черновик</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Удалить</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal"><strong>Проведён</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal">Отменить проведение, Удалить</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<h3 dir="auto">Особенности</h3>

<ul dir="auto">

<li class="text-start ">При <strong>удалении</strong> проведённого документа система автоматически отменяет его проведение и пересчитывает остатки материалов на складе.</li>

<li class="text-start "><strong>Отмена проведения</strong> переводит документ обратно в статус &laquo;Черновик&raquo; (доступно как из списка, так и со страницы документа).</li>

<li class="text-start ">Все критические действия (удаление, отмена проведения) требуют подтверждения в модальном окне.</li>

</ul>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Документ &laquo;Оприходование&raquo;</h3>

<p dir="auto">Документ <strong>&laquo;Оприходование&raquo;</strong> фиксирует поступление материалов на склад. После проведения документа остатки материалов на выбранном складе обновляются.</p>

<div class="my-2">&nbsp;</div>

<h3 dir="auto">Статусы документа</h3>

<ul dir="auto">

<li class="text-start "><strong>Черновик</strong> &mdash; документ создан, но не влияет на остатки и не отображается в отчётах.</li>

<li class="text-start "><strong>Проведен</strong> &mdash; документ проведён, остатки материалов на складе обновлены.</li>

</ul>

<div class="my-2">&nbsp;</div>

<h3 dir="auto">Как создать документ &laquo;Оприходование&raquo;</h3>

<ol dir="auto" start="1">

<li class="text-start">Перейдите в меню <strong>&laquo;Склады&raquo; &rarr; &laquo;Складские документы&raquo;</strong>.</li>

<li class="text-start">Нажмите кнопку <strong>&laquo;Создать документ&raquo;</strong> и выберите тип <strong>&laquo;Оприходование&raquo;</strong>.</li>

<li class="text-start">Заполните <strong>шапку документа</strong> (см. ниже).</li>

<li class="text-start">Добавьте <strong>материалы</strong> через модальное окно подбора.</li>

<li class="text-start">Нажмите <strong>&laquo;Сохранить&raquo;</strong> (черновик) или <strong>&laquo;Сохранить и провести&raquo;</strong>.</li>

</ol>

<div class="my-2">&nbsp;</div>

<h3 dir="auto">Шапка документа</h3>

<div class="relative w-full group mb-2">

<div class="scrollbar-hidden relative overflow-x-auto max-w-full">

<table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl">

<thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none">

<tr>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Поле</div>

</div>

</th>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Описание</div>

</div>

</th>

</tr>

</thead>

<tbody>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Номер</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Генерируется автоматически при проведении или вводится вручную</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Дата и время</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Обязательное поле. Если не заполнено &mdash; подставляется текущее время при сохранении</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Склад</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Выбор из справочника. Обязательное поле. До выбора склада блок материалов и кнопки сохранения недоступны</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Тип операции</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Обязательный выбор из списка</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Ответственный</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Автоматически заполняется текущим пользователем</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal"><strong>Заявка</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal">Привязка к заявке (необязательно)</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<h3 dir="auto">Работа с материалами</h3>

<h4 dir="auto">Выбор материалов</h4>

<ol dir="auto" start="1">

<li class="text-start">Нажмите кнопку <strong>&laquo;Добавить материалы&raquo;</strong> &mdash; откроется модальное окно.</li>

<li class="text-start">Используйте поиск по наименованию и артикулу.</li>

<li class="text-start">Выберите нужные позиции и укажите количество.</li>

<li class="text-start">При необходимости создайте новый материал прямо из модального окна.</li>

<li class="text-start">Нажмите <strong>&laquo;Выбрать&raquo;</strong>.</li>

</ol>

<div class="my-2">&nbsp;</div>

<h4 dir="auto">Таблица материалов</h4>

<p dir="auto">После выбора материалы отображаются в таблице на форме документа:</p>

<div class="my-2">&nbsp;</div>

<ul dir="auto">

<li class="text-start ">Просмотр выбранных позиций с количеством и единицами измерения;</li>

<li class="text-start ">Редактирование количества;</li>

<li class="text-start ">Удаление строки при необходимости.</li>

</ul>

<div class="my-2">&nbsp;</div>

<blockquote dir="auto">

<p dir="auto"><strong>Примечание.</strong> При смене склада позиции в таблице сохраняются.</p>

</blockquote>

<h3 dir="auto">Кнопки и действия</h3>

<div class="relative w-full group mb-2">

<div class="scrollbar-hidden relative overflow-x-auto max-w-full">

<table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl">

<thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none">

<tr>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Кнопка</div>

</div>

</th>

<th class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!" scope="col">

<div class="gap-1.5 text-left">

<div class="shrink-0 break-normal">Действие</div>

</div>

</th>

</tr>

</thead>

<tbody>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Сохранить</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Создаёт черновик (доступно только после выбора склада)</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Сохранить и провести</strong> / <strong>Провести документ</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Проводит документ при валидных данных</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Отменить проведение</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Возвращает документ в статус &laquo;Черновик&raquo;</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal"><strong>Удалить</strong> (меню &laquo;троеточие&raquo;)</div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max ">

<div class="break-normal">Удаляет документ</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<h3 dir="auto">Что проверяется при проведении</h3>

<p dir="auto">Обязательные условия для проведения документа:</p>

<div class="my-2">&nbsp;</div>

<ul dir="auto">

<li class="text-start ">Заполнен склад;</li>

<li class="text-start ">Указан номер документа;</li>

<li class="text-start ">Заполнена дата и время;</li>

<li class="text-start ">Указан ответственный;</li>

<li class="text-start ">Добавлена хотя бы одна позиция с количеством больше 0.</li>

</ul>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Планы по развитию</h3>

<blockquote dir="auto">

<p dir="auto">🚧 <strong>Скоро в системе:</strong></p>

<ul dir="auto">

<li class="text-start "><strong>Списание</strong> &mdash; документ для фиксации выбытия материалов со склада;</li>

<li class="text-start "><strong>Перемещение</strong> &mdash; документ для переноса материалов между складами.</li>

</ul>

</blockquote>

<p dir="auto">Следите за обновлениями в разделе <a href="../index_releasenotes.html" target="_blank" rel="nofollow">Новости системы</a>.</p>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<p dir="auto"><strong>Следующие шаги:</strong></p>

<ul dir="auto">

<li class="text-start "><a href="../Materials.html" target="_blank" rel="nofollow">Загрузка материалов и создание складов</a></li>

<li class="text-start "><a href="../Withdrawals.html" target="_blank" rel="nofollow">Расход материалов по заявке, отчет по расходу</a></li>

<li class="text-start "><a href="../InventoryAccounting.html" target="_blank" rel="nofollow">Складской учет в HubEx: два сценария управления складом</a></li>

<li class="text-start "><a href="../SettingsWithMaterials.html" target="_blank" rel="nofollow">Настройки системы для работы с материалами</a></li>

</ul>
