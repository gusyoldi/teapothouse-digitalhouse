window.onload = function () {
    let form = document.getElementById("formulario");
    form.addEventListener("submit", validarFormulario);
};

function validarFormulario(elemento) {
    elemento.preventDefault();
    let descripcion = document.getElementById("descripcion");
    let nombre = document.getElementById("nombre");
    let errors = [];
    let ulErrors = document.querySelector(".errores");

    if (nombre.value.length == 0) {
        errors.push("El nombre del producto es un campo obligatorio");
    } else {
        if (nombre.value.length < 5) {
            errors.push("El nombre y apellido deberán tener más de dos letras");
        }
    }
    if (descripcion.value.length < 20) {
        errors.push(
            "La descripción del producto debe al menos tener 20 caracteres"
        );
    }
    if (errors.length > 0) {
        ulErrors.innerHTML = "";
        errors.map((error) => {
            ulErrors.innerHTML += `<li>${error}</li>`;
        });
        ulErrors.classList.add("active");
    } else {
        this.submit();
    }
}
