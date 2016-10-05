var fs = require ('fs');
var express = require('express');
var app = express();
var hb = require('express-handlebars');


app.use(express.static(__dirname + '/public'));



app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('hello', {
    });
});

var portfolio;

app.get('/hello', function(req, res) {
  fs.readdir(__dirname + '/portfolio',function(err,data){
    portfolio = data.slice(0);
    res.render('hello', {
      portfolio:portfolio});
  });
});

var portfolioName;
app.get('/portfolio/:portfolioName', function(request, res) {

  fs.readdir(__dirname + '/portfolio',function(err,data){
    portfolio = data.slice(0);
    var portfolioName= request.params.portfolioName;
    res.render(portfolioName, {
      portfolio:portfolio});
  });
});



/*
function noErrors(){
  var input= __dirname + '/portfolio';
  var portfolioName;
  if (input === portfolioName) {
    console.log("hello");
    return portfolioName ;
  } else {
    throw "Invalid";
  }
};

try {
  portfolioName = noErrors(); //
}
catch (e) {
  portfolioName= "unknown";
  console.log(e);
}
*/

app.listen(8080, function() {console.log("listening on port 8080!");});
