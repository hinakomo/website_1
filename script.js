$(document).ready(function() {
	 $('.drawer').drawer();
});

$(function(){
	$('a[href^=#]').click(function() {
	var speed = 500;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - 100;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
});
});
