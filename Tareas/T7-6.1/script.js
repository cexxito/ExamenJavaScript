let formulario = document.forms[0];
let msg = document.getElementById('mensaje');



const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
  if (nameInput.value.length < 6) {
    msg.textContent = 'El nombre debe tener al menos 6 letras';
  } else {
    msg.textContent = 'Correcto';
  }
});

// nameInput.addEventListener('invalid', () => {
//   if (nameInput.validity.valueMissing) {
//     msg.textContent = 'Por favor, ingresa un nombre';
//   } else {
//     msg.textContent = 'El nombre debe tener al menos 6 letras';
//   }
// });

// nameInput.addEventListener('blur', () => {
//   if (nameInput.validity.valueMissing) {
//     msg.textContent = 'Por favor, ingresa un nombre';
//   } else if (nameInput.value.length < 6) {
//     msg.textContent = 'El nombre debe tener al menos 6 letras';
//   } else {
//     msg.textContent = '';
//   }
// });