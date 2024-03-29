$(document).ready(function () {
	FastClick.attach(document.body);
	//footer_fix
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) {
			$('.footer_fix').addClass('footerFixed').addClass('animated slideInUp');
		} else {
			
			$('.footer_fix').removeClass('footerFixed animated slideInUp');
		}
		
	});
	if ($(window).width() < 768) {
		$(window).scroll(function () {
			last = $("body").height() - $(window).height()
			if ($(window).scrollTop() >= last) {
				$(".footer_fix").hide()
			} else {
				$(".footer_fix").show()
			}
		})
	}
	//kv-btn
	$('.kv a').click(function () {
		event.preventDefault();
		//Animate
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 150
		}, 500);
	});
	// Sticky Header
	$(window).scroll(function () {

		if ($(window).scrollTop() > 580) {
			$('.navigation').addClass('sticky');
		} else {
			$('.navigation').removeClass('sticky');
		}
	});


	// navigation scroll
	$('.navigation li a').click(function (event) {
		var id = $(this).attr("href");
		var offset = 0;
		var target = $(id).offset().top - offset - 150;
		$('html, body').animate({
			scrollTop: target
		}, 500);
		event.preventDefault();
	});

	/* WORK IN PROGRESS
	   NAVIGATION ACTIVE STATE IN SECTION AREA
	*/
	var sections = $('.section'),
		nav = $('.navigation'),
		nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	//lottery
	if ($(window).width() < 768) {
		$('.step .sub_title').prepend($('.lottery'))
	}

	AOS.init();
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 10,
		slidesPerGroup: 2,
		autoplay: true,
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
				slidesPerGroup: 2,
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
	gotop.click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			gotop.fadeIn();
		} else {
			gotop.stop().fadeOut();
		}
	});
	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
	$('.main-nav ul li a').click(function () {
		$('.target-burger,.main-nav').removeClass('toggled')
	})






})