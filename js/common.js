jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".index-page .top-search .window" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.hide();
		}
	});
});


$(function(){
	$('.popup-filter .window .fields .buttons button:nth-child(1)').click(function() {
		$('.popup-filter .window .fields .jq-selectbox .jq-selectbox__dropdown ul li:nth-child(1)').click();
		$('.popup-filter .window .fields input[type=text]').val('');
	});
	jQuery('.popup-filter .window .fields .location-links a').click(function() {
	    var txt = jQuery(this).text();
	    jQuery('.popup-filter .window .fields input[type="text"]').val(txt);
	    jQuery('.popup-filter .window .fields input[type="text"]').trigger('input');
	});
	$('.cookies-top-line button').click(function() {
		$('.cookies-top-line').fadeOut();
	});
	$('.social-popup .window .button a').click(function() {
		$('.social-popup').fadeOut();
		$('body').removeClass('hid');
	});
	$('.social-block .item').click(function() {
		$('.social-popup').fadeIn();
		$('body').addClass('hid');
	});
	$('.social-block .bottom-button button').click(function() {
		$(this).parent().hide();
		$('.social-block .item').show();
	});
	$('.index-page .item .info .text .show-link').click(function() {
		$('.index-page .item .info .text').toggleClass('opened');
	});
	$('.index-page .filter-link button').click(function() {
		$('.popup-filter').fadeIn();
		$('body').addClass('hid');
	});
	$('.popup-filter .window .close, .popup-filter .window .fields .buttons button:nth-child(2)').click(function() {
		$('.popup-filter').fadeOut();
		$('body').removeClass('hid');
	});
	$('.header nav .mob-name .close').click(function() {
		$('.header nav').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.header nav').toggleClass('opened');
	});
	$('.index-page .item .info .dots-link').click(function() {
		$(this).next('.menu').toggle();
	});
	$('.index-page .item .photos .preview-text .text button').click(function() {
		$(this).parent().parent().fadeOut();
	});
	$('.index-page .top-search input[type=text]').click(function() {
		$('.index-page .top-search .window').show();
	});
	$('.index-page .item .photos .list').slick({
		dots: true
	});
	var slider = $('.index-page .item .photos .list');
	$('.sl-count__total2').text( slider.slick("getSlick").slideCount);
	$(".index-page .item .photos .list").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current2").text(currentSlide + 1);
	});
	$('.index-page .item .photos .list2').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	var slider = $('.index-page .item .photos .list2');
	$('.sl-count__total').text( slider.slick("getSlick").slideCount);
	$(".index-page .item .photos .list2").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current").text(currentSlide + 1);
	});
});