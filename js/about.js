$(function(){
	// ABOUT PAGE Slider
	$('.people-says > .contents').slick({
		slidesToShow:1,
		dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear',
    prevArrow : $('.arrowLeft'),		
		nextArrow : $('.arrowRight')
	});

});