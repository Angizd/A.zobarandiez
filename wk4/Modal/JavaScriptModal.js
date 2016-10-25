

//modal

var content=document.getElementById('container4');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function openmodal(){
  var content=document.getElementById('container4').style.display='block';
}
setTimeout(openmodal, 2000);


 span.addEventListener('click',function(){
     container4.style.display="none";
 });
/*&span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
