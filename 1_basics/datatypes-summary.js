// primitive

// 7 types : string,number,null,undefined,boolean,symbol,BigInt

// Reference (Non primitive)

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 21313123232323n


// const heros = ["shaktiman","dakuuu"]
// let myObj ={
//     name:"rajev"
// }


// function name(params) 
const myFunction = function(){
console.log("hello ");
}

console.log(typeof scoreValue);



// Array,Objects,functions1


// stack memory is used in primitive type
// Heap memory is used in Non-primitive

let myYoutube = "rajeevlifts"

let anothername = myYoutube
anothername= "lift"

console.log(myYoutube);
console.log(anothername);

let user1={
    // email:"user@google.com",   this all store in the heap memory
    upi:"lift@ybl",
}
console.log(user1);

// in heap the changes done in the original value
// Heap means to give a ReferenceError


