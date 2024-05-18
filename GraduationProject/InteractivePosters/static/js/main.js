class Flags {
    constructor() {
        this.ACmachines_Sync = false;
        this.ACmachines_Async = false;
        this.DCmachines = false;
        this.GeneralPrincipals = false;
        this.training = false;
        this.control = false;
    }

    setACmachines_Sync(value) {
        this.ACmachines_Sync = value;
    }

    setACmachines_Async(value) {
        this.ACmachines_Async = value;
    }

    setDCmachines(value) {
        this.DCmachines = value;
    }

    setGeneralPrincipals(value) {
        this.GeneralPrincipals = value;
    }

    getACmachines_Sync() {
        return this.ACmachines_Sync;
    }

    getACmachines_Async() {
        return this.ACmachines_Async;
    }
    getDCmachines() {
        return this.DCmachines;
    }

    getGeneralPrincipals() {
        return this.GeneralPrincipals;
    }
}

let flags = new Flags();

document.addEventListener('DOMContentLoaded', () => {
    $.ajax({
        type: "GET",
        url: "/category_proccessing/",
        headers: { "X-CSRFToken": "{{ csrf_token }}" },
        success: function (response) {
            console.log(response);
            document.getElementById('button_ElectricMachines').click();
            switch(response.category){
                case 'Async':
                    document.getElementById('button_Async').click();
                    break;
                case 'Sync':
                    document.getElementById('button_Sync').click();
                    break;
                case 'DCmachines':
                    document.getElementById('button_DCMachines').click();
                    break;
                case 'GeneralPrincipals':
                    document.getElementById('button_GeneralPrincipals').click();
                    break;
            }
        },
        error: function (xhr, status, error) {
            console.error("Ошибка: ", status, error);
        }
    });

    const container = document.querySelector(".container");
    const container_first = document.querySelector('.container-first');
    const container_images = document.querySelector('.container-images');
    const container_navbar = document.querySelector('.navbar');

    console.log(flags);
    let back_button_stage = 0;

    if (container) {
        container.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id);
            if (id == 'button_ElectricMachines') {
                container_first.querySelectorAll('.buttons')[0].style.display = 'flex';
            }
            else if (id == 'button_GeneralPrincipals') {
                back_button_stage = 0;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(false);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(true);
                ShowImagesByFlags();
            }
            else if (id == 'button_DCMachines') {
                back_button_stage = 0;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(false);
                flags.setDCmachines(true);
                flags.setGeneralPrincipals(false);
                setTimeout(ShowImagesByFlags, 0);
            }
            else if (id == 'button_Async') {
                back_button_stage = 2;
                ImagesActive();
                flags.setACmachines_Sync(false);
                flags.setACmachines_Async(true);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(false);
                ShowImagesByFlags();
            }
            else if (id == 'button_Sync') {
                back_button_stage = 2;
                ImagesActive();
                flags.setACmachines_Sync(true);
                flags.setACmachines_Async(false);
                flags.setDCmachines(false);
                flags.setGeneralPrincipals(false);
                console.log(flags);
                ShowImagesByFlags();
            }
            else if (id == 'button_ACMachines') {
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
            else if (id == "training") {
                setMode("training");
                const parentContainer = document.getElementById(id).parentNode.parentNode;
                console.log(parentContainer);
                localStorage.setItem('svgName', parentContainer.id);
            }
            else if (id == "control") {
                setMode("control");
                const parentContainer = document.getElementById(id).parentNode.parentNode;
                console.log(parentContainer);
                localStorage.setItem('svgName', parentContainer.id);
            }
            else if (id.startsWith("common_button")) {
                localStorage.setItem('image_src', id.split('|')[1]);
            }
            else if (id.startsWith('knowledge-control')) {
                const parentContainer = document.getElementById(id).parentNode;
                console.log(parentContainer);
                const forms = parentContainer.querySelectorAll('form');

                for (var i = 0; i < forms.length; i++) {
                    forms[i].style.display = 'none';
                }
                parentContainer.querySelectorAll('button')[2].style.display = 'none';

                const formsData = [
                    { buttonText: "Тренировка", action: '/test/' },
                    { buttonText: "Контроль", action: '/test/' },
                    { buttonText: "Назад", action: '' },
                ];
                console.log(formsData);

                let knowledgeID = extractNumber(id);

                const examContainer = document.createElement("div");
                examContainer.classList.add("exam-container");
                examContainer.id = document.getElementById(id).name;

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
                        switch (buttonText) {
                            case "Тренировка":
                                button.id = "training";
                                break;
                            case "Контроль":
                                button.id = "control";
                                break;
                        }
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
                document.getElementById(id).parentNode.remove();
            }
        });
        container_images.addEventListener('submit', function(event){
            let id = event.target.id;
            if (id.startsWith("form")){
                event.preventDefault();
                let name = document.getElementById(id).name;
                console.log(name);
                localStorage.setItem('svgName', name);
                document.getElementById(id).submit();
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
            { buttonText: "Общий вид", action: '/common/' },
            { buttonText: "Интерактивный плакат", action: data.image_adress+"_interactive" },
            { buttonText: "Контроль знаний", action: '' }
        ];

        for (const { buttonText, action } of formsData) {
            if(buttonText == 'Интерактивный плакат' && action == 'none_interactive'){
                break;
            }
            const form = document.createElement("form");
            form.action = action;
            form.name = data.image_adress;
        
            const button = document.createElement("button");
            button.textContent = buttonText;
        
            if (buttonText === "Контроль знаний") {
                button.id = 'knowledge-control' + counter;
                button.name = data.image_adress;
                buttonContainer.appendChild(button);
            } else if (buttonText === "Общий вид") {
                button.id = 'common_button|' + data.imageSrc;
                form.appendChild(button);
                buttonContainer.appendChild(form);
            } else if (buttonText === "Интерактивный плакат") {
                form.id = 'form' + counter;
                button.type = "submit";
                form.appendChild(button);
                buttonContainer.appendChild(form);
            }
        }

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

    function setMode(value) {
        localStorage.setItem('mode', value);
    }
});