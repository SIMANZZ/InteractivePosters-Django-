document.addEventListener('DOMContentLoaded', () => {
    //Обращение к SVG изображению
    const svgObject = document.getElementById('svgObject');
    
    if (svgObject) {
        svgObject.addEventListener('mouseover', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                svgObject.getElementById('layer' + id).style.opacity = '0.5';
                svgObject.getElementById('rect' + id).style.opacity = '0.6';
                svgObject.getElementById('text' + id).style.display = 'inline';
            }
            else if(id == "video_obmotka"){
                svgObject.getElementById(id).style.cursor = 'pointer';
            }
        });
        svgObject.addEventListener('mouseout', function (event) {
            let id = event.target.id
            if (id > 0 && id < 22) {
                svgObject.getElementById('layer' + id).style.opacity = '0';
                svgObject.getElementById('rect' + id).style.opacity = '0';
                svgObject.getElementById('text' + id).style.display = 'none';
            }
        });
    }

    const modal = document.getElementById('myModal');

    const icon = svgObject.getElementById("video_obmotka");

    const span = document.getElementsByClassName("close")[0];

    const video = modal.querySelector("iframe");

    icon.onclick = function () {
        modal.style.display = "inline";
        video.src = "videos/Производство обмоток статоров турбогенераторов и гидрогенераторов.mp4";
    }

    span.onclick = function () {
        // Сбрасываем позицию видео на начало
        video.src = "";
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            // Сбрасываем позицию видео на начало
            video.src = "";
            modal.style.display = "none";
        }
    }
});

