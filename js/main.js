
$(document).ready(function() {
	// Main Page Fullpage
	if($('#fullpage').length){
		$('#fullpage').fullpage({
			anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'lastPage'],
			//options here
			autoScrolling:true,
			scrollHorizontally: false,
			afterLoad: function(origin, anchors){
				if(anchors>1){
					$('.header nav').addClass('fixed');
				}else{
					$('.header nav').removeClass('fixed');
				}
				if(anchors == 2 || anchors == 4){
					$('.fixed-nav').find('a').removeClass('active');
					$('.fixed-nav').find('a').removeClass('active-black');
					$('.fixed-nav').find('a').eq(anchors-1).addClass('active-black');
				}else{
					$('.fixed-nav').find('a').removeClass('active');
					$('.fixed-nav').find('a').removeClass('active-black');
					$('.fixed-nav').find('a').eq(anchors-1).addClass('active');
				}
				// Main Page - Back to the top
				if(anchors == 6 ){
					$('.back_to_top').addClass('active');
				}else{
					$('.back_to_top').removeClass('active');
				}
				// methods
				$.fn.fullpage.setAllowScrolling(true);
		
			} // afterLoad
		});
	} // Main page fullpage end
	// Toggle Menu
	$('.toggle-btn').click(function(){
		$('.toggle-menu').addClass('active');
	});
	$('.toggle-menu .close').click(function(){
		$('.toggle-menu').removeClass('active');
	});
	
	/**************** About Page ****************/
	$(window).scroll(function(){
    // Sub page Header-Nav fixed
		if($(this).scrollTop()>0){
			$('.subpage nav').addClass('fixed');
		}else{
			$('.subpage nav').removeClass('fixed');
		}

    // ABOUT PAGE - Back to the top
    let footerOST = $('.footer').offset().top - 650;
    if($(this).scrollTop() > footerOST){
      $('.back_to_top').addClass('active');
    }else{
      $('.back_to_top').removeClass('active');
    } 
	})

  // ABOUT PAGE - footer back to the top button
  $('.about_btt').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500,'easeOutQuint')
  })

	/**************** Contact Page ****************/
	// Contact form
	if($('.contact-contents').length > 0){
		let formInput = $('.contact-contents form input');
		formInput.click(function(){
			$(this).prev().addClass('active');
			$(this).attr('placeholder', '');
		});
	}
	/**************** Video Page ****************/
	$('.playBtn').click(function(){
		$('.video-player').fadeIn()
	})
	$('.closeBtn').click(function(){
		$('.video-player').fadeOut()
	})

});// document ready