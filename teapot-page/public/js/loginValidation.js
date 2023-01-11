window.onload = function () {
    let form = document
      .getElementById("formulario");
      form.addEventListener("submit", validarFormulario);
      
  };

function validarFormulario(elemento){
    elemento.preventDefault();

    let usuario = document.getElementById('email');
    let contraseña = document.getElementById('password');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errors = [];
    let ulErrors = document.querySelector(".errores");
    if(!usuario.value.match(validRegex)){
        errors.push("Email inválido");
        usuario.classList.add("is-invalid");
    }else{
        usuario.classList.remove("is-invalid");
        usuario.classList.add("is-valid");
    }
    if(contraseña.value =="" ){
        errors.push("Debe ingresar su contraseña");
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