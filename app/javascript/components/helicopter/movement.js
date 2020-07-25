const movement = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  const grids = document.getElementById("grids-heli");

  var keyState = {};

  document.addEventListener('keydown', (e) => {
    keyState[e.keyCode] = true;
  });

  document.addEventListener('keyup', (e) => {
    keyState[e.keyCode] = false;
  });

  grids.addEventListener('mousedown', (e) => {
    keyState[32] = true;
  });

  grids.addEventListener('mouseup', (e) => {
    keyState[32] = false;
  });

  function movementLoop() {
    let actives = document.querySelectorAll(".active");
    let top = document.getElementById(parseInt(actives[0].id) - 100);
    let bottom = document.getElementById(parseInt(actives[9].id) + 100);

    if (keyState[32] && top) {
      actives.forEach(active => {
        let up = document.getElementById(parseInt(active.id) - 100);
        let down = document.getElementById(parseInt(active.id) + 100);

        up.classList.add("active");

        if (down) {
          down.classList.remove("active");
        };
      });
    }
    else if (keyState[32] == false && bottom) {
      actives.forEach(active => {
        let up = document.getElementById(parseInt(active.id) - 100);
        let down = document.getElementById(parseInt(active.id) + 100);

        down.classList.add("active");

        if (up) {
          up.classList.remove("active");
        };
      });
    };

    setTimeout(movementLoop, 40);
  };

  movementLoop();
};

export { movement };
