var box = document.getElementById('box');

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
    box.style.backgroundColor = "#" + newColor;
});
