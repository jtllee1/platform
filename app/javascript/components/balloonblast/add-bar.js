const addBar = (bars, bar) => {
  const parent = document.querySelector(`.${bars}`);
  let div = document.createElement('div');
  div.className = `${bar}`;
  parent.appendChild(div);
};

export { addBar };
