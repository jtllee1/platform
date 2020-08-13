const movePaddle = () => {
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
    let actives = document.querySelectorAll(".active");
    let right = document.getElementById(parseInt(actives[3].id) + 1);
    let left = document.getElementById(parseInt(actives[0].id) - 1);

    if (keyState[39] && right) {
      document.getElementById(parseInt(actives[3].id) + 1).classList.add("active");
      actives[0].classList.remove("active");
    }
    else if (keyState[37] && left.id > 380) {
      document.getElementById(parseInt(actives[0].id) - 1).classList.add("active");
      actives[3].classList.remove("active");
    };

    setTimeout(movementLoop, 100);
  };

  movementLoop();
};

export { movePaddle };
