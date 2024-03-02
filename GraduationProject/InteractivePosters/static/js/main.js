document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");
    const container_first = document.querySelector('.container-first');
    const container_images = document.querySelector('.container-images');

    let Flags = [ACmachines_Sync = false, ACmachines_Async = false, DCmachines = false, GeneralPrincipals = false];
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
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                Flags[0] = false, Flags[1] = false, Flags[2] = false, Flags[3] = true;
                console.log(Flags);
                ShowImagesByFlags(Flags);
            }
            else if (id == '3') {
                back_button_stage = 0;
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                Flags[2] = true, Flags[0] = false, Flags[1] = false, Flags[3] = false;
                ShowImagesByFlags(Flags);
            }
            else if (id == '5') {
                back_button_stage = 2;
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                Flags[1] = true, Flags[0] = false, Flags[2] = false, Flags[3] = false;
                ShowImagesByFlags(Flags);
            }
            else if (id == '6') {
                back_button_stage = 2;
                container_first.style.display = 'none';
                container_images.style.display = 'block';
                Flags[0] = true, Flags[1] = false, Flags[2] = false, Flags[3] = false;
                ShowImagesByFlags(Flags);
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
            }
            else if (id == "back-button" && back_button_stage == 2) {
                back_button_stage = 1;
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
                container_first.querySelectorAll('.buttons')[1].style.display = 'flex';
            }
            else if (id.startsWith('knowledge-control')) {
                const parentContainer = document.getElementById(id).parentNode;
                console.log(parentContainer);
                const forms = parentContainer.querySelectorAll('form');

                for (var i = 0; i < forms.length; i++) {
                    forms[i].style.display = 'none';
                }

                parentContainer.querySelectorAll('button')[2].style.display = 'none';

                let AllData;

                const formsData = [
                    { buttonText: "Тренировка", action: data.trainingButton_adress },
                    { buttonText: "Контроль", action: data.examButton_adress },
                ];

                formsData.forEach(({ buttonText, action }) => {
                    const form = document.createElement("form");
                    form.action = action;

                    const button = document.createElement("button");
                    button.textContent = buttonText;

                    form.appendChild(button);
                    buttonContainer.appendChild(form);
                });
                // forms[2].style.display = 'none';
                // forms[0].getElementsByTagName('button')[0].textContent = 'Тренировка';
                // forms[1].getElementsByTagName('button')[0].textContent = 'Контроль';
            }
        })
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
                buttonContainer.appendChild(button);
            }
            else{
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
            for (i = 0; i < engineItem.length; i++) {
                engineItem[i].remove();
            }
        }
    }

    function ShowImagesByFlags(Flags) {
        const engineContainer = document.querySelector(".engine-container");

        deleteEngineItem();

        if (Flags[3]) {
            GeneralPrincipalsData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (Flags[2]) {
            DCmachinesData.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (Flags[1]) {
            ACmachinesData_Async.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
        else if (Flags[0]) {
            ACmachinesData_Sync.map((engineData) => {
                const engineItem = createEngineItem(engineData);
                engineContainer.appendChild(engineItem);
            });
        }
    }
});