

// function myInfo(){
//     console.log(`my name is ${this.name} & i m ${this.age} years old`)
// }


// const info={
//     name : "ram",
//     age : 22,
//     about : myInfo
// }

// const ans = info.about();

// call
// function myInfo(val1,val2){
//     console.log(`my name is ${this.name} & i m ${this.age} years old with intrested in ${val1} ${val2}`)
// }


// const info={
//     name : "ram",
//     age : 22,
   
// }

// // myInfo.call(info)

// // apply
// // myInfo.apply(info,["coding","Gaming"])

// // bind 
// const ans = myInfo.bind(info,"coding","Gaming")
// ans()


// const myFunc = {
//     name : "Ram",
//     age : 22,
//     about:function(){
//         console.log(`my name is ${this.name}`)
//     }
// }

// myFunc.about()

// const myFunc = {
//     name : "Ram",
//     age : 22,
//     about(){
//         console.log(`my name is ${this.name}`)
//     }
// }

// myFunc.about()


// function showRoom(carName,color,price){
//     const cars={}
//     cars.carName=carName;
//     cars.color=color;
//     cars.price=price;
//     cars.about=function(){
//         return `my car name is ${this.carName}`
//     }
//     return cars;

// }

// const cust1 = showRoom("Supra","Red","12000000")
// console.log(cust1.about())

// const details={
//     about : function(){
//         return `my car name is ${this.carName}`
//     }
// }


// function showRoom(carName,color,price){
//     const cars={}
//     cars.carName=carName;
//     cars.color=color;
//     cars.price=price;
//    cars.about=details.about
//     return cars;

// }

// const cust1 = showRoom("Supra","Red","12000000")
// console.log(cust1.about())



// const obj={
//     key1 : "val1",
//     key2 : "val2"
// }

// const obj2 = Object.create(obj)
// obj2.key3="val3"
// console.log(obj2.key3)


// const details={
//         about : function(){
//             return `my car name is ${this.carName}`
//         }
//     }
    
    
//     function showRoom(carName,color,price){
//         const cars=Object.create(details)
//         cars.carName=carName;
//         cars.color=color;
//         cars.price=price;
       
//         return cars;
    
//     }
    
//     const cust1 = showRoom("Supra","Red","12000000")
//     console.log(cust1.about())
    


// prototype
// function hello(){
//     console.log("hello world")
// }
// hello()

// hello.prototype.age=function(){
//     console.log("this is func")
// }

// hello.prototype.age()


    
    // function showRoom(carName,color,price){
    //     const cars=Object.create(showRoom.prototype)
    //     cars.carName=carName;
    //     cars.color=color;
    //     cars.price=price;
      
    //     return cars;
    
    // }
    // showRoom.prototype.myFav=function(){
    //     return `i love ${this.color}`
    // }
    
    // const cust1 = showRoom("Supra","Red","12000000")
    // console.log(cust1.myFav())
    

    
    function showRoom(carName,color,price){
        
        this.carName=carName;
        this.color=color;
        this.price=price;
      
        
    
    }
    showRoom.prototype.myFav=function(){
        return `i love ${this.color}`
    }
    
    const cust1 = new showRoom("Supra","Red","12000000")
    console.log(cust1.myFav())
    
