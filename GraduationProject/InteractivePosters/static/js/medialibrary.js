document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const videoPlayer = document.getElementById('player');

    // Предполагая, что у вас есть массив имен видеофайлов
    const videoNames = ['Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4', 'video2.mp4', 'video3.mp4'];

    // Добавляем каждое видео в список
    videoNames.forEach(videoName => {
        const listItem = document.createElement('li');
        listItem.style.color = 'white';
        const link = document.createElement('a');
        link.href = path_to_video + videoName; // Укажите путь к вашим видеофайлам
        link.textContent = videoName;
        listItem.appendChild(link);
        videoList.appendChild(listItem);
    });

    // Обработчик клика на ссылке для проигрывания видео
    videoList.addEventListener('click', (event) => {
        var modalId = button.getAttribute('data-modal');
        openModal(modalId);
        event.preventDefault();
        const videoSrc = event.target.href;
        videoPlayer.src = videoSrc;
        videoPlayer.play();
    });

    function openModal(modalId) {
        if(modalId == "videoObmotka"){
            video.src = videoUrl;
        }
        else if(modalId == "obmotkaText"){
            const modalObject = document.getElementById('obmotkaText');
            modalObject.querySelector('.modal-content').style.maxWidth = '600px'; /* Ограничение ширины для удобочитаемости */
            modalObject.querySelector('.modal-content').style.height = 'auto'; /* Автоматическая высота в зависимости от контента */
            modalObject.querySelector('.modal-content').style.overflowY = 'auto'; 
        }
        document.getElementById(modalId).style.display = 'inline';
    }

    function closeModal(modalId) {
        video.src = "";
        document.getElementById(modalId).style.display = 'none';
    }

    // Закрывает модальное окно при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            var modalId = event.target.id;
            closeModal(modalId);
        }
    });

    // Назначает обработчик события для каждой кнопки закрытия модального окна
    document.querySelectorAll('.close').forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            var modalId = closeButton.closest('.modal').id;
            closeModal(modalId);
        });
    });
});