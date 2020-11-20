const wave = () => {
  const cubes = document.querySelectorAll(".cube");

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
          setTimeout( function timer() {
            cubes[32 + i - (j * 4)].classList.add("up");
          }, j * 200);

          setTimeout( function timer() {
            cubes[32 + i - (j * 4)].classList.remove("up");
          }, j * 250);
        };
      };
    };
  });
};

export { wave };
