$(function () {

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
		});

});