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
const roundCount = document.querySelector('.msgBox h4');
const roundResults = document.querySelector('.msgBox p');

let playerScore = 0;
let computerScore = 0;
let numberRound = 1;

function playRound(playerSelection, computerSelection) {

    getComputerChoice();
    
    // player has rock
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        numberRound++;
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        numberRound++;
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        numberRound++;
        return 'Tie! Try again.';
    }

    // player has paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        numberRound++;
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        numberRound++;
        return 'You Lose! Scissors beats Paper.';
    } else if (playerSelection ==='paper' && computerSelection === 'paper') {
        numberRound++;
        return 'Tie! Try again.';
    }

    // player has scissors
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        numberRound++;
        return 'You Win! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        numberRound++;
        return 'You Lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        numberRound++;
        return 'Tie! Try again.';
    }

};

// Hearts
const playerHeart5 = document.querySelector('#playerHeart5');
const playerHeart4 = document.querySelector('#playerHeart4');
const playerHeart3 = document.querySelector('#playerHeart3');
const playerHeart2 = document.querySelector('#playerHeart2');
const playerHeart1 = document.querySelector('#playerHeart1');
const enemyHeart5 = document.querySelector('#enemyHeart5');
const enemyHeart4 = document.querySelector('#enemyHeart4');
const enemyHeart3 = document.querySelector('#enemyHeart3');
const enemyHeart2 = document.querySelector('#enemyHeart2');
const enemyHeart1 = document.querySelector('#enemyHeart1');

    // hiding hearts
function hideHeart(heart) {
    heart.style.visibility = 'hidden';
};
    // showing hearts
function showHeart(heart) {
    heart.style.visibility = 'visible';
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
    roundCount.textContent = 'Ready to battle?';
    roundResults.textContent = 'Choose your attack to begin...';
    computerSelection = getComputerChoice();

    showHeart(playerHeart1);
    showHeart(playerHeart2);
    showHeart(playerHeart3);
    showHeart(playerHeart4);
    showHeart(playerHeart5);
    showHeart(enemyHeart1);
    showHeart(enemyHeart2);
    showHeart(enemyHeart3);
    showHeart(enemyHeart4);
    showHeart(enemyHeart5);

    resetButton.remove();
});

// Score Limit
let scoreLimit = 5;

// Announcing Winner
function scoreKeeper() {
    if (playerScore === scoreLimit) {
        buttonArea.appendChild(resetButton);
    } else if (computerScore === scoreLimit) {
        buttonArea.appendChild(resetButton);
    };
};

// Action Button Events
rockButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('rock', computerSelection);
    };
        
    switch(computerScore) {
        case 1:
            hideHeart(playerHeart5);
            break;
        case 2:
            hideHeart(playerHeart4);
            break;
        case 3:
            hideHeart(playerHeart3);
            break;
        case 4:
            hideHeart(playerHeart2);
            break;
        case 5:
            hideHeart(playerHeart1);
            scoreKeeper();
            break;
    };

    switch(playerScore) {
        case 1:
            hideHeart(enemyHeart1);
            break;
        case 2:
            hideHeart(enemyHeart2);
            break;
        case 3:
            hideHeart(enemyHeart3);
            break;
        case 4:
            hideHeart(enemyHeart4);
            break;
        case 5:
            hideHeart(enemyHeart5);
            scoreKeeper();
            break;
    };

});

paperButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('paper', computerSelection);
    };
        
    switch(computerScore) {
        case 1:
            hideHeart(playerHeart5);
            break;
        case 2:
            hideHeart(playerHeart4);
            break;
        case 3:
            hideHeart(playerHeart3);
            break;
        case 4:
            hideHeart(playerHeart2);
            break;
        case 5:
            hideHeart(playerHeart1);
            scoreKeeper();
            break;
    };

    switch(playerScore) {
        case 1:
            hideHeart(enemyHeart1);
            break;
        case 2:
            hideHeart(enemyHeart2);
            break;
        case 3:
            hideHeart(enemyHeart3);
            break;
        case 4:
            hideHeart(enemyHeart4);
            break;
        case 5:
            hideHeart(enemyHeart5);
            scoreKeeper();
            break;
    };
});

scissorsButton.addEventListener('click', () => {
    if (playerScore !== scoreLimit && computerScore !== scoreLimit) {
        roundCount.textContent = 'Round: ' + numberRound;
        roundResults.textContent = playRound('scissors', computerSelection);
    };
    
    switch(computerScore) {
        case 1:
            hideHeart(playerHeart5);
            break;
        case 2:
            hideHeart(playerHeart4);
            break;
        case 3:
            hideHeart(playerHeart3);
            break;
        case 4:
            hideHeart(playerHeart2);
            break;
        case 5:
            hideHeart(playerHeart1);
            scoreKeeper();
            break;
    };

    switch(playerScore) {
        case 1:
            hideHeart(enemyHeart1);
            break;
        case 2:
            hideHeart(enemyHeart2);
            break;
        case 3:
            hideHeart(enemyHeart3);
            break;
        case 4:
            hideHeart(enemyHeart4);
            break;
        case 5:
            hideHeart(enemyHeart5);
            scoreKeeper();
            break;
    };
});