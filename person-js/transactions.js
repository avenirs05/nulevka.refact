$(function () {

	// Были ли движения по р/с? Ответ: Да
	$("#trans-yes").change(function() {
	     if ( ($('#trans-yes')).prop('checked') ) {
	           $('#btn-next-trans').show();
	     } 
	});


	// Были ли движения по р/с? Ответ: Нет
	$("#trans-no").change(function() {
	    if ( ($('#trans-no')).prop('checked') ) {
	         $('#btn-next-trans').show();
	    } 
	});


	// Кнопка Назад
	$("#btn-back-trans").click(function() {
	    $('#transactions-section').hide();
			$('#tax-system-section').show();
	});
	

	// Кнопка Дальше
	$("#btn-next-trans").click(function() {
			$('#transactions-section').hide();
	    showReportsWillSendIp();    
	    $('#final-sum-digits').text( calculateFinalSumIp() );
	    showPaspDataFromCustomerIp();
	});

});