
function askForNumber(){
var num = prompt("Please, enter a number between one and ten");
 num= parseInt(num);
    if(num <=10 && num>0){
      return (num)
    }else{
      throw new Error("not a valid number");
    }
  };


function translateNumberToGerman(){
  try{
     var num = askForNumber();
     var translationList=["Eins","Zwei","Drei","Vier","Fünf","Sechs","Sieben","Acht","Neun","Zehn"]
         num = num-1;
     var correctTranslation=translationList[num];
      console.log(correctTranslation)

  }catch (Error){
    console.log(Error)
  }
}

translateNumberToGerman();


var button = document.getElementById('button');
var textarea = document.getElementById('input');

function valid(){
  var code= textarea.value;
  var parsed= JSON.parse(code);
    if(parsed){
     alert("JSON IS VALID!!!!");
   }else {
      var err = new Error;
      throw err;
    }
  };

function validated(){
  button.addEventListener('click', function(){
    try{
      parsed();
    }
    catch(e){
      alert("JSON IS NO VALID TRY AGAIN");
    }
  });
}

validated();
