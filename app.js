const express = require("express");
const app = express();
const http = require("http");
const jwt = require('jsonwebtoken');
const server = http.createServer(app);

server.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const io = require('socket.io')(server);

io.on('connection', socket => {
	socket.on('send_msg_from_user', (token, section, msg) => {
		jwt.verify(token, 'secret', function(err, decoded) {
	    	if (err){ resolve('Invalid Code') } else {
	    		io.emit('send_msg', decoded.name, section, msg);
	    	}
	    });
	});
});