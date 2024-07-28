const hamburguesa = document.getElementById('hamburguesa');
const listaReproduccion = document.querySelector('.lista_reproduccion');

hamburguesa.addEventListener('click', function() {
    listaReproduccion.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
    if (!listaReproduccion.contains(event.target) && !hamburguesa.contains(event.target)) {
        listaReproduccion.classList.remove('visible');
    }
});