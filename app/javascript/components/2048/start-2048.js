import { generateTile } from '../2048/generate-tile';

const start2048 = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    generateTile();
    generateTile();
  });
};

export { start2048 };
