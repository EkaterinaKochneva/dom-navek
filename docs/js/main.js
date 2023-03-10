$(document).ready(function(){

    // Кнопки в шапке
    $('.bottom-header__menu-mobile').click(function () {
        $(this).toggleClass('active');
		$('.bottom-header__nav').slideToggle();
	});

	$('.bottom-header__link-icon').click(function () {		
        $(this).toggleClass("active");
		$(this).next(".bottom-header__sublist").slideToggle();
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
		  $('.header__bottom').addClass('fixed');
		}
		else{
			$('.header__bottom').removeClass('fixed');
		}
	});

    // Модальные окна
	const link = ".link-modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад" 

			}
		}
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	});
	$.fancybox.defaults.backFocus = false;
    

	 // Tabs
	 $('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(50).addClass('active');
	});

        // House materials for mobile
        $('.house-materials__info').hover(function () {	
            let number = $(this).attr("data-number");
            $('.house-materials__show-for-mobile .house-materials__show-'+number).toggle();
        });
    


	// Map
    const map_markers = [
        ['Всеволожский район', 60.024173, 30.625406],
        ['Всеволожский район', 60.028984, 30.666604],
        ['поселок Романовка', 60.036542, 30.700937],
        ['деревня Хирвости', 59.939527, 30.628152],
        ['Колтушское сельское поселение', 59.936081, 30.647378],
        ['Колтушское сельское поселение', 59.945728, 30.680337],
        ['деревня Новая Пустошь', 59.894707, 30.709176],
        ['деревня Мяглово', 59.879524, 30.684457],
        ['Синявино', 59.897467, 31.178842],
        ['Курортный район', 60.083496, 29.945626],
        ['Приморский район', 60.015506, 30.019784],
        ['Курортный район', 60.151345, 29.955239],
        ['Кировский район', 59.868995, 31.773305],
        ['Кировский район', 59.856563, 31.773305],
        ['поселок Мга, Кировский район', 59.753562, 31.053186],
        ['поселок Мга, Кировский район', 59.75001, 31.063485],
        ['Пушкинский район', 59.730055, 30.324638],
        ['Пушкинский район', 59.727975, 30.344551],
        ['поселок Ропша, Ломоносовский район', 59.732783, 29.874959],
        ['деревня Михайловская, Ломоносовский район', 59.729233, 29.855947],
        ['поселок Лососёво Приозерский район', 60.696474, 29.977304],
        ['поселок Лососёво Приозерский район', 60.695633, 29.978678],
        ['Глухая улица поселок Сосново, Приозерский район', 60.541712, 30.208315],
        ['Гатчина, Ленинградская область', 59.567844, 30.135297],
        ['деревня Вирки Всеволожский район', 59.91216, 30.697538],
        ['поселок Лесколово, Всеволожский район', 60.272578, 30.460601],
        ['садовое товарищество Восход', 59.899341, 31.215164],
        ['поселок городского типа Тайцы, Гатчинский район', 59.663752, 30.13072],
        ['поселок Мшинская, Лужский район', 59.012999, 29.937297],
        ['село Ушаки, Тосненский район', 59.479992, 31.013411],
        ['Чудово, Новгородская область', 59.129886, 31.692254],
        ['поселок Цвелодубово, Выборгский район', 60.395011, 29.561032],
        ['поселок Лейпясуо Выборгский район', 60.557253, 29.154588],
        ['поселок Красносельское Выборгский район', 60.546562, 29.492129],
        ['поселок городского типа Большая Ижора, Ломоносовский район', 59.947930, 29.565330],
    ];

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.9429791, 30.432319],
                zoom:7
            }, {
                searchControlProvider: 'yandex#search'
            });
    
           var myPlacemark=[];
           for(var i=0;i<map_markers.length;i++){
          myPlacemark[i]  = new ymaps.Placemark([map_markers[i][1],map_markers[i][2]], {
                hintContent: map_markers[i][0],
                balloonContent: map_markers[i][0]
            }, { 
                iconLayout: 'default#image', 
                iconImageHref: '../img/icons/marker.png',
            }),
        myMap.geoObjects.add( myPlacemark[i]);
    }
    });

	// Прокрутка наверх страницы
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.button-up').addClass('scroll');
		} else {
			$('.button-up').removeClass('scroll');
		}
	});
	$('.button-up').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});
})
