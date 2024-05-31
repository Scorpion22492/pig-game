"use strict";

let btnNewGame = document.querySelector(".new");
let scorePlayer0 = document.getElementById("score-0");
let scorePlayer1 = document.getElementById("score-1");
let currentPlayer0 = document.querySelector("#current-0");
let currentPlayer1 = document.querySelector("#current-1");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let player = document.querySelectorAll(".player");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
let dice = document.querySelector(".dice");
let diceNumber = 0;
let current0 = 0;
let current1 = 0;
let holdscore0 = 0;
let holdscore1 = 0;
dice.classList.add('hidden')
let rollDice = () => {
  for (let i = 0; i < player.length; i++) {
    if (
      player[i].classList.contains("player-active") &&
      player[i].classList.contains("player-0")
    ) {
      diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
      
      if (diceNumber !== 1) {
        dice.src = `dice-${diceNumber}.png`;
        dice.classList.remove('hidden')
        current0 += diceNumber;
        currentPlayer0.textContent = diceNumber;
        btnHold.addEventListener("click", hold);
      } else {
        dice.src = `dice-${diceNumber}.png`;
        if (holdscore0 !== 0) {
          holdscore0 = current0;
          scorePlayer0.textContent = holdscore0;
          currentPlayer0.textContent = 0;
          player0.classList.remove("player-active");
          player1.classList.add("player-active");
        } else {

          currentPlayer0.textContent = diceNumber;
          current0 = 0;
          // holdscore0 = 0;
          currentPlayer0.textContent = 0;
          player0.classList.remove("player-active");
          player1.classList.add("player-active");
          // passa outro jogador
        }
      }
    } else if (
      player[i].classList.contains("player-active") &&
      player[i].classList.contains("player-1")
    ) {
        dice.src = `dice-${diceNumber}.png`;
      diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
      if (diceNumber !== 1) {
        dice.classList.remove('hidden')
        current1 += diceNumber;
        currentPlayer1.textContent = diceNumber;
        btnHold.addEventListener("click", hold);
      } else {
        dice.src = `dice-${diceNumber}.png`;
        if (holdscore1 !== 0) {
          holdscore1 = current1;
          scorePlayer1.textContent = holdscore1;
          currentPlayer1.textContent = 0;
          player1.classList.remove("player-active");
          player0.classList.add("player-active");
        } else {
          current1 = 0;
          // holdscore1 = 0;
          currentPlayer1.textContent = 0;
          player1.classList.remove("player-active");
          player0.classList.add("player-active");
          // passa outro jogador
        }
      }
    }
  }
};

let hold = () => {
  if (player0.classList.contains("player-active")) {
    if (current0 !== 0) {
      console.log(holdscore0);
      holdscore0 = holdscore0 + current0;
      console.log(holdscore0);
    }
    if (holdscore0 !== 0) {
      console.log(holdscore0);
      scorePlayer0.textContent = holdscore0;
      currentPlayer0.textContent = 0;
      player0.classList.remove("player-active");
      player1.classList.add("player-active");
      // passa pra outro jogador
    } else {
      holdscore0 = 0;
      scorePlayer0.textContent = holdscore0;
      currentPlayer0.textContent = 0;
      player0.classList.remove("player-active");
      player1.classList.add("player-active");
      // passa pra outro jogador
    }
  } else {
    if (current1 !== 0) {
      holdscore1 += current1;
    }
    if (holdscore1 !== 0) {
      scorePlayer1.textContent = holdscore1;
      currentPlayer1.textContent = 0;
      player1.classList.remove("player-active");
      player0.classList.add("player-active");
      // passa pra outro jogador
    } else {
      holdscore1 = 0;
      scorePlayer1.textContent = holdscore1;
      currentPlayer1.textContent = 0;
      player1.classList.remove("player-active");
      player0.classList.add("player-active");
      // passa pra outro jogador
    }
  }
  console.log("player 1", holdscore0, "player 2", holdscore1);
  if (holdscore0 >= 100) {
    scorePlayer0.style.fontSize = "5rem";
    scorePlayer0.textContent = `WINNER ${holdscore0}`;
  } else if (holdscore1 >= 100) {
    scorePlayer1.style.fontSize = "5rem";
    scorePlayer1.textContent = `WINNER ${holdscore1}`;
  } else {
    console.log("Empate");
  }
};

btnRoll.addEventListener("click", rollDice);

btnNewGame.addEventListener("click", function () {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
   diceNumber = 0;
   current0 = 0;
   current1 = 0;
   holdscore0 = 0;
   holdscore1 = 0;
});
