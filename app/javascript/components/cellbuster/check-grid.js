const checkGrid = () => {
  const grids = document.querySelectorAll(".grid");

  let state = false

  grids.forEach((grid) => {
    if (grid.classList.contains("enemy")) {
      state = true;
    };
  });

  return state;
};

export { checkGrid };
