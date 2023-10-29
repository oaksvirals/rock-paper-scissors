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

    // Win and Loss Phrases
        // wins
    let winText = '';

    function rockWin() {
        let rng = Math.random() * 10;

        return (rng < 1) ? winText = 'Hit! You burn your enemy!'
        : (rng < 2) ? winText = 'Hit! They\'re scorched!'
        : (rng < 3) ? winText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? winText = 'Hit! 4'
        : (rng < 5) ? winText = 'Hit! 5'
        : (rng < 6) ? winText = 'Hit! 6'
        : (rng < 7) ? winText = 'Hit! 7'
        : (rng < 8) ? winText = 'Hit! 8'
        : (rng < 9) ? winText = 'Hit! 9'
        :  winText = 'Hit! 10'
    };
    function paperWin() {
        let rng = Math.random() * 10;

        return (rng < 1) ? winText = 'Hit! You burn your enemy!'
        : (rng < 2) ? winText = 'Hit! They\'re scorched!'
        : (rng < 3) ? winText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? winText = 'Hit! 4'
        : (rng < 5) ? winText = 'Hit! 5'
        : (rng < 6) ? winText = 'Hit! 6'
        : (rng < 7) ? winText = 'Hit! 7'
        : (rng < 8) ? winText = 'Hit! 8'
        : (rng < 9) ? winText = 'Hit! 9'
        :  winText = 'Hit! 10'
    };
    function scissorsWin() {
        let rng = Math.random() * 10;

        return (rng < 1) ? winText = 'Hit! You burn your enemy!'
        : (rng < 2) ? winText = 'Hit! They\'re scorched!'
        : (rng < 3) ? winText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? winText = 'Hit! 4'
        : (rng < 5) ? winText = 'Hit! 5'
        : (rng < 6) ? winText = 'Hit! 6'
        : (rng < 7) ? winText = 'Hit! 7'
        : (rng < 8) ? winText = 'Hit! 8'
        : (rng < 9) ? winText = 'Hit! 9'
        :  winText = 'Hit! 10'
    };
        // losses
    let loseText = '';

    function rockLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Hit! You burn your enemy!'
        : (rng < 2) ? loseText = 'Hit! They\'re scorched!'
        : (rng < 3) ? loseText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? loseText = 'Hit! 4'
        : (rng < 5) ? loseText = 'Hit! 5'
        : (rng < 6) ? loseText = 'Hit! 6'
        : (rng < 7) ? loseText = 'Hit! 7'
        : (rng < 8) ? loseText = 'Hit! 8'
        : (rng < 9) ? loseText = 'Hit! 9'
        :  loseText = 'Hit! 10'
    };
    function paperLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Hit! You burn your enemy!'
        : (rng < 2) ? loseText = 'Hit! They\'re scorched!'
        : (rng < 3) ? loseText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? loseText = 'Hit! 4'
        : (rng < 5) ? loseText = 'Hit! 5'
        : (rng < 6) ? loseText = 'Hit! 6'
        : (rng < 7) ? loseText = 'Hit! 7'
        : (rng < 8) ? loseText = 'Hit! 8'
        : (rng < 9) ? loseText = 'Hit! 9'
        :  loseText = 'Hit! 10'
    };
    function scissorsLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Hit! You burn your enemy!'
        : (rng < 2) ? loseText = 'Hit! They\'re scorched!'
        : (rng < 3) ? loseText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? loseText = 'Hit! 4'
        : (rng < 5) ? loseText = 'Hit! 5'
        : (rng < 6) ? loseText = 'Hit! 6'
        : (rng < 7) ? loseText = 'Hit! 7'
        : (rng < 8) ? loseText = 'Hit! 8'
        : (rng < 9) ? loseText = 'Hit! 9'
        :  loseText = 'Hit! 10'
    };
        // ties
    let tieText = '';

    function tie() {
        let rng = Math.random() * 10;

        return (rng < 1) ? tieText = 'Hit! You burn your enemy!'
        : (rng < 2) ? tieText = 'Hit! They\'re scorched!'
        : (rng < 3) ? tieText = 'Hit! Dragon Breath unleashed!'
        : (rng < 4) ? tieText = 'Hit! 4'
        : (rng < 5) ? tieText = 'Hit! 5'
        : (rng < 6) ? tieText = 'Hit! 6'
        : (rng < 7) ? tieText = 'Hit! 7'
        : (rng < 8) ? tieText = 'Hit! 8'
        : (rng < 9) ? tieText = 'Hit! 9'
        :  tieText = 'Hit! 10'
    };

    // player has rock
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        numberRound++;
        rockWin()
        return winText;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        numberRound++;
        rockLoss();
        return loseText;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        numberRound++;
        tie();
        return tieText;
    }

    // player has paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        numberRound++;
        paperWin();
        return winText;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        numberRound++;
        paperLoss();
        return loseText;
    } else if (playerSelection ==='paper' && computerSelection === 'paper') {
        numberRound++;
        tie();
        return tieText;
    }

    // player has scissors
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        numberRound++;
        scissorsWin();
        return winText;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        numberRound++;
        scissorsLoss();
        return loseText;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        numberRound++;
        tie();
        return tieText;
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