var cluster = require('cluster');
var os = require('os');
 //os = operative system

 for (var i = 0, l = os.cpus().length; i < l; i++) {
    cluster.fork();
}


var fs= require('fs');
var handlebars = require('handlebars');

module.exports ={
  
}
