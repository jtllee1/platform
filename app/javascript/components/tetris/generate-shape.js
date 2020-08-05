const generateShape = (shape, color) => {
  const grids = document.querySelectorAll(".grid-tetris");

  function squareShape(color) {
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[23].classList.add(`${color}`);
    grids[24].classList.add(`${color}`);
    grids[23].classList.add("dropping");
    grids[24].classList.add("dropping");
  };

  function sShape(color) {
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[23].classList.add(`${color}`);
    grids[22].classList.add(`${color}`);
    grids[23].classList.add("dropping");
    grids[22].classList.add("dropping");
  };

  function zShape(color) {
    grids[7].classList.add(`${color}`);
    grids[6].classList.add(`${color}`);
    grids[7].classList.add("dropping");
    grids[6].classList.add("dropping");
    grids[23].classList.add(`${color}`);
    grids[24].classList.add(`${color}`);
    grids[23].classList.add("dropping");
    grids[24].classList.add("dropping");
  };

  function tShape(color) {
    grids[6].classList.add(`${color}`);
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[6].classList.add("dropping");
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[23].classList.add(`${color}`);
    grids[23].classList.add("dropping");
  };

  function lShape(color) {
    grids[6].classList.add(`${color}`);
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[6].classList.add("dropping");
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[22].classList.add(`${color}`);
    grids[22].classList.add("dropping");
  };

  function mLShape(color) {
    grids[6].classList.add(`${color}`);
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[6].classList.add("dropping");
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[24].classList.add(`${color}`);
    grids[24].classList.add("dropping");
  };

  function lineShape(color) {
    grids[6].classList.add(`${color}`);
    grids[7].classList.add(`${color}`);
    grids[8].classList.add(`${color}`);
    grids[9].classList.add(`${color}`);
    grids[6].classList.add("dropping");
    grids[7].classList.add("dropping");
    grids[8].classList.add("dropping");
    grids[9].classList.add("dropping");
  };

  if (shape == "Sq") {
    squareShape(color);
  }
  else if (shape == "S") {
    sShape(color);
  }
  else if (shape == "Z") {
    zShape(color);
  }
  else if (shape == "T") {
    tShape(color);
  }
  else if (shape == "L") {
    lShape(color);
  }
  else if (shape == "Line") {
    lineShape(color);
  }
  else if (shape == "M-L") {
    mLShape(color);
  };
};

export { generateShape };
