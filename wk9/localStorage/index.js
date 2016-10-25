var express = require('express');
var app = express();
var hb = require('express-handlebars');
var sessionStorage = require('sessionstorage');
var localStorage = require('localStorage');

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', hb());
app.set('view engine','handlebars');

app.get('/',function(req,res){
    res.render('home')
});



function webStorageEnabled()
{
    if (typeof webStorageEnabled.value == 'undefined')
    {
        try
        {
            localStorage.setItem('textarea','value');
            localStorage.removeItem('textarea');
            webStorageEnabled.value = true;
        }
        catch (e) {
            webStorageEnabled.value = false;
        }
    }

    return webStorageEnabled.value;
}
/*
Storage.prototype.setObject=function(comment, value) {
        this.setItem(key, JSON.stringify(value));
        console.log("it works");
    }

    Storage.prototype.getObject = function(comment) {
        return JSON.parse(this.getItem(value));
    }

*/
    app.listen(8000, function(){
        console.log("listening on port 8000!")
    })
