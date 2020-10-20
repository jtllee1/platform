const checkLetter = (letter) => {
  const chosenWord = document.getElementById("chosen-word");
  const hiddenLetters = document.querySelectorAll(".hidden-letter");

  let count = 0;

  hiddenLetters.forEach(hiddenLetter => {
    if (letter == chosenWord.innerText[count]) {
      hiddenLetter.innerText = letter;
    };

    count++
  });
};

export { checkLetter };
