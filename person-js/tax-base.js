$(function () {

	// Какая у Вас база налогообложения? Ответ: Доходы
	$("#base-inc").change(function() {
	     if (($('#base-inc')).prop('checked')) {
	          $('#btn-next-base').show();
	     } 
	});


	// Какая у Вас база налогообложения? Ответ: Доходы минус расходы
	$("#base-inc-spent").change(function() {
	    if (($('#base-inc-spent')).prop('checked')) {
	        $('#btn-next-base').show();
	    } 
	});


	// Кнопка Назад
	$("#btn-back-base").click(function() {
	    $('#div-base').hide();
	    $('#div-tax-system').show();
	    $('#btn-next-tax-system-ip-0').show();
	});


	// Кнопка Дальше
	// $("#btn-next-base").click(function() {
	//     $('#div-one-face').show();
	//     $('#div-base').hide();
	// });

	// Кнопка Дальше
	$("#btn-next-base, #btn-next-tax-system-ip").click(function() {
		$('#div-base').hide();

	    if ( $('#simple-ip').prop('checked') ) {
	        $('#div-tax-system').hide();
	        insertNalogDecl();
	        $('#div-from-customer-ip').show();
	        $('#pasp-ser-ip').parent().hide();
	        $('#pasp-num-ip').parent().hide();
	        $('#pasp-date-issue-ip').parent().hide(); 
	        $('#pasp-who-issue-ip').parent().hide(); 
	        $('#pasp-kp-ip').parent().hide(); 
	    }
	    if ( $('#general-ip').prop('checked') ) {
	        if ( $("#qrt-4-2017").prop('checked') || 
	             $("#qrt-4-2016").prop('checked') || 
	             $("#qrt-4-2015").prop('checked') ||
	             $("#qrt-4-2014").prop('checked') ) 
	        {                
	            $('#decl-nds').parent().parent().show();
	            showInputsWillSend('#decl-nds');
	            insertDeclNdflIfIpIfQuartIs4();
	            $('#div-tax-system').hide();
	            $('#div-will-send').show();
	            $('#span-we-will-send').text('Мы Вам подготовим и отправим на e-mail');  
	            $('#span-we-will-send').show();                
	            $('#div-from-customer-ip').show();

	            $('#pasp-ser-ip').parent().show();
	            $('#pasp-num-ip').parent().show();
	            $('#pasp-date-issue-ip').parent().show(); 
	            $('#pasp-who-issue-ip').parent().show(); 
	            $('#pasp-kp-ip').parent().show();             
	        } 
	        else {
	            $('#decl-nds').parent().parent().show();
	            showInputsWillSend('#decl-nds');
	            $('#div-tax-system').hide();                
	            $('#div-will-send').show();
	            $('#span-we-will-send').text('Мы Вам подготовим и отправим на e-mail');
	            $('#span-we-will-send').show();                
	            $('#div-from-customer-ip').show();
	            $('#pasp-ser-ip').parent().hide();
	            $('#pasp-num-ip').parent().hide();
	            $('#pasp-date-issue-ip').parent().hide(); 
	            $('#pasp-who-issue-ip').parent().hide(); 
	            $('#pasp-kp-ip').parent().hide(); 
	        }
	    }

	    $('#div-from-customer-ip').before( $('#div-final-sum') );
	    $('#div-final-sum').show();
	    $('#final-sum-text').show();
	    $('#final-sum-digits').text( calculateFinalSum() );
	});
	// Кнопка Дальше

});