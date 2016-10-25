var express = require('express');
var app = express();
var multer = require('multer');
var hb = require('express-handlebars');
var fs = require('fs');
var http = require('http');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));
app.engine('handlebars', hb());
app.set('view engine','handlebars');

app.get('/',function(req,res){
   res.render('home');
});



var diskStorage = multer.diskStorage({
   destination: function (req, file, callback) {
      callback(null, __dirname + '/uploads');
   },
   filename: function (req, file, callback) {
      callback(null, Date.now() + '_' + Math.floor(Math.random() * 99999999) + '_' + file.originalname);
   }
});

var uploader = multer({
   storage: diskStorage,
   limits: {
      filesize: 2097152
   }
});



app.post('/upload', uploader.single('file'), function(req, res) {
   if (req.file) {
      res.json({
         success: true,
         file:req.file.filename
      });
      console.log(req.file.filename)
   } else {
      res.json({
         success: false
      });
   }

});


app.post('/upload2', uploader.single('url'), function(req,res){
   var options ={url:req.body.url};
   var path = require('path');

   var image_name = path.basename(options.url);
   image_name = "./uploads/" + image_name;
   saveImage(req.body.url,image_name);

   if (req.url) {
      res.json({
         success: true,
         file:req.url
      });
      console.log(req.body.url);
   } else {
      res.json({
         success: false
      });
   }
});

function saveImage(url,image_name){
    var req= http.request(require('url').parse(url),function(resp){
        var s=fs.createWriteStream(image_name);
        resp.pipe(s);
    });
    req.end();
};

/*
if (url.protocole ==='http'){
module:;
}else{
url.protocole === 'https'
}
*/
app.listen(8080,function(){
   console.log('Listening on port 8080');
});
