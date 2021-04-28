//Sum numbers from the visitor
//importance: 5
//Create a script that prompts the visitor to enter two numbers and then shows their sum.

let first = +prompt("first", "");
let sec = +prompt("second", "");
alert(first + sec);

//According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
//
//For instance:
//
//alert( 1.35.toFixed(1) ); // 1.4
//In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
//
//alert( 6.35.toFixed(1) ); // 6.3
//How to round 6.35 the right way?

console.log(Math.round(6.35 * 10) / 10); //this problem is associated with precision loss connected with
//different system uses in javascript

function readNumber() {
  let numb;
  if (!isFinite(numb)) {
    return (numb = +prompt("Enter number", 0));
  } else {
    if (num === null || num === "") {
      return null;
    } else {
      return +num;
    }
  }
}
//console.log(readNumber());
//
//An occasional infinite loop
//importance: 4
//This loop is infinite. It never ends. Why?
//
let i = 0;
while (i != 10) {
  i += 0.2;
} //because the i will never be equal to the 10 connected with the problem of the numbers added after point

//A random integer from min to max
//importance: 2
//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
//
//Any number from the interval min..max must appear with the same probability.

function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
} //this function will return it
