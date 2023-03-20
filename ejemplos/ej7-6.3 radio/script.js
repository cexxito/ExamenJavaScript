let boton = document.formulario.boton;

boton.addEventListener('click', mostrarValor);

function mostrarValor(e) {
    for(let modulo of document.formulario.modulos) {
        if(modulo.checked) {
            alert(modulo.value)
            break;
        }
    }
}