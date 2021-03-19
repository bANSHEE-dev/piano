const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

const audio = document.querySelector('audio');
const button = document.querySelector('button');

const switchButtonOn = document.querySelector('.openfullscreen');
const switchButtonOff = document.querySelector('.fullscreen');


piano.addEventListener('click', (event) => playAudio(event));
piano.addEventListener('click', playAudio);


function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
button.addEventListener('click', playAudio);


window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyD' || event.code === 'KeyF' || event.code === 'KeyG' || event.code === 'KeyH' || event.code === 'KeyJ' || event.code === 'KeyK' || event.code === 'KeyL') {
    playAudio();
  }
});

