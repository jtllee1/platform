import { sequence } from '../simonsays/sequence';
import { clear } from '../simonsays/clear';
import { countdown } from '../simonsays/countdown';

const startSimon = () => {
  const start = document.querySelector(".start");
  const gameState = document.getElementById("game-state");
  let turn = 0;

  function gameControl() {
    const gameState = document.getElementById("game-state");
    let sequenceNumber = document.querySelectorAll(".sequence");

    if (gameState.innerText == "Comp" && sequenceNumber.length == turn) {
      sequence();
    }
    else if (sequenceNumber.length > turn) {
      gameState.innerText = "Off";
      turn++;
      start.innerText = 3;
      setTimeout(countdown, 1000);
      setTimeout(clear, 3000);
    };

    setTimeout(gameControl, 2000);
  };

  start.addEventListener('click', () => {
    start.innerText = 3;
    setTimeout(countdown, 1000);
    gameState.innerText = "Comp";
    setTimeout(gameControl, 3000);
  });
};

export { startSimon };
