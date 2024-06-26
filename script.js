function playSound(note) {
    var audio = document.getElementById('audio-C');
    var audio = document.getElementById('audio-Db');
    var audio = document.getElementById('audio-D');
    var audio = document.getElementById('audio-Eb');
    var audio = document.getElementById('audio-E');
    var audio = document.getElementById('audio-F');
    var audio = document.getElementById('audio-Gb');
    var audio = document.getElementById('audio-G');
    var audio = document.getElementById('audio-Ab');
    var audio = document.getElementById('audio-A');
    var audio = document.getElementById('audio-Bb');
    var audio = document.getElementById('audio-B');

    if (audio) {
        audio.currentTime = 0; // Rewind to the beginning
        audio.play();
    }
}
