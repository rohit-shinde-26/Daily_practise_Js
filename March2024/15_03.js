// default para 
// works only second value 
// function add(a,b){
//     if(typeof b === "undefined"){
//         b = 2;
//     }
//     return a+b;
// }
// const ans = add(5)
// console.log(ans)

// function add(a,b=2){
//     return a+b;
// }
// const ans = add(5)
// console.log(ans)

// Rest parameter 
// const normalFun = (a,b,...c) => {
//     console.log(`value of a is ${a}`)
//     console.log(`value of b is ${b}`)
//     console.log(`value of c is ${c}`)

// }
// normalFun(5,6,4,3,8,5,3)

// const restFun = (...number) => {
//     console.log(`${number}`)
// }
// restFun(5,6,9,8,7,1,2,3)

// parameter destructuring 
const myObj={
    name : "Rohit",
    age : 21,
    core : "Javascript"
}
// const myInfo = (object) => {
//     console.log(object.name)
// }
const myInfo = ({name,age}) => {
    console.log(name)
}

myInfo(myObj)

// callback functions 
const myFun1 = (age) => {
    console.log(`my age is ${age}`)

}
const myFun2 = (callback) => {
    console.log(`Here is the fun 2`)
    callback(21)
}
myFun2(myFun1)