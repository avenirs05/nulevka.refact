$(function () {

	// Появление кнопки "Дальше". Если СЗВ - ответ: нет
	$("#szv-quest-no").change(function() {
	    $('#btn-next-szv').show();	     
	});
	

	// Если СЗВ - ответ: да
	$("#szv-quest-yes").change(function() {		
			if ( $(this).prop('checked') ) {
					$('#choice-period-text').show();
					$('#choice-period-text').after( showAllItemsOfSzvState () );
			}
	});

	
	// Если СЗВ - ответ: нет
	$("#szv-quest-no").change(function() {
			if ( $(this).prop('checked') ) {
						$('#choice-period-text').hide();
						$('.quart-months-wrap').hide();
			}
	});

	
	// Кнопка "Назад"
	$("#btn-back-szv").click(function() {		
			$('#szv-section').hide();
	    $('#one-face-section').show();	
	    szvState = [];	
	    $('#quart-months-wrap').remove();		
	});

	
	// Кнопка Дальше
	$("#btn-next-szv").click(function() {		
			$('#szv-section').hide();
	    $('#will-send-section').show();					 
	});

});