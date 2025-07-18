---
title: Импорт заявок, объектов, компаний, пользователей
description: Импорт в HubEx позволяет с помощью готовых табличных шаблонов загрузить в систему Объекты, Пользователей (Сотрудников и Заказчиков), Компании и Заявки. Импорт заявок проходит в фоновом режиме - заявки появляются в системе постепенно. Разово вы можете загрузить до 1000 заявок.
keywords: импорт заявок, импорт объектов, импорт сотрудников, импорт заказчиков, импорт пользователей, импорт компаний, hubex, хабекс, хубекс, хабикс
---

#### Импорт
<html>
<head>
    <style>
        .video-player-container {
            margin: 20px 0;
        }
        .video-source-selector {
            margin-bottom: 10px;
        }
        .source-btn {
            padding: 8px 16px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 5px;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        .source-btn:hover {
            background: #e0e0e0;
        }
        .source-btn.active {
            background: #45688e;
            color: white;
            border-color: #45688e;
        }
        .video-frame {
            width: 560px;
            height: 315px;
            max-width: 100%;
        }
        .video-frame iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
<meta charset="utf-8">
<p>В данном разделе вы научитесь:</p>
<ul>
    <li><a href="#objects">Импортировать объекты</a>;</li>
    <li><a href="#workers">Импортировать пользователей</a>;</li>
    <li><a href="#companies">Импортировать компании</a>;</li>
    <li><a href="#tickets">Импортировать заявки</a>.</li>
</ul>

<p>Импорт в HubEx позволяет с помощью готовых табличных шаблонов загрузить в систему <strong>Объекты</strong>, <strong>Пользователей</strong> (<strong>Сотрудников</strong>
    и <strong>Заказчиков</strong>), <strong>Компании</strong> и
    <strong>Заявки</strong>. Кнопка импорта находится в каждом их перечисленных справочников сверху в правой части.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Import/Button.jpg"/>
</div>
<p>Загрузить данные
    можно только в формате специального шаблона Excel. Скачать шаблон можно после нажатия на кнопку импорта в
    форме выбора. Вы можете дополнять шаблон для импорта и загружать повторно. При этом информация загруженная ранее
    дублироваться не будет.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/Import/Template.jpg"/>
</div>
<p>Важные ограничения при работе с импортом:</p>
<ul>

    <li>При импорте данных существует определенное ограничение на количество загружаемых единоразово строк: для <strong>Заявок</strong> до 2000 строк, для <strong>Объектов</strong> до 2000, для <strong>Компаний</strong> до 100 строк.
    </li>
    <li>Не рекомендуется использовать сторонние сервисы для работы с шаблонами Excel из-за возможных ограничений
        функционала.
    </li>
    <li>Функции <strong>Экспорт</strong> и <strong>Импорт</strong> полностью совместимы с Excel ExcelOnline, частично с Google Spreadsheet, и НЕ
        совместимы с Mac Spreadsheet.
    </li>
</ul>

<p>Обратите внимание! Для заполнения шаблона Excel можно использовать копирование данных из сторонних файлов. При копировании информации из сторонних табличных файлов Excel (формата .xls, .xlsx) вставлять в шаблон импорта нужно только значения ячеек. Рассмотрим на примере шаблона для объектов и оборудования процесс копирования и вставки:</p>

<ul>
<li>выделите необходимые ячейки в стороннем файле Excel и скопируйте их с помощью быстрых клавиш Ctrl+C или по нажатию на правую кнопку мыши - <strong>Копировать</strong>;</li>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Import/ImportExcel.jpg"/>
</div></p>
<li>откройте скачанный из HubEx шаблон для импорта, щелкните правой кнопкой мыши на первую пустую ячейку шаблона и выберите <strong>Параметр вставки: Зачения</strong>.</li>
<p>Если воспользоваться стандартной вставкой (через Ctrl+V), то скопированы будут не только значения, но и формат этих данных. В случае стандартной вставки в шаблоне для импорта будут стерты данные справочников для заполнения шаблона (<strong>Типы оборудования</strong>, <strong>Компания</strong>, <strong>Вид работ</strong> и т.д.); </p>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Import/ImportExcel2.jpg"/>
</div></p>


<li>после вставки значений в ячейки шаблона будут вставлены только содержимое ячеек с сохранением данных из справочников в шаблоне.</li>
<p><div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Import/ImportExcel3.jpg"/>
</div></p>
</ul>


<h5 id="objects">Импорт объектов</h5>

<p>Ознакомьтесь с видеороликом <strong>Как использовать импорт объектов для быстрого старта работы в Hubex?</strong> или прочтите статью ниже.</p>

<div class="video-player-container" data-player-id="player13">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/tzXlekvaftY" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239089&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<p>Импорт объектов находится в меню <strong>Объекты|Оборудование - Объекты|Оборудование</strong>. Нажмите кнопку <strong>Импорт</strong>, скачайте шаблон
    и заполните данные. После заполнения шаблона в форме выбора нажмите <strong>Загрузить готовый шаблон</strong> и выберите заполненный
    файл.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/Import/TemplateObj.jpg"/>
</div>

<p>Обратите внимание! За один раз можно загрузить до 2000 объектов обслуживания.</p>
<p>Поля в шаблоне соответствуют полям в карточке <strong>Объекта</strong> (за исключением географических координат для адреса). Подробнее
    о назначении полей читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание
        обслуживаемого оборудования</a>.</p>
<p>При заполнении шаблона обратите внимание на поля, отмеченные красной звездочкой - они являются обязательными для
    заполнения:</p>
<ul>
    <li>в <strong>Названии</strong> введите наименование объекта или оборудования;</li>
    <li>в поле <strong>Компания</strong> вы можете выбрать из выпадающего списка уже созданную ранее <strong>Компанию</strong>, либо вписать новую. Если
        вы вводите <strong>Компанию</strong> при импорте шаблона, то эта она будет автоматически
        создана и добавлена в список <strong>Компаний</strong>;
    </li>
   <p> <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/USER/Import/Template2.jpg"/>
    </div></p>
    <li>обязательно заполните <strong>Тип</strong> - это <strong>Тип объекта</strong> (оборудования). <strong>Тип</strong> можно выбрать из выпадающего списка. Список
        формируется из списка <strong>Типов объектов</strong>, которые уже были созданы в системе. <strong>Типы объектов создаются</strong> в консоли
        администратора. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/ObjectsType.html">Типы
            оборудования</a>;</li>
    <li><strong>Класс</strong> и <strong>Участок</strong> также выбираются из списков уже ранее созданных в системе <strong>Участков</strong> и <strong>Классов</strong>. Если вы не
        используете <strong>Классы оборудования</strong>, выберите вариант <strong>По умолчанию</strong>. В поле <strong>Участок можно</strong> выбрать вариант <strong>Все
        участки</strong>. Вы можете вписать <strong>Класс</strong> или <strong>Участок</strong>, которого нет и он будет создан автоматически;
    </li>
    <li><strong>Вид работ</strong> при импорте можно указать только один, либо выбрать вариант <strong>Все виды работ</strong>. Создать новый <strong>Вид работ</strong>
        можно в консоли администратора. В дальнейшем с помощью
        массовых действий над объектами вы сможете добавить или удалить
        <strong>Виды работ</strong>. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/GroupActions.html">Массовые действия для списка
            объектов</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>;
    </li>
    <li>в поле <strong>Родительский элемент</strong> из выпадающего списка выберите тот <strong>Объект</strong>, который будет являться родителем. Если вы
        оставите поле
        пустым, вы сделаете данный элемент родительским. Указание родительского элемента создает иерархию хранящихся
        <strong>Объектов</strong>. Например, вы создаете Здание по адресу Невский проспект 32 (с типом <strong>Объект</strong>) и создаете несколько
        вариантов оборудования в нем, например 5 кондиционеров (с типом <strong>Оборудование</strong>). Для родительского элемента
        обязательно указание адреса. Для дочернего - необязательно, он будет копировать адрес от родителя;
    </li>
    <li>в поле <strong>Адрес</strong> укажите адрес местонахождения <strong>Объекта</strong>. Его адрес будет отображаться в <strong>Заявках</strong>. Это
        позволит определять отдаленность исполнителей от места <strong>Заявки</strong>;
    </li>
    <li>можно назначит <strong>Ответственного</strong> за <strong>Объект</strong> сотрудника. Например, закрепить ответственного за
        ремонт определенного оборудования. Этот параметр может быть учтен при настройке автоматического распределения.
        Подробнее об этом читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/RulesOfChoice.html">Правила
            выбора исполнителя</a>;
    </li>
    <li>параметр <strong>Мобильное оборудование</strong> может принимать одно из двух значений. Укажите, меняет ли <strong>Объект</strong> свое
        местоположение. Если укажете <strong>Да</strong>, значит вы
        сможете изменять адрес <strong>Объекта</strong> при заполнении <strong>Заявки</strong>. Если укажете <strong>Нет</strong>, значит в <strong>Заявке</strong> адрес изменить будет
        невозможно;
    </li>
    <li>поля <strong>Часовой пояс</strong>, <strong>Страна</strong> вы можете заполнить исходя из вашего месторасположения.</li>
</ul>


<h5 id="workers">Импорт пользователей</h5>
<p>Импорт пользователей предполагает раздельный импорт <strong>Сотрудников</strong> и <strong>Заказчиков</strong>. Находится в меню <strong>Пользователи -
    Сотрудники</strong> и в меню <strong>Пользователи - Заказчики</strong>. Шаблоны для <strong>Заказчиков</strong> и <strong>Сотрудников</strong> одинаковые. Поэтому рассмотрим на
    примере импорта сотрудников. Нажмите кнопку <strong>Импорт</strong>, скачайте шаблон
    и заполните данные. После заполнения шаблона в форме выбора нажмите <strong>Загрузить готовый шаблон</strong> и выберите заполненный
    файл.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/Import/TemplateUser.jpg"/>
</div>
<p>Поля в шаблоне соответствуют полям в карточке <strong>Сотрудника</strong> и <strong>Заказчика</strong>. Подробнее
    о назначении полей читайте в статьях: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание
        пользователя вашей системы</a>, <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCustomer.html">Создание
        заказчика</a>.</p>
<p>При заполнении шаблона обратите внимание на поля, отмеченные красной звездочкой - они являются обязательными для
    заполнения:</p>

<ul>
    <li><strong>Фамилия</strong>, <strong>Имя</strong> должны быть заполнены обязательно;</li>
    <li><strong>Телефон</strong> или <strong>Электронная почта</strong> будут являться логином для входа в систему HubEx: номер телефона вводится в
        формате 79057569874, либо 89057569874. На указанный номер телефона или почту придет сообщение для подтверждения
        регистрации и создания пароля;
    </li>
    <li>в поле <strong>Тип</strong> укажите, кем является пользователь - <strong>Штатный сотрудник</strong> (диспетчер, бухгалтер и т.д.), <strong>Мобильный
        инженер</strong> (исполнитель), <strong>Заказчик</strong>. В случае заполнения шаблона для импорта <strong>Заказчиков</strong> выберите - <strong>Заказчик</strong>;
    </li>
    <li>укажите <strong>Роль</strong> пользователя. <strong>Роль</strong> определяет уровень доступа пользователя. <strong>Роли</strong> создаются и настраиваются в консоли
        администратора. Подробнее читайте в статье:
        <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Roles.html">Настройка ролей</a>;
    </li>
  <p>  <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/USER/Import/TemplateUser2.jpg"/>
    </div></p>

    <li><strong>Участок</strong> выбирается из списков уже ранее созданных в системе <strong>Участков</strong>;</li>
    <li><strong>Должность</strong> заполняется в свободной форме;</li>
    <li><strong>График работы</strong> выбирается из выпадающего списка для импорта <strong>Сотрудников</strong>. <strong>График работы</strong> исполнителей позволяет
        учитывать рабочее время <strong>Сотрудников</strong> при назначении на <strong>Заявки</strong>. Все варианты <strong>Графиков работ</strong> встроены в систему.
        Если вы не нашли подходящий, напишите в Чат с поддержкой в web-приложении или на почту support@hubex.ru.
        Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/Schedule.html">График работы
            исполнителей</a>;
    </li>
    <li><strong>Ставка сотрудника</strong> и <strong>Валюта ставки</strong> заполняются при импорте в справочник <strong>Сотрудники</strong>. Ставка и валюта необходимы для
        подсчета итоговой суммы в <strong>Акте выполненных работ</strong> по <strong>Заявке</strong>. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.
    </li>
</ul>


<h5 id="companies">Импорт компаний</h5>
<p>Импорт компаний находится в меню <strong>Компании</strong>. Нажмите кнопку <strong>Импорт</strong>, скачайте шаблон
    и заполните данные. После заполнения шаблона в форме выбора нажмите <strong>Загрузить готовый шаблон</strong> и выберите заполненный
    файл.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/Import/TemplateCompany.jpg"/>
</div>
<p>Обратите внимание! За один раз можно загрузить до 100 компаний.</p>
<p>Поля в шаблоне соответствуют полям в карточке <strong>Компании</strong>. Подробнее
    о назначении полей читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание
        обслуживаемых компаний</a>.</p>
<p>При заполнении шаблона обратите внимание на поля, отмеченные красной звездочкой - они являются обязательными для
    заполнения:</p>
<ul>
    <li>в поле <strong>Название</strong> введите наименование компании. Оно будет отображаться в <strong>Заявке</strong> и <strong>Акте выполненных работ</strong>;</li>
    <li>поле <strong>Код</strong> - это идентификатор <strong>Заявок</strong> от этой <strong>Компании</strong>. Вы можете задать определенный цифровой код, который можно
        использовать в номере <strong>Заявки</strong>. Подробнее читайте в статье: <a
                href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>;
    </li>
    <li><strong>ERPID</strong> - это внешний идентификационный номер для работы с интегрируемыми системами (например, 1С или
        CRM-системы). Код
        необходим для выгрузки/загрузки данных;
    </li>
    <li>в полях <strong>Адрес сайта</strong>, <strong>Телефон</strong>, <strong>Эл почта</strong> можно указать контактные данных для компаний;</li>
    <li>в поле <strong>Тип контрагента</strong> выберите юридическую форму компании из списка: <strong>ИП</strong>, <strong>Физическое лицо</strong> или <strong>Юридическое лицо</strong>.
        От выбора <strong>Типа
        контрагента</strong> зависит заполнение юридических реквизитов. Реквизиты КПП, ОГРН, ОКПО, банковские счета и т.д.
        доступны для заполнения непосредственно в карточке <strong>Компании</strong>;
    </li>
    <li>укажите <strong>Вид клиента</strong>, выбрав вариант <strong>Да</strong> или <strong>Нет</strong> в полях <strong>Заказчик</strong>, <strong>Подрядчик</strong>, <strong>Наша компания</strong>. <strong>Заказчик</strong> – покупатель
        услуг.
        <strong>Подрядчик</strong> – исполнитель. <strong>Наша компания</strong> – компания от лица которой создаются и ведутся <strong>Заявки</strong> в системе.
        Реквизиты
        нашей компании попадают в <strong>Акт выполненных работ</strong>.
    </li>
</ul>

<h5 id="tickets">Импорт заявок</h5>
<p>Импорт заявок находится в меню <strong>Заявки - Все заявки</strong>. Нажмите кнопку <strong>Импорт</strong>, скачайте шаблон
    и заполните данные. После заполнения шаблона в форме выбора нажмите <strong>Загрузить готовый шаблон</strong> и выберите заполненный
    файл.</p>
    <p>Обратите внимание! За один раз можно загрузить до 2000 заявок.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 40%;"
         src="/attachments/images/FAQ/USER/Import/TemplateTask.jpg"/>
</div>

<p>Поля в шаблоне соответствуют полям в <strong>Заявке</strong>. Подробнее
    о назначении полей читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingTicket.html">Создание
        заявки</a>.</p>
<p>Обратите внимание! Импорт заявок происходит в фоновом режиме: <strong>Заявки</strong> загружаются в систему постепенно в течение
    небольшого количества времени. Это позволяет пользователям работать в привычном режиме, без сбоев и длительных
    откликов от системы.</p>

<p>При заполнении шаблона обратите внимание на поля, отмеченные красной звездочкой - они являются обязательными для
    заполнения:</p>
<ul>
<li>укажите <strong>Номер</strong>, под которым <strong>Заявка</strong> будет создана в системе. Данный номер <strong>Заявки</strong> также будет присвоен <strong>Акту
    выполненных работ</strong>. Например, вы можете задать номер в формате ддммгггг00№ - 26102020001,
    26102020002 и т.д.;</li>
<li>в поле <strong>Тип заявки</strong> из выпадающего списка выберите необходимый <strong>Тип заявки</strong>. <strong>Тип заявки</strong> определяет стадии, через
    которые она проходит и срок ее закрытия. Для импорта <strong>Заявок</strong> в системе должен быть создан хотя бы один <strong>Тип заявки</strong>.
    Типы
    заявок создаются в консоли администратора. Подробнее об этом читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/TicketType.html">Типы заявок</a>;</li>
<li>в поле <strong>Описание заявки</strong> в свободной форме введите подробную информацию по <strong>Заявке</strong>. Это может быть описание
    неисправностей и
    любые другие замечания;
</li>
<li><strong>Заказчик</strong> – это компания-покупатель. Выберите необходимого <strong>Заказчика</strong> в ячейке из выпадающего списка. Если
    <strong>Заказчика</strong> нет, его необходимо создать в разделе <strong>Компании</strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingCompany.html">Создание
        обслуживаемых компаний</a>;
</li>
<li><strong>Оборудование</strong> или <strong>Объект</strong> – элемент инфраструктуры, на который направлено предоставление услуг. Выбор <strong>Оборудования</strong> в <strong>Заявке</strong>
    позволит разделить их по обслуживаемым объектам, позволит просматривать историю выполненных работ. Если в списке нет
    необходимого Оборудования, его нужно создать в системе HubEx. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingObjects.html">Создание обслуживаемого
        оборудования</a>;
</li>
<li>укажите, в каком <strong>Часовом поясе</strong> должны создаваться <strong>Заявки</strong>. Это позволит указывать в них корректное
    время, а также они корректно по времени будут отображаться в мобильном приложении исполнителя;
</li>
<li><strong>Вид работ</strong> необходимо выбрать из выпадающего списка. <strong>Виды работ</strong> создаются в консоли администратора. Подробнее читайте
    в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/admin/WorkType.html">Виды работ</a>;
</li>
<li><strong>Критичность</strong> визуально разделит ваши З<strong>аявки</strong> цветными маркерами в общем списке. Например, вы можете создать
    Срочную,
    Плановую и Стандартную критичность в консоли администратора. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/Criticality.html">Критичность заявки</a>;
</li>
<li><strong>Стадия</strong> – один из этапов жизненного цикла, которые проходит <strong>Заявка</strong> в зависимости от выполняемых над ней
    действий;
</li>
<li><strong>Срок исполнения</strong> - это крайний срок закрытия <strong>Заявки</strong> позволит отслеживать выполнение работ в установленный промежуток
    времени и видеть в списке просроченные Заявки. Срок исполнения вносится в формате дд.мм.гггг чч:мм. Например, 15
    октября
    2020 года, 15 часов дня будет выглядеть как 15.10.2020 15:00;
</li>
<li>выберите <strong>Исполнителя</strong> из внесенных в систему, либо распределите <strong>Заявки</strong> уже в системе
    HubEx. Создать <strong>Исполнителя</strong> можно в справочнике <strong>Пользователи-Сотрудники</strong>. Подробнее читайте в статье: <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/user/CreatingUser.html">Создание
        пользователя вашей системы</a>;
</li>
<li>указание <strong>Контактного лица</strong> позволит ускорить решение вопросов по данной <strong>Заявке</strong>. Например,
    контактным
    лицом может выступать ответственный за приемку выполненных работ и подписание акта. Введите все необходимые данные и
    Контактное лицо будет создано автоматически в системе HubEx;
</li>
<li>в поле <strong>Обращение</strong> от можно указать от чьего имени была создана <strong>Заявка</strong>. В выпадающем списке вы
    увидите
    всех внесенных в систему <strong>Сотрудников</strong> и <strong>Заказчиков</strong> вместе.
</li>
</ul>
<p>Обратите внимание! В шаблонах импорта некоторые поля сопровождаются подсказками. Ячейка, обозначенная красным флажком
    в правом верхнем углу ячейки, имеет подсказку.</p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/USER/Import/TrmplateInfo.jpg"/>
</div>

<script>
    function hideSiblingVideo(activeVideo){
        const nextSibling=activeVideo.nextElementSibling
        const prevSibling=activeVideo.previousElementSibling
        if(nextSibling){
            nextSibling.style.display="none"
        }
        if(prevSibling){
            prevSibling.style.display="none"
        }
    }
 
    function switchActiveButtons(activeButton){
        const nextSibling=activeButton.nextElementSibling
        const prevSibling=activeButton.previousElementSibling
        const activeClass="active"
        if(nextSibling){
            nextSibling.classList.remove(activeClass)
        }
        if(prevSibling){
            prevSibling.classList.remove(activeClass)
        }
        activeButton.classList.add(activeClass)
        return activeButton?.dataset?.source
    }

    function switchShowVideos(activeContainer,label){
        const videoClass=`video-frame ${label}-frame`
        const videoFrame=activeContainer.querySelector(videoClass)
        const videos=activeContainer.children[1].children
        const activeVideo=Array.from(videos).filter((item)=>item.className===videoClass)
        console.debug({activeVideo})
        hideSiblingVideo(activeVideo[0])
        activeVideo[0].style.display="block"
    }

    const allVideoContainers=document.querySelectorAll(".video-player-container")
    allVideoContainers.forEach((container)=>{
        container.addEventListener("click",(e)=>{
            if(!e.target.classList.contains('source-btn')) return;
            
            console.debug({e},{container})
            const targetButton=e.target
            const activeSource=switchActiveButtons(targetButton)
            console.debug(activeSource)
            if(activeSource){
                switchShowVideos(container,activeSource)
            }
        })
    })
</script>

</body>
</html>

___
### Следующие шаги:
- [Бренд компании](./Branding.md)
- [Загрузка материалов и создание складов](./Materials.md)
- [Расход материалов по заявке, отчет по расходу](./Withdrawals.md)

___
- [Перейти в меню](http://wiki.hubex.ru)
