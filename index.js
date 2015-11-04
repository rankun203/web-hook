#!/usr/bin/env node

var http = require('http');

http.createServer(function(req, res) {
	
	console.log('REQ', new Date());
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello, World\n');
}).listen(1338, '0.0.0.0');

console.log('Server running at http://0.0.0.0:1338');
