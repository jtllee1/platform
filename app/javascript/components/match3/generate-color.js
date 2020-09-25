import { dropColor } from '../match3/drop-color';

const generateColor = (column) => {
  const grids = document.querySelectorAll(".grid");
  const colors = ["green", "blue", "orange", "purple", "red", "yellow", "red", "yellow", "cyan", "pink"];

  let color = colors[Math.floor(Math.random() * colors.length)];

  if (!grids[column].classList.contains("item")) {
    grids[column].classList.add(`${color}`, "item");
  };

  dropColor(column, grids, color);
};

export { generateColor };
