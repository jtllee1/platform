import { setTimeout } from 'components/tools/timeout_manager';
import { generateObstacle } from 'components/helicopter/generate-obstacle';
import { removeObstacle } from 'components/helicopter/remove-obstacle';

const obstacle = (time) => {
  let number = Math.floor(Math.random() * 20);

  for (let step = 0; step < 100; step++) {
    for (let i = 0; i < 6; i++) {
      setTimeout( function timer() {
        generateObstacle(100 - step, number);
      }, (step + i) * time );
    };

    setTimeout( function timer() {
      removeObstacle(100 - step, number);
    }, (step + 6) * time );
  };
};

export { obstacle };
