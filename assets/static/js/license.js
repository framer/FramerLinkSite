$(document).ready(function() {

	window.setTimeout( function(){
		path = window.location.hash.slice(1);
		window.location = "framer-license://" + path;
	}, 1000 );

});
