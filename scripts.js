// functions
function getComputerChoice (){
    let nr = Math.random();
    let choice;
    if (nr < 1/3) choice = "rock";
    else if (nr > 1/3 && nr < 2/3) choice = "paper";
    else if (nr > 2/3) choice = "scissors";
    return choice;
}

function getHumanChoice (){
    let choice = prompt("Choose one: rock, paper or scissors");
    return choice;
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

function playGame(){
    for (let i = 0; i < 5; i++){
        const hselect = getHumanChoice().toLowerCase();
        const cselect = getComputerChoice().toLowerCase();
        playRound(hselect, cselect);
    }
}

let humanScore = 0, computerScore = 0;
playGame();
if (humanScore > computerScore) alert("END: You win!");
else if (computerScore > humanScore) alert("END: You lose!");
else alert("END: Draw!");