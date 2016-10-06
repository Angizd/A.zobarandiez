var fs = require ('fs');
var express = require('express');
var app = express();
var hb = require('express-handlebars');


app.use(express.static(__dirname + '/public'));



app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('/hello', {
    });
});

var portfolio;
fs.readdir(__dirname + '/public/portfolio',function(err,data){
  portfolio = data;
  console.log(portfolio);
});

app.get('/hello', function(req, res) {
    res.render('hello', {
      portfolio:portfolio
    });
});


var portfolioName;
app.get('/portfolio/:portfolioName/description', function(request, res) {
  var portfolioName= request.params.portfolioName;
  res.render(portfolioName, {
    portfolio:portfolio,
    portfolioName:portfolioName});
});

app.get('*', function(request,res){
  res.render('nofound');
})


app.listen(8080, function() {console.log("listening on port 8080!");});
