// console.log("jay shree ram")
// var a = 90;
// var name = "ram";
// let myName = "Rohit";
// const email = "rohitshinde@gmail.com";
// console.log(name[0])
// console.log(email.charAt(2))
// console.log(email.indexOf("@"))
// console.log(`my name is ${name} and email is ${email}`)

// let a = 0;
// let ans = a ? "true value" : "falsy value";
// console.log(ans)

// let winningNum = 20;
// let userGuess = +prompt("Guess the number");
// if(winningNum === userGuess){
//     console.log("Congratulations you are win the game")
// }
// else{
//     if(userGuess < winningNum){
//         console.log("you are thinking less")
//     }else{
//         console.log("you are thinking high")
//     }
// }

// let day = 2;
// switch(day){
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("wednesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;

//         case 4:
//             console.log("Friday");
//             break;
//     default :
//         console.log("Invalid format");
//         break;
// }

// let i = 0;
// let total = 0;
// while(i<10){
//     console.log(i)
//     total = total + i;
//     i++;
// }
// console.log(total)

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//         console.log(i)
//         if(i == 5){
//             break;
//         }
//         else{
            
//         }
//      }


const myArr = ["ram","sham","abhi","raj"]
// myArr.push("Akash")
// myArr.unshift("Avni")
// console.log(myArr);

// const cloneArr = [...myArr];
// console.log(myArr === cloneArr);

// const arr1 = ["TATA","AUDI","BMW","VOLVO"];
// let [val1, ,val2,...otherVal] = arr1;
// console.log(val2)


// const theArr =[];
// for(let i=0;i<myArr.length;i++){
//     theArr.push(myArr[i].toUpperCase())
// }
// console.log(theArr);

// for(let val of myArr){
//     console.log(val)
// }
// for(let val in myArr){
//     console.log(myArr[val])
// }

// const myObj={
//     name : "Rohit",
//     age:20,
//     intrest : "coading",
// }
// console.log(myObj);

// console.log(myObj.name)
// console.log(myObj["intrest"])


// let favCar ={
//     name : "Supra mk4",
//     color : "white",
//     exhaust : "yes",
//     type : "sport"
// }
// console.log(favCar);
// for(let car in favCar){
//     console.log(`${car} : ${favCar[car]}`)
// }

// let key1 = "name";
// let key2 = "color";

// let val1 = "Supra mk4";
// let val2 = "White";

// const mycar = {};
// mycar[key1]=val1;
// mycar[key2] = val2;

// // const newCar = {...mycar}
// const{name,color}=mycar
// console.log(color)


// const showRoom = [
//     {comp : "hyundai",name:"verna","color": "white"},
//     {comp : "TATA",name:"Harrier","color": "red"},
//     {comp : "Honda",name:"city","color": "black"},
//     {comp : "kawasaki",name:"zx10r","color": "green"},
//     {comp : "wolksvagon",name:"polo","color": "blue"},

// ]
// console.log(showRoom)
// const[{comp}, ,{name}]=showRoom
// console.log(name)

// function add(num1,num2){
//     return num1+num2;
// }
// const add = function(num1,num2){
//     return num1+num2;
// }
const add = (num1,num2)=>{
    return num1+num2;
}
console.log(add(2,4))

const isEven = number => number %2==0;
console.log(isEven(4))