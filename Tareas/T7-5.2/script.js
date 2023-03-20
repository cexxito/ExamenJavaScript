let arrastrar  = document.getElementById('incorrecto');

let destino  =  document.getElementById('droptarget');

arrastrar.addEventListener("dragstart", empezar);

destino.addEventListener("dragover", llegaDestino);

destino.addEventListener("drop", enDestino);




function empezar(event) {
    arrastrar.style.opacity = "50%";
    event.dataTransfer.setData("Text", event.target.id);
  }
  

function llegaDestino(event){
    event.preventDefault();
    destino.style.backgroundColor = "lightgreen";
}

function enDestino(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    destino.style.backgroundColor = "green";
    destino.textContent = "!Lo ha conseguido¡";
}