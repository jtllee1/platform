const startBalloon = () => {
  const grids = document.querySelectorAll(".grid");

  for (let i = 0; i < 5; i++) {
    for (let j = 12 + (22 * i); j < 21 + (22 * i); j += 2) {
      grids[j].classList.add("block");
    };
  };
};

export { startBalloon };
