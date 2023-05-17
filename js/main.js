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


	$('.product_block_left_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product_block_left_nav'
	});

	$('.product_block_left_nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product_block_left_for',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true
	});

	$('.strange_block_wrap_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.strange_block_wrap_prev'),
        nextArrow: $('.strange_block_wrap_next')
	});

	$(".product_block_right_nav_item").click(function() {
		var id = $(this).attr("data-target");
		$(".product_block_right_nav_item").removeClass("active");
		$(this).addClass("active");
		$(".product_block_right_content_item").removeClass("active");
		$(`#${id}`).addClass("active");
	});


});