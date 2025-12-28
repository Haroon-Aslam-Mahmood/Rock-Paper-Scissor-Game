let userScore = 0;
let compScore = 0;
let btns = document.querySelectorAll('.btn')
let playerScores = document.querySelector('#playerScores'); 
let result = document.querySelector('.result p')


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let userChoice = e.target.className.split(' ')[1];
        let computerChoice = computerPlay();
        console.log(`User choice: ${userChoice}`);
        if (userChoice === computerChoice) {
            result.textContent = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userScore++;
            result.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        } else {
            compScore++;
            result.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        }
        updateScoreBoard();
    })
});

computerPlay = () => {
    let choices = ['rock', 'paper', 'scissors']
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

updateScoreBoard = () => {
    console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
    playerScores.innerText = `User: ${userScore} - Computer: ${compScore}`;
}