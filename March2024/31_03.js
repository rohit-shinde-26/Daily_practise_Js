// console.log("Hello")
// var name = "Rohit"
// let age = 21
// console.log(name[0])
// console.log(name)
// console.log(`my name is ${name} and age is ${age}`)

// let a ;
// let b = null

// console.log(typeof )

// let age = 21;
// age > 20 ? console.log("greater") : console.log("Less")

// let a = 1
// if(a){
//     console.log("truthy")
// }
// else{
//     console.log("falsy")
// }

// let age = 22
// if(age>0 && age<15){
//     console.log("Children")
// }
// else if(age>15 && age < 35){
//     console.log("Young")
// }
// else{
//     console.log("old")
// }

// let a = String( prompt("Guess the day"))

// switch(a){
//     case "Monday":
//         console.log("its Monday")
//     break;

//     case "Sunday" :
//         console.log("Its sunday")

//     default:
//         console.log("ends here")
// }

// let count = 0
// let i = 0;
// while(i<10){
//     console.log(i)
//     i++
//     count = count + i
// }
// console.log(count)

// for(let i=0;i<=10;i++){
//     console.log(i)
//     if(i===6){
//         continue;
//     }
    
    
// }

// const arr = [2,5,6,8,4,6,9]
// const[...newArr]=arr
// console.log(newArr===arr)
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(let num of arr){
//     console.log(num)
// }
// for(let num in arr){
//     console.log(`${num} : ${arr[num]}`)
// }

// const [val1, ,val2,...all]=arr
// console.log(val2)

// const myObj = {
//     name : "Rohit",
//     age : 21,
//    "email" : "rohit@google.com",
// }

// console.log(myObj["email"])

// for(let item in myObj){
//     console.log(myObj[item])
// }

// let key1 = "name";
// let key2 = "age"

// let val1 = "Ram"
// let val2 = 21

// const newObj={
//    [key2] : val2
// };

// newObj[key1]=val1


// console.log(newObj)

//  const {...newObj}=myObj
//  console.log(newObj)

// const{name,age,email}=myObj
// console.log(name)



// const arr = [
//     {name : "ram", age : 22, salary : 300000},
//     {name : "sham", age : 21, salary : 25000},
//     {name : "hari", age : 18, salary : 460000},
//     {name : "om", age : 20, salary : 90000},
// ]
// const[{name,age},{},{salary}]=arr
// console.log(name)


// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(2,5)

// const sub = function(no1,no2){
//     console.log(no1-no2)
// }
// sub(6,5)

// const str = data => data%2==0
// console.log(str(4))

// mult(6,5)
// function mult(no1,no2){
//     console.log(no1*no2)
// }

// const container = () =>{
//     const myFunc = () =>{
//         console.log("hello")
//     }
//     myFunc()
//     const newFunc = () =>{
//         console.log("Ram")
//     }
//     newFunc()
// }
// // container()

// const myFunc = (a,b=2)=>{
//     // if(typeof b ==="undefined"){
//     //     b=2
//     // }
//     return a+b
// }
// console.log(myFunc(5))


// function func(...nums){
//     let total = 0
//     for(let num of nums){
//     total = total + num
//     }
//     return total
// }
// const ans = func(2,6,5,4,7,8,5,2)
// console.log(ans)



const myObj = {
    name : "Rohit",
    age : 21,
   "email" : "rohit@google.com",
}

// const myFunc = (obj)=>{
//     console.log(obj.name)
// }



// myFunc(myObj)

// const newFunc = ({name,age})=>{
//     console.log(name)
// }
// newFunc(myObj)

// const myFunc =(name)=>{
//     console.log("This is first function")
//     console.log(`hello ${name}`)
// }
// const myFunc2 = (callback) =>{
//     console.log("This is 2nd fun")
//     callback("Ram")
// }

// myFunc2(myFunc)



// ------------------------------------------------------------------
// const arr = [2,6,45,8,5,2]
// const myArr = ["Bmw","TATA","Toyota"]
// arr.forEach((number,index)=>{
//     console.log(number*number)
// })

// const ans = arr.map((num,index)=>{
//     return num*num
// })
// console.log(ans)

// const ans = arr.filter((num)=>{
//     return num%2===0
// })
// console.log(ans)

// const ans = arr.reduce((accumulator,total)=>{
//     return accumulator+total
// })
// console.log(ans)

// const ans = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(ans)

// const ans = myArr.find((data)=>{
//     return data.length==3
// })
// console.log(ans)

// const ans = arr.every((data)=>{
//     return data%2==0
// })
// console.log(ans)

// const ans = arr.some((data)=>{
//     return data%2==0
// })
// console.log(ans)

// arr.fill(0,2,5)
// arr.splice(0,3,90)
// console.log(arr)


const showRoom =[
    {id : 1, name : "mustang", color : "red", price : 500},
    {id : 2, name : "Lambo", color : "Yellow", price : 5000},
    {id : 3, name : "Supra", color : "White", price : 5070},
    {id : 4, name : "polo GT", color : "Blue", price : 600},
    {id : 5, name : "Virtus", color : "Silver", price : 900},
    {id : 6, name : "City", color : "Black", price : 1},

]

// showRoom.forEach((data,index)=>{
//     console.log(`${index} : ${data.price}`)
// })

// const ans = showRoom.map((data,index)=>{
//     return data.price>2000
// })
// console.log(ans)

// const ans = showRoom.filter((data)=>{
//     return data.price%2==0
// })
// console.log(ans)

// const ans = showRoom.reduce((data,total)=>{
//     return data+total.price
// },0)
// console.log(ans)

// const ans = showRoom.slice(0).sort((a,b)=>{
//     return b.price-a.price
// })
// console.log(ans)

// const ans = showRoom.slice(0).sort((a,b)=>{
//     if(a.name<b.name){
//         return 1
//     }else{
//         return 0
//     }
// })
// console.log(ans)

// const ans = showRoom.find((data)=>{
//     return data.name=="Supra"
// })
// console.log(ans)

//ITERABLES
// let str = "Rohit"
// console.log(str[0])

// const arr = ["name","age"]
// let length = 0
// for(let ele of arr){
//     length++
// }
// console.log(length)

// sets 
// const arr = new Set();
// arr.add(5)
// arr.add(2)
// arr.add(8)
// arr.add(3)
// arr.add(9)
// arr.add(1)
// console.log(arr)

// const myArr = [45,69,22,54,14,63,87]
// const ans = new Set(myArr)
// let length = 0
// for(let ele of myArr){
//     length++
// }
// console.log(length)

// map 
// add key value pair 
// const person = new Map()
// person.set('firstname','Rohit')
// person.set('age',21)
// person.set('email','rohit@google.com')
// console.log(person)
// how to access 
// console.log(person.get('firstname'))
// for(let [key,value] of person){
//     console.log(`${key} : ${value}`)
// }

const person1 ={
    id:1,
    name : "Ram"
}
const userInfo = new Map()
userInfo.set(person1,{age:21,gender: "male"})
console.log(userInfo)

// const person = new Map([['firstname','Rohit'],['age',21]])