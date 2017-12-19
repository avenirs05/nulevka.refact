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


	// Кнопка Дальше
	$("#btn-next-tax-system").click(function() {
		$("#tax-system-section").hide();
		$("#transactions-section").show();
	});


	// Если все чекбоксы сняты, кнопка "Дальше" становится неактивной
  // Если появился хоть один чекбокс, то кнопка "Дальше становится снова активной
	$(".div-quarters input:checkbox").change(function() {
			var checks = $(".div-quarters input:checkbox");
			var cntChecked = 0;

			if ( $(this).prop('checked') ) {
					if ( $('#btn-next-tax-system').hasClass('disabled-btn') ) {
								enableElement('#btn-next-tax-system', 'disabled-btn');
					}
					return false;
			}
			
			$(checks).each(function(index, element) {			
					if ( $(element).prop('checked') ) { 
						  cntChecked++;
				  }
			});

			if (cntChecked === 0) {
				disableElement('#btn-next-tax-system', 'disabled-btn');
			}
	});

});