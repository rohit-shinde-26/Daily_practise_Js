// iterable

let str = "Ram"
console.log(str[1])

const arr = ["Honda","TATA","BMW"]
console.log(arr[2])


let my = new Set(arr)
let length = 0;
for(let ele of my){
   length++
}
console.log(length)

const numbers = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(6)


if(numbers.has(1)){
    console.log("1 is present")

}
else{
    console.log("not here")
}


// let length = 0
// for(let number of numbers){
//     length++
// }

// console.log(length)