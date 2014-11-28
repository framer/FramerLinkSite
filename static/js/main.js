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

function checkLink(url) {
	if (!/^(f|ht)tps?:\/\//i.test(url)) {
		url = "http://" + url;
	}
	return url;
};

function isValid(url) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // IPv4 Address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Port and Path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // Query string
	'(\\#[-a-z\\d_]*)?$','i'); // Fragment Locator

	if (!pattern.test(url)) {
		$(".submit-error").html("Not a valid URL").addClass("show");
		return false;
	} else {
		return true;
	}
};

function isZip(url) {
	var pattern = new RegExp('[^\\/]{3,}\.(zip)$'); // End with .zip
	if (!pattern.test(url)) {
		$(".submit-error").html("Not a .zip file").addClass("show");
		return false;
	} else {
		return true;
	}
};

$(document).ready(function() {

	$("input").keyup(function(event) {
		if ($(this).val() == "") {
			$("button").removeClass("active");
		} else {
			$("button").addClass("active");
		}

		/* Bind enter to button click */
		if(event.keyCode == 13) {
			$("button").click();
		}
    });

	$("button").click(function() {
		var value = $("input").val();

		if (isValid(value) && isZip(value)) {
			$(".submit-error").removeClass("show");
			$(".success-message").html("CMD+C to Copy").addClass("show");

			value = checkLink(value);
			var link = value.replace("http://", "http://framer.link/").replace("https://", "https://framer.link/");
			$("input").val(link).select();
			$(this).hide();
		}
	});

	$(".btn-close").click(function() {
		$("input").val("").blur();
		$("button").show();
		$("button").removeClass("active");
		$(".success-message").removeClass("show");
	});

});