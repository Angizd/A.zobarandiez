var menu = document.getElementById('menu');
var container3=document.getElementById('container3');
var close=document.getElementById("close")
var page=document.documentElement;

menu.addEventListener('click',function(){
    container3.style.display ='block';
});

close.addEventListener('click',function(){
    container3.style.display="none";
});

page.addEventListener('mousedown',function(){
    container3.style.display ='none';
});

container3.addEventListener('mousedown',function(e){
   e.stopPropagation();
});



//modal

var content=document.getElementsByClassName("modalContent");
var modal = document.getElementById('modal');
var but=document.getElementsByTagName('button');
var span = document.getElementsByClassName("close")[0];

function openmodal(){
  var content=document.getElementById('modal').style.display = 'block';
  console.log("hello");
}
setTimeout(openmodal,1000);

function enterText(){
    but.addEventListener("click",function(){
console.log("work")
})
}


 span.addEventListener ('click',function(){
     container4.style.display="none"
 })
