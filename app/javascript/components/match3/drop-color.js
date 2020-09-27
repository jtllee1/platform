const dropColor = (column, row, grids, color) => {
  for (let i = row; i < 9; i++) {
    let active = grids[column+(9 * i)];
    let down = grids[column+(9 * (i + 1))];

    if (i < 8 && !down.classList.contains("item") && !active.classList.contains("down-boundary")) {
      setTimeout( function timer() {
        down.classList.add("item", `${color}`);
        active.classList.remove("item", `${color}`);
      }, i * 40 );
    };
  };
};

export { dropColor };
