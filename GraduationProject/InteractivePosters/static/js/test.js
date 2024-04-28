fetch(resultName)
    .then(response => response.text())
    .then(svgContent => {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        document.body.insertBefore(div, document.body.firstChild);
        document.getElementById('svg1').id = 'svgObject';

        // Теперь svgObject доступен после добавления SVG в DOM
        //Обращение к SVG изображению
        const svgObject = document.getElementById('svgObject');
        console.log(svgObject);

        let mode = localStorage.getItem('mode');
        let modeName;
        if(mode == "control"){
            modeName = 'Режим контроля';
        }
        else{
            modeName = 'Режим тренировки';
        }
        document.title = modeName;
        let arr_temp = {};
        console.log(mode);

        if (svgObject) {
            svgObject.addEventListener('mouseover', function (event) {
                let id = event.target.id;
                if (id > 0 && id < n) {
                    svgObject.getElementById(id).style.cursor = 'pointer';
                }
            });
            if (mode == "training") {
                $(svgObject).click(function (event) {
                    let id = event.target.id;
                    if (id > 0 && id < n) {
                        var answer = prompt("Введите ответ:");
                        if (answer !== null && answer !== "") {
                            $.ajax({
                                type: "POST",
                                url: "/check_answer/", // Замените на URL вашего представления Django
                                headers: { "X-CSRFToken": "{{ csrf_token }}" },
                                data: {
                                    'machine_name': "Ротор и статор турбогенератора",
                                    'question_number': id, // Замените questionNumber на номер вопроса
                                    'answer': answer.toLowerCase(),
                                },
                                success: function (response) {
                                    var successResponse = response
                                    alert(successResponse.message);
                                    svgObject.getElementById(id).style.opacity = '0.6';
                                    if (successResponse.message == 'success') {
                                        svgObject.getElementById(id).style.fill = 'green';
                                    }
                                    else {
                                        svgObject.getElementById(id).style.fill = 'red';
                                    }
                                }
                            });
                        }
                    }
                });
            }
            else if (mode == "control") {
                $(svgObject).click(function (event) {
                    let id = event.target.id;
                    if (id > 0 && id < n) {
                        var answer = prompt("Введите ответ:");
                        if (answer !== null && answer !== "") {
                            $.ajax({
                                type: "POST",
                                url: "/check_answer/", // Замените на URL вашего представления Django
                                headers: { "X-CSRFToken": "{{ csrf_token }}" },
                                data: {
                                    'machine_name': "Ротор и статор турбогенератора",
                                    'question_number': id, // Замените questionNumber на номер вопроса
                                    'answer': answer.toLowerCase(),
                                },
                                success: function (response) {
                                    var successResponse = response
                                    alert(successResponse.message);
                                    console.log(arr_temp);
                                    svgObject.getElementById(id).style.opacity = '0.6';
                                    if (Object.keys(arr_temp).length == n-2) {
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
                                            svgObject.getElementById(id).style.fill = 'green';
                                        }
                                        else {
                                            svgObject.getElementById(id).style.fill = 'red';
                                        }
                                    }
                                    else {
                                        arr_temp[id] = successResponse.message;
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    })
    .catch(error => {
        console.error('Ошибка загрузки SVG:', error);
    });