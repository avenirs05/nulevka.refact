$(function () {

	// Выберите систему налогообложения
	$("#general, #simple").change(function () {
			$(this).parent().after( $('#choice-quarters') );
	    $('#choice-quarters').show();
	    $('#btn-next-tax-system').show();
	});

	$("#envd").change(function () {
	    $('#choice-quarters').hide();
	    $('#modal-envd').modal('show');
	    $('#btn-next-tax-system').hide();
	});    

	$("#not-know").change(function () {
	    $('#choice-quarters').hide();
	    $('#modal-not-know').modal('show');
	    $('#btn-next-tax-system').hide();
	});

	// Другие периоды	
	$("#another-quarters-text").click(function() {		
		if ( $('#another-quarters-wrap').css('display') == "none" ) {
	          $('#another-quarters-wrap').show(); 
	  } else $('#another-quarters-wrap').hide();
	});

	// Уставный капитал. Если выбран 4-й квартал, то выпадает способ его внесения
  // Поведение самого первого чекбокса - не здесь! Отдельно описано
	$("#another-quarters-wrap .div-quarters input:checkbox").change(function() {	
			var howPutUk = $(this).parent().parent().next();
			var wrap = $(this).parent().parent();
			if (wrap.data('is-four') == 'yes') {
					if ( $(this).prop('checked') ) {
						  howPutUk.show(); 
					} else howPutUk.hide();
			}	
	});

	// Поведение самого первого чекбокса
	$("#first-quarter-label input:checkbox").change(function() {	
			var howPutUk = $(this).parent().parent().next();
			var wrap = $(this).parent().parent();
			if (wrap.data('is-four') == 'yes') {
					if ( $(this).prop('checked') ) {
						  howPutUk.show(); 
					} else howPutUk.hide();
			}	
	});

});