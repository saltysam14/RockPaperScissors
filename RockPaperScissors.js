let arrayOptions = ["Rock", "Paper", "Scissors"];
var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
var computerSelection=computerPlay();


function computerPlay() {
    return arrayOptions[Math.floor(Math.random()*arrayOptions.length)];
}

function playRound (playerSelection, computerSelection) {

    

    var computerSelection=computerPlay().toLowerCase();
    var playerSelection=playerSelection.toLowerCase();
      
    
    
    if  (computerSelection == playerSelection)  {
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
    
}

function game() {

    var computerScore=0;
    var playerScore=0;
    var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
    var computerSelection=computerPlay().toLowerCase();
    var playerSelection=playerSelection.toLowerCase();
    if  (computerSelection == playerSelection)  {
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
            ++computerScore;
            
    
            else if(
            (computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "rock")) 
        ++playerScore;


    
    
    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
    

        var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
        var computerSelection=computerPlay().toLowerCase();
        var playerSelection=playerSelection.toLowerCase();
        if  (computerSelection == playerSelection)  {
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
        ++computerScore;
        

        else if(
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) 
    ++playerScore;


    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);


        var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
        var computerSelection=computerPlay().toLowerCase();
        var playerSelection=playerSelection.toLowerCase();
        if  (computerSelection == playerSelection)  {
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
        ++computerScore;
        

        else if(
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) 
    ++playerScore;


    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);



        var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
        var computerSelection=computerPlay().toLowerCase();
        var playerSelection=playerSelection.toLowerCase();
        if  (computerSelection == playerSelection)  {
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
        ++computerScore;
        

        else if(
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) 
    ++playerScore;

    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);



        var playerSelection = window.prompt("Rock, Paper or Scissors?: ");
        var computerSelection=computerPlay().toLowerCase();
        var playerSelection=playerSelection.toLowerCase();
        if  (computerSelection == playerSelection)  {
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
        ++computerScore;
        

        else if(
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) 
    ++playerScore;
     
    
    if (
        playerScore > computerScore) {
        alert("Player Wins!");
       }
    else if (
        computerScore > playerScore) {
        alert("Computer Wins!");
        }
    else {
        alert("Tie game!");
        }
       
       


    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
    }
console.log(playerSelection, computerSelection);
