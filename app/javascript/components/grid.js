const grid = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  document.addEventListener('keydown', (e) => {
    const active = document.querySelector(".active");
    const right = document.getElementById(parseInt(active.id) + 1);
    const left = document.getElementById(parseInt(active.id) - 1);
    const down = document.getElementById(parseInt(active.id) + 10);
    const up = document.getElementById(parseInt(active.id) - 10);

    if (e.keyCode === 39) {
      right.classList.add("active");
      active.classList.remove("active");
    }
    else if (e.keyCode === 37) {
      left.classList.add("active");
      active.classList.remove("active");
    }
    else if (e.keyCode === 40) {
      down.classList.add("active");
      active.classList.remove("active");
    }
    else if (e.keyCode === 38) {
      up.classList.add("active");
      active.classList.remove("active");
    }
  });
};

export { grid };
