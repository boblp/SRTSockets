var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var bodyParser = require('body-parser');
var ejs = require("ejs");
var mongoose = require('mongoose');

server.listen(process.env.PORT || 8080, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', socket => {
	socket.on('prueba_socketss', (var1, var2) => {
		io.emit('respuesta_server', "holis");
	});
});