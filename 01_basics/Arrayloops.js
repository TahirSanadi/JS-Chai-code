//for of

const arr=[1,2,3,4,5]

for (const num of arr){
    //console.log(num);
}

const greeting = "hello...!"

for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}


//Maps
//cotains unique values only means doesnt have any duplicate value , also stores the data in order as per given

const map = new Map()

map.set('IN',"India")
map.set('USA',"Unted States America")
map.set('SP',"Spain")
map.set('IN',"India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-',value);
}

// const myObj = {
//     'game1':'NFS',
//     'game2':'GTA'
// }

// for (const [key , value] of myObj) {
//     console.log(key,':-',value);
// }
//#gives error not works for objects


//here is way using forin loop
const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}
const programming = ["js", "rb", "py"]

for (const key in programming) {
    console.log(programming[key]);
}