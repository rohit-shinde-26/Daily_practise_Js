const myArr = [2,6,4,85,2,63,58,12]
// myArr.forEach((val,index)=>{
//     console.log(`index ${index} value is ${val}`)
// })

// const ans = myArr.map((number)=>{
//     return number * number;
// })
// console.log(ans)

// const ans = myArr.filter((num)=>{
//     return num%2==0
// })
// console.log(ans)

// const ans = myArr.reduce((accumulator,total)=>{
//     return accumulator + total
// })
// console.log(ans)

// const ans = myArr.sort((a,b)=>{
//     return a-b
// })
// console.log(ans)

const showRoom =[
    {id : 1, name : "mustang", color : "red", price : 500},
    {id : 2, name : "Lambo", color : "Yellow", price : 5000},
    {id : 3, name : "Supra", color : "White", price : 5070},
    {id : 4, name : "polo GT", color : "Blue", price : 600},
    {id : 5, name : "Virtus", color : "Silver", price : 900},
    {id : 6, name : "City", color : "Black", price : 1500},

]

// showRoom.forEach((data,index)=>{
//     console.log(`tne no ${index} car is ${data.name}`)
// })

// const ans = showRoom.map((data)=>{
//     return data.price*2
// })
// console.log(ans)

// const ans = showRoom.reduce((accumulator,totalPrice)=>{
//     return accumulator + totalPrice.price
// },10)
// console.log(ans)

const ans = showRoom.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(ans)