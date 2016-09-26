process.argv;


const url = require('url');
const querystring = require ('querystring');

var excercice = url.parse(process.argv[2]);
var query = querystring.parse(excercice.query);
console.log(excercice);

console.log("The protocole is" + excercice.protocol);
console.log("The host is" + excercice.host);
console.log("The hostname is " + excercice.hostname);
console.log("The port is" + excercice.port);
console.log("The path is"+ excercice.path);
console.log("The pathname is "+ excercice.pathname);
console.log("The query is" + excercice.query);
console.log("The value of the parameter a is " + query.a);
console.log("The value of the parameter b is " + query.b);
