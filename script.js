'use strict';

const scoreA = document.querySelector('#score--0');
const scoreB = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHld = document.querySelector('.btn--hold');

const playerA = document.getElementById('current--0');
const playerB = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const pointsA = document.querySelector('#score--0');
const pointsB = document.querySelector('#score--1');

const rst = document.querySelector('.btn--new');
let playing;
let activePlayer;
let currentScore;
let scores;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const init = function () {
  scores = [0, 0];
  scoreA.textContent = 0;
  scoreB.textContent = 0;
  playing = true;
  activePlayer = 0;
  scoreA.textContent = 0;
  scoreB.textContent = 0;
  currentScore = 0;
  playerA.textContent = 0;
  playerB.textContent = 0;
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
btnRoll.addEventListener('click', function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${roll}.png`;

    if (roll !== 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHld.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      switchPlayer();
    }
  }
});
rst.addEventListener('click', init);
