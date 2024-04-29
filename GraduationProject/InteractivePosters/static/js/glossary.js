document.addEventListener('DOMContentLoaded', () => {

    const button_container = document.querySelector('.button-container');
    const container_images = document.querySelector('.container-images');
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

    let counter = 0;

    function createEngineItem(data) {
        const engineItem = document.createElement("div");
        engineItem.classList.add("engine-item");

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("this");

        const image = document.createElement("img");
        image.src = data.imageSrc;

        const paragraph = document.createElement("p");
        paragraph.textContent = data.name;

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
});