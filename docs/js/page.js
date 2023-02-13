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

})