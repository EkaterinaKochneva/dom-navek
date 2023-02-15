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

	 // Tabs
	 $('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(50).addClass('active');
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
