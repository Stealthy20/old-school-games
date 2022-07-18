
/* 
Function to run game when dom is finished loading.
Adding a eventlistener to the lets play button to start the game
*/
document.addEventListener("DOMContentLoaded", function() {
    // Function to display start screen and fade to game screen when clicked.
    const startGame = () => {

        const playBtn = document.querySelector(".lets-play button");
        const introScreen = document.querySelector(".lets-play");
        const match = document.querySelector(".match");
      // This fades Out the start screen and in the game
        playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
        });
    }; 
        
    startGame();
    
});

// Starts the game after you make your choice
const playGame = () => {
  const options = document.querySelectorAll(".choices button");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
      this.style.animation = "";
    });
  });
  //Options from which the computer will pick
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach(option => {
    option.addEventListener("click", function() {
      //Computer Choice with random number
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];

      setTimeout(() => {
        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);
        //Update Images to display the image of choice
        playerHand.src = `assets/images//${this.textContent}.png`;
        computerHand.src = `assets/images/${computerChoice}.png`;
      }, 1000);
      //Shaking animation of the hands
      playerHand.style.animation = "shakePlayer 1s ease";
      computerHand.style.animation = "shakeComputer 1s ease";
    });
  });
};

// Comparing hands to se who is the winner
const compareHands = (playerChoice, computerChoice) => {

    const outcome = document.querySelector(".outcome");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      outcome.textContent = "It is a tie";
      return;
    }
    //Checking when player choose Rock
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
    //Checking when player choose Paper
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
    //Checking when player choose Scissors
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

//Calls the function playGame
playGame()

