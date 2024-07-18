//falsy values
/*false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values 

"0", 'false'," ", [], {}, function(){} 

*/

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//nullish coalescing operator(??):nullundefined

// let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
// val1 =null??10??20
// console.log(val1);


//Terniary operator
//condition ? true : false

const icetea=100
icetea <=80 ? console.log("less than 80") : console.log("more than 80");