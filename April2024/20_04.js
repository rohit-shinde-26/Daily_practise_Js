  
// class showRoom{
//   constructor(cname,color,price){
//     this.cname=cname;
//     this.color=color;
//     this.price=price;

//   }
// favCar(){
//     return `my fav car is ${this.cname}`
// }



// }

// class Bikes extends showRoom{
//     constructor(cname,color,price,topSpeed){
//         super(cname,color,price);
//         this.topSpeed=topSpeed;
//     }
//     highSpeed(){
//         return `top speed of my fav bike is ${this.topSpeed}`
//     }
// }

// const user1 = new showRoom("Supra","red",122345);
// console.log(user1.favCar())

// const cust1 = new Bikes("H2o","Black",122345,380);
// console.log(cust1.highSpeed())



// class person{
//     constructor(fName,lName,age){
//         this.fName=fName;
//         this.lName=lName;
//         this.age=age;
//     }
//     get fullName(){
//         return `${this.fName} ${this.lName}`
//     }

//     set fullName(fullName){
//         const[fName,lName] = fullName.split(" ")
//         this.fName=fName;
//         this.lName=lName;
//     }
// }

// const user1 = new person("Rohit","Shinde",22)
// // console.log(user1.fullName)

// user1.fullName="Rohit Shinde"
// console.log(user1.fullName)


// closures

// function myFunc(){
//     let x = 22;
//     function innerFunc(){
//         console.log( `value of x is ${x}`)
//     }
//      return innerFunc
// }


// const ans = myFunc()
// ans()


function myFunc(){
    let count=0;
    return function(){
        // console.log( `${fName} ${lName}`)

        if(count<1){
            console.log("hello")
            count++
        }
        else{
            console.log("World")
        }
    }
     
}


const ans = myFunc()
ans()
ans()
