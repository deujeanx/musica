const audio = document.getElementById('cancion');
const progressbar = document.getElementById('progreso');
const sonido = document.getElementById('sonido');

audio.addEventListener('timeupdate', function() {

    const value = (audio.currentTime/audio.duration)*100;
    progressbar.value = value;

});

progressbar.addEventListener('input', function () {

    const value = (progressbar.value*audio.duration)/100;
    audio.currentTime = value;

});

sonido.addEventListener('input', function() {

    audio.volume = sonido.value/100;;

})