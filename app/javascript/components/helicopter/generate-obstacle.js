const generateObstacle = (column, number) => {
  const grids = document.querySelectorAll(".grid-heli");

  grids.forEach(grid => {
    if (grid.classList.contains(`c-${column}`)) {
      if (number < 28) {
        if (grid.classList.contains(`r-${number}`) ||
          grid.classList.contains(`r-${number + 1}`) ||
          grid.classList.contains(`r-${number + 2}`) ||
          grid.classList.contains(`r-${number + 3}`) ||
          grid.classList.contains(`r-${number + 4}`) ||
          grid.classList.contains(`r-${number + 5}`) ||
          grid.classList.contains(`r-${number + 6}`) ||
          grid.classList.contains(`r-${number + 7}`) ||
          grid.classList.contains(`r-${number + 8}`) ||
          grid.classList.contains(`r-${number + 9}`) ||
          grid.classList.contains(`r-${number + 10}`) ||
          grid.classList.contains(`r-${number + 11}`)) {
        }
        else {
          grid.classList.add("obstacle");
        }
      }
      else {
        if (grid.classList.contains("r-29") ||
          grid.classList.contains("r-30") ||
          grid.classList.contains("r-31") ||
          grid.classList.contains("r-32") ||
          grid.classList.contains("r-33") ||
          grid.classList.contains("r-34") ||
          grid.classList.contains("r-35") ||
          grid.classList.contains("r-36") ||
          grid.classList.contains("r-37") ||
          grid.classList.contains("r-38") ||
          grid.classList.contains("r-39") ||
          grid.classList.contains("r-40")) {
        }
        else {
          grid.classList.add("obstacle");
        }
      };
    };
  });
};

export { generateObstacle };
