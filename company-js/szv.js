$(function () {

	// Сдавалась ли форма СЗВ-М? Ответ: Да
	$("#szv-quest-yes").change(showAndHideSzvMonths);
	$("#szv-quest-yes").change(function() {
	     if (($('#szv-quest-yes')).prop('checked')) {
	          $('#choice-months').show();
	          $('#btn-next-szv-quest').show();
	     } 
	});


	// Сдавалась ли форма СЗВ-М? Ответ: Нет
	$("#szv-quest-no").change(function() {
	    $('#choice-months').hide();
	    $('.month').hide();
	    $('#btn-next-szv-quest').show();
	});


	// Кнопка Назад
	$("#btn-back-szv-quest").click(function() {
	    $('#div-szv-quest').hide();
	    $('#div-one-face').show();         
	});


	// Кнопка Дальше
	$("#btn-next-szv-quest").click(function() {
	    if ( $('#szv-quest-no').prop('checked') ) { 
	        $('.month').remove(); 
	    }

	    $('#div-szv-quest').hide();
	    $('#div-will-send').show();
	    $('#span-we-will-send').show();
	    $('#div-from-customer').show();
	    $('#snils-dir').parent('div').show();

	    if ( $('#tranz-yes').prop('checked') && $('#one-face-yes').prop('checked') ) {            
	        hideAllInputsWillSend();

	        if ( $('#general').prop('checked') ) {
	            $('#decl-nds').parent().parent().show();
	            showInputsWillSend('#decl-nds');
	            $('#decl-profit').parent().parent().show();
	            showInputsWillSend('#decl-profit');
	        }

	        $('#count-ins').parent().parent().show();
	        showInputsWillSend('#count-ins');

	        $('#count-fss').parent().parent().show();
	        showInputsWillSend('#count-fss');            
	    }

	    if ( $('#tranz-yes').prop('checked') && 
	    	 $('#one-face-yes').prop('checked') == false ) {
	        
	        hideAllInputsWillSend();

	        if ( $('#general').prop('checked') ) {
	            $('#decl-nds').parent().parent().show();
	            showInputsWillSend('#decl-nds');
	            $('#decl-profit').parent().parent().show();
	            showInputsWillSend('#decl-profit');
	        }

	        $('#count-ins').parent().parent().show();
	        showInputsWillSend('#count-ins');
	        
	        $('#count-fss').parent().parent().show();
	        showInputsWillSend('#count-fss');
	        
	        $('#szv-m').parent().parent().show();
	        showInputsWillSendSzv();
	    }

	    if ( $('#tranz-yes').prop('checked') == false && 
	    	 $('#one-face-yes').prop('checked') ) {
	        
	        hideAllInputsWillSend();	        
	        
	        if ( $('#general').prop('checked') ) {
	            $('#decl-one').parent().parent().show();
	            showInputsWillSend('#decl-one');
	        }
	        
	        $('#count-ins').parent().parent().show();
	        showInputsWillSend('#count-ins');
	        
	        $('#count-fss').parent().parent().show();
	        showInputsWillSend('#count-fss');
	    }

	    if ( $('#tranz-yes').prop('checked') == false && 
	    	 $('#one-face-yes').prop('checked') == false ) {
	        
	        hideAllInputsWillSend ();	        
	        
	        if ( $('#general').prop('checked') ) {
	             $('#decl-one').parent().parent().show();
	             showInputsWillSend('#decl-one');
	        }	        
	        
	        $('#count-ins').parent().parent().show();
	        showInputsWillSend('#count-ins');
	        
	        $('#count-fss').parent().parent().show();
	        showInputsWillSend('#count-fss');
	        
	        $('#szv-m').parent().parent().show();
	        showInputsWillSendSzv();
	    }
	   
	    insertDeclUsnIfQuartIs4 ();
	    insertDiffReportsIfQuartIs4 ();

	    if ( $('#qrt-4-2017').prop('checked') || 
	    	   $('#qrt-4-2016').prop('checked') || 
	         $('#qrt-4-2015').prop('checked') ||
	         $('#qrt-4-2014').prop('checked') ) 
	    {
	        $('#cnt-workers').parent().show();
	    } 

	    if ( $('#one-face-yes').prop('checked') ) {
	         $('#snils-dir').parent('div').hide();
	    }

	    $('#div-from-customer').before( $('#div-final-sum') );
	    $('#div-final-sum').show();
	    $('#final-sum-text').show();
	    // Калькулятор. Подсчет итоговой суммы
	    $('#final-sum-digits').text( calculateFinalSum() ); 
	    // Калькулятор. Подсчет итоговой суммы
	});
	// Кнопка Дальше

});