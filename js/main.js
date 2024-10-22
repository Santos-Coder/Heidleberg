/*Bladix Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    	Sticky Header
=========================================================================*/ 
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 100;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
            	header.removeClass("animated fadeIn");
                header.addClass("navbar-fixed-top cssanimation animated fadeInTop");
                $('.menu-wrap').css('position', 'static')
            } else {
                header.removeClass("navbar-fixed-top cssanimation animated fadeInTop");
                header.addClass("animated fadeIn");
                $('.menu-wrap').css('position', 'relative')
            }

        });
    });

/*=========================================================================
    Main Slider
=========================================================================*/
     // Nivo slider 
    $('#main-slider').nivoSlider({
        effect: 'random',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: true,
        manualAdvance: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: true,
        prevText: "<i class='ti-arrow-left'></i>",
        nextText: "<i class='ti-arrow-right'></i>"
    });


/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $(function(){
        $('#mainmenu').slicknav({
            prependTo: '.site-branding',
            label: '',
            allowParentLinks: true
        });
    });

/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.project-wrapper').imagesLoaded( function() {

		 // Add isotope click function
		$('.project-filter li').on( 'click', function(){
	        $(".project-filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".project-wrapper").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".project-wrapper").isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'masonry',
	    });
	});

			 
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});
/*=========================================================================
        Testimonial Carousel
=========================================================================*/
	$('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false,
        dots: true,
        responsive : {
			    0 : {
			        items: 1,
			    },
			    480 : {
			        items: 2,
			    },
			    768 : {
			        items: 2
			    },
                992 : {
			        items: 3
			    }
			}
        
    });

             
/*=========================================================================
        Sponsor Carousel
=========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 4
            },
            992 : {
                items: 6
            }
        }
    });
		
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	}); 


/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init();             
             
/*=========================================================================
  Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
             


})(jQuery);
