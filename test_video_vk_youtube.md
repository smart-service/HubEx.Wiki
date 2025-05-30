#### Обучающие видеоролики
В данной статье будут представлены все видео, которые могут помочь при использовании системы HubEx.

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

<div class="video-player-container">
    <div class="video-source-selector">
        <button class="source-btn active" data-source="youtube">YouTube</button>
        <button class="source-btn" data-source="vk">VK</button>
    </div>
    <div class="video-embed">
        <!-- YouTube плеер (по умолчанию видимый) -->
        <div class="video-frame youtube-frame" style="display: block;">
            <iframe src="https://www.youtube.com/embed/KZbrcQg4IKY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <!-- VK плеер (изначально скрыт) -->
        <div class="video-frame vk-frame" style="display: none;">
            <iframe src="https://vkvideo.ru/video_ext.php?oid=-187865475&id=456239118&hd=2&autoplay=1" allowfullscreen></iframe>
        </div>
    </div>
</div>

<script>
    document.querySelectorAll('.source-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            document.querySelectorAll('.source-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Скрываем все плееры
            document.querySelectorAll('.video-frame').forEach(frame => {
                frame.style.display = 'none';
            });
            
            // Показываем выбранный плеер
            const source = this.getAttribute('data-source');
            document.querySelector(`.${source}-frame`).style.display = 'block';
        });
    });
</script>

</body>
</html>
____
- [Перейти в меню](http://wiki.hubex.ru)
