import { dropRow } from '../match3/drop-row';

const generateRow = () => {
  const grids = document.querySelectorAll(".grid");
  const colors = ["green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink"];

  let row = [];

  for (let step = 0; step < 9; step++) {
    let color = colors[Math.floor(Math.random() * colors.length)];

    row[step] = color;

    if (!grids[step].classList.contains("item")) {
      grids[step].classList.add(`${color}`, "item");
    };
  };

  dropRow(grids, row);
};

export { generateRow };
