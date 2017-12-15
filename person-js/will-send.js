$(function () {

	// Галочки, снимаем, ставим (дочерние/родительские галочки) при отчетах
	$("#decl-nds").change(function() { showAndHideChildChecks (this); });
	$('#div-will-send').on("change", ".periods-will-send label input", showAndHideParentCheckbox);


	// Кнопка Назад
	$("#btn-back-will-send-ip").click(function() {
	    $('#div-will-send').hide();
	    $('#div-from-customer-ip').hide();
	    $(".periods-will-send").remove();          
	    $('#span-we-will-send').hide(); 
	    $('label:contains("3-НДФЛ")').parent().remove();
	    $('#div-tax-system').show();
	    $("#will-prepare-email").remove();
	    $('.nalog-decl').remove();

	    $('#div-final-sum').hide();
	    $('#final-sum-text').hide();
	    $('#final-sum-digits').text('');
	});


	// Калькулятор
	$("html").on('change', '.nalog-decl', function() {
	    j = 0;        
	    for (var i = 0; i < $('.nalog-decl').length; i++) {
	        if ( $('.nalog-decl').eq(i).children('label').children('input').prop('checked') ) {
	            j++;
	        } 
	    }
	    if (j === 0) {
	        $('#final-sum-digits').text('0');
	    } 
	    if (j === 1) {
	        $('#final-sum-digits').text('299');
	    } 
	    if (j === 2) {
	        $('#final-sum-digits').text('598');
	    } 
	    if (j === 3) {
	        $('#final-sum-digits').text('897');
	    } 
	}); 


	// Передача итоговой суммы в форму Яндекс-кассы через скрытое поле
	$('#submit-go-to-pay-ip').click(function() {
	    var totalAmount = $('#final-sum-digits').text();
	    $('#total-amount').val(totalAmount);
	})

});