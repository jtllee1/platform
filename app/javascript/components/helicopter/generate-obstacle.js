const generateObstacle = (column, number) => {
  const grids = document.querySelectorAll(".grid-heli");

  grids.forEach(grid => {
    if (grid.classList.contains(`c-${column}`)) {
      if (number < 15) {
        if (grid.classList.contains(`r-${number}`) ||
          grid.classList.contains(`r-${number + 1}`) ||
          grid.classList.contains(`r-${number + 2}`) ||
          grid.classList.contains(`r-${number + 3}`) ||
          grid.classList.contains(`r-${number + 4}`) ||
          grid.classList.contains(`r-${number + 5}`)) {
        }
        else {
          grid.classList.add("obstacle");
        }
      }
      else {
        if (grid.classList.contains("r-15") ||
          grid.classList.contains("r-16") ||
          grid.classList.contains("r-17") ||
          grid.classList.contains("r-18") ||
          grid.classList.contains("r-19") ||
          grid.classList.contains("r-20")) {
        }
        else {
          grid.classList.add("obstacle");
        }
      };
    };
  });
};

export { generateObstacle };
