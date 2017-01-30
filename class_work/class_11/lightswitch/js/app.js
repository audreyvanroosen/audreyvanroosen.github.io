$('document').ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function() {

		if (lights == 'on') {
			$('#lightswitch').addClass('switch-off');
			$('#lightswitch').removeClass('switch-on');
			$('body').addClass('lights-off');
			$('button').html('OFF');
			lights = 'off';
		} else {
			$('#lightswitch').removeClass('switch-off');
			$('#lightswitch').addClass('switch-on');
			$('body').removeClass('lights-off');
			$('button').html('ON');
			lights = 'on';
		}
	})

})
