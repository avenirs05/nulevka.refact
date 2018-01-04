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
			// var checkbox = '.div-quarters input:checkbox';
			// var wrap = '.div-quarters';

			$('#szv-section').hide();
	    $('#will-send-section').show();	

	    showReportsIfGeneral();
	    // if ( $('#general').prop('checked') ) {
	    // 			if ( $('#trans-yes').prop('checked') ) {
	    // 						$('#decl-nds-wrap').show();
	    // 						$('#decl-profit-wrap').show();
	    // 			} else {
	    // 				$('#decl-one-wrap').show();
	    // 			}

	    // 			$('#count-ins-wrap').show(); 
	    // 			$('#count-fss-wrap').show(); 
	    // 			$('#szv-m-wrap').show(); 

	    // 			if ( !(noCheckedFourQuart(checkbox, wrap) ) ) {
	    // 					$('#buh-rep-ifns-wrap').show(); 
	    // 					$('#buh-rep-stat-wrap').show(); 
	    // 					$('#workers-cnt-wrap').show(); 
	    // 			}				 
	    // }

	    if ( $('#simple').prop('checked') ) {
	    			if ( !(noCheckedFourQuart(checkbox, wrap) ) ) {
	    						  $('#decl-usn-wrap').show();
	    			}	
	    			
	    			$('#count-ins-wrap').show(); 
	    			$('#count-fss-wrap').show(); 	
	    			$('#szv-m-wrap').show();
	    			
	    			if ( !(noCheckedFourQuart(checkbox, wrap) ) ) {
    						  $('#buh-rep-ifns-wrap').show(); 
    						  $('#buh-rep-stat-wrap').show(); 
    						  $('#workers-cnt-wrap').show(); 	
	    			}	
	    }
	});

	
	// Когда пользователь отмечает, что сдавал сзв в тот или иной месяц
	// Событие на document, т.к. quart-months-wrap был создан динамически (вставлен в dom)
	$(document).on('change', '.quart-months-wrap input', function() {
			var inputs = '.quart-months-wrap input';
			var inputId = $(this).attr('id');
			var input = $(this);
			var indexInput = szvCheckboxCheckedByUser.indexOf(inputId);

			if ( input.prop('checked') && 
					 $.inArray(inputId, szvCheckboxCheckedByUser) === -1 ) 
			{
						szvCheckboxCheckedByUser.push(inputId);
			} 	 	

			if ( input.prop('checked') === false ) {
					if ( $.inArray(inputId, szvCheckboxCheckedByUser) !== -1 ) {
							delete szvCheckboxCheckedByUser[indexInput];
					}			
			} 				
	});

});