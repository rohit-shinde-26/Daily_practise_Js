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


function info(val1,val2){
    console.log(`my name is ${this.name} ${val1} & ${val2}`)
}

const data={
    name: "Rohit",
    age : 22,
    
}
const data2={
    name: "Ram",
    age : 22,
    
}
// data.about.call(data2)
// data.about.apply(data2,["Gaming","Coding"])

const ans = info.bind(data2,"Gaming","Coding")
ans()