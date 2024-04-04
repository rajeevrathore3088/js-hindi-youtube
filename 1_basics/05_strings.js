// String is denoted by single quotes and double quotes
const name = "rajeev"
const repoCount = 43
// console.log(name + repoCount+"value");

// try to write like this 
// ${} sign is used here to take the value what u want to print
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


// string is a object

const gameName = new String('rajeev-li')
// here we get the keyvalue of the string 
console.log(gameName[2]);
console.log(gameName.__proto__);
// here j is gonna to print 
// here are some methods of string 
console.log(gameName.length);
console.log(gameName.toUpperCase());
// charAtused to check the where is Character
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)
console.log(newString);
// here is the slicing used 
const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringone ="    rajeev    "
console.log(newStringone);
console.log(newStringone.trim());
// the trim keyword is used to delte the all starting and ending space of the String
   
const url = "https://rajeev.com/rajeev%10"
console.log(url.replace('%20','-'));

console.log(gameName.split ('-'));
// split is use to divide a string in 2 parts 





