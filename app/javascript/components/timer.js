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
    }

    setTimeout(countdown, 1000);
  };

  start.addEventListener('click', () => {
    state = true;
  });

  countdown();
};

export { timer };
