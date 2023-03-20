
// recogemos los elementos q vamos a usar
let botonAgregar = document.getElementById("añadir");//boton
let lista = document.getElementById("items");//el div donde van los productos que añadimos
let producto = document.getElementById("elementoNuevo");//donde escribimos los nuevos productos

botonAgregar.addEventListener("click",AgregarElemento);//añadimos un evento al boton

let contador = 1;//contador para el id

function AgregarElemento(e){
    e.preventDefault();

    //condicional para verificar si se ha escrito algo
    if(producto.value == ""){
        alert("Escriba un producto para añadir");
    }else{
        //creamos un elemento li(lista)
        let listaNuevo = document.createElement('li');

        let productoNuevo = document.createElement('input');//creamos unn elemento de tipo input
        productoNuevo.type = 'checkbox';//le damos tipo  checkbox
        productoNuevo.value = producto.value;//su atributo value es el valor de lo que hemos escrito
        productoNuevo.id = "item"+contador;//le damos un id
        listaNuevo.appendChild(productoNuevo);//añadimos despues de el elemento de lista que hemos creado, la caja del checkbox

        let labelNuevo = document.createElement('label');//creamos un label, donde ira el texto que hemos escrito al principio
        labelNuevo.htmlFor = productoNuevo.id;//lo vinculamos con el id de nuestro checkbox
        labelNuevo.textContent = producto.value;//su contenido de texto es ahora lo que hemos escrito

        
        //evento para tachar, que lo añadimos al checkbox, no al label
        productoNuevo.addEventListener('click', function(e){
            if(e.target.checked){//si el checkbox est clickado
                labelNuevo.style.textDecoration = "line-through";//se tacha
            }else{
                labelNuevo.style.textDecoration = "none";//si no, no se tacha
            }
        });

        listaNuevo.appendChild(labelNuevo);//añadimoas al elemento creado de lista, el label, despues de la caja del checkbox

        lista.appendChild(listaNuevo);//y añadimos al div donde van los items, nuestro elemento lista, que ya contiene todo

        contador++;//sumamos uno al contador para el siguiente id
        
        producto.value = '';//y donde escribimos, lo vaciamos

    }

}
