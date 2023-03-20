let apartado1 = document.getElementById('capa');

apartado1.onmouseover = () =>{
    
    apartado1.style.backgroundColor = 'green';
}

apartado1.onmouseout = () =>{
    
    apartado1.style.backgroundColor = 'white';
}

apartado1.addEventListener("mousedown", clickDerecho);

apartado1.oncontextmenu = () =>{
    
    apartado1.style.backgroundColor = 'yellow';
    return false;
}


function clickDerecho(evento){

    let boton = evento.button;

    if(boton == 0){

        apartado1.style.backgroundColor = 'red';

        apartado1.onmouseup = () =>{

        apartado1.style.backgroundColor = 'blue';

        }

    }

    

}
