
$(document).ready(function(){

	$('#slider').slick({
	    dots: false,
	    infinite: true,
	  	speed: 300,
	  	slidesToShow: 2,
	  	arrows: true
	});

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

});