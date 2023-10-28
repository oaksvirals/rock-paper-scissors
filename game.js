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
let computerSelection = '';

function getComputerChoice() {
    let rng = Math.random() * 10

    return (rng <= 3) ? computerSelection = 'rock'
    : (rng > 6) ? computerSelection = 'scissors'
    : computerSelection = 'paper'
};

getComputerChoice();

// Playing a single round of rock, paper, scissors
const roundCount = document.querySelector('.roundResults h2');
const roundResults = document.querySelector('.roundResults p');
const playersPoints = document.querySelector('.playerScore');
const computersPoints = document.querySelector('.computerScore');

let playerScore = 0;
let computerScore = 0;
let numberRound = 1;
let playerScoreString = '0';
let ComputerScoreString = '0';

function playRound(playerSelection, computerSelection) {

    getComputerChoice();
    console.log(computerSelection, ':Computer Selection')
    
    // player has rock
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        playerScoreString = playerScore;
        numberRound++;
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        ComputerScoreString = computerScore;
        numberRound++;
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        numberRound++;
        return 'Tie! Try again.';
    }

    // player has paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        playerScoreString = playerScore;
        numberRound++;
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        ComputerScoreString = computerScore;
        numberRound++;
        return 'You Lose! Scissors beats Paper.';
    } else if (playerSelection ==='paper' && computerSelection === 'paper') {
        numberRound++;
        return 'Tie! Try again.';
    }

    // player has scissors
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        playerScoreString = playerScore;
        numberRound++;
        return 'You Win! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        ComputerScoreString = computerScore;
        numberRound++;
        return 'You Lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        numberRound++;
        return 'Tie! Try again.';
    }

};

// Action Buttons
const buttonArea = document.querySelector('.buttonArea');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton =document.querySelector('#scissors');
    // reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'PLAY AGAIN';

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    numberRound = 1;
    playerScoreString = playerScore;
    ComputerScoreString = computerScore;
    playersPoints.textContent = playerScoreString;
    computersPoints.textContent = ComputerScoreString;
    roundCount.textContent = 'Round: 0 (Play Again!)';
    roundResults.textContent = '...';
    computerSelection = getComputerChoice();
    resetButton.remove();
});

// Score Limit
let scoreLimit = 5;

// Announcing Winner
function scoreKeeper() {
    if (playerScore === scoreLimit) {
        playersPoints.textContent = 'WINNER!';
        computersPoints.textContent = 'LOSER...';
        buttonArea.appendChild(resetButton);
    } else if (computerScore === scoreLimit) {
        playersPoints.textContent = 'LOSER...';
        computersPoints.textContent = 'WINNER!';
        buttonArea.appendChild(resetButton);
    };
};

// Action Button Events
rockButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('rock', computerSelection);
        playersPoints.textContent = playerScoreString;
        computersPoints.textContent = ComputerScoreString;
    };
        
    if (playerScore + computerScore >= scoreLimit) {
            scoreKeeper();
    };
});

paperButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('paper', computerSelection);
        playersPoints.textContent = playerScoreString;
        computersPoints.textContent = ComputerScoreString;
        };
        
    if (playerScore + computerScore >= scoreLimit) {
            scoreKeeper();
        };
});

scissorsButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('scissors', computerSelection);
        playersPoints.textContent = playerScoreString;
        computersPoints.textContent = ComputerScoreString;
    };
    
    if (playerScore + computerScore >= scoreLimit) {
        scoreKeeper();
    };
});