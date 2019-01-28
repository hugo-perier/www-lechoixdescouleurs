$(document).ready(function(){

	function getRandomColor() {
	    var letters = '0123456789ABCDE'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 15)];
	    }
	    return color;
	}

	$('div#haut').css('background-color', getRandomColor);

	var i = 0;
	do {
	  i += 1;
	  $("div#haut").append("<span></span>");
	  $("div#trame").append("<span></span>");

//	  $('span').css('background-color', getRandomColor);
	} while (i < 30);


	myDiv = document.getElementById("haut")
	$('a').css('color', (myDiv.style.backgroundColor));


});