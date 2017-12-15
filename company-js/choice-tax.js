$(function () {

	// Выберите систему налогообложения
	$("#general").change(function () {
	    $('.tax-answer-0').after( $('#choice-quarters') );
	    $('.tax-answer-0').show();
	    $('#choice-quarters').show();
	    $('#btn-next-tax-system').show();
	});
	
	$("#simple").change(function () {
	    $('.tax-answer-1').after( $('#choice-quarters') );
	    $('.tax-answer-1').show();
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
	    $('#modal-not-know').modal('show')
	    $('#btn-next-tax-system').hide();
	});



	// Другие периоды
	$("#another-periods").click(function() {
	    var anotherPeriodsColl = $('#another-periods')
	    												.siblings('div')
	    											  .children('label')
	    											  .children('input:not(#qrt-4-2017)');     
	    for (var i = 0; i < $(anotherPeriodsColl).length; i++) {
	        var anotherPeriodsInput = anotherPeriodsColl.eq(i).parent();
	        if (anotherPeriodsInput.css('display') == "none") {
	            anotherPeriodsInput.show(); 
	        } 	        
	        else 
	            anotherPeriodsInput.hide();
	            $('#uk-question-1').hide();
	            $('#uk-question-2').hide();
	            $('#uk-question-3').hide();
	    }            
	});


	// Если выбран 4-й квартал
	$("#qrt-4-2017, #qrt-4-2016, #qrt-4-2015, #qrt-4-2014").change(showAndHideUK);
	

	// Кнопка Дальше
	$("#btn-next-tax-system").click(function() {
	    if ( $('#general').prop('checked') ) {
	         $('#div-tranz').show();
	         $('#div-tax-system').hide();
	    }
	    if ( $('#simple').prop('checked') ) {
	        if ( $("#qrt-4-2017").prop('checked') || 
	             $("#qrt-4-2016").prop('checked') || 
	             $("#qrt-4-2015").prop('checked') || 
	             $("#qrt-4-2014").prop('checked') ) 
	        {
	            $('#div-base').show();
	            $('#div-tax-system').hide();              
	        } 
	        else {
	            $('#div-tax-system').hide();
	            $('#div-one-face').show(); 
	        }
	    }
	});

});