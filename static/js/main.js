// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
function retina() {
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);


function addhttp(url) {
	if (!/^(f|ht)tps?:\/\//i.test(url)) {
		url = "http://" + url;
	}
	return url;
};

$(document).ready(function() {

	$("input").keyup(function() {
		if ($(this).val() == "") {
			$("button").removeClass("active");
		} else {
			$("button").addClass("active");
		}
    });

	$("button").click(function() {
		var value = $("input").val();
		if (value != "") {
			value = addhttp(value);
			var link = value.replace("http://", "http://framer.link/").replace("https://", "https://framer.link/");
			$("input").val(link).select();
			$(this).hide();
		}
	});

	$(".btn-close").click(function() {
		$("input").val("").blur();
		$("button").show();
		$("button").removeClass("active");
	});

});