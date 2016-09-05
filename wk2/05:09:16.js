/*Write a function that expects a string representing a selector to be passed as a parameter.
The function should find all the elements in the document that match the selector and
change their style so that the text they contain is italic, underlined, and bold.*/

function content(string){
  var p = document.querySelectorAll(string)
  for (var i = 0; i < p.length; i++) {
       p[i].style.fontWeight="bold";
       p[i].style.fontStyle = "italic";
       p[i].style.textDecoration="underline";
     }
};

content('p')

/*
Write a function that expects a string representing a class name to be passed as a parameter.
 The function should return an array containing all the elements in the document that
  have the class that was passed in.*/

function className(string){
  var x = document.getElementsByClassName("string");
  var arr= [].slice.call(x);
  return arr;
}

clasName("file-wrap");

/*
Write a function that inserts an element into the body of the currently loaded page.
That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px,
 font-size of 200px, and contain the text 'AWESOME'. */

function element(x){
  var newItem = document.createElement("x");
  var textnode = document.createTextNode("AWESOME");{
    textnode.style.position = "fixed";
    textnode.style.zIndex = "2147483647";
    textnode.style.Left = "20px";
    textnode.style.Top = "100px";
    textnode.style.fontSize = "200px";

  }
newItem.appendChild(textnode);
document.getElementById("x").appendChild(newItem)
};
