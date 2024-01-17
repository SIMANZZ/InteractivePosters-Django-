document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");
    const container_first = document.querySelector('.container-first');
    const container_images = document.querySelector('.container-images');
    const engine_container = document.querySelector('.engine-container');
    const back = document.querySelector('.back');

    let Flags = [ACmachines = false, DCmachines = false, GeneralPrincipals = false];
    let counters = [0, 0, 0];

    const GeneralPrincipalsData = [
        {
            name: "Крепление электрических машин",
            imageSrc: "images/GeneralPrincipals/Крепление электрических машин.jpg",
        },
        {
            name: "Охлаждение электрических машин",
            imageSrc: "images/GeneralPrincipals/Охлаждение электрических машин.jpg",
        },
        {
            name: "Преобразование энергии в электрическом генераторе",
            imageSrc: "images/GeneralPrincipals/Преобразование энергии в электрическом генераторе.jpg",
        },
        {
            name: "Преобразование энергии в электродвигателе",
            imageSrc: "images/GeneralPrincipals/Преобразование энергии в электродвигателе.jpg",
        },
    ];

    const ACmachinesData = {
        {
            name: "Крепление электрических машин",
            imageSrc: "images/GeneralPrincipals/Крепление электрических машин.jpg",
        },
        {
            name: "Охлаждение электрических машин",
            imageSrc: "images/GeneralPrincipals/Охлаждение электрических машин.jpg",
        },
        {
            name: "Преобразование энергии в электрическом генераторе",
            imageSrc: "images/GeneralPrincipals/Преобразование энергии в электрическом генераторе.jpg",
        },
        {
            name: "Преобразование энергии в электродвигателе",
            imageSrc: "images/GeneralPrincipals/Преобразование энергии в электродвигателе.jpg",
        },
    }

    if (container) {
        container.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id);
            if (id == '1') {
                container.querySelector('.button1').style.display = 'none';
                container.querySelector(".buttons").style.display = 'flex';
            }
            else if (id == '4') {
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                console.log(counters);
                if (counters[2] == 0) {
                    Flags[2] = true;
                    console.log(Flags);
                    ShowImagesByFlags(Flags);
                    counters[2] = 1;
                }
            }
            else if (id == '3') {
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                if (counters[1] == 0) {
                    Flags[1] = true;
                    ShowImagesByFlags(Flags);
                    counters[1] = 1;
                }
            }
            else if (id == "back-button") {
                console.log(id);
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
            }
        })
    }

    function createEngineItem(data) {
        const engineItem = document.createElement("div");
        engineItem.classList.add("engine-item");

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("this");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        ["Общий", "Интерактив", "Тест"].map((buttonName) => {
            const button = document.createElement("button");
            button.textContent = buttonName;
            buttonContainer.appendChild(button);
        });

        const image = document.createElement("img");
        image.src = data.imageSrc;

        const paragraph = document.createElement("p");
        paragraph.textContent = data.name;

        innerContainer.appendChild(buttonContainer);
        innerContainer.appendChild(image);
        engineItem.appendChild(innerContainer);
        engineItem.appendChild(paragraph);


        return engineItem;
    }

    function ShowImagesByFlags(Flags) {
        const engineContainer = document.querySelector(".engine-container");

        if (Flags[2]) {
            GeneralPrincipalsData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (Flags[1]) {
            ACmachinesData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (Flags[0]) {
            DCmachinesData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
    }
});