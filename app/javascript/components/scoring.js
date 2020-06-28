const scoring = (score, end) => {
  const scoreBoard = document.getElementById("score");
  const count = document.getElementById("timer");

  if (end == false) {
    scoreBoard.innerText = parseInt(scoreBoard.innerText) + score;
  }
  else {
    scoreBoard.innerText = parseInt(scoreBoard.innerText) * parseInt(count.innerText) / 10;
  }
};

export { scoring };
