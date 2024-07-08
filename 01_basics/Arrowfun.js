const user={
    username:"tahir",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "tahir"
//     console.log(this.username);
// }
// chai()


// const chai= function (){
//     let username = "tahir"
//     console.log(this.username);
// }


// const chai= ()=>{
//     let username = "tahir"
//     console.log(this);
// }
// chai()


//arrow function

//const addTwo = (num1 , num2)=>num1+num2
// const addTwo = (num1 , num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"tahir"})


console.log(addTwo())