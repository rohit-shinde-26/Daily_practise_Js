// sets
// const numbers = new Set([1,2,3,4,5,5]) // duplicate not allow
// console.log(numbers)

// index based not accessed
// console.log(numbers[0])

// const numbers = new Set() 
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// numbers.add(7)
// const items = ["ram","sham"]
// numbers.add(items)
// numbers.add("Hello")


// for(let number of numbers){
//     console.log(number)
// }

// if(numbers.has(1)){
//     console.log(" 1 is present")
// }
// else{
//     console.log("not present")
// }
// console.log(numbers)


// you can use this for unique ids

// const myArr = [2,5,4,5,8,2,6]
// const ans = new Set(myArr);
// let length = 0
// for(let arr of ans){
//     console.log(arr)
//     length++
// }

// console.log(`length is ${length}`)


// Map object
// it store key value pair 

// object literel 
// key -> String
// key -> symbol 
// const person = {
//     firstName : "Rohit",
//     age : 22,
//     1 : "one"
// }
// console.log(person.firstName)
// console.log(person["firstName"])

// for(let key in person){
//     console.log(typeof key)
// }

// it also store key value pair
// we add for in loop to object but using map we directly use for of loop

// const person = new Map();
// person.set("firstName","Rohit")
// person.set("age",22)
// person.set(1,"one")

// console.log(person)

// for(let [key,value] of person){
//     console.log( key,typeof key)
// }

// const person = new Map([["firstName","Rohit"],["age",22]])
// console.log(person)

// const person1 = {
//     firstName : "Abhi",
//     age : 18
// }
// const extraInfo = new Map()
// extraInfo.set(person1,{gender : "male"})
// console.log(person1.age)

// console.log(extraInfo.get(person1))
// console.log(extraInfo)

// clone object using onject assign 
const obj = {
    firstName : "Rohit",
    age : 21
}

// const obj2 = obj;
// obj2.key= "private";
// console.log(obj)


// const obj2 = Object.assign({},obj)
// const obj2 = {...obj}
// console.log(obj === obj2)
// console.log(obj2)

// object chaining 
const person = {
    name : "Rohit",
    // info: {address : "sangamner"}
}
console.log(person.name)
console.log(person?.info?.address)