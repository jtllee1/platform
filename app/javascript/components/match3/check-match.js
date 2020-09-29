import { dropColor } from '../match3/drop-color';
import { generateColor } from '../match3/generate-color';

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

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = grid - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let prevColor2 = grids[prevGrid - 1].className.split(" ").pop();
            let prevColor3 = grids[prevGrid - 2].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let column2 = parseInt(grids[prevGrid - 1].className.split(" ").shift().slice(-1));
            let column3 = parseInt(grids[prevGrid - 2].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            // console.log(prevColor1);
            // console.log(prevColor2);
            // console.log(prevColor3);
            // console.log(column1);
            // console.log(column2);
            // console.log(column3);
            // console.log(prevRow);

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
              dropColor(column2, prevRow, prevColor2);
              dropColor(column3, prevRow, prevColor3);
            }, subRow * 100 );
          };
        };
      };
    };
  };

  for (let row = 0; row < 7; row++) {
    for (let grid = 80 - (row * 9); grid > 71 - (row * 9); grid--) {
      let color1 = grids[grid].className.split(" ").pop();
      let color2 = grids[grid - 9].className.split(" ").pop();
      let color3 = grids[grid - 18].className.split(" ").pop();

      if (color1 == color2 && color2 == color3) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 9].classList.remove("item", `${color2}`);
        grids[grid - 18].classList.remove("item", `${color3}`);

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = (grid - 18) - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
            }, subRow * 100 );
          };
        };
      };
    };
  };
};

export { checkMatch };
