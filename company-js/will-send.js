$(function () {

	// Галочки, снимаем, ставим (дочерние/родительские галочки) при отчетах
	$("#decl-nds").change(function() { showAndHideChildChecks (this); });
	$("#decl-profit").change(function() { showAndHideChildChecks (this); });
	$("#count-ins").change(function() { showAndHideChildChecks (this); });
	$("#count-fss").change(function() { showAndHideChildChecks (this); });
	$("#decl-one").change(function() { showAndHideChildChecks (this); });
	$("#szv-m").change(function() { showAndHideChildChecksSzv (this); });
	$('#div-will-send').on("change", ".periods-will-send label input", showAndHideParentCheckbox);
	// Галочки, снимаем, ставим (дочерние/родительские галочки) при отчетах


	// Кнопка Назад
	$("#btn-back-will-send").click(function() {
	    $('#div-final-sum').hide();
	    $('#final-sum-text').hide();
	    $('#final-sum-digits').text('');
		$('#snils-dir').parent('div').hide();
	    $('#cnt-workers').parent('div').hide();
	    
	    if ( ($('#szv-quest-no').prop('checked')) && 
	    	 ($('#one-face-yes').prop('checked') == false) ) 
	    {
	        $('#div-will-send').hide();
	        $('#div-from-customer').hide();
	        $(".periods-will-send").remove();
	        $('#div-szv-quest').show();  
	        $('#span-we-will-send-2017').hide();  
	        $('#div-szv-quest > span').show();
	        $('#choice-months span').show();
	        $('#div-szv-quest br').show();
	        $('#szv-quest-yes').parent('label').show();
	        $('#szv-quest-no').parent('label').show(); 
	        $('#btn-back-szv-quest').show();
	        $('#btn-next-szv-quest').show(); 
	        $('#choice-months').hide();
	        $('.month').remove();
	    } 

	    if ( ($('#szv-quest-yes').prop('checked')) && 
	    	 ($('#one-face-yes').prop('checked') == false) ) 
	    {
	        $('#div-will-send').hide();
	        $('#div-from-customer').hide();
	        $(".periods-will-send").remove();
	        $('#div-szv-quest').show();  
	        $('#span-we-will-send-2017').hide();  
	        $('#div-szv-quest > span').show();
	        $('#choice-months span').show();
	        $('#div-szv-quest br').show();
	        $('#szv-quest-yes').parent('label').show();
	        $('#szv-quest-no').parent('label').show(); 
	        $('#btn-back-szv-quest').show();
	        $('#btn-next-szv-quest').show(); 

	        var inputs = $('.month').children('div').children('label').children('input');
	        for (var i = 0; i < inputs.length; i++) {
	            inputs.eq(i).parent('label').parent('div').parent('div').css('display', 'block');
	            if ( inputs.eq(i).parent('label').parent('div').css('display') == 'none' ) {
	                  inputs.eq(i).parent('label').parent('div').css('display', 'block');
	                  inputs.eq(i).prop('checked', true);
	            } else inputs.eq(i).prop('checked', false);              
	        }
	    }

	    if ( $('#one-face-yes').prop('checked') ) {
	           $('#div-will-send').hide();
	           $('#div-from-customer').hide();
	           $(".periods-will-send").remove();
	           $('#div-one-face').show();  
	           $('#span-we-will-send-2017').hide(); 
	           $('#choice-months').hide();
	           $('.month').remove();
	    }

	    $('#decl-usn-4-2017').parent('label').parent('div').remove();
	    $('#decl-usn-4-2016').parent('label').parent('div').remove();
	    $('#decl-usn-4-2015').parent('label').parent('div').remove();
	    $('#decl-usn-4-2014').parent('label').parent('div').remove();

	    $('#buh-rep-ifns-4-2017').parent('label').parent('div').remove();
	    $('#buh-rep-ifns-4-2016').parent('label').parent('div').remove();
	    $('#buh-rep-ifns-4-2015').parent('label').parent('div').remove();
	    $('#buh-rep-ifns-4-2014').parent('label').parent('div').remove();

	    $('#buh-rep-stat-4-2017').parent('label').parent('div').remove();
	    $('#buh-rep-stat-4-2016').parent('label').parent('div').remove();
	    $('#buh-rep-stat-4-2015').parent('label').parent('div').remove();
	    $('#buh-rep-stat-4-2014').parent('label').parent('div').remove();        

	    $('#workers-cnt-4-2017').parent('label').parent('div').remove();
	    $('#workers-cnt-4-2016').parent('label').parent('div').remove();
	    $('#workers-cnt-4-2015').parent('label').parent('div').remove();
	    $('#workers-cnt-4-2014').parent('label').parent('div').remove();        
	});
	//Кнопка Назад


	// Валидация поля ИНН в форме
	var regExpInn = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

	$('#inn').blur(function() {
	    if ( $(this).val().match(regExpInn) == null ) {
	        $(this).css('color', 'red');
	    } else $(this).css('color', '#000000');
	});

	$('#inn').focus(function() {
	    $(this).css('color', '#000000');
	});
	// Валидация поля ИНН в форме


	// Скидка в случае если снята галочка СЗВ на странице "мы сдадим"
	$("#szv-m").change(function() { 
	    if ( $('#szv-m').prop('checked')  == false ) {
	        var oldSum = $('#final-sum-digits').text();
	        $('#final-sum-digits').text(+ oldSum - 500);
	    }
	    if ( $('#szv-m').prop('checked') ) {
	        var oldSum = $('#final-sum-digits').text();
	        $('#final-sum-digits').text(+ oldSum + 500);
	    }
	});


	// Передача итоговой суммы в форму Яндекс-кассы через скрытое поле
	$('#submit-go-to-pay-ooo').click(function() {
	    var divs = $('.month').children('div');
	    for (var i = 0; i < divs.length; i++) {
	        if ( divs.eq(i).css('display') == 'none' ) {
	            divs.eq(i).children('label').children('input').prop('checked', false);
	        }            
	    }
	    var totalAmount = $('#final-sum-digits').text();
	    $("#total-amount").val(totalAmount);
	}) 
	// Передача итоговой суммы в форму Яндекс-кассы через скрытое поле

});