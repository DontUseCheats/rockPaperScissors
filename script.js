// JavaScript Code
// Global Variables to keep track of score
let humanScore = 0;
let computerScore = 0;
let totalScore = 0;
let numberOfTies = 0;

// Creating random factor of Computers choice
function getComputerChoice() {
    let computersChoice = (Math.floor(Math.random() * 3));
    if (computersChoice === 0) {
        computersChoice = "rock";
    }
        else if (computersChoice === 1) {
            computersChoice = "paper";
        }
        else {
            computersChoice = "scissors";
        }
    return computersChoice;
}

// Play Round by Round
// Create Function that checks Human vs Computers Choice
// Plays First round off that and increments winners score
// Announces Winner
function playRound(humanChoice, computerChoice) {

    if (humanScore >= 3) {
        const endGame = document.querySelector("#endGame");
        endGame.textContent = "You win! out of 5 rounds.";
    }
        else if (computerScore >= 3) {
            const endGame = document.querySelector("#endGame");
            endGame.textContent = "You Lose! out of 5 rounds.";
        }
    
    if (humanChoice === computerChoice) {
        numberOfTies = numberOfTies + 1;
    }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore = humanScore + 1;
            totalScore = totalScore + 1;
            const results = document.querySelector("#results");
            results.textContent = "You win! " + humanChoice + " beats " + computerChoice + "    Your score: " + humanScore + "  Computer score: " + computerScore;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1;
            totalScore = totalScore + 1;
            const results = document.querySelector("#results");
            results.textContent = "You win! " + humanChoice + " beats " + computerChoice + "    Your score: " + humanScore + "  Computer score: " + computerScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            totalScore = totalScore + 1;
            const results = document.querySelector("#results");
            results.textContent = "You win! " + humanChoice + " beats " + computerChoice + "    Your score: " + humanScore + "  Computer score: " + computerScore;
        }
        else {
            computerScore = computerScore + 1;
            totalScore = totalScore + 1;
            const results = document.querySelector("#results");
            results.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "    Your score: " + humanScore + "  Computer score: " + computerScore;
        }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerChoice = e.target.id;
        playRound(playerChoice, getComputerChoice());
    });
});



// Creating playGame Function
// Consists of 5 rounds and outputs winner at end
// function playGame() {
//     while (totalScore !== 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if (humanScore > computerScore) {
//         return console.log("Out of 5 rounds you win!    Number of Ties: " + numberOfTies);
//     }
//     else {
//         return console.log("Out of 5 rounds you lose!   Number of Ties: " + numberOfTies);
//     }
//     }

    playRound();
