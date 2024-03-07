// const myRest = (a ,b,...c) => {
//     console.log(`value of a is ${a}`)
//     console.log(`value of b is ${b}`)
//     console.log(`value of c is ${c}`)

// }
// myRest(2,6,4,5,2);

const addAll = (...nums) => {
    let total = 0
    for(let num of nums){
        total = total + num;
    }
    return total
}
let ans = addAll(1,2,3,4,5,6)
console.log(ans)