This is the home of the slides and code for my presentation for 360|Flex 2011 in Denver.

The presentation is titled "Put some Javascript in your backend"

=====

#Examples

##01\_First\_Look
The first look example is just a simple http server which returns a hello world string with a 200 response


##02\_Static\_Server
The static server is an example of creating a node.js server which serves files from the specified folder. This is a great way to server your bin-debug to test your flash applications with a proper security context.

##03\_ExpressRouting
Express adds the ability to start using routes. This is a simple example to make use of those.

##04\_Express\_MVC
Building on the routing example 03, this example is taken straight from the express examples. But shows a good way to create mvc applications in node.js which allows you to return mulitple formats and interact with http requests.

##05\_Echo\_Socket
This the basic node socket example.  when running this example you can telnet to port 8080 and it will echo anything you type.  Also using the FlexSocketDemo code above you can use flash to communicate with the echo server.

##06\_Chat\_Socket
Building on 05, we adapt the server to allow for a chat client. When a client connects we push that into an array. After adding an event listener for 'data' when we receive a message message we loop through the clients and send them the message prepended with the client number who sent it.  This works by telnetting to localhost:8080 and also by using the FlexSocketDemo code.

##07\_Socket.IO\_Chat



##08 _Bonus_ Socket.IO - Real Time Stats