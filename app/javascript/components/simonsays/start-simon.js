import { sequence } from '../simonsays/sequence';
import { clear } from '../simonsays/clear';

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
      setTimeout(clear, 4000);
    };

    setTimeout(gameControl, 2000);
  };

  start.addEventListener('click', () => {
    start.classList.add("invisible");
    gameState.innerText = "Comp";
    setTimeout(gameControl, 4000);
  });
};

export { startSimon };
