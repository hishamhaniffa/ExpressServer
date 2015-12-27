var express = require('express');
var app  = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware');


// app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.use(express.static(path.join(__dirname,'public')));

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
})

app.listen(PORT, function(){
	console.log("Server started in port: " + PORT);
});