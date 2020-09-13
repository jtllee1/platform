const cubePress = () => {
  const cubeFront = document.querySelector(".cube-23");
  const cubeTop = document.querySelector(".cube-17");
  const cubeRight = document.querySelector(".cube-15");
  const cubeLeft = document.querySelector(".cube-13");
  const cubeBack = document.querySelector(".cube-5");
  const cubeBottom = document.querySelector(".cube-11");

  cubeFront.classList.add("active");
  cubeTop.classList.add("active");
  cubeRight.classList.add("active");
  cubeLeft.classList.add("active");
  cubeBack.classList.add("active");
  cubeBottom.classList.add("active");

  cubeFront.addEventListener('mousedown', () => {
    cubeFront.classList.remove("active");
  });

  cubeFront.addEventListener('mouseup', () => {
    cubeFront.classList.add("active");
  });

  cubeTop.addEventListener('mousedown', () => {
    cubeTop.classList.remove("active");
  });

  cubeTop.addEventListener('mouseup', () => {
    cubeTop.classList.add("active");
  });

  cubeRight.addEventListener('mousedown', () => {
    cubeRight.classList.remove("active");
  });

  cubeRight.addEventListener('mouseup', () => {
    cubeRight.classList.add("active");
  });

  cubeLeft.addEventListener('mousedown', () => {
    cubeLeft.classList.remove("active");
  });

  cubeLeft.addEventListener('mouseup', () => {
    cubeLeft.classList.add("active");
  });

  cubeBack.addEventListener('mousedown', () => {
    cubeBack.classList.remove("active");
  });

  cubeBack.addEventListener('mouseup', () => {
    cubeBack.classList.add("active");
  });

  cubeBottom.addEventListener('mousedown', () => {
    cubeBottom.classList.remove("active");
  });

  cubeBottom.addEventListener('mouseup', () => {
    cubeBottom.classList.add("active");
  });
};

export { cubePress };
