const moveTetris = (keyState, dropping, color) => {
  let rightCondition = true;

  for (let step = 0; step < dropping.length; step++) {
    if (document.getElementById(parseInt(dropping[step].id) + 1)) {
      let right = document.getElementById(parseInt(dropping[step].id) + 1);
      let current = document.getElementById(parseInt(dropping[step].id));
      if (right.classList.contains("dropped") || current.classList.contains("right-boundary")) {
        rightCondition = false;
      };
    };
  };

  let leftCondition = true;

  for (let step = 0; step < dropping.length; step++) {
    if (document.getElementById(parseInt(dropping[step].id) - 1)) {
      let left = document.getElementById(parseInt(dropping[step].id) - 1);
      let current = document.getElementById(parseInt(dropping[step].id));
      if (left.classList.contains("dropped") ||current.classList.contains("left-boundary")) {
        leftCondition = false;
      };
    };
  };

  if (keyState[39] && rightCondition) {
    for (let step = 0; step < dropping.length; step++) {

      let index = dropping.length - step - 1;

      dropping[index].classList.remove("dropping");
      dropping[index].classList.remove(`${color}`);
      document.getElementById(parseInt(dropping[index].id) + 1).classList.add("dropping");
      document.getElementById(parseInt(dropping[index].id) + 1).classList.add(`${color}`);
    };
  }
  else if (keyState[37] && leftCondition) {
    for (let step = 0; step < dropping.length; step++) {

      let index = step;

      dropping[index].classList.remove("dropping");
      dropping[index].classList.remove(`${color}`);
      document.getElementById(parseInt(dropping[index].id) - 1).classList.add("dropping");
      document.getElementById(parseInt(dropping[index].id) - 1).classList.add(`${color}`);
    };
  };
};

export { moveTetris };
