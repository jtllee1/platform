import { generateObstacle } from '../helicopter/generate-obstacle';
import { removeObstacle } from '../helicopter/remove-obstacle';

const obstacle = () => {
  const start = document.getElementById("start");

  let number = Math.floor(Math.random() * 20);

  for (let step = 0; step < 100; step++) {
    for (let i = 0; i < 6; i++) {
      setTimeout( function timer() {
        generateObstacle(100 - step, number);
      }, (step + i) * 40 );
    };

    setTimeout( function timer() {
      removeObstacle(100 - step, number);
    }, (step + 6) * 40 );
  };
};

export { obstacle };
