import { fillCrates } from '../balloonblast/fill-crates';
import { addBar } from '../balloonblast/add-bar';

const fillGrids = () => {
  const grids = document.querySelectorAll(".grid");
  const limit = document.getElementById("limit-1");
  const strength = document.getElementById("strength-1");
  const limit2 = document.getElementById("limit-2");
  const strength2 = document.getElementById("strength-2");
  const exBar = document.querySelector(".l-1");
  const strBar = document.querySelector(".s-1");
  const exBar2 = document.querySelector(".l-2");
  const strBar2 = document.querySelector(".s-2");

  limit.innerText = 1;
  limit2.innerText = 1;
  strength.innerText = 1;
  strength2.innerText = 1;

  exBar.innerText = "";
  strBar.innerText = "";
  exBar2.innerText = "";
  strBar2.innerText = "";

  addBar("l-1", "bar-ex");
  addBar("l-2", "bar-ex");
  addBar("s-1", "bar-power");
  addBar("s-2", "bar-power");

  grids.forEach(grid => {
    grid.classList.remove("active", "active-2", "block", "crate", "exballoon", "power");
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
