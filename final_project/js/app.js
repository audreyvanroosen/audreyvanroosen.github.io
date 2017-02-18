$( document ).ready(function() {

	setTimeout(function(){
		 $('header').awesomeCursor('bomb');
	}, 2000);

  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });

});