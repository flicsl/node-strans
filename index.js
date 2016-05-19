var request = require("request-promise");
var moment = require("moment");
var Bus = require("./models/bus.js");
var Line = require("./models/line.js");
var Stop = require("./models/stop.js");

var authToken;

var options = function(route){
	return {
		method: 'GET',
		uri: baseUrl+route,
		headers: {
			"Date": moment().format("ddd, DD MMM YYYY HH:mm:ss ") + "GMT",
			"X-Api-Key": apiKey,
			"X-Auth-Token" : authToken
		}
	};

};

var authenticate = function(callback){
	if(!authToken){
		request(signInOptions)
		.then(function(body){
			authToken = body.token;
			return callback();
		})
		.catch(function(err){
			console.log(err);
		});
	}
}

module.exports = {
	//GET /linhas	
	getAllLines : function() {
		authenticate(function(){
			request(options('/linhas'))
			.then(function(body){
				console.log(body);
			});
		});
	},
	//GET /linhas?busca=search
	getLines : function(search) {
		authenticate(function(){
			request(options('/linhas?busca='+search))
			.then(function(body){
				console.log(body);
			});
		});
	},
	//GET /paradas
	getAllStops :function() {
		authenticate(function(){
			request(options('/paradas'))
			.then(function(body){
				console.log(body);
			});
		});
	},
	//GET /paradas?busca=search
	getStops: function(search){
		authenticate(function(){
			request(options('/linhas?busca='+search))
			.then(function(body){
				console.log(body);
			});
		});
	},
	//GET /veiculos
	getAllBuses : function(){
		authenticate(function(){
			request(options('/veiculos'))
			.then(function(body){
				console.log(body);
			});
		});
	},
	Bus : Bus,
	Stop : Stop,
	Line : Line
}