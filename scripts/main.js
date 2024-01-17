document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");

    if (container) {
        container.addEventListener('click', function (event) {
            let id = event.target.id;
            console.log(id);
            if (id == '1') {
                container.querySelector('.button1').style.display = 'none';
                container.querySelector(".buttons").style.display = 'flex';
            }
        })
    }
});