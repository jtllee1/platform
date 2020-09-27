const dropColor = (column, row, color) => {
  const grids = document.querySelectorAll(".grid");

  let count = 0;

  for (let i = row; i < 9; i++) {
    let active = grids[column+(9 * i)];
    let down = grids[column+(9 * (i + 1))];

    if (i < 8 && !down.classList.contains("item") && !active.classList.contains("down-boundary")) {
      setTimeout( function timer() {
        down.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
        down.classList.add("item", `${color}`);
        active.classList.remove("item", "green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink");
      }, count * 40 );
    };

    count++;
  };
};

export { dropColor };
