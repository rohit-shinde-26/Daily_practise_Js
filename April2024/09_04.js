

// function details(val1,val2){
//     console.log(`${this.name} ${this.age} ${val1} ${val2}`)
// }



// const person1={
//     name : "Rohit",
//     age : 22
// }
// const person2={
//     name : "Ram",
//     age : 21
// }

// details.call(person1)
// details.apply(person2,["Gaming","Coding"])

// const user1 = details.bind(person2,"Gaming","Coding")
// user1()



// function createUser(name,age,email){
//     const obj = {}
//     obj.name=name;
//     obj.age=age;
//     obj.email=email;
//     obj.about=function(){
//         return `hello i am ${this.name}`
//     }
//     return obj;
// }

// const user1 = createUser("Rohit",22,"rohit@123")
// console.log(user1.about())

// const myobj={
//     about : function(){
//         return `hello i am ${this.name}`
//     }
// }

// function createUser(name,age,email){
//     const obj = Object.create(myobj)
//     obj.name=name;
//     obj.age=age;
//     obj.email=email;
//     // obj.about=myobj.about;
//     return obj;
// }

// const user1 = createUser("Rohit",22,"rohit@123")
// console.log(user1.about())



//      createUser.prototype.about=function(){
//         return `hello i am ${this.name}`
//     }


// function createUser(name,age,email){
//     const obj = Object.create(createUser.prototype)
//     obj.name=name;
//     obj.age=age;
//     obj.email=email;
//     // obj.about=myobj.about;
//     return obj;
// }

// const user1 = createUser("Rohit",22,"rohit@123")
// console.log(user1.about())


// createUser.prototype.about=function(){
//     return `hello i am ${this.name}`
// }


// function createUser(name,age,email){

// this.name=name;
// this.age=age;
// this.email=email;

// }

// const user1 = new createUser("Rohit",22,"rohit@123")
// console.log(user1.about())





class createUser{
constructor (name,age,email){

this.name=name;
this.age=age;
this.email=email;

}
about(){
    return `hello i am ${this.name}`
}

}
class car extends createUser{
    constructor(name,age,email,colour){
        super(name,age,email)
        this.colour=colour;
    }
    speed(){
        return `i am fastest car with colour ${this.colour}`
    }
}
const user1 = new createUser("Rohit",22,"rohit@123")
console.log(user1.about())

const car1 = new car("Supra",22,"rohit@123","red")
console.log(car1.speed());