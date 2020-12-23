const pop = (num, blastTiming, shockWaveTiming) => {
  const grid = document.getElementById(`${num}`);
  let right = document.getElementById(parseInt(num) + 1);
  let left = document.getElementById(parseInt(num) - 1);
  let down = document.getElementById(parseInt(num) + 11);
  let up = document.getElementById(parseInt(num) - 11);

  setTimeout( function timer() {
    if (right && !grid.classList.contains("right-boundary")) {
      right.classList.remove("crate");

      if (right.classList.contains("block") != true) {
        right.classList.add("blast");
        right.classList.remove("active");
      };

      setTimeout( function timer() {
        right.classList.remove("blast");
      }, shockWaveTiming);
    };
    if (left && !grid.classList.contains("left-boundary")) {
      left.classList.remove("crate");

      if (left.classList.contains("block") != true) {
        left.classList.add("blast");
        left.classList.remove("active");
      };

      setTimeout( function timer() {
        left.classList.remove("blast");
      }, shockWaveTiming);
    };
    if (up) {
      up.classList.remove("crate");

      if (up.classList.contains("block") != true) {
        up.classList.add("blast");
        up.classList.remove("active");
      };

      setTimeout( function timer() {
        up.classList.remove("blast");
      }, shockWaveTiming);
    };
    if (down) {
      down.classList.remove("crate");

      if (down.classList.contains("block") != true) {
        down.classList.add("blast");
        down.classList.remove("active");
      };

      setTimeout( function timer() {
        down.classList.remove("blast");
      }, shockWaveTiming);
    };

    grid.classList.remove("balloon");
  }, blastTiming);
};

export { pop };
