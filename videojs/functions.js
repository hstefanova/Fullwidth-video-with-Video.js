$(function() {
	
	$('.btn').on('click', function() {
	var player = videojs('my-player');
		player.play();
		player.requestFullscreen();
	});
})