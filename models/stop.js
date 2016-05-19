var method = Stop.prototype;
/*
Ex:
[{
	"CodigoParada": 19,
	"Denomicao": "Col. Agrícola",
	"Endereco": "Rua Dirce Oliveira, 3397 - Ininga, Teresina - PI, 64048-550, Brasil",
	"Lat": "-5.047272",
	"Long": "-42.782855"
}]
*/
function Stop(id) {
	//make requests

	//then set location
	this._latitude = 1;
	this._longitude = 1;
}

method.getLines = function() {
    return null;
};

module.exports = Stop;