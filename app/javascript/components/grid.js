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
    const active = document.querySelector(".active");
    const right = document.getElementById(parseInt(active.id) + 1);
    const left = document.getElementById(parseInt(active.id) - 1);
    const down = document.getElementById(parseInt(active.id) + 10);
    const up = document.getElementById(parseInt(active.id) - 10);

    if (keyState[39]) {
      right.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[37]) {
      left.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[40]) {
      down.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[38]) {
      up.classList.add("active");
      active.classList.remove("active");
    }

    setTimeout(movementLoop, 300);
  };

  movementLoop();
};

export { grid };
