$(function () {

		$('#btn-back-will-send').click(function() {
				$('#decl-nds-wrap').hide(); 
				$('#decl-one-wrap').hide();
				$('#decl-usn-wrap').hide();
				$('#decl-ndfl-wrap').hide();

				$('#will-send-section').hide();

				if ( $('#general').prop('checked') )	{
						$('#transactions-section').show();
				} 

				if ( $('#simple').prop('checked') )	{
						$('#tax-base-section').show();
				}

				// очистить массив выбранных кварталов в tax-system
				checkedQuartersTaxSystem = []; 
				checkedYearsTaxSystem = []; 


				// удалить итоговые кварталы-элементы из will-send
				$('.quarters-will-send').remove();
				$('.years-will-send').remove();

				// Отмечаются/убираются галочки у дочерних чекбоксов
				$('#decl-nds').change(makeCheckedChildChecks);
				$('#decl-one').change(makeCheckedChildChecks);
				smartCheckUncheck(); 
		});

		// Передача итоговой суммы в форму Яндекс-кассы через скрытое поле
		$('#submit-go-to-pay-ip').click(function() {
		    var totalAmount = $('#final-sum-digits').text();
		    totalAmount = unSeparateThousands(totalAmount);
		    $('#total-amount').val(totalAmount);
		});

});