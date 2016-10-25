const https = require('https');

const express= require('express');
var app= express();

    app.get('/tweets',function(req,res){
      res.json(texts);
    });

    app.listen(8080,function(){
      console.log("8080 works")
    });



var autenticationData = require('./password.json');
var ourLongString = autenticationData.consumerKey +":"+ autenticationData.consumerSecret;
var incoded = new Buffer(ourLongString).toString('base64');


var texts;

var options ={
  host:'api.twitter.com',
  path:'/oauth2/token',
  method:'POST',
  dataType:'JSON',
  headers:{
    'Authorization': 'Basic ' + incoded,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8.'
  }
};
function getTheCode(){
var promise= new Promise(resolve,reject){
function(response){
    var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    var responseObj = JSON.parse(str);
    var bearerToken = responseObj['access_token'];
        console.log(bearerToken);

    var req = https.request(options, );
          req.write('grant_type=client_credentials');
          req.end();
      });
    };
  };
};
