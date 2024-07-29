const anadir = document.getElementById('boton_anadir');
const lista = document.querySelector('.anadi_cancion');
const cancion_lomalo = document.getElementById('lomalo');
const lista_lomalo = document.querySelector('.lomalo_lista');
const cancion_great = document.getElementById('greatscape');
const lista_great = document.querySelector('.greatescape_lista');
const cancion_welcome = document.getElementById('welcome');
const lista_welcome = document.querySelector('.welcome_lista');

anadir.addEventListener('click', function() {

    lista.classList.add('anadi_cancion_visible');

});

cancion_lomalo.addEventListener('click', function() {

    lista_lomalo.classList.add('cancion_lista_visible');
    lista_lomalo.classList.remove('cancion_lista_novisible')
    lista.classList.remove('anadi_cancion_visible')

});

cancion_great.addEventListener('click', function() {

    lista_great.classList.remove('cancion_lista_novisible');
    lista_great.classList.add('cancion_lista_visible');
    lista.classList.remove('anadi_cancion_visible');

});

cancion_welcome.addEventListener('click', function() {

    lista_welcome.classList.remove('cancion_lista_novisible');
    lista_welcome.classList.add('cancion_lista_visible');
    lista.classList.remove('anadi_cancion_visible');

});