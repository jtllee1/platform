const generateShape = (shape, color, grids) => {

  function loseCondition() {
    if (
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[23].classList.contains("dropped") ||
      grids[24].classList.contains("dropped")) {

    }
  }

  function squareShape(color) {
    if (
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[23].classList.contains("dropped") ||
      grids[24].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[23].classList.add(`${color}`);
      grids[24].classList.add(`${color}`);
      grids[23].classList.add("dropping");
      grids[24].classList.add("dropping");
    };
  };

  function sShape(color) {
    if (
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[22].classList.contains("dropped") ||
      grids[23].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[23].classList.add(`${color}`);
      grids[22].classList.add(`${color}`);
      grids[23].classList.add("dropping");
      grids[22].classList.add("dropping");
    };
  };

  function zShape(color) {
    if (
      grids[6].classList.contains("dropped") ||
      grids[7].classList.contains("dropped") ||
      grids[23].classList.contains("dropped") ||
      grids[24].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[7].classList.add(`${color}`);
      grids[6].classList.add(`${color}`);
      grids[7].classList.add("dropping");
      grids[6].classList.add("dropping");
      grids[23].classList.add(`${color}`);
      grids[24].classList.add(`${color}`);
      grids[23].classList.add("dropping");
      grids[24].classList.add("dropping");
    };
  };

  function tShape(color) {
    if (
      grids[6].classList.contains("dropped") ||
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[23].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[6].classList.add(`${color}`);
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[6].classList.add("dropping");
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[23].classList.add(`${color}`);
      grids[23].classList.add("dropping");
    };
  };

  function lShape(color) {
    if (
      grids[6].classList.contains("dropped") ||
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[22].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[6].classList.add(`${color}`);
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[6].classList.add("dropping");
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[22].classList.add(`${color}`);
      grids[22].classList.add("dropping");
    };
  };

  function mLShape(color) {
    if (
      grids[6].classList.contains("dropped") ||
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[24].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[6].classList.add(`${color}`);
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[6].classList.add("dropping");
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[24].classList.add(`${color}`);
      grids[24].classList.add("dropping");
    };
  };

  function lineShape(color) {
    if (
      grids[6].classList.contains("dropped") ||
      grids[7].classList.contains("dropped") ||
      grids[8].classList.contains("dropped") ||
      grids[9].classList.contains("dropped")) {
      return false;
    }
    else {
      grids[6].classList.add(`${color}`);
      grids[7].classList.add(`${color}`);
      grids[8].classList.add(`${color}`);
      grids[9].classList.add(`${color}`);
      grids[6].classList.add("dropping");
      grids[7].classList.add("dropping");
      grids[8].classList.add("dropping");
      grids[9].classList.add("dropping");
    };
  };

  if (shape == "Sq") {
    return squareShape(color);
  }
  else if (shape == "S") {
    return sShape(color);
  }
  else if (shape == "Z") {
    return zShape(color);
  }
  else if (shape == "T") {
    return tShape(color);
  }
  else if (shape == "L") {
    return lShape(color);
  }
  else if (shape == "Line") {
    return lineShape(color);
  }
  else if (shape == "M-L") {
    return mLShape(color);
  };
};

export { generateShape };
