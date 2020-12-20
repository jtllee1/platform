const pop = (num) => {
  const grid = document.getElementById(`${num}`);
  let right = document.getElementById(parseInt(num) + 1);
  let left = document.getElementById(parseInt(num) - 1);
  let down = document.getElementById(parseInt(num) + 11);
  let up = document.getElementById(parseInt(num) - 11);

  setTimeout( function timer() {
    if (right) {
      right.classList.remove("crate");
    };
    if (left) {
      left.classList.remove("crate");
    };
    if (up) {
      up.classList.remove("crate");
    };
    if (down) {
      down.classList.remove("crate");
    };

    grid.classList.remove("balloon");
  }, 3000);
};

export { pop };
