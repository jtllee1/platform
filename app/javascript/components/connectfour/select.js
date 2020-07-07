import { columnHover } from '../connectfour/column-hover';

const select = () => {
  const slots = document.querySelectorAll(".grid-c-4");
  const grids = document.getElementById("grids-c-4");

  let activeColumn = 0;
  let turn = 1;
  function isOdd(n) { return Math.abs(n % 2) == 1;};

  slots.forEach(slot => {
    slot.addEventListener('mouseover', () => {
      slots.forEach(slot => {
        slot.classList.remove("hover");
      });

      if (slot.classList.contains("c-1")) {
        columnHover(1, "hover");
        activeColumn = 1;
      }
      else if (slot.classList.contains("c-2")) {
        columnHover(2, "hover");
        activeColumn = 2;
      }
      else if (slot.classList.contains("c-3")) {
        columnHover(3, "hover");
        activeColumn = 3;
      }
      else if (slot.classList.contains("c-4")) {
        columnHover(4, "hover");
        activeColumn = 4;
      }
      else if (slot.classList.contains("c-5")) {
        columnHover(5, "hover");
        activeColumn = 5;
      }
      else if (slot.classList.contains("c-6")) {
        columnHover(6, "hover");
        activeColumn = 6;
      }
      else if (slot.classList.contains("c-7")) {
        columnHover(7, "hover");
        activeColumn = 7;
      }
      else if (slot.classList.contains("c-8")) {
        columnHover(8, "hover");
        activeColumn = 8;
      }
      else if (slot.classList.contains("c-9")) {
        columnHover(9, "hover");
        activeColumn = 9;
      }
      else if (slot.classList.contains("c-10")) {
        columnHover(10, "hover");
        activeColumn = 10;
      }
    });
  });

  grids.addEventListener('click', () => {
    if (isOdd(turn)) {
      columnHover(activeColumn, "active-1");
    }
    else {
      columnHover(activeColumn, "active-2");
    }
    turn++
  });
};

export { select };
