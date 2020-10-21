const checkLetter = (letter) => {
  const chosenWord = document.getElementById("chosen-word");
  const count = document.getElementById("count");
  const hiddenLetters = document.querySelectorAll(".hidden-letter");
  const gameState = document.getElementById("game-state");
  const pokeImage = document.querySelector(".poke-image");

  let i = 0;

  hiddenLetters.forEach(hiddenLetter => {
    if (letter == chosenWord.innerText[i]) {
      hiddenLetter.innerText = letter;

      count.innerText = parseInt(count.innerText) + 1;
    };

    i++
  });

  if (count.innerText == chosenWord.innerText.length) {
    gameState.innerText = "Off";
    pokeImage.classList.remove("hidden");
  };
};

export { checkLetter };
