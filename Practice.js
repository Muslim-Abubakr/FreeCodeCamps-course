/* let myVar = 11;

// Only change code below this line
myVar--; //myVar = myVar - 1;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -= 15;
c -= 1;


---------------------------------------------------------------------------------


let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
console.log(myStr);


const myStr = '<a href=\"http://www.example.com\" target=\"_blank\">Link</a>';


const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)


const myStr = "This is the start. " + "This is the end."; // Change this line


// Change code below this line
const someAdjective = "interesting";
let myStr = "Learning to code is ";
myStr += someAdjective

----------------------------------------------------------------------------------


console.log('findLength'.length);

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength);
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
console.log(firstLetterOfLastName)

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "H"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line



const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb + "."; // Change this line


let arr = ['apple', 'banana', 'pineapple', 'potato'];

arr[4] = 'grapefruit'

console.log(arr)

// Only change code below this line
const myArray = ['string', 2, ];

// Only change code below this line
const myArray = [['Muslim', 24]];

const myArray = [50, 60, 70];
let myData = myArray[0]

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45
// Only change code below this line
// Only change code above this line


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
console.log(arr[3][0][1]);

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

  let dailyActivities = ['есть', 'спать'];
  console.log(dailyActivities.pop());

  // Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3])
// Only change code below this line


// Setup
const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop()
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift()
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// Only change code below this line

const myList = [
    ['coke', 3], 
    ['banana', 5],
    ['bubble', 3],
    ['apple', 5],
    ['juice', 2]
    ];

function reusableFunction() {
  console.log('Hi World');
};
console.log(reusableFunction())


function helloWorld() {
    console.log('Hello')
}
helloWorld()

function print(message){
  console.log(message);
}

print("Hello JavaScript");
print("Hello METANIT.COM");
print("Function in JavaScript");

function testFun(param1, param2) {
  console.log(param1, param2);
}

testFun(1, 4)

function functionWithArgs(a, b) {
  console.log(a + b)
}

functionWithArgs (4, 7)


function timesFive(num) {
  return num * 5;
}

const answer = timesFive(4)

function checkScore(score) {
  return score > 100
}
const s1 = 10
const s2 = 15
const s3 = 20
if (checkScore(s1)) console.log('игрок 1 проходит')
if (checkScore(s2)) console.log('игрок 2 проходит')
if (checkScore(s3)) console.log('игрок 3 проходит')

console.log(checkScore(s2))

// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


let arr1 = ['a', 'v', 'c']
console.log(arr1[1])

let arr2 = [1, 2, 3]
console.log(arr2[0] + arr2[1] + arr2[2])

let arr = ['a', 'b', 'c', 'd']
console.log(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3])

console.log(arr[arr.length - 1])

let arr3 = ['a', 'b', 'c'];
arr3[0] += 3
arr3[1] += 3
arr3[2] += 3
console.log(arr3)

let arr4 = [1, 2, 3, 4];

arr4[0]++;
++arr[1];
arr4[2]--;
--arr4[3];

console.log(arr4);

let razArray = [1, 2, 3]
razArray[4] = 6
console.log(razArray)

let a2rr = [];

a2rr[3] = 'a';
a2rr[8] = 'b';

console.log(a2rr.length)

let aww = [1, 2, 3]
let key = 2
console.log(aww[key])

let rrr = [1, 2, 3, 4]
delete rrr[2]
console.log(rrr.length)

let arr11 = [1, 2, 3, 4, 5];
console.log(arr11[arr11.length]);



function getName(){
  console.log('Muslim')
}
getName()

function coub(num){
  console.log(num ** 3)
}
coub(3)

function ident(num){
  if (num > 0) console.log('+++')
  if (num < 0) console.log('---')
}
ident(-2)

function eFunc(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
eFunc(23, 354, 111)

function param(num1, num2, num3){
  console.log(num1 + num2 + num3)
}
let param1 = 1;
let param2 = 2;
let param3 = 3;

param(param1, param2, param3)

function ytr(num){
  return num ** 3
}
let res = ytr(6)
console.log(res)

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
  sum = sum + 5
}
// Only change code above this line

addThree();
addFive();

// Setup
let processed = processArg(7);

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line


let sum = 0;

function addSum(num) {
  console.log(sum = sum + num);
}

addSum(3);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  let removed = arr.shift()
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"


  // Only change code above this line
}

let test = 24
if(test > 10) {
  console.log('+')
} else {
  console.log('-')
}

let test1 = 2
let test2 = 1
if(test1 != test2) {
  console.log('Yes')
} else {
  console.log('No')
}

let rrw = 2
let fssa = '2'
if(rww = fssa) {
  console.log('Yes')
} else {
  console.log('No')
}



let test1 = 14;
let test2 = 2;
		
if (test1 >= 10 && test1 <= 20) {
	console.log('+++');
} else {
	console.log('---');
}



let num = 3;
		
if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
	console.log('+++');
} else {
	console.log('---');
}

  // Setup
  function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  testEqual(10);



let str = `abc`
console.log (str)

*/

console.log(typeof undefined)

function testGreaterOrEqual(val) {
  if (val >=) {  // Change this line
    return "20 or Over";
  }

  if (val >=) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);



function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

