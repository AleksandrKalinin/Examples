$(document).ready(function() {

	



 	function heightDetect() {
		if ($(document).width()>1024) $(".main_head").addClass("main_enabled");
		$(".main_head.main_enabled").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
 	
 	function heightDetectExp() {
		if ($(document).width()>1024) $(".exp_class").addClass("exp_enabled");
		$(".exp_class.exp_enabled").css("min-height", $(window).height());
	};
	heightDetectExp();
	$(window).resize(function() {
		heightDetectExp();
	});
 	
	
	function heightDetect2() {
		if ($(document).width()>1024) $(".auto_section").addClass("auto_enabled");
		$(".auto_section.auto_enabled").css("height", $(window).height());
	};
	heightDetect2();
	$(window).resize(function() {
		heightDetect2();
	});


	function heightDetect3() {
		if ($(document).width()>1024) $(".head_section").addClass("head_enabled");
		$(".head_section.head_enabled").css("height", $(window).height());
	};
	heightDetect3();
	$(window).resize(function() {
		heightDetect3();
	});



 	if ($(document).width()>1024) $("#fullpage").addClass("fp-enabled");
	$('#fullpage.fp-enabled').fullpage({
		scrollBar: true,
		slidesNavigation: true
	});



	$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	}); 

	
	$(".top_text p").animated("fadeInDown", "fadeOutUp");
	$(".top_text h1").animated("fadeInUp", "fadeOutDown ");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".section_content").animated("fadeIn", "fadeOut");
	
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".section_header_black").animated("fadeInUp", "fadeOutDown");

	$(".icon_item_left_small").animated("fadeInLeft", "fadeOutLeft");

	$(".icon_text_left").animated("fadeInLeft", "fadeOutLeft");

	$(".icon_text_right").animated("fadeInRight", "fadeOutRight");

	$(".icon_descr_left").animated("fadeInRight", "fadeOutRight")

	$(".icon_item_center_3").animated("zoomIn", "zoomOut");

	$(".zoom_class").animated("zoomIn", "zoomOut");

	$(".icon_item_center_3").click(function(){
		$(".icon_item_center_3").animated("fadeOutLeft");
	});	
	

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	
	
	$(".left .resume_item").animated("fadeIn", "fadeOut");
	$(".right .resume_item").animated("fadeIn", "fadeOut");

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});



	//E-mail Ajax Send
	$("#ex").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Сообщение отправлено!");
			$("#ex").trigger("reset");
		});
		return false;
	});

	

	$(".top_mnu ul a").mPageScroll2id();

	$("input, select, textarea").jqBootstrapValidation();


/*	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	*/
});