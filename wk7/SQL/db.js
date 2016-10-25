var pg = require('pg');

var dbUrl= 'postgres://spicedling:password@localhost:5432/superheroes';

var client= new pg.Client(dbUrl);


client.connect(function(err){
    if (err){
        console.log(err);
        return;
    }
    client.query('SELECT * FROM superheroes' , function(err,data){
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        client.end();
    })
   }
);
