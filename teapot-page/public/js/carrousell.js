var imagenes = ['/img/bombonesChocolate.jpg','/img/rollsCanela.jpg','/img/sconsQueso.jpg','/img/fotocarrousell.jpg','/img/carrousel3.jpg'],

 cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener("click", e =>{
        let atras = contenedor.querySelector('.atras i'),
            adelante = contenedor.querySelector('.adelante i'),
            foto = contenedor.querySelector('.fotos-carrousel'),
            target = e.target;
        
        if(target == atras){
            if(cont >0){
                foto.style.backgroundImage = "url(" +imagenes[cont -1] + ")";
                cont --;
            }else
            {
                foto.style.backgroundImage = "url(" + imagenes[imagenes.length -1] + ")";
                cont = imagenes.length -1;
            }
        } else{
            if(target == adelante){
                if(cont < imagenes.length -1){
                    foto.style.backgroundImage = "url(" + imagenes[cont + 1]  + ")";
                    cont ++;
                }else
                {
                    foto.style.backgroundImage = "url(" + imagenes[0]  + ")";
                    cont = 0;
                }

            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.carrousel');
    carrousel(contenedor);
})