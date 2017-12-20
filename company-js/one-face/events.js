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

});
