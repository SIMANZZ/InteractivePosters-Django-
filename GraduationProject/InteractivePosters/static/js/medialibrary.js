document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const videoPlayer = document.getElementById('player');

    // Предполагая, что у вас есть массив имен видеофайлов
    const videoNames = ['Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];

    // Добавляем каждое видео в список
    videoNames.forEach(videoName => {
        const listItem = document.createElement('li');
        listItem.style.color = 'white';
        const link = document.createElement('a');
        link.href = '../media/videos/' + videoName;
        link.textContent = videoName;
        listItem.appendChild(link);
        videoList.appendChild(listItem);
    });

    // Обработчик клика на ссылке для проигрывания видео
    videoList.addEventListener('click', (event) => {
        openModal();
        event.preventDefault();
        const videoSrc = event.target.href;
        videoPlayer.src = videoSrc;
        videoPlayer.play();
    });

    function openModal() {
        document.getElementById("video-container").style.display = 'inline';
    }

    function closeModal() {
        videoPlayer.src = "";
        document.getElementById("video-container").style.display = 'none';
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