// functions
function getComputerChoice (){
    let nr = Math.random();
    let choice;
    if (nr < 1/3) choice = "rock";
    else if (nr > 1/3 && nr < 2/3) choice = "paper";
    else if (nr > 2/3) choice = "scissors";
    return choice;
}

function getHumanChoice (input){
    console.log(input.textContent);
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        alert("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (humanChoice == computerChoice){
        alert("Draw!");
    }
    else{
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice);
    }
    console.log(humanScore);
}


// code
let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {getHumanChoice(buttons[i])});
}
