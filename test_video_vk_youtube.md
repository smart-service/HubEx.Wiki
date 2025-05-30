#### Обучающие видеоролики
В данной статье будут представлены все видео, которые могут помочь при использовании системы HubEx.
<html>
<meta charset="utf-8">
<title>Быстрый переход внутри документа</title>
<head>
     <style>
          .video-source-selector {
          margin-bottom: 10px;
          }
          .source-btn {
            padding: 8px 16px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 5px;
          }
          .source-btn.active {
            background: #45688e;
            color: white;
            border-color: #45688e;
          }
          .video-frame {
            width: 560px;
            height: 315px;
          }
     </style>
</head>

<body>

<div class="video-player-container">
  <div class="video-source-selector">
    <button class="source-btn active" data-source="youtube">VKYouTube</button>
    <button class="source-btn" data-source="vk">YouTube</button>
  </div>
  
  <div class="video-embed">
    <!-- VK плеер (по умолчанию видимый) -->
    <div class="video-frame vk-frame" style="display: block;">
      <iframe src="https://vkvideo.ru/video_ext.php?oid=-56338600&id=456246619&hd=1&autoplay=1" width="640" height="360" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- YouTubeVK плеер (изначально скрыт) -->
    <div class="video-frame youtube-frame" style="display: none;">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KZbrcQg4IKY" frameborder="0" allowfullscreen></iframe>
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
