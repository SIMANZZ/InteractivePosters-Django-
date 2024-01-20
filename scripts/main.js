document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");
    const container_first = document.querySelector('.container-first');
    const container_images = document.querySelector('.container-images');
    const async_and_sync = document.querySelector('.AsyncAndSync');
    const engine_container = document.querySelector('.engine-container');
    const back = document.querySelector('.back');

    let Flags = [ACmachines_Sync = false, ACmachines_Async = false, DCmachines = false, GeneralPrincipals = false];
    let back_button_stage = 0;

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

    const DCmachinesData = [
        {
            name: "Двигатель постоянного тока",
            imageSrc: "images/DCmachines/Двигатель постоянного тока.jpg",
        },
        {
            name: "Индуктор машины постоянного тока",
            imageSrc: "images/DCmachines/Индуктор машины постоянного тока.jpg",
        },
        {
            name: "Коммутация якоря",
            imageSrc: "images/DCmachines/Коммутация якоря.jpg",
        },
        {
            name: "Реакция якоря",
            imageSrc: "images/DCmachines/Реакция якоря.jpg",
        },
        {
            name: "ЭДС, электромагнитный момент",
            imageSrc: "images/DCmachines/ЭДС, электромагнитный момент.jpg",
        },
        {
            name: "Якорь машины постоянного тока",
            imageSrc: "images/DCmachines/Якорь машины постоянного тока.jpg",
        },
    ];

    const ACmachinesData_Sync = [
        {
            name: "Коллекторы",
            imageSrc: "images/ACmachines/Sync/Коллекторы.jpg",
        },
        {
            name: "Ротор и статор турбогенератора",
            imageSrc: "images/ACmachines/Sync/Ротор и статор турбогенератора.jpg",
            imageCommon_adress: "rotor_and_stator_of_turbogenerator_common.html",
            imageInteractive_adress: "rotor_and_stator_of_turbogenerator_interactive.html",
            imageTest_adress: "rotor_and_stator_of_turbogenerator_test.html"
        },
        {
            name: "Ротор синхронного двигателя",
            imageSrc: "images/ACmachines/Sync/Ротор синхронного двигателя.jpg",
        },
        {
            name: "Синхронная машина",
            imageSrc: "images/ACmachines/Sync/Синхронная машина.jpg",
        },
        {
            name: "Синхронный двигатель",
            imageSrc: "images/ACmachines/Sync/Синхронный двигатель.jpg",
        },
        {
            name: "Турбогенератор",
            imageSrc: "images/ACmachines/Sync/Турбогенератор.jpg",
        },
    ];

    const ACmachinesData_Async = [
        {
            name: "Асинхронный двигатель с короткозамкнутым ротором",
            imageSrc: "images/ACmachines/Async/Асинхронный двигатель с короткозамкнутым ротором.jpg",
        },
        {
            name: "Асинхронный двигатель с фазным ротором",
            imageSrc: "images/ACmachines/Async/Асинхронный двигатель с фазным ротором.jpg",
        },
        {
            name: "Короткозамкнутые роторы асинхронного двигателя",
            imageSrc: "images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.jpg",
        },
        {
            name: "Статор асинхронного двигателя",
            imageSrc: "images/ACmachines/Async/Статор асинхронного двигателя.jpg",
        },
        {
            name: "Фазный ротор асинхронного двигателя",
            imageSrc: "images/ACmachines/Async/Фазный ротор асинхронного двигателя.jpg",
        },
    ];

    if (container) {
        container.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id);
            if (id == '1') {
                container.querySelector('.button1').style.display = 'none';
                container.querySelector(".buttons").style.display = 'flex';
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
                console.log(container_first.querySelectorAll('.buttons')[0]);
                container_first.querySelectorAll('.buttons')[0].style.display = 'none';
                console.log(container_first.querySelectorAll('.buttons')[1]);
                container_first.querySelectorAll('.buttons')[1].style.display = 'block';
            }
            else if (id == "back-button" && back_button_stage == 0) {
                console.log(id);
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
            }
            else if (id == "back-button" && back_button_stage == 1) {
                container_first.querySelectorAll('.buttons')[1].style.display = 'none';
                container_first.querySelectorAll('.buttons')[0].style.display = 'flex';
            }
            else if (id == "back-button" && back_button_stage == 2) {
                back_button_stage = 1;
                container_images.style.display = 'none';
                container_first.style.display = 'flex';
                container_first.querySelectorAll('.buttons')[1].style.display = 'block';
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
    
        const formsData = [
            { buttonText: "Общий", action: data.imageCommon_adress },
            { buttonText: "Интерактив", action: data.imageInteractive_adress },
            { buttonText: "Тест", action: data.imageTest_adress }
        ];
    
        formsData.forEach(({ buttonText, action }) => {
            const form = document.createElement("form");
            form.action = action;
    
            const button = document.createElement("button");
            button.textContent = buttonText;
    
            form.appendChild(button);
            buttonContainer.appendChild(form);
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