
    

$(function() {

    $("#searchButton").live("click", function(evt) {
        var input = $("#searchInput").val();
	$.get("http://localhost:8080/q?"+encodeURIComponent(input), function(data) {
	    var results = JSON.parse(data);
	    alert(results['favicon_url']);
	    $("#chooser").html('<img src="' + results['favicon_url'] + '" class="favicon"');
	});
    });

});