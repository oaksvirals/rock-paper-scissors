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

        return (rng < 1) ? winText = 'Hit! You Burn Your Enemy!'
        : (rng < 2) ? winText = 'Hit! They\'re Scorched!'
        : (rng < 3) ? winText = 'Hit! Dragon Breath Unleashed!'
        : (rng < 4) ? winText = 'Hit! You\'re on Fire!'
        : (rng < 5) ? winText = 'Hit! Inferno Blaze Victorious!'
        : (rng < 6) ? winText = 'Hit! Embers of Triumph Ignite!'
        : (rng < 7) ? winText = 'Hit! Cindered Foes, Fire Prevails!'
        : (rng < 8) ? winText = 'Hit! Pyroclastic Power Erupts!'
        : (rng < 9) ? winText = 'Hit! Burn Bright, Burn True!'
        :  winText = 'Hit! Ashen Wake, Flame Takes All!'
    };
    function paperWin() {
        let rng = Math.random() * 10;

        return (rng < 1) ? winText = 'Splash! Tidal Force Dominates!'
        : (rng < 2) ? winText = 'Splash! Wave of Victory Crashes Down!'
        : (rng < 3) ? winText = 'Splash! Aqua Assault Overwhelms!'
        : (rng < 4) ? winText = 'Splash! Flood of Triumph!'
        : (rng < 5) ? winText = 'Splash! Surging Seas Prevail!'
        : (rng < 6) ? winText = 'Splash! Torrential Triumph!'
        : (rng < 7) ? winText = 'Splash! Water Surge Consumes!'
        : (rng < 8) ? winText = 'Splash! Waters Wash Away Resistance!'
        : (rng < 9) ? winText = 'Splash! Unstoppable Tide Rises!'
        :  winText = 'Splash! Baptised by Magic!'
    };
    function scissorsWin() {
        let rng = Math.random() * 10;

        return (rng < 1) ? winText = 'Tangled! Nature\'s Grasp Ensnares!'
        : (rng < 2) ? winText = 'Tangled! Vines Tighten, Foe Restrained!'
        : (rng < 3) ? winText = 'Tangled! Entangled in Earthen Bonds!'
        : (rng < 4) ? winText = 'Tangled! Green Wrath Entwines!'
        : (rng < 5) ? winText = 'Tangled! Leafy Lockdown Achieved!'
        : (rng < 6) ? winText = 'Tangled! Vine Entanglement!'
        : (rng < 7) ? winText = 'Tangled! Roots Bind, Victory Assured!'
        : (rng < 8) ? winText = 'Tangled! Enveloped by Verdant Clutches!'
        : (rng < 9) ? winText = 'Tangled! Thicket Thralldom Triumphs!'
        :  winText = 'Tangled! Bramble\'s Embrace Seals Fate!'
    };
        // losses
    let loseText = '';

    function rockLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Ouch! Low Flame, Foe Strikes Back!'
        : (rng < 2) ? loseText = 'Ouch! Ember\'s Miss, Enemy\'s Hit!'
        : (rng < 3) ? loseText = 'Ouch! Fire Fails, Pain Prevails!'
        : (rng < 4) ? loseText = 'Ouch! Blaze Backfire, Damage Taken!'
        : (rng < 5) ? loseText = 'Ouch! Scorch Miss, Consequence!'
        : (rng < 6) ? loseText = 'Ouch! Fiery Fault, Struck in Return!'
        : (rng < 7) ? loseText = 'Ouch! Burn Missed, Brutally Bested!'
        : (rng < 8) ? loseText = 'Ouch! Ashes to Ashes, You Fall!'
        : (rng < 9) ? loseText = 'Ouch! Flare Sizzles, Foe Retaliates!'
        :  loseText = 'Ouch! That hurts...'
    };
    function paperLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Soaked! Water Whiffs, Enemy Scores!'
        : (rng < 2) ? loseText = 'Soaked! Wave Wanes, Wound Sustained!'
        : (rng < 3) ? loseText = 'Soaked! Stream Strays, Strike Endured!'
        : (rng < 4) ? loseText = 'Soaked! Missed Torrent, Take the Blow!'
        : (rng < 5) ? loseText = 'Soaked! Flood Falters, Foe\'s Revenge!'
        : (rng < 6) ? loseText = 'Soaked! Bad Ripple, Rival Retaliates!'
        : (rng < 7) ? loseText = 'Soaked! Aqua Aimless, Enemy Attacks!'
        : (rng < 8) ? loseText = 'Soaked! Deluge Dodged, Damage Dealt!'
        : (rng < 9) ? loseText = 'Soaked! Tide Turns, Enemy Strikes!'
        :  loseText = 'Soaked! Surge Stumbles, Suffer the Blow!'
    };
    function scissorsLoss() {
        let rng = Math.random() * 10;

        return (rng < 1) ? loseText = 'Stung! Vines Veer, Enemy Vengeance!'
        : (rng < 2) ? loseText = 'Stung! Foliage Fails, Foe Flourishes!'
        : (rng < 3) ? loseText = 'Stung! Entangle Error, Enemy Exploits!'
        : (rng < 4) ? loseText = 'Stung! Vines Blunder, Battered in Return!'
        : (rng < 5) ? loseText = 'Stung! Greenery Gaffe, Gets Grappled!'
        : (rng < 6) ? loseText = 'Stung! Thicket Down, Thrown into Turmoil!'
        : (rng < 7) ? loseText = 'Stung! Nature\'s Net Misses, Nemesis Strikes!'
        : (rng < 8) ? loseText = 'Stung! Leafy Lapse, Lashed by Foe!'
        : (rng < 9) ? loseText = 'Stung! Sprout Slip, Stricken by Adversary!"'
        :  loseText = 'Stung! Herbal Halt, Hit Hard by Rival!'
    };
        // ties
    let tieText = '';

    function tie() {
        let rng = Math.random() * 10;

        return (rng < 1) ? tieText = 'Tie! Mirror Move, Standoff Stands!'
        : (rng < 2) ? tieText = 'Tie! Equal Forces, Stalemate Strikes!'
        : (rng < 3) ? tieText = 'Tie! Clashing Copies, No Victor!'
        : (rng < 4) ? tieText = 'Tie! Identical Incantations, Impasse Ensues!'
        : (rng < 5) ? tieText = 'Tie! Dual Dance, Draw Declared!'
        : (rng < 6) ? tieText = 'Tie! Twin Tactics, Tie Taken!'
        : (rng < 7) ? tieText = 'Tie! Parallel Powers, Pointless Plight!'
        : (rng < 8) ? tieText = 'Tie! Same Spells, Stasis Secured!'
        : (rng < 9) ? tieText = 'Tie! Matching Magic, Muted Might!'
        :  tieText = 'Tie! Copycat Clash, Concluded in Tie!'
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
const resetArea = document.querySelector('#resetBox')
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton =document.querySelector('#scissors');
    // reset button
const resetButton = document.createElement('button');

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
        resetButton.textContent = 'Enemy Slain! (Play Again)';
        resetArea.appendChild(resetButton);
    } else if (computerScore === scoreLimit) {
        resetButton.textContent = 'You Died.... (Try Again)';
        resetArea.appendChild(resetButton);
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