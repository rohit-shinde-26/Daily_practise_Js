// function createUser(name,age,email){
//     const user ={}
//     user.name=name;
//     user.age=age;
//     user.email=email;
//     user.is18=function(){
//         return this.age>=18
//     }
//     return user


// }

// const user1 = createUser("Ram",22,"ram@gmail.com")
// console.log(user1.is18())

// const data ={}
//     data.is18 = function(){
//         return this.age>=18
//     }



// function createUser(name,age,email){
//     const user ={}
//     user.name=name;
//     user.age=age;
//     user.email=email;
//     user.is18=data.is18;
//     return user


// }

// const user1 = createUser("Ram",22,"ram@gmail.com")
// console.log(user1.is18())



// function createUser(val1,val2){
//     const user ={
//         name : "ram",
//         age : 22
//     }

//     user.about = function(){
//         return `my name is ${this.name} & age is ${this.age} i am intrested in ${val1} & ${val2}`
//     }
//     return user

  
// }

// createUser.call(createUser,"Gaming","Coding")


// function info(val1,val2){
//     console.log(`my name is ${this.name} ${val1} & ${val2}`)
// }

// const data={
//     name: "Rohit",
//     age : 22,
    
// }
// const data2={
//     name: "Ram",
//     age : 22,
    
// }
// // data.about.call(data2)
// // data.about.apply(data2,["Gaming","Coding"])

// const ans = info.bind(data2,"Gaming","Coding")
// ans()

// function createUser(name,age,email){
//     const user={}
//     user.name=name;
//     user.age=age;
//     user.email=email;

//     user.about=function(){
//         return `my name is ${this.name}`
//     };
//     user.is18=function(){
//         return this.age>=18
//     }
//     return user;
// }

// const user1 = createUser("Rohit",22,"rohit@22")
// console.log(user1)


// const data = {
//     about : function(){
//         return `my name is ${this.name}`
//     },
//     is18 : function(){
//         return this.age>=18
//     }
// }


// function createUser(name,age,email){
//     const user={}
//     user.name=name;
//     user.age=age;
//     user.email=email;
//     user.about=data.about

  
//     return user;
// }

// const user1 = createUser("Rohit",22,"rohit@22")
// console.log(user1.about())


// __proto__

// const obj = {
//     key1 : "val1",
//     key2 : "val2"
// }
// const obj2 = Object.create(obj)
// obj2.key3 = "val3"
// console.log(obj2.key2)


// const data = {
//     about : function(){
//         return `my name is ${this.name}`
//     },
//     is18 : function(){
//         return this.age>=18
//     }
// }


// function createUser(name,age,email){
//     const user=Object.create(data)
//     user.name=name;
//     user.age=age;
//     user.email=email;
    

  
//     return user;
// }

// const user1 = createUser("Rohit",22,"rohit@22")
// console.log(user1.about())


// prototype 
// function info(){
//     console.log("hello")
// }
// console.log(info.name)
// info()

// info.prototype.age = 22
// console.log(info.prototype.age)



// const data = {
//     about : function(){
//         return `my name is ${this.name}`
//     },
//     is18 : function(){
//         return this.age>=18
//     }
// }


function createUser(name,age,email){
   
    this.name=name;
    this.age=age;
    this.email=email;
    

  
    
}
createUser.prototype.about=function(){    
        return `my name is ${this.name}`
}

const user1 = new createUser("Rohit",22,"rohit@22")
console.log(user1.about())

for(let key in user1){
    // console.log(key)
    if(user1.hasOwnProperty(key1)){
        console.log(key)
    }
}