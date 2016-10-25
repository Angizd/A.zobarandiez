// var links = document.getElementById("Link1");
// var array = [];


var link1 = 0;
var link2 = 0;
var link3 = 0;
var link4 = 0;
var link5 = 0;
var link6 = 0;
var link7 = 0;
var link8 = 0;
var count = 1;

function travel(){
    var stay= 100;
    var speed = 0.2;
    var distance = 150;
    var nextOne = 20;
    if(count == 1 || link1 > 1 ) {
        console.log(link1);
        $('#Link1').css({left:(stay - link1) + "%"})
        link1 += speed;
        if (link1 > nextOne) {
            count = 2;
        }
        if (link1 > distance){
            link1 = 0;
        }
    }
    if(count == 2 || link2 > 1) {
        $('#Link2').css({left:(stay - link2) + "%"})
        link2 += speed;
        if (link2 > nextOne) {
            count = 3;
        }
        if (link2 > distance){
            link2 = 0;
        }
    }
    if(count == 3 || link3 > 1 ) {
      $('#Link3').css({left : (stay - link3) + "%"})
        link3 += speed;
        if (link3 > nextOne) {
            count = 4;
        }
        if (link3 > distance){
            link3 = 0;
        }
    }
    if(count == 4 || link4 > 1 ) {
        $('#Link4').css({left: (stay - link4) + "%"})
        link4 += speed;
        if (link4 > nextOne) {
            count = 5;
        }
        if (link4 > distance){
            link4 = 0;
        }
    }
    if(count == 5 || link5 > 1) {
        $('#Link5').css({left: (stay - link5) + "%"})
        link5 += speed;
        if (link5 > nextOne) {
            count = 6;
        }
        if (link5 > distance){
            link5 = 0;
        }
    }
    if(count == 6 || link6 > 1 ) {
        $('#Link6').css({left :(stay - link6) + "%"})
        link6 += speed;
        if (link6 > nextOne) {
            count = 7;
        }
        if (link6 > distance){
            link6 = 0;
        }
    }
    if(count == 7 || link7 > 1 ) {
        $('#Link7').css({left:(stay - link7) + "%"})
        link7 += speed;
        if (link7 > nextOne) {
            count = 8;
        }
        if (link7 > distance){
            link7 = 0;
        }
    }
    if(count == 8 || link8 > 1 ) {
        $('#Link8').css({left:(stay - link8) + "%"})
        link8 += speed;
        if (link8 > nextOne) {
            count = 1;
        }
        if (link8 > distance){
            link8 = 0;
        }
    }

    theTravel = window.requestAnimationFrame(travel);
}

var theTravel = window.requestAnimationFrame(travel);

function stopTravel() {
    window.cancelAnimationFrame(theTravel);
    console.log('hey');
}

var tuesday =$('#Link');

for (var i =0; i<tuesday.length; i++){
    $( "#tuesday[i]" ).mouseover(stopTravel());
    $( "#tuesday[i]").mouseout(travel());
}

//travel();
