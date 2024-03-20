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


let i = 0;
const bikes = ["H2","Zx10R","Hayabusa","GT 650"]
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


const [kawasaki, ,suzuki] = bikes;
console.log(suzuki)