//Draw
var context= document.getElementById('Colgador').getContext('2d');

var wrong=document.getElementById('wrong');

function colgador(){
  context.beginPath();
  context.lineWidth=6;
  context.lineCap="round";
  context.moveTo(50,30);
  context.lineTo(50,450);
  context.moveTo(20,450);
  context.lineTo(100,450);
  context.moveTo(50,30);
  context.lineTo(250,30);
  context.moveTo(250,30);
  context.lineTo(250,100);
  context.moveTo(50,100);
  context.lineTo(120,30);
  context.stroke();
}

function drawHead(){
 context.beginPath();
  context.arc(250,140,40,40,0,2*Math.PI);
  context.fillStyle ='lightblue';
  context.fill();
  context.stroke();
}

function drawBody(){
  context.beginPath();
  context.moveTo(250,180);
  context.lineTo(250,300);
  context.stroke();
}

function  drawLeftArm(){
  context.beginPath();
  context.moveTo(250,200);
  context.lineTo(200,250);
  context.stroke();
}


function drawRightArm(){
    context.beginPath();
    context.moveTo(250,200);
    context.lineTo(300,250);
    context.stroke();
}

function drawLeftLeg(){
  context.beginPath();
  context.moveTo(250,300);
  context.lineTo(220,400);
  context.stroke();
}

function drawRightLeg(){
  context.beginPath();
  context.moveTo(250,300);
  context.lineTo(280,400);
  context.stroke();
}
colgador();


//Array with the posibilities

var words=["curry","house","dog","flower","museum","magic"];
var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);// for check the word it is
var wordlength = word.length;
var lines=[];
var display="";

for (var i=0;i<wordlength; i++){
    lines.push("_");
}
var linesJ=lines.join(' ');

var wordState;

console.log(linesJ);

var wordContainer= document.getElementById('wordContainer');
wordContainer.innerHTML = linesJ;


//ENTER LETTER
var userInput= document.getElementById('guess');
var button=document.getElementById('button');
button.addEventListener("click", function(){

  var guessPositioning= whereIsTheLetter( word,userInput.value);
  chars= wordContainer.innerHTML.split(' ');
  for(var i=0; i< guessPositioning.length; i++){
    chars[guessPositioning[i]]= userInput.value;}
            wordState = chars.join('');
            var text = chars.join(' ');
            wordContainer.innerHTML = text;
if (wordState == word){
  setTimeout(function(){ alert("U WINNNNNN!!!!"); }, 1000);
setTimeout(function(){tryagain();}, 2000);
 }
});


var lifecount = 0;

//WHERE IS THE LETTER
function whereIsTheLetter(whereIsTheLetter,guess){
  var position=[];
  for(var i=0; i<whereIsTheLetter.length;i++){
    if(guess == whereIsTheLetter[i]){
       position.push(i);

}
}

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
       drawRightLeg()
       mistake();
        setTimeout(function(){ alert("U LOSEEEEEEEEE!!!!"); }, 1000);
      setTimeout(function(){tryagain();}, 2000);
     }
  return position;
};


//MESSAGE ALERT WIN/LOSE
var fullword=document.getElementById('fullword');
var buttonFW=document.getElementById('buttonFW');
buttonFW.addEventListener('click', function(){

 if (fullword.value == word){
        wordContainer.innerHTML= word;
     setTimeout(function(){ alert("U WINNNNNNNNNNNNNN!!!!"); }, 1000);
    setTimeout(function(){tryagain();}, 2000);
    }
 else{
   (fullword.value == word);
      wordContainer.innerHTML= word;
   setTimeout(function(){ alert("U LOSEEEEEE!!!!"); }, 1000);
   setTimeout(function(){tryagain();}, 2000);
    }
});


// RESOLVE BUTTON
var resolve=document.getElementById('resolve');
resolve.addEventListener('click',function(){
  wordContainer.innerHTML= word;
  setTimeout(function(){ alert("U LOSEEEEEE!!!!"); }, 1000);
setTimeout(function(){tryagain();}, 2000);
});



//TRY AGAIN APPEAR

function tryagain(){
  var tryagain=document.getElementById('redo').style.display='block';


}

//


//BOX FOR THE MISTAKES

function mistake(){
  console.log('esto viene de function wrong');
     display = display.concat(userInput.value+" ");
      wrong.innerHTML= display;
}
