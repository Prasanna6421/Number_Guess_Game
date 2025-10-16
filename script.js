

let random = Math.floor(Math.random()*100)+1;
let attempt =10;
let previousGuess = [];

let guessInput = document.getElementById("guessInput");
let guessBtn =document.getElementById("guessBtn");
let feedback = document.getElementById("feedback");
let previousguessesdisplay = document.getElementById("previousGuesses");
let attemptsLeft=document.getElementById("attemptsLeft");
let restartBtn = document.getElementById("restartBtn");



let showAnswerBtn = document.getElementById("showAnswerBtn");
showAnswerBtn.addEventListener('click', function() {
    alert("The secret number is: " + random);
});     




function handleguess(){
    const guess =Number(guessInput.value);
    if(!guess || guess<1 || guess>100){
        feedback.textContent ="Please enter the number from 1 to 100";
        return;
    }
    previousGuess.push(guess);
    previousguessesdisplay.textContent="previous guessd :" +previousGuess.join(", ");



  if(guess ===random){
    feedback.textContent=`Congratulations you won 🎉🥳🎊🎁 !!!! ${random}` ;
    endgame();

    
  }

  else if(guess<random){
    feedback.textContent="Too low ! try a higher number";
  }
  
  else{
    feedback.textContent="Too high ! try a lower number";
  }

  attempt--;
  attemptsLeft.textContent="Attempt Left: "+ attempt;

  if(attempt===0 && guess!==random){
            feedback.textContent = `Game over! The number was ${random}.`;
            endgame();
  }

  guessInput.value='';
  guess.focus();

}


function endgame(){
    guessBtn.disabled=true;
    guessInput.disabled=true;
    restartBtn.style.display = 'inline-block';
}

function restartgame(){

 random = Math.floor(Math.random()*100)+1;
 attempt =10;
 previousGuess = [];

  previousguessesdisplay.textContent = "Previous guesses: ";
  attemptsLeft.textContent = "Attempts left: 10";
  feedback.textContent="";
   guessBtn.disabled=false;
    guessInput.disabled=false;
    restartBtn.style.display = 'none';
    guessInput.value ='';
    guessInput.focus();
}





guessBtn.addEventListener('click',handleguess);
restartBtn.addEventListener('click',restartgame);

guessInput.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        handleguess();
    }
});

feedback.classList.remove('feedback-animate'); // reset
void feedback.offsetWidth; // trigger reflow
feedback.classList.add('feedback-animate');