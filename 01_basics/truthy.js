//falsy values
/*false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values 

"0", 'false'," ", [], {}, function(){} 

*/

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}