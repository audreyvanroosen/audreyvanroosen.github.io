// ANIMATION SCROLL

// wait for all out assets to load
// good practice - obv not needed in this demo
$(document).ready( function() {
  
  $('.scroll-down a, .popLeftMenu a, .scroll-to-projects a, .scroll-to-contact a').click(function(e) {
    // take this off and see what happens
    // this stops the browser from jumping down
    e.preventDefault();
    
    // the anchor u clicked on's href corresponds
    // to the div's id we want to scroll to
    var id = $(this).attr('href');
    
    // pass the id in as a selector to the div
    // dont prefix with #, already in href ;)
    var target = $(id);
    
    // div's pixel amount from top 
    // where we need to scroll to
    var scrollTo = target.offset().top;
    
    // how long we should take to scroll
    // in milliseconds
    var speed = 1500;
    
    $('html,body').animate({
      scrollTop: scrollTo
    }, speed);
    
  }); 
});

// ANIMATION SCROLL END



/*SCROLLTOTOP BUTTON*/
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

/*SCROLLTOTOP BUTTON*/