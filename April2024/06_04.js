
// const obj={
//     name: "Rohit",
//     age : 21,
//     about : function(){
//         console.log(`i am ${this.name} & i am ${this.age} years old`)
//     }
// }
// obj.about()

// const obj={
//     name: "Rohit",
//     age : 21,
//     about : function(){
//         console.log(`i am ${this.name} & i am ${this.age} years old`)
//     }
// }
// obj.about.call(obj)


//  function myFunc(){
//     console.log(`i am ${this.name} & i am ${this.age} years old`)
// }

// const obj={
//     name: "Rohit",
//     age : 21,
//     about : myFunc 
// }
// const obj2={
//     name: "Ram",
//     age : 21,
    
// }
// obj.about.call(obj2)

// function myFunc(val1,val2){
//     console.log( `i am ${this.name} & i am ${this.age} years old also i am intrested in ${val1} & ${val2}`)
// }

// const obj={
//     name: "Rohit",
//     age : 21,
//     about : myFunc 
// }
// const obj2={
//     name: "Ram",
//     age : 21,
    
// }
// // obj.about.apply(obj2,["Gaming","Coding"])
// const ans = myFunc.bind(obj2,"Gaming","Coding")
// ans()


// function myFunc(name,age,email){
//     const myObj = {}
//     myObj.name=name;
//     myObj.age=age;
//     myObj.email=email;
//     myObj.about=function(){
//         return `my name is ${this.name} and age is ${this.age}`
//     }


//     return myObj;
//     }

//     const user1 = myFunc("Rohit",22,"rohit@22")
//     console.log(user1.about())


// const info={
//    about : function(){
//         return `my name is ${this.name} and age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age>=18
//     }
// }
    
// function myFunc(name,age,email){
//     const myObj = {}
//     myObj.name=name;
//     myObj.age=age;
//     myObj.email=email;
//     myObj.about=info.about
//     myObj.is18=info.is18



//     return myObj;
//     }

//     const user1 = myFunc("Rohit",22,"rohit@22")
//     console.log(user1)
//     console.log(user1.about())
//     console.log(user1.is18())


    // const info={
    //     about : function(){
    //          return `my name is ${this.name} and age is ${this.age}`
    //      },
    //      is18 : function(){
    //          return this.age>=18
    //      }
    //  }
         
    //  function myFunc(name,age,email){
    //      const myObj = Object.create(info)
    //      myObj.name=name;
    //      myObj.age=age;
    //      myObj.email=email;
         
     
     
     
    //      return myObj;
    //      }
     
    //      const user1 = myFunc("Rohit",22,"rohit@22")
    //      console.log(user1)
    //      console.log(user1.about())
    //      console.log(user1.is18())
     


    // __proto__
    const obj1 ={
        key1 : "val1",
        key2 : "val2"
    }
    const obj2 = Object.create(obj1)
        obj2.key3 = "val3"
    
    console.log(obj2.key1)
