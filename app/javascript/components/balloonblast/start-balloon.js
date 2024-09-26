import { addEventListener } from '../tools/event_listener_manager';
import { fillGrids } from '../balloonblast/fill-grids';
import { move } from '../balloonblast/move';

const startBalloon = () => {
  const start = document.getElementById("start");

  fillGrids();
  move();

  addEventListener(start, 'click', () => {
    fillGrids();
  })
};

export { startBalloon };
