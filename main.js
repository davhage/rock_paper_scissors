let playerSelection;
let youWin = 'You win!';
let computerWins = 'Computer wins!';
let outcome;
let playerScore = 0;
let computerScore = 0; 
let playerChoice;   

const btnRock = document.getElementById('rock-button');
const btnPaper = document.getElementById('paper-button');
const btnScissor = document.getElementById('scissors-button');
const results = document.getElementById('result');
const playerPoints = document.getElementById('player-result');
const computerPoints = document.getElementById('computer-result');
const p = document.createElement('p');
const resetBtn = document.getElementById('new-game-btn');

//Refresh page for new game
resetBtn.addEventListener('click', () => location.reload());

//Computer play function
const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Play round function
function playRound() {
    let rock = btnRock;
    let paper = btnPaper;
    let scissor = btnScissor;
    computerSelection = computerPlay();
    
    if(playerSelection === computerSelection) {
        console.log('It\'s a tie')
        return 'It\'s a tie';
        //results.textContent = 'It\'s a tie';
    } else if(playerSelection === scissor && computerSelection !== 'rock') {
        console.log(youWin)
        return youWin;
        //results.textContent = youWin;
    } else if(playerSelection === paper && computerSelection !== 'scissors') {
        console.log(youWin)
        return youWin;
        //results.textContent = youWin;
    } else if(playerSelection === rock && computerSelection !== 'paper') {
        console.log(youWin)
        return youWin;
        //results.textContent = youWin;
    } else {
        console.log('Computer wins!')
        return computerWins;
        //results.textContent = computerWins;
    }
} 

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissor.addEventListener('click', playRound);

const game = () => {
    for(let i = 0; i < 5; i++) {
        outcome = playRound();
        if(outcome == youWin) {
            playerScore++;
        } else if(outcome == computerWins) {
            computerScore++;
        }
        console.log(outcome);
        console.log(playerScore);
        console.log(computerScore);
    }
    if(playerScore === computerScore) {
        return `Tie Game! You scored ${playerScore}, computer scored ${computerScore}`;
    } else if(playerScore > computerScore) {
        return `You win! You scored ${playerScore}, computer scored ${computerScore}`;
    } else if(playerScore < computerScore) {
        return `You Lose! You scored ${playerScore}, computer scored ${computerScore}`;
    }
}
results.appendChild(p);
p.innerHTML = game();