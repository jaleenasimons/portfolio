// background


$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 595) {
		$("body").addClass("changeColor");
	}
	if (scroll >= 1425) {
		$("body").addClass("changeColor1");
	}
	if (scroll >= 2255) {
		$("body").addClass("changeColor2");
	}
	if (scroll >= 3085) {
		$("body").addClass("changeColor3");
	}
	if (scroll >= 3915) {
		$("body").addClass("changeColor4");
	}
	if (scroll >= 4745) {
		$("body").addClass("changeColor5");
	}
	if (scroll >= 5575) {
		$("body").addClass("changeColor6");
	}
	if (scroll >= 6405) {
		$("body").addClass("changeColor7");
	}
	if (scroll <= 595) {
		$("body").removeClass("changeColor");
	}
	if (scroll <= 1425) {
		$("body").removeClass("changeColor1");
	}
	if (scroll <= 2255) {
		$("body").removeClass("changeColor2");
	}
	if (scroll <= 3085) {
		$("body").removeClass("changeColor3");
	}
	if (scroll <= 3915) {
		$("body").removeClass("changeColor4");
	}
	if (scroll <= 4745) {
		$("body").removeClass("changeColor5");
	}
	if (scroll <= 5575) {
		$("body").removeClass("changeColor6");
	}
	if (scroll <= 6405) {
		$("body").removeClass("changeColor7");
	}

});


//bron voor jquery 
//https://codepen.io/Paulie-D/pen/rjJcB


// Gebruik van AOS animaties voor tekst
AOS.init();
