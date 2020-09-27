import { dropColor } from '../match3/drop-color';

const checkMatch = () => {
  const grids = document.querySelectorAll(".grid");

  for (let row = 0; row < 9; row++) {
    for (let grid = 80 - (row * 9); grid > 73 - (row * 9); grid--) {
      let color1 = grids[grid].className.split(" ").pop();
      let color2 = grids[grid - 1].className.split(" ").pop();
      let color3 = grids[grid - 2].className.split(" ").pop();

      if (color1 == color2 && color2 == color3) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 1].classList.remove("item", `${color2}`);
        grids[grid - 2].classList.remove("item", `${color3}`);
      };
    };
  };
};

export { checkMatch };
