const https = require('https');
const express= require('express');
var app= express();


//
    app.get('/tweets',function(req,res){
      res.json(texts);
    });

    app.listen(8080,function(){
      console.log("8080 works")
    });


var autenticationData = require('./password.json');
var ourLongString = autenticationData.consumerKey +":"+ autenticationData.consumerSecret;
var incoded = new Buffer(ourLongString).toString('base64');
      console.log(incoded);


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


callback = function(response) {
    var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    var responseObj = JSON.parse(str);
    var bearerToken = responseObj['access_token'];
        console.log(bearerToken);

        var options2 ={
              host:'api.twitter.com',
              path:"/1.1/statuses/user_timeline.json?count=100&screen_name=twitterapi",
              method:'GET',
              dataType:'JSON',
              headers:{
                'Authorization': 'Bearer ' + bearerToken
              }
            };

    callback = function(response) {
        var tweets = '';
      response.on('data', function (chunk) {
        tweets += chunk;
      });
      response.on('end', function () {
        var responsetweet = JSON.parse(tweets);
            console.log(responsetweet);
         texts =responsetweet.filter(function(item){
          if(item.entities.urls.length ===1){
            return item;
            console.log(item);
          }
        })
        texts=texts.map(function(item){
          return{
            text: item.text,
            href: item.entities.urls[0].url
          }
        });
          console.log(texts);
      });
    };

    var req = https.request(options2, callback);
      req.write('grant_type=client_credentials');
      req.end();
  });
};

var req = https.request(options, callback);
  req.write('grant_type=client_credentials');
  req.end()

app.use(express.static('./'));
