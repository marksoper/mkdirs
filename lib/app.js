
    

$(function() {

    $("#searchButton").live("click", function(evt) {
	evt.preventDefault();
        var input = encodeURIComponent($("#searchInput").val());
	$.get("http://localhost:8080/api/search?q=" + input, function(data) {
	    var new_html = '<img src="' + data['favicon_url'] + '" class="favicon" />';
	    alert(new_html);
	    $("#resultsDiv").append(new_html);
	});
	return null;
    });

});