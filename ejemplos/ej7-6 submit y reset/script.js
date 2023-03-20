let formulario = document.forms[0];
let msg = document.getElementById('mensaje');

formulario.addEventListener('submit', mensaje);
formulario.addEventListener('reset', (e) => {
    msg.textContent = 'Se ha borrado el formulario.';
});

function mensaje(e) {
    e.preventDefault();
    msg.textContent = 'Se ha enviado el formulario.';
}