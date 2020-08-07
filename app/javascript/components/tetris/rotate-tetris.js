const rotateTetris = (shape, color, dropping, orientation) => {
  if (shape == "S") {
    if (orientation == 1) {
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 32).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) + 2).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 32).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 2).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 32).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) + 2).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 32).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 2).classList.add(`${color}`, "dropping");
    };
  }
  else if (shape == "Z") {
    if (orientation == 1) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 2).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 32).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 2).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 32).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 2).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 32).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 2).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 32).classList.add(`${color}`, "dropping");
    };
  }
  else if (shape == "T") {
    if (orientation == 1) {
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 17).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 15).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 17).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 17).classList.add(`${color}`, "dropping");
    };
  }
  else if (shape == "L") {
    if (orientation == 1) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 16).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 17).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) + 1).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 16).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 1).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 15).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 1).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 17).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) + 16).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 15).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 1).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 16).classList.add(`${color}`, "dropping");
    };
  }
  else if (shape == "M-L") {
    if (orientation == 1) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 16).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 17).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 1).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 1).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 16).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 15).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 1).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 17).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 16).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 15).classList.add(`${color}`, "dropping");
      dropping[1].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[1].id) + 16).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) + 1).classList.add(`${color}`, "dropping");
    };
  }
  else if (shape == "Line") {
    if (orientation == 1) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 15).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) + 15).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) + 30).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 2) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 15).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 15).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 30).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 3) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) - 15).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) + 15).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) + 30).classList.add(`${color}`, "dropping");
    }
    else if (orientation == 4) {
      dropping[0].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[0].id) + 15).classList.add(`${color}`, "dropping");
      dropping[2].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[2].id) - 15).classList.add(`${color}`, "dropping");
      dropping[3].classList.remove(`${color}`, "dropping");
      document.getElementById(parseInt(dropping[3].id) - 30).classList.add(`${color}`, "dropping");
    };
  };
};

export { rotateTetris };
