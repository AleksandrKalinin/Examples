$(document).ready(function() {
	/*
	function heightDetect() {
		if ($(document).width()>768) $(".main_head").addClass("main_enabled");
		$(".main_head.main_enabled").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	*/

	function heightDetect() {
		
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
 	
	
	function heightDetect2() {
		if ($(document).width()>768) $(".auto_section").addClass("auto_enabled");
		$(".auto_section.auto_enabled").css("height", $(window).height());
	};
	heightDetect2();
	$(window).resize(function() {
		heightDetect2();
	});

	

	

	
	
});