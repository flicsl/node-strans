var method = Bus.prototype;
/*
Ex:
{
	"CodigoVeiculo": 4733,
	"Lat": "-5.08364000",
	"Long": "-42.78894000",
	"Hora": "10:19"
}
*/
function Bus(id) {
	//make requests

	//then set location
	this._latitude = 1;
	this._longitude = 1;
}

method.getLocation = function() {
	var location = {
		"latitude" : this._latitude,
		"longitude": this._longitude
	}
    return location;
};

module.exports = Bus;