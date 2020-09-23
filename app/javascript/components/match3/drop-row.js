const dropRow = (grids, row) => {
  for (let step = 0; step < 9; step++) {
    for (let i = 0; i < 9; i++) {
      let active = grids[step+(9 * i)];
      let down = grids[step+(9 * (i + 1))];

      if (i < 8 && !down.classList.contains("item") && !active.classList.contains("down-boundary")) {
        setTimeout( function timer() {
          down.classList.add(`${row[step]}`, "item");
          active.classList.remove(`${row[step]}`, "item");
        }, i * 60 );
      };
    };
  };
};

export { dropRow };
