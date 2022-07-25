// ******* classic “rock paper scissors” *********
// ******* ----------------------------- *********

// ** Variable Declarations **

let input = 'scissors'
let playerSelection = input.toLowerCase();

// ** Function Declarations **

function computerPlay() {  // This function will return ‘Rock’, ‘Paper’ or ‘Scissors’.      
    const randomNumber = Math.floor(Math.random() * 3) +1 //Randomizes 1, 2, or 3.
    if (randomNumber === 1) {
        pcChoice = 'rock'
    }
    if (randomNumber === 2) {
        pcChoice = 'scissors'
    }
    if (randomNumber === 3) {
        pcChoice = 'paper'
    }
    let computerSelection = pcChoice
	return pcChoice;
}

function playRound(playerSelection, computerSelection) { //Compares 'playerSelection' VS 'computerSelection' and determines wheter you win our loose. Returns "result"
    if (computerSelection === playerSelection) {
        result = 'Its a draw'
    }
    if (computerSelection === 'rock' && playerSelection ==='paper') {
        result = 'You win!'
    }
    if (computerSelection === 'rock' && playerSelection ==='scissors') {
        result = 'You lose!'
    }
    if (computerSelection === 'paper' && playerSelection ==='scissors') {
        result = 'You win!'
    }
    if (computerSelection === 'paper' && playerSelection ==='rock') {
        result = 'You lose!'
    }
    if (computerSelection === 'scissors' && playerSelection ==='paper') {
        result = 'You lose!'
    }
    if (computerSelection === 'scissors' && playerSelection ==='rock') {
        result = 'You win!'
    }
	return result;
}

function game() {
    let playerTotal = 0
    let pcTotal = 0

    for(i=1; i <= 5; i++) { //Cycles game through (5) rounds of "playRound()"
        
        computerSelection = computerPlay() //Have to reassign a value to computerSelection, otherwise it retains original passed value and repeats it.
        let outcome = playRound(playerSelection, computerSelection) //Assigns returned value of "playRound()" to "outcome".

        if (outcome === 'You win!') { // Increases "playerTotal" by 1 if player wins round
            playerTotal++
        }else if(outcome === 'You lose!') { // Increases "pcTotal" by 1 if computer wins round
            pcTotal++
        }

        console.log(' ') //Creates space
        console.log(i) //Displays round number
        console.log('Player Selection: ' + playerSelection)
        console.log('Computer Selection: ' + computerSelection)
        console.log(outcome) // Displays returned value of "playRound()"
        console.log(' ') //Creates space

    }

    console.log('player Total: ' + playerTotal)
    console.log('computerTotal: ' + pcTotal)
    if (playerTotal > pcTotal) {
         winner = 'Player!'
    } else if(playerTotal < pcTotal) {
         winner = 'Computer!'
    } else {
         winner = "No one!"
    }
    console.log('The winner is: ' + winner)
}

// ** DOM Interactions **

// ** MAIN ***
game()