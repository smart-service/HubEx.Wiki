---
title: Интеграция с Telegram
description: Процесс подачи Заявок через Telegram (Телеграм) - простой и эффективный способ решения задач ваших заказчиков. Подключение Telegram к HubEx реализуется с помощью подключения Telegram-бота. Заявки будут отправляться пользователями в чат с ботом и создаваться в HubEx.
keywords:  hubex, хабекс, хубекс, хабикс
---

#### Интеграция с Telegram
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
<meta charset="utf-8">
</head>
<body>
<p>В этом разделе вы научитесь:</p>
<ul>
    <li><a href="#telegramset">Настраивать интеграцию с Telegram</a>;</li>
    <li><a href="#createtick">Подавать Заявки через Telegram-бота</a>;</li>
    <li><a href="#designbot">Устанавливать аватарку для Telegram-бота</a>.</li>
</ul>

<p>Процесс подачи <strong>Заявок</strong> через Telegram (Телеграм) - простой и эффективный способ решения задач ваших
    заказчиков.
</p>
<p>Telegram (Телеграм) - самая популярная платформа для обмена сообщениями. Поэтому автообработка заявок обладает рядом
    преимуществ:</p>
<ul>
    <li>пользователи легко смогут подавать <strong>Заявки</strong> через Telegram-бота и быть в курсе прогресса
        выполнения этих <strong>Заявок</strong>;
    </li>
    <li>интеграция поможет снизить нагрузку на персонал, например, диспетчеров, которые принимают
        <strong>Заявки</strong> по другим
        каналам связи;
    </li>
    <li>для многих пользователей Telegram понятная, простая для пользования платформа, которой они пользуются
        ежедневно.
    </li>
</ul>

<p>Прочтите подробную статью ниже или начните знакомство с темой с обучающего видеоролика <strong>Интеграция с
    Telegram</strong>.</p>
    
<div class="video-player-container" data-player-id="player31">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="vk">VK</button>
        <button class="source-btn" data-source="youtube">YouTube</button>
    </div>
    <div class="video-embed">
        <div class="video-frame youtube-frame" style="display: none;">
            <iframe src="https://www.youtube.com/embed/oLKQVUrxCYU" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-frame vk-frame" style="display: block;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239120&hd=2&autoplay=0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<h5 id="telegramset">Настройка интеграции с Telegram</h5>
<p>Подключение Telegram к HubEx реализуется с помощью подключения Telegram-бота. <strong>Заявки</strong> будут
    отправляться
    пользователями в чат с ботом и создаваться в HubEx.</p>
<p>Создать можно один или несколько Telegram-ботов, которые смогут добавить себе в Telegram ваши заказчики (для разных
    Типов заявок и разных Критичностей).</p>

<p>Для настройки интеграции с Telegram перейдите в <a
        href="https://wiki.hubex.ru/docs/FAQ/RU/admin/HowToEnterTheAdmin.html">консоль администратора</a> в меню
    <strong>Интеграция -
        Приложения
        - Telegram</strong> и нажмите кнопку <strong>Создать связку Telegram</strong>.
</p>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Telegram/Telegram0.jpg"/></div>
</p>

<p id="mybot">В открывшемся окошке вверху приведена подробная инструкция создания Telegram-бота (инструкция открывается
    и скрывается при нажатии на строку
    <strong>Как создать Telegram-бота</strong>):</p>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Telegram/Telegram01.jpg"/></div>
</p>

<ul>
    <li>откройте Telegram и по поиску найдите бота @BotFather (это главный бот в Telegram, с помощью которого можно
        зарегистрировать свой бот);
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram.jpg"/></div>
    </p>
    <li>в диалоге с @BotFather нажмите команду <strong>Запустить</strong> (<strong>Start</strong>).
        <p>Обратите внимание! Исходящие команды для @BotFather отправляются на английском языке. Входящие ответы от
            @BotFather также приходят на английском языке.</p>
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram2.jpg"/></div>
    </p>
    <li>затем введите команду <strong>/newbot</strong> для создания нового бота;</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram3.jpg"/></div>
    </p>
    <li>введите название для бота, например, <strong>Бот для сбора заявок по ремонту</strong>. Название для бота можно
        написать как на русском, так и на английском языке;
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram4.jpg"/></div>
    </p>
    <li id="botname">введите никнейм (пользовательское наименование) для бота обязательно на английском языке, чтобы его
        было легко
        найти вашим
        заказчикам (пользователям): имя может состоять из названия вашей компании, аббревиатуры и т.д. Например, для
        компании Сервис "Газ и Автоматизация" можно назвать бот SGA_Service_Bot;
        <p>Обратите внимание! Никнейм для бота обязательно должен заканчиваться словом bot.</p>
    </li>
    <li id="botlink">в ответ вы получите сообщение об успешной регистрации бота. В сообщении будет ссылка на ваш бот.
        Этой ссылкой вы можете делиться со своими заказчиками и пользователями, именно в этот бот нужно будет
        отправлять заявки;
    </li>
    <li>также в сообщении будет указан API Token - это ключ для привязки бота к HubEx, который нужно скопировать и
        указать в настройках связки в HubEx.
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram5.jpg"/></div>
    </p>
</ul>

<p>Вернемся в HubEx в настройку связки:</p>
<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Telegram/Telegram02.jpg"/></div>
</p>
<ul>
    <li>в поле <strong>Название связки</strong> укажите наименование, например, оно может быть таким же, как и название
        Telegram-бота
        (<strong>Бот для сбора заявок по ремонту</strong>);
    </li>
    <li>в поле Telegram токен вставьте скопированный API Token, который прислал в последнем сообщении @BotFather;
    </li>
    <li>в поле <strong>Тип заявки</strong> и <strong>Критичность</strong> выберите параметры, с которыми будут
        создаваться все <strong>Заявки</strong> поступающие из
        Telegram-бота. Вы можете создать разных ботов для обработки разных <strong>Типов заявок</strong> и с разным
        уровнем <strong>Критичности</strong>, если это необходимо;
    </li>
    <li>далее необходимо заполнить блок <strong>Ответы Telegram-бота</strong> - это автоматические сообщения, которые
        будут отправляться
        заказчикам (пользователям):
        <ol>
            <li id="first"><strong>Приветственное сообщение для запроса номера телефона</strong>: вы можете оставить
                шаблонный
                текст сообщения, а
                можете
                изменить его, но смысл сообщения должен сохраниться. Пользователь должен будет в ответ на это сообщение
                ввести свой номер телефона.
                <p>Номер телефона пользователя необходимо получить для проверки его регистрации в HubEx: если
                    пользователь с таким номером существует в HubEx, то <strong>Заявка</strong> будет создаваться от
                    имени существующего
                    пользователя (пользователя, который уже создан в меню HubEx <strong>Пользователи -
                        Заказчики</strong>), если такого пользователя нет, то
                    будет создан новый пользователь (пользователь будет создан в меню HubEx <strong>Пользователи -
                        Заказчики</strong>, данные ФИО будут
                    заполняться согласно тем, что указаны у этого пользователя в его Telegram).</p>
                <p>После отправки своего номера телефона пользователь сможет написать сообщение, на основании которого
                    будет создана <strong>Заявка</strong> в HubEx.</p>
            </li>
            <li id="second"><strong>Сообщение об успешности создании заявки</strong>: здесь также можно оставить шаблон
                сообщения, а
                можно ввести
                свой текст, который придет пользователю
                в чат с Telegram-ботом после создания <strong>Заявки</strong>;
            </li>
            <li id="third"><strong>Сообщение о закрытии заявки</strong>: здесь также можно оставить шаблон сообщения, а
                можно
                ввести
                свой текст,
                который будет отправлен пользователю в
                чат с Telegram-ботом после закрытия <strong>Заявки</strong>.
            </li>
        </ol>
    </li>
    <li>после заполнения всех полей необходимо нажать кнопку <strong>Сохранить</strong>.</li>
</ul>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 90%;"
         src="/attachments/images/FAQ/ADMIN/Telegram/Telegram6.jpg"/></div>
</p>

<p>В общем списке будут располагаться все подключенные боты. Включать и выключать связку можно с помощью переключателя:
    положение вправо - связка подключена, положение влево - связка выключена и <strong>Заявки</strong> не принимаются.
</p>

<p>
<div>
    <img style="margin: 0 auto; display: block; max-width: 60%;"
         src="/attachments/images/FAQ/ADMIN/Telegram/Telegram7.jpg"/></div>
</p>

<h5 id="createtick">Подача Заявок через Telegram-бота</h5>


<p>Теперь разберем, как подавать <strong>Заявки</strong> через бота, и посмотрим, как они будут создаваться в HubEx.</p>
<p>Обратите внимание! Подавать <strong>Заявки</strong> можно как через web-версию Telegram, так и через мобильную версию
    Telegram. В рамках текущей статьи будет рассмотрена подача <strong>Заявок</strong> через web-версию Telegram.
    Отличий от мобильной версии нет. </p>
<ol>
    <li>Откройте Telegram и найдите в списке чатов Telegram-бот, созданный ранее в рамках текущей инструкции. Найти бота
        можно по <a href="#botlink">ссылке</a> или по <a href="#botname">никнейму бота</a>, который задали при генерации
        бота.
        <p>При первом обращении через бота нужно нажать кнопку <strong>Запустить</strong> (или <strong>Начать</strong>,
            или <strong>Start</strong>).
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram8.jpg"/></div>
        </p>
    </li>
    <li>Перед подачей заявки пользователь получит <a href="#first">приветственное сообщение</a> с просьбой оставить
        номер
        телефона. Для этого необходимо нажать кнопку <strong>Поделиться
            контактом</strong> (или <strong>Предоставить номер телефона</strong>), тогда автоматически
        будет отправлен номер телефона, с которого пользователь обращается через Telegram.
        <p>Номер телефона необходимо передать для проверки регистрации в HubEx: если
            пользователь с таким номером существует в HubEx, то <strong>Заявка</strong> будет создаваться от
            имени существующего
            пользователя (пользователя, который уже создан в меню HubEx <strong>Пользователи - Заказчики</strong> или
            <strong>Пользователи - Сотрудники</strong>), если
            такого пользователя нет, то
            будет создан новый пользователь (данные ФИО будут
            заполняться согласно тем, что указаны у этого пользователя в его Telegram).</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram9.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram10.jpg"/></div>
        </p>
        <p>Предоставленный по кнопке контакт отобразится, как отправленное сообщение. </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram11.jpg"/></div>
        </p>
    </li>
    <li>Далее нужно написать сообщение, которое будет преобразовано в <strong>Заявку</strong> в HubEx. Рекомендуем в
        обращении указать
        наименование компании-заказчика, по возможности - наименование объекта и описать ситуацию, которую необходимо
        разрешить. Вся введенная в сообщении информация заполнится в <strong>Заявку</strong> в HubEx в поле <strong>Описание
            заявки</strong>.
        <p>После отправки сообщения с информацией по заявке, пользователю в Telegram придет <a href="#second">сообщение-подтверждение</a>
            о том, что заявка принята (<strong>Спасибо, заявка принята!</strong>).</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram12.jpg"/></div>
        </p>
        <p><strong>Заявка</strong> в HubEx будет создана по введенному сообщению с незаполненными полями <strong>Заказчик</strong>,
            <strong>Объект</strong>, <strong>Вид работ</strong> и т.д., автоматически заполняются
            только поля <strong>Тип
                заявки</strong>, <strong>Критичность</strong>, <strong>Описание заявки</strong> и
            <strong>Инициатор</strong>.
            Сотрудник вашей компании (например, диспетчер) должен будет обработать
            такие <strong>Заявки</strong> в
            web-приложении HubEx и заполнить недостающие поля самостоятельно. Обратите внимание! У созданной
            <strong>Заявки</strong> нельзя
            изменить <strong>Тип заявки</strong>, но можно изменить <strong>Критичность</strong>.</p>
        <p>Также в поле <strong>Метод подачи заявки</strong> будет указано значение <strong>Телеграм</strong>, а в поле
            <strong>Инициатор заявки</strong> указано ФИО пользователя, подавшего заявку через Telegram-бота.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram13.jpg"/></div>
        </p>
    </li>
    <li>Диспетчер или исполнитель могут ответить в web-версии HubEx или в мобильном приложении <strong>HubEx
        исполнитель</strong> в чате
        с заказчиком и уточнить детали по <strong>Заявке</strong>.
        Такой ответ придет пользователю,
        подавшему заявку через Telegram-бот, как ответ бота. Таким образом, пользователь (заказчик) сможет общаться с
        сотрудником вашей компании, уточнять детали по <strong>Заявке</strong> и получать информацию о ходе ее
        выполнения;
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram14.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram15.jpg"/></div>
        </p>
    </li>
    <li>После <a href="#second">сообщения-подтверждения</a> от бота (<strong>Спасибо, заявка принята!</strong>) все
        следующие сообщения пользователя (заказчика) в
        Telegram-бот будут
        отображаться в HubEx как сообщения в чате с заказчиком по
        созданной
        <strong>Заявке</strong>. Сообщения будут приходить в чат до момента закрытия <strong>Заявки</strong>.
        <p><strong>Обратите внимание! Нельзя создать две активных Заявки подряд!</strong></p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram16.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram17.jpg"/></div>
        </p>
    </li>
    <li>Когда <strong>Заявку</strong> переводят на стадию <strong>Закрыта</strong>, то в Telegram-бот уходит <a
            href="#third">сообщение о закрытии заявки</a> (<strong>Ваша заявка успешно выполнена! Чтобы подать новую
        заявку отправьте сообщение в чат.</strong>).
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram18.jpg"/></div>
        </p>
    </li>
    <li>Следующее сообщение после закрытия <strong>Заявки</strong>
        будет создавать новую <strong>Заявку</strong> в HubEx.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram19.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram20.jpg"/></div>
        </p>
    </li>
    <li>Файлы, прикрепленные при подаче <strong>Заявки</strong> через Telegram-бот будут отображаться в самой
        <strong>Заявке</strong> и в чате с
        заказчиком.
        Если ваш
        сотрудник (диспетчер) при ответе клиенту в чате с заказчиком приложил файл, то это
        вложение
        также
        отобразится для заказчика, как ответ от Telegram-бота.
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram21.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 100%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram22.jpg"/></div>
        </p>
        <p>Чтобы отправить файл в чат с ботом, нажмите на значок скрепки слева от строки сообщения. В появившемся окошке
            выберите файл. В мобильной версии прикрепление файлов происходит также по щелчку на значок скрепки и выбору
            файлов из мобильной галереи.</p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram23.jpg"/></div>
        </p>
        <p>
        <div>
            <img style="margin: 0 auto; display: block; max-width: 60%;"
                 src="/attachments/images/FAQ/ADMIN/Telegram/Telegram24.jpg"/></div>
        </p>
    </li>
</ol>
<p>Повторим еще раз основные моменты при подаче <strong>Заявок</strong> через Telegram-бота:</p>
<ul>
    <li>при отправке пользователем первого сообщения (после передачи номера телефона) автоматически в HubEx создается
        новая <strong>Заявка</strong> с
        <strong>Типом заявки</strong> и <strong>Критичностью</strong>, указанными в настройках связки;
    </li>
    <li>следующие сообщения пользователя в Telegram-бот будут отображаться в HubEx как сообщения в чате с заказчиком по
        созданной
        <strong>Заявке</strong>. Сообщения будут приходить в чат до момента закрытия <strong>Заявки</strong>. Следующее
        сообщение после закрытия <strong>Заявки</strong>
        будет создавать новую <strong>Заявку</strong> в HubEx;
    </li>
    <li>новая <strong>Заявка</strong> может быть создана через Telegram-бот только тогда, когда предыдущая <strong>Заявка</strong>
        была закрыта и пользователь получил <a href="#third">сообщение о закрытии заявки</a> (<strong>Ваша заявка
            успешно выполнена! Чтобы подать новую заявку отправьте сообщение в чат.</strong>);
    </li>
    <li>сотрудник в web-приложении HubEx может ответить в чате с заказчиком, такой ответ придет пользователю,
        подавшему заявку через Telegram-бот, как ответ бота. Таким образом, пользователь (заказчик) сможет общаться с
        сотрудником вашей компании, уточнять детали по <strong>Заявке</strong> и получать информацию о ходе ее
        выполнения;
    </li>
    <li><strong>Заявка</strong> в HubEx создается с незаполненными полями <strong>Заказчик</strong>,
        <strong>Объект</strong>, <strong>Вид работ</strong> и т.д., автоматически заполняются
        только поля <strong>Тип
            заявки</strong>, <strong>Критичность</strong>, <strong>Описание заявки</strong> и <strong>Инициатор</strong>.
        Сотрудник вашей компании (например, диспетчер) обрабатывает
        такие <strong>Заявки</strong> в
        web-приложении HubEx и заполняет недостающие поля самостоятельно. Обратите внимание! У созданной
        <strong>Заявки</strong> нельзя
        изменить <strong>Тип заявки</strong>, но можно изменить <strong>Критичность</strong>;
    </li>
    <li>файлы, прикрепленные при подаче <strong>Заявки</strong> через Telegram-бот будут отображаться в самой <strong>Заявке</strong>
        и в чате с
        заказчиком. Если ваш сотрудник (диспетчер) при ответе клиенту в чате с заказчиком приложил файл, то это вложение
        также
        отобразится для заказчика, как ответ от Telegram-бота.
    </li>

</ul>

<h5 id="designbot">Установка аватарки для Telegram-бота</h5>
<p>Для своего Telegram-бота, который вы создали в рамках <a href="#mybot">первого пункта текущей инструкции</a>, можно
    установить аватарку. Аватарка будет также отличать ваш бот среди чатов в Телеграм. </p>
<p>Чтобы установить аватарку для бота, выполните следующие действия:</p>

<ul>
    <li>откройте Telegram, перейдите в диалог с ботом, которого создали для сбора <strong>Заявок</strong> (в нашей инструкции это <strong>Бот для
        сбора заявок по ремонту</strong>);
    </li>
    <li>нажмите на контекстное меню (три точки) в верхнем правом углу и выберите команду <strong>Manage bot</strong>;</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram25.jpg"/></div>
    </p>
    <li>щелкните по значку с фотоаппаратом (слева от наименования);</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram26.jpg"/></div>
    </p>
    <li>нажмите на пункт меню <strong>Выбрать фотографию</strong>;</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram27.jpg"/></div>
    </p>
    <li>в открывшемся диалоговом окне выберите ваш логотип (в диалоговом окне вы выбираете логотип из файловой системы вашего компьютера);
    </li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram28.jpg"/></div>
    </p>
    <p>Обратите внимание! Telegram обрезает аватарки по форме круга, поэтому лучше использовать логотипы квадратного формата (.jpg, .png).</p>
    <li>в окне редактирования вы можете подвигать рамку для выбора и затем нажать кнопку <strong>Установить фотографию</strong>;</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram29.jpg"/></div>
    </p>
    <li>в окошке редактирования бота проверьте, что логотип установился и нажмите кнопку <strong>Сохранить</strong>.</li>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram30.jpg"/></div>
    </p>
    <p>Таким образом, можно установить ваш логотип в качестве аватарки для бота.</p>
    <p>
    <div>
        <img style="margin: 0 auto; display: block; max-width: 60%;"
             src="/attachments/images/FAQ/ADMIN/Telegram/Telegram31.jpg"/></div>
    </p>
</ul>

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

____
- [Перейти в меню](http://wiki.hubex.ru)
