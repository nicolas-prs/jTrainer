/**
 * TODO javascript functions for home page 
 */

!function () {
	var jqxhr = $.getJSON( "jtrainer", function( data ) {
		$('#message').text(data['mod']);
	})
	.fail(function() {
		$('#message').text("Error loading message");
	})
	.always(function() {
		console.log( "Ok !" );
	});
}();