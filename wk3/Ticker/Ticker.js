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

var tuesday= document.getElementById("tuesday");
  console.log();


var start= null;
var count= 0;
var count2 = 0;
var i= 0;
function move(){
    var stay= 100;
    // museums[0].style.left=(stay - count[0]) + "%";

    count += 0.1;
    count2 += 0.1;
    //console.log(count);
    tuesday.style.left = (stay - count) + "%";
    window.requestAnimationFrame(move);
    // console.log(document.getElementById('Link1'));
    if (count > 110 && count2 > 20) {
      //console.log("take me, baby");
      var link = document.getElementById('tuesday');
      var newLink = link.childNodes[0];
      link.removeChild(link.childNodes[0]);
      link.appendChild(newLink);
      count2 = 0;
    }
    if (count > 260) {
      count = 100;
    }

    // window.requestAnimationFrame(move);

  };
  move();

  // function timer() {
  // for (var j = 1; j < museums.length; j++) {
  //     setTimeout(function() {
  //       // i += 1;
  //       move(museums[j]);
  //     }, 5000);
  // }
  // }
  // timer();
