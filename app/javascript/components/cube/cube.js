const cube = () => {
  const selector = '.box-area';
  const box = document.querySelector(selector);
  const style = document.createElement('style');
  const K = 0.5;

  let drag = false;
  let x0 = null;
  let y0 = null;

  function lock(e) {
    drag = true;
    x0 = e.clientX;
    y0 = e.clientY;
  };

  function rotate(e) {
    if(drag) {
      let x = e.clientX;
      let y = e.clientY;
      let dx = x - x0;
      let dy = y - y0;
      let d = Math.hypot(dx, dy);

      if(d) {
        let i = +(-dy/d).toFixed(5);
        let j = +(dx/d).toFixed(5);
        let a = +(K*d).toFixed(2);
        let content = `rotate3d(${[i, j, 0, a]}deg)` + getComputedStyle(box).transform.replace("none", "");

        style.textContent = `${selector}{transform:${content}}`;

        x0 = x;
        y0 = y;
      };
    };
  };

  function release(e) {
    if(drag) {
      drag = false;
      x0 = y0 = null;
    };
  };

  document.body.appendChild(style);

  document.addEventListener('mousedown', lock, false);
  document.addEventListener('mousemove', rotate, false);
  document.addEventListener('mouseup', release, false);
};

export { cube };
