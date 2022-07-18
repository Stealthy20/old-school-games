
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


 /*  
function runGame() {
  const options = document.querySelectorAll(".options button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
      this.style.animation = "";

      setTimeout(() => {

        compareHands(getPlayerChoice, getComputerChoice);

        playerHand.src = `assets/images/${playerChoice}.png`;
        computerHand.src = `assets/images/${computerChoice}.png`;
      }, 2000);
      //Animation
      playerHand.style.animation = "shakePlayer 2s ease";
      computerHand.style.animation = "shakeComputer 2s ease";
    });
  });
}
*/

// Comparing hands to se who is the winner
const compareHands = (playerChoice, computerChoice) => {

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
        increaseScorePlayer();
        return;
      } else {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer();
        return;
      } else {
        outcome.textContent = "Player Wins";
        increaseScorePlayer();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        outcome.textContent = "Computer Wins";
        increaseScoreComputer();
        return;
      } else {
        outcome.textContent = "Player Wins";
        increaseScorePlayer();
        return;
      }
    }
}

// Function to get the inner text of the buttons to compare them to the computers choice. 
  const options = document.querySelectorAll(".choices button");

  options.forEach(option => {
      option.addEventListener("click", function() {

      let playerChoice = this.textContent;

      console.log(playerChoice);

      const computerChoices = ['rock', 'paper', 'scissors'];

      let computerNumber = Math.floor(Math.random() * 3);
      let computerChoice = computerChoices[computerNumber];
      
      console.log(computerChoice);

      compareHands(this.textContent, computerChoice);
      });
  });
  
/*
//choosing a random choice for the computer    
function getComputerChoice() {

  const computerChoices = ['rock', 'paper', 'scissors'];

  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerChoices[computerNumber];
  
  console.log(computerChoice)
}
*/
// Increasing Player score by uppdating innertext of the span
function increaseScorePlayer() {

  let oldScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++oldScore;
}

// Increasing computer score by uppdating innertext of the span
function increaseScoreComputer() {

  let oldScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++oldScore;
}

compareHands()


