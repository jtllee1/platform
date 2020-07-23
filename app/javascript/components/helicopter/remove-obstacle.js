const removeObstacle = (column) => {
  const grids = document.querySelectorAll(".grid-heli");

  grids.forEach(grid => {
    if (grid.classList.contains(`c-${column}`)) {
      grid.classList.remove("obstacle");
      grid.classList.remove("obstacle-1");
      grid.classList.remove("obstacle-2");
      grid.classList.remove("obstacle-3");
      grid.classList.remove("obstacle-4");
      grid.classList.remove("obstacle-5");
    };
  });
};

export { removeObstacle };
