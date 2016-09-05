function addOne (number) {
    console.log("the number i got was" + number);
    var newNumber = number + 1;
    console.log("the new number I made is :"+ newNumber);
    return newNumber;
}

addOne (5);


function makeMoreExciting (hello){
    var newPhrase = hello + "!";
    return newPhrase;

}
console.log (makeMoreExciting("tired"));



function love(number){
    return number +" "+ "Maria";
}

console.log (love(13));


function thursday(mood){
    return mood + "today will be a good day";
}

console.log(thursday("my mood :"));



function spicedAcademy (room){
    var newmood = room +" "+"is freezing";
    return newmood;
}

console.log (spicedAcademy());



function doSomethingwithAnObject(someObject){
    someObject.hello= "hello";
    return someObject;
}

console.log(doSomethingwithAnObject("umbrella"));

function printStuff (stuff){
    console.log(stuff);
}

printStuff(printStuff("potato"));


function doThisAfterFiveSeconds(){
    console.log("5 seconds have passed!");
}

setTimeout( doThisAfterFiveSeconds, 5000);





setTimeout (function(){
    console.log(" another way to wait");
}, 5000);


function greet() {
    var greeting = "hello";
    console.log("inner" + greeting);
}
greet();





var obj = {
    cute: true,
    fun: true,
    happy: true
};

for (var prop in obj) {
    obj[prop]
};



var obj ={}
obj.cute = true;

for( var prop in obj) {
  obj [prop]
};

var obj = {};
obj.cute = true;

var mammal = {
    age: 0,
    warmBlooded: true,
    haveHair: true,
};

var weirdo = Object(null)



console.log(Object.keys([10, 20, 30])); /*that's an array */


var a = [0,1,3];
console.log(a.length);

a[40]= 6;

console.log (a.length);

a.length = 1;

console.log (a.length, a);

var a =[];

var n = a.push ('aaa','bbb');

console.log (a,n)

a.unshift ('ccc');

console.log (a);

var first =a.shift ();

console.log (first, a);

var last= a.pop();

console.log(last,a);




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
fruits.shift(fruits.length[2]);
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[3] = "Kiwi";
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[3];
console.log (fruits)

// Changes the first element in fruits to undefined



var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,2);
console.log (fruits);




var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias","Linus"];
var myChildren = myGirls.concat(myBoys);

console.log(myChildren);


var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(fruits);
console.log(citrus);


var fruits = ["Banana", "Orange", "Apple", "Mango"];          // Sorts the elements of fruits
fruits.reverse();
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];          // Sorts the elements of fruits
fruits.sort();
console.log(fruits);


var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 3 - Math.random()});
console.log(points)


var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}];
console.log(cars);
