const wave = () => {
  const cubes = document.querySelectorAll(".cube");
  const tops = document.querySelectorAll(".top");

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
          setTimeout( function timer() {
            cubes[32 + i - (j * 4)].classList.add("up");
          }, j * 200);

          setTimeout( function timer() {
            cubes[32 + i - (j * 4)].classList.remove("up");
          }, (j + 1) * 200);
        };
      };
    }
    else if (e.keyCode == 13) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
          setTimeout( function timer() {
            tops[32 + i - (j * 4)].classList.add("blue");
          }, j * 200);

          setTimeout( function timer() {
            tops[32 + i - (j * 4)].classList.remove("blue");
          }, (j + 1) * 200);
        };
      };
    }
    else if (e.keyCode == 37) {
      cubes[0].classList.add("up");

      setTimeout( function timer() {
        cubes[0].classList.remove("up");
      }, 100);
    }
    else if (e.keyCode == 38) {
      cubes[1].classList.add("up");

      setTimeout( function timer() {
        cubes[1].classList.remove("up");
      }, 100);
    }
    else if (e.keyCode == 40) {
      cubes[2].classList.add("up");

      setTimeout( function timer() {
        cubes[2].classList.remove("up");
      }, 100);
    }
    else if (e.keyCode == 39) {
      cubes[3].classList.add("up");

      setTimeout( function timer() {
        cubes[3].classList.remove("up");
      }, 100);
    };

  });
};

export { wave };
