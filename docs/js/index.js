$(document).ready(function(){
    // Калькулятор расчета стоимости
    $('.calculator__button-next-step').click(function (e) {	
        e.preventDefault();
        $(this).parents(".calculator__step").removeClass("active");
        $(this).parents(".calculator__step").next().addClass("active");	
        const show_id = $(this).attr('href').substring(1);
        $('.calculator__counter-item').removeClass('active');
        $('.calculator__counter-item[data-step="'+show_id+'"]').addClass('active');

	});


    // House materials for mobile
    $('.house-materials__info').hover(function () {	
        let number = $(this).attr("data-number");
        console.log(number);
        $('.house-materials__show-for-mobile .house-materials__show-'+number).toggle();
	});


})