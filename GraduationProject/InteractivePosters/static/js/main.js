import {flags} from './flags.js';

document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");
    const container_first = document.querySelector('.container-first');
    const container_images = document.querySelector('.container-images');
    const container_navbar = document.querySelector('.navbar');

    // let Flags = [ACmachines_Sync = false, ACmachines_Async = false, DCmachines = false, GeneralPrincipals = false];
    console.log(flags);
    let back_button_stage = 0;

    if (container) {
        container.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id);
            if (id == '1') {
                container_first.querySelectorAll('.buttons')[0].style.display = 'flex';
            }
            else if (id == '4') {
                back_button_stage = 0;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(false);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(true);
                ShowImagesByFlags();
            }
            else if (id == '3') {
                back_button_stage = 0;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(false);
                flags.setDCmachines(true);
                flags.setGeneralPrincipals(false);
                setTimeout(ShowImagesByFlags, 0);
            }
            else if (id == '5') {
                back_button_stage = 2;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(true);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(false);
                ShowImagesByFlags();
            }
            else if (id == '6') {
                back_button_stage = 2;
                ImagesActive();
                flags.setACmachines_Sync(true);
                flags.setACmachines_Async(false);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(false);
                console.log(flags);
                ShowImagesByFlags();
            }
            else if (id == '2') {
                back_button_stage = 1;
                console.log(container_first.querySelectorAll('.buttons')[1]);
                container_first.querySelectorAll('.buttons')[1].style.display = 'flex';
            }
            else if (id == "back-button" && back_button_stage == 0) {
                console.log(id);
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
                container_navbar.style.display = 'flex';
            }
            else if (id == "back-button" && back_button_stage == 2) {
                back_button_stage = 1;
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
                container_first.querySelectorAll('.buttons')[1].style.display = 'flex';
                container_navbar.style.display = 'flex';
            }
            else if (id.startsWith('knowledge-control')) {
                const parentContainer = document.getElementById(id).parentNode;
                console.log(parentContainer);
                const forms = parentContainer.querySelectorAll('form');

                for (var i = 0; i < forms.length; i++) {
                    forms[i].style.display = 'none';
                }
                parentContainer.querySelectorAll('button')[2].style.display = 'none';

                let controlButtons = document.getElementById(id).name.split('|');
                console.log(controlButtons);

                const formsData = [
                    { buttonText: "Тренировка", action: controlButtons[0] },
                    { buttonText: "Контроль", action: controlButtons[1] },
                    { buttonText: "Назад", action: '' },
                ];
                console.log(formsData);

                let knowledgeID = extractNumber(id);

                const examContainer = document.createElement("div");
                examContainer.classList.add("exam-container");
                examContainer.id = knowledgeID;

                formsData.forEach(({ buttonText, action }) => {

                    const form = document.createElement("form");
                    form.action = action;

                    const button = document.createElement("button");
                    button.textContent = buttonText;

                    if (buttonText == "Назад") {
                        button.id = "backButton" + knowledgeID;
                        console.log(knowledgeID);
                        examContainer.appendChild(button);
                    }
                    else {
                        form.appendChild(button);
                        examContainer.appendChild(form);
                    }
                });
                parentContainer.appendChild(examContainer);
            }
            else if (id.startsWith("backButton")) {
                const parentContainer = document.getElementById(id).parentNode.parentNode;
                console.log(parentContainer);
                const forms = parentContainer.querySelectorAll('form');
                for (var i = 0; i < forms.length; i++) {
                    forms[i].style.display = 'flex';
                }
                parentContainer.querySelectorAll('button')[2].style.display = 'flex';
                const examContainer = document.getElementById(id).parentNode.remove();
            }
        });
    }

    let counter = 0;

    function createEngineItem(data) {
        const engineItem = document.createElement("div");
        engineItem.classList.add("engine-item");

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("this");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        buttonContainer.id = counter;

        const formsData = [
            { buttonText: "Общий вид", action: data.imageCommon_adress },
            { buttonText: "Интерактивный плакат", action: data.imageInteractive_adress },
            { buttonText: "Контроль знаний", action: '' }
        ];

        formsData.forEach(({ buttonText, action }) => {
            const form = document.createElement("form");
            form.action = action;

            const button = document.createElement("button");
            button.textContent = buttonText;
            if (buttonText == "Контроль знаний") {
                button.id = 'knowledge-control' + counter;
                button.name = data.trainingButton_adress + '|' + data.examButton_adress;
                buttonContainer.appendChild(button);
            }
            else {
                form.appendChild(button);
                buttonContainer.appendChild(form);
            }
        });

        counter++;

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

    function deleteEngineItem() {
        var engineItem = document.querySelectorAll('.engine-item');
        if (engineItem) {
            for (let i = 0; i < engineItem.length; i++) {
                engineItem[i].remove();
            }
        }
    }

    function ShowImagesByFlags() {
        console.log(flags);
        const engineContainer = document.querySelector(".engine-container");

        deleteEngineItem();

        if (flags.getGeneralPrincipals()) {
            GeneralPrincipalsData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (flags.getDCmachines()) {
            DCmachinesData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (flags.getACmachines_Async()) {
            ACmachinesData_Async.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (flags.getACmachines_Sync()) {
            ACmachinesData_Sync.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
    }

    function ImagesActive() {
        container_first.style.display = 'none';
        container_navbar.style.display = 'none';
        container_images.style.display = 'block';
    }

    function extractNumber(str) {
        // Используем регулярное выражение для поиска числа в строке
        var match = str.match(/\d+/);
        // Если число найдено, возвращаем его, иначе возвращаем null
        return match ? parseInt(match[0]) : null;
    }
});