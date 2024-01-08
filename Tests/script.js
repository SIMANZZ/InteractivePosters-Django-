var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var video = modal.querySelector("iframe");

btn.onclick = function () {
    modal.style.display = "inline";
}

span.onclick = function () {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    
    // Сбрасываем позицию видео на начало
    video.src = video.src;

    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}