/*var fs = require ('fs');

var files;

fs.readdir(__dirname + '/files', function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    files = data;
    fs.stat(__dirname + '/files/' + files[0], function(err,stats){
    if (err) {
      console.log(err);
      return;
    }

    });
}); */

const fs = require ('fs');

function directory(total){
  var files=fs.readdir(total,function(err,data){
console.log(total+'/contains'+ data);
data.forEach(function(item){
  fs.stat(total +'/' + item, function(err,stats){
    if(stats.isDirectory()) {
      directory( total +'/'+ item);
        }
      });
    });
  });

}
directory(__dirname + '/files');
