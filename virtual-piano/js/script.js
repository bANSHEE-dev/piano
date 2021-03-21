const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const fullScreenBtn = document.querySelector('.openfullscreen');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const keys = document.querySelectorAll(".key");


// Переключение с букв на ноты. *****************************************

btnNotes.addEventListener('click', (btn) => {
  btn.target.classList.add('btn-active');
  btnLetters.classList.remove('btn-active');
  pianoКeys.forEach(key => {
    key.classList.remove('piano-list-letters')
    key.classList.remove('letters')
  })
});

btnLetters.addEventListener('click', (btn) => {
  btn.target.classList.add('btn-active');
  btnNotes.classList.remove('btn-active');
  pianoКeys.forEach(key => {
    key.classList.remove('piano-list-letters')
    key.classList.add('letters')
  })

});
//**********************************************************************

//Действия при нажатии/зажатии мышки.
const startSound = (event) => {
  event.target.classList.add("active");
};
const stopSound = (event) => {
  event.target.classList.remove("active");
};

const startCorrespondOver = (event) => {
  event.target.classList.add("active");
  pianoКeys.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}

const stopCorrespondOver = () => {
  pianoКeys.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}
//******************************************************************************************************

//Fullscreen method
document.querySelector('.openfullscreen').addEventListener("click", toggleScreen);
function toggleScreen() {
  if(document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    if(document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
}
//*******************************************************************************************************



//Играем по нотам

keys.forEach(pianoКeys => {
  pianoКeys.addEventListener("click", () => playNote(pianoКeys))
})

function playNote (pianoКeys) {
  const noteAudio = document.getElementById(pianoКeys.dataset.note)
  noteAudio.currentTime = 0;
  noteAudio.play(pianoКeys);

}


//************************************************************************
piano.addEventListener("mousedown", startCorrespondOver, false);
piano.addEventListener("mouseup", stopCorrespondOver);


