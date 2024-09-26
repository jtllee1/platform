import { setTimeout } from '../tools/timeout_manager';
import { checkCondition } from '../connectfour/check-condition';

const animation = (column, addedClass) => {
  const grids = document.getElementById("grids-c-4");
  const chipSound = document.querySelector(".chip");
  let columnItems = [];

  for (let step = 1; step < 11; step++) {
    columnItems[step - 1] = document.getElementById(`${step}-${column}`);
  };

  for (let i = 0; i < 10; i++) {
    setTimeout( function timer() {
      if (columnItems[i].classList.contains("active-1") == false && columnItems[i].classList.contains("active-2") == false) {
        columnItems[i].classList.add(`${addedClass}`);
        checkCondition();
      };

      if (i == 9) {
        chipSound.pause();
        chipSound.currentTime = 0;
        chipSound.play();
      };
    }, i * 30 );

    setTimeout( function timer() {
      if (columnItems[i].classList.contains("stop") == false) {
        columnItems[i].classList.remove(`${addedClass}`);
      };
    }, (i + 1) * 30 );
  };
};

export { animation };
