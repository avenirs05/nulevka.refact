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

});