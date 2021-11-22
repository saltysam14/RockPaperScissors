let arrayOptions = ["Rock", "Paper", "Scissors"];
var computerSelection=computerPlay();
var computerScore=0;
var playerScore=0;
let buttons=document.querySelectorAll(".btn");
var computerSelection=computerPlay().toLowerCase();
let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let playerSelectionDisplay = document.querySelector('#playerSelection');
let computerSelectionDisplay = document.querySelector('#computerSelection');
let finalResult = document.querySelector('#finalResult');

function computerPlay() {
    return arrayOptions[Math.floor(Math.random()*arrayOptions.length)];
}
buttons.forEach((button) => {
    button.addEventListener("click", getPlayerChoice);
}) 

function getPlayerChoice(e) {
    playerSelection = (e.target.getAttribute('id'));
    
    game(playerSelection, computerSelection);
   
}

function game() {

    
    getPlayerChoice;
    var computerSelection=computerPlay().toLowerCase();
    
    if  (computerSelection === playerSelection)  {
        alert("Tie Game!");
     }
     else if (
        computerSelection == "rock" && playerSelection == "paper") {
            alert("You Win! Paper beats Rock");
        }
    else if (
        computerSelection == "rock" && playerSelection == "scissors") {
            alert("You Lose! Rock beats Scissors");
        }
    else if (
        computerSelection == "paper" && playerSelection == "rock") {
            alert("You Lose! Paper beats Rock");
        }
    else if (
        computerSelection == "paper" && playerSelection == "scissors") {
            alert("You Win! Scissors beats Paper");
        }
    else if (
        computerSelection == "scissors" && playerSelection == "paper") {
            alert("You Lose! Scissors beats Paper");
        }
    else if (
        computerSelection == "scissors" && playerSelection == "rock") {
            alert("You Win! Rock beats Scissors");
        }

     
        if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper"))
            computerScoreDisplay.textContent="Computer Score:" + " " + ++computerScore;
            
    
        else if(
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "rock")) 
            playerScoreDisplay.textContent="Player Score:" + " " + ++playerScore;


    playerSelectionDisplay.textContent="Player Choice:" + " " + playerSelection;
    computerSelectionDisplay.textContent="Computer Choice:" + " " + computerSelection;
   
    
        
    if (computerScore === 5) {
        finalResult.textContent="You lose! Game over.";
        buttons.forEach((button) => {
            button.removeEventListener("click", getPlayerChoice);
        });
    }
    else if (playerScore ===5) {
        finalResult.textContent="You win!";
        buttons.forEach((button) => {
            button.removeEventListener("click", getPlayerChoice);
        });
    }
    }





          

