// for each

const myArr =[2,4,6,8,10]

// const myAns =(number,index)=>{
//     console.log(`no is ${number} and index is ${index}`)
// }

// for(let i=0;i<myArr.length;i++){
//     myAns(myArr[i],i)
// }

// myArr.forEach((num,index)=>{
//     console.log(num,index)
// })

for(let num of myArr){
    console.log(num)
}

const friends = [
    {name: "Ram", age:21},
    {name: "Abhi", age:20}
]

// friends.forEach((friend,age)=>{
//     console.log(friend.name)
// })
for(let friend of friends){
    console.log(friend.name)
}