var express = require('express');

var app = express.createServer();

app.configure( function () {
	app.use(app.router);
})

app.get('/', function(req, res){
    res.send('hi there');
});

app.get('/bye', function(req, res){
    res.send('bye now');
});

app.listen(8080);