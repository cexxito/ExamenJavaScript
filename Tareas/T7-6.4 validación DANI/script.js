const area = document.getElementById('area');
const imagen = document.getElementById('imagen');

area.addEventListener('change', () => {
  if (area.value === 'distribucion') {
    imagen.src = 'distribucion.jpg';
    imagen.alt = 'Imagen de la zona de distribución';
  } else if (area.value === 'oficina') {
    imagen.src = 'distribucionOficina.jpg';
    imagen.alt = 'Imagen de la zona de oficina';
  } else if (area.value === 'produccion') {
    imagen.src = 'produccion.jpg';
    imagen.alt = 'Imagen de la zona de producción';
  }
});


const boton = document.getElementById('boton');
const descripcion = document.getElementById('descripcion');

boton.addEventListener('click', () => {
  descripcion.style.display= "block";
});



const form = document.querySelector('form');
const input = document.querySelector('#numero-serie');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.validity.valid) {
    alert('El número de serie es válido');
  } else {
    alert('El número de serie no es válido');
  }
});

