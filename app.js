var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.sendfile('default.html', { root: __dirname});
});

app.get('/api/whoami', function(req, res) {
	var ip = req.ip;
	var language = req.headers['accept-language'];
	// I'll be 100% transparent and say that I googled the regExp to find the first parenthetical group
	var software = req.headers['user-agent'].split(/[\(\)]/)[1].trim();
	res.json({'ipaddress': ip, 'language' : language, 'software' : software});
});

app.listen(3000, function(){
	console.log('All is well');
});