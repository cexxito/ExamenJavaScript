// let boton = document.getElementById("boton");

let capa =  document.getElementById('capa');
let boton = document.getElementById('boton');

// let altura =  div.clientHeight;
// console.log(altura);

capa.addEventListener("scroll", scrollear);

function scrollear(evento){
    if(capa.scrollTop + capa.clientHeight >= capa.scrollHeight){
        boton.addEventListener('click', () => {
            capa.style.display = 'none';
        });
    }

}
