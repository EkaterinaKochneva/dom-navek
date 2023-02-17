$(document).ready(function(){
    $('.collaps-btn-js').on('click', function () {
        $(this).toggleClass('collapsed');
        if($(this).hasClass('collapsed')) {
            $(this).text($(this).data('collapsed-disabled'));
        } else {
            $(this).text($(this).data('collapsed-enabled'));
        }
        $(this).next().fadeToggle();
    });
    
    
    const stockSlider = new Swiper('.stock-slider__swiper', {
		slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
		autoplay: {
			delay: 8000,
		},
        pagination: {
            el: '.stock-slider__pagination',
            clickable: true,
          },
	});

    const swiperProductThumbs = new Swiper('.product-thumbs__swiper', {

		slidesPerView: 'auto',
		spaceBetween: 5,

        navigation: {			
			prevEl: '.product-thumbs__btn-prev',
            nextEl: '.product-thumbs__btn-next'
		  },

	});
	const swiperProduct = new Swiper('.product-slider__swiper', {

		slidesPerView: 1,
		draggable: true,

		thumbs: {
			swiper: swiperProductThumbs,
		  },
        navigation: {			
        prevEl: '.product-slider__btn-prev',
        nextEl: '.product-slider__btn-next'
        },
	});

    //Плавный скролл и активация таба комплектации в карточке
	$(".product-equipment-link--js").on("click", function (e) {
		e.preventDefault();
		let get_id = $(this).attr('href');
        let target = $(get_id).offset().top - 200; 
		$("html, body").animate({ scrollTop: target }, 500);
		$(get_id)[0].click(); 
	});

    //Раскрытие описания в выполненных проектах
	$(".completed-description__btn-more").on("click", function () {
        $(this).prev().addClass('visible');
        $(this).fadeOut(50);
	});

    //Калькулятор квиз на странице kalkulyator.html

    $(".calc-quiz__radio, .calc-quiz__area-btn").click(function () {
		$(this).parents(".calc-quiz__step").removeClass("active");
		$(this).parents(".calc-quiz__step").next().addClass("active");
	});

})