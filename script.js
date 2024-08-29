'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score < 2) {
    document.querySelector('.message').textContent = 'You Lost The Game 😿';
    score--;
    document.querySelector('.score').textContent = score;
    document.getElementById('btn').disabled = true;
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      '⛔ Guess a number between 1 and 20 ⛔';
  } else if (guess === number) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent =
      '🎉 You Guessed The Secret Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    document.getElementById('btn').disabled = true;
  } else if (guess !== number) {
    document.querySelector('.message').textContent =
      guess > number ? 'Guess a lower number 👇' : 'Guess a Higher Number 👆';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.getElementById('btn').disabled = false;
});
