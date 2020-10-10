import { dropColor } from '../match3/drop-color';

const checkMatch = () => {
  const grids = document.querySelectorAll(".grid");
  const score = document.getElementById("score");
  const popSound = document.querySelector(".pop");
  popSound.playbackRate = 2;

  let time = 400;

  for (let row = 0; row < 9; row++) {
    let condition1 = true;
    let condition2 = true;

    for (let grid = 80 - (row * 9); grid > 73 - (row * 9); grid--) {
      let color1 = grids[grid].className.split(" ").pop();
      let color2 = grids[grid - 1].className.split(" ").pop();
      let color3 = grids[grid - 2].className.split(" ").pop();
      let color4 = "";
      let color5 = "";

      if (grid > 75 - (row * 9)) {
        color4 = grids[grid - 3].className.split(" ").pop();
        color5 = grids[grid - 4].className.split(" ").pop();
      }
      else if (grid > 74 - (row * 9)) {
        color4 = grids[grid - 3].className.split(" ").pop();
      };

      if (color1 == color2 && color2 == color3 && color3 == color4 && color4 == color5) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 1].classList.remove("item", `${color2}`);
        grids[grid - 2].classList.remove("item", `${color3}`);
        grids[grid - 3].classList.remove("item", `${color4}`);
        grids[grid - 4].classList.remove("item", `${color5}`);
        condition1 = false;
        condition2 = false;
        score.innerText = parseInt(score.innerText) + 900;
        popSound.play();

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = grid - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let prevColor2 = grids[prevGrid - 1].className.split(" ").pop();
            let prevColor3 = grids[prevGrid - 2].className.split(" ").pop();
            let prevColor4 = grids[prevGrid - 3].className.split(" ").pop();
            let prevColor5 = grids[prevGrid - 4].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let column2 = parseInt(grids[prevGrid - 1].className.split(" ").shift().slice(-1));
            let column3 = parseInt(grids[prevGrid - 2].className.split(" ").shift().slice(-1));
            let column4 = parseInt(grids[prevGrid - 3].className.split(" ").shift().slice(-1));
            let column5 = parseInt(grids[prevGrid - 4].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
              dropColor(column2, prevRow, prevColor2);
              dropColor(column3, prevRow, prevColor3);
              dropColor(column4, prevRow, prevColor4);
              dropColor(column5, prevRow, prevColor5);
            }, subRow * time );
          };
        };
      }
      else if (condition1 && color1 == color2 && color2 == color3 && color3 == color4) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 1].classList.remove("item", `${color2}`);
        grids[grid - 2].classList.remove("item", `${color3}`);
        grids[grid - 3].classList.remove("item", `${color4}`);
        condition2 = false;
        score.innerText = parseInt(score.innerText) + 600;
        popSound.play();

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = grid - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let prevColor2 = grids[prevGrid - 1].className.split(" ").pop();
            let prevColor3 = grids[prevGrid - 2].className.split(" ").pop();
            let prevColor4 = grids[prevGrid - 3].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let column2 = parseInt(grids[prevGrid - 1].className.split(" ").shift().slice(-1));
            let column3 = parseInt(grids[prevGrid - 2].className.split(" ").shift().slice(-1));
            let column4 = parseInt(grids[prevGrid - 3].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
              dropColor(column2, prevRow, prevColor2);
              dropColor(column3, prevRow, prevColor3);
              dropColor(column4, prevRow, prevColor4);
            }, subRow * time );
          };
        };
      }
      else if (condition2 && color1 == color2 && color2 == color3) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 1].classList.remove("item", `${color2}`);
        grids[grid - 2].classList.remove("item", `${color3}`);
        score.innerText = parseInt(score.innerText) + 300;
        popSound.play();

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

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
              dropColor(column2, prevRow, prevColor2);
              dropColor(column3, prevRow, prevColor3);
            }, subRow * time );
          };
        };
      };
    };
  };

  // for (let row = 0; row < 9; row++) {
  //   for (let grid = 80 - (row * 9); grid > 73 - (row * 9); grid--) {
  //     let color1 = grids[grid].className.split(" ").pop();
  //     let color2 = grids[grid - 1].className.split(" ").pop();
  //     let color3 = grids[grid - 2].className.split(" ").pop();

      // if (color1 == color2 && color2 == color3) {
      //   grids[grid].classList.remove("item", `${color1}`);
      //   grids[grid - 1].classList.remove("item", `${color2}`);
      //   grids[grid - 2].classList.remove("item", `${color3}`);
      //   score.innerText = parseInt(score.innerText) + 300;

      //   for (let subRow = 1; subRow < 9; subRow++) {
      //     let prevGrid = grid - (subRow * 9);

      //     if (prevGrid > -1) {
      //       let prevColor1 = grids[prevGrid].className.split(" ").pop();
      //       let prevColor2 = grids[prevGrid - 1].className.split(" ").pop();
      //       let prevColor3 = grids[prevGrid - 2].className.split(" ").pop();
      //       let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
      //       let column2 = parseInt(grids[prevGrid - 1].className.split(" ").shift().slice(-1));
      //       let column3 = parseInt(grids[prevGrid - 2].className.split(" ").shift().slice(-1));
      //       let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

      //       setTimeout( function timer() {
      //         dropColor(column1, prevRow, prevColor1);
      //         dropColor(column2, prevRow, prevColor2);
      //         dropColor(column3, prevRow, prevColor3);
      //       }, subRow * 200 );
      //     };
      //   };
      // };
  //   };
  // };

  let conditionV1 = true;
  let conditionV2 = true;

  for (let row = 0; row < 7; row++) {

    for (let grid = 80 - (row * 9); grid > 71 - (row * 9); grid--) {
      let color1 = grids[grid].className.split(" ").pop();
      let color2 = grids[grid - 9].className.split(" ").pop();
      let color3 = grids[grid - 18].className.split(" ").pop();
      let color4 = "";
      let color5 = "";

      if (row < 5) {
        color4 = grids[grid - 27].className.split(" ").pop();
        color5 = grids[grid - 36].className.split(" ").pop();
      }
      else if (row < 6) {
        color4 = grids[grid - 27].className.split(" ").pop();
      };

      if (color1 == color2 && color2 == color3 && color3 == color4 && color4 == color5) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 9].classList.remove("item", `${color2}`);
        grids[grid - 18].classList.remove("item", `${color3}`);
        grids[grid - 27].classList.remove("item", `${color4}`);
        grids[grid - 36].classList.remove("item", `${color5}`);
        conditionV1 = false;
        conditionV2 = false;
        score.innerText = parseInt(score.innerText) + 900;
        popSound.play();

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = (grid - 36) - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
            }, subRow * time );
          };
        };
      }
      else if (conditionV1 && color1 == color2 && color2 == color3 && color3 == color4) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 9].classList.remove("item", `${color2}`);
        grids[grid - 18].classList.remove("item", `${color3}`);
        grids[grid - 27].classList.remove("item", `${color4}`);
        conditionV2 = false;
        score.innerText = parseInt(score.innerText) + 600;
        popSound.play();

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = (grid - 27) - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
            }, subRow * time );
          };
        };
      }
      else if (conditionV2 && color1 == color2 && color2 == color3) {
        grids[grid].classList.remove("item", `${color1}`);
        grids[grid - 9].classList.remove("item", `${color2}`);
        grids[grid - 18].classList.remove("item", `${color3}`);
        score.innerText = parseInt(score.innerText) + 300;
        popSound.play();

        for (let subRow = 1; subRow < 9; subRow++) {
          let prevGrid = (grid - 18) - (subRow * 9);

          if (prevGrid > -1) {
            let prevColor1 = grids[prevGrid].className.split(" ").pop();
            let column1 = parseInt(grids[prevGrid].className.split(" ").shift().slice(-1));
            let prevRow = parseInt(grids[prevGrid].className.split(" ").slice(1)[0].slice(-1));

            setTimeout( function timer() {
              dropColor(column1, prevRow, prevColor1);
            }, subRow * time );
          };
        };
      };
    };
  };
};

export { checkMatch };
