$(document).ready(function(){

    // Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Click event to scroll to top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
      });

    // $(".nav-tabs a").click(function(){
    //     $(this).tab('show');
    //   });
});

const kitchens = document.querySelector('.kitchen');

const gallery = document.querySelector('.kitchens');

const products = document.querySelector('.products');

const kitchenLink = document.querySelector('.nav-link_kitchen');

const navTabLinks = document.querySelectorAll('.nav-link');

const boxProducts = document.querySelectorAll('.product-img__image');

const modal = document.querySelector('.modal');

const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";

  document.querySelectorAll('.slick-container').forEach(x => {
      x.style.display = 'none';
  });
  
}

boxProducts.forEach((img) => {
    img.addEventListener("click", function() {
        modal.style.display = 'block';
        const slickTarget = `.${this.dataset.slickTarget}`;
        const target = `#${this.dataset.target}`;
        console.log(target);
        $(`${target}`).show();
        $(`${slickTarget}`).slick();
    });
});

/* 
TODO:
1. Create modal widow (on image click). - w3
2. Implement tabs functionality.
3. Implement on tab click handler (init slick).
4. On image click open modal with apropriate tab.
 */
