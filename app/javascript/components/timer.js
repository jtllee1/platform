import { clearGrid } from '../components/clear-grid';

const timer = () => {
  const count = document.getElementById("timer");
  const start = document.getElementById("start");

  let state = false

  function countdown() {
    if (state == true) {
      count.innerText = parseInt(count.innerText) - 1;
    };

    if (count.innerText == 0) {
      state = false;
      clearGrid();
    }

    setTimeout(countdown, 1000);
  };

  start.addEventListener('click', () => {
    count.innerText = 60;
    state = true;
  });

  countdown();
};

export { timer };
