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
// TODO: GET /paradasLinha?busca=idLine
method.getStops = function() {
	//return all stops from this line
	return null;
};
// TODO: GET /veiculosLinha?busca=idLine
method.getBuses = function() {
	//return all buses from this line
	return null;
};

module.exports = Line;