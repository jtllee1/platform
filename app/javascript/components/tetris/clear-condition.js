const clearCondition = (grids, score) => {
  for (let row = 0; row < 20; row++) {
    let rowCheck = [];

    for (let column = 0; column < 16; column++) {
      if (grids[column + (row * 16)].classList.contains("dropped")) {
        rowCheck.push(grids[column + (row * 16)]);
      };
    };

    if (rowCheck.length > 15) {
      for (let column = 0; column < 16; column++) {
        grids[column + (row * 16)].classList.remove("dropped", "red", "orange", "green", "cyan", "yellow", "purple")
      };

      let limit = row * 16;

      for (let step = 0; step < limit; step++) {
        if (grids[limit - step].classList.contains("dropped")) {
          grids[limit - step].classList.remove("dropped");
          grids[limit - step + 16].classList.add("dropped");

          if (grids[limit - step].classList.contains("red")) {
            grids[limit - step].classList.remove("red");
            grids[limit - step + 16].classList.add("red");
          }
          else if (grids[limit - step].classList.contains("orange")) {
            grids[limit - step].classList.remove("orange");
            grids[limit - step + 16].classList.add("orange");
          }
          else if (grids[limit - step].classList.contains("green")) {
            grids[limit - step].classList.remove("green");
            grids[limit - step + 16].classList.add("green");
          }
          else if (grids[limit - step].classList.contains("cyan")) {
            grids[limit - step].classList.remove("cyan");
            grids[limit - step + 16].classList.add("cyan");
          }
          else if (grids[limit - step].classList.contains("yellow")) {
            grids[limit - step].classList.remove("yellow");
            grids[limit - step + 16].classList.add("yellow");
          }
          else if (grids[limit - step].classList.contains("purple")) {
            grids[limit - step].classList.remove("purple");
            grids[limit - step + 16].classList.add("purple");
          };
        };
      };

      score.innerText = parseInt(score.innerText) + 1000;
    };
  };
};

export { clearCondition };
