import {flags} from './flags.js';

document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');

    flags.setTraining(true);
    console.log(flags.getMode());

    if (svgObject) {
        svgObject.addEventListener('mouseover', function (event) {
            let id = event.target.id;
            if (id > 0 && id < 22) {
                svgObject.getElementById(id).style.cursor = 'pointer';
            }
        });
        $(svgObject).click(function (event) {
            let id = event.target.id;
            if(id > 0 && id < 22){
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
                        success: function(response) {
                            var successResponse = response
                            alert(successResponse.message);
                            svgObject.getElementById(id).style.opacity = '0.6';
                            if(successResponse.message == 'success'){
                                svgObject.getElementById(id).style.fill = 'green';
                            }
                            else{
                                svgObject.getElementById(id).style.fill = 'red';
                            }
                        }
                    });
                }
            }
        });
    }
});