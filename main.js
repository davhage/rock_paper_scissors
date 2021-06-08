let playerSelection;

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    let choose = options[Math.floor(Math.random() * options.length)];
    return choose;
}

function playRound() {
    playerSelection = prompt('Enter rock, paper, scissors').toLowerCase().trim();
    let computerSelection = computerPlay();

    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'enter a valid Word!';
    } else if(playerSelection === computerSelection) {
        return 'It\'s a tie'
    } else if(playerSelection === 'scissors' && computerSelection !== 'rock') {
        return 'you win!';
    } else if(playerSelection === 'paper' && computerSelection !== 'scissors') {
        return 'you win!';
    } else if(playerSelection === 'rock' && computerSelection !== 'paper') {
        return 'you win!';
    } else {
        return 'Computer wins';
    }
}

const game = () => {
    let outcome;
    let playerScore = 0;
    let computerScore = 0;
    
    
    for(let i = 0; i < 5; i++) {
        outcome = playRound();
        console.log(outcome);
        
        if(outcome == 'you win!') {
            playerScore++;
        } else if(outcome == 'Computer wins') {
            computerScore++;
        }
    }
    if(playerScore === computerScore) {
        console.log(`Tie Game! You scored ${playerScore}, computer scored ${computerScore}`);
    } else if(playerScore > computerScore) {
        console.log(`You win1 You scored ${playerScore}, computer scored ${computerScore}`)
    } else if(playerScore < computerScore) {
        console.log(`You Lose! You scored ${playerScore}, computer scored ${computerScore}`)
    }
}

game();