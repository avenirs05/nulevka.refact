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
		});

});