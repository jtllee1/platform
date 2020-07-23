const createClouds = (location) => {
  for (let step = 0; step < 11; step++) {
    document.getElementById(`${location + step}`).classList.add("cloud");
    document.getElementById(`${location + 100 + step}`).classList.add("cloud");
  };

  for (let step = -5; step < 15; step++) {
    document.getElementById(`${location + 200 + step}`).classList.add("cloud");
    document.getElementById(`${location + 300 + step}`).classList.add("cloud");
  }

  for (let step = -10; step < 20; step++) {
    document.getElementById(`${location + 400 + step}`).classList.add("cloud");
    document.getElementById(`${location + 500 + step}`).classList.add("cloud");
  }
};

export { createClouds };
