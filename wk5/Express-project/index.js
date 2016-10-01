var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var admin = express()

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
    extended: false
}))
app.get('/hello/world', function(req, res) {
    res.send('<!doctype html><title>Hello World!</title><p>Hello World!</html>');
});

app.get('/cookie', function(req, res) {
  res.send('<!DOCTYPE html><html><body><form action="/cookie" method="post">'+
  '<input type="checkbox" name="choc"> Accept the cookies<br>'+
  '<input type="submit" value="Submit">'+
  '</form></body></html>')
});

app.post('/cookie',function(req, res){
  var check =req.body.choc;
  if (check){
    res.cookie('galleta','choco')
    res.redirect('/hello/world');

}else{
    res.send('<!DOCTYPE html><body><p>You have to accept the cookies!</p></body>');
  }
});



app.use(express.static(__dirname + '/portfolio'));

app.listen(2000, function() {console.log("listening on port 2000!");});
