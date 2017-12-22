$(function () {

	// Появление кнопки "Дальше". Если СЗВ - ответ: нет
	$("#szv-quest-no").change(function() {
	    $('#btn-next-szv').show();	     
	});
	

	// Если СЗВ - ответ: да
	$("#szv-quest-yes").change(function() {
			$('#choice-period-text').show();
				
	    $(".div-quarters input:checkbox").each(function() {
			    if ( $(this).prop('checked') ) {
			    			var quartText = $(this).parent().text();
			    			var quartNum = $(this).attr('id')[4];
			    			var year = quartText.match( /20\d\d/g );
			    			year = year[0];    
	
				    		$('#label-szv-quest-no').after( szvSent(quartText, quartNum, year) );
			    }
	    });
	});

	
	// Кнопка "Назад"
	$("#btn-back-szv").click(function() {		
			$('#szv-section').hide();
	    $('#one-face-section').show();					 
	});

	
	// Кнопка Дальше
	$("#btn-next-szv").click(function() {		
			$('#szv-section').hide();
	    $('#will-send-section').show();					 
	});

});