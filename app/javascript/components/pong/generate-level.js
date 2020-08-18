const generateLevel = () => {
  const grids = document.querySelectorAll(".grid-pong");

  for (let i = 0; i < 6; i++) {
    for (let step = (64 + (i * 30)); step < (86 + (i * 30)); step++) {
      grids[step].classList.add("obstacle");
    }
  };
};

export { generateLevel };
