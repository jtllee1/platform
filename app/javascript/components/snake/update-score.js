const updateScore = (difficulty) => {
  const score = document.getElementById("score");

  if (difficulty == 1) {
    score.innerText = parseInt(score.innerText) + 100;
  }
  else if (difficulty == 2) {
    score.innerText = parseInt(score.innerText) + 200;
  }
  else if (difficulty == 3) {
    score.innerText = parseInt(score.innerText) + 300;
  }
};

export { updateScore };
