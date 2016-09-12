/*window.requestAnimationFrame() --> perform an animation and call a specify function
The call back method is passed a single argument DOMHighResTimeStamp,
indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
window.requestAnimationFrame(callback) SYNTAX.
The callback has one single argument, a DOMHighResTimeStamp,
which indicates the current time (the time returned from Performance.now() )
for when requestAnimationFrame starts to fire callbacks.

var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);


One big container:
-many links who displays inline
-play with child and parent between the links

*/

var museums= document.getElementsByClassName("Link");
  console.log();


var start= null;
var count=0;
var i= 2;
function move(){
    var stay= 100;
    //museums[0].style.left=(stay - count) + "%";
    count += 1;
    console.log();
    // if (!start)start= timestamp;
    // var progress = timestamp - start;
    museums[i].style.left = (stay - count) + "%";
    // Math.min(progress/10,1000) + "px";
    if(museums[i].style.left > "400px"){
      i = 3;
    //move();
   //var progress1 = timestamp - start;
  //  museums[1].style.left = Math.min(progress1/10,1000) + "px";}
}

    //setTimeout(move,100);
    window.requestAnimationFrame(move);

  };
  move();
