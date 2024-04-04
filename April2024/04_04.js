// const obj1 = {
//     name : "Rohit",
//     age : 21,
//     about : function(){
//         console.log(`i am ${this.name} and my age is ${this.age}`)
//     }
// }

// obj1.about()

// console.log(this)

// function myFunc(val1,val2){
//     console.log(`name is ${this.name} and age is ${this.age} also i am ${val1} and ${val2}`)
// }

// const user1 = {
//     name : "Ram",
//     age : 22,
//     about : myFunc
// }

// const user2 = {
//     name : "Rohit",
//     age : 22,
   
// }
// myFunc.call(user2)
// myFunc.apply(user2,["Developer","Gamer"])

// const ans = myFunc.bind(user2,"Developer","Gamer")
// ans()

// this was not use in arrow func bcz arrow func takes this from surrounding


// const obj = {
//     name : "Rohit",
//     age : 21,
//     about(){
//         console.log(`my name is ${this.name} & age is ${this.age}`)
//     }
// }

// obj.about()


function container(name,age,email){
    let user = {}
    user.name=name;
    user.age = age;
    user.email = email
    user.is18 = function(){
        return this.age>=18;
    }
    user.about = function(){
        return `my name is ${this.name} & age is ${this.age}`
    }
    return user;
}
const ans = container("Rohit",22,"rohit@gmail.com")
console.log(ans)
const is18 = ans.is18()
console.log(is18)
const about = ans.about()
console.log(about)