document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');

    if (svgObject) {
        svgObject.addEventListener('mouseover', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                svgObject.getElementById('layer' + id).style.opacity = '0.5';
                svgObject.getElementById('rect' + id).style.opacity = '0.6';
                svgObject.getElementById('text' + id).style.display = 'inline';
            }
            else if (id == "video_obmotka") {
                svgObject.getElementById(id).style.cursor = 'pointer';
            }
        });
        svgObject.addEventListener('mouseout', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                svgObject.getElementById('layer' + id).style.opacity = '0';
                svgObject.getElementById('rect' + id).style.opacity = '0';
                svgObject.getElementById('text' + id).style.display = 'none';
            }
        });
    }

    function openModal(modalId) {
        if(modalId == "videoObmotka"){
            video.src = "videos/Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4";
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

    // Назначает обработчик события для каждой кнопки открытия модального окна
    document.querySelectorAll('.openModalBtn').forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = button.getAttribute('data-modal');
            openModal(modalId);
        });
    });

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

