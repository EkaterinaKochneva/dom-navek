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

    //Плавный скролл
	$(".smooth-scroll-js").on("click", function (e) {
		e.preventDefault();
		let get_id = $(this).attr('href');
        let target = $(get_id).offset().top - 200; 
		$("html, body").animate({ scrollTop: target }, 500);
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

    // Аккардион 
	$('.accordion-head--js').click(function(){
		$(this).toggleClass('active');	
		$(this).next().toggleClass('active').slideToggle();	
	});

    // Калькулятор Дополнительно в Доме за 30 дней
    number_format = function (number, decimals, dec_point, thousands_sep) {
        number = number.toFixed(decimals);
    
        var nstr = number.toString();
        nstr += '';
        x = nstr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? dec_point + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
    
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');
    
        return x1 + x2;
    }

    $("input[class='extra__input']").on("click", function(){
        let parentItem = $(this).parents('.extra__item');
        let total = 0, amount = 0, num_format, subtotal = 0;    
    
        if($(this).is(':checked')){
            parentItem.find('input.extra__input').prop( "checked", false );
            $(this).prop( "checked", true );
        }

        parentItem.find('.extra__row').each(function(){
            if( $(this).find('input.extra__input').is(':checked') ){
                total += parseInt( $(this).find('.extra__price').data('price') );
            }
        });
    
        num_format = number_format(total, 0, '.', ' ');
        parentItem.find('.extra__selected-price span').html(num_format);
      if(num_format != 0){
        parentItem.find('.extra__selected').addClass("active");
      }else{
        parentItem.find('.extra__selected').removeClass("active");
      }
    
        parentItem.parent().find('.extra__item').each(function(index){
            subtotal = $(this).find('.extra__selected-price span').html().replace(' ', '');
            amount += parseInt( subtotal );
        });
    
        num_format = number_format(amount, 0, '.', ' ');
        // console.log('Amount is ' + amount + '  | ' + num_format);
        $(".extra__total span").text(num_format);
        $(".extra__whatsapp").attr('href', 'https://wa.me/send?text=Р’С‹Р±СЂР°РЅРѕ РґРѕРї. РѕРїС†РёР№ РЅР° СЃСѓРјРјСѓ ' +amount +'СЂСѓР±.&phone=78123098141');
        $(".form-extra__order-text").text('Р’С‹Р±СЂР°РЅРѕ РґРѕРї. РѕРїС†РёР№ РЅР° СЃСѓРјРјСѓ ' +amount +'СЂСѓР±.');
    
    });

})