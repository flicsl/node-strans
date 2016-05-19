var method = Line.prototype;
/*
Ex:
[{
   "CodigoLinha": "0402",
   "Denomicao": "VILA BANDEIRANTE-PLANALTO ININGA FREI SERAFIM",
   "Origem": "VILA BANDEIRANTE",
   "Retorno": "PCA. BANDEIRA",
   "Circular": true
}]
*/

function Line(id) {
	//make requests

	//then set location
	this._latitude = 1;
	this._longitude = 1;
}
method.getStops = function() {
	//GET /paradasLinha?busca=idLine
	//return all stops from this line
	return null;
};
method.getBus = function() {
	//GET /paradasLinha?busca=idLine
	//return all stops from this line
	return null;
};

module.exports = Line;