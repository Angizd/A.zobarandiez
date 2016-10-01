
var http = require ('http');
var fs = require('fs');
var url = require('url');
var querystring = require ('querystring');
var error = require('error');

var server = http.createServer(function(request,response){
   request.on('error', function(err) {

     if(request.method === 'GET') {
       console.log("Hola Amigo!!!!");
        response.end();
     };
  

    fs.createReadStream('sample.txt', {start: 90, end: 99});
   });
});




//server.listen(8080, function(){ console.log("listening on port 8080!");});
