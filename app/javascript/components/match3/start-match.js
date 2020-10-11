import { matchTimer } from '../match3/match-timer';
import { dropColor } from '../match3/drop-color';

const startMatch = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    gameState.innerText = "On";
    dropColor();
    matchTimer();
  });
};

export { startMatch };
