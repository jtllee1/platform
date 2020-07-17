const grid = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  var keyState = {};

  document.addEventListener('keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  document.addEventListener('keyup', (e) => {
    keyState[e.keyCode] = false;
  });

  function movementLoop() {
    let active = document.querySelector(".active");
    let right = document.getElementById(parseInt(active.id) + 1);
    let left = document.getElementById(parseInt(active.id) - 1);
    let down = document.getElementById(parseInt(active.id) + 20);
    let up = document.getElementById(parseInt(active.id) - 20);

    if (keyState[39] && right && active.classList.contains("right-boundary") == false && right.classList.contains("enemy") == false) {
      right.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[37] && left && active.classList.contains("left-boundary") == false && left.classList.contains("enemy") == false) {
      left.classList.add("active");
      active.classList.remove("active");
    }
    // else if (keyState[40] && down && down.classList.contains("enemy") == false) {
    //   down.classList.add("active");
    //   active.classList.remove("active");
    // }
    // else if (keyState[38] && up && up.classList.contains("enemy") == false) {
    //   up.classList.add("active");
    //   active.classList.remove("active");
    // };

    setTimeout(movementLoop, 30);
  };

  movementLoop();
};

export { grid };
