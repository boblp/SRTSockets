var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);

server.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const io = require('socket.io')(server);

io.on('connection', socket => {
	io.emit('respuesta_server', "holis");
	socket.on('prueba_socketss', (var1, var2) => {
		io.emit('respuesta_server', "holis");
	});
});