

// function CreateUser(name,age,email){

//     this.name=name;
//     this.age=age;
// }

// CreateUser.prototype.is18=function(){
//     return this.age>=18
// }
// CreateUser.prototype.about=function(){
//     return `my name is ${this.name} & age is ${this.age}`
// }


// const user1 = new CreateUser("Rohit",22)
// console.log(user1.about())




//     CreateUser.prototype.is18=function(){
//         return this.age>=18
//     };
//     CreateUser.prototype.about=function(){
//         return `my name is ${this.name} & age is ${this.age}`
//     }


// function CreateUser(name,age,email){
//     const data = Object.create(CreateUser.prototype)
//     data.name=name;
//     data.age=age;

//     return data;
// }




// const user1 = new CreateUser("Rohit",22)
// console.log(user1.about())


// CreateUser.is18=function(){
//     return this.age>=18
// };
// CreateUser.about=function(){
//     return `my name is ${this.name} & age is ${this.age}`
// }


// function CreateUser(name,age,email){
// const data = Object.create(CreateUser)
// data.name=name;
// data.age=age;

// return data;
// }




// const user1 = new CreateUser("Rohit",22)
// console.log(user1.about())


CreateUser.is18=function(){
    return this.age>=18
};
CreateUser.about=function(){
    return `my name is ${this.name} & age is ${this.age}`
}


function CreateUser(name,age,email){
const data = Object.create(CreateUser)
data.name=name;
data.age=age;

return data;
}


const user1 =  CreateUser("Rohit",22)
console.log(user1.about())