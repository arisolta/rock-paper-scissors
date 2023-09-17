let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice(){
    let computerChoice;
    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum === 0){computerChoice = "ROCK"}
    else if (ranNum === 1){computerChoice = "PAPER"}
    else {computerChoice = "SCISSORS"};
    return computerChoice;
}

function disableButtons() {
    buttons.forEach(elem => {elem.disabled = true})
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let result = "";

    if (playerChoice === computerChoice){
        result = (`Tie, you both chose ${playerChoice}` + "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
    }
    else if ((computerChoice === "ROCK" && playerChoice === "PAPER") || 
    (computerChoice === "PAPER" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "ROCK")){
        playerScore++;
        result = (`You win! Player: ${playerChoice} / Computer: ${computerChoice}` + "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)
        if (playerScore == 5){
            result += "<br>You won the game!!!";
            disableButtons();
        }
    }
    else {
        computerScore++;
        result = (`You Lose! Player: ${playerChoice} / Computer: ${computerChoice}` + "<br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
        if (computerScore == 5){
            result += "<br>You lost the game!!!";
            disableButtons();
        }
    }

    document.getElementById("result").innerHTML = result;
    return
}

buttons.forEach(button => {button.addEventListener("click", () => playRound(button.value))});


