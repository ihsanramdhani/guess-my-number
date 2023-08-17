'use strict';

// generate random number from 1-20
let target = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const styleNumber = function (value) {
  document.querySelector('.number').style.width = value;
};

const backgroundColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};

const checkDisabled = function (value) {
  document.querySelector('.check').disabled = value;
};

const displayHighscore = function (number) {
  document.querySelector('.highscore').textContent = number;
};

const displayGuess = function (value) {
  document.querySelector('.guess').value = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // user doesn't input guess
  if (!guess) {
    displayMessage('No number!!');
  } else if (guess !== target) {
    // guess wrong
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(guess > target ? 'Too High!!' : 'Too Low!!');
    } else {
      score--;
      displayScore(score);
      displayMessage('You lose the game!!');
      checkDisabled(true);
    }
  } else if (guess === target) {
    // guess right
    displayMessage('Correct Number!!');
    displayNumber(target);
    styleNumber('30rem');
    backgroundColor('#60b347');

    const highscore = document.querySelector('.highscore').textContent;
    if (score > highscore) {
      displayHighscore(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  target = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  styleNumber('15rem');
  backgroundColor('#222');
  checkDisabled(false);
  displayGuess('');
});

console.log(target);
