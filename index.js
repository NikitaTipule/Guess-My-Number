'use strict'


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0

// Function to display message
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

// Event handler for onclick event of check button 
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(score > 0) {
        if(!guess) {
            displayMessage('⛔ No Number!');
        }
        else if(guess === secretNumber) {
            displayMessage('🎉 Correct Number!');
            // score--;
            document.querySelector('.score').textContent = score;
            if(score > highscore) {
                highscore = score;
            }
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.number').textContent = String(secretNumber);
            document.querySelector('h1').textContent = 'You Guessed the Number 👏';
            document.querySelector('body').style.backgroundColor = '#ea0';
            document.querySelector('h1').style.color = 'black';
            document.querySelector('p').style.color = 'black';
        }
        else if(guess > secretNumber) {
            displayMessage('📈 Too High');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        else {
            displayMessage('📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = highscore;

        }
    }
    else {
        displayMessage('You Lost the game 😌');
        document.querySelector('body').style.backgroundColor = 'brown';
        document.querySelector('h1').textContent = 'Correct Number'
        document.querySelector('.number').textContent = String(secretNumber);

    }
})


// 
document.querySelector('.again').addEventListener
('click', function() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
    document.querySelector('h1').textContent = 'Guess My Number!'
    document.querySelector('h1').style.color = 'aliceblue';
    document.querySelector('p').style.color = 'aliceblue';
    document.querySelector('.guess').style.color = 'aliceblue'

})