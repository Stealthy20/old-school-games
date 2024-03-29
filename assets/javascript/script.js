/* 
Guide used for inspiration and help from youtuber DevEd 
https://www.youtube.com/watch?v=qWPtKtYEsN4
This is to transition from intro screen to the game
*/
const startGame = () => {

  const playBtn = document.querySelector(".lets-play button");
  const introScreen = document.querySelector(".lets-play");
  const match = document.querySelector(".match");

  playBtn.addEventListener("click", () => {
  introScreen.classList.add("fadeOut");
  match.classList.add("fadeIn");
  let playername = document.getElementById("p-name").value;
  document.getElementById("playername").innerHTML = playername || 'Player';
  });

  document.getElementById("p-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      let playername = document.getElementById("p-name").value;
      document.getElementById("playername").innerHTML = playername || 'Player';
    }
  });
};
    
 // This runs the game
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

  //Computer Choice with random number on click
  options.forEach(option => {
    option.addEventListener("click", function() {
      
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];

      //Delaying the function to after the animation is done
      setTimeout(() => {
      
        compareHands(this.textContent, computerChoice);
        //Update Images to display the image of choice
        playerHand.src = `assets/images/${this.textContent}.png`;
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

  const outcome = document.querySelector("#outcome");
  
  if (playerChoice === computerChoice) {
    outcome.textContent = "It is a tie";
    return;
  }
  // Checking when player choose Rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      outcome.textContent = "Player Wins";
      increaseScorePlayer();
      checkRound();
      return;
    } else {
      outcome.textContent = "Computer Wins";
      increaseScoreComputer();
      checkRound();
      return;
    }
  }
  //Checking when player choose Paper
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      outcome.textContent = "Computer Wins";
      increaseScoreComputer();
      checkRound();
      return;
    } else {
      outcome.textContent = "Player Wins";
      increaseScorePlayer();
      checkRound();
      return;
    }
  }
  //Checking when player choose Scissors
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      outcome.textContent = "Computer Wins";
      increaseScoreComputer();
      checkRound();
      return;
    } else {
      outcome.textContent = "Player Wins";
      increaseScorePlayer();
      checkRound();
      return;
    }
  }
};

// Increasing Player score taken from the love math project
const increaseScorePlayer = () => {

  let oldScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++oldScore;
};

// Increasing computer score taken from the love math project
const increaseScoreComputer = () => {

  let oldScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++oldScore;
};

/*
Checks if round limit is reached to finish the game
display modal with message and resets the game
*/
const checkRound = () => {
  let playerScore = document.getElementById('player-score').innerHTML;
  let computerScore = document.getElementById('computer-score').innerHTML;

  if (playerScore >= 5) {
    document.getElementById('player-score').innerHTML = 0;
    document.getElementById('computer-score').innerHTML = 0;
    document.getElementById('outcome').innerHTML = "Make Your Choice";
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content');
    modal.style.display = 'inline';
    modalContent.innerText = 'Congratulations, You won! Can you win another?';
  }
  if (computerScore >= 5) {
    document.getElementById('player-score').innerHTML = 0;
    document.getElementById('computer-score').innerHTML = 0;
    document.getElementById('outcome').innerHTML = "Make Your Choice";
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content');
    modal.style.display = 'inline';
    modalContent.innerText = 'To bad, you got beat by a computer. Try again!';
  }
};

//Function to be able to close the modal by clicking the x
document.getElementById('close-modal').addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

startGame();
playGame();