// iterables 
// iterables are the type in that length property was used also for loop


// sets 
// const person = new Set("abc")
// console.log(person)

// const data = new Set()
// data.add(4)
// data.add(3)
// data.add(["ram","sham"])

// console.log(data)

// for(let key of data){
//     console.log(key, typeof key)
// }


// map 
// const person1 = {
//     firstName : "rohit",
//     age : 22,
//     1 : "hello"
// }
// const info = new Map([["firstName","Ram"],["Age",22],[1,"hello"]])
// console.log(info)

// for(let [key,val] of info){
//     console.log(key,typeof key)
// }

// const data = new Map();
// data.set(person1)

// console.log(person1)
// console.log(data.set(person1,{gmail : "ram@123"}))
// console.log(data.get(person1).gmail)

// object assign
// const person = {
//     name : "ram",
//     age : 22
// }
// const info = Object.assign({},person)
// const info = {...person}
// console.log(info)

// console.log(person===info)

// optional chaining 

// const data = {
//     firstName : "ram",
//     // address : { one : "hello"}
// }

// // console.log(data.firstName)
// console.log(data?.address?.one)


// const person = {
//     name : "Rohit",
//     // info: {address : "sangamner"}
// }
// console.log(person.name)
// console.log(person?.info?.address)


// METHODS 
// console.log(this)
// "use Strict"
function myFunc(val1,val2){
    console.log(`name is ${this.firstName} and age is ${this.age} ${val1} ${val2}`)
}
const person1 = {
    firstName : "Ram",
    age : 22,
    about : myFunc
}
const person2 = {
    firstName : "Akash",
    age : 20,
  
}

// person1.about.call(person2)

myFunc.apply(person2,["coding","Teaching"])

const hello = myFunc.bind(person2,"coding","singing")
hello()
