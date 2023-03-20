var boton = document.getElementById("miBoton");
var textarea = document.getElementById("miTextarea");

boton.addEventListener("click", ()=> {
    boton.style.display = "none";
    textarea.style.display = "block";
});



function changeImage() {        
    hideAllImages()            
    showSelecteImage()
}
function hideAllImages() {
    for(i=0; i<3; i++) document.getElementById(`img${i}`).style.display = "none"
}
function showSelecteImage() {
    let index = document.getElementById("group").selectedIndex
    document.getElementById(`img${index}`).style.display = "block"
}



var input = document.getElementById("name");

		var mensajeError = document.getElementById("mensaje-error");

		input.addEventListener("input", function() {
			var regex = /^[0-9]{3}[A-Z]{4}(1|2|A)$/;
			if(!regex.test(input.value)) {
				input.classList.add("error");
				mensajeError.style.display = "block";
			} else {
				input.classList.remove("error");
				mensajeError.style.display = "none";
			}
		});

       