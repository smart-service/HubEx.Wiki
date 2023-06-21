---
title: Интеграция с Битрикс24 через сервис Albato
description: Для интеграции HubEx и Битрикс24 мы предлагаем воспользоваться сервисом Albato (Альбато). Albato — это платформа, с которой можно легко соединить между собой нужные сервисы и автоматизировать повторяющиеся и рутинные задачи, без привлечения разработчиков. 
keywords: битрикс 24, альбато, albato, интеграция, интеграция с битрикс 24, hubex, хабекс, хубекс, хабикс, битрикс24, habex
---

#### Интеграция с Битрикс24 через сервис Albato
В этом разделе вы научитесь:
<html>
<meta charset="utf-8">
<ul>
    <li><a href="#Albato">Подключать Albato для интеграции</a>;</li>
    <li><a href="#bundle">Создавать связки между сервисами Битрикс24 и HubEx</a>.</li>

</ul>
</html>
<body>

<p>В HubEx вы можете настроить двухстороннюю интеграцию с Битрикс24 для автоматического создания <strong>Заявок</strong>.
</p>
<p>С помощью интеграции вы сможете:</p>
<ul>
    <li>создавать <strong>Заявки</strong> в HubEx при смене стадии сделки в Битрикс24;</li>
    <li>передавать данные в <strong>Заявку</strong> HubEx из полей карточки сделки Битрикс24 (например: контактные
        данные клиента,
        Комментарий, Адрес, Критичность и т.д.);
    </li>
    <li>изменять стадии сделки, при выполнении <strong>Заявки</strong> в HubEx;</li>
    <li>передавать информацию в карточку сделки из <strong>Заявки</strong> HubEx (например: срок выполнения, стоимость
        работ, комментарий от
        исполнителя).
    </li>
</ul>

<p>Для интеграции HubEx и Битрикс24 мы предлагаем воспользоваться сервисом Albato (Альбато).
    Albato — это платформа, с которой можно легко соединить между собой нужные сервисы и автоматизировать повторяющиеся
    и
    рутинные задачи, без привлечения разработчиков. </p>

<h5 id="Albato">Подключение Albato</h5>

<p>Подключение и настройка Albato состоит из нескольких шагов:</p>

<ul>
    <li><strong>Шаг 1:</strong> зарегистрируйтесь на сервисе <a href="https://albato.ru/" target="_blank">Albato</a>.
    </li>
    <li><strong>Шаг 2:</strong> подключите учетную запись Битрикс24 по <a
            href="https://blog.albato.ru/connecting-bitrix24-to-albato/#:~:text=%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%20Albato,%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B%20%D1%81%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%BC%20%C2%AB%D0%91%D0%B8%D1%82%D1%80%D0%B8%D0%BA%D1%8124%C2%BB."
            target="_blank">инструкции</a>;
    </li>
    <li><strong>Шаг 3:</strong> подключите сервисную учетную запись в HubEx в <a
            href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоли
        администратора</a> в меню <strong>Интеграция - Служебные пользователи</strong>:
    </li>
    <ol>
        <li>активируйте <strong>Пользователя API</strong>: выберите <strong>Роли</strong>, которые наделены
            максимальными полномочиями для работы с
            <strong>Заявками</strong> и
            <strong>Объектами</strong>. При интеграции с выбранных для <strong>Пользователя API</strong> ролей будут
            считываться полномочия. Обычно
            полными правами наделены Администраторы, Системные администраторы, Руководители служб;
        </li>
        <li>также выберите все
            <strong>Участки</strong>;
        </li>
        <li id="token">в поле <strong>Токен доступа</strong> сгенерируйте специальный ключ, по которому Albato будет
            связываться с HubEx. Для этого нажмите кнопку <strong>Сгенерировать</strong> и скачайте сформированный
            токен доступа на компьютер. Ключ будет сохранен в текстовом формате .txt. Сгенерированный ключ нужно будет
            указать в настройках Albato далее.
        </li>

        <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/ADMIN/Integration/API1.jpg"/>
    </div>
    </p>

     <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/ADMIN/Integration/API2.jpg"/>
    </div>
    </p>
    </ol>


    <li><strong>Шаг 4:</strong> перейдите в Albato в меню Подключения и нажмите кнопку <strong>Добавить подключение</strong>:</li>

      <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 90%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato.jpg"/>
    </div>
    </p>

    <ol>
        <li>из списка выберите сервис HubEx;</li>

          <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato2.jpg"/>
    </div>
    </p>
        <li>в появившемся окне в поле <strong>Токен сервисного аккаунта</strong> вставьте ключ, <a href="#token">сгенерированный
            в HubEx</a>.
        </li>
          <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato3.jpg"/>
    </div>
    </p>

    </ol>

</ul>
<p>Далее переходим к настройкам связки HubEx и Битрикс24.</p>

<h5 id="bundle">Настройка связки между сервисами Битрикс24 и HubEx</h5>

<p>Для создания связки в Albato перейдите в меню <strong>Мои связки</strong> и нажмите кнопку <strong>Создать новую
    связку</strong>.</p>
<p>Вы можете передавать информацию, как из Битрикс24, так и из HubEx.</p>
  <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato4.jpg"/>
    </div>
    </p>

<p>Предлагаем вам реализовать следующий кейс: менеджеры работают в Битрикс24, взаимодействуют с клиентами через лиды и
    сделки. Информацию по сделке необходимо передать выездному специалисту, который работает в HubEx.</p>
<p>Рассмотрим настройку данного кейса по шагам.</p>

<ul>
    <li><strong>Шаг 1:</strong> после того, как вы нажали кнопку <strong>Создать новую
        связку</strong> настройте триггер, который будет запускать связку, следующим образом:
    </li>
    <ol>
        <li>в поле <strong>Сервис</strong> выберите Битрикс24;</li>
        <li>в поле <strong>Событие</strong> выберите вариант <strong>Изменение/создание сделки</strong>;</li>
        <li>в поле <strong>Аккаунт Битрикс24</strong> выберите аккаунт, который вы подключили.</li>
    </ol>

  <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato5.jpg"/>
    </div>
    </p>

    <li><strong>Шаг 2:</strong> укажите режим работы связки. В рамках данного кейса установите значение <strong>В
        реальном времени</strong>, чтобы данные передавались постоянно.
    </li>

    <li><strong>Шаг 3:</strong> укажите при каком событии будет срабатывать триггер. В поле <strong>Событие</strong>
        выберите вариант <strong>При обновлении
            сделки</strong> и в поле <strong>Загружать каждую сделку лишь единожды</strong> выберите вариант
        <strong>Да</strong>.
    </li>
      <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato6.jpg"/>
    </div>
    </p>

    <li><strong>Шаг 4:</strong> на форме <strong>Фильтровать данные</strong> необходимо заполнить при каком событии
        будет срабатывать триггер, чтобы не создавалась новая <strong>Заявка</strong> после каждого обновления сделки:
    </li>
    <ol>
        <li>в поле <strong>Значение</strong> выберите <strong>Изменение/создание сделки</strong>;</li>
        <li>в поле <strong>Условие</strong> выберите вариант <strong>Начинается с</strong>;</li>
        <li>во втором поле <strong>Значение</strong> выберите <strong>Сервисная служба</strong>.</li>
    </ol>
    <p>Таким образом триггер будет срабатывать, когда сделках находится на стадии <strong>Сервисная служба</strong>.</p>

      <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato7.jpg"/>
    </div>
    </p>

    <li><strong>Шаг 5:</strong> следом необходимо добавить действие, которое будет выполнено после старта связки и
        запуска триггера в
        Биттрикс24. Это действие - создание <strong>Заявки</strong> в HubEx:
    </li>
     <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato8.jpg"/>
    </div>
    </p>
    <ol>
        <li>в поле <strong>Сервис</strong> выберите <strong>HubEx</strong>;</li>
        <li>в поле <strong>Действие</strong> выберите вариант <strong>Новая задача</strong>;</li>
        <li>в поле <strong>Аккаунт HubEx</strong> выберите ваш аккаунт HubEx.</li>
    </ol>
      <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato9.jpg"/>
    </div>
    </p>

    <li><strong>Шаг 6:</strong> сопоставьте поля Битрикс24 и HubEx: укажите какие данные будут подставляться из сделки в
        Битрикс24 в <strong>Заявку</strong>, которая будет создана в HubEx. Пример выбора полей представлен на скриншоте.
    </li>
     <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 70%;"
             src="/attachments/images/FAQ/ADMIN/Integration/Albato10.jpg"/>
    </div>
    </p>

    <li><strong>Шаг 7:</strong> сохраните и запустите связку.</li>
</ul>

<p>По данному примеру можно настроить любой бизнес-процесс.</p>

</body>

____
- [Перейти в меню](http://wiki.hubex.ru)
