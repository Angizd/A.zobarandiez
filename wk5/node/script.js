var readline = require("readline");

   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });

  // rl.question("What\'s your birthday?\n", (answer)=>{
       //console.log("OK, on " + answer + " I will wish you a happy birthday!")
       //rl.close()
//   })



var noun;

    //rl.question("I am fucking tired", (answer) =>{
      //console.log("Ok"+ answer +"Let have some sleep")
    //})

rl.question("noun",(noun)=>{
    var nounanswer = noun;

rl.question("verb",(verb)=>{
  var veranswer=verb;


rl.question("adjective", (adj)=>{
  var adjanswer=adj;

console.log( "hello "+nounanswer +" " + veranswer +" " + adjanswer)
    });
  });
});
