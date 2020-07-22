import { generateObstacle } from '../helicopter/generate-obstacle';

const start = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    generateObstacle(20);
  });
};

export { start };
