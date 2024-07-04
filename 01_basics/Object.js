//object litral
 
const mysym= Symbol("key1")
const jsUser={
    name:"tahir",
    "fullname":"tahir sanadi",
    age:23,
    location:"kolhapur",
    email:"tahirsanadi@gmail.com",
    [mysym]:"mykey1"
}
// //two methods to access the objects
// // console.log(jsUser.name);
// // console.log(jsUser["email"]);
// // //this method is more usable
// // console.log(jsUser["fullname"]);
// // console.log(typeof jsUser[mysym]);


// //change values
// jsUser.email = "cahtgpt@gmail.com"
// //lock or freez the objects 
// //Object.freeze(jsUser)
// // jsUser.name = "joey"
// // console.log(jsUser);


// //add fucntion
// jsUser.greeting = function(){
//     console.log("hello....!");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello...!, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


/************Objects 2.0 ***************/



//Singelton
//const tinderUser = new Object()
//non-singelton
const tinderUser = {}

tinderUser.name="samy"
tinderUser.id = "1234"
tinderUser.isLoggedin=false

// console.log(tinderUser);

const User={
    email:"tahir@gmail.com",
    fullname:{
        userfullname:{
            firstname:"tahir",
            lastname:"sanadi"
        }
    }
}

// console.log(User.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= {obj1 , obj2}
// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"t@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
