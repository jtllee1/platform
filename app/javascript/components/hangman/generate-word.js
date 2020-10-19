const generateWord = () => {
  const chosenWord = document.getElementById("chosen-word");
  const image = document.getElementById("image");
  const number = Math.floor(Math.random() * 889) + 1;

  fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`).then(function (response) {
    return response.json();
  }).then(function (data) {
    chosenWord.innerText = data.name;
  });

  image.innerText = null;

  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${number}.png`;
  pokeImage.className = "hidden poke-image";
  image.append(pokeImage);
};

export { generateWord };
