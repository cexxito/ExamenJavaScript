// Escuchador de evento 'click' en el botón
document.formulario.boton.addEventListener("click", agregarOpcion);

// Variables que se usarán
let nuevaOpcion, nOpcion, capaOpciones = document.getElementById('capa-opciones');

// Asignamos escuchadores para tachar o borrar
// a cada label ya existente en las opciones
for (let opcion of capaOpciones.getElementsByTagName("label")) {
    opcion.addEventListener("mouseover", tachar);
    opcion.addEventListener("mouseout", noTachar);
    opcion.addEventListener("click", borrar);
}

// Función que añade opciones
function agregarOpcion(e) {
    e.preventDefault();
    let texto = document.getElementById('texto').value;
    if (texto) {
        nuevaOpcion = document.createElement('input');
        nuevaOpcion.type = 'radio';
        nuevaOpcion.name = 'opciones';
        capaOpciones.appendChild(nuevaOpcion);
        nOpcion = capaOpciones.getElementsByTagName('input').length;
        nuevaOpcion.id = `op${nOpcion}`;
        //nuevaOpcion.value = ``; // según consideremos

        nuevaOpcion = document.createElement('label');
        nuevaOpcion.textContent = texto;
        nuevaOpcion.htmlFor = `op${nOpcion}`;
        capaOpciones.appendChild(nuevaOpcion);
        nuevaOpcion.addEventListener("mouseover", tachar);
        nuevaOpcion.addEventListener("mouseout", noTachar);
        nuevaOpcion.addEventListener("click", borrar);

    } else document.getElementById("msgError").textContent = 'No ha introducido texto.';
}

function tachar(e) {
    // Asignamos el tachado por css al label que activa el evento
    e.target.style.textDecoration = "line-through";
}

function noTachar(e) {
    // Quitamos el tachado por css
    e.target.style.textDecoration = "none";
}

function borrar(e) {
    // Evitamos la selección a través del label
    e.preventDefault();
    // Borramos el radio asociado al label a través del atributo for
    // (que es el id del radio, según lo hemos construído)
    document.getElementById(e.target.htmlFor).remove();
    // Borramos el label
    e.target.remove();
    
    // Utilizamos un bucle para actualizar los id y for
    // de los elementos que quedan,
    // por si se ha borrado uno de en medio
    for(let pos in capaOpciones.getElementsByTagName('input')) {
        capaOpciones.getElementsByTagName('input')[pos].id = `op${parseInt(pos)+1}`;
        capaOpciones.getElementsByTagName('label')[pos].htmlFor = `op${parseInt(pos)+1}`;
    }
}
