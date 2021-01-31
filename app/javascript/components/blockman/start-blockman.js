import { move } from '../blockman/move';
import { shoot } from '../blockman/shoot';

const startBlockman = () => {
  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
      move("left", 1);
    }
    else if (e.keyCode == 39) {
      move("right", 1);
    };

    if (e.keyCode == 32) {
      shoot("forward");
    };
  });
};

export { startBlockman };
