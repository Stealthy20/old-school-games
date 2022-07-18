
/* 
Function to run game when dom is finished loading.
Adding a eventlistener to the lets play button to start the game
*/

document.addEventListener("DOMContentLoaded", function() {
    // Function to start the game.
    const startGame = () => {

        const playBtn = document.querySelector(".lets-play button");
        const introScreen = document.querySelector(".lets-play");
        const match = document.querySelector(".match");
    
        playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
        });
    }; 
        
    startGame();
    
});


   
// function runGame(){

// Increasing Player score by uppdating innertext of the span
function increaseScorePlayer() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementByclass("player-score").innerText = ++oldScore;
}

// Increasing computer score by uppdating innertext of the span
function increaseScoreComputer() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementByclass("computer-score").innerText = ++oldScore;
}

// Function to get the inner text of the buttons to compare them to the computers choice.
function getPlayerChoice() {
    
    const options = document.querySelectorAll(".choices button");

    options.forEach(option => {
        option.addEventListener("click", function() {
        playerChoice = this.textContent;
            console.log(playerChoice);
        });
    });
}    


//choosing a random choice for the computer    
function getComputerChoice() {

    const computerChoices = ['rock', 'paper', 'scissors'];

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    console.log(computerChoice)
}



// Comparing hands to se who is the winner
function compareHands(playerChoice, getComputerChoice) {

    const outcome = document.querySelector(".outcome");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      outcome.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        outcome.textContent = "Player Wins";
        increaseScorePlayer()
        return;
      } else {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer()
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer()
        return;
      } else {
        outcome.textContent = "Player Wins";
        increaseScorePlayer()
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer()
        return;
      } else {
        outcome.textContent = "Player Wins";
        increaseScorePlayer()
        return;
      }
    }
}
    


