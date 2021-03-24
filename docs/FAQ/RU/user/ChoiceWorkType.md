---
title:
description:
keywords:  hubex, хабекс, хубекс, хабикс
---
#### Выбор вида работ в заявке

<html>
<meta charset="utf-8">

</html>

<body>

<p>Выбор <Strong>Вида работ</Strong> в <Strong>Заявке</Strong> зависит от нескольких факторов: </p>
<ul>
    <li>установлен ли Вид работ в карточке Объекта, который выбран в Заявке;</li>
    <li>есть ли у пользователя доступ к выбору Видов работ в Заявке.</li>
</ul>

<p><Strong>Виды работ</Strong> создаются в <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
    администратора</a> в меню <Strong>Настройки заявки - Виды работ</Strong> по кнопке <Strong>Создать вид
    работ</Strong>. Подробнее читайте в статье: Виды работ.</p>


<p>Чтобы в <Strong>Заявке</Strong> выбрать один из <Strong>Видов работ</Strong> по <Strong>Объекту</Strong>, необходимо
    сначала указать <Strong>Виды работ</Strong> в карточке этого
    <Strong>Объекта</Strong>. Почему это именно так? </p>
<p>Вы можете вести деятельность по различным направлениям и получать анатилическую отчетность в разрезе <Strong>Видов работ</Strong>, а
    также настраивать правила выбора исполнитлея на заявку. С помощью такого правила система автоматически будет
    подбирать подходящего исполнителя, в карточке которого <Strong>Вид работ</Strong> будет совпадать с тем, который указан в <Strong>Заявке</Strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила выбора исполнителя</a>.</p>
<p>Итак, в справочнике <Strong>Виды работ</Strong> (в консоли администрирования <Strong>Настройки заявки - Виды работ</Strong>) может быть создано
    множество видов работ, в зависимости от ваших нужд.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/WorkType.jpg"/>
</div>

<p>В карточке <Strong>Объекта</Strong> на вкладке <Strong>Обслуживание</Strong> вы можете указать подходящие к этому оборудованию (или объекту) <Strong>Виды
    работ</Strong>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/Object.jpg"/>
</div>

<p>Только указанные в карточке <Strong>Объекта</Strong> <Strong>Виды работ</Strong> вы сможете выбрать затем в <Strong>Заявке</Strong> по этому <Strong>Объекту</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/ChoiceWT.jpg"/>
</div>
<p>Если вы нажмете кнопку <Strong>Создать</Strong> в выпадающем списке при выборе <Strong>Видов работ</Strong> в соседнем окне откроется справочник <Strong>Виды
    работ</Strong> в консоли администратора. После создания нового <Strong>Вида работ</Strong> вам необходимо будет указать его в карточке
    <Strong>Объекта</Strong>, который вы выбрали в <Strong>Заявке</Strong>.</p>

<p>Поле <Strong>Вид работ</Strong> может отсутствовать на форме <Strong>Заявки</Strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/NoWT.jpg"/>
</div>
<p>На форме <Strong>Заявки</Strong> каждое поле может быть заблокировано для ввода информации, и даже может быть скрыто от определенных
    пользователей. Настройка доступа к полям находится в <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
        администратора</a> в меню <Strong>астройки заявки - Поля на форме заявки</Strong>. Доступ к полям настривается в разрезе <Strong>Ролей</Strong> и
    <Strong>Стадий заявки</Strong>.</p>
<p>Например, диспетчер при создании новой <Strong>Заявки</Strong> не видит поля <Strong>Вид работ</Strong>. Значит мы выбираем <Strong>Роль = Диспетчер</Strong>. Стадии
    можно выбрать либо все сразу, чтобы проверить настройку и для них в том числе. В текщем примере мы рассматриваем стадию <Strong>Новая</Strong>. Как мы видим на скриншоте, для поля <Strong>Вид работ</Strong> на стадии <Strong>Новая</Strong> никакой настрйоки не установлено -
    значит поле не отображается на форме. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/Field.jpg"/>
</div>
<p>Для того, чтобы поле стало доступным для редактирования необходимо установить настройку <Strong>RW (чтение и запись)</Strong> - она
    позволит пользователю увидеть и выбрать <Strong>Вид работ</Strong> на форме <Strong>Заявки</Strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/ChoiceWorkType/Field2.jpg"/>
</div>

<p>Пример настройки может быть применен для любого из полей на любой <Strong>Стадии заявки</Strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка доступа к полям заявки</a>.</p>
</body>


____
- [Перейти в меню](http://wiki.hubex.ru)
