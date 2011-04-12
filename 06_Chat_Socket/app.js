var net = require('net');

var clients = [];

var server = net.createServer(function( socket ) {
	clients.push(socket);
	socket.idno = clients.length;
	socket.write("Echo server\r\n");
	
	socket.addListener("data",function(data){
	
		for ( var i=0;i<clients.length;i++){
			clients[i].write('client ' + parseInt(socket.idno) + ": " +data);
		}

	});
});



server.listen(8080);