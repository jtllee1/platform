import { addEventListener } from 'components/tools/event_listener_manager';
import { fillGrids } from 'components/balloonblast/fill-grids';
import { move } from 'components/balloonblast/move';

const startBalloon = () => {
  const start = document.getElementById("start");

  fillGrids();
  move();

  addEventListener(start, 'click', () => {
    fillGrids();
  })
};

export { startBalloon };
