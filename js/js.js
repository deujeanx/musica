

document.getElementById('toggleicon').addEventListener('click', function() {
    this.classList.toggle('fa-circle-play');
    this.classList.toggle('fa-circle-pause');
});

document.getElementById('toggleicon').addEventListener('click', function() {

    const audio = document.getElementById('cancion');

    if (audio.paused){

        audio.play();

    } else {

        audio.pause();

    }

})


