

function getComputerChoice(){
    let computerChoice;
    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum === 0){computerChoice = "ROCK"}
    else if (ranNum === 1){computerChoice = "PAPER"}
    else {computerChoice = "SCISSORS"};
    return computerChoice;
}

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Rock, Paper, or Scissors? ").toUpperCase();
        if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
            return playerChoice;
        } else {
            console.log("Invalid input. Please enter ROCK, PAPER, or SCISSORS.");
        }
    }
}


function playGame(playerChoice, computerChoice){

    if (computerChoice === playerChoice){return `DRAW!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "ROCK" && playerChoice === "PAPER"){return `Player Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "ROCK" && playerChoice === "SCISSORS"){return `Computer Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "PAPER" && playerChoice === "ROCK"){return `Computer Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "PAPER" && playerChoice === "SCISSORS"){return `Player Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "SCISSORS" && playerChoice === "PAPER"){return `Computer Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`}
    else if (computerChoice === "SCISSORS" && playerChoice === "ROCK"){return `Player Wins!!! \n Your Choice: ${playerChoice} \n Computer's choice: ${computerChoice}`};

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    while (rounds > 0) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();

        const result = playGame(playerChoice, computerChoice);
        console.log(result);

        if (result.includes("Player Wins")) {
            playerScore++;
        } else if (result.includes("Computer Wins")) {
            computerScore++;
        }

        rounds--;
    }

    if (computerScore > playerScore) {
        return `Computer Wins! ${computerScore}-${playerScore}`;
    } else if (playerScore > computerScore) {
        return `Player Wins! ${playerScore}-${computerScore}`;
    } else {
        return "It's a Draw!";
    }
}


console.log(game());


