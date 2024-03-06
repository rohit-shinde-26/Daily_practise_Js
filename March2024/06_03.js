// functions 
// function declarations 
// function isEven(){
//     return "Hello World"
// }
// console.log(isEven())

// Function expression 
// const addition = function(num1,num2){
//     return num1+num2;
// }
// console.log(addition(5,4))


// arrow funtion
// const strIndex = str => str[0];
// console.log(strIndex("Ram"))

// hoisted function declaration 
// console.log(isEven())
// function isEven(){
//     return "Hello World"
// }



// lexical scope 
const container =()=>{
    var myName = "Ram"
    const myStack1 = () =>{
        // let myName = "Rohit"
        console.log(myName)
    }
    const myStack2 = () =>{
        let lastName = "Shinde";
        console.log(lastName)
    }
    myStack2()
    myStack1()
}
container()

// default parameter
// take default value 0
// const mul =(a,b)=>{
//     if(typeof b === "undefined"){
//         b = 3;
//     }
//     return a*b;
// }
// console.log(mul(2))

// easiest way 
const mul= (a,b=3)=>{
    return a*b ;
}
console.log(mul(2))