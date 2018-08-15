/* Portfolio Website Script JS */

$(document).ready(function(){

	$(".resume").hover(
		function(){
			$(this).attr("src", "pictures/download.jpg");
		}, function() {
			$(this).attr("src", "pictures/resume.jpg");
		}
	);
	
	$(".thumbnail_1").hover(
		function(){
			$(this).attr("src", "thumbnails/connotative-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/connotative-original.png");
		}
	);
	
	$(".thumbnail_2").hover(
		function(){
			$(this).attr("src", "thumbnails/sentences-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/sentences-original.png");
		}
	);
	
	$(".thumbnail_3").hover(
		function(){
			$(this).attr("src", "thumbnails/robocop-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/robocop-original.png");
		}
	);
	
	$(".thumbnail_4").hover(
		function(){
			$(this).attr("src", "thumbnails/dishevelment-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/dishevelment-original.png");
		}
	);
	
	$(".thumbnail_5").hover(
		function(){
			$(this).attr("src", "thumbnails/denotative-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/denotative-original.png");
		}
	);
	
	$(".thumbnail_6").hover(
		function(){
			$(this).attr("src", "thumbnails/web-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/web-original.png");
		}
	);
	
	$(".thumbnail_7").hover(
		function(){
			$(this).attr("src", "thumbnails/flag-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/flag-original.png");
		}
	);
	
	$(".thumbnail_8").hover(
		function(){
			$(this).attr("src", "thumbnails/anti-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/anti-original.png");
		}
	);
	
	$(".thumbnail_9").hover(
		function(){
			$(this).attr("src", "thumbnails/afterdark-hover.png");
		}, function() {
			$(this).attr("src", "thumbnails/afterdark-original.png");
		}
	);
	
	
	
	

	$('.myGallery a').simpleLightbox();


	
	
})