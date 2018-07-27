

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

    
        // ==============================================================================