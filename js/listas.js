const anadir = document.getElementById('boton_anadir');
const lista = document.querySelector('.anadi_cancion');
const cancion_lomalo = document.getElementById('lomalo');
const lista_lomalo = document.querySelector('.lomalo_lista')

anadir.addEventListener('click', function() {

    lista.classList.add('anadi_cancion_visible');

})

cancion_lomalo.addEventListener('click', function() {

    lista_lomalo.classList.add('cancion_lista_visible');
    lista_lomalo.classList.remove('cancion_lista_novisible')
    lista.classList.remove('anadi_cancion_visible')

})