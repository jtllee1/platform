const selection = (option) => {
  const display = document.getElementById("display");
  let div = document.createElement('div');
  div.className = `selection s-${option}`;
  display.appendChild(div);
};

export { selection };
