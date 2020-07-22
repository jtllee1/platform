const movement = () => {
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
    let down = document.getElementById(parseInt(active.id) + 20);
    let up = document.getElementById(parseInt(active.id) - 20);

    if (keyState[32] && up) {
      up.classList.add("active");
      active.classList.remove("active");
    }
    else if (keyState[32] == false && down) {
      down.classList.add("active");
      active.classList.remove("active");
    };

    setTimeout(movementLoop, 50);
  };

  movementLoop();
};

export { movement };
