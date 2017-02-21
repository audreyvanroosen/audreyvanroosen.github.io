$(document).ready(function() {

  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });

  setTimeout(function(){
		 $('header').removeClass('hidden-header');
	}, 10);

});

