---
title: Сканирование Data Matrix в МП — Этап 2 Контроль списания
description: Реализовали второй этап для Data Matrix по контролю списания маркируемых материалов
keywords: Data Matrix, DataMatrix, Дата Матрикс, списание, маркируемые материалы, hubex, хабекс, хубекс, хабикс
---

<html lang="ru">
<head>
</head>
<body>
<h3><strong>📱 Сканирование Data Matrix в МП &mdash; Этап 2: Контроль списания маркируемых материалов</strong></h3>
<p class="ds-markdown-paragraph">Мы завершили второй этап внедрения работы с маркированными материалами. Теперь система контролирует, что все обязательные коды Data Matrix отсканированы перед закрытием заявки.</p>
<h4>🎯&nbsp;<strong>Что нового?</strong></h4>
<p class="ds-markdown-paragraph"><strong>1. Признак &laquo;Маркируемый материал&raquo; в карточке номенклатуры (WEB)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В разделе&nbsp;<strong>&laquo;Склады &rarr; Материалы&raquo;</strong>&nbsp;добавлен переключатель&nbsp;<strong>&laquo;Маркируемый материал&raquo;</strong>.</p>
<p><img style="max-width: 80%; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges16042026/1.jpg" alt="" /></p>
</li>
<li>
<p class="ds-markdown-paragraph">По умолчанию признак выключен (<code>false</code>).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Доступна фильтрация списка материалов по этому признаку.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>2. Визуальная индикация в мобильном приложении</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В списке выполненных работ маркируемые материалы отмечены специальной иконкой (Data Matrix).</p>
</li>
<li>
<p class="ds-markdown-paragraph">Пользователь сразу видит, какие позиции требуют сканирования кодов.</p>
<p><img style="max-width: 80%; height: auto; display: block; margin-left: auto; margin-right: auto;" src="https://wiki.hubex.ru/attachments/images/FAQ/RELEASENOTES/ListOfChanges16042026/2.jpg" alt="" /></p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>3. Контроль при смене статуса заявки (МП)</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">Если для статуса заявки в настройках&nbsp;<strong>&laquo;Поля на форме заявки&raquo;</strong>&nbsp;включено требование&nbsp;<code>RWM</code>&nbsp;к полю &laquo;Выполненные работы&raquo;, при попытке перевести заявку на этот статус срабатывает проверка.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Система проверяет, что для&nbsp;<strong>каждого маркируемого материала</strong>&nbsp;количество отсканированных кодов&nbsp;<strong>равно</strong>&nbsp;списанному количеству.</p>
</li>
<li>
<p class="ds-markdown-paragraph">Если условие не выполнено &mdash;&nbsp;<strong>смена статуса блокируется</strong>, и пользователь видит ошибку.</p>
</li>
</ul>
<p class="ds-markdown-paragraph"><strong>4. Отображение в веб-версии</strong></p>
<ul>
<li>
<p class="ds-markdown-paragraph">В карточке заявки для маркируемых материалов отображается количество отсканированных кодов и иконка для просмотра списка.</p>
</li>
</ul>
<h4>🚀&nbsp;<strong>Преимущества для бизнеса</strong></h4>
<ul>
<li>
<p class="ds-markdown-paragraph"><strong>Юридическая защита</strong>&nbsp;&mdash; гарантия, что все маркируемые материалы списаны корректно, с соблюдением требований законодательства.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Прозрачность</strong>&nbsp;&mdash; диспетчеры и руководители видят статус сканирования в веб-интерфейсе.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Контроль на месте</strong>&nbsp;&mdash; исполнитель не может закрыть заявку, не отсканировав все обязательные коды.</p>
</li>
<li>
<p class="ds-markdown-paragraph"><strong>Гибкость настройки</strong>&nbsp;&mdash; администратор сам решает, какие материалы считаются маркируемыми, и для каких статусов требуется обязательное сканирование.</p>
</li>
</ul>
<hr />
<p class="ds-markdown-paragraph"><strong>Обновление уже доступно.</strong>&nbsp;Администраторам необходимо:</p>
<ol start="1">
<li>
<p class="ds-markdown-paragraph">В карточках соответствующих материалов включить признак&nbsp;<strong>&laquo;Маркируемый материал&raquo;</strong>.</p>
</li>
<li>
<p class="ds-markdown-paragraph">В настройках&nbsp;<strong>&laquo;Поля на форме заявки&raquo;</strong>&nbsp;для поля &laquo;Выполненные работы&raquo; включить опцию&nbsp;<code>RWM</code>&nbsp;для нужных статусов.</p>
</li>
</ol>
<p class="ds-markdown-paragraph">После этого исполнители в мобильном приложении не смогут перевести заявку на эти статусы, не отсканировав все коды.</p>
<hr />
<p class="" data-start="3165" data-end="3344">В случае возникновения проблем - пишите нам в поддержку Telegram&nbsp;<a href="https://t.me/hubex_bot" target="_blank" rel="noopener">@hubex_bot</a>&nbsp;или на почту&nbsp;<a href="mailto:help@hubex.ru">help@hubex.ru</a></p>
<hr />
<p><a href="http://wiki.hubex.ru">Перейти в меню</a></p>
</body>
</html>
