let select = document.getElementById('modulos');

select.addEventListener("click", mostrarValor);
select.addEventListener("change", mostrarNuevoValor);

function mostrarValor(e) {
    console.log('Al hacer click: ' + e.target.value);
}
function mostrarNuevoValor(e) {
    console.log('Al cambiar: ' + e.target.value);
    document.getElementById('valor').textContent = e.target.value;
}