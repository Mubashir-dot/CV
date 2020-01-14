/*console.log("hello");

//alert("yoo");

// VARIABLES

var b = "smoothie";
console.log(b);

var somenumber = 45;
document.write(somenumber);

//document.getElementById("sometext").innerHTML = "hey there"; 

//var age = prompt('what is your age');
//document.write( age);
//document.getElementById("sometext").innerHTML = age;

// NUMBERS

var num1 = 10;
//num = num1 + 1;
// increament of num1 by 1
//num1++


// decreament of num1 by 1
//num1--
//console.log(num1);

// divide /, multiple *, remainder %
console.log(num1 % 3);

// increament/decreament by any number 

//var num += 10;
//console.log(num);

/* FUNCTIONS
1. create a function
2. call the function
*/
// creating function
function fun(){
    console.log('this is function')
} 

// calling function
fun();

/* creating function that take in a name & says 
hello followed by name 

eg,
name = "mubi"
return : "hellow mubi"
*/

function greeting(yourName){
    var result = 'Hello' + ' ' + yourName; //string concatenation
    console.log(result);
}
//var name = prompt('what is your name?');
//greeting(name);

//arguments work in functions
// how do we add two numbers in function ?

/*function sumNumbers(number1 , number2){
    var result = number1 * number2;
    console.log(result)
}
sumNumbers(10, 10);*/

//  WHILE LOOPS

/*var num = 0;

while (num < 100){
    num += 1;
    console.log(num);
}*/

// FOR LOOPS
// let & var are same thing, best thing to write is let
for (let num = 0; num <= 100; num++ ){
    console.log(num);         
}

// Data types
let yourAge = 18;    //number
let yourName = 'mubi';   //string
let name = {first: 'jane', last: 'Doe'} // object
let truth = false // boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random // undefined
let nothing = null // value null

// strings in JS (common methods)
let fruit = 'banana,apple,orange,berry,coconut';
let moreFruits = 'banana\napple'   // "\n" new\change line
console.log(fruit);
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('b')); // to find positin/location index of string
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')) // split by comma
console.log(fruit.split('')) // split by character

// ARRAYS
let fruits = ['banana', 'apple', 'orange', 'pineapples'];

fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[1]); //access value

fruits[0] = 'pear'; //to change value of index
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString())
console.log(fruits.join(' * '))
//console.log(fruits, fruits.pop(), fruits)
//console.log(fruits.pop())
fruits.pop() // remove last item
console.log(fruits)
console.log(fruits.push('blackberry'), fruits); // add item from last

console.log(fruits[4]);
fruits[4] = 'new fruits'; //smart way to add item
console.log(fruits);

fruits.shift(); // remove first item
console.log(fruits);
fruits.unshift('kiwi'); // add item from beginning
console.log(fruits);

let vegetables = ['tomato', 'asparagus', 'broccoli'] 
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort())

let someNumber = [5, 110, 165, 720, 25, 130, 375, 40, 009];
console.log(someNumber.sort());
console.log(someNumber.sort(function(a, b) {return a-b})) //sorted in ascending
console.log(someNumber.sort(function(a, b) {return b-a})) //sorted in descending

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//OBJECT IN JS
var student = {
    first: 'Mubi', 
    last: 'Memon', 
    age : 21, 
    height : 170,
    studentInfo: function(){
        return this.first + "\n" + this.last;
    }
}
// console.log(student.first);
// console.log(student.last);
// console.log(student.age);
// console.log(student.height);

// student.first = 'notMubi'; // change in value
// console.log(student.first);

// student.age++;
// console.log(student.age);

console.log(student.studentInfo());

// conditional, control flows (if/else)
// && AND
// || OR
// var age = prompt('what  is your age?')
// if ( (age >= 18), (age <= 35) ){
//     status = 'target demo';
//     console.log(status);
// }
// else {
//     status = 'not my audience'
//     console.log(status);
// }

// switch statements
// differentiate b.w weekday vs weekend
// day 6 -----> sat
// day 7 -----> sun --> weekend
// day 4 -----> thurs --> weekday
switch (6){
    case 0:
        text = 'weekend';
    case 6:
        text = 'weekend';
    case 5:
        text = 'weekend';
        
    default:
        text = 'weekday';


}
console.log(text);






