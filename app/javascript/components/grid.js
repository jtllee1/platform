const grid = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

  document.addEventListener('keydown', (e) => {
    const active = document.querySelector(".active");
    if (e.keyCode === 39) {
      const right = document.getElementById(parseInt(active.id) + 1);
      right.classList.add("active");
      active.classList.remove("active");
    }
    else if (e.keyCode === 37) {
      const left = document.getElementById(parseInt(active.id) - 1);
      left.classList.add("active");
      active.classList.remove("active");
    }
  });
};

export { grid };
