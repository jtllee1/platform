const actions = (surface, columns, rows, timer, change) => {

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      setTimeout( function timer() {
        surface[32 + i - (j * 4)].classList.add(`${change}`);
      }, j * timer);

      setTimeout( function timer() {
        surface[32 + i - (j * 4)].classList.remove(`${change}`);
      }, (j + 1) * timer);
    };
  };
};

export { actions };
