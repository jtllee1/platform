import { generateColor } from '../match3/generate-color';

const startMatch = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    for (let column = 0; column < 9; column++) {
      generateColor(column);
    };
  });
};

export { startMatch };
