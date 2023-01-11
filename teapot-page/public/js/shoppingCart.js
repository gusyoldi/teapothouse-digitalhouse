//const { header } = require("express-validator");

document.addEventListener("DOMContentLoaded", () => {
    let botonAgregar = document.querySelectorAll("#boton-mas");
    let botonBorrar = document.querySelectorAll("#boton-menos");
   
    let eliminar = document.querySelector(".eliminar");
    if (eliminar) {
        eliminar.addEventListener("click", (e) => {
            let productID = e.target.dataset.id;
            fetch(`/cart/remove`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: productID,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("se borró artículo del carrito");
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        });
    }

    botonBorrar.forEach(p =>{
        p.addEventListener("click", (e) => {
            let cantidad = e.currentTarget.parentElement.querySelector("#cantidad");   
            if (cantidad.value != 1) {
                let subtotal =e.currentTarget.parentElement.parentElement.querySelector(".precio-producto");
            let total = e.currentTarget.parentElement.parentElement.parentElement.querySelector("#total");
            let precio = parseFloat(subtotal.innerHTML.slice(11)) / parseFloat(cantidad.value);
            cantidad.value = parseInt(cantidad.value) -1;
            subtotal.innerHTML= "subtotal: $" + precio *parseInt(cantidad.value);
            let nuevoTotal = total.innerHTML.slice(20);
            nuevoTotal = parseInt(nuevoTotal)-precio;
            total.innerHTML= "Total de la compra $" + nuevoTotal;
            }
            
        });
    });
    botonAgregar.forEach(p =>{
        p.addEventListener("click", (e) => {
            let cantidad = e.currentTarget.parentElement.querySelector("#cantidad");
            let subtotal =e.currentTarget.parentElement.parentElement.querySelector(".precio-producto");
            let total = e.currentTarget.parentElement.parentElement.parentElement.querySelector("#total");
            let precio = parseFloat(subtotal.innerHTML.slice(11)) / parseFloat(cantidad.value);
            cantidad.value = parseInt(cantidad.value) +1;
            subtotal.innerHTML= "subtotal: $" + precio *parseInt(cantidad.value);
            let nuevoTotal = total.innerHTML.slice(20);
            nuevoTotal = parseInt(nuevoTotal)+precio;
            total.innerHTML= "Total de la compra $" + nuevoTotal;
            let productId = e.target.dataset.id;
    
            /*fetch(`/cart/change`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: productId,
                    change: 1,
                }),
            })
                .then((res) => res.json())
            
                .catch((err) => console.log(err));*/
        });
    }) 


});
