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


var word='marie';
var wordlength= word.length;
var lines=[];

for (var i=0;i<wordlength; i++){
    lines.push("________");
}
var linesJ=lines.join(" ");

console.log(lines);

var wordContainer= document.getElementById('wordContainer');
wordContainer.innerHTML = linesJ;
