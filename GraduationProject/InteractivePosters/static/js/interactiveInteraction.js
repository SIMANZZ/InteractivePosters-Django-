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
                    if (id.includes('plus')) {
                        // Находим все числа в строке с помощью регулярного выражения
                        let numbers = id.split("plus");
                        svgObject.getElementById('layer' + numbers[0]).style.opacity = '0.5';
                        svgObject.getElementById('rect' + numbers[0]).style.opacity = '0.6';
                        svgObject.getElementById('text' + numbers[0]).style.display = 'inline';
                        svgObject.getElementById('layer' + numbers[1]).style.opacity = '0.5';
                        svgObject.getElementById('rect' + numbers[1]).style.opacity = '0.6';
                        svgObject.getElementById('text' + numbers[1]).style.display = 'inline';
                    }
                    else if (id > 0 && id < n || (id.includes("_") && !id.includes("layer") && !id.includes("rect") && !id.includes("text") && !id.includes("plus") && !id.includes("_video") && !id.includes("_text"))) {
                        svgObject.getElementById('layer' + id).style.opacity = '0.5';
                        svgObject.getElementById('rect' + id).style.opacity = '0.6';
                        svgObject.getElementById('text' + id).style.display = 'inline';
                    }
                });
                svgObject.addEventListener('mouseout', function (event) {
                    let id = event.target.id
                    if (id.includes('plus')) {
                        // Находим все числа в строке с помощью регулярного выражения
                        let numbers = id.split("plus");
                        svgObject.getElementById('layer' + numbers[0]).style.opacity = '0';
                        svgObject.getElementById('rect' + numbers[0]).style.opacity = '0';
                        svgObject.getElementById('text' + numbers[0]).style.display = 'none';
                        svgObject.getElementById('layer' + numbers[1]).style.opacity = '0';
                        svgObject.getElementById('rect' + numbers[1]).style.opacity = '0';
                        svgObject.getElementById('text' + numbers[1]).style.display = 'none';
                    }
                    if (id > 0 && id < n || (id.includes("_") && !id.includes("layer") && !id.includes("rect") && !id.includes("text") && !id.includes("plus") && !id.includes("_video") && !id.includes("_text"))) {
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
                        ModalInteraction();
                        break;
                    case 'async_engine_with_short_circuited_rotor':
                        ModalInteraction();
                        break;
                    case 'async_engine_with_phase_rotor':
                        ModalInteraction();
                        break;
                    case 'short_circuited_async_engine_rotors':
                        ModalInteraction();
                        break;
                    case 'async_engine_stator':
                        ModalInteraction();
                        break;
                    case 'phase_rotor_of_an_async_engine':
                        ModalInteraction();
                        break;
                    case 'collectors':
                        ModalInteraction();
                        break;
                    case 'sync_engine_rotor':
                        ModalInteraction();
                        break;
                    case 'sync_machine':
                        ModalInteraction();
                        break;
                    case 'sync_engine':
                        ModalInteraction();
                        break;
                    case 'turbogenerator':
                        ModalInteraction();
                        break;
                    case 'DC_engine':
                        ModalInteraction();
                        break;
                    case 'DC_machine_inductor':
                        ModalInteraction();
                        break;
                    case 'armature_of_the_DC_machine':
                        ModalInteraction();
                        break;
                }
            }

            function ModalInteraction() {
                // Создаем новый элемент <video>
                const videoElement = document.createElement('video');
                const modalObject = document.getElementById('modalWindow');
                const modalContent = document.getElementById('modalContent');
                const pModal = document.createElement('p');
                const div = document.createElement('div');

                document.querySelectorAll('[btn="openModalBtn"]').forEach(element => {
                    element.addEventListener('click', function () {
                        var modalID = element.getAttribute('id');
                        console.log(modalID);
                        openModal(modalID);
                    });
                });

                let modals = document.querySelectorAll('[btn="openModalBtn"]');
                console.log(modals);

                function openModal(modalID) {
                    if (modalID.includes("_video")) {
                        div.id = "video-player";
                        modalContent.appendChild(div);
                        // Устанавливаем атрибут controls для отображения элементов управления
                        videoElement.setAttribute('controls', '');
                        // Устанавливаем идентификатор элемента
                        videoElement.id = 'player';
                        div.appendChild(videoElement);
                        videoElement.src = document.getElementById(modalID).getAttribute('name');
                        videoElement.load();
                    }
                    else if (modalID.includes("_text")) {
                        console.log(modalID);
                        // Создание элементов
                        const textDiv = document.createElement('div');
                        textDiv.id = 'text';

                        pModal.id = 'p-modal';
                        $.ajax({
                            type: "POST",
                            url: "/show_modalText/", // Замените на URL вашего представления Django
                            headers: { "X-CSRFToken": "{{ csrf_token }}" },
                            data: {
                                'name': modalID,
                            },
                            success: function (response) {
                                console.log(response);
                                pModal.innerHTML = response["message"];
                            }
                        });
                        textDiv.appendChild(pModal);

                        const fontControlsDiv = document.createElement('div');
                        fontControlsDiv.id = 'font-controls';

                        const increaseFontButton = document.createElement('button');
                        increaseFontButton.classList.add('no-hover-effect');
                        increaseFontButton.id = 'increase-font';
                        increaseFontButton.textContent = 'Увеличить текст';
                        fontControlsDiv.appendChild(increaseFontButton);

                        const decreaseFontButton = document.createElement('button');
                        decreaseFontButton.classList.add('no-hover-effect');
                        decreaseFontButton.id = 'decrease-font';
                        decreaseFontButton.textContent = 'Уменьшить текст';
                        fontControlsDiv.appendChild(decreaseFontButton);

                        // Добавление элементов в контейнер
                        modalContent.appendChild(textDiv);
                        modalContent.appendChild(fontControlsDiv);
                        modalContent.style.maxWidth = '800px'; /* Ограничение ширины для удобочитаемости */
                        modalContent.style.height = 'auto'; /* Автоматическая высота в зависимости от контента */
                        modalContent.style.overflowY = 'auto';

                        increaseFontButton.addEventListener('click', function () {
                            changeFontSize(pModal, 2); // Увеличить размер шрифта на 2px
                        });

                        decreaseFontButton.addEventListener('click', function () {
                            changeFontSize(pModal, -2); // Уменьшить размер шрифта на 2px
                        });

                        function changeFontSize(element, change) {
                            const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
                            const newSize = parseFloat(currentSize) + change;
                            element.style.fontSize = newSize + 'px';
                        }
                    }
                    modalObject.style.display = 'flex';
                }

                function closeModal() {
                    let videoPlayer = document.getElementById('player');
                    console.log(videoPlayer);
                    if (videoPlayer != null) {
                        videoPlayer.pause();
                        videoPlayer.src = "";
                    }

                    // Создаем массив из дочерних элементов, чтобы избежать изменения списка во время итерации
                    let children = Array.from(modalContent.children);

                    // Проходим по всем дочерним элементам
                    children.forEach(child => {
                        // Если это не элемент <span>, то удаляем его
                        if (child.tagName !== 'SPAN') {
                            modalContent.removeChild(child);
                        }
                    });

                    // Дополнительные действия для очистки и скрытия модального окна
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
                document.querySelectorAll('.close').forEach(function (closeButton) {
                    closeButton.addEventListener('click', function () {
                        // var modalId = closeButton.closest('.modal').id;
                        // closeModal(modalId);
                        closeModal();
                    });
                });
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки SVG:', error);
        });
});