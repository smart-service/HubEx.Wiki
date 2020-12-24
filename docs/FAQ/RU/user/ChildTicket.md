#### Дочерние заявки
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<ul>
    <li><a href="#ChildTicket1">Как создаются дочерние заявки</a>;</li>
    <li><a href="#ChildTicket2">Как из любой заявки сделать дочернюю</a>;</li>
    <li><a href="#ChildTicket3">Как отслеживать дочерние заявки</a>;</li>
    <li><a href="#ChildTicket4">Что делать, если дочерние заявки не видны</a>.</li>
    <!-- <li><a href="#payment">Отправка Счета на оплату заказчику и оплата Акта.</a></li> -->

</ul>
</html>

<p><strong>Заявки</strong> в системе могут иметь иерархическую структуру: дочерние заявки подчиняются родительским.
    Создание дочерних заявок будет полезным в случаях:
</p>
<ul>
    <li>разработки объемного проекта на объекте, и необходимости разбить работы на отдельные задачи;</li>
    <li>необходимости назначить нескольких специалистов на работу с объектом: в таком случае для каждого исполнителя
        создается своя дочерняя заявка;
    </li>
    <li>объединения задач от заказчика в одно задание.</li>
</ul>
<p>Дочерние заявки не отличаются от обычных заявок. Они имеют точно такие же поля для заполнения.</p>

<h5>Создание дочерних заявок</h5>
<p><strong>Дочерние заявки</strong> создаются несколькими способами.</p>
<ol>
    <li id="ChildTicket1">На вкладке <strong>Дочерние заявки</strong> в <strong>Заявке</strong>.
        Также здесь отображаются уже ранее созданные дочерние заявки.

        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/ChildTicket.jpg"/>
        </div>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/ChildTickets.jpg"/>
        </div>
        <p>По кнопке <strong>Создать дочернюю заявку</strong> открывается краткая форма полей заявки, в которой можно задать отличного от
            родительской заявки <strong>Исполнителя</strong>, <strong>Вид работ</strong>, <strong>Тип заявки</strong>, назначить другое
            время выполнения. Обратите внимание! При
            таком способе создания дочерней заявки в краткой форме нельзя выбрать/изменить <strong>Объект</strong>. <strong>Объект</strong> будет
            наследоваться
            от родительской
            заявки. Изменить <strong>Объект</strong> можно после сохранения дочерней заявки: нажмите кнопку <strong>Создать</strong> и откройте полную
            карточку заявки по щелчку мыши. </p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/NewChildTicket.jpg"/>
        </div>
        <p>Полная форма <strong>Дочерней заявки</strong> выглядит точно также как и простая заявка. Отличительной чертой <strong>Дочерней заявки</strong>
            является заполненное поле <strong>Родительская заявка</strong>. В нем отражается номер <strong>Родительской заявки</strong>. </p>

        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/SelectChildTicket.jpg"/>
        </div>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/OpenedChildTicket.jpg"/>
        </div>
        </p> </li>

    <li id="ChildTicket2">Любую заявку можно превратить в дочернюю. Для этого в <strong>Заявке</strong> на вкладке <strong>Заявка</strong> для этого нужно заполнить
        поле <strong>Родительская
        заявка</strong> и нажать кнопку <strong>Сохранить</strong>.

        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/ChildTicket/ParentTicket.jpg"/>
        </div>
    </li>
</ol>

<h5 id="ChildTicket3">Статистика дочерних заявок</h5>
<p>В общем списке заявок у каждой карточки заявки будут отражаться родительские и дочерние заявки, которые представлены
    гиперссылками: щелчок мыши по ссылке <strong>Родительской заявки</strong> откроет форму родительской заявки; щелчок мыши по ссылке
    <strong>Дочерние заявки</strong> откроет родительскую заявку с вкладкой <strong>Дочерние заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChildTicket/ChildParentTickets.jpg"/>
</div>

<p>В табличном отображении списка заявок также есть ссылки на родительские и дочерние заявки. Настроить отображение
    полей для списка в табличном формате можно по кнопке <strong>Настройка</strong> (синяя шестеренка).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChildTicket/TableTickets.jpg"/>
</div>
<p>Внутри каждой заявки доступна сводная статистика по дочерним заявкам. Статистика позволит оперативно получить
    информацию о ходе работ над дочерними заявками.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChildTicket/Statistics.jpg"/>
</div>

<h5 id="ChildTicket4">Дочерние заявки не отражаются внутри родительской</h5>
<p>В карточке <strong>Заявки</strong> на вкладке <strong>Дочерние заявки</strong> может возникнуть ситуация: не отображаются дочерние заявки, хотя их
    количество видно и в списке заявок и на самой вкладке. Чтобы это исправить нажмите кнопку <strong>Настройки</strong> (синяя
    шестеренка).</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChildTicket/Settings.jpg"/>
</div>
<p>В настройках полей выберите необходимые, либо установите флажок в пункте Выбрать все - для выбора всех полей. Таким
    образом дочерние заявки будут отображаться в стандартном режиме.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/ChildTicket/Settings2.jpg"/>
</div>

____
- [Перейти в меню](http://wiki.hubex.ru)
