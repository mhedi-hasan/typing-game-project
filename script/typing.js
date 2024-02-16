//
// function play() {
//   // step-->1: hide the home screen. to the hide screen and added class hidden
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add('hidden');
//   // step-->2: show the play-ground section
//   const playGroundSection=document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
      console.log("PlayerPressed:", playerPressed);
  
      // stop the game playerPressed 'Esc'
      if(playerPressed==='Escape'){
        gameOver();
      }
  
    // get the expectation to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //   console.log(playerPressed, expectedAlphabet);
  
    //Check to match
    if (playerPressed === expectedAlphabet) {
      console.log("You got a point!");
      console.log("You have pressed correctly:", expectedAlphabet);
      // Update score
      // 1: get the current score
      const currentScoreElement = document.getElementById("current-score");
      const currentScoreText = currentScoreElement.innerText;
      const currentScores = parseInt(currentScoreText);
      // console.log(currentScores);
      // 2: increase the score by 1
      const newScore = currentScores + 1;
      // 3: show the Update score
      currentScoreElement.innerText = newScore;
      // start a new round
      removeBackgroundColorById(expectedAlphabet);
      continueGame();
    } else {
        let arr=[playerPressed]
        console.log(arr);
    console.log('pressed the key',playerPressed)
    console.log("You Missed.You lost a life");
    const currentLifeElement = document.getElementById('current-life');
      //-->1: get the current life number
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
      //-->2: reduce the life count
    
    console.log(currentLifeElement);
    const newLife = currentLife - 1;
      //-->3: display the update life count
    currentLifeElement.innerText = newLife;

    if(newLife===0){
        // document.getElementById('current-alphabets').innerText='Game Over';
        gameOver();
    }
    }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log("your random alphabet is :", alphabet);
  
    // set random alphabet in display
    const currentAlphabetElement = document.getElementById("current-alphabet");
    // console.log('cheking',currentAlphabetElement)
    currentAlphabetElement.innerText = alphabet;
    //set background color
    removesBackgroundColorById(alphabet);
  }
  
  function play() {
    //hide all section show only play ground section
    hideElementId("home-screen");
    hideElementId('final-score');
    showElementId("play-ground");
  
    // reset score and life value
    setTextElementValueById('current-life',10)
    setTextElementValueById('current-score',0)
  
    continueGame();
  }
  function gameOver(){
    hideElementId('play-ground');
    showElementId("final-score");
  
    // update final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    //
    const currentAlphabets=getElementTextById('current-alphabet');
    // console.log(currentAlphabets);
    removeBackgroundColorById(currentAlphabets);
  }
  // function tryAgin(){
  //   hideElementId('final-score');
  //   showElementId("play-ground");
  // }