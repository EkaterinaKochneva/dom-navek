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

	


})
