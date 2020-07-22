import { generateObstacle } from '../helicopter/generate-obstacle';
import { removeObstacle } from '../helicopter/remove-obstacle';

const obstacle = () => {
  const start = document.getElementById("start");

  for (let step = 0; step < 20; step++) {
    setTimeout( function timer() {
      generateObstacle(20 - step);
    }, step * 300 );

    setTimeout( function timer() {
      removeObstacle(20 - step);
    }, (step + 1) * 300 );
  };
};

export { obstacle };
