$(function () {

	// Директор и учредитель в одном лице? Ответ: Да
	$("#one-face-yes").change(function() {
	     if ( $('#one-face-yes').prop('checked') ) {
	          $('#btn-next-one-face').show();
	     } 
	});


	// Директор и учредитель в одном лице? Ответ: Нет
	$("#one-face-no").change(function() {
	    if ( $('#one-face-no').prop('checked') ) {
	         $('#btn-next-one-face').show();
	    } 
	});


	// Кнопка Назад
	$("#btn-back-one-face").click(function() {
	    if ( $('#general').prop('checked') ) {
	         $('#div-tranz').show();
	         $('#div-one-face').hide();
	    }
	    if ( $('#simple').prop('checked') ) {
	        if ( $("#qrt-4-2017").prop('checked') ||
	        		 $("#qrt-4-2016").prop('checked') || 
	             $("#qrt-4-2015").prop('checked') || 
	             $("#qrt-4-2014").prop('checked') ) 
	        {
	            $('#div-one-face').hide();
	            $('#div-base').show();
	        } 
	        else 
	        {
	            $('#div-one-face').hide();
	            $('#div-tax-system').show();
	            $('#btn-next-tax-system').show();
	        }
	    }                
	});


	// Кнопка Дальше
	$("#btn-next-one-face").click(function() {
	    if ( $('#one-face-yes').prop('checked') ) {
	         $('#div-one-face').hide();
	         $('#btn-next-szv-quest').trigger('click'); //Пропускаем вопрос про СЗВ 
	    }
	    else {
	        $('#div-one-face').hide();
	        $('#div-szv-quest').show();       
	        showAndHideSzvMonths(); 
	    }
	});


});