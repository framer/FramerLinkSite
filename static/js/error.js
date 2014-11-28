$(document).ready(function() {

	window.setTimeout( function(){
		path = window.location.pathname.slice(1);
		window.location = "framer://" + path;
	}, 1000 );

});