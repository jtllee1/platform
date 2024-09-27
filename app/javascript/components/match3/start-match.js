import { addEventListener } from '../tools/event_listener_manager.js';
import { matchTimer } from '../match3/match-timer.js';
import { dropColor } from '../match3/drop-color.js';
import { clearGrid } from '../match3/clear-grid.js';

const startMatch = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");
  const count = document.getElementById("timer");
  const scoreBoard = document.getElementById("score");

  addEventListener(start, 'click', () => {
    if (gameState.innerText == "Off") {
      scoreBoard.innerText = 0;
      count.innerText = 180;
      clearGrid();
      gameState.innerText = "On";
      dropColor();
      matchTimer();
    };
  });
};

export { startMatch };
