/**
 * @author César Salvatierra <cesar.salvatierra@educa.madrid.org>
 *
 Crea una aplicación con HTML, CSS y JavaScript en la que el usuario pueda ingresar, tachar y eliminar artículos a una lista de la compra.

 - El usuario podrá escribir el artículo que quiera añadir en un cuadro de texto (input). 
 - Al pulsar un botón de añadir, el artículo escrito aparecerá al final de una lista (un artículo por línea), asociada a una caja de verificación (checkbox).
 - Cada ítem de la lista tendrá su propio identificador, dado por el orden de la tarea en el conjunto de seleccionables.
 - Si el checkbox de un ítem se selecciona, el texto del artículo aparecerá tachado.
 - Si se pasa el ratón por encima de un artículo (no del checkbox), aparecerá al lado un icono de eliminar. Si el ratón sale del artículo, el icono desaparecerá.
 - Si se pulsa sobre el icono de eliminar, la tarea, la papelera y el checkbox asociado se borrarán.

¡Cuidado!

- Dos tareas no deben tener el mismo id. Tenlo en cuenta a la hora de borrar ítems.
- Para poder pulsar sobre el icono de eliminar, este no debe desaparecer mientras el ratón esté encima. Te recomiendo que el nodo que contenga la papelera sea hijo del nodo que contenga el texto del artículo.
 **/



 // Selecciona los elementos del HTML que vamos a necesitar para realizar los objetivos
 const botonAgregar = document.getElementById('añadir');//el botón
 const lista = document.getElementById('items');//el div donde irán los checkbox
 const productoNuevo = document.getElementById('elementoNuevo');//el input donde escrbimos el nuevo producto
 let contador = 1;

 

 // Fuen esta funcion, añadimos el elemento a la lista, lo tachamos si se selecciona, hacemos que aparezca la X, y si la clickamos se borra el elemento de la lista
 function agregarProducto() {

    //obtenemos el valor del input
    const valorInput = productoNuevo.value.trim();

    if (valorInput === '') {
        //si esta vacio, avisa por un alert y no deja añadir nada
        alert('No hay ningún artículo para añadir');
    }else{//si el input no esta vacio

     // Crear un nuevo elemento li para añadirlo a la lista
     const nuevoLista = document.createElement('li');
     
     // Creamos el elemento checkbox
     const nuevoCheckbox = document.createElement('input');
     nuevoCheckbox.type = 'checkbox';
     nuevoCheckbox.value = productoNuevo.value;//le damos el value del input donde hemos escrito o que querenis que aparezac
     nuevoCheckbox.id = 'item' + contador;//le damos un identificador unico
     nuevoLista.appendChild(nuevoCheckbox);//lo añadimos al elemento li
     
     // Creamos un nuevo elemento label
     const nuevoLabel = document.createElement('label');
     nuevoLabel.htmlFor = nuevoCheckbox.id;
     nuevoLabel.textContent = productoNuevo.value;//le damos como contenido al texto lo que pusimos en el input

    // vamos a crear el elemento para que aparezca la X
    const iconX = document.createElement('span');
    iconX.classList.add('icono-x');
    iconX.innerHTML = '&#10008;';//para que salga el mismo icono que en el ejemplo
    iconX.style.color = 'red'; //para darle el color rojo


    iconX.addEventListener('click', function() {
        nuevoCheckbox.checked = true;
    });
    nuevoLabel.appendChild(iconX);

    iconX.addEventListener('click', function() {
        nuevoLista.remove();
    });

    //Añadir el evento mouseover al label para que al pasar por encima se muestre el icono de la X
    nuevoLabel.addEventListener('mouseover', function() {
        iconX.style.display = 'inline';
    });

    //Añadir el evento mouseover al label para que al pasar dejar de por encima desaparezca el icono de la X
    nuevoLabel.addEventListener('mouseout', function() {
        iconX.style.display = 'none';
    });

    //le añadimos el texto del input despues de la checkbox creada
     nuevoLista.appendChild(nuevoLabel);
     
     // insertamos el nuevo elemento, con su checkbo y su icono en la lista
     lista.appendChild(nuevoLista);
     
     // vaciamos el input
     productoNuevo.value = '';

     //pata poner el siguiente id 
     contador++;

     //con este evento, si el checkbox se selecciona, el elemento se tacha
     nuevoCheckbox.addEventListener('click', function() {
        if (this.checked) {
            nuevoLabel.style.textDecoration = 'line-through';
        } else {
            nuevoLabel.style.textDecoration = 'none';
        }
    });
 }
}


 //añadimos el evento y la funcion al boton para que todo funciones
 botonAgregar.addEventListener('click', agregarProducto);