import { characteristicByName } from "./names_of_Machines.js";

let n;
let resultName;

let returnedCharacteristics = characteristicByName();
n = returnedCharacteristics[0];
resultName = returnedCharacteristics[1];

console.log(resultName);
const fileName = resultName.match(/[^/]+$/)[0].replace('.svg', '');
console.log(fileName);

fetch(resultName)
    .then(response => response.text())
    .then(svgContent => {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        document.body.insertBefore(div, document.body.firstChild);

        // Теперь svgObject доступен после добавления SVG в DOM
        //Обращение к SVG изображению
        const svgObject = document.getElementById('svgObject');
        console.log(svgObject);

        let mode = localStorage.getItem('mode');
        let modeName;
        if (mode == "control") {
            modeName = 'Режим контроля';
        }
        else {
            modeName = 'Режим тренировки';
        }
        document.title = modeName;
        let arr_temp = {};
        console.log(mode);

        if (svgObject) {
            svgObject.addEventListener('mouseover', function (event) {
                let id = event.target.id;
                if (id > 0 && id < n || id.includes('plus') || (id.includes("_") && !id.includes("_video") && !id.includes("_text"))) {
                    if (mode == "control" && canAddKey(arr_temp, id)) {
                        svgObject.getElementById(id).style.cursor = 'pointer';
                    }
                    else if (mode == "training") {
                        svgObject.getElementById(id).style.cursor = 'pointer';
                    }
                    else {
                        svgObject.getElementById(id).style.cursor = 'default';
                    }
                }
            });
            if (mode == "training") {
                $(svgObject).click(async function (event) {
                    let id = event.target.id;
                    if (id > 0 && id < n || id.includes('plus') || (id.includes("_") && !id.includes("_video") && !id.includes("_text"))) {
                        let temp_id = id;
                        if (id.includes('plus')) {
                            id = id.match(/\d+/g)[0];
                            console.log(id);
                        }
                        // var answer = prompt("Введите ответ:");
                        var answer = await openCustomPrompt();
                        console.log("User input:", answer);
                        if (answer !== null && answer !== "") {
                            $.ajax({
                                type: "POST",
                                url: "/check_answer/", // Замените на URL вашего представления Django
                                headers: { "X-CSRFToken": "{{ csrf_token }}" },
                                data: {
                                    'machine_name': fileName,
                                    'question_number': id, // Замените questionNumber на номер вопроса
                                    'answer': answer.toLowerCase(),
                                },
                                success: function (response) {
                                    console.log(temp_id);
                                    var successResponse = response
                                    svgObject.getElementById(temp_id).style.opacity = '0.6';
                                    if (successResponse.message == 'success') {
                                        svgObject.getElementById(temp_id).style.fill = 'green';
                                    }
                                    else {
                                        svgObject.getElementById(temp_id).style.fill = 'red';
                                    }
                                }
                            });
                        }
                    }
                });
            }
            else if (mode == "control") {
                $(svgObject).click(async function (event) {
                    let id = event.target.id;
                    if ((id > 0 && id < n || id.includes('plus') || (id.includes("_") && !id.includes("_video") && !id.includes("_text"))) && canAddKey(arr_temp, id)) {
                        let temp_id = id;
                        if (id.includes('plus') || id.includes("_")) {
                            id = id.match(/\d+/g)[0];
                            console.log(id);
                        }
                        // var answer = prompt("Введите ответ:");
                        var answer = await openCustomPrompt();
                        console.log("User input:", answer);
                        if (answer !== null && answer !== "") {
                            $.ajax({
                                type: "POST",
                                url: "/check_answer/", // Замените на URL вашего представления Django
                                headers: { "X-CSRFToken": "{{ csrf_token }}" },
                                data: {
                                    'machine_name': fileName,
                                    'question_number': id, // Замените questionNumber на номер вопроса
                                    'answer': answer.toLowerCase(),
                                },
                                success: function (response) {
                                    console.log(temp_id);
                                    var successResponse = response
                                    console.log(arr_temp);
                                    svgObject.getElementById(temp_id).style.opacity = '0.6';
                                    if (Object.keys(arr_temp).length == n - 2) {
                                        // Итерируемся по свойствам словаря
                                        for (var key in arr_temp) {
                                            // Проверяем, является ли свойство собственным свойством объекта (не унаследованным)
                                            if (arr_temp.hasOwnProperty(key)) {
                                                // Выводим ключ и значение каждого элемента
                                                if (arr_temp[key] == "success") {
                                                    svgObject.getElementById(key).style.fill = 'green';
                                                }
                                                else {
                                                    svgObject.getElementById(key).style.fill = 'red';
                                                }
                                            }
                                        }
                                        if (successResponse.message == 'success') {
                                            svgObject.getElementById(temp_id).style.fill = 'green';
                                        }
                                        else {
                                            svgObject.getElementById(temp_id).style.fill = 'red';
                                        }
                                    }
                                    else {
                                        arr_temp[temp_id] = successResponse.message;
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
        function openCustomPrompt() {
            return new Promise((resolve) => {
                var modal = document.getElementById("customPrompt");
                var closeBtn = document.querySelector(".close");
                var submitBtn = document.getElementById("submitPrompt");
                var inputField = document.getElementById("promptInput");

                modal.style.display = "block";

                closeBtn.onclick = function () {
                    modal.style.display = "none";
                    resolve(""); // Возвращает пустую строку, если окно закрыто
                }
                submitBtn.onclick = function () {
                    var answer = inputField.value;
                    modal.style.display = "none";
                    inputField.value = "";
                    resolve(answer); // Возвращает введенное значение
                }
            });
        }
        // Функция для проверки, можно ли добавить новый ключ
        function canAddKey(dict, newKey) {
            // Если новый ключ содержит "plus"
            if (newKey.includes('plus')) {
                let newParts = newKey.split('plus').sort();
                for (let key in dict) {
                    if (key.includes('plus')) {
                        let existingParts = key.split('plus').sort();
                        if (existingParts.toString() === newParts.toString()) {
                            return false;
                        }
                    }
                }
            } else {
                // Новый ключ без "plus"
                let parts = newKey.split('_');
                if (parts.length === 1) {
                    // Для ключей без "_"
                    if (dict.hasOwnProperty(newKey)) {
                        return false;
                    }
                } else {
                    // Для ключей с "_"
                    let prefix = parts[0];
                    for (let key in dict) {
                        if (key.startsWith(prefix + '_') || key === prefix) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    })
    .catch(error => {
        console.error('Ошибка загрузки SVG:', error);
    });