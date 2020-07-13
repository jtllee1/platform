const collectSequence = (first, last, type) => {
  const slots = document.querySelectorAll(".grid-c-4");
  let column = first;
  let slot = first;

  function rowCondition(slots, step, active) {
    if (slots[step + 1].classList.contains(`${active}`) &&
      slots[step + 2].classList.contains(`${active}`) &&
      slots[step + 3].classList.contains(`${active}`) &&
      slots[step].classList.contains("stop") &&
      slots[step + 1].classList.contains("stop") &&
      slots[step + 2].classList.contains("stop") &&
      slots[step + 3].classList.contains("stop")
      ) {
      return true;
    };
  };

  function rowChange(slots, step) {
    for (let i = step; i < step + 4; i++) {
      slots[i].classList.add("win");
    };
  };

  function columnCondition(slots, column, active) {
    if (column - 30 >= 0) {
      if (slots[column - 10].classList.contains(`${active}`) &&
        slots[column - 20].classList.contains(`${active}`) &&
        slots[column - 30].classList.contains(`${active}`) &&
        slots[column].classList.contains("stop") &&
        slots[column - 10].classList.contains("stop") &&
        slots[column - 20].classList.contains("stop") &&
        slots[column - 30].classList.contains("stop")
        ) {
        return true;
      };
    };
  };

  function columnChange(slots, column) {
    let j = column
    for (let i = 0; i < 5; i++) {
      slots[j].classList.add("win");
      j = column - (i * 10);
    };
  }

  function diagonalCondition(slots, slot, active, a, b, c) {
    if (slot - c >= 0) {
      if (slots[slot - a].classList.contains(`${active}`) &&
        slots[slot - b].classList.contains(`${active}`) &&
        slots[slot - c].classList.contains(`${active}`) &&
        slots[slot].classList.contains("stop") &&
        slots[slot - a].classList.contains("stop") &&
        slots[slot - b].classList.contains("stop") &&
        slots[slot - c].classList.contains("stop")
        ) {
        return true;
      };
    };
  };

  function diagonalChange(slots, slot, num) {
    let j = slot;
    for (let i = 0; i < 5; i++) {
      slots[j].classList.add("win");
      j = slot - (i * num);
    };
  }

  if (type = "row") {
    for (let step = first; step < last; step++) {
      for (let i = 0; i < 7; i++) {
        if (step == first + i && slots[step].classList.contains("active-1")) {
          if (rowCondition(slots, step, "active-1")) {
            rowChange(slots, step);
          };
        }
        else if (step == first + i && slots[step].classList.contains("active-2")) {
          if (rowCondition(slots, step, "active-2")) {
            rowChange(slots, step);
          };
        };
      };
    };
  };

  if (type = "column") {
    for (let i = 0; i < 7; i++) {
      if (column == first - (i * 10) && slots[column].classList.contains("active-1")) {
        if (columnCondition(slots, column, "active-1")) {
          columnChange(slots, column);
        };
      }
      else if (column == first - (i * 10) && slots[column].classList.contains("active-2")) {
        if (columnCondition(slots, column, "active-2")) {
          columnChange(slots, column);
        };
      };
      column = first - (i * 10);
    };
  };

  if (type = "diagonal-l") {
    for (let i = 0; i < 7; i++) {
      if (slot == first - (i * 9) && slots[slot].classList.contains("active-1")) {
        if (diagonalCondition(slots, slot, "active-1", 9, 18, 27)) {
          diagonalChange(slots, slot, 9);
        };
      }
      else if (slot == first - (i * 9) && slots[slot].classList.contains("active-2")) {
        if (diagonalCondition(slots, slot, "active-2", 9, 18, 27)) {
          diagonalChange(slots, slot, 9);
        };
      };
      column = first - (i * 9);
    };
  };

  if (type = "diagonal-r") {
    for (let i = 0; i < 7; i++) {
      if (slot == first - (i * 11) && slots[slot].classList.contains("active-1")) {
        if (diagonalCondition(slots, slot, "active-1", 11, 22, 33)) {
          diagonalChange(slots, slot, 11);
        };
      }
      else if (slot == first - (i * 11) && slots[slot].classList.contains("active-2")) {
        if (diagonalCondition(slots, slot, "active-2", 11, 22, 33)) {
          diagonalChange(slots, slot, 11);
        };
      };
      column = first - (i * 11);
    };
  };
};

export { collectSequence };
