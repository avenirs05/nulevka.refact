$(function () {

		// Кнопка "Назад"
		$('#btn-back-will-send').click(function() {
				$('#decl-nds-wrap').hide();
				$('#decl-profit-wrap').hide();
				$('#decl-one-wrap').hide();
				$('#decl-usn-wrap').hide();
				$('#count-ins-wrap').hide();
				$('#count-fss-wrap').hide();
				$('#szv-m-wrap').hide();
				$('#buh-rep-ifns-wrap').hide();
				$('#buh-rep-stat-wrap').hide();
				$('#workers-cnt-wrap').hide();				
				$('#will-send-section').hide();

				if ( $('#one-face-yes').prop('checked')  ) {
							$('#one-face-section').show();
				} else $('#szv-section').show();

				// очистить массив выбранных кварталов в tax-system
				checkedQuartersTaxSystem = []; 
				checkedYearsTaxSystem = []; 

				// удалить итоговые кварталы-элементы из will-send
				$('.quarters-will-send').remove();
				$('.years-will-send').remove();
				$('.szv-wrap-final').remove();
		});


		// Отмечаются/убираются галочки у дочерних чекбоксов
		$('#decl-nds').change(makeCheckedChildChecks);
		$('#decl-profit').change(makeCheckedChildChecks);
		$('#decl-one').change(makeCheckedChildChecks);
		$('#count-ins').change(makeCheckedChildChecks);
		$('#count-fss').change(makeCheckedChildChecks);
		$('#szv-m').change(makeCheckedChildChecks);
		smartCheckUncheck();
		

		// Инпут в сзв в will send - если отмечен хотя бы один, то заголовок сзв тоже становится отмеченным
		$(document).on('change', '.month input', function() {
				if ( $(this).prop('checked') ) {
							 $('#szv-m').prop('checked', true);
				}	
		});

});