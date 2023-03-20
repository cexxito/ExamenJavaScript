
let h = 10;
let w = 10;

document.addEventListener("keydown", cambioTamaño);




function cambioTamaño(evento){

    let cuadro = document.getElementById('capa');

    let tecla = evento.key;

    if(tecla == "ArrowDown"){
        if(h == 100){
            alert("Has alcanzado la altura maxima");
        }else{
            h = h+10;
            cuadro.style.height = h+"%";
            
        }
    } 
    
    if(tecla == "ArrowUp"){
        if(h == 10){
            alert("Has alcanzado la altura minima");
        }else{
            h = h-10;
            cuadro.style.height = h+"%";
            
        }
    } 
    
    if(tecla == "ArrowLeft"){
        if(w == 10){
            alert("Has alcanzado la anchura minima");
        }else{
            w = w-10;
            cuadro.style.width = w+"%";
            
        }
    }

    if(tecla == "ArrowRight"){
        if(w == 100){
            alert("Has alcanzado la anchura maxima");
        }else{
            w = w+10;
            cuadro.style.width = w+"%";
            
        }
    }
}