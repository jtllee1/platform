const generateWord = () => {
  const chosenWord = document.getElementById("chosen-word");
  const word = document.getElementById("word");
  const image = document.getElementById("image");
  const number = Math.floor(Math.random() * 889) + 1;

  word.innerText = "";

  fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`).then(function (response) {
    return response.json();
  }).then(function (data) {
    chosenWord.innerText = data.name;

    let letterCount = chosenWord.innerText.length;

    image.innerText = null;

    let pokeImage = document.createElement("img");
    let imgSource = data.sprites.other["official-artwork"].front_default;

    pokeImage.srcset = imgSource;
    pokeImage.className = "hidden poke-image";
    image.append(pokeImage);

    for(let i = 0; i < letterCount; i++) {
      let hiddenLetter = document.createElement("div");
      hiddenLetter.className = "hidden-letter";
      hiddenLetter.innerText = "_";
      word.append(hiddenLetter);
    };
  });
};

export { generateWord };
