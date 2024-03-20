// Array
// const myArr = ["ram","Sham","Hari","Om"]
// myArr.push("Abhi")
// console.log(myArr)

// const[...newArr] =myArr;
// console.log(newArr)
// console.log(myArr===newArr)

// const favcar = ["Mustang Gt","Civic","Verna","Defender"]
// const showRoom =[]
// for(let i=0;i<favcar.length;i++){
//     showRoom.push(favcar[i].toUpperCase())
// }
// console.log(showRoom)


// let i = 0;
// const bikes = ["H2","Zx10R","Hayabusa","GT 650"]
// while(i<bikes.length){
//     console.log(bikes[i])
//     i++
// }
// for(let bike of bikes){
//     console.log(bike)
// }
// for(let bike in bikes){
//     console.log(`${bikes[bike]}`)
// }


// const [kawasaki, ,suzuki] = bikes;
// console.log(suzuki)

// objects
// const myObj = {
//     name : "Rohit",
//     age : 21,
//     "fav Car" : "GTR"
// }

// console.log(myObj.name)
// console.log(myObj["fav Car"])

// const myFav = {}

// let key1 = "Bike";
// let key2 = "car";

// let val1 = "Zx10R";
// let val2 = "Supra Mk4"

// myFav[key1]=val1
// myFav[key2]=val2
// console.log(myFav)

// const{...collection}=myFav
// console.log(collection)

const friends =[
    {id : 1 , name : "Ram",age: 20},
    {id : 2 , name : "Laxman",age: 18},
    {id : 3 , name : "Akay",age: 26},
    {id : 4 , name : "Aru",age: 25},

]
console.log(friends)
 const[{name},{age}]=friends;

 console.log(name,age)