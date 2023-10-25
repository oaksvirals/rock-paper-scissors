// Computer picks their choice
//  Comp. generates a random number
//  IF number <=3 choice is Rock
//  IF number >3 && <=6 choice is Paper
//  IF number >6 choice is Scissors
//  computer choice is stored as a variable computerSelection

// Player picks their choice
//  alert box pops up requesting user input of either rock, paper, or scissors
//  alert box will account for any variations like RoCk or ROCK etc.
//  players input is stored as a variable playerSelection

// Playing a single round of rock, paper, scissors
//  new function with 2 paramaters to pick the winner: theWinner(playerSelection, computerSelection)
//  compare the inputs and RETURN a STRING delcaring winning/losing text
//  !tenary operator might work good here


// Computer picks their choice
function getComputerChoice() {
    let rng = Math.random() * 10

    return (rng <= 3) ? 'rock'
    : (rng > 6) ? 'scissors'
    : 'paper'
}

// Player picks their choice
function getPlayerChoice() {
    let select = prompt('Please type in your selection of Rock, Paper, or Scissors');
    let lowResponse = select.toLowerCase()
    return lowResponse
}

// Playing a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    // player has rock
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie! Try again.';
    }

    // player has paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper.';
    } else if (playerSelection ==='paper' && computerSelection === 'paper') {
        return 'Tie! Try again.';
    }

    // player has scissors
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie! Try again.';
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))