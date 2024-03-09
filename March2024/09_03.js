// functions 
const container = () =>{
    const myfun1 =(str) =>{
        console.log(str[0])
    }
    myfun1("Ram")

}
container()

// default parameter 
function add(a,b){
    if(typeof b === "undefined"){
        b=2
    }
    return a+b
}
console.log(add(2))

// rest
// function restPara(a,b,c){
    // console.log(`${a}`)

// }

 function restPara(...numbers){
    let total = 0;
    for(let num of numbers){
        total = total+num;
    }
    return total;

 }
console.log(restPara(6,45,6,21,2,5,5,2,45))

// para destructuring

const myData ={
    name : "Rohit",
    age : 22,
    city : "Sangamner"
}

// function printData(obj){
//     console.log(obj.name)
// }
function printData({name,age,city}){
    console.log(name)
    console.log(city)
}
printData(myData);