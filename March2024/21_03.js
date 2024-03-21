// for each

// const myArr =[2,4,6,8,10]

// const myAns =(number,index)=>{
//     console.log(`no is ${number} and index is ${index}`)
// }

// for(let i=0;i<myArr.length;i++){
//     myAns(myArr[i],i)
// }

// myArr.forEach((num,index)=>{
//     console.log(num,index)
// })

// for(let num of myArr){
//     console.log(num)
// }

// const friends = [
//     {name: "Ram", age:21},
//     {name: "Abhi", age:20}
// ]

// friends.forEach((friend,age)=>{
//     console.log(friend.name)
// })
// for(let friend of friends){
//     console.log(friend.name)
// }

// const numbers = [1,5,6,2,8,4,6,10]
// const square = function(number){
//     return number*number
// }

// const square = numbers.map((number,index)=>{
//     return number*number
// })
// const ans = square
// console.log(square)


// const friends = [
//     {name: "Ram", age:21},
//     {name: "Abhi", age:20}
// ]
// const list = friends.map((data)=>{
//     return data.name
// })
// const finalData = list
// console.log(finalData)

const numbers = [1,8,9,3,2,6,4,7,81]
const evenOdd = numbers.filter((num)=>{
    return num%2===0
})
const ans = evenOdd
console.log(ans)