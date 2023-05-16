$(document).ready(function () {
    "use strict";

	$(".faq_block_left_item").click(function() {
		$(this).find(".faq_block_left_item_body").slideToggle();
	});


	$(".header_block_btn").click(function() {
		$(this).toggleClass("active");
		$(".header_drop").slideToggle();
		$(".main").toggleClass("open");
		$(".about_main").toggleClass("open");
		$(".properties_single").toggleClass("open");
	});

});