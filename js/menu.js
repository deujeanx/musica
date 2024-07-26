const hamburguesa = document.getElementById('hamburguesa');
const listaReproduccion = document.querySelector('.lista_reproduccion');

    hamburguesa.addEventListener('click', function() {
        listaReproduccion.classList.toggle('visible');
    });

document.getElementById('cuerpo').addEventListener('click', function (event) {

    if (!hamburguesa.contains(event.target) && event.target !== listaReproduccion) {
        listaReproduccion.classList.remove('active');
    }
})
