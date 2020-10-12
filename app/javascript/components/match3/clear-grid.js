const clearGrid = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach(grid => {
    grid.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
  });
};

export { clearGrid };
