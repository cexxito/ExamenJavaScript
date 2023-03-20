/**
 * @author Nombre Apellido <tucorreo@educa.madrid.org>
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

//--------------------------------------------------------------------------------------------------------------------------------------//

//Capturo el botón que envía la información:
let boton_añadir=document.getElementById('añadir');
//Capturo el div items que es donde irá la lista:
let items=document.getElementById('items');

//Vamos a crear un escuchador de eventos donde al pulsar el botón añadir añado un nuevo elemento a la lista:
boton_añadir.addEventListener('click',añadirElemento);

//Desarrollo de la función:
function añadirElemento(e){
    //Capturamos el valor del input donde introduciremos cada item de la lista:
    let input_elemento=document.getElementById('input_elemento').value;
    
    //Contamos número de divs cada vez que pulsemos botón de enviar para luego asignar correctamente las id's
    //Vamos a crear un div donde posteriormente irá dentro nuestro label e input type checkbox:
    let div=document.createElement('div');
    let n_divs=items.getElementsByTagName('div').length;
    div.id=`articulo${n_divs+1}`;

    let label=document.createElement('label');
    //Vamos a hacer un proceso similar para crear el label y el input type checkbox:
    let checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.value="";
    //Usaremos el número de divs que hay dentro de la lista items para también asignar los id's
    checkbox.id=`item${n_divs+1}`;

    label.for=`item${n_divs+1}`;
    label.innerHTML=input_elemento;

    //Añadimos todos los elementos creados a la lista:
    items.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(label);
    

    //Vamos a añadir a nuesto input checkbox un escuchador de ejemplos en el que cada vez que cliquemos sobre él, el label asociado se tachará:
    checkbox.addEventListener('change',tacharItem);
    function tacharItem(e){
        //Propiedad checked-->Verifica si el checkbox está seleccionado o no
        if (this.checked) {
            label.style.textDecoration = "line-through";
          } else {
            label.style.textDecoration = "none";
          }
    }

    //Tenemos que añadir un icono X junto para añadirlo después de cada item cuando pasamos encima de él, así que haremos un evento que cree el icono:
    let icon=document.createElement('span');
    label.addEventListener('mouseover',añadirIcono);
    function añadirIcono(e){
        e.preventDefault();
        icon.style.color="red";
        icon.innerHTML = 'X';
        div.appendChild(icon);
        this.addEventListener('click', function(){
            // Elimino el label
            label.remove();
        });
    }

    //Si el ratón sale del artículo, el icono desaparecerá. Usaremos el div padre para quitar el icono hijo
    label.addEventListener('mouseout',function(){
        div.removeChild(icon);
    });

}










