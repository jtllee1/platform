import { startLoop } from '../match3/start-loop';
import { matchTimer } from '../match3/match-timer';

const startMatch = () => {
  const start = document.getElementById("start");
  const gameState = document.getElementById("game-state");

  start.addEventListener('click', () => {
    gameState.innerText = "On";
    startLoop();
    matchTimer();
  });
};

export { startMatch };
