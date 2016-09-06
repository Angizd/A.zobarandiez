var box= document.getElementById('box');

box.addEventListener('mousemove', function(e) {
    box.style.left = (e.clientX - 50) + "px";
    box.style.top = (e.clientY - 50) + "px";
});
