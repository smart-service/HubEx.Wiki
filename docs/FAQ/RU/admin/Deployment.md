---
title: Сравнение трех вариантов развертывания HubEx
description: Сравнение трех вариантов развертывания HubEx
keywords: Сравнение трех вариантов развертывания HubEx, Сравнение вариантов развертывания HubEx, развертывание, варианты, hubex public cloud, hubex cloud, hubex on-premises, on prem, hubex, хабекс, хубекс, хабикс
---

<h1>Сравнение трех вариантов развертывания HubEx</h1>

<html lang="ru">
<meta charset="utf-8">

<p>Содержание статьи:</p>

<ul>
    <li><a href="#Deployment1">Введение</a></li>
    <li><a href="#Deployment2">Вариант 1: HubEx public cloud (или публичное облако HubEx)</a></li>
    <li><a href="#Deployment3">Вариант 2: HubEx cloud на выделенных серверах (HubEx в облаке на отдельных серверах)</a></li>
    <li><a href="#Deployment4">Вариант 3: HubEx on–premises (Локальное развертывание HubEx)</a></li>
</ul>

</html>

<body>

<h2 id="Deployment1">Введение</h2>

<p>На сегодняшний день HubEx существует в трех основных вариантах конфигураций и у каждого из них есть свои плюсы и минусы. Далее мы сравним эти варианты друг с другом, опишем преимущества и недостатки каждого из них и поможем выбрать наиболее подходящую под решение ваших задач конфигурацию HubEx.</p>

<h2 id="Deployment2">Вариант 1: HubEx public cloud (или публичное облако HubEx)</h2>

<p>HubEx Public Cloud – это облачная версия HubEx. Инфраструктура HubEx облака располагается в кластере высокой доступности с общим количеством серверов более 20. Основной дата–центр располагается в Петербурге в ЦОДе класса Teir 3. Резервный ЦОД расположен в Москве. На сегодняшний день (август 2024 г.) публичное облако используют более 100 организаций с количеством, использующих HubEx сотрудников от нескольких десятков, до нескольких тысяч. Использование публичного облака мы рекомендуем компаниям с количеством пользователей до 500 человек. Компании свыше 500 пользователей могут также работать в публичном облаке HubEx, но для них все же больше подходит один из вариантов описанный ниже. Чуть ниже разберемся почему.</p>

<p><strong>Для кого лучше всего подходит Публичное облако HubEx?</strong></p>

<p>Публичное облако лучше всего подойдет для организаций, подходящих под следующие критерии:</p>

<ol>
    <li>Количество работающих в системе сотрудников не превышает 500;</li>
    <li>HubEx не является системой высшего уровня критичности, когда на скорость работы не должна влиять нагрузка создаваемая другими клиентами облака;</li>
    <li>Приоритетным для вас фактором выбора варианта является минимальная стоимость владения и отсутствие дополнительных затрат на инфраструктуру и поддержку;</li>
    <li>Вам не требуются сложные высоко–нагруженные интеграции с количеством запросов в свыше 10 запросов в секунду, а в случае превышения нагрузки от интеграций, вы готовы к тому, что доступ может быть принудительно ограничен, а интеграция отключена;</li>
    <li>Вы не сможете влиять на окно обслуживания системы (переносить время обновления, которое обычно выбирается в интервале 22.00–24.00 по вторникам и четвергам), когда HubEx может быть частично или полностью недоступен из–за обновлений.</li>
</ol>

<p><strong>Преимуществами работы в публичном облаке HubEx является:</strong></p>

<ol>
    <li>Минимальная стоимость;</li>
    <li>Высокая надежность и отказоустойчивость;</li>
    <li>Географическое резервирование (реплика облака находится в Московском ЦОД, а основной кластер высокой доступности расположен в дата–центре Санкт–Петербурга).</li>
</ol>

<p><strong>Минусы:</strong></p>

<ol>
    <li>При высокой нагрузке от других клиентов скорость облака может снижаться. Хотя безусловно мы следим за тем, чтобы скорость работы была высокой, и поддержка быстро реагирует на случаи высокой нагрузки от других клиентов.</li>
    <li>В случае DDoS атаки на систему любого из клиента облака, скорость работы всех клиентов может быть снижена;</li>
    <li>Cуммарное время обслуживания и связанная с этим недоступность системы обычно выше, чем в других вариантах ввиду большого объема данных и количества обновляемых серверов;</li>
    <li>Восстановление данных возможно только для всех клиентов облака одновременно. Безусловно в системе предусмотрена защита от удаления или потери данных, однако, например, в случае случайного изменения данных в вашей конфигурации пользователями или вирусами, восстановление информации из бэкапа отдельного клиента будет крайне трудозатратным и проблематичным, а в ряде случаев и невозможно.</li>
</ol>

<p><strong>Подведем итоги:</strong></p>

<p>Публичное облако HubEx будет лучшим выбором для компаний малого и среднего бизнеса, а также для тех организаций, кто планирует автоматизировать работу сервисных подразделений с мобильным персоналом, не задумываясь о серверной инфраструктуре, резервировании данных и обслуживании системы. Кроме этого, публичное облако HubEx это лучший вариант для крупных корпоративных заказчиков провести пилот и начать работать в системе несколькими департаментами до запуска полномасштабного проекта на всю компанию.</p>

<h2 id="Deployment3">Вариант 2: HubEx cloud на выделенных серверах (HubEx в облаке на отдельных серверах)</h2>

<p>Облако HubEx на выделенных серверах – это индивидуальный вариант размещения, в котором система располагается не на общих серверах, а отдельных, выделенных серверах. Ключевое преимущество данного варианта перед публичным облаком состоит в том, что на работу системы не влияют другие компании, работающие в HubEx облаке. Дополнительным преимуществом является возможность повышенной нагрузки от интеграций, возможность индивидуального планирования времени проведения плановых работ, возможность индивидуального управления бэкапами и восстановлениями данных. Если в системе работают более 500 пользователей или инфраструктура является бизнес–критичной, мы настоятельно рекомендуем данный вариант или вариант локального размещения (№3) вместо публичного облака. Так же данный вариант значительно снижает риски деградации производительности системы при внешних факторах, например DDoS атаках.  В данном варианте размещения система может работать в трех конфигурация с различными уровнями отказоустойчивости:</p>

<ul>
    <li>Бронза – Без кластера. Один физических сервер, по одному виртуальному серверу каждого вида (сервер БД, Сервер приложений, WEB–сервер и др.). Отказ любого сервера приведет к остановке работы системы. Количество пользователей не более 1000;</li>
    <li>Серебро – Отказоустойчивый кластер высокой доступности. Два физических сервера: три сервера приложений, два сервера баз данных, два WEB–сервера и четыре функциональных сервера. При остановке работы нескольких серверов одного типа в кластере система продолжит работу. Количество пользователей – 1000–3000 сотрудников;</li>
    <li>Золото – Отказоустойчивый кластер высокой доступности. Четыре физических сервера: пять серверов приложений, четыре сервера баз данных, два WEB–сервера и четыре функциональных сервера. При остановке работы нескольких серверов одного типа в кластере система продолжит работу. Количество пользователей – более 3000 сотрудников.</li>
</ul>

<p><strong>Для кого лучше всего подходит облако HubEx на выделенных серверах?</strong></p>

<p>Данный вариант размещения HubEx лучше всего подойдет для организаций, подходящих под следующие критерии:</p>

<ol>
    <li>Количество работающих в системе сотрудников более 500;</li>
    <li>HubEx является бизнес–критичной системой и на ее скорость работы не должна влиять нагрузка создаваемая другими клиентами облака;</li>
    <li>Приоритетным фактором выбора является оптимальная стоимость владения при высокой доступности и надежности. Серверные лицензии и обновления, в данном варианте, будут стоить на 30% меньше, чем в Варианте №3 с локальным размещением, но больше, чем в Варианте №1;</li>
    <li>Отсутствие собственных серверов и неготовность их администрировать (преимущество относительно Варианта №3);</li>
    <li>Вы планируете активно использовать интеграции с количеством запросов в свыше 10/сек без рисков отключения интеграций из-за превышения нагрузки на систему связанных с влиянием вашей нагрузки на скорость работы других клиентов;</li>
    <li>Стандартные окна обслуживания системы неудобны для вашего бизнеса и периодически требуется переносить время обновления, которое обычно находится в интервале 22.00–24.00 по вторникам и четвергам, когда HubEx может быть частично или полностью недоступен из-за обновлений;</li>
    <li>Необходимо максимально снизить время восстановления системы после сбоя.</li>
</ol>

<p><strong>Преимуществами работы в облаке HubEx на выделенных серверах:</strong></p>

<ol>
    <li>Оптимальная стоимость (серверные лицензии и обновления, в данном варианте, будут стоить на 30% меньше, чем в Варианте №3 с локальным размещением);</li>
    <li>Высокая надежность и отказоустойчивость;</li>
    <li>Возможность географического резервирования (реплика системы может находиться в Московском ЦОД, а основной кластер будет расположен в дата–центре Санкт–Петербурга);</li>
    <li>Возможность индивидуальных бэкапов и восстановлений с минимальным временем реакции;</li>
    <li>Возможность повышенной нагрузки от интеграций;</li>
    <li>Возможность индивидуальных окон обслуживания;</li>
    <li>Снижение рисков влияния внешних факторов (например, от DDoS);</li>
    <li>Меньшее время решения проблем, чем в варианте с локальным размещением, ввиду отсутствия необходимости согласований доступов для подключения в закрытый периметр Заказчика.</li>
</ol>

<p><strong>Минусы:</strong></p>

<ol>
    <li>Более высокая стоимость, чем вариант размещения в публичном облаке;</li>
    <li>Дополнительный объем работ по поддержке и обновлениям, чем в варианте размещения в публичном облаке.</li>
</ol>

<p><strong>Подведем итоги:</strong></p>

<p>Облако HubEx на выделенных серверах является оптимальным выбором для компаний среднего и крупного бизнеса, кто планирует автоматизировать работу сервисных подразделений с мобильным персоналом и не хочет администрировать собственную серверную инфраструктуру. Затраты на данный вариант развертывания HubEx обычно ниже, чем в варианте локального размещения и время решения проблем в данной конфигурации обычно также меньше ввиду отсутствия необходимости согласований доступов для подключения в закрытый периметр Заказчика.</p>

<h2 id="Deployment4">Вариант 3: HubEx on–premises (Локальное развертывание HubEx)</h2>

<p>Локальное размещение HubEx предполагает развертывание системы на собственных серверах Заказчика. Преимуществами данного варианта является полная независимость системы и возможность ее работы в закрытом периметре компании. Данный вариант развертывания имеет все преимущества вариант №2, при этом уровень надежности работы системы может быть максимальным если надежность работы локальной инфраструктуры Заказчика будет выше, чем работа инфраструктуры дата–центра уровня Tier3, в котором располагаются серверные мощности HubEx в вариантах развертывания №1 и №2. Как и в варианте №2, мобильные приложения устанавливается на устройства через APK-файлы, систему управления мобильными устройствами Заказчика класса Mobile Device Management, либо могут быть опубликованы в публичный магазин приложения. В последствии появится возможности использовать общие мобильные приложения облака. Варианты конфигурации серверов аналогичны варианту №2: Бронза, Серебро и Золото.</p>

<p><strong>Для кого лучше всего подходит локальное развертывание HubEx?</strong></p>

<p>Данный вариант размещения HubEx лучше всего подойдет для крупных организаций, подходящих под следующие критерии:</p>

<ol>
    <li>Согласно политике компании все ИТ–системы должны располагаться в периметре компании на собственных серверах или в частном облаке компании;</li>
    <li>Количество работающих в системе сотрудников более 1000;</li>
    <li>HubEx является бизнес–критичной системой, а ИТ–инфраструктура способна обеспечить уровень надежности выше, чем в дата–центре Tier3 класса, где размещаются серверные мощности HubEx;</li>
    <li>Стоимость не является ключевым фактором выбора решения. Серверные лицензии и обновления, в данном варианте, будут стоить на 30% больше, чем в Варианте №2 – облако с выделенными серверами;</li>
    <li>Вы планируете активно использовать интеграции без ограничений по количеству запросов со стороны HubEx и без рисков отключения интеграций из-за превышения нагрузки на систему связанных с влиянием вашей нагрузки на других клиентов;</li>
    <li>Стандартные окна обслуживания системы неудобны для вашего бизнеса и требуется установить индивидуальное время обновления (опция). Аналогично варианту 2;</li>
    <li>Вы планируете самостоятельно администрировать сервера и базу данных, настраивать и управлять системой резервного копирования, планируете автономно и самостоятельно эксплуатировать систему.</li>
</ol>

<p><strong>Преимуществами работы HubEx в конфигурации HubEx on–premises являются:</strong></p>

<ol>
    <li>Размещение на собственных серверах и независимость от внешних факторов;</li>
    <li>Возможность максимально высокой нагрузки от интеграций;</li>
    <li>Самостоятельно администрирование серверов системы;</li>
    <li>Минимальное время задержки при обмене данными с внутренними ИТ–системами компании;</li>
    <li>Возможность обеспечить требуемые параметры доступности серверной и сетевой инфраструктуры в соответствии со строгими стандартами вашей компании.</li>
</ol>

<p><strong>Минусы:</strong></p>

<ol>
    <li>На 30% более высокая стоимость серверной составляющей лицензии, чем вариант размещения на выделенных серверах в облаке HubEx;</li>
    <li>Дополнительный объем работ по поддержке и обновлениям в закрытом контуре компании;</li>
    <li>Дополнительные затраты ресурсов на административную составляющую (соблюдение внутренних стандартов Заказчика по процессам Change management, Release management, согласования СБ и др.).</li>
</ol>

<p><strong>Подведем итоги:</strong></p>

<p>Локальное размещение HubEx является обязательным требованием многих российских корпоративных клиентов. В этом и ряде других случаев, основная часть из которых перечисленных выше, следует использовать вариант конфигурации системы HubEx on–premises.</p>

</body>

____
- [Перейти в меню](http://wiki.hubex.ru)