$(function () {

	// Появление кнопки "Дальше". Если СЗВ - ответ: нет
	$("#szv-quest-no").change(function() {
	    $('#btn-next-szv').show();	     
	});
	

	// Если СЗВ - ответ: да
	$("#szv-quest-yes").change(function() {		
			if ( $(this).prop('checked') ) {
					$('#choice-period-text').show();
					$('#choice-period-text').after( showAllItemsOfSzvCheckboxWrapIfSentYes() );
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
	    szvCheckboxWrapIfSentYes = [];	
	    $('#quart-months-wrap').remove();		
	});

	
	// Кнопка Дальше
	$("#btn-next-szv").click(function() {		
			$('#szv-section').hide();
	    $('#will-send-section').show();					 
	});

	
	// Когда пользователь отмечает, что сдавал сзв в тот или иной месяц
	// Событие на document, т.к. quart-months-wrap был создан динамически (вставлен в dom)
	$(document).on('change', '.quart-months-wrap input', function() {
			var inputs = '.quart-months-wrap input';

			// for (var i = 0; i < $(inputs).length; i++) {
						var inputId = $(this).attr('id');
						var input = $(this);
						var indexInput = szvCheckboxCheckedByUser.indexOf(inputId);

						if ( input.prop('checked') && 
								 $.inArray(inputId, szvCheckboxCheckedByUser) === -1 ) 
						{
									szvCheckboxCheckedByUser.push(inputId);
						} 	 	

						if ( input.prop('checked') === false ) 
						{
								if ( $.inArray(inputId, szvCheckboxCheckedByUser) !== -1 ) {
										alert(input.prop('checked'));
										delete szvCheckboxCheckedByUser[indexInput];
								}						
								
						} 							
			// }

			console.log (szvCheckboxCheckedByUser);
    
	});

});