$(function () {
	
	// Выберите систему налогообложения
	$("#simple").change(function () {
			if ( noCheckedQuart('#years-wrap input:checkbox') ) {						
					  disableElement('#btn-next-tax-system', 'disabled-btn');
			} else enableElement('#btn-next-tax-system', 'disabled-btn');
			
			$('#choice-quarters').hide();
			$(this).parent().after( $('#years-wrap') );
	    $('#years-wrap').show();
	    $('#btn-next-tax-system').show();
	});


	$("#general").change(function () {
			if ( noCheckedQuart('#choice-quarters input:checkbox') ) {						
					  disableElement('#btn-next-tax-system', 'disabled-btn');
			} else enableElement('#btn-next-tax-system', 'disabled-btn');

			$('#years-wrap').hide();
			$('.uk-wrap').hide();
			$(this).parent().after( $('#choice-quarters') );
	    $('#choice-quarters').show();
	    $('#btn-next-tax-system').show();
	});

	
	$("#envd").change(function () {
	    $('#years-wrap').hide();
	    $('#choice-quarters').hide();
	    $('#modal-envd').modal('show');
	    $('#btn-next-tax-system').hide();
	});    

	
	$("#patent").change(function () {
	    $('#years-wrap').hide();
	    $('#choice-quarters').hide();
	    $('#modal-patent-ip').modal('show');
	    $('#btn-next-tax-system').hide();
	});  

	
	$("#not-know").change(function () {
	    $('#years-wrap').hide();
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
	// Если общая система, то переход в transactions
	// Если упрощенка и нет ни одного 4-го квартала, то переход в one-face
	// Если упрощенка и выбран хотя бы один 4-й квартал, то переход в tax-base 
	$("#btn-next-tax-system").click(function() {
			var checkbox = '.div-quarters input:checkbox';
			var wrap = '.div-quarters';
			$('#tax-system-section').hide();

			if ( $('#general').prop('checked') ) {						
						$('#will-send-section').show();
			}

			if ( $('#simple').prop('checked') ) {
						$('#tax-base-section').show();
			}
	});



	// Если Упрощенная система отмечена
	// Если все чекбоксы сняты, кнопка "Дальше" становится неактивной
  // Если появился хоть один чекбокс, то кнопка "Дальше становится снова активной
  $("#years-wrap input:checkbox").change(function() {
  		if ( noCheckedQuart('#years-wrap input:checkbox') ) {						
  				  disableElement('#btn-next-tax-system', 'disabled-btn');
  		} else enableElement('#btn-next-tax-system', 'disabled-btn');
  });



	// Если Общая система отмечена
	// Если все чекбоксы сняты, кнопка "Дальше" становится неактивной
	// Если появился хоть один чекбокс, то кнопка "Дальше становится снова активной
	$(".div-quarters input:checkbox").change(function() {
			if ( noCheckedQuart('.div-quarters input:checkbox') ) {						
					  disableElement('#btn-next-tax-system', 'disabled-btn');
			} else enableElement('#btn-next-tax-system', 'disabled-btn');

	});

});