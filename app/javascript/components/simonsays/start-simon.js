import { sequence } from '../simonsays/sequence';
import { selection } from '../simonsays/selection';
import { clear } from '../simonsays/clear';
import { countdown } from '../simonsays/countdown';

const startSimon = () => {
  const start = document.querySelector(".start");
  const gameState = document.getElementById("game-state");
  let turn = 0;
  let order = 0;

  function gameControl() {
    const gameState = document.getElementById("game-state");
    let sequenceNumber = document.querySelectorAll(".sequence");

    if (gameState.innerText == "Comp" && sequenceNumber.length == turn) {
      if (order < turn) {
        selection(sequenceNumber[order].innerText);
        order++;
      }
      else {
        sequence();
      };
      setTimeout(gameControl, 1000);
    }
    else if (sequenceNumber.length > turn) {
      gameState.innerText = "Off";
      turn++;
      order = 0;
      start.innerText = 3;
      setTimeout(countdown, 1000);
      setTimeout(clear, 3000);
    };
  };

  start.addEventListener('click', () => {
    if (gameState.innerText == "Off") {
      clear();
      start.innerText = 3;
      setTimeout(countdown, 1000);
      gameState.innerText = "Comp";
      setTimeout(gameControl, 4000);
    };
  });
};

export { startSimon };
