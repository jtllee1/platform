const checkLetter = (letter) => {
  const chosenWord = document.getElementById("chosen-word");
  const count = document.getElementById("count");
  const hiddenLetters = document.querySelectorAll(".hidden-letter");
  const gameState = document.getElementById("game-state");
  const pokeImage = document.querySelector(".poke-image");

  let i = 0;
  let loseCount = 0;

  hiddenLetters.forEach(hiddenLetter => {
    if (letter == chosenWord.innerText[i]) {
      hiddenLetter.innerText = letter;

      count.innerText = parseInt(count.innerText) + 1;
    }
    else {
      loseCount++;
    };

    i++;

    if (loseCount == hiddenLetters.length) {
      let lives = document.querySelectorAll(".active");

      console.log(lives[lives.length - 1]);

      lives[lives.length - 1].classList.remove("active");
    };
  });

  let checkLives = document.querySelectorAll(".active");

  if (count.innerText == chosenWord.innerText.length || checkLives.length == 0) {
    gameState.innerText = "Off";
    pokeImage.classList.remove("hidden");
  };
};

export { checkLetter };
