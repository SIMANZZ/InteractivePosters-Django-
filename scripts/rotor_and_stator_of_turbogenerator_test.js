document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');
    let arr = [];

    if (svgObject) {
        svgObject.addEventListener('mouseover', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                svgObject.getElementById(id).style.cursor = 'pointer';
            }
        });
        svgObject.addEventListener('click', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                var answer = prompt("Введите ответ: ");
                arr.push(answer);
                alert("Ответ записан");
                console.log(arr);
            }
        });
    }
});