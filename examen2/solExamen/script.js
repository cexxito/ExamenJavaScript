/**
 * @author Nombre Apellido <tucorreo@educa.madrid.org>
 *
 Crea un programa que:
 - Cuando un elemento sea marcado, se mostrará en la lista del carrito. 
 - Al lado de cada ítem en el carrito, aparecerá una caja con el número de unidades que podrá aumentar o disminuir, con un mínimo de 1 y un máximo de 9.
 - Si un ítem es desmarcado en la selección de productos, el ítem y los elementos asociados desaparecerán de la lista del carrito.
 - Cuando se añada, elimine o modifique la cantidad de un ítem del carrito, la cantidad total variará.
 - Todo lo anterior deberá funcionar con los ítems ya proporcionados y marcados.
 **/



//Recoje todos los input del carrito
let cantidad = document.getElementsByClassName('cantidad');
//Recoje el texto de la cantidad de productos que hay en el carrito
let total = document.getElementById('totalProductos');
//recoje los checks box de la seleccion de productos, al form le hemos puesto el id productos
let productos = document.getElementById('productos').getElementsByTagName('input');
//recojemos la etique ul donde vamos a ir añadiendo los productos chekeados
let lista = document.getElementById('carrito').getElementsByTagName('ul')[0];
//Recojemos los spans para borrar elementos
let span = document.getElementById('carrito').getElementsByClassName('borrar');

//Bucle para meter los eventos a los productos
for(let i = 0; i < productos.length; i++){
    if(productos[i].getAttribute('type') == 'checkbox'){
        productos[i].addEventListener('click',cambiarCantidad);
        productos[i].addEventListener('click',checkeado);
       
    }
}

function borrar(event){
    let id = event.target.parentElement.id.split('-')[1];
    document.getElementById('/' +id).innerHTML = document.getElementById('/' +id).textContent;
    event.target.parentElement.remove();
    document.getElementById(id).checked = false;
}

function checkeado(event){
    let id = event.target.getAttribute('id');
    //Para acceder al label de los checkbox los he puesto un id que es el mismo id del checkbox pero con una / al principio
    let label = document.getElementById('/'+id);
    if(event.target.checked){
        for(let i = 0; i < cantidad.length ; i++){
            cantidad[i].setAttribute('value', cantidad[i].value);
        }
        label.innerHTML = '<del>' + label.textContent + '</del>';
        lista.innerHTML += '<li id="li-'+ id +'">'+ label.textContent +'<input type="number" class="cantidad" min="1" max="9" placeholder="1"><span class="borrar">&#10008;</span></li>';
        for(let i = 0; i < span.length; i++){
            span[i].addEventListener('click',borrar);
        }
        //No se porque pero esto no funciona: document.getElementById('li-'+id).addEventListener('change', cambiarCantidad);
    }else{
        label.innerHTML = label.textContent;
        if(document.getElementById('li-'+id)){
           document.getElementById('li-'+id).remove();
        }
        cambiarCantidad();
    }
    //Bucle donde le añadimos el evento a los elementos li cada vez que se haga check en un checkbox
    for(let i = 0; i < cantidad.length ; i++){
        cantidad[i].addEventListener('change', cambiarCantidad);
    }
}

function cambiarCantidad(event){
    let suma = 0;
    for(let i = 0; i < cantidad.length; i++){
        if(!isNaN(parseFloat(cantidad[i].value))){
           suma = parseFloat(suma) + parseFloat(cantidad[i].value);
        }
    }
    if(suma != NaN){
        total.innerHTML = suma;
    }else{
        total.innerHTML = 0;
    }
}