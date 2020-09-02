import { selection } from '../simonsays/selection';
import { sequence } from '../simonsays/sequence';

const startSimon = () => {
  const start = document.querySelector(".start");
  const gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    start.classList.add("invisible");
    sequence();
    gameState.innerText = "On";
  });
};

export { startSimon };
