const myNum=[1,2,3]

// const myTotal = myNum.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)

const myTotal = myNum.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart=[
    {
        item:"java",
        price:999
    },
    {
        item:"javaScript",
        price:599
    },
    {
        item:"Python",
        price:1999
    },
    
]
const priceTopay=shoppingCart.reduce((acc, item)=>acc + item.price,0)
console.log(priceTopay);