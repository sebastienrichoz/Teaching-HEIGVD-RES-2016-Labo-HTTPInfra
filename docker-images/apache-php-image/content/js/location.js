$( function(){ 

	console.log("Loading location");

	function loadLocation() {
		$.getJSON( "/api/locations/", function(locations) {

			console.log(locations);
			var message = locations[0].street + " " + locations[0].number + "<br>" + 
				      locations[0].zip + " " + locations[0].city + "<br>" +
			      	locations[0].country;
			$( "#location" ).html(message);

		});
	};
	
	loadLocation();
	setInterval(loadLocation, 2500);
});
