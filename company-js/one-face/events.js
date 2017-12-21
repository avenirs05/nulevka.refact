$(function () {

	// Появление кнопки "Дальше"
	$("#one-face-yes, #one-face-no").change(function() {
	    $('#btn-next-one-face').show();	     
	});

	// Кнопка "Назад"
	$("#btn-back-one-face").click(function() {
			var checkbox = '.div-quarters input:checkbox';
			var wrap = '.div-quarters';
			
			$('#one-face-section').hide();

	    if ( $("#general").prop('checked') ) {
	    			 $('#transactions-section').show();  					 
	    }

	    if ( $("#simple").prop('checked') ) {
						 if ( noCheckedFourQuart(checkbox, wrap) === true ) {
						  		  $('#tax-system-section').show();
						 } else $('#tax-base-section').show();
			} 
	});


	// Кнопка "Дальше"
	// Если директор и учредитель - разные лица, то переход в СЗВ. Иначе - переход в "Мы подготовим и сдадим"
	$("#btn-next-one-face").click(function() {
			$('#one-face-section').hide();

			if ( $('#one-face-no').prop('checked') ) {
		    $('#szv-section').show();	
			} else $('#will-send-section').show();    
	});

});
