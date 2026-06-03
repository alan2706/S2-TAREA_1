// ================================================
// script.js – Sesión 3: Validaciones con JavaScript
// Valida correo y contraseña antes de enviar el form
// ================================================

// --- Referencias a los elementos del DOM ---
const form         = document.getElementById('registroForm');
const inputNombre  = document.getElementById('nombre');
const inputCorreo  = document.getElementById('correo');
const inputPass    = document.getElementById('password');
const toggleBtn    = document.getElementById('togglePassword');

const errorNombre  = document.getElementById('error-nombre');
const errorCorreo  = document.getElementById('error-correo');
const errorPass    = document.getElementById('error-password');

// ------------------------------------------------
// Expresión regular para validar formato de correo
// Requiere: texto @ texto . texto
// ------------------------------------------------
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ------------------------------------------------
// Función auxiliar: mostrar u ocultar error en un campo
// ------------------------------------------------
function setError(input, spanError, mensaje) {
  if (mensaje) {
    spanError.textContent = mensaje;
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    spanError.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}

// ------------------------------------------------
// Validar Nombre: no debe estar vacío
// ------------------------------------------------
function validarNombre() {
  const valor = inputNombre.value.trim();
  if (valor === '') {
    setError(inputNombre, errorNombre, 'El nombre no puede estar vacío.');
    return false;
  }
  setError(inputNombre, errorNombre, '');
  return true;
}

// ------------------------------------------------
// Validar Correo:
//   1. No puede estar vacío
//   2. Debe tener formato válido (regex)
// ------------------------------------------------
function validarCorreo() {
  const valor = inputCorreo.value.trim();

  if (valor === '') {
    setError(inputCorreo, errorCorreo, 'El correo no puede estar vacío.');
    return false;
  }

  if (!regexCorreo.test(valor)) {
    setError(inputCorreo, errorCorreo, 'Ingresa un correo válido. Ej: usuario@correo.com');
    return false;
  }

  setError(inputCorreo, errorCorreo, '');
  return true;
}

// ------------------------------------------------
// Validar Contraseña:
//   1. No puede estar vacía
//   2. Debe tener mínimo 8 caracteres
// ------------------------------------------------
function validarPassword() {
  const valor = inputPass.value;

  if (valor === '') {
    setError(inputPass, errorPass, 'La contraseña no puede estar vacía.');
    return false;
  }

  if (valor.length < 8) {
    setError(inputPass, errorPass, `La contraseña debe tener mínimo 8 caracteres (tiene ${valor.length}).`);
    return false;
  }

  setError(inputPass, errorPass, '');
  return true;
}

// ------------------------------------------------
// Evento submit: ejecuta todas las validaciones
// Si alguna falla → alert() con el primer error
// Si todas pasan → alert() de éxito
// ------------------------------------------------
form.addEventListener('submit', function (evento) {
  // Evitar que el formulario recargue la página
  evento.preventDefault();

  const nombreOk  = validarNombre();
  const correoOk  = validarCorreo();
  const passwordOk = validarPassword();

  if (!nombreOk) {
    alert('⚠️ Error: ' + errorNombre.textContent);
    inputNombre.focus();
    return;
  }

  if (!correoOk) {
    alert('⚠️ Error: ' + errorCorreo.textContent);
    inputCorreo.focus();
    return;
  }

  if (!passwordOk) {
    alert('⚠️ Error: ' + errorPass.textContent);
    inputPass.focus();
    return;
  }

  // Todas las validaciones pasaron
  alert('✅ ¡Registro exitoso!\nBienvenido/a, ' + inputNombre.value.trim() + '.');
  form.reset();

  // Limpiar clases de validación visual
  [inputNombre, inputCorreo, inputPass].forEach(function (input) {
    input.classList.remove('valid', 'invalid');
  });
});

// ------------------------------------------------
// Validación en tiempo real (mientras el usuario escribe)
// Mejora la experiencia sin necesidad de enviar el form
// ------------------------------------------------
inputNombre.addEventListener('blur', validarNombre);
inputCorreo.addEventListener('blur', validarCorreo);
inputPass.addEventListener('blur', validarPassword);

// ------------------------------------------------
// Botón ojo: alternar visibilidad de la contraseña
// ------------------------------------------------
toggleBtn.addEventListener('click', function () {
  if (inputPass.type === 'password') {
    inputPass.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    inputPass.type = 'password';
    toggleBtn.textContent = '👁';
  }
});
