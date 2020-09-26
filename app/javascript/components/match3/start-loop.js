import { generateColor } from '../match3/generate-color';

const startLoop = () => {
  for (let column = 0; column < 9; column++) {
    generateColor(column);
  };

  let items = document.querySelectorAll(".item");

  if (items.length != 81) {
    setTimeout(startLoop, 500);
  };
};

export { startLoop };
