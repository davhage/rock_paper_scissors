let playerSelection;
let youWin = 'You win!';
let computerWins = 'Computer wins!';

const btnRock = document.querySelector('#btn1');
const btnPaper = document.querySelector('#btn2');
const btnScissor = document.querySelector('#btn3');
const results = document.querySelector('#result');
const p = document.createElement('p');

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    let choose = options[Math.floor(Math.random() * options.length)];
    return choose;
}

function playRound() {
    playerSelection = btnRock || btnPaper || btnScissor;
    let computerSelection = computerPlay();
    
    if(playerSelection === computerSelection) {
        return 'It\'s a tie';
        //console.log('It\'s a tie')
    } else if(playerSelection === btnScissor && computerSelection !== 'rock') {
        return youWin;
        //console.log(youWin)
    } else if(playerSelection === btnPaper && computerSelection !== 'scissors') {
        return youWin;
        //console.log(youWin)
    } else if(playerSelection === btnRock && computerSelection !== 'paper') {
        return youWin;
        //console.log(youWin)
    } else {
        return computerWins;
        //console.log('Computer wins!')
    }
} 

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissor.addEventListener('click', playRound);

const game = () => {
    let outcome;
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++) {
        outcome = playRound();
        if(outcome == youWin) {
            playerScore++;
        } else if(outcome == computerWins) {
            computerScore++;
        }
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