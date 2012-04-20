var connect = require('connect');

var server = connect.createServer(
    connect.static(__dirname + '/public')
);

server.listen(8080);