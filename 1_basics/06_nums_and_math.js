const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// here u can use string
// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2));
// toFixeduse for large numbers 

const otherNumber = 21.50
// console.log(otherNumber.toPrecision(1));
// toPrecisionis use for roundoff the the given decimal Value
// Returns a string containing a number represented either in exponential or
//  fixed-point notation with a specified number of digits. 

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));
// here toLocaleString is used to provide the comaas to the given value



//   +++++++++++++++++++++++ MAths ++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
// abs is ued for convert the -ve value in +value
console.log(Math.round(2.49999));
// round is used for 

// console.log(Math.ceil(4.9));
// ceil is used for upper value 
// console.log(Math.floor(4.2));
// floor is used for lower value 
// console.log(Math.min(2,6,5,9));
// here Math,min is used for finding the minimum element in the array
// console.log(Math.max(23,3,45,44));
// here max is used for finding the maximum element in the array 
console.log(Math.random());
// math random gives avalue between 0 and 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max =20
console.log(Math.floor(Math.random()* (max - min +1))+min)























