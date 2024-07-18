//for
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/


// for (let i = 1; i <=10; i++){
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
    
// }


let myArray = ["flash", "Batman" , "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


//break and continue

for (let index = 0; index <= 20; index++){
    if (index==5) {
        //console.log("detected 5 ");
        break;
        
    }
    //console.log(`Value of i is ${index}`);
    
}


for (let index = 0; index <= 20; index++){
    if (index==5) {
        //console.log("detected 5 ");
        continue
        
    }
    //console.log(`Value of i is ${index}`);
    
}


//While loop , do while 

let index = 0
while (index <= 10){
    //console.log(`Value of index is ${index}`);
    index = index+2
}
let Myarr=["flash", "Batman" , "superman"]
let arr=0
while (arr < Myarr.length) {
    //console.log(`Value is ${Myarr[arr]}`);
    arr= arr+1
    
}

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);