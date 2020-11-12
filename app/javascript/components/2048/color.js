const color = () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach(grid => {
    if (grid.innerText == "2") {
      grid.style.backgroundColor = "rgba(255, 171, 0, 1)";
    }
    else if (grid.innerText == "4") {
      grid.style.backgroundColor = "rgba(255, 150, 0, 1)";
    }
    else if (grid.innerText == "8") {
      grid.style.backgroundColor = "rgba(255, 130, 0, 1)";
    }
    else if (grid.innerText == "16") {
      grid.style.backgroundColor = "rgba(255, 110, 0, 1)";
    }
    else if (grid.innerText == "32") {
      grid.style.backgroundColor = "rgba(255, 90, 0, 1)";
    }
    else if (grid.innerText == "64") {
      grid.style.backgroundColor = "rgba(255, 70, 0, 1)";
    }
    else if (grid.innerText == "128") {
      grid.style.backgroundColor = "rgba(255, 50, 0, 1)";
    }
    else if (grid.innerText == "256") {
      grid.style.backgroundColor = "rgba(255, 30, 0, 1)";
    }
    else if (parseInt(grid.innerText) >= 512) {
      grid.style.backgroundColor = "rgba(255, 10, 0, 1)";
    };
  });

  grids.forEach(grid => {
    if (grid.innerText == "") {
      grid.style.backgroundColor = "";
    }
  });
};

export { color };
