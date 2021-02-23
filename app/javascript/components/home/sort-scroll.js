const sortScroll = () => {
  $(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 100) {
        $(".sort").css({"opacity" : "0.8"});
      }
      else {
        $(".sort").css({"opacity" : "1"});
      }
    });
  });
}

export { sortScroll };
