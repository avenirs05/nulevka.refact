$(function () {

	// Появление кнопки "Дальше".
	$("#szv-quest-no").change(function() {
	    $('#btn-next-szv').show();	     
	});
	

	// Если СЗВ - ответ: да
	$("#szv-quest-yes").change(function() {
			$('#btn-next-szv').show();		
			if ( $(this).prop('checked') ) {
					$('#choice-period-text').show();
					$('#choice-period-text').after( showAllItemsOfSzvCheckboxWrapIfSentYes() );
					makeCheckedSzvIfBtnBack();
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
			showReportsWillSendCompany(true); 			
			addPhraseIfOneQuarter();

			if ( $('#szv-quest-yes').prop('checked') ) {
						hideSzvIfSzvYesAndAllCheckedByUser();
			}			

			$('#final-sum-digits').text( calculateFinalSumCompany() );
	});

	
	// Когда пользователь отмечает, что сдавал сзв в тот или иной месяц
	// Событие на document, т.к. quart-months-wrap был создан динамически (вставлен в dom)
	$(document).on('change', '.quart-months-wrap input', manageSzvCheckboxCheckedByUser);

});