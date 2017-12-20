
	// Делает кнопку неактивной
	function disableElement (elementId, className) {
			$(elementId).attr('disabled', 'disabled');
			$(elementId).toggleClass(className);
	}

	
	// Делает кнопку активной
	function enableElement (elementId, className) {
			$(elementId).removeAttr('disabled');
			$(elementId).toggleClass(className);
	}


	// Отмечен ли хотя бы 1 чекбокс из числа чекбоксов 4-го квартала
	function noCheckedFourQuart (checkbox, wrap) {
			var cntChecked = 0;

			$(wrap).each(function(index, wrap) {	
					if ( $(wrap).data('is-four') == 'yes' && $(checkbox).prop('checked') ) {		
								cntChecked++;	
								return false; 
					}						  
			});	

			if ( cntChecked === 0 ) {
				 return true;
			}
	}


	// Отмечен ли хотя бы 1 чекбокс из чекбоксов-кварталов
	function noCheckedQuart (checkbox) {
			var cntChecked = 0;

			$(checkbox).each(function(index, checkbox) {			
					if ( $(checkbox).prop('checked') ) { 
						    cntChecked++;
						    return false; 
				  }
			});

			if (cntChecked === 0) {
					return true; 
			}
	}
