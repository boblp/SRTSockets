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

app.set("views", __dirname +"/views");
app.use(express.static(__dirname +"/public"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// mongoose.connect("mongodb://boblp:328bu5ad@ds145379.mlab.com:45379/bobtest");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));


io.on('connection', socket => {
	socket.on('prueba_socketss', (var1, var2) => {
		io.emit('respuesta_server', "holis");
	});
});
//websockets end

app.get("/", function(request,response){
	var datos = {
		nombre: "Boob"
	}

	response.render("pantalla", datos);
});

app.post("/ajax_test", function(request, response){
	var nombre = "ianik";

	response.send(nombre);
});