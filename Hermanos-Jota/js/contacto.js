const formulario = document.getElementById("formularioContacto");
const estado = document.getElementById("estado");

formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("nombreUsuario").value;
  const email = document.getElementById("emailUsuario").value;
  const mensaje = document.getElementById("mensajeUsuario").value;

 
  if (!name || !email || !mensaje) {
    estado.textContent = "Por favor, completá todos los campos.";
    estado.className = "error";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    estado.textContent = "Ingresá un email válido.";
    estado.className = "error";
    return;
  }


  estado.textContent = "¡Gracias! Te contactaremos pronto.";
  estado.className = "ok";

 
  formulario.reset();
}