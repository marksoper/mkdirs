
    

$(function() {

    $("#searchButton").live("click", function(evt) {
	evt.preventDefault();
	var input_data = $("#searchInput").val();
	var search_url = "/api/search";
        var enc_input = encodeURIComponent($("#searchInput").val());
	console.log("Doing a GET of: " + search_url + "?q=" + enc_input);
	$.get(search_url, {q:input_data}, function(data) {
	    console.log("data returned from: " + search_url + "\n" + JSON.stringify(data));
	    if (data['favicon_url']) {
		var new_html = '<img src="' + data['favicon_url'] + '" class="favicon" />';
		console.log("favicon img html is: " + new_html);
		$("#resultsDiv").append(new_html);
	    }
	});
	return null;
    });

});