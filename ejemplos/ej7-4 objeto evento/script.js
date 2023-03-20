/* Ejemplo 1 */
function escribeContenido(evento) {
    console.log(evento.target.textContent);
}

let parrafos = document.getElementById('ejemplo1').getElementsByTagName('p');
//let parrafos = document.getElementById('ejemplo1').childNodes;

for (let parrafo of parrafos) {
    parrafo.addEventListener("click", escribeContenido);
}

/* Ejemplo 2 */
function persigue(evento) {
    cartel.style.left = evento.clientX + 'px';
    cartel.style.top = evento.clientY + 'px';
}

let cartel = document.getElementById('cartel');
document.body.addEventListener("mouseover", persigue);

/* Ejemplo 3 */
function creaParrafo(evento) {
    if (evento.altKey && evento.key == 'p') {

        contador++;
        ejemplo3.appendChild(parrafoNuevo).textContent =
            `Párrafo creado nº ${contador}.`;
        // Recuerda que los elementos creados después de un evento 
        // no se recogen en el escuchador.
        // Por ello, este párrafo se sobreescribe al crearse cada vez.

    }
}

let ejemplo3 = document.getElementById('ejemplo3');
let parrafoNuevo = document.createElement('p');
let contador = 0;

document.body.addEventListener("keyup", creaParrafo);
//El evento keypress está obsoleto y
// solo funciona con teclas que representen caracteres.
