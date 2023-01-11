window.onload = function () {
  let form = document
    .getElementById("formulario");
    form.addEventListener("submit", validarFormulario);
    
};

function validarFormulario(evento) {
    
    evento.preventDefault();

  let nombreApellido = document.getElementById("nombreApellido");
  let email = document.querySelector('.email');
  let password2 = document.querySelector('.password2');
  let clave = document.querySelector(".password");
  let ulErrors = document.querySelector(".errores");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  let errors = [];
  if (nombreApellido.value.length == 0) {
    errors.push("Ingrese su nombre y apellido");
  } else {
    if (nombreApellido.value.length < 2) {
    errors.push("El nombre y apellido deberán tener más de dos letras");   
    }
  }
  if(!email.value.match(validRegex)){
    errors.push("Ingrese una dirección de Email válida");
    email.classList.add("is-invalid");
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }

  if(password2.value != clave.value){
    errors.push("Las contraseñas deben ser iguales");
  }
  if(!clave.value.match(passwordRegex)){
    errors.push("La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula Puede tener otros símbolos");

  }
  if (errors.length > 0) {
    ulErrors.innerHTML = "";
    errors.map(error => {
       
        ulErrors.innerHTML +=`<li>${error}</li>`;
    
    })
    ulErrors.classList.add("active");
  } else {
   
    this.submit();
}
}
