var request = require("request-promise");
var moment = require("moment");
var Promise = require("promise");
var Bus = require("./models/bus.js");
var Line = require("./models/line.js");
var Stop = require("./models/stop.js");


var authToken;
var baseUrl;
var apiKey;
var email;
var password;

function authenticate(callback){
	if(!authToken){
		request({
			method: 'POST',
			uri: baseUrl+"/signin",
			headers: {
				"Date": moment().format("ddd, DD MMM YYYY HH:mm:ss ") + "GMT",
				"X-Api-Key": apiKey
			},
			json: {
				"email": email,
				"password": password
			}
		})
		.then(function(body){
			authToken = body.token;
			return callback();
		})
		.catch(function(err){
			console.log(err);
		});
	}
}
function options(route){
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
	getAllBuses: getAllBuses,
	setCredentials: function(credentials){
		baseUrl = credentials.baseUrl;
		apiKey = credentials.apiKey;
		email = credentials.email;
		password = credentials.password;
	},
	getCredentials: function(){
		return {
			baseUrl:baseUrl,
			apiKey:apiKey,
			email:email,
			password:password
		}
	},
	Bus : Bus,
	Stop : Stop,
	Line : Line
}
var getAllBuses = new Promise(function(resolve, reject){
	authenticate(function(){
		request(options('/veiculos'))
		.then(function(body){
			var arr = [];
			var lines = JSON.parse(body);
			for (var i = 0; i < lines.length; i++) {
				for (var j = lines[i].Linha.Veiculos.length - 1; j >= 0; j--) {
					arr.push(lines[i].Linha.Veiculos[j]);
				}
			}
			resolve(arr)
		});
	});
});