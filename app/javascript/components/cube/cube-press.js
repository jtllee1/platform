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

  document.addEventListener('mouseup', () => {
    cubeFront.classList.add("active");
    cubeTop.classList.add("active");
    cubeRight.classList.add("active");
    cubeLeft.classList.add("active");
    cubeBack.classList.add("active");
    cubeBottom.classList.add("active");
  });

  cubeFront.addEventListener('mousedown', () => {
    cubeFront.classList.remove("active");
  });

  cubeTop.addEventListener('mousedown', () => {
    cubeTop.classList.remove("active");
  });

  cubeRight.addEventListener('mousedown', () => {
    cubeRight.classList.remove("active");
  });

  cubeLeft.addEventListener('mousedown', () => {
    cubeLeft.classList.remove("active");
  });

  cubeBack.addEventListener('mousedown', () => {
    cubeBack.classList.remove("active");
  });

  cubeBottom.addEventListener('mousedown', () => {
    cubeBottom.classList.remove("active");
  });
};

export { cubePress };
