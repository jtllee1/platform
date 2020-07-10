import { columnHover } from '../connectfour/column-hover';

const animation = (column, addedClass) => {
  const grids = document.getElementById("grids-c-4");
  let columnItems = [];

  for (let step = 1; step < 11; step++) {
    columnItems[step - 1] = document.getElementById(`${step}-${column}`);
  };

  for (let i = 0; i < 10; i++) {
    setTimeout( function timer() {
      if (columnItems[i].classList.contains("active-1") == false && columnItems[i].classList.contains("active-2") == false) {
        columnItems[i].classList.add(`${addedClass}`);
      }
    }, i * 30 );

    setTimeout( function timer() {
      if (columnItems[i].classList.contains("stop") == false) {
        columnItems[i].classList.remove(`${addedClass}`);
      };
    }, (i + 1) * 30 );
  };
};

export { animation };