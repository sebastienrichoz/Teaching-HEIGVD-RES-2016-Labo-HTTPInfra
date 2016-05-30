var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (request, response){
	response.send(generateLocations());
});

app.listen(3000, function() {
	console.log("Accepting HTTP requests on port 3000.");
});

function generateLocations() {
	var numberOfLoc = chance.integer({min:1, max:5});

	var locations = [];

	for (var i = 0; i < numberOfLoc; i++) {
		locations.push({
			street: chance.street(),
			number: chance.integer( {min:2, max:70} ),
			city: chance.city(),
			zip: chance.zip(),
			country: chance.country({ full: true })
		});
	}

	return locations;
}