import { matchTimer } from '../match3/match-timer';
import { dropColor } from '../match3/drop-color';
import { clearGrid } from '../match3/clear-grid';

const startMatch = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");
  const count = document.getElementById("timer");

  start.addEventListener('click', () => {
    if (gameState.innerText == "Off") {
      count.innerText = 180;
      clearGrid();
      gameState.innerText = "On";
      dropColor();
      matchTimer();
    };
  });
};

export { startMatch };
