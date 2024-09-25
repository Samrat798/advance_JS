'use strict';

const player0Dom = document.querySelector('.player--0');
const player1Dom = document.querySelector('.player--1');
const score0Dom = document.querySelector('#score--0');
const score1Dom = document.querySelector('#score--1');
const diceDom = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');

const scores = [0, 0];
let currScore = 0;
let activePlayer = 0;
let playing = true;

// default setup
score0Dom.textContent = 0;
score1Dom.textContent = 0;
diceDom.classList.add('hidden');

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Dom.classList.toggle('player--active');
  player1Dom.classList.toggle('player--active');
}

// rolling dice function
btnRoll.addEventListener('click', function () {
  // generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceDom.classList.remove('hidden');
  diceDom.src = `dice-${dice}.png`;

  // check for rolled 1: if true, switch to the next player
  if (dice !== 1) {
    // add dice to current score
    currScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  } else {
    // switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // Add current score to active player's score
  scores[activePlayer] += currScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // check if player's score is >= 100 then finish the game
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }

  // Switch to the next player
  switchPlayer();
});
