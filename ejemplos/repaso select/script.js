let provincias = document.formulario.provincias;
//console.log(provincias);
let provincias2 = document.getElementById('provincias');
//console.log(provincias2);

provincias.addEventListener("click", mostrarClick);
function mostrarClick(e) {
    console.log(e.target.value);
}

provincias.addEventListener("change", mostrarCambio);
function mostrarCambio(e) {
    document.getElementById('valor').textContent += e.target.value + '; ';
}

/*for(let opcion of provincias.children) {
    opcion.addEventListener("click", mostrarClick);
}*/