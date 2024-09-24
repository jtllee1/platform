const sortScroll = () => {
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.querySelectorAll('.sort').forEach((element) => {
          element.style.opacity = '0.8';
        });
      } else {
        document.querySelectorAll('.sort').forEach((element) => {
          element.style.opacity = '1';
        });
      }
    });
  });
}

export { sortScroll };
