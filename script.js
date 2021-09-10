'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const again = document.querySelector('.again');
const check = document.querySelector('.check');

let number = document.querySelector('.number');
let message = document.querySelector('.message');
let scoreTag = document.querySelector('.score');
let highScoreTag = document.querySelector('.highscore');

function updateScore() {
    if(score > 1) {
        score--;
        scoreTag.textContent = score;
    } else {
        score = 20;
        scoreTag.textContent = 0;
        message.textContent = 'You Lose Buddy!';
        secretNumber = Math.trunc(Math.random() * 20 + 1);
    }
}

function reset() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    message.textContent = 'Start guessing ...';
    number.textContent = '?';
    scoreTag.textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

}

check.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        message.textContent = 'No Number';
        updateScore();
    } else if(guess > secretNumber) {
        message.textContent = 'Think Low!';
        updateScore();
    } else if(guess < secretNumber) {
        message.textContent = 'Think High!';
        updateScore();
    } else {
        message.textContent = 'Correct';
        number.textContent = guess;
        if(guess > highScore) {
            highScore = guess;
            highScoreTag.textContent = highScore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        setTimeout(reset, 2000);
    }
})

again.addEventListener('click', reset);
