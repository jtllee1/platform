const scoring = (number) => {
  const score = document.getElementById("score");

  score.innerText = parseInt(score.innerText) + number;
};

export { scoring };
