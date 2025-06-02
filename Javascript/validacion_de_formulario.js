document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  const inputNombre = document.getElementById('nombre');
  const inputGmail = document.getElementById('gmail');
  const mensajeError = document.getElementById('mensajeError');

  // contador de caracteres
  const contador = document.createElement('small');
  inputNombre.insertAdjacentElement('afterend', contador);

  inputNombre.addEventListener('input', () => {
    contador.textContent = `Caracteres: ${inputNombre.value.length}`;
  });

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    mensajeError.textContent = '';

    const nombre = inputNombre.value.trim();
    const gmail = inputGmail.value.trim();

    const errores = [];

    // Validación de nombre
    if (nombre === '' || nombre.length < 3 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      errores.push('El nombre debe tener al menos 3 letras y solo letras.');
    }

    // Validación de Gmail
    if (!/^[\w.-]+@gmail\.com$/.test(gmail)) {
      errores.push('El correo debe ser una dirección válida de Gmail.');
    }

    if (errores.length > 0) {
      mensajeError.textContent = errores.join(' ');
      alert('Error en el formulario:\n' + errores.join('\n'));
    } else {
      alert('Formulario enviado correctamente.');
      formulario.reset();
      contador.textContent = '';
    }
  });

  // Ejercicio 2: Mostrar/ocultar párrafo
  const toggleBtn = document.getElementById('toggleBtn');
  const parrafo = document.getElementById('parrafo');
  toggleBtn.addEventListener('click', () => {
    parrafo.style.display = parrafo.style.display === 'none' ? 'block' : 'none';
  });

  // Ejercicio 3: Cambiar color de fondo
  const colorFondo = document.getElementById('colorFondo');
  colorFondo.addEventListener('input', () => {
    document.body.style.backgroundColor = colorFondo.value;
  });

  // Ejercicio 4: Contador de clics
  const contadorBtn = document.getElementById('contadorBtn');
  const contadorTexto = document.getElementById('contadorTexto');
  let clics = 0;
  contadorBtn.addEventListener('click', () => {
    clics++;
    contadorTexto.textContent = `Clics: ${clics}`;
  });

  // Ejercicio 5: Mostrar fecha y hora actual
  const fechaBtn = document.getElementById('fechaBtn');
  const fechaTexto = document.getElementById('fechaTexto');
  fechaBtn.addEventListener('click', () => {
    const ahora = new Date();
    fechaTexto.textContent = ahora.toLocaleString();
  });
});
