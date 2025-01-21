

//get choice from computer
//create function to generate computer choice to string
// get choice from user
// create function for human choice from prompt and convert to lowercase string 

//create playRound function (kept at bottom to show process)
// compare choices in playRound using logical operators (&&)
//use conditional statements (if, else) to return score
//console log the results 

//create playGame function to run playRound 5 times
//move playRound into playGame (declare playRound in playGame)
// create for loop for 5 rounds
// pass the choice functions as parameters into playRound

//console log the score
// console log the win/lose message using conditional (if else) statement







let humanScore = 0
let computerScore = 0
playGame()

//create function to generate computer choice
function getComputerChoice() {
    let compChoice = Math.random() * 100  
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

 // get choice from user
// create function for human choice from prompt and convert to lowercase string 
function getHumanChoice() {
   let humanChoice = prompt("Type your choice: rock, paper or scissors")
return humanChoice.toLowerCase()
}
    

//create playGame function to run playRound 5 times
//move playRound into playGame (declare playRound in playGame)
// create for loop for 5 rounds
// pass the choice functions as parameters into playRound


function playGame(){
    for (i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    function playRound (getHumanChoice, getComputerChoice){
        if (getHumanChoice === getComputerChoice){
            console.log("Draw") 
        }
    
        else if (getHumanChoice === "rock" && getComputerChoice === "scissors"){
            console.log("You win! Rock beats scissors");
            return humanScore++;
        }
        else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
            console.log("You Lose! Paper beats rock")
            return computerScore++;
        }
        else if (getHumanChoice === "paper" && getComputerChoice === "rock"){
            console.log("You Win! Paper beats rock")
            return humanScore++;
        }
    
        else if (getHumanChoice === "paper" && getComputerChoice === "scissors"){
            console.log("You Lose! Scissors beat paper")
            return computerScore++;
        }
    
        else if (getHumanChoice === "scissors" && getComputerChoice === "paper"){
            console.log("You Win! Scissors beat paper")
            return humanScore++;
        }
    
        else {
            console.log("You Lose! Rock beats scissors")
            return computerScore++;
        }   
    
    }
     
}


//console log the score
// console log the win/lose message using conditional (if else) statement

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)

if (humanScore === computerScore){
    console.log("You TIED")
}
else if(humanScore > computerScore){
    console.log("You WIN!!!")
}
else {
    console.log("You LOSE!!!")
}



//create playRound function 
// compare choices in playRound using logical operators (&&)
//use conditional statements (if, else) to return score
//console log the results 

// function playRound (humanFinalAnswer, computerFinalAnswer){
//     if (humanFinalAnswer === computerFinalAnswer){
//         console.log("Draw") 
//     }

//     else if (humanFinalAnswer === "rock" && computerFinalAnswer === "scissors"){
//         console.log("You win! Rock beats scissors");
//         return humanScore++;
//     }
//     else if (humanFinalAnswer === "rock" && computerFinalAnswer === "paper") {
//         console.log("You Lose! Paper beats rock")
//         return computerScore++;
//     }
//     else if (humanFinalAnswer === "paper" && computerFinalAnswer === "rock"){
//         console.log("You Win! Paper beats rock")
//         return humanScore++;
//     }

//     else if (humanFinalAnswer === "paper" && computerFinalAnswer === "scissors"){
//         console.log("You Lose! Scissors beat paper")
//         return computerScore++;
//     }

//     else if (humanFinalAnswer === "scissors" && computerFinalAnswer === "paper"){
//         console.log("You Win! Scissors beat paper")
//         return humanScore++;
//     }

//     else {
//         console.log("You Lose! Rock beats scissors")
//         return computerScore++;
//     }
        

// }







