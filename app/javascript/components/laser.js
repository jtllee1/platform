const laser = () => {
  document.addEventListener('keyup', (e) => {
    let active = document.querySelector(".active");
    let up = document.getElementById(parseInt(active.id) - 20);
    let i = 20;
    let j = 0;

    if (e.keyCode === 32) {
      for (let step = 0; step < 20; step++) {
        setTimeout( function timer() {
          if (up.id - i >= -19){
            document.getElementById(parseInt(active.id) - i).classList.add("laser");
            i = i + 20;
          };
        }, step * 18 );

        setTimeout( function timer() {
          if (up.id - j >= -19){
            document.getElementById(parseInt(active.id) - j).classList.remove("laser");
            j = j + 20;
          };
        }, step * 20 );
      };
    };
  });
};

export { laser };
