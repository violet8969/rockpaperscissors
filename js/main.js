

//get choice from computer
//create function to generate computer choice
//store computer choice in a variable
// get choice from user
// allow user input with prompt
//store user choice in variable
// convert user choice to all lowercase
// compare choices
// if the same output "Draw"
// if computer wins output "Computer wins"
//if user wins output " You win"



//store computer choice in a variable
const computerFinalAnswer = getComputerChoice()

//create function to generate computer choice
function getComputerChoice() {
    let compChoice = Math.random() * 100
    console.log(compChoice)    
    if (compChoice <= 33.333){
   return "rock" 
}
else if (compChoice >= 66.666){
    return "paper"
}   

else {
    return "scissors"
}
}

console.log("Computer played: " + computerFinalAnswer)

//store user choice in variable
const humanFinalAnswer = getHumanChoice()

// get choice from user
function getHumanChoice() {
    let humanChoice = prompt("Type your choice: rock, paper or scissors")
return humanChoice.toLowerCase()
}
    
console.log("You played: " + humanFinalAnswer)


let humanScore = 0
let computerScore = 0


function playRound (humanFinalAnswer, computerFinalAnswer){
    if (humanFinalAnswer === computerFinalAnswer){
        console.log("Draw") 
    }

    else if (humanFinalAnswer === "rock" && computerFinalAnswer === "scissors"){
        console.log("You win! Rock beats scissors");
        return humanScore++;
    }
    else if (humanFinalAnswer === "rock" && computerFinalAnswer === "paper") {
        console.log("You Lose! Paper beats rock")
        return computerScore++;
    }
    else if (humanFinalAnswer === "paper" && computerFinalAnswer === "rock"){
        console.log("You Win! Paper beats rock")
        return humanScore++;
    }

    else if (humanFinalAnswer === "paper" && computerFinalAnswer === "scissors"){
        console.log("You Lose! Scissors beat paper")
        return computerScore++;
    }

    else if (humanFinalAnswer === "scissors" && computerFinalAnswer === "paper"){
        console.log("You Win! Scissors beat paper")
        return humanScore++;
    }

    else {
        console.log("You Lose! Rock beats scissors")
        return computerScore++;
    }
        

}

playRound(humanFinalAnswer, computerFinalAnswer)

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)