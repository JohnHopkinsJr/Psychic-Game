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

<<<<<<< HEAD
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
||||||| merged common ancestors
				// ==============================================================================       
        //  Variables
				//==============================================================================
			var gameRounds=5;
        	var guessCount=0;
        	var winCount=0;
        	var loseCount=0;
        	var gPick = "";
        	var uPick = "";

		//==============================================================================                 
        //  Functions
		//==============================================================================
			function resetGame() {
				//empty();
				init();
				console.log("Game Reset");
			}

		//==============================================================================
			function init() {
 				document.getElementById('startGame').onclick = startGame;
			}

		//==============================================================================	
			function startGame() {
  				document.onkeyup = getKeyPress;
  				console.log('started');
			}

		//==============================================================================
			function getKeyPress(event) {
  				console.log(event.key);
			}
				
		//==============================================================================			
		// Generate computer pick
        	function getGamePick() {
        		var chars = "abcdefghijklmnopqurstuvwxyz";
          		gPick = chars.substr(Math.floor(Math.random() * 26), 1);
				console.log(gPick); 
        	}
				 
		// ============================================================================== 
        // Get user guess                
        	function getUserPick() {
          		uPick = getKeyPress;
			}

		// ============================================================================== 
        //Play Game
          function playGame() {
            getGamePick;
			alert("Ok, Computer has picked: " + gPick + "  Now it is you turn! Pick a letter a-z");
			getUserPick;
            if (guessCount < gameRounds) {
				logic();
				}
            else {
            	alert("Game Over");
            }  
          }			

      	// ============================================================================== 
        // Get game varibles and Evaluate, alert and, Increment Counts     
        	function logic() {   
          	// If correct, alert them Good Guess.
				if (uPick == cPick) {
            		alert("Good Guess");
            		winCount++;
            		guessCount++;
          		}
        	// If wrong, alert them Bad Guess.
          		else {
            		alert("Bad Guess, Try Again!");
            		loseCount++;
            		guessCount++; 
          		}  
        	}
   
				//==============================================================================
        //ScoreBoard Stats   
			function printStats() {
         		document.getElementById('scoreBoard').innerHTML="Games Stats";
          		document.getElementById('gamePick').innerHTML="Computer's Pick Was " + cPick;
          		document.getElementById('userPick').innerHTML="User's Pick Was " + uPick;
          		document.getElementById('scoreBoard').innerHTML="# Of User Wins " + winCount;
          		document.getElementById('userPick').innerHTML="# Of User Losses " + loseCount;
          		document.getElementById('guessesLeft').innerHTML="Guesses Left " + (gameRounds - guessCount);
          		document.getElementById('guessesSoFar').InnerHTML="Number Of Guesses So Far " + guessCount;
        	}
        
        // ==============================================================================
        // Start the game.
		//==============================================================================
			resetGame()
=======
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
>>>>>>> 9f229c4076ad07d3d54ce46f187674d39eb9c733

<<<<<<< HEAD
//===============================================================================
||||||| merged common ancestors
    
        // ==============================================================================
=======
//==============================================================================
  // Start the computer game
  function startGame() {
    printStats();
    console.log("Game Started");
    getGamePick();
    console.log(gPick);
    
    document.getElementById('Title').innerHTML="Great, now it is you turn pick a letter a-z";
    
   
  }
>>>>>>> 9f229c4076ad07d3d54ce46f187674d39eb9c733
