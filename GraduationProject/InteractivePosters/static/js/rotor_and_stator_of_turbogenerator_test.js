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
        svgObject.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id)
            var answer = prompt("Введите ответ: ");
            if(Compare(answer, id)){
                svgObject.getElementById(id).style.opacity = '0.6';
                svgObject.getElementById(id).style.fill = 'green';
            }
            else{
                svgObject.getElementById(id).style.fill = 'red';
            }
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
        });
    }
});

// function Comparison(arr){
//     let AnswersArray = ["контактные кольца"];
//     let ResultsArray = [];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].toLowerCase() == AnswersArray[i]){
//             ResultsArray[i] = true;
//         }
//         else{
//             ResultsArray[i] = false;
//         }
//         console.log(ResultsArray);
//     }
//     return ResultsArray;
// }

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