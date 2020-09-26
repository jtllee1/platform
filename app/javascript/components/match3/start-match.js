import { startLoop } from '../match3/start-loop';

const startMatch = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    startLoop();
  });
};

export { startMatch };
