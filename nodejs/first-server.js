const http = require('http'); 

const server = http.createServer();

server.on('request', (req, res) => {

	//res.statusCode = 200;
	//res.setHeader('Content-Type', 'text/html');

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1> Ejemplo - HTML desde el servidor </h1>");
	res.end("<p> Hola, Mundo! </p>");
})


server.on('listening', function() {
	console.log('Server running!');
})

server.listen(3000);
