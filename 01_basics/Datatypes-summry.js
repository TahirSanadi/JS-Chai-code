
//#Datatypes
// Primitive
// :string,number,boolean,null,undefined,symbol,BigInt

const score =  100
const scoreValue= 100.3
const isLoggedIn = false 
const ousideTemp = null
let userEmail; 
const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const BigNumber = 1646534476528734413123n

// Reference/non-primitive:Array,Objects, Function

const heros = ["Captain", "Hulk", "Thor"]

let myobj={
    name:"tahir",
    age:23,
}

const myfunction=  function (){
    console.log("HEllO");
}
// ()
console.log(typeof myfunction);