function initMap() {

	let mapDiv = document.getElementById('map'),
		center = {
			lat: -7.9307512,
			lng: 112.6355576
		};
	
	let map = new google.maps.Map(mapDiv, {
		center: center,
		zoom: 16
	});
	let marker = new google.maps.Marker({
		position : center,
		map      : map,
		icon     : "./img/pin.png"
	});

}

$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	});

	$('.slidert').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  responsive: [
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 523,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

	  // autoplay: true,
	  // autoplaySpeed: 2000
	  // variableWidth: true
	});
	// $('.slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 1,
 //        slidesToScroll: 1,
	// 	dots: true,
	// 	fade: true,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 1000
	// });
	// $('.ln__slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 4000
	// 	// fade: true
	// });
});

(function(){
	'use strict';

	let toggler = document.querySelector('.toggler');
	toggler.addEventListener('click', function(e){
		e.preventDefault();
		let nav = document.querySelector('.menu__items');
		nav.classList.toggle('opened');
	})

	let links = document.querySelectorAll('.menu__link');
	for (var i = 0; i < links.length; i++) {
		let link = links[i];
		link.addEventListener('click', function() {
			setTimeout(function(){
				let nav = document.querySelector('.menu__items');
				nav.classList.remove('opened');
			}, 300);
		})
	}


})();