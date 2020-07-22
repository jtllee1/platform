const generateObstacle = (column) => {
  const grids = document.querySelectorAll(".grid-heli");

  grids.forEach(grid => {
    if (grid.classList.contains(`c-${column}`)) {
      grid.classList.add("obstacle");
    };
  });
};

export { generateObstacle };
