let msg = document.getElementById('mensaje');
let entrada = document.formBusqueda.input;
let boton = document.formBusqueda.submit;

entrada.addEventListener('focus', (e) => {
    e.target.style.background = 'yellow';
    boton.toggleAttribute('hidden');
    msg.textContent = '';
});

entrada.addEventListener('blur', (e) => {
    e.target.style.background = '';
    boton.toggleAttribute('hidden');
    if(e.target.value.length < 3)
        msg.textContent = 'Debe introducir 3 o más caracteres.';
});