import { move } from '../blockman/move';

const startBlockman = () => {
  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
      move("left", 1);
    }
    else if (e.keyCode == 39) {
      move("right", 1);
    };
  });
};

export { startBlockman };
