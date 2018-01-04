$(function () {

		$('#btn-back-will-send').click(function() {
				$('#will-send-section').hide();

				if ( $('#general').prop('checked') )	{
						$('#transactions-section').show();
				} 

				if ( $('#simple').prop('checked') )	{
						$('#tax-base-section').show();
				}
		});

});