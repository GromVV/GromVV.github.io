"use strict";


$(function() {


  $(".accent_2 h1").animated("zoomInUp", "zoomOutDown");
	// Mask

	$("#phone").mask("+38(999) 999-9999");

	//Popup FancyBox

	$(".fancybox").fancybox();

	// PageScroll2id

	$(".top_text a, .logo").mPageScroll2id();

	//SVG Fallback
	
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

  // fullPage

  function heightDetect(){
  	$(".top_wrapper").css("height", $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
  	heightDetect();
  });


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail

	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				$.fancybox.close();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

		$(".main_form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
