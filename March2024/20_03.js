// Array
// const myArr = ["ram","Sham","Hari","Om"]
// myArr.push("Abhi")
// console.log(myArr)

// const[...newArr] =myArr;
// console.log(newArr)
// console.log(myArr===newArr)

// const favcar = ["Mustang Gt","Civic","Verna","Defender"]
// const showRoom =[]
// for(let i=0;i<favcar.length;i++){
//     showRoom.push(favcar[i].toUpperCase())
// }
// console.log(showRoom)


// let i = 0;
// const bikes = ["H2","Zx10R","Hayabusa","GT 650"]
// while(i<bikes.length){
//     console.log(bikes[i])
//     i++
// }
// for(let bike of bikes){
//     console.log(bike)
// }
// for(let bike in bikes){
//     console.log(`${bikes[bike]}`)
// }


// const [kawasaki, ,suzuki] = bikes;
// console.log(suzuki)

// objects
// const myObj = {
//     name : "Rohit",
//     age : 21,
//     "fav Car" : "GTR"
// }

// console.log(myObj.name)
// console.log(myObj["fav Car"])

// const myFav = {}

// let key1 = "Bike";
// let key2 = "car";

// let val1 = "Zx10R";
// let val2 = "Supra Mk4"

// myFav[key1]=val1
// myFav[key2]=val2
// console.log(myFav)

// const{...collection}=myFav
// console.log(collection)

// const friends =[
//     {id : 1 , name : "Ram",age: 20},
//     {id : 2 , name : "Laxman",age: 18},
//     {id : 3 , name : "Akay",age: 26},
//     {id : 4 , name : "Aru",age: 25},

// ]
// console.log(friends)
//  const[{name},{age}]=friends;

//  console.log(name,age)

 // functions 
//  sub(5,2)
//  function sub(no1,no2){
//     console.log(no1-no2)
//  }


// const multi = function(num1,num2){
//     return num1*num2
// }
// console.log(multi(5,4))

// const evenOdd = num => num%2==0;
// console.log(evenOdd(4))

// const main = () =>{
//     const multi = function(num1,num2){
//     return num1*num2
// }
// console.log(multi(5,4))

// }
// main()

// const Add = (a,b=2) => {
//     // if(typeof b === "undefined"){
//     //     b=2
//     // }
//     return a+b
// }
// console.log(Add(5))

// let total = 0
// const addAll =(...numbers)=>{
//    for(let num of numbers){
//     total = total + num
//    }
// }
// console.log(addAll(5,2,6,5,6,4,5,2,56,5,52,565,52,4))
// console.log(total)

// para destructuring
const cars ={
    name : "supra mk4",
    color : "White"
}
// const details = (obj) =>{
//     console.log(obj.name)
// }
const details = ({name,color}) => {
    console.log(color)
}
details(cars)

// callback 

const func1 =(name)=>{
    console.log("this is func1")
    console.log(`${name}`)
}
const func2 =(callback) => {
    console.log("this is func 2")
    callback("Ram")
}
func2(func1)