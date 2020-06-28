import { clearGrid } from '../components/clear-grid';
import { checkGrid } from '../components/check-grid';
import { scoring } from '../components/scoring';

const timer = () => {
  const count = document.getElementById("timer");
  const start = document.getElementById("start");

  let state = false

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
