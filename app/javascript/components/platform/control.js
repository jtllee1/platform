import { actions } from '../platform/actions';

const control = () => {
  const cubes = document.querySelectorAll(".cube");

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
      actions(0, 9, 200, "blue");
    }
    else if (e.keyCode == 37) {
      cubes[0].classList.add("up");

      setTimeout( function timer() {
        cubes[0].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 38) {
      cubes[1].classList.add("up");

      setTimeout( function timer() {
        cubes[1].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 40) {
      cubes[2].classList.add("up");

      setTimeout( function timer() {
        cubes[2].classList.remove("up");
      }, 200);
    }
    else if (e.keyCode == 39) {
      cubes[3].classList.add("up");

      setTimeout( function timer() {
        cubes[3].classList.remove("up");
      }, 200);
    };

  });
};

export { control };
