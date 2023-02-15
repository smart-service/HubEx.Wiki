---
title: Создание заявки
description: Создать новую Заявку можно в меню Заявки - Все заявки. В списке вы увидите все Заявки по вашей компании (или компаниям). Нажмите кнопку Создать заявку. Заявка на момент создания имеет только одну вкладку слева - Заявка.
keywords: создать заявку, подать заявку, заявка в мобильном приложении, hubex, хабекс, хубекс, хабикс
---

#### Создание заявки
В этом разделе вы узнаете:
<html>
<meta charset="utf-8">

<ul>
    <li><a href="#webticket">Как создать Заявку в web-приложении;</a></li>
    <li><a href="#optionalfields">Какие поля Заявки необязательны для заполнения (упрощенная форма Заявки);</a></li>
    <li><a href="#deadline">Как узнать, что Заявка просрочена;</a></li>
    <li><a href="#webticket2">Как создать Объект и Заказчика из формы создания Заявки;</a></li>
    <li><a href="#mobticket">Как создать Заявку в мобильном приложении;</a></li>
    <li><a href="#createticket">Альтернативные способы подачи Заявки</a>.</li>
</ul>
</html>

<body>

<p>Учет по <strong>Заявкам</strong> позволяет:</p>
<ul>
    <li>зафиксировать обращения клиентов;</li>
    <li>сформировать платежные документы и выставить счета на оплату;</li>
    <li>спланировать загрузку сотрудников.</li>
</ul>
<p><strong>Заявки</strong> создаются в разрезе <strong>Объектов</strong>, что позволяет хранить историю всех
    обращений (<strong>Заявок</strong>) по каждому
    <strong>Объекту</strong>.</p>

<p>С помощью настройки различных <strong>Типов заявок</strong> можно реализовать как простые процессы прохождения
    <strong>Заявки</strong> (Новая→Назначена
    диспетчером→ Принята исполнителем→ Выполнена), так и более сложные. <strong>Тип заявки</strong> определяет по
    каким стадиям должна проходить <strong>Заявка</strong>, срок ее закрытия. Например, когда <strong>Заявка</strong>
    создана она
    находится в стадии <strong>Новая</strong>,
    после назначения сервисного
    специалиста <strong>Заявка</strong> переходит в стадию <strong>Назначена</strong>. Когда сервисный специалист
    выезжает на объект, он переводит <strong>Заявку</strong>
    в стадию <strong>Выехал на объект</strong> и т.д. Одной из конечных стадий <strong>Заявки</strong> может быть стадия
    <strong>Закрыта</strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChangingStatus.html">Переход заявки по стадиям и удаление
        заявки</a>.</p>


<h5 id="webticket">Создание Заявки в web-приложении</h5>


<p>Все варианты создания <strong>Заявок</strong> представлены в обучающем видеоролике <strong>Способы подачи заявки в HubEx</strong>. Подробная инструкция о создании и альтернативных способах подачи <strong>Заявок</strong> представлена ниже.</p>
<iframe src="https://www.youtube.com/embed/RtMhubKi7Jc" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>


<p>Создать <strong>Заявку</strong> можно в меню <strong>Заявки - Все заявки</strong>. В списке будут находиться
    все
    <strong>Заявки</strong> по вашей компании (или компаниям). Нажмите кнопку <strong>Создать заявку</strong>. Обратите
    внимание: <strong>Заявка</strong> на момент создания имеет только одну
    вкладку слева - <strong>Заявка</strong>. После
    сохранения
    <strong>Заявки</strong> на форме появятся еще несколько вкладок:<!--<strong> Необходимые
        материалы</strong>,--> <strong>Сообщения</strong>, <strong>Чек-листы</strong>, <strong>Дочерние заявки</strong>,
    <strong>Выполнение</strong>, <strong>Акт выполненных работ</strong>, <strong>История
        изменений</strong>. </p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/TicketEmpty.jpg"/>
</div>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 100%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Ticket.jpg"/>
</div>
</p>
<p>Обратите внимание! Состав полей на форме <strong>Заявки</strong> можно настраивать в разрезе <strong>Ролей</strong> и
    <strong>Стадий заявки</strong>. Например, вы
    можете
    запретить мобильному сотруднику изменять исполнителя в <strong>Заявке</strong> на стадии <strong>Назначена</strong>.
    Подробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме заявки: настройка
        доступа к полям заявки</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>.
</p>

<p>Для удобства заполнение вкладки <strong>Заявки</strong> разделено на смысловые блоки - <strong>Заявка</strong>,
    <strong>Обслуживание
        заказчика</strong>, <strong>Трудозатраты</strong>. </p>

<p>Рассмотрим заполнение полей на вкладке <strong>Заявка</strong>:</p>
<ul>
    <li>Номер заявки присваивается автоматически, но может быть изменен вручную. Максимальная длина номера - 16
        символов. Возможность редактировать номер настраивается в меню <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>
        <strong>Настройки заявки - Поля на форме заявки</strong>. Для поля <strong>Номер заявки</strong> в разрезе
        необходимых <strong>Ролей</strong> и <strong>Стадий заявки</strong> нужно разрешить редактирование. Подробнее
        читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме
            заявки: настройка доступа к полям заявки</a>.

        <p>При автоматической генерации номера <strong>Заявки</strong> используется шаблон номера, настроить который
            можно в консоли администрирования в меню <strong>Настройки заявки - Тип заявки</strong> (параметр Маска
            номера заявки). Подробнее читайте в статье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.</p>
    </li>

    <li><strong>Тип заявки</strong> - это классификация <strong>Заявок</strong> определяющая последовательность действий
        и этапов
        жизненного цикла заявки. <strong>Тип заявки</strong> определяет стадии, по которым она будет проходить и срок ее
        закрытия. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.
        <p>Также для разных <strong>Типов заявки</strong> можно настроить автоматический расчет крайнего срока закрытия
            заявки. Сделать это можно в меню <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>
            <strong>Настройки заявки - SLA - Правила расчета крайнего срока закрытия заявки</strong>. Подробнее читайте
            в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - правила расчета крайнего срока
                закрытия заявки</a>. </p>
    </li>
    <li><strong>Критичность</strong> позволяет разделять <strong>Заявки</strong> по важности и срочности. Например, вы
        можете создать
        Срочную, Плановую, Стандартную критичности и задать им различные цвета. <strong>Заявки</strong> будут отмечены
        цветными маркерами
        в web и мобильном приложении.
        <p>Также с помощью <strong>Критичности</strong> можно настроить автоматический расчет крайнего срока закрытия
            заявки. Сделать это можно в меню <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>
            <strong>Настройки заявки - SLA - Правила расчета крайнего срока закрытия заявки</strong>. Подробнее читайте
            в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - правила расчета крайнего срока
                закрытия заявки</a>. </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 80%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/Criticality.jpg"/>
        </div>
        </p>
    </li>
    <li>В поле <strong>Описание заявки</strong> в свободной форме можно указать подробности по <strong>Заявке</strong>. Обратите внимание! В описание заявки можно вставлять текст, скопированный из сторонних систем и документов. Для текста доступно редактирование: выделение жирным шрифтом, курсивом, подчеркнутым шрифтом, изменение размера шрифта, оформление нумерованных и ненумерованных списков, прикрепление гиперссылок и изменение цвета шрифта.
    </li>
     <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/Description.jpg"/>
        </div>
        </p>
    <li>В поле <strong>Исполнитель</strong> можно сразу указать одного или нескольких специалистов, либо оставить это поле
        незаполненным.
        Назначить исполнителя можно будет позже. Варианты назначения исполнителей на заявки:
        <ol>
            <li>ручной выбор исполнителя (или нескольких исполнителей) из справочника <strong>Сотрудники</strong>;</li>
            <li>с помощью календаря в меню <strong>Заявки - Расписание заявок</strong> можно перетянуть
                <strong>Заявку</strong> на свободное время исполнителя. Таким способом можно назначить только одного сотрудника. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Calendar.html">Календарь заявок</a>;
            </li>
            <li>с помощью настройки автораспределения заявок: в таком случае настраивается специальное <strong>Правило
                автоназначения
                исполнителя</strong> и привязывается к стадии заявки. Например, можно настроить автоматический переход
                на стадию
                <strong>Назначена</strong> и в ее настройках указать правило автоназначения. Таким способом можно назначить только одного сотрудника. Подробнее читайте в
                статьях: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила автоназначения
                    исполнителя</a>,
                <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/RulesOfChoiceGEO.html">Автоназначение на ближайшего
                    исполнителя</a>.
            </li>
        </ol>
        <p>Рассмотрим подробнее выбор исполнителей из формы <strong>Заявки</strong>.</p>
<p>Чтобы выбрать сотрудника, нажмите кнопку <strong>+Добавить исполнителя</strong>. Перед вами откроется форма выбора
    исполнителей. Список исполнителей может быть отсортирован по одному из двух вариантов:</p>
<ol>
    <li><strong>По релевантности</strong>: этот вариант сортирует список сотрудников учитывая следующие параметры:
        <ul>
            <li><strong>Вид работ</strong>, указанный в
                <strong>Заявке</strong>;
            </li>
            <li>параметр <strong>Ответственный за объект</strong>, который устанавливается в карточке выбранного
                <strong><a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Объекта</a></strong>;
            </li>
            <li>парметры <strong>Участок</strong> и <strong>Навыки</strong>, указанные также в карточке
                <strong>Объекта</strong>.
            </li>
        </ul>

        <p>Чем больше указанных параметров в <strong>Заявке</strong> и <strong>Объекте</strong> совпадет с теми, что
            указаны в карточке <strong>Сотрудника</strong>, тем
            выше он будет в списке по релевантности.</p>
    </li>
    <li><strong>ФИО исполнителя</strong>: этот вариант сортирует список по алфавиту от А до Я.</li>

    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 80%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/Sorting.jpg"/>
    </div>
    </p>
</ol>

<p>Установите флажок слева от имени одного или нескольких специалистов для назначения на <strong>Заявку</strong>. Чтобы проверить
    занятость выбранного сотрудника, нажмите кнопку <strong>Календарь</strong> справа от имени. Календарь занятости будет отображаться в
    поле справа. Вы можете выбирать любую дату в календаре для просмотра загрузки специалиста. Обратите внимание! Чтобы
    смотреть загрузку разных специалистов, нажимайте на кнопку <strong>Календарь </strong>рядом с их именем. Когда календарь одного из
    сотрудников активен, то кнопка <strong>Календарь</strong> становится синего цвета.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Engineers.jpg"/>
</div>
        
    </li>
    <li id="deadlinetick"><strong>Крайний срок закрытия</strong> - это максимально возможная дата и время закрытия
        <strong>Заявки</strong>.
        <p>Важный критерий качества предоставляемых услуг - соблюдение
            сроков выполнения <strong>Заявок</strong>. Временные нормы могут быть прописны в договорах (контрактах) с вашими
            закзчиками и отличаться
            по критичности, видам выполняемых работ и т.д. Сроки выполнения могут быть зафиксированы в договорах с
            заказчиками. </p>
        Крайний срок закрытия может быть рассчитан и установлен автоматически по одному из сценариев:
        <ol>
            <li>С помощью <strong>Правила расчета крайнего срока закрытия заявки</strong>. Правило, по которому
                рассчитывается срок, будет указано в соответствующем поле внизу страницы. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - правила расчета крайнего срока
                    закрытия заявки</a>. Если в системе не создано или не включено ни одного правила, то автоматически
                срок будет считаться по второму варианту.
            </li>
            <li>С помощью срока закрытия, указанного у выбранного <strong>Вида работ</strong> или <strong>Типа
                заявки</strong>. При подстановке срока закрытия, система выберет наименьшее значение из установленного в
                <strong>Типе заявке</strong> и <strong>Виде работ</strong>. Подробнее читайте в
                статьях:
                <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>, <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>.
            </li>
        </ol>
        <p id="deadline">Просроченной считается <strong>Заявка</strong>, выполненная или закрытая позже <strong>Крайнего
            срока закрытия</strong>.
            Выполнение заявки происходит на стадиях <strong>Выполнена</strong> и <strong>Закрыта</strong>. Подробнее
            читайте в сатье: <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/StageType.html">Настройка стадий</a>. Срок просрочки
            отображается в общем списке, по каждой <strong>Заявке</strong>.</p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 95%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/Deadline.jpg"/>
        </div>

        <p>В меню <strong>Аналитика</strong> вы найдете полезные отчеты для получения важной информации - справляется ли
            ваша компания с
            потоком поступающих <strong>Заявок</strong>, кто из специалистов загружен сильнее прочих и не успевает
            закрывать <strong>Заявки</strong>?
            Подробнее читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/GeneralAnalitics.html">Общая
                аналитика</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/EngineersAnalitics.html">Отчет по
                сотрудникам</a>. </p>


    </li>
    <li><strong>Наша компания</strong> устанавливается автоматически из списка <strong>Компаний</strong> с видом
        <strong>Наша компания</strong>. Если у вас несколько собственных организаций, можете вручную выбрать одну из
        них. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание обслуживаемых компаний</a>.
    </li>
    <li><strong>Родительская заявка</strong>: если вы создаете дочернюю заявку, укажите для нее ссылку на родительскую
        заявку. Подробнее читайте в статье:
        <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChildTicket.html">Дочерние заявки</a>.
    </li>
    <li>В <strong>Файлах</strong> вы можете прикрепить фотографию или документ к <strong>Заявке</strong>. Это может быть
        фотография
        поломки,
        инструкция и
        т.д. К каждому файлу можно ограничить права доступа. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/ViewRestriction.html">Ограничение доступа к файлам в заявке
            и объекте</a>.
    </li>
    <li><strong>Заказчик</strong> выбирается из списка созданных вами компаний. Если вы не нашли в списке необходимого
        <strong>Заказчика</strong>, его
        можно создать прямиком из <strong>Заявки</strong>. Подробно об этом читайте <a href="#webticket2">ниже</a>.
    </li>
    <li><strong>Объект/оборудование</strong> выбирается из списка <strong>Объектов</strong>. Обратите
        внимание, дочерние объекты заключены
        в папки родительских объектов. Чтобы выбрать дочерний объект, нажмите на родительский объект, папка раскроется.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание
            обслуживаемого оборудования</a>.
    </li>

    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/Object1.jpg"/>
    </div>
    </p>
     <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 50%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/Object2.jpg"/>
    </div>
    </p>

    <li>Выбор <strong>Вида работ</strong> зависит от выбранного <strong>Объекта/оборудования</strong>. Какие <strong>Виды
        работ</strong> были указаны у <strong>Объекта</strong>, такие и
        будут доступны в <strong>Заявке</strong>.
        <p>Также для разных <strong>Видов работ</strong> можно настроить автоматический расчет крайнего срока закрытия
            заявки. Сделать это можно в меню <a
                    href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>
            <strong>Настройки заявки - SLA - Правила расчета крайнего срока закрытия заявки</strong>. Подробнее читайте
            в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - правила расчета крайнего срока
                закрытия заявки</a>. </p>
    </li>
    <li><strong>Договор</strong> создается в карточке <strong>Компании</strong> (либо может быть создан из формы <strong>Заявки</strong> по кнопке <strong>+</strong>) и может распространяться на различные <strong>Объекты</strong> этой <strong>Компании</strong>. Договор необходим для классификации <strong>Заявок</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html#contract">Создание обслуживаемых компаний: Договор с клиентом</a>.</li>
    
    <li><strong>Адрес</strong> заполняется автоматически по адресу родительского объекта, но вы можете изменить его
        вручную. Обратите внимание! Если в карточке выбранного <strong>Объекта</strong> установлен флажок <strong>Мобильное оборудование</strong>, то при
        изменении адреса в <strong>Заявке</strong> адрес изменится и в карточке этого Объекта.
    </li>
    <li><strong>План объекта</strong> подставляется автоматически из карточки выбранного <strong>Объекта</strong>. В <strong>Заявке</strong> на плане вы можете отметить точное место поломки. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/FloorPlan.html">Планы помещений</a>.</li>

    
    <!--<li><strong>Компания-плательщик</strong> может отличаться от <strong>Заказчика</strong>.</li>-->
    <li>В <strong>Контактных лицах</strong> можно указать, с кем связаться по вопросам <strong>Заявки</strong>.
    </li>

<li><strong>Правило расчета крайнего срока закрытия</strong>: данное поле заполняется автоматически после сохранения <strong>Заявки</strong>. Здесь отображается правило, по которому рассчитался срок выполнения заявки и заполнилось поле <strong>Крайний срок закрытия</strong>. Подробнее читайте в статье: <a
                        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/SLA.html">SLA - правила расчета крайнего срока
                    закрытия заявки</a></li>
    <li><strong>Неисправность обнаружена</strong>: заполняется автоматически по дате создания.
    </li>
    <li><strong>Метод подачи заявки</strong> заполняется автоматически и зависит от того, откуда была
        подана
        <strong>Заявка</strong> - web- или
        мобильное приложение. Если в данном поле заполнено значение <strong> Электронный паспорт объекта</strong> ,
        значит <strong>Заявка</strong> была
        создана незарегистрированным пользователем с помощью сканирования QR-кода. Подробнее читайте в статьях: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/SelfRegister.html">Подача заявок по QR-коду без
            приложения, самостоятельная регистрация нового пользователя</a>.
    </li>
    <li>Параметр <strong>ERPID</strong> необходимо заполнять, если вы интегрируете HubEx с другими системами,
        например
        1С.
    </li>
    <li><strong>Инициатор заявки</strong> устанавливается автоматически, если <strong>Заявка</strong> создается
        зарегистрированным пользователем через
        web- или мобильное приложение.
    </li>
    <li>На вкладку <strong>Заявка</strong> могут быть добавлены дополнительные поля для внесения и хранения
        учетной
        информации. Это может быть стоимость оборудования, габариты, заключение по заявке и т.д. Дополнительные поля располагаются
        внизу
        страницы. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/AdditionalFields.html">Создание
            дополнительных полей в заявке</a>.

        <<p>Также дополнительные поля можно вынести в табличное отображение <strong>Заявок</strong>, чтобы сразу видеть необходимую информацию в таблице, не открывая каждую <strong>Заявку</strong>. Подробнее читайте в статье: <a
           href="https://wiki.hubex.ru/docs/FAQ/RU/user/Filters.html#ticketlist">Список заявок, поиск заявок с помощью фильтров</a>. </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 90%;"
                 src="/attachments/images/FAQ/USER/CreatingTicket/AddField.jpg"/>
        </div>
        </p>

        <p></p>
    </li>
   <!--<li>В блоке <strong>Трудозатраты</strong> заполняются <strong>Оценочные</strong> и <strong>Фактические
        трудозатраты</strong> в часах, а также <strong>Оценочная</strong> и <strong>фактическая
        стоимость</strong>
        работ. Эти поля не являются обязательными для заполнения.
    </li>-->
</ul>

<!--<p>Рассмотрим вкладку <strong>Необходимые материалы</strong>. Она носит рекомендательный характер. Здесь можно отразить
    перечень
    материалов, которые могут понадобиться специалисту для выполнения <strong>Заявки</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/NoMaterials.jpg"/>
</div>
<p>Нажмите на кнопку <strong>Добавить материалы</strong>. Выбор можно осуществлять с отбором по определенному складу или
    всем
    складам. Укажите количество и нажмите кнопку <strong>Выбрать</strong>.</p>
<p>Обратите внимание! <strong>Материалы</strong> предварительно должны быть внесены в систему. Подробнее читайте в
    статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/Materials.html">Загрузка материалов и создание складов</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/TicketWithMaterials.html">Подача заявки с указанием
        рекомендованных материалов</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 80%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Materials.jpg"/>
</div>-->

<p>На вкладке <strong>Сообщения</strong> можно вести переписку всем заинтересованным лицам по данной
    <strong>Заявке</strong>. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Messages.html">Сообщения
        по заявке</a>.</p>
<p>На вкладке <strong>Чек-листы</strong> вы увидите <strong>Чек-лист</strong>, если он был привязан к
    <strong>Объекту</strong>. Вы можете добавить <strong>Чек-лист</strong> вручную по кнопке <strong>Добавить
        чек-лист</strong> или удалить не нужный в контекстном меню (три точки) - <strong>Удалить</strong>. Подробнее
    читайте в
    статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/Checklists.html">Чек-листы</a>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/CheckList.jpg"/>
</div>


<p><strong>Заявки</strong> в системе могут иметь иерархическую структуру: дочерние заявки подчиняются родительским. На
    вкладке <strong>Дочерние
        заявки</strong> можно создавать дочерние заявки (по кнопке <strong> +Создать дочернюю заявку</strong> ) и
    просматривать уже созданные. С помощью дочерних заявок можно
    разделять выполнение объемных задач и проектов. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ChildTicket.html">Дочерние
        заявки</a>. </p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/ChildTicket.jpg"/>
</div>

<p><div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/ChildTicket2.jpg"/>
</div></p>

<p>На вкладке <strong>Выполнение</strong> будут отражаться работы по <strong>Заявке</strong>, которые внесет
    исполнитель. Обратите внимание на поля <strong>Стоимость</strong> и <strong>Ставка/час</strong>. Они необходимы для
    расчета итоговой стоимости работ по <strong>Заявке</strong> и отражаются в <strong>Акте выполненных работ</strong>.
    Подробнее читайте
    в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/users/AttachingFiles.html">Прикрепление выполненных работ в web- и
        мобильном приложении</a>. Все выполненные работы по <strong>Заявке</strong> располагаются в списке справа.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Works.jpg"/>
</div>

<p>На вкладке <strong>Акт выполненных работ</strong> автоматически формируется Акт для заказчика. Акт заполняется по
    данным
    выполненных работ. В мобильном приложении можно получить подпись заказчика к Акту. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.</p>
<p>Вкладка <strong>История изменений</strong> хранит все действия над <strong>Заявкой</strong> с момента ее первого
    сохранения. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/HistoryOfChanges.html">История
        изменений заявки</a>.</p>

<p>Для того чтобы выгрузить всю информацию по <strong>Заявкам</strong> из системы HubEx воспользуйтесь функцией <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/user/Export.html#tickets">Экспорта.</a></p>


<h5 id="optionalfields">Необязательные поля для формы Заявки</h5>

<p>Подавать <strong>Заявку</strong> в web-версии HubEx можно без привязки к <strong>Заказчику</strong> или <strong>Объекту</strong>, без
    указания адреса или <strong>Вида работ</strong>. Такой формат очень
    актуален для работы с внутренними задачами. Например, можно создавать внутренние заявки для бухгалтеров,
    it-специалистов, курьеров и т.д.</p>
<p>На форме <strong>Заявки</strong> обязательным для заполнения полем явлется только <strong>Тип заявки</strong>. Отключить заполнение этого поля нельзя. Видимость и заполнение всех
    остальных полей можно отключить в настройках <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли администрирования</a>
    <strong>Настройки заявки - Поля на форме заявки</strong>. Для отключения полей необходимо выбрать Роли и Стадии и
    убрать настройку чтения и заполнения для необязательных полей. Подробнее
    читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ElementsOfInterface.html">Поля на форме
        заявки: настройка доступа к полям заявки</a>.</p>
<p>Например, ниже представлена настройка для отключения выбора <strong>Объекта</strong>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Role.png"/>
</div>

<p>Итоговая упрощенная форма <strong>Заявки</strong> с отключением всех необязательных полей может выглядеть следующим образом:</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 95%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/Ticket.png"/>
</div>

<p>В мобильном приложении исполнителя и заказчика поля <strong>Заказчик</strong>, <strong>Объект</strong>, <strong>Вид работ</strong>, <strong>Адрес</strong> будут обязательными при создании <strong>Заявки</strong>.</p>
<p>Если <strong>Заявку</strong> подавали с web-приложения без заполнения необязательных полей, то она отобразится в мобильном приложении с пустыми полями. Такую <strong>Заявку</strong> можно будет просмтривать и редактировать в обычном режиме.</p>

<h5 id="webticket2">Создание объектов и заказчиков из формы создания заявки</h5>
<p>Вы можете создать <strong>Заказчика</strong> и <strong>Объект</strong> напрямую из формы создания
    <strong>Заявки</strong> без предварительного заполнения в
    соответствующих справочниках. А также можете создать <strong>Вид работ</strong>, если у вас есть права
    администратора для входа в консоль. О создании Вида работ можно прочитать <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">здесь</a>.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 70%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/CreateCO.jpg"/>
</div>


<p>Еще один способ создать новый <strong>Объект</strong>: создать его через форму выбора объекта из списка существующих.
    Пример: вы вводите значение в поисковую строку, вам выдаются результаты поиска. Вы можете выбрать найденных
    <strong>Объект</strong> или создать новый <strong>Объект</strong>.</p>

<div>
    <img style="margin: 0 auto; display: block; max-width: 50%;"
         src="/attachments/images/FAQ/USER/CreatingTicket/SearchObj.jpg"/>
</div>


<h5 id="mobticket">Создание заявки в мобильном приложении</h5>
<p>Чтобы создать <strong>Заявку</strong> в мобильном приложении необходимо:</p>
<ol>
    <li>Нажать на кнопку <strong>Подачи заявки</strong> в правом нижнем углу.</li>

    <li>Если у <strong>Объекта</strong> есть QR-код, то отсканировать этот QR-код.
        Если у <strong>Объекта</strong> нет QR-кода, то после нажатия кнопки подачи <strong>Заявки</strong> в правом
        нижнем углу, нажмите кнопку <strong>Выбрать из
            списка</strong> на
        экране сканирования QR-кода. Далее самостоятельно выберите необходимый <strong>Объект</strong>. Подробнее о
        создании <strong>Заявок</strong> с помощью QR-кодов читайте в статьях: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>, <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки, подача
            заявки по QR-коду</a>.

    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/CreateByMobile.jpg"/>
    </div>


    <li>Укажите <strong>Тип заявки</strong>, <strong>Вид работ</strong>, <strong>Исполнителя</strong>, заполните
        описание проблемы. Подробнее о назначении полей читайте в разделе <a href="#webticket">Создание Заявки в
            web-приложении</a> этой статьи. Во вкладке <strong>Дополнительные поля</strong> вы можете выбрать <strong>Критичность</strong>
        и указать <strong>Начало выполнения</strong>. <strong>Срок исполнения</strong> не доступен для изменения и будет
        рассчитан автоматически с помощью правил расчета крайнего срока закрытия иди по параметрам <strong>Вида
            работ</strong> или <strong>Типа заявки</strong>. Подробнее об этом читайте в разделе <a
                href="#deadlinetick">Крайний срок закрытия</a> этой статьи.
    </li>
    <li> По окончанию
        заполнения нажмите
        кнопку <strong>Создать заявку</strong>.
    </li>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/CreatingTicket/CreateByMobile2.jpg"/>
    </div>
</ol>

<p>Дополнительно ознакомьтесь с обучающим видеороликом <strong>Мобильное приложение инженера. Как работать сервисному специалисту на телефоне?</strong>. В нем представлен широкий обзор функциональных возможностей мобильного приложения для выездных сотрудников: авторизация в приложении, получение уведомлений, работа с <Strong>Заявками</Strong>, с чек-листами, выполненными работами, общение в чатах, работа с календарем и функционалом <strong>На смене</strong>. </p>
<iframe src="https://www.youtube.com/embed/JmMZzkI6o-c" width="100%" height="450px" frameborder="0"
        allowfullscreen="allowfullscreen"></iframe>


<h5 id="createticket">Альтернативные способы подачи Заявок</h5>
<p>В данной статье рассмотрен основной вариант подачи <strong>Заявок</strong> - в ручном режиме. Существует еще
    несколько вариантов, о
    которых подробнее будет рассказано в следующих статьях:</p>
<ul>
    <li>Полуавтоматический режим подачи Заявки с помощью QR-кода. Полдробнее читайте в статьях: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/QRcodeMain.html">QR-код в HubEx: основные понятия</a>, <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTaskTemplates.html">Создание шаблона заявки, подача
        заявки по QR-коду</a>.
    </li>
    <li>С помощью импорта: вы можете с помощью специального шаблона в формате Excel загрузить до 1000 Заявок за раз.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Import.html#tickets">Импорт</a>.
    </li>
</ul>


</body>

___
### Следующие шаги:
- [Дочерние заявки](./ChildTicket.md)
- [Создание плановой заявки](./PlannedTickets.md)
- [Создание дополнительных полей в заявке](./AdditionalFields.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
