

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


// const user1 =  CreateUser("Rohit",22)
// console.log(user1.about())

// const obj2={
//     about:function(){
//         return `my name is ${this.name}`
//     }
// }

// function CreateUser(name,age,email){
// const obj1 = Object.create(obj2)
//     obj1.name=name;
//     obj1.age=age;
//     obj1.email=email;

//     return obj1;
// }

// const user1 = CreateUser("Rohit",22,"rohit@123")
// console.log(user1.about())



// function CreateUser(name,age,email){
// const obj1 = Object.create(CreateUser.prototype)
//     obj1.name=name;
//     obj1.age=age;
//     obj1.email=email;

//     return obj1;
// }

// CreateUser.prototype.about=function(){
//     return `my name is ${this.name}`
// }

// const user1 = CreateUser("Rohit",22,"rohit@123")
// console.log(user1.about())

// use new


// function CreateUser(name,age,email){
    
//         this.name=name;
//         this.age=age;
//         this.email=email;
    
        
//     }
    
//     CreateUser.prototype.about=function(){
//         return `my name is ${this.name}`
//     }
    
//     const user1 = new CreateUser("Rohit",22,"rohit@123")
//     console.log(user1.about())

// constructor 
// class CreateUser{

// constructor (name,age,email){
    
//     this.name=name;
//     this.age=age;
//     this.email=email;

    
// }

// about=function(){
//     return `my name is ${this.name}`
// }


// }
// class person extends CreateUser{
//     constructor(name,age,email,speed){
//         super(name,age,email)
//         this.speed=speed
//     }
// mySpeed(){
//     return `typing speed is ${this.speed} letter/M`
// }
// }

// const user1 = new CreateUser("Rohit",22,"rohit@123")
// console.log(user1.about())
// const person1 = new person("Abhi",23,"abhay@123",23)
// console.log(person1.mySpeed())



class person{
    constructor(fName,lName,age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    get fullName(){
        return `${this.fName} ${this.lName}`
    }
    set fullName(fullName){
        const[fName,lName] = fullName.split(" ")
        this.fName=fName;
        this.lName=lName;
    }
}

const person1 = new person("ram","shinde",8)
console.log(person1.fullName)