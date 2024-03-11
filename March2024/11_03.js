// default 
// function add(a,b){

//     if(typeof b === "undefined"){
//         b=2;
//     }
//     return a+b;
// }
const add = (a,b=2) => {
    return a+b;
}
console.log(add(5))

// rest 
// const addNum = (val1,val2,...val3)=>{
//     console.log(val1)
//     console.log(val2)
//     console.log(val3)


// }
let total = 0
const addNum = (...numbers) => {
    for(let num of numbers){
        total = total + num;
    }
    return total;
}
console.log(addNum(5,2,6,4,56,6))

// para destructure
const myDetails ={
    name : "Rohit",
    age : 21,
    class : "TYBCS",
}
// const final = (obj) =>{
//     console.log(obj.name)
// }

const final =({name,age}) => {
    console.log(name)
}
final(myDetails)

// callback

const fun1 =(name) => {
    console.log("this is function 1")
    console.log(`my name is ${name}`)
}
const fun2 =(callback) =>{
    console.log("This is funtion 2")
    callback("Ram")
}
fun2(fun1)