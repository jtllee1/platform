const clearGrid = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.classList.remove("enemy");
    grid.classList.remove("level-2");
  });
};

export { clearGrid };
