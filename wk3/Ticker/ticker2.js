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
// count += 0.1;
// function arrayIt() {
//     for(var i =0; i<links.length; i++){
//         array[i] = links[i];
//     }
//     // console.log(array.shift());
// }

// function slice() {
//     var1 = array.shift();
//     console.log(var1);
//     travel();
// }

function travel(){
    var stay= 100;
    var speed = 0.06;
    var distance = 95;
    if(count == 1 || link1 > 1 ) {
        console.log(link1);
        document.getElementById('Link1').style.left = (stay - link1) + "%";
        link1 += speed;
        if (link1 > 5) {
            count = 2;
        }
        if (link1 > distance){
            link1 = 0;
        }
    }
    if(count == 2 || link2 > 1) {
        document.getElementById('Link2').style.left = (stay - link2) + "%";
        link2 += speed;
        if (link2 > 5) {
            count = 3;
        }
        if (link2 > distance){
            link2 = 0;
        }
    }
    if(count == 3 || link3 > 1 ) {
        document.getElementById('Link3').style.left = (stay - link3) + "%";
        link3 += speed;
        if (link3 > 5) {
            count = 4;
        }
        if (link3 > distance){
            link3 = 0;
        }
    }
    if(count == 4 || link4 > 1 ) {
        document.getElementById('Link4').style.left = (stay - link4) + "%";
        link4 += speed;
        if (link4 > 5) {
            count = 5;
        }
        if (link4 > distance){
            link4 = 0;
        }
    }
    if(count == 5 || link5 > 1) {
        document.getElementById('Link5').style.left = (stay - link5) + "%";
        link5 += speed;
        if (link5 > 5 ) {
            count = 6;
        }
        if (link5 > distance){
            link5 = 0;
        }
    }
    if(count == 6 || link6 > 1 ) {
        document.getElementById('Link6').style.left = (stay - link6) + "%";
        link6 += speed;
        if (link6 > 5) {
            count = 7;
        }
        if (link6 > distance){
            link6 = 0;
        }
    }
    if(count == 7 || link7 > 1 ) {
        document.getElementById('Link7').style.left = (stay - link7) + "%";
        link7 += speed;
        if (link7 > 5) {
            count = 8;
        }
        if (link7 > distance){
            link7 = 0;
        }
    }
    if(count == 8 || link8 > 1 ) {
        document.getElementById('Link8').style.left = (stay - link8) + "%";
        link8 += speed;
        if (link8 > 5) {
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

var tuesday = document.getElementsByClassName('Link');

for (var i =0; i<tuesday.length; i++){
    tuesday[i].addEventListener('mouseover', stopTravel);
    tuesday[i].addEventListener('mouseout', travel);
}

// travel();
