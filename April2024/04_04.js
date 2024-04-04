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


// function container(name,age,email){
//     let user = {}
//     user.name=name;
//     user.age = age;
//     user.email = email
//     user.is18 = function(){
//         return this.age>=18;
//     }
//     user.about = function(){
//         return `my name is ${this.name} & age is ${this.age}`
//     }
//     return user;
// }
// const ans = container("Rohit",22,"rohit@gmail.com")
// console.log(ans)
// const is18 = ans.is18()
// console.log(is18)
// const about = ans.about()
// console.log(about)

// const obj={
//     about: function(){
//         console.log(`i am ${this.name} ans age is ${this.age}`)
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }


// function container(name,subject,no){
//     let user={};
//     user.name = name;
//     user.subject = subject;
//     user.no = no;
//     user.about = obj.about;
//     user.is18 = obj.is18;


//     return user;
// }
// const user1 = container("Rohit","Sanskrit",1)
// const user2 = container('Ram',"English",6);
// const user3 = container('Akshay',"Marathi",3);
// console.log(user2.about())
// console.log(user1.is18())


const obj1 = {
    key1 : "val1",
    key2 : "val2"
}
const obj2 = Object.create(obj1)
   obj2. key3 = "val3"

   console.log(obj2.__proto__)




// const obj={
//     about: function(){
//         return `i am ${this.name} ans age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }


// function container(name,subject,no){

//     let user= Object.create(obj);
//     user.name = name;
//     user.subject = subject;
//     user.no = no;
    

//     return user;
// }
// const user1 = container("Rohit","Sanskrit",1)
// const user2 = container('Ram',"English",6);
// const user3 = container('Akshay',"Marathi",3);
// console.log(user2.about())
// console.log(user1.is18())