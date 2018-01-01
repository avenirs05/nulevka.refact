$(function () {

		$('#btn-back-will-send').click(function() {
				$('#will-send-section').hide();

				if ( $('#one-face-yes').prop('checked')  ) {
						$('#one-face-section').show();
				} else $('#szv-section').show();
		});

});