const generateWord = () => {
  const chosenWord = document.getElementById("chosen-word");
  const number = Math.floor(Math.random() * 889) + 1;

  fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`).then(function (response) {
    return response.json();
  }).then(function (data) {
    chosenWord.innerText = data.name;
  });
};

export { generateWord };
