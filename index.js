var request = require("requestretry");
var Bus = require("models/bus.js");

module.exports = {
	getAllLines : function() {
		//GET /linhas	
	},
	getLines : function(search) {
		//GET /linhas?busca=search
	},
	getAllStops :function() {
		//GET /paradas
	},
	getStops: function(search){
		//GET /paradas?busca=search
	},
	getAllBuses : function(){
		//GET /veiculos
	},
	getBus : function(busId) {
		//GET /veiculosLinha?busca=idLine
	}
}