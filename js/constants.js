
/*-----------------------------------------------------------------*/
/*	Constants
/*-----------------------------------------------------------------*/

const CURRENT_ITEM_CLASS = "current", 
	OPEN_ITEM_CLASS = "open",
	CLOSE_ITEM_CLASS = "close",
	RANDOM_ACCESS_CLASS = "random-access",
	SCROLL_TO_TOP_BUTTON_REVEAL_CLASS = "reveal",
	SCROLL_TO_TOP_BUTTON_HIDDEN_CLASS = "hidden",
	SCROLL_TO_TOP_BUTTON_SCROLL_DISTANCE_TO_REVEAL = $( window ).height() / 2,
	SCROLL_TO_TOP_BUTTON_TIMEOUT_TO_HIDE = 1000;


/*-----------------------------------------------------------------*/
/*	Main slider
/*-----------------------------------------------------------------*/

const sliderSlideOptions = {
	adaptiveHeight: true,
	fade: true,
//	vertical: true, 
	arrows: false,
//	dots: true,
//	appendDots: $( "#slider .controls" ),
//	dotsClass: "random-access",
	speed: 500, 
	touchThreshold: 20,
//	autoplay: true,
	autoplaySpeed: 6000,
	infinite: true
};


/*-----------------------------------------------------------------*/
/*	About
/*-----------------------------------------------------------------*/

const aboutSlideOptions = {
	adaptiveHeight: true,
	appendArrows: false,
	swipe: false,
	speed: 200
};


/*-----------------------------------------------------------------*/
/*	Services
/*-----------------------------------------------------------------*/

const servicesContentOptions = {
	initialSlide: 0,
	swipe: false,
	adaptiveHeight: true,
	arrows: false,
	speed: 200,
	autoplay: false
};


/*-----------------------------------------------------------------*/
/*	Contact info
/*-----------------------------------------------------------------*/

const contactInfoSlideOptions = {
	arrows: false,
//	dots: true,
//	appendDots: $( "#contact-info .controls" ),
	dotsClass: "random-access",
	autoplay: true,
	autoplaySpeed: 6000,
	pauseOnFocus: true,
	pauseOnHover: true,
	pauseOnDotsHover: true
};














