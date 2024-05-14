document.addEventListener('DOMContentLoaded', () => {

    const button_container = document.querySelector('.button-container');
    const container_images = document.querySelector('.container-images');
    const pModal = document.getElementById('p-modal');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    console.log(button_container);

    let target_letter;

    button_container.addEventListener('click', function (event) {
        let id = event.target.id;
        let elem = document.getElementById(id);
        console.log(elem);
        if (elem.tagName == 'BUTTON') {
            target_letter = id;
            console.log(target_letter);
        };

        $.ajax({
            type: "POST",
            url: "/check_symbol/",
            headers: { "X-CSRFToken": "{{ csrf_token }}" },
            data: {
                'target_letter': target_letter,
            },
            success: function (response) {
                console.log(response)

                const engineContainer = document.querySelector(".engine-container");

                deleteEngineItem();

                response.map((engineData) => {
                    const engineItem = createEngineItem(engineData);
                    engineContainer.appendChild(engineItem);
                });

                ImagesActive();
            }
        });
    });

    function createEngineItem(data) {
        const engineItem = document.createElement("div");
        engineItem.classList.add("engine-item");

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("this");

        const image = document.createElement("img");
        image.src = data.imageSrc;
        image.classList.add("main_image");
        const text_image = document.createElement("img");
        text_image.src = "../media/images/icons8-текст-100.png";
        text_image.classList.add("text_image");

        const paragraph = document.createElement("p");
        paragraph.textContent = data.name;

        innerContainer.appendChild(text_image);
        innerContainer.appendChild(image);
        engineItem.appendChild(innerContainer);
        engineItem.appendChild(paragraph);

        return engineItem;
    }

    function deleteEngineItem() {
        var engineItem = document.querySelectorAll('.engine-item');
        if (engineItem) {
            for (let i = 0; i < engineItem.length; i++) {
                engineItem[i].remove();
            }
        }
    }

    function ImagesActive() {
        button_container.style.display = 'none';
        container_images.style.display = 'flex';
    }

    container_images.addEventListener('click', function (event) {
        console.log(event.target.classList);
        if (event.target.classList[0] == 'text_image') {
            console.log('кликнули');

            // Используем event.target чтобы получить элемент, на который был совершён клик
            let target = event.target;
            target = target.parentNode.parentNode;
            console.log(target);

            // Если нашли родительский элемент с тегом DIV, внутри которого есть <p>
            if (target && target.querySelector('p')) {
                let machine_name = target.querySelector('p').innerHTML;
                console.log(machine_name);

                // Выполнение AJAX запроса
                $.ajax({
                    type: "POST",
                    url: "/show_definition/",
                    headers: { "X-CSRFToken": "{{ csrf_token }}" },
                    data: {
                        'machine_name': machine_name,
                    },
                    success: function (response) {
                        console.log(response['definition']);
                        let text_definition = response['definition'];
                        openModal(text_definition);
                    },
                    error: function (xhr, status, error) {
                        console.error("Ошибка при получении определения: ", status, error);
                    }
                });
            } else {
                console.error("Элемент с тегом <p> не найден.");
            }
        }
        else if (event.target.classList[0] == "main_image") {
            let target = event.target;
            target = target.parentNode.parentNode;
            let machine_name = target.querySelector('p').innerHTML;
            console.log(machine_name);
            $.ajax({
                type: "POST",
                url: "/category_proccessing/",
                headers: { "X-CSRFToken": "{{ csrf_token }}" },
                data: {
                    'machine_name': machine_name,
                },
                success: function (response) {
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    console.error("Ошибка: ", status, error);
                }
            });
            window.location.href = "http://127.0.0.1:8000";
        }
    });

    function openModal(text_definition) {
        console.log(text_definition);
        let textConteiner = document.getElementById("text-container");
        textConteiner.querySelector('p').innerHTML = text_definition;
        console.log(textConteiner.querySelector('p'));
        textConteiner.style.display = 'inline';
    }

    function closeModal() {
        document.getElementById("text-container").style.display = 'none';
    }

    // Закрывает модальное окно при клике вне его
    window.addEventListener('click', function (event) {
        console.log(event.target.id);
        if (event.target.id !== "increase-font" && event.target.id !== "decrease-font" && event.target.id !== "modalContent" && event.target.id !== "p-modal" && event.target.id !== "font-controls") {
            closeModal();
        }
    });

    // Назначает обработчик события для каждой кнопки закрытия модального окна
    document.querySelectorAll('.close').forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            var modalId = closeButton.closest('.modal').id;
            closeModal(modalId);
        });
    });

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
});