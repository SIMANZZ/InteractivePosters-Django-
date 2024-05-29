document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const videoPlayer = document.getElementById('player');
    const searchInput = document.getElementById('search-input');

    // Предполагая, что у вас есть массив имен видеофайлов
    const videoNames = ['Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4',
        'АД с расщепленными полюсами.mp4', 'Асинхронный двигатель.mp4', 'Вал.mp4', 'Взаимоиндукция.mp4',
        'Вращающийся трансформатор.mp4', 'Закон электромагнитной индукции.mp4', 'Коллектор.mp4', 'Контактное кольцо.mp4',
        'Магнитная индукция.mp4', 'Магнитное поле.mp4', 'Магнитный поток.mp4', 'Напряжение.mp4', 'Обмотка.mp4',
        'Однофазные асинхронный двигетель.mp4', 'Однофазный АД.mp4',
        'Однофазный асинхронный двигатель(ЭтоИнтересно).mp4', 'Однофазный двигатель.mp4', 'Однофазный трансформатор.mp4',
        'Переменный ток.mp4', 'Подшипник.mp4', 'Постоянный ток.mp4', 'Принцип работы шагового двигателя.mp4', 'Проводимость.mp4',
        'Ротор.mp4', 'Сельсин.mp4', 'СельсинГлух.mp4', 'Сельсин(ЭтоИнтересно).mp4',
        'Сердечник.mp4', 'Сила тока.mp4', 'Синхронный двигатель.mp4', 'СКВТ.mp4', 'Соединение звездой.mp4', 'Соединение треугольником.mp4',
        'Сопротивление.mp4', 'Тахогенератор.mp4', 'Тахогенератор(ЭтоИнтересно).mp4', 'ТахогенераторГлух.mp4', 'Универсальный коллекторный.mp4',
        'Универсальный коллекторный двигатель.mp4', 'Универсальный коллекторный двигатель(ЭтоИнтересно).mp4', 'Универсальный коллекторный двигательГлух.mp4',
        'Шаговые двигатели(ЭтоИнтересно).mp4', 'Шаговый двигатель.mp4', 'Шаговый двигательГлух.mp4', 'Щетка.mp4', 'Электрическая машина.mp4', 'Электрический генератор.mp4', 'Электрический двигатель.mp4', 'Электрический ток.mp4', 'Электро-магнитная индукция.mp4'];

    // Функция для создания элементов списка видео
    function createVideoListItems(videos) {
        videoList.innerHTML = '';
        videos.forEach(videoName => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '../media/videos/' + videoName;
            link.textContent = videoName;
            listItem.appendChild(link);
            videoList.appendChild(listItem);
        });
    }

    // Изначально заполняем список видео
    createVideoListItems(videoNames);

    // Добавляем функциональность поиска
    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();
        const filteredVideos = videoNames.filter(videoName => videoName.toLowerCase().includes(searchQuery));
        createVideoListItems(filteredVideos);
    });

    // Обработчик клика на ссылке для проигрывания видео
    videoList.addEventListener('click', (event) => {
        if (event.target.href != undefined) {
            event.preventDefault();
            const videoSrc = event.target.href;
            if (videoSrc) {
                openModal();
                videoPlayer.src = videoSrc;
                videoPlayer.load(); // Загрузка видео
            }
        }
    });

    function openModal() {
        document.getElementById("video-container").style.display = 'flex';
    }

    function closeModal() {
        videoPlayer.pause();
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
