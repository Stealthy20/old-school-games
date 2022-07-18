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

    //function increaseScorePlayer()

   // function increaseScoreComputer()
    
    //function playerChoice()
    
function computerChoice() {

    const computerChoices = ['rock', 'paper', 'scissors'];

    const computerNumber = Math.floor(Math.random() * 3);
    

    let result = computerChoices[computerNumber];

    console.log(result)
    
}

computerChoice()
    
    //function compareHands()
    


