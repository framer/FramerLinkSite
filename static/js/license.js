$(document).ready(function() {

	window.setTimeout( function(){
		path = window.location.pathname.slice(1);
		window.location = "framer-license://" + path + window.location.search;
	}, 1000 );

});
