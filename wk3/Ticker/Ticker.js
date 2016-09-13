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

  };
  move();
