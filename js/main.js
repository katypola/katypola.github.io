// start of navbar:
document.addEventListener("DOMContentLoaded", function(){

(function($) {
    "use strict";
  
    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");  
        }
    });

    // //scroll sticky nav for astronomy page
    // $(document.getElementById('apodMain')).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     if (scrollTop > 0) {
    //       $navbar.addClass("sticky");
    //     } else {
    //       $navbar.removeClass("sticky");  
    //     }
    // });

    // //scroll sticky nav for astronomy page
    // $(document.getElementsByClassName('articleHome')).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     if (scrollTop > 0) {
    //       $navbar.addClass("sticky");
    //     } else {
    //       $navbar.removeClass("sticky");  
    //     }
    // });
    
    // //section sticky
    // $(document).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     if ($(window).height() > scrollTop) {
    //       $navbar.removeClass("sticky");
    //     } else {
    //       $navbar.addClass("sticky");  
    //     }
    // });

})(jQuery, undefined);

});
// end of navbar

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });