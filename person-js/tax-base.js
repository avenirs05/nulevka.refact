$(function () {

	// Появление кнопки "Дальше" 
	$("#base-inc, #base-inc-spent").change(function() {
			 $('#btn-next-base').show();
	});

	// Кнопка "Назад"
	$("#btn-back-base").click(function() {
	    $('#tax-base-section').hide();
	    $('#tax-system-section').show();
	});

	// Кнопка "Дальше"
	$("#btn-next-base").click(function() {
	    $('#tax-base-section').hide();
	    $('#will-send-section').show();
	});

});