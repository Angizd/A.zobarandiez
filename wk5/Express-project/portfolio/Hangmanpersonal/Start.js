var myIndex = 4;
run();

function run() {
    var i;
    var x = document.getElementsByClassName("pictures");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(run,1000);
};
