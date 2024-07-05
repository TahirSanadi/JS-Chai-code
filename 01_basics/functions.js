
// function saymyName(){
//     console.log("t");
//     console.log("a");
//     console.log("h");
//     console.log("i");
//     console.log("r");
// }

// saymyName()


// function Add(num1 , num2){
//     console.log(num1+num2);

// }

function Add(num1 , num2){
    // let sum = num1+num2
    // return sum
    return num1 + num2
}
const sum = Add(3,5)

// console.log("sum=",sum);

function LoginUser(username){
    if(!username){
        console.log("Enter username");
        return

    }
    return `${username} just logged in`
}
//console.log(LoginUser("tahir"))
//console.log(LoginUser())

//rest and spread opperator

function calculaCartPrice(val1, val2,...num1){
    return num1 
}

//console.log(calculaCartPrice(222,34,456,777));

const user={
    username:"natty",
    price:"10"
}

function handleObject(anyObject){
    //console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"natty",
    price:"10"
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

