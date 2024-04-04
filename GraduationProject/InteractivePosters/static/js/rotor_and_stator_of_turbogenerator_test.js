document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');
    let arr = [];
    let ResultsArray = [];

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
                            'question_number': id+1, // Замените questionNumber на номер вопроса
                            'answer': answer
                        },
                        success: function(response) {
                            // Обработка успешного ответа от сервера
                            alert(JSON.stringify(response));
                        }
                    });
                }
            }
        });
            // let id = event.target.id;
            // console.log(id)
            // var answer = prompt("Введите ответ: ");
            // if(Compare(answer, id)){
            //     svgObject.getElementById(id).style.opacity = '0.6';
            //     svgObject.getElementById(id).style.fill = 'green';
            // }
            // else{
            //     svgObject.getElementById(id).style.fill = 'red';
            // }
            // if (id > 0 && id < 22) {
            //     var answer = prompt("Введите ответ: ");
            //     arr.push(answer);
            //     console.log(arr);
            //     if(answer != null)
            //     {
            //         alert("Ответ записан");
            //         svgObject.getElementById(id).style.display = 'none';
            //     }
            //     ResultsArray = Comparison(arr);
            //     console.log(ResultsArray);
            //     for(i = 1; i < 22; i++){
            //         svgObject.getElementById(i).style.display = 'inline';
            //     }
            //     for(i = 0; i < 21; i++){
            //         if(ResultsArray[i] == true){
            //             svgObject.getElementById('layer24').style.opacity = '0.6';
            //             svgObject.getElementById(i+1).style.fill = 'green';
            //         }
            //         else{
            //             svgObject.getElementById('layer24').style.opacity = '0.6';
            //             svgObject.getElementById(i+1).style.fill = 'red';
            //         }
            //     }
            // }
    }
});

function Compare(answer, id){
    let AnswersArray = ["контактные кольца"];
    let result;
    if(AnswersArray.includes(answer.toLowerCase())){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}