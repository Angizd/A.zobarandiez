var box = document.getElementById('box1');
var box2= document.getElementById('box2');

function randomColor(){

    var color = "";
    for (var i=0;i<6;i++){
        var rando = Math.floor(Math.random() * 10);
        rando = rando.toString();

        color += rando;
    }
    return color;
}



box.addEventListener('mousedown',function(){
    var newColor = randomColor();
    box.style.backgroundColor ="#"+newColor;
});

box2.addEventListener('mousedown',function(e){
    var newColor = randomColor();
    e.stopPropagation();
box2.style.backgroundColor ="#"+newColor;
});
