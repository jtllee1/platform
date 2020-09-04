import { selection } from '../simonsays/selection';

const simonSays = () => {
  const option1 = document.getElementById("o-1");
  const option2 = document.getElementById("o-2");
  const option3 = document.getElementById("o-3");
  const option4 = document.getElementById("o-4");
  const option5 = document.getElementById("o-5");
  const gameState = document.getElementById("game-state");
  const start = document.querySelector(".start");
  let order = 0;

  option1.addEventListener('click', () => {
    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 1) {
      selection(1)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  option2.addEventListener('click', () => {
    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 2) {
      selection(2)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  option3.addEventListener('click', () => {
    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 3) {
      selection(3)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  option4.addEventListener('click', () => {
    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 4) {
      selection(4)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });

  option5.addEventListener('click', () => {
    let comSequence = document.querySelectorAll(".sequence");
    let number = comSequence[order].innerText;

    if (gameState.innerText == "On" && number == 5) {
      selection(5)
      order++;

      if (order == comSequence.length) {
        start.innerText = "Correct! Start Next Round!";
        gameState.innerText = "Off";
        order = 0;
      };
    }
    else if (gameState.innerText == "On") {
      start.innerText = "Gameover! Start Again!";
      gameState.innerText = "GO";
      order = 0;
    };
  });
};

export { simonSays };
