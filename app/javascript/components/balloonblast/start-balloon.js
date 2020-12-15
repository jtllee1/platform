import { fillGrids } from '../balloonblast/fill-grids';
import { move } from '../balloonblast/move';

const startBalloon = () => {
  fillGrids();
  move();
};

export { startBalloon };
