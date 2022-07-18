/* Function to run game when dom is finished loading.
Adding a eventlistener to the lets play button to start the game
*/
document.addEventListener("DOMContentLoaded", function() {
    // Function to start the game.
    const startGame = () => {

            const playBtn = document.querySelector(".lets-play-screen button");
            const introScreen = document.querySelector(".lets-play-screen");
            const match = document.querySelector(".match");
        
            playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            });
        }; 
        
    startGame();
});
    
       //function runGame()

function increaseScorePlayer() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementByclass("player-score").innerText = ++oldScore;
}

function increaseScoreComputer() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementByclass("computer-score").innerText = ++oldScore;
}

function playerChoice() {
    const choice = document.querySelectorAll('.choices button')
    
}
    
function computerChoice() {

    const computerChoices = ['rock', 'paper', 'scissors'];

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];
   
}

    
    //function compareHands()
    


