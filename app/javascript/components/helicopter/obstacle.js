import { generateObstacle } from '../helicopter/generate-obstacle';
import { removeObstacle } from '../helicopter/remove-obstacle';

const obstacle = () => {
  const start = document.getElementById("start");

  let number = Math.floor(Math.random() * 20);

  for (let step = 0; step < 20; step++) {
    setTimeout( function timer() {
      generateObstacle(20 - step, number);
    }, step * 300 );

    setTimeout( function timer() {
      removeObstacle(20 - step, number);
    }, (step + 1) * 300 );
  };
};

export { obstacle };
