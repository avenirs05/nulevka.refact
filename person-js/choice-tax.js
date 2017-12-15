$(function () {

	// Выберите систему налогообложения
	$("#simple-ip").change(function () {
	    $('#choice-quarters').hide();
	    $('#btn-next-tax-system-ip').hide();
	    $('.tax-answer-1').show();
	    $('#choice-years').show();
	    if ( $('#year-2017-ip-simple').prop('checked') ) {
	    	$('#btn-next-tax-system-ip-0').show();
	    } 
	    if ( $('#year-2016-ip-simple').prop('checked') ) {
	    	$('#btn-next-tax-system-ip-0').show();
	    } 
	    if ( $('#year-2015-ip-simple').prop('checked') ) {
	    	$('#btn-next-tax-system-ip-0').show();
	    } 
	});

	$("#general-ip").change(function () {
	    $('.tax-answer-0').after( $('#choice-quarters') );
	    $('.tax-answer-0').show();
	    $('#choice-quarters').show();
	    $('#btn-next-tax-system-ip-0').hide();
	    $('#btn-next-tax-system-ip').show();
	    $('#choice-years').hide();

	});

	$("#envd-ip").change(function () {
	    $('#choice-quarters').hide();
	    $('#modal-envd-ip').modal('show');
	    $('#btn-next-tax-system-ip').hide();
	});

	$("#patent-ip").change(function () {
	    $('#choice-quarters').hide();
	    $('#modal-patent-ip').modal('show');
	    $('#btn-next-tax-system-ip').hide();
	});

	$("#not-know-ip").change(function () {
	    $('#choice-quarters').hide();
	    $('#modal-not-know-ip').modal('show');
	    $('#btn-next-tax-system-ip').hide();
	});
	// Выберите систему налогообложения


	// Если Упрощенка и выбран хотя бы 1 год, появляется/исчезает кнопка Дальше
	$('#year-2017-ip-simple').change(showHideBtnNextSimpleIp);
	$('#year-2016-ip-simple').change(showHideBtnNextSimpleIp);
	$('#year-2015-ip-simple').change(showHideBtnNextSimpleIp);


	// Если Упрощенка, появляются/исчезают периоды (годы)
	$('#years-simple').click(function() {
	    if ( $('#div-years').css('display') == 'block') {
	        $('#div-years').hide();
	    } else $('#div-years').show();
	});


	// Другие периоды, появляются/исчезают, если Общая система
	$("#another-periods").click(function () {
	    var anotherPeriodsColl = $('#another-periods')
	    													.siblings('div')
	    													.children('label')
	    													.children('input:not(#qrt-4-2017)');     
	    for (var i = 0; i < $(anotherPeriodsColl).length; i++) {
	        var anotherPeriodsInput = anotherPeriodsColl.eq(i).parent();
	        if (anotherPeriodsInput.css('display') == "none") {
	           anotherPeriodsInput.show(); 
	        } else 
	            anotherPeriodsInput.hide();
	            $('#uk-question-0').hide();
	            $('#uk-question-1').hide();
	            $('#uk-question-2').hide();
	    }            
	});


	// Кнопка Дальше
	$("#btn-next-tax-system-ip-0").click(function() {
		$('#div-tax-system').hide();
		$('#div-base').show();		
		$('#btn-next-tax-system-ip-0').hide();
		$('#btn-next-base').show();			
	});
	// Кнопка Дальше

});