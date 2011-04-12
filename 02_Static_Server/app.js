var connect = require('connect');

var server = connect.createServer(
    connect.staticProvider(__dirname + '/public')
);

server.listen(8080);