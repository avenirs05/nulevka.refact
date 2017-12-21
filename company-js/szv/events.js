$(function () {

	// Появление кнопки "Дальше". Если СЗВ - ответ: нет
	$("#szv-quest-no").change(function() {
	    $('#btn-next-szv').show();	     
	});
	

	// Если СЗВ - ответ: да
	$("#szv-quest-yes").change(function() {
			var monthsAndQuartals = {
				firstQuart: { 
						jan: 'Январь', 
						feb: 'Февраль', 
						mar: 'Март' 
				},
				secQuart: { 
						apr: 'Апрель', 
						may: 'Май', 
						jun: 'Июнь' 
				},
				thirdQuart: { 
						jul: 'Июль', 
						aug: 'Август', 
						sep: 'Сентябрь' 
				},
				fourthQuart: { 
						oct: 'Октябрь', 
						nov: 'Ноябрь', 
						dec: 'Декабрь' 
				}
			}

			$('#choice-period-text').show();
				
	    $(".div-quarters input:checkbox").each(function() {
			    if ( $(this).prop('checked') ) {
			    			var labelText = $(this).parent().text();
			    			var quart = $(this).attr('id')[4];
			    			var year = labelText.match( /20\d\d/g );
			    			year = year[0]; 	    			


			    			$('#label-szv-quest-no').after(
			    				'<div>' + 
			    					'<p>' + labelText +
			    					'</p>' +

			    				'</div>'
			    			);
			    }
	    });
	});

	
	// Кнопка "Назад"
	$("#btn-back-szv").click(function() {		
			$('#szv-section').hide();
	    $('#one-face-section').show();					 
	});

	
	// Кнопка Дальше
	$("#btn-next-szv").click(function() {		
			$('#szv-section').hide();
	    $('#will-send-section').show();					 
	});

});