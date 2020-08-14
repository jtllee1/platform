const generateLevel = (level) => {
  const grids = document.querySelectorAll(".grid-pong");

  if (level == 1) {
    for (let i = 0; i < 6; i++) {
      for (let step = (64 + (i * 30)); step < (86 + (i * 30)); step++) {
        grids[step].classList.add("obstacle");
      }
    };
  }
  else if (level == 2) {

  }
  else {

  };
};

export { generateLevel };
