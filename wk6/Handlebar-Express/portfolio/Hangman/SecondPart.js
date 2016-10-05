// Quotes boxes movement

var myIndex = 2;
quotes();

function quotes() {
    var i;
    var x = document.getElementsByClassName("quotes");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }

    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
      }
    x[myIndex-1].style.display = "block";
      setTimeout(quotes,4000);
};


//Draw Hangman

function drawHead(){
    var Head=document.getElementById('drawHead').style.display='block';}



function drawBody(){
    var Body=document.getElementById('drawBody').style.display='block';}


function drawLeftArm(){
    var LeftArm=document.getElementById('drawLeftArm').style.display='block';}


function drawRightArm(){
    var RightArm=document.getElementById('drawRightArm').style.display='block';}



function drawLeftLeg(){
    var LeftLeg=document.getElementById('drawLeftLeg').style.display='block';}


function drawRightLeg(){
    var RightLeg=document.getElementById('drawRightLeg').style.display='block';}



//Array with the posibilities

var words =["PICASSO" , "DALI" , "KANDINSKY", "VANGOGH", "MONET","MANET","LAUTREC","GOYA","VELAZQUEZ", "MIRO", "DAVINCI","RENOIR","CEZANNE","BANKSY"," WARHOL"];
var word = words[Math.floor(Math.random() * words.length)];
var wordlength = word.length;
      console.log(word);
var lines = [];
var display = "";


for (var i=0 ;i<wordlength ; i++)
    {
         console.log ("hello")
     lines.push ("_");
    }

var linesBar = lines.join(' ');


//Enter the world

var wordPlace= document.getElementById('wordPlace');
    wordPlace.innerHTML = linesBar;
var userInput = document.getElementById('guess');
var button =document.getElementById('button');
    button.addEventListener("click", function(){

var wordState;
var guessPositioning = whereIsTheLetter( word,userInput.value.toUpperCase());
     chars= wordPlace.innerHTML.split(' ');

for(var i=0; i< guessPositioning.length; i++)
     {
     chars[guessPositioning[i]]= userInput.value.toUpperCase();
      }
      wordState = chars.join('');
var text = chars.join(' ');
          wordPlace.innerHTML = text;
    if (wordState == word){
      setTimeout(function(){win(); }, 1500);
      setTimeout(function(){ tryagain(); },2300);


      }
});



//WHERE IS THE LETTER
var lifecount = 0;
function whereIsTheLetter (whereIsTheLetter,guess){
var position=[];
      console.log("hello")
for(var i=0; i<whereIsTheLetter.length;i++){
    if(guess == whereIsTheLetter[i]){
       position.push(i);
     }
   };

//DRAW THE BODY OF THE HANGMAN
  if (position.length < 1) {
    lifecount +=1;
    console.log(lifecount);
  }
  if(lifecount == 1){
    console.log('test')
       drawHead();
       mistake();

     }

     else if(lifecount ==2){
       drawBody();
       mistake();

     }
     else if( lifecount==3){
       drawLeftArm();
       mistake();

     }
     else if(lifecount==4){
       drawRightArm();
       mistake();

     }
    else if(lifecount==5){
       drawLeftLeg();
       mistake();

     }
     else if(lifecount==6){
       drawRightLeg();
       mistake();
       setTimeout(function(){lose(); }, 1500);
       setTimeout(function(){ tryagain(); },2300);



     }
  return position;
};



//MESSAGE ALERT WIN/LOSE

var fullword=document.getElementById('fullword');
var buttonFW=document.getElementById('buttonFW');
buttonFW.addEventListener('click', function(){

 if (fullword.value.toUpperCase() == word){
        wordPlace.innerHTML= word;
        setTimeout(function(){win(); }, 1500);
        setTimeout(function(){ tryagain(); },2300);

    }
 else{
   (fullword.value.toUpperCase() == word);
      wordPlace.innerHTML= word;
      setTimeout(function(){lose(); }, 1500);
      setTimeout(function(){ tryagain(); },2300);

    }
});


// RESOLVE BUTTON
var resolve=document.getElementById('resolve');
resolve.addEventListener('click',function(){
  wordPlace.innerHTML= word;
          drawHead();
          drawLeftArm();
          drawRightArm();
          drawLeftLeg();
          drawBody();
          drawRightLeg();
    setTimeout(function(){lose(); }, 1500);
    setTimeout(function(){ tryagain(); },2300);

          console.log('tonta')
});


//Try Again
function tryagain(){
  var tryagain=document.getElementById('tryAgain').style.display='block';
}
//Win

function win(){
  var win=document.getElementById('win').style.display='block';
  var wintxt=document.getElementById('textW').style.display='block';
}


//lose
function lose(){
  var lose=document.getElementById('lose').style.display='block';
  var losetxt=document.getElementById('textL').style.display='block';
}

//Mistakes counter

var wrong=document.getElementById('wrong');
function mistake(){
  console.log('esto viene de function wrong');
     display = display.concat(userInput.value+" ");
      wrong.innerHTML= display.toUpperCase();
}
