import { columnHover } from '../connectfour/column-hover';
import { animation } from '../connectfour/animation';
import { reset } from '../connectfour/reset';

const select = () => {
  const slots = document.querySelectorAll(".grid-c-4");
  const player1 = document.getElementById("player-1");
  const player2 = document.getElementById("player-2");
  const restart = document.getElementById("reset-c-4");

  let activeColumn = 0;
  let turn = 1;
  function isOdd(n) { return Math.abs(n % 2) == 1;};

  slots.forEach(slot => {
    slot.addEventListener('mouseover', () => {
      slots.forEach(slot => {
        slot.classList.remove("hover-1");
        slot.classList.remove("hover-2");
      });

      for (let step = 1; step < 11; step++) {
        if (slot.classList.contains(`c-${step}`)) {
          if (isOdd(turn)) {
            columnHover(step, "hover-1");
          }
          else {
            columnHover(step, "hover-2");
          }
          activeColumn = step;
        };
      };
    });

    slot.addEventListener('click', () => {
      if (isOdd(turn)) {
        animation(activeColumn, "active-1");
        columnHover(activeColumn, "stop");
        player1.classList.remove("active");
        player2.classList.add("active");
      }
      else {
        animation(activeColumn, "active-2");
        columnHover(activeColumn, "stop");
        player1.classList.add("active");
        player2.classList.remove("active");
      }
      turn++;
    });
  });

  restart.addEventListener('click', () => {
    slots.forEach(slot => {
      reset(slot);
    });

    turn = 1;

    player1.classList.add("active");
    player2.classList.remove("active");
  });
};

export { select };
