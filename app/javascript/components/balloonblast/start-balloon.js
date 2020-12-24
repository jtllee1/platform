import { fillGrids } from '../balloonblast/fill-grids';
import { move } from '../balloonblast/move';

const startBalloon = () => {
  const start = document.getElementById("start");

  start.addEventListener('click', () => {
    fillGrids();
    move();
  })
};

export { startBalloon };
