
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
