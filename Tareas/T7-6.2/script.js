const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');

password1Input.addEventListener('blur', () => {
  const password1 = password1Input.value;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!regex.test(password1)) {
    password1Input.style.backgroundColor = 'red';
    alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
  } else {
    password1Input.style.backgroundColor = 'initial';
  }
});

password2Input.addEventListener('blur', () => {
  const password2 = password2Input.value;
  const password1 = password1Input.value;

  if (password2 !== password1) {
    password2Input.style.backgroundColor = 'red';
    alert('Las contraseñas no coinciden');
  } else{
    password1Input.style.backgroundColor = 'initial';

    password2Input.style.backgroundColor = 'red';

  }

  });