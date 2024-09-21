'use strict';

let secNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const domNumber = document.querySelector('.number');
const domScore = document.querySelector('.score');
const reset = document.querySelector('.again');
const domHighScore = document.querySelector('.highscore');

console.log(secNumber);

check.addEventListener('click', function () {
  let guessValue = Number(guess.value);
  if (!guessValue) {
    message.textContent = 'Please enter a number...';
  }
  if (secNumber === guessValue) {
    domNumber.textContent = secNumber;
    domNumber.style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    message.textContent = '🎉 Correct Number!';
    if (score > highScore) {
      highScore = score;
      domHighScore.textContent = highScore;
    }
  }
  if (secNumber !== guessValue) {
    if (score > 1) {
      secNumber < guessValue
        ? (message.textContent = '📈 Too high!')
        : (message.textContent = '📉 Too low!');
      score--;
      domScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      domScore.textContent = 0;
    }
  }
});

reset.addEventListener('click', function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';
  domNumber.style.width = '15rem';
  domNumber.textContent = '?';
  guess.value = '';
  message.textContent = 'Start guessing...';
  domScore.textContent = score;
});
