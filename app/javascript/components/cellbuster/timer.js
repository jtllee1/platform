import { setTimeout } from 'components/tools/timeout_manager';
import { clearGrid } from 'components/cellbuster/clear-grid';
import { checkGrid } from 'components/cellbuster/check-grid';
import { scoring } from 'components/cellbuster/scoring';

const timer = () => {
  const count = document.getElementById("timer");
  const start = document.getElementById("start");

  let state = false;

  function countdown() {
    if (state == true) {
      count.innerText = parseInt(count.innerText) - 1;
      state = checkGrid();
      if (state == false) {
        scoring(0, true);
      };
    };

    if (count.innerText == 0) {
      state = false;
      scoring(0, true);
      clearGrid();
    };

    setTimeout(countdown, 1000);
  };

  start.addEventListener('click', () => {
    count.innerText = 60;
    state = true;
  });

  countdown();
};

export { timer };
