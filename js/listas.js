const anadir = document.getElementById('boton_anadir');
const lista = document.querySelector('.anadi_cancion');
const cancion_lomalo = document.getElementById('lomalo');
const lista_lomalo = document.querySelector('.lomalo_lista');
const cancion_great = document.getElementById('greatscape');
const lista_great = document.querySelector('.greatescape_lista');
const cancion_welcome = document.getElementById('welcome');
const lista_welcome = document.querySelector('.welcome_lista');
const cancion_fanatica = document.getElementById('fanatica');
const lista_fanatica = document.querySelector('.fanatica_lista');
const cancion_thunder = document.getElementById('thunder');
const lista_thunder = document.querySelector('.thunder_lista');
const cancion_blue = document.getElementById('blue');
const lista_blue = document.querySelector('.blue_lista');
const cancion_sasageyo = document.getElementById('sasageyo');
const lista_sasageyo = document.querySelector('.sasageyo_lista');
const cancion_cris = document.getElementById('cris');
const lista_cris = document.querySelector('.cris_lista');

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

cancion_fanatica.addEventListener('click', function() {

    lista_fanatica.classList.add('cancion_lista_visible');
    lista_fanatica.classList.remove('cancion_lista_novisible');
    lista.classList.remove('anadi_cancion_visible');

});

cancion_thunder.addEventListener('click', function() {

    lista_thunder.classList.add('cancion_lista_visible');
    lista_thunder.classList.remove('cancion_lista_novisible');
    lista.classList.remove('anadi_cancion_visible');

});

cancion_blue.addEventListener('click', function() {

    lista_blue.classList.add('cancion_lista_visible');
    lista_blue.classList.remove('cancion_lista_novisible');
    lista.classList.remove('anadi_cancion_visible');

});

cancion_sasageyo.addEventListener('click', function() {

    lista_sasageyo.classList.add('cancion_lista_visible');
    lista_sasageyo.classList.remove('cancion_lista_novisible');
    lista.classList.remove('anadi_cancion_visible');

});


cancion_cris.addEventListener('click', function() {

    lista_cris.classList.add('cancion_lista_visible');
    lista_cris.classList.remove('cancion_lista_novisible');
    lista.classList.remove('anadi_cancion_visible');

})
