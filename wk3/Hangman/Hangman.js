//Draw

var context= document.getElementById('Colgador').getContext('2d');


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

for (var i=0;i<wordlength; i++){
    lines.push("_");
}
var linesJ=lines.join(' ');

console.log(linesJ);//to know how many lines

var wordContainer= document.getElementById('wordContainer');
wordContainer.innerHTML = linesJ;

var userInput= document.getElementById('guess');

var button=document.getElementById('button');
button.addEventListener("click", function(){
        console.log(userInput.value);
  var guessPositioning= whereIsTheLetter( word,userInput.value);
  var chars= wordContainer.innerHTML.split(' ');
  for(var i=0; i< guessPositioning.length; i++){
    chars[guessPositioning[i]]= userInput.value;
  }

var text=chars.join(' ');
wordContainer.innerHTML = text;
});

var lifecount = 0;

//WRITE FUNCTION TO CHECK ALL LETTERS IN THE WORD. LOOP THROUGH ALL LETTERS

function whereIsTheLetter(whereIsTheLetter,guess){
  var position=[];
  for(var i=0; i<whereIsTheLetter.length;i++){
    if(guess == whereIsTheLetter[i]){
       position.push(i);
    }
  }
  if (position.length < 1) {
    lifecount +=1;
    console.log(lifecount);
  }
  if(lifecount == 1){
    console.log('test')
       drawHead()
     }

     else if(lifecount ==2){
       drawBody();
     }
     else if( lifecount==3){
       drawLeftArm();
     }
     else if(lifecount==4){
       drawRightArm()
     }
    else if(lifecount==5){
       drawLeftLeg()
     }
     else if(lifecount==6){
       drawRightLeg()
      setTimeout(function(){alert("SORRY,YOU LOST!!!!!");},1000);
     }
  return position;
};







 //End of the game
