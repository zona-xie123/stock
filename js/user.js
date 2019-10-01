
$(document).ready(function() {
	if ($(window).width() < 768){
		$('.step .sub_title').prepend($('.lottery'))
	}
	
	AOS.init();
    var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 10,
		slidesPerGroup: 2,
		autoplay:true,
		// init: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		breakpoints: {
		  640: {
			slidesPerView: 1,
			spaceBetween: 20,
			slidesPerGroup: 1
		  },
		  800: {
			slidesPerView: 1,
			spaceBetween: 40,
			slidesPerGroup: 1
		  },
		  1024: {
			slidesPerView: 2,
			slidesPerGroup:2,
			spaceBetween: 0,
		  },
		}
	  });
	  	//faq_down
	$('.faq .qa-section h4').each(function (i) {

		var _number = i;
		$(this).click(function () {
			$(this).toggleClass('active-qa')
			$('.faq .qa-section p').eq(_number).slideToggle(200);
		});
	});
	    //gotop        
			var gotop = $('.top');
			gotop.click(function() {
					$('html,body').animate({
							scrollTop: 0
					}, 500);
			});
			$(window).scroll(function() {
					if ($(this).scrollTop() > 200) {
							gotop.fadeIn();
					} else {
							gotop.stop().fadeOut();
					}
			});
    $('a.target-burger').click(function(e){
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
	$('.main-nav ul li a').click(function(){
		$('.target-burger,.main-nav').removeClass('toggled')
	})


	

	

})