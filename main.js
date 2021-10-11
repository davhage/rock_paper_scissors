let playerScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll('input');
const resetBtn = document.getElementById('new-game-btn');

//Refresh page for new game
resetBtn.addEventListener('click', () => location.reload());

//Computer play function
const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Disabled buttons funtcion
const disableBtn = () => {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//Play round function
const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    let result = '';

    if((playerSelection === 'scissors' && computerSelection == 'paper') || 
       (playerSelection === 'paper' && computerSelection == 'rock') ||
       (playerSelection === 'rock' && computerSelection == 'scissors')) {
            playerScore += 1;
            player = (`You win! <br>You score ${playerScore}`);

            if(playerScore == 5) {
                result += `You Win!! <br>You score: ${playerScore} <br>computer score: ${computerScore} <br>let\'s play again`;
                disableBtn();
            }
    } else if(playerSelection === computerSelection) {
        result = (`It's a tie`);
    } else {
        computerScore += 1;
        computer = (`You Lose! <br>computer scored ${computerScore}`);
        
        if(computerScore == 5) {
            result += `Loser!! Computer Wins <br>You score: ${playerScore} <br>computer score: ${computerScore}`;
            disableBtn();
        }
    }
    document.getElementById('player').innerHTML = player; 
    document.getElementById('result').innerHTML = result; 
    document.getElementById('computer').innerHTML = computer; 
} 

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})