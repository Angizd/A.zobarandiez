/*
Exercises


Excercice 1:

Write a constructor called Rectangle that accepts two numbers (width and height) as parameters.
Rectangleinstances should have a method called getArea that returns the instance's width multiplied by its height.
Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter.
Instances of Square should also have a getArea method but you should not rewrite the getAreafunction you wrote for Rectangle.
Square instances should use the same getArea method that Rectangleinstances do. var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20 */

function Rectangle(width,height) {
  this.width=width;
  this.height=height;
  this.getArea=function(){
    return this.width*this.height;
  };
}
var rect = new Rectangle (8,6);
console.log(rect.getArea());

function Square(side){
  this.side=side;
  this.width=side;
  this.height=side;
  var rect = new Rectangle;
  this.getArea = function (){
   return rect.getArea.call(this);
 };
}

var square= new Square(6);
console.log(square.getArea());

/*
Write a function called invertCase that expects a string as a parameter.
This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched.
Uppercase characters should become lowercase and lowercase letters should become uppercase.
 Characters that are not alphabetic should not change. String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy here.
*/

function invertCase(string) {
      var newArr = [];
          var arr = [].slice.call(string);
    for (var i = 0; i < arr.length; i++) {
                if (arr[i] == arr[i].toLowerCase()) {
            newArr.push(arr[i].toUpperCase());
                } else if (arr[i] == arr[i].toUpperCase()) {
            newArr.push(arr[i].toLowerCase());
            }
        }
return newArr.join("");
};
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");
console.log (fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[3] = "Lemon";
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}

console.log(fruits.length)

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length;         // person.length will return 3
var y = person[1];

console.log(person);


var points = [40, 100, 1, 5, 25, 10];
console.log(points.length);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

var fruits = ["Banana", "Orange","Apple", "Mango"];
fruits.join(fruits *);
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(fruits.length(2));
console.log(fruits);
