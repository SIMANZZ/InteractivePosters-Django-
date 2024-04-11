document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');

    let mode = localStorage.getItem('mode');
    let arr_temp = {};
    console.log(mode);

    if (svgObject) {
        svgObject.addEventListener('mouseover', function (event) {
            let id = event.target.id;
            if (id > 0 && id < 22) {
                svgObject.getElementById(id).style.cursor = 'pointer';
            }
        });
        if (mode == "training") {
            $(svgObject).click(function (event) {
                let id = event.target.id;
                if (id > 0 && id < 22) {
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
                if (id > 0 && id < 22) {
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
                                if (Object.keys(arr_temp).length == 20) {
                                    // Итерируемся по свойствам словаря
                                    for (var key in arr_temp) {
                                        // Проверяем, является ли свойство собственным свойством объекта (не унаследованным)
                                        if (arr_temp.hasOwnProperty(key)) {
                                            // Выводим ключ и значение каждого элемента
                                            if(arr_temp[key] == "success"){
                                                svgObject.getElementById(key).style.fill = 'green';
                                            }
                                            else{
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
});