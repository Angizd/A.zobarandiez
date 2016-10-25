
var http = require('http');

var server = http.createServer()
  server.on('request', function(request, response){
    console.log("hello")
  })

var method = request.method;
var url = request.url;
var headers = request.headers;
var userAgent = headers['user-agent'];

var body = '';
req.on('data', function(chunk) {
    body += chunk;
}).on('end', function() {
    console.log(body);
});


response.setHeader('Content-Type', 'text/html');
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('X-Foo', 'bar');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('ok');



  
    request.on('error', function(err) {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on('error', function(err) {
      console.error(err);
    });
    if (request.method === 'GET' && request.url === '/echo') {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  }).listen(8080);
