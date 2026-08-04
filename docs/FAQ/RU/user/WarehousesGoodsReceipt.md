---
title: Складской документ - Оприходование
description: Документ «Оприходование» фиксирует поступление материалов на склад.
  После проведения документа остатки материалов на выбранном складе обновляются,
  и вы можете отслеживать актуальное количество ТМЦ в системе.
keywords: Склады, Оприходование, Приемка товаров, Материалы, hubex, хабекс,
  хубекс, хабикс
category: user
---
<h2 dir="auto">Оприходование</h2>

<p dir="auto">Документ <strong>&laquo;Оприходование&raquo;</strong> фиксирует поступление материалов на склад. После проведения документа остатки материалов на выбранном складе обновляются, и вы можете отслеживать актуальное количество ТМЦ в системе.</p>

<blockquote dir="auto">

<p dir="auto">📌 <strong>Где находится:</strong> меню <strong>&laquo;Склады&raquo; &rarr; &laquo;Складские документы&raquo;</strong>. Общее описание раздела &mdash; в статье <a href="../user/WarehouseOperations.html" target="_blank" rel="nofollow">Складские документы</a>.</p>

</blockquote>

<p dir="auto">В этом разделе вы узнаете:</p>

<ul dir="auto">

<li class="text-start ">Как создать документ &laquo;Оприходование&raquo;;</li>

<li class="text-start ">Как заполнить шапку и добавить материалы;</li>

<li class="text-start ">Как провести, отменить или удалить документ;</li>

<li class="text-start ">Какие условия проверяются при проведении.</li>

</ul>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Статусы документа</h3>

<ul dir="auto">

<li class="text-start "><strong>Черновик</strong> &mdash; документ создан, но не влияет на остатки и не отображается в отчётах.</li>

<li class="text-start "><strong>Проведен</strong> &mdash; документ проведён, остатки материалов на складе обновлены.</li>

</ul>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Как создать документ &laquo;Оприходование&raquo;</h3>

<ol dir="auto" start="1">

<li class="text-start">Перейдите в меню <strong>&laquo;Склады&raquo; &rarr; &laquo;Складские документы&raquo;</strong>.</li>

<li class="text-start">Нажмите кнопку <strong>&laquo;Создать документ&raquo;</strong> и выберите тип <strong>&laquo;Оприходование&raquo;</strong>.</li>

<li class="text-start">Заполните <strong>шапку документа</strong>.</li>

<li class="text-start">Добавьте <strong>материалы</strong> через модальное окно подбора.</li>

<li class="text-start">Нажмите <strong>&laquo;Сохранить&raquo;</strong> (черновик) или <strong>&laquo;Сохранить и провести&raquo;</strong>.</li>

</ol>

<hr class=" border-gray-100 dark:border-gray-850" />

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

<div class="break-normal">Выбор из справочника складов. <strong>Обязательное поле.</strong> До выбора склада блок материалов и кнопки сохранения недоступны</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Тип операции</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Обязательный выбор из списка типов складских операций</div>

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

<div class="break-normal">Привязка к заявке (необязательное поле)</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Работа с материалами</h3>

<h4 dir="auto">Выбор материалов</h4>

<ol dir="auto" start="1">

<li class="text-start">Нажмите кнопку <strong>&laquo;Добавить материалы&raquo;</strong> &mdash; откроется модальное окно подбора.</li>

<li class="text-start">Используйте <strong>поиск</strong> по наименованию и артикулу.</li>

<li class="text-start">Отметьте нужные позиции и укажите количество.</li>

<li class="text-start">При необходимости создайте новый материал прямо из модального окна по кнопке <strong>&laquo;Создать материал&raquo;</strong>.</li>

<li class="text-start">Нажмите <strong>&laquo;Выбрать&raquo;</strong> &mdash; позиции перенесутся в таблицу материалов на форме документа.</li>

</ol>

<h4 dir="auto">Таблица материалов на форме</h4>

<p dir="auto">После выбора материалы отображаются в таблице:</p>

<ul dir="auto">

<li class="text-start ">Просмотр выбранных позиций с количеством и единицами измерения;</li>

<li class="text-start ">Редактирование количества в строке;</li>

<li class="text-start ">Удаление строки при необходимости.</li>

</ul>

<blockquote dir="auto">

<p dir="auto"><strong>Примечание.</strong> При смене склада уже добавленные позиции в таблице сохраняются.</p>

</blockquote>

<hr class=" border-gray-100 dark:border-gray-850" />

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

<div class="break-normal">Создаёт черновик. Доступна только после выбора склада</div>

</td>

</tr>

<tr class="bg-white dark:bg-gray-900 text-xs">

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal"><strong>Сохранить и провести</strong> / <strong>Провести документ</strong></div>

</td>

<td class="px-3! py-2! text-gray-900 dark:text-white w-max border-b border-gray-50! dark:border-gray-850!">

<div class="break-normal">Проводит документ, если все обязательные условия выполнены</div>

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

<div class="break-normal">Удаляет документ. Если документ был проведён &mdash; автоматически отменяет проведение и пересчитывает остатки</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">&nbsp;</div>

</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<h3 dir="auto">Что проверяется при проведении</h3>

<p dir="auto">Обязательные условия для проведения документа:</p>

<ul dir="auto">

<li class="text-start ">Заполнен склад;</li>

<li class="text-start ">Указан номер документа;</li>

<li class="text-start ">Заполнена дата и время;</li>

<li class="text-start ">Указан ответственный;</li>

<li class="text-start ">Добавлена хотя бы одна позиция с количеством больше 0.</li>

</ul>

<p dir="auto">Если какое-то из условий не выполнено &mdash; система покажет ошибку и не проведёт документ.</p>

<div class="my-2">&nbsp;</div>

<hr class=" border-gray-100 dark:border-gray-850" />

<p dir="auto"><strong>Следующие шаги:</strong></p>

<ul dir="auto">

<li class="text-start "><a href="../user/WarehouseOperations.html" target="_blank" rel="nofollow">Складские документы</a></li>

<li class="text-start "><a href="../user/Materials.html" target="_blank" rel="nofollow">Загрузка материалов и создание складов</a></li>

<li class="text-start "><a href="../user/Withdrawals.html" target="_blank" rel="nofollow">Расход материалов по заявке, отчет по расходу</a></li>

<li class="text-start "><a href="../user/SettingsWithMaterials.html" target="_blank" rel="nofollow">Настройки системы для работы с материалами</a></li>

</ul>
