let gameCurrentAttempt = document.querySelector('#attempts'),
    gameTrials = document.querySelector('#trials'),
    userInput = document.querySelector('.userinput'),
    gameMessage = document.querySelector('.message'),
    gameResult = document.querySelector('.number'),
    gameAlert = document.querySelector('.alert'),
    gameOverModal = document.querySelector('.gameover-modal'),
    gameOverAlert = document.querySelector('.gameover-alert'),
    gameAnswerModal = document.querySelector('.answer-modal'),
    gameAnswerAlert = document.querySelector('.answer-alert');
    gameAnswerOverlay = document.querySelector('.answer-overlay');




const btnGameOver = document.querySelector('#btry')
const btnSubmit = document.querySelector('#btn')
const alertModal = document.querySelector('.alert-modal')
const alertOverlay = document.querySelector('.overlay')
const gameOverlay = document.querySelector('.game-overlay')
const btnCloseModal = document.querySelector('#closemodal')

//ATTEMPTS
gameAttempts = 0;

//TRIALS
let gameMaxTrials;
gameMaxTrials = 3;
gameTrials.textContent = gameMaxTrials;
let randNum = Math.floor(Math.random() * 10 + 1 ); //generate number random number (1-10)



//modal
btnCloseModal.addEventListener('click', modalClose)

function modalClose(){
  alertModal.style.display = 'none'
  alertOverlay.style.display = 'none'

}



btnSubmit.addEventListener('click', onGuess);

function onGuess(e){

if (gameAttempts >= 3 && gameMaxTrials === 0) {
    gameOverModal.style.display = 'block';
    gameOverAlert.textContent = 'GAME OVER';
    gameOverlay.style.display = 'block';
    userInput.disabled = true;
    gameMessage.style.display = 'none';
    gameResult.style.display = 'none';
}

let guessNum = parseInt(userInput.value);
if (guessNum <= 0 || guessNum > 10 || userInput.value == ''  ){
  alertModal.style.display = 'block'
  alertOverlay.style.display = 'block'
  gameAlert.textContent = 'Please Enter a Valid Number'

}
  else if(guessNum === randNum){
    gameMessage.textContent = 'Congrats! you guessed the right Number';
    gameResult.textContent = `${randNum}`
    gameMessage.style.display = 'block';
    gameResult.style.display = 'block';
    gameMessage.style.color = '#008055'
    gameResult.style.color = '#008055'
 
    gameAttempts++;
    gameMaxTrials--;
    gameCurrentAttempt.textContent = gameAttempts;
    gameTrials.textContent = gameMaxTrials;
    userInput.value = "";


    setTimeout(() => {

    gameMessage.style.display = 'none';
    gameResult.style.display = 'none';
    },2000)

    // setTimeout(() => {
    //     location.reload();
    //   },1000)

  }




  else{
    gameAnswerModal.style.display = 'block';
    gameAnswerAlert.textContent =` Ooops! you guessed the wrong Number, Right Number is : ${randNum}`;
    gameAnswerOverlay.style.display = 'block';

    gameAttempts++;
    gameMaxTrials--;
    gameCurrentAttempt.textContent = gameAttempts;
    gameTrials.textContent = gameMaxTrials;
    userInput.value = "";

    setTimeout(() => {

    gameMessage.style.display = 'none';
    gameResult.style.display = 'none';
    },2000)
  }
  

}

console.log(randNum);