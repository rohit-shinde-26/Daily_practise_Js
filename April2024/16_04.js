// let myStr = "Hello"
// console.log(myStr[2])

// let i=0;
// while(i<10){
//     console.log(i)
//     i++;
// }

// Array
// const myArr = ["Ram","Sham","Hari"]
// myArr.push("Om")
// myArr.unshift("Abhi")
// myArr.pop()
// myArr.shift()

// console.log(myArr)

// const [...newArr]=myArr;
// console.log(newArr)

// for(let i=0;i<newArr.length;i++){
//     console.log(newArr[i].toLowerCase())
// }

// for(let arr of newArr){
//     console.log(arr)
// }

// for(let arr in newArr){
//     console.log(newArr[arr])
// }

// const[val1,val2,...other]=myArr;
// console.log(other)


// ========================= Objects in Js ====================================== 
// const info ={
//     name : "Rohit",
//     age : 22,
//    "my email" : "rohit@gmail.com"
// }

// console.log(info["my email"])

// for(let data in info){
//     console.log(info[data])
// }

// for(let data of Object.keys(info)){
//     console.log(data)
// }


// let key1 = "val1"

// const obj={};

// obj[key1]="val1"

// console.log(obj)

// const myObj={
//     name : "Ram",
//     age : 22,
//     email : "hello!@23"
// }

// const{name,...other}=myObj;

// console.log(other)

// const other = Object.assign(myObj)
// console.log(other)


// ============================= Functions ===================================== 
// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(2,5)

// const multi = function(no1,no2){
//     console.log(no1*no2)
// }
// multi(6,5)

// const evenOdd = num => num%2===0;
// console.log(evenOdd(4))

// function apk(){
//     const add = (num1,num2) => {
//         console.log(num1+num2)
//     }
//     add(5,4)

//     const sub = (num1,num2) => {
//         console.log(num1-num2)
//     }
//     sub(5,4)
// }

// apk()


// const myFunc = (a,b=5) =>{
//     // if(typeof b === "undefined"){
//     //     b=5;
//     // }
//     return a+b;
// }
// console.log(myFunc(5))

// const addAll = (...nums) => {
//     let total = 0;
//     for(let num of nums)(
        
//         total = total + num
//     )
//     return total
// }
// const ans = addAll(1,5,8,9,6,3,2,1,74,65)
// console.log(ans)


// const myInfo={
//     name : "Ram",
//     age : 22,
//     email : "rohit@35"
// }

// function detail({name,age,email}){
//     console.log(name)
// }
//  detail(myInfo)


function myFunc(name){
    console.log("this is myFunc")
    console.log(`i am ${name}`)
}

function myFunc1(callback){
    console.log("this is myFunc1")
    callback("Ram")
}
myFunc1(myFunc)