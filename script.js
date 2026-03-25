// JavaScript Code

let humanScore = 0;
let computerScore = 0;

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

// Creating The Human Choice
// Prompts user input
function getHumanChoice(userinput) {
    userinput = prompt("Rock Paper or Scissors?");
    userinput = userinput.toLowerCase(1);
    return userinput;
}

// Play Round by Round
// Create Function that checks Human vs Computers Choice
// Plays First round off that and increments winners score
// Announces Winner

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore = humanScore + 1;
    }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
        }
        else {
            computerScore = computerScore + 1;
        }

    if (humanScore === 1) {
        return console.log("You Win! " + humanChoice + " beats " + computerChoice);
    }
        else {
            return console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);