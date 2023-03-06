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
*/