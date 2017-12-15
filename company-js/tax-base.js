$(function () {

	// Какая у Вас база налогообложения? Ответ: Доходы
	$("#base-inc").change(function() {
	     if (($('#base-inc')).prop('checked')) {
	          $('#btn-next-base').show();
	     } 
	});


	// Какая у Вас база налогообложения? Ответ: Доходы минус расходы
	$("#base-inc-spent").change(function() {
	    if (($('#base-inc-spent')).prop('checked')) {
	        $('#btn-next-base').show();
	    } 
	});


	// Кнопка Назад
	$("#btn-back-base").click(function() {
	    $('#div-base').hide();
	    $('#div-tax-system').show();
	    $('#btn-next-tax-system').show();
	});


	// Кнопка Дальше
	$("#btn-next-base").click(function() {
	    $('#div-one-face').show();
	    $('#div-base').hide();
	});

});