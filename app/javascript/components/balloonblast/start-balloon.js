import { fillGrids } from '../balloonblast/fill-grids';
import { move } from '../balloonblast/move';

const startBalloon = () => {
  const start = document.getElementById("start");

  fillGrids();
  move();

  start.addEventListener('click', () => {
    fillGrids();
  })
};

export { startBalloon };
