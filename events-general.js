$(function () {

	$('[data-toggle="tooltip"]').tooltip();

	$('#btn-free-consult').click(function() {
		$('#modal-free-consult').modal('show');
	});

	$('#btn-free-consult-mob').click(function() {
		$('#modal-free-consult-mob').modal('show');
	});

	$('#a-free-consult-footer').click(function() {
		$('#modal-free-consult').modal('show');
	});

	$('#btn-get-bonus').click(function() {
		$('#modal-for-accountants').modal('show');
	});

	$('#btn-get-bonus-mob').click(function() {
		$('#modal-for-accountants-mob').modal('show');
	});	

});