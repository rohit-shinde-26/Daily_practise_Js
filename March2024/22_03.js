const numbers = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]*2)
// }

// const ans = numbers.forEach((number,index)=>{
//     console.log(`${number} and miltiply is ${number*2}`)
// })
// const finalAns =ans
// console.log(finalAns)

// const ans = numbers.map((number,index)=>{
//     return number*number
// })
// const finalAns = ans
// console.log(finalAns)

// const ans = numbers.filter((number,index)=>{
//     return number%2==0
// })
// console.log(ans)


const friends = [
    {fName : "Ram", lName : "Shinde", age : 21},
    {fName : "Abhi", lName : "Gunjal", age : 25},
    {fName : "Akshay", lName : "Rasne", age : 18},
    {fName : "Atharv", lName : "Varpe", age : 21},

]

// const ans = friends.forEach((data,index)=>{
//     console.log(data.fName.toUpperCase())
// })

// const ans = friends.map((data,index)=>{
//     return data.lName
// })
// console.log(ans)

const ans = friends.filter((data,index)=>{
    return data.age>20
})
console.log(ans)