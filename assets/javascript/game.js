// ==============================================================================
  //pseudo code
//==============================================================================
  //Call function to start game
  //Have computer pick a letter : Assign var cPick
  //Ask users to guess what letter the computer is thinking of: Prompt user
  //Capture the user guess : Assign var uPick
  //Compare cPick to uPick : Evaluate varibles
  //Respond to the user Win or Loose : Result
  //Capture total # of guesses allowed per game play : gameRounds
  //Capture # of guesses user has made : var guessCount
  //Capture # of user wins : var winCount
  //Capture # of users losses : var loseCount
  //Afetr defined amount of gameRounds : End with Game Over

// ==============================================================================
  //Varibles
//==============================================================================
  var gPick = "";  
  var uPick = "";
  var gLetters = [];
  var gCount = 0;
  var gLeft = 10;
  var wCount=0;
  var lCount=0;

//==============================================================================                 
  // Functions
//==============================================================================
  //ScoreBoard Stats   
  function printStats() {
    document.getElementById('Wins').innerHTML="Wins: " + wCount;
    document.getElementById('Losses').innerHTML="Losses: " + lCount;
    document.getElementById('GuessesLeft').innerHTML="Guesses Left: " + gLeft;
    document.getElementById('GuessesSoFar').innerHTML="Guesses So Far: " + gLetters;
}

//===============================================================================			
// Get Computer Pick
  function getGamePick() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    gPick = chars.substr(Math.floor(Math.random() * 26), 1);
  }
  
//===============================================================================	
// Get users pick
  document.onkeyup=function(event) {
    uPick = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(uPick);
    gLetters.push(uPick);
    gLeft --;
    printStats();
    if (uPick === gPick) {
      alert("Good Guess, Win!")
      wCount ++;
      gLetters = []; 
      gLeft = 10;
      printStats();
      alert("Click the START button to begin.");
    }
    else if (gLeft === 0) {
      lCount ++;
      alert("Start Over");
      gLetters = []; 
      gLeft = 10;
      printStats();
      alert("Click the START button to begin.");
    }
  }

//==============================================================================
  // Start the computer game
  function startGame() {
    printStats();
    console.log("Game Started");
    getGamePick();
    console.log(gPick);
    
    document.getElementById('Title').innerHTML="Great, now it is you turn pick a letter a-z";
    
   
  }

//===============================================================================