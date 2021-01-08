import { fillCrates } from '../balloonblast/fill-crates';

const fillGrids = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach(grid => {
    grid.classList.remove("active", "block", "crate");
  });

  grids[0].classList.add("active");
  grids[grids.length - 1].classList.add("active-2");

  for (let i = 0; i < 5; i++) {
    for (let j = 12 + (22 * i); j < 21 + (22 * i); j += 2) {
      grids[j].classList.add("block");
    };

    for (let j = 13 + (22 * i); j < 20 + (22 * i); j += 2) {
      grids[j].classList.add("crate");
    };

    for (let j = 22 + (22 * i); (j < 33 + (22 * i)) && (i < 4); j++) {
      grids[j].classList.add("crate");
    };
  };

  for (let i = 0; i < 7; i++) {
    grids[2 + i].classList.add("crate");
    grids[112 + i].classList.add("crate");
  };

  for (let i = 0; i < 3; i++) {
    grids[33 + (22 * i)].classList.add("crate");
    grids[43 + (22 * i)].classList.add("crate");
  };

  fillCrates();
};

export { fillGrids };
