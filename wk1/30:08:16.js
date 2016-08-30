/*Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"function!"
"object!"
"array!"
"I have no idea!"
Copy the following object into your code:

var a = {
  Berlin: 'Germany',
  Paris: 'France',
  'New York': 'USA'
};
Then create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a. The result should be an object that looks like this:

{
  Germany: 'Berlin',
  Paris: 'France',
  USA: 'New York'
}
Write a while or for loop that counts down from 10 to 1, logging each number to the console. */

var a= '7';

function logType (a) {
    if (a == 'undefined'){
        console.log("undefined");
    }else if (isNaN(a)){
        console.log("not a number");
    }else if (a === null) {
        console.log("null");
    }else if (typeof a === 'number') {
        console.log("number");
    }else if (typeof a === 'string') {
        console.log("string");
    }else if (typeof a === 'boolean') {
        console.log("boolean");
    }else if (typeof a === 'function') {
        console.log("function");
    }else if (typeof a instanceof Array){
        console.log("array");
    }else if (typeof a ==='object') {
        console.log("object");
    }else { console.log("I have no idea");
    }
}

logType(a);
