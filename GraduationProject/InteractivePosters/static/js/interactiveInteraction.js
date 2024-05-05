import { characteristicByName } from "./names_of_Machines.js";

let n;
let resultName;

let returnedCharacteristics = characteristicByName();
n = returnedCharacteristics[0];
resultName = returnedCharacteristics[1];

document.addEventListener('DOMContentLoaded', () => {
    fetch(resultName)
        .then(response => response.text())
        .then(svgContent => {
            var div = document.createElement('div');
            div.innerHTML = svgContent;
            document.body.appendChild(div);

            //Обращение к SVG изображению
            const svgObject = document.getElementById('svgObject');

            if (svgObject) {
                svgObject.addEventListener('mouseover', function (event) {
                    let id = event.target.id
                    if (id > 0 && id < n) {
                        svgObject.getElementById('layer' + id).style.opacity = '0.5';
                        svgObject.getElementById('rect' + id).style.opacity = '0.6';
                        svgObject.getElementById('text' + id).style.display = 'inline';
                    }
                });
                svgObject.addEventListener('mouseout', function (event) {
                    let id = event.target.id
                    if (id > 0 && id < n) {
                        svgObject.getElementById('layer' + id).style.opacity = '0';
                        svgObject.getElementById('rect' + id).style.opacity = '0';
                        svgObject.getElementById('text' + id).style.display = 'none';
                    }
                });
            }

            let name_of_image = returnedCharacteristics[2];
            CODE_FOR(name_of_image, svgObject);

            function CODE_FOR(name_of_image) {
                switch (name_of_image) {
                    case 'rotor_and_stator_of_turbogenerator':
                        // Создаем новый элемент <video>
                        const videoElement = document.createElement('video');
                        const modalObject = document.getElementById('modalWindow');
                        const modalContent = document.getElementById('modalContent');
                        const div = document.createElement('div');

                        document.querySelectorAll('.openModalBtn').forEach(function (button) {
                            button.addEventListener('click', function () {
                                var modalId = button.getAttribute('data-modal');
                                openModal(modalId);
                            });
                        });

                        let modals = document.querySelectorAll('.openModalBtn');
                        console.log(modals);

                        function openModal(modalID) {
                            switch (modalID) {
                                case "videoObmotka":
                                    div.id = "video-player";
                                    modalContent.appendChild(div);
                                    // Устанавливаем атрибут controls для отображения элементов управления
                                    videoElement.setAttribute('controls', '');
                                    // Устанавливаем идентификатор элемента
                                    videoElement.id = 'player';
                                    div.appendChild(videoElement);
                                    videoElement.src = '../media/videos/Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4';
                                    // videoPlayer.play();
                                    break;
                                case "obmotkaText":
                                    div.innerHTML = 'Обмотка ротора в электрической машине представляет собой проводящий элемент, который окружает ось ротора и' +
                                        'создает электромагнитное поле при прохождении через него электрического тока.';
                                    modalContent.appendChild(div);
                                    modalContent.style.maxWidth = '600px'; /* Ограничение ширины для удобочитаемости */
                                    modalContent.style.height = 'auto'; /* Автоматическая высота в зависимости от контента */
                                    modalContent.style.overflowY = 'auto';
                                    break;
                            }
                            modalObject.style.display = 'inline';
                        }

                        function closeModal() {
                            let videoPlayer = document.getElementById('player');
                            console.log(videoPlayer);
                            if (videoPlayer != null) {
                                videoPlayer.src = "";
                            }
                            // Первый дочерний элемент родительского элемента
                            let child = modalContent.firstElementChild;

                            // Проходим по всем дочерним элементам
                            while (child) {
                                // Если это не элемент <span>, то удаляем его
                                if (child.tagName !== 'SPAN') {
                                    modalContent.removeChild(child);
                                }

                                // Переходим к следующему дочернему элементу
                                child = child.nextElementSibling;
                            }
                            div.innerHTML = '';
                            div.id = '';
                            modalContent.style.cssText = '';
                            modalObject.style.display = 'none';
                        }

                        // Закрывает модальное окно при клике вне его
                        window.addEventListener('click', function (event) {
                            if (event.target.classList.contains('modal')) {
                                closeModal();
                            }
                        });

                        // Назначает обработчик события для каждой кнопки закрытия модального окна
                        document.getElementById('close-button').addEventListener('click', function () {
                            closeModal();
                        });
                        break;
                }
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки SVG:', error);
        });
});