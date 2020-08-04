const generateShape = (shape, color) => {
  const grids = document.querySelectorAll(".grid-tetris");

  function square(color) {
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[23].classList.add(`${color}`);
    grids[24].classList.add(`${color}`);
    grids[23].classList.add("dropping");
    grids[24].classList.add("dropping");
  };

  square(color);
};

export { generateShape };
