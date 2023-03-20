/**
 * @author Nombre Apellido <tucorreo@educa.madrid.org>
 *
 Crea un programa que:
 - Cuando un elemento sea marcado, se mostrará en la lista del carrito. 
 - Al lado de cada ítem en el carrito, aparecerá una caja con el número de unidades que podrá aumentar o disminuir, con un mínimo de 1 y un máximo de 0.
 - Si un ítem es desmarcado en la selección de productos, el ítem y los elementos asociados desaparecerán de la lista del carrito.
 - Cuando se añada, elimine o modifique la cantidad de un ítem del carrito, la cantidad total variará.
 - Todo lo anterior deberá funcionar con los ítems ya proporcionados y marcados.
 **/


 //recogemos los elementos que vamos a necesitar
let cantidades = document.getElementsByClassName('cantidad');//este le creamos y usamos luego

let productos = document.getElementById('formulario').getElementsByTagName('input');//recogemos el formulario, con todos los checkbox

let carrito = document.getElementById('carrito').getElementsByTagName('ul')[0];//recogemos el carrito, con el elemento de lista desordenada, donde aparecera lo que clickemos

let total = document.getElementById('totalProductos');//donde se va a eflejar el total de los productos

//hacemos un bucle para recorrer donde tenemos los checkbox, uno por uno, y ejecutar a cada uno de ellos los eventos
for(let i = 0; i < productos.length; i++){
    if(productos[i].getAttribute('type') == 'checkbox'){//verificamos que lo que existen son checkbox
        productos[i].addEventListener('click', añadirLista);//para añadir los checkbox a la lista
        productos[i].addEventListener('click', sumarCantidad);//para sumar las cantidades
    }
}

//funcion para añadir los checkbox a la lista
function añadirLista(e){
    let id = e.target.getAttribute('id');//recogemos el id de nuestro checkbox

    if(e.target.checked){//si esta clickado
        let listaNuevo = document.createElement('li');//creamos un elemento li(lista)

        listaNuevo.id = 'li-'+id;//le damos un id, q sera li- y el id de nuestro checkbox

        let label = document.createElement('label');//creamos un label
        label.textContent = e.target.value;//su xontenido de texto sera el valor del checkbox que hayamos clickado
        label.id = '/'+id;//le damos un id, q sera una / y el id del checkbox clickado

        let cantidades = document.createElement('input');//creamos un input
        cantidades.type = 'number';//de tipo numero( caja para subir y bajar numeros)
        cantidades.min = 1;//su minimo sera 1
        cantidades.max = 9;//y su maximo 9
        cantidades.classList.add("cantidad");//le damos la clase cantidad al checkbox para usarlo despues

        listaNuevo.appendChild(label);//le añadimos a la lista primero el label
        listaNuevo.appendChild(cantidades);// y luego el input de tipo number

        if(e.target.checked){//si el checkbox esta clickado
            carrito.appendChild(listaNuevo);//lo añadimos al carrito
        }
    }else{//si el checkbox no esta clickado, o se vuelve a clickar para dejar de tenerlo seleccionado

        document.getElementById('li-'+id).remove();//lo recogemos por el id, y lo eliminamos en el carrito
        sumarCantidad();//para modificar el total
    }

    
    for(let i = 0; i < cantidades.length ; i++){
        cantidades[i].addEventListener('change', sumarCantidad);//añadimos a cada elemento del carrito el evento para sumar cantidades
    }


}

//NO FUNCIONA
//funcion para sumar cantidades
function sumarCantidad(e){
    let cantidadTotal = 0;//recogeremos el total aqui

    for(let i=0;i<cantidades.length;i++){//recorremos la  ariable q guarda todos los elementos del carrito por su clase(variable recogida al principio del programa)
        cantidadTotal += parseInt(cantidades[i].value);//lo sumamos y lo almacenamos en la variable de antes
    }

    total.innerHTML = cantidadTotal;//lo mostramos en el html

}


