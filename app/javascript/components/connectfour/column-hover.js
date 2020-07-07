const columnHover = (column, addedClass) => {
  let columnItems = [];
  let check = true;

  for (let step = 1; step < 11; step++) {
    columnItems[step - 1] = document.getElementById(`${step}-${column}`)
  };

  columnItems.reverse().forEach(item => {
    if (item.classList.contains("active-1") == false && item.classList.contains("active-2") == false && check) {
      item.classList.add(`${addedClass}`);
      check = false;
    };
  });
};

export { columnHover };
