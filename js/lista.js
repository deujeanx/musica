const mas = document.getElementById('mas');
const lista = document.querySelector('.lista');

const lista_lomalo = document.getElementById('lomalo');
const cancion_lomalo = document.querySelector('.lomalo');
const lista_welcome = document.getElementById('welcome');
const cancion_welcome = document.querySelector('.welcome');
const lista_fanatica = document.getElementById('fanatica');
const cancion_fanatica = document.querySelector('.fanatica');
const lista_thunder = document.getElementById('thunder');
const cancion_thunder = document.querySelector('.thunder');
const lista_blue = document.getElementById('blue');
const cancion_blue = document.querySelector('.blue');
const lista_sasageyo = document.getElementById('sasageyo');
const cancion_sasageyo = document.querySelector('.sasageyo');
const lista_great = document.getElementById('great');
const cancion_great = document.querySelector('.great');
const lista_cris = document.getElementById('cris');
const cancion_cris = document.querySelector('.cris');

mas.addEventListener('click', function() {

    lista.classList.add('anadir_cancion');

});

lista_lomalo.addEventListener('click', function () {

    cancion_lomalo.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_welcome.addEventListener('click', function () {

    cancion_welcome.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_fanatica.addEventListener('click', function () {

    cancion_fanatica.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_thunder.addEventListener('click', function () {

    cancion_thunder.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_blue.addEventListener('click', function () {

    cancion_blue.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_sasageyo.addEventListener('click', function () {

    cancion_sasageyo.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_great.addEventListener('click', function () {

    cancion_great.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});

lista_cris.addEventListener('click', function () {

    cancion_cris.classList.add('cuadrado_anadir');
    lista.classList.remove('anadir_cancion');

});
