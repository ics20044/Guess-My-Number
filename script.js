'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let winGame = false;

document.querySelector('.checkButton').addEventListener('click', function () {

    if (!winGame) {
        const guessNumber = Number(document.querySelector('.guessNumber').value);
        if (guessNumber < 1 || guessNumber > 20) {
            document.querySelector('.message').textContent = '⛔ You must select number between 1 to 20';
        } else if (guessNumber === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number. Yoy can play again to make greater highscore';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.numberSystem').style.width = '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            winGame = true;
        } else if (guessNumber !== secretNumber) {
            if (score > 1) {
                if (guessNumber > secretNumber) {
                    document.querySelector('.message').textContent = '📈 Too high!';
                } else {
                    document.querySelector('.message').textContent = '📉 Too low';
                }
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    }

});



document.querySelector('.againButton').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guesiing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.numberSystem').textContent = '?';
    document.querySelector('.guessNumber').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.numberSystem').style.width = '15rem';
    winGame = false;
});
