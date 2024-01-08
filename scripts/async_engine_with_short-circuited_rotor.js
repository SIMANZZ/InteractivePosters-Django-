document.addEventListener('DOMContentLoaded', () => {

    const svgObject = document.getElementById('svgObject');

    if(svgObject){
        svgObject.addEventListener('mouseover',function(event){
            let id = event.target.id
            console.log(id)
            if(id){
                svgObject.getElementById('layer'+id).style.opacity = '0.5';
                svgObject.getElementById('rect'+id).style.opacity = '0.6';
                svgObject.getElementById('text'+id).style.opacity = '1';
            }
        });
        svgObject.addEventListener('mouseout',function(event){
            let id = event.target.id
            console.log(id)
            if(id){
                svgObject.getElementById('layer'+id).style.opacity = '0';
                svgObject.getElementById('rect'+id).style.opacity = '0';
                svgObject.getElementById('text'+id).style.opacity = '0';
            }
        });
    }
});

