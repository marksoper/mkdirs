
var SHORTCUT_REGEX = RegExp('<[^<>]*rel="shortcut icon"[^<>]*>',"i","m");
var HREF_REGEX = RegExp('href="([^"]*)"',"i","m");


var getUrl = function(url) {
    
    // TO DO:  validate URL

    $.get(url, function(html) {
        getFavicon(html, function(favicon_url) {
    	    $("#chooser").html('<img src="' + favicon_url + '" class="favicon"');
	});
    })
    .error(alert("url not found"));

};

var getFavicon = function(html) {
    var shortcut_link = SHORTCUT_REGEX.exec(html);
    if (shortcut_link) {
	var favicon_url = HREF_REGEX.exec(shortcut_link[0]);
	if (favicon_url) {
	    return favicon_url[1];
	}
    }
    return null;
}
    
    


};

$(function() {

	$("#urlInputButton").live("click", function(evt) {
		var url = $("#urlInput").val();
		urlFetcher(url);
	    });

});