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
