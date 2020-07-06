import { columnHover } from '../connectfour/column-hover';

const select = () => {
  const slots = document.querySelectorAll(".grid-c-4");

  slots.forEach(slot => {
    slot.addEventListener('mouseover', () => {
      slots.forEach(slot => {
        slot.classList.remove("hover");
      });

      if (slot.classList.contains("c-1")) {
        columnHover(1);
      }
      else if (slot.classList.contains("c-2")) {
        columnHover(2);
      }
      else if (slot.classList.contains("c-3")) {
        columnHover(3);
      }
      else if (slot.classList.contains("c-4")) {
        columnHover(4);
      }
      else if (slot.classList.contains("c-5")) {
        columnHover(5);
      }
      else if (slot.classList.contains("c-6")) {
        columnHover(6);
      }
      else if (slot.classList.contains("c-7")) {
        columnHover(7);
      }
      else if (slot.classList.contains("c-8")) {
        columnHover(8);
      }
      else if (slot.classList.contains("c-9")) {
        columnHover(9);
      }
      else if (slot.classList.contains("c-10")) {
        columnHover(10);
      }
    });
  });
};

export { select };
