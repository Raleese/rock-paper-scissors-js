// functions
function getComputerChoice (){
    let nr = Math.random();
    let choice;
    if (nr < 1/3) choice = "Rock";
    else if (nr > 1/3 && nr < 2/3) choice = "Paper";
    else if (nr > 2/3) choice = "Scissors";
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper" || humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore++;
        result.textContent = "You win! " + humanScore + ":" + computerScore;
    }
    else if (humanChoice == computerChoice){
        result.textContent = "DRAW! " + humanScore + ":" + computerScore;
    }
    else{
        computerScore++;
        result.textContent = "You lose! " + humanScore + ":" + computerScore;
    }

    if (humanScore == 5){
        result.textContent = "You win the game! " + humanScore + ":" + computerScore;
        computerScore = humanScore = 0;
    }
    if (computerScore == 5){
        result.textContent = "You lose the game! " + humanScore + ":" + computerScore;;
        computerScore = humanScore = 0;
    }
}

// code
let humanScore = 0, computerScore = 0, choice1;

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {playRound(buttons[i].textContent, getComputerChoice())});
}
