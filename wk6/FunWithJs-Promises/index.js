var fs = require('fs');

function readdir(path) {
    return new Promise(function(resolve){
        fs.readdir(path,function(err,data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
              });
        }).then(function(val){
            return val;
    }).catch(function(e){
        console.log(e);
    });
};




function stat(path) {
    return new Promise(function(resolve,reject){
        fs.stat(path,function(err,data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
          });
        });
      };



var files= readdir(__dirname + '/files');

var arr=[];

var pepito = files.then(function(item){
      item.forEach(function(data){
        var p = stat(__dirname +'/files/'+ data);
         p = p.then(function(carpeta){
            if(carpeta.isDirectory()){
                console.log(__dirname +'/files/'+ data+'is not a directory');
            }
            else{
                console.log(__dirname +'/files/'+ data +'is a directory');
            }
        });
            arr.push(p);
    });

 return Promise.all(arr);
});

 pepito.then(function(){
        console.log("done!");
});
