const dropColor = (column, grids, color) => {
  for (let i = 0; i < 9; i++) {
    let active = grids[column+(9 * i)];
    let down = grids[column+(9 * (i + 1))];

    if (i < 8 && !down.classList.contains("item") && !active.classList.contains("down-boundary")) {
      setTimeout( function timer() {
        down.classList.add(`${color}`, "item");
        active.classList.remove(`${color}`, "item");
      }, i * 60 );
    };
  };
};

export { dropColor };
