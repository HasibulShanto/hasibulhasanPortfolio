$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
		}, 4000);

$(window).on('scroll',function() {
	var scroll = $(window).scrollTop();
	if (scroll < 80) {
	$(".header-middle").removeClass("sticky");
	}else{
	$(".header-middle").addClass("sticky");
	}
});
//Smooth scrolling every section from navbar
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	// Prevent default anchor click behavior
	event.preventDefault();
	// Store hash
	var hash = this.hash;
	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate({
	scrollTop: $(hash).offset().top
	}, 1500, function(){
	// Add hash (#) to URL when done scrolling (default click behavior)
	window.location.hash = hash;
	});
	} // End if
	});
});
//to the top
var scrollTop = $(".scrollTop");
$(window).scroll(function() {
	// declare variable
	var topPos = $(this).scrollTop();
	// if user scrolls down - show scroll to top button
	if (topPos > 4050) {
	$(scrollTop).css("opacity", "1");
	} else {
	$(scrollTop).css("opacity", "0");
	}
}); // scroll END
//Click event to scroll to top
$(scrollTop).click(function() {
	$('html, body').animate({
	scrollTop: 0
	}, 1000);
	return false;
}); // click() scroll top EMD 

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	    loop:true,
	    // margin:10, 
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	})
}); 

AOS.init(); 