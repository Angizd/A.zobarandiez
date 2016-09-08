var context = document.getElementById('canvas').getContext('2d');
var context3 = document.getElementById('canvas3').getContext('2d');

//head
context.beginPath();
context.arc(250,75,75,0,2*Math.PI);
context.fill();
context.stroke();
context.lineWidth=6;


//body
context.beginPath();
context.moveTo(250,150);
context.lineTo(250,350);
context.stroke();



//Arms
context.beginPath();
context.moveTo(250,250);
context.lineTo(350,150);
context.stroke();


context.beginPath();
context.moveTo(250,250);
context.lineTo(150,150);
context.stroke();

//Legs
context.beginPath();
context.moveTo(250,350);
context.lineTo(150,500);
context.stroke();


context.beginPath();
context.moveTo(250,350);
context.lineTo(350,500);
context.stroke();



var x=0;
var y=0;

context3.drawImage(document.getElementById('canvas'),x,y);
document.onkeydown=function(e){
  context3.clearRect(0,0,1000,1000);
  if(e.keyCode===37){
        x-=5;
  }
  if(e.keyCode===38){
        y-=5;
  }
  if (e.keyCode===39) {
        x+=5;
  }
  if (e.keyCode===40) {
        y+=5;
  }
  e.preventDefault();
  context3.drawImage(document.getElementById('canvas'),x,y);
};
