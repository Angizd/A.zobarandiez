/*
Excercice 1
Write a function that takes any number of numbers as parameters and returns the sum of those numbers.

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330 */

var sum = function(){
    var total=0;
    for( var i=0;i<arguments.length; i++){
        total+= arguments[i];
    }
    console.log(total);
};

sum( 7,8);
sum (20,16,28);
sum (2,3,4,8,9,10,13);

/*

Excercice 2
Write a function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.

waitThenRun(function() {
  console.log('Hello!');
}); // logs 'Hello!' 1.5 seconds later

*/



function waitThenRun(fn){

    setTimeout (fn,1500);
}
waitThenRun(sum);

/*
Excercice
Write a function that expects a number as a parameter.
If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'.
If the number that is passed in is greater than or equal to 1000000 it should simply return the number.
Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal
to 1000000 and return that */

function excercice(num) {
    if(num <= 0 || isNaN(num)){
        return("ERROR");
    } else if (num >= 1000000){
        return(num);
    } else{
        while(num < 1000000)
      {
            num= num * 10;
        }
        return(num);
    }
}
excercice(400);
