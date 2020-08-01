const tail = (level) => {
  for (let step = 0; step < (level + 1); step++) {
    let tail = document.getElementById(`inner-${step}`);
    if (step > 0) {
      tail.removeAttribute('id');
      tail.id = `inner-${step - 1}`;
    }
    else {
      tail.removeAttribute('id');
      tail.classList.remove("body");
    };
  };
};

export { tail };
