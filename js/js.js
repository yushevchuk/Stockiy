  /* begin begin Back to Top button  */
// (function() {
//     'use strict';
  
//     function trackScroll() {
//       let scrolled = window.pageYOffset;
//       let coords = document.documentElement.clientHeight;
  
//       if (scrolled > coords) {
//         goTopBtn.classList.add('back-to-top_show');
//       }
//       if (scrolled < coords) {
//         goTopBtn.classList.remove('back-to-top_show')();
//       }
//     }
  
//     function backToTop() {
//       if (window.pageYOffset > 0) {
//         window.scrollBy(0, -80);
//         setTimeout(backToTop, 0);
//       }
//     }
  
//     let goTopBtn = document.querySelector('.back-to-top');
  
//     window.addEventListener('scroll', trackScroll);
//     goTopBtn.addEventListener('click', backToTop);
//   })();
  /* end begin Back to Top button  */

  $(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

  