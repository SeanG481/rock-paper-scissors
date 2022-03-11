// Get Rock/Paper/Scissors choice from computer
function computerPlay() {
    randNum = Math.floor(Math.random()*3+1);

    if  (randNum == 1) return 'rock';
    else if (randNum == 2) return 'paper';
    else if (randNum == 3) return 'scissors';
}

// Validate input from user
function isInvalid(playerSelection) {
    if (playerSelection != null) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == 'rock' || (playerSelection == 'paper') || (playerSelection == 'scissors')) return false;
        else return true;
    } else if (playerSelection == null) return true;
}

// Determine winner of one round between computer & player
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') return 'It\'s a tie! You both chose rock.';
        else if (computerSelection == 'paper') return 'You lose! Paper beats rock.';
        else if (computerSelection == 'scissors') return 'You win! Rock beats scissors.';
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') return 'You win! Paper beats rock.';
        else if (computerSelection == 'paper') return 'It\'s a tie! You both chose paper.';
        else if (computerSelection == 'scissors') return 'You lose! Scissors beats paper.';
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') return 'You lose! Rock beats scissors.';
        else if (computerSelection == 'paper') return 'You win! Scissors beats paper.';
        else if (computerSelection == 'scissors') return 'It\'s a tie! You both chose scissors.';
    }
}

// Score 5 rounds (one "game") and declare user as winner/loser.
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let roundResult = '';
    let gameResult = '';
    let computerSelection = ''
    let playerSelection = '';

    for (let i=0; i<5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Enter rock, paper or scissors")

        while (isInvalid(playerSelection)) {
            playerSelection = prompt("Your choice was invalid. Please enter a VALID CHOICE: rock, paper or scissors");
        };
        playerSelection = playerSelection.toLowerCase();

        roundResult = playRound(playerSelection,computerSelection);
        console.log(roundResult);
        if (roundResult.includes('win')) playerScore++;
        else if (roundResult.includes('lose')) computerScore++;
        else if (roundResult.includes('tie'));
    }

    if (computerScore > playerScore) gameResult = 'Lose';
    else if (playerScore > computerScore) gameResult = 'Win';
    else if (playerScore == computerScore) gameResult = 'Tied';

    return `You ${gameResult}! The Score was ${playerScore} to ${computerScore}`;
}

console.log(game());