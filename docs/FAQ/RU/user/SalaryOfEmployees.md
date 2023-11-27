---
title: Расчет зарплаты сотрудников
description:
keywords: зарплата, сдельная оплата труда, ставка, расчет зарплаты, hubex, хабекс, хубекс, хабикс
---

#### Расчет зарплаты сотрудников

<html>
<meta charset="utf-8">

</html>

<body>

<p>FSM система HubEx фокусируется на планировании, диспетчеризации заявок, учета оборудования и мониторинга работы выездных специалистов. Однако, данные из <strong>Заявок</strong> также могут создавать основу для расчета заработной платы сотрудников.</p>

<p>Расчет зарплаты сотрудников (исполнителей по заявкам) в HubEx можно осуществлять с помощью использования часовой
    ставки, либо с помощью стоимости <strong>Вида работ</strong> (например, при сдельной оплате труда).</p>

<p>Для корректного расчета зарплаты необходимо выполнить два условия:</p>
<ol>
    <li>заполнить ставку для сотрудника и (или) заполнить стоимость <strong>Вида работ</strong>:
        <ul>
            <li>ставка исполнителя указывается индивидуально для каждого в меню <strong>Пользователи -
                Сотрудники</strong> в карточке
                <strong>Сотрудника</strong> на вкладке <strong>Квалификация</strong>;
            </li>

            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 100%;"
                     src="/attachments/images/FAQ/USER/SalaryOfEmployees/Employee.jpg"/>
            </div>
            </p>

            <li>стоимость <strong>Вида работ</strong> устанавливается в консоли администратора в меню <strong>Настройки
                заявки - Виды работ</strong>;
            </li>

            <p>
            <div>
                <img style="margin: 0 auto; display: block; max-width: 100%;"
                     src="/attachments/images/FAQ/USER/SalaryOfEmployees/WorkType.jpg"/>
            </div>
            </p>
        </ul>


    </li>

    <li>добавлять выполненные работы на вкладку <strong>Выполнение</strong> на форме <strong>Заявки</strong> (в web или
        мобильном приложении):
        при заполнении
        выполненных работ отображается ставка исполнителя и стоимость выполненных работ. Здесь ставку и стоимость видов
        работ можно изменять вручную. При этом ставка не изменится в карточке Сотрудника и в карточке Вида работ. Также
        важно указывать количество часов, которые исполнитель затратил на выполнение заявки. Подробнее читайте в статье:
        <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/AttachingFiles.html">Прикрепление выполненных работ</a>.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Works.jpg"/>
    </div>
    </p>
</ol>

<p>Обратите внимание! Ставка исполнителя, количество часов работы исполнителя и стоимость вида работ используются для
    формирования итоговой стоимости акта
    выполненных работ для ваших заказчиков. Подробнее читайте в статье: <a href="https://wiki.hubex.ru/docs/FAQ/RU/user/ActOFAcceptance.html">Акт выполненных работ</a>.</p>

<p>Для того, чтобы совершить расчет заработной платы выполните следующие шаги:</p>
<ol>
    <li>в меню <strong>Заявки - Все заявки</strong> с помощью фильтров сделайте отбор по необходимому исполнителю и
        укажите период (по Дате создания или Дате закрытия). В фильтре по <strong>Состояние заявки</strong> укажите
        <strong>Все заявки</strong>, чтобы в
        отбор попадали даже закрытые <strong>Заявки</strong> (если это необходимо);
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Filter.jpg"/>
    </div>
    </p>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Filter2.jpg"/>
    </div>
    </p>
    <li>с помощью расширенного экспорта выгрузите данные по выбранным <strong>Заявкам</strong>, в настройках экспорта
        обязательно
        установите флажок у параметра <strong>Выполненные работы</strong>;
    </li>
      <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Export2.jpg"/>
    </div>
    </p>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Export.jpg"/>
    </div>
    </p>
    <li>откройте выгруженный файл формата .xlsx (таблицы Excel), перейти во вкладку <strong>Выполненные работы</strong>
        и
        нажмите кнопку
        <strong>Разрешить редактирование</strong>.
        <p>Обратите внимание! Если по одной <strong>Заявке</strong> работало несколько исполнителей, то данные по выполнению для других
            исполнителей тоже будут отображаться в выгруженной таблице. Лишние строки можно удалить.</p>
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Table.jpg"/>
    </div>
    </p>
    <li>в таблицу выгружаются ставки сотрудников, стоимость по видам работ и количество отработанных сотрудником часов.
        Далее можно совершать необходимые расчеты: получить сумму всех выполненных работ, умножить ставку на количество
        отработанных часов и высчитать процент оплаты сотруднику. Дальнейшие расчеты будут зависеть от условий, по
        которым ваша компания производит расчет заработной платы.
        <p>Обратите внимание! Для расчетов по формулам в ячейках должен быть установлен числовой формат. Для этого
            выберите пустые ячейки, в которые будете вводить формулы, нажмите правой кнопкой мыши и в меню <strong>Формат
                ячеек</strong>
            установите значение <strong>Числовой</strong>. </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/SalaryOfEmployees/Format.jpg"/>
        </div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/USER/SalaryOfEmployees/Format2.jpg"/>
        </div>
        </p>

        <p>Рассмотрим на примере: при сдельной оплате труда зарплата начисляется в размере 40% от суммы всех
            видов работ,
            которые выполнил сотрудник. При таком варианте расчета необходимо с помощью формулы Excel <strong>=СУММ(число 1, число 2, ...)</strong> сложить все суммы в колонке <strong>Стоимость вида
            работ</strong> и затем умножить итоговую сумму на 40%.</p>
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 100%;"
             src="/attachments/images/FAQ/USER/SalaryOfEmployees/Salary2.jpg"/>
    </div>
    </p>
</ol>

<p>В HubEx также есть возможность разработки индивидуального отчета. Наша команда может создать отчет по расчету заработной платы по вашим требованиям. Напишите нам в <a href="https://t.me/hubex_bot">Telegram</a> или на почту <a href="mailto:support@hubex.ru" target="_blank" rel="noopener">
        support@hubex.ru</a> с запросом на разработку.</p>
</body>


___
### Следующие шаги:
- [Создание заявки](./CreatingTicket.md)
- [Индивидуальный график работы: функционал “На смене”](./OnDuty.md)
- [Как выбрать нескольких исполнителей в заявке](./SeveralEngineers.md)

____
- [Перейти в меню](http://wiki.hubex.ru)
