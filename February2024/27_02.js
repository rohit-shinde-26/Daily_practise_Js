console.log("Jay Shree Ram");
// var a = 22;
// var b = "45";
// console.log(a + b);

// let name = "ram";
// let age = 22;
// console.log(`my name is ${name} and age is ${age }`);
//  let str = "hello world";
//  console.log(str.indexOf("d"))
//  let lastIndex = str.length - 1;
//  console.log(str.charAt(lastIndex))

// console.log(null == undefined)
// console.log(null === undefined)
// console.log(typeof null)

// let i = 0;
// let total = 0;
// while(i < 10){
//     console.log(i);
//     total = total + i;
//     i++;
// }
// console.log(total)
// for(let i = 0;i<10;i++){
//     console.log(i)
// }
// const arr1 = ["val1","val2","val3","val4"]
//  arr1.push("val5")
// console.log(arr1)
// const[...arr2]=arr1;
// arr2.unshift("Starter")
// console.log(arr2)

// console.log(arr1 === arr2)
// for (let i = 0; i<arr2.length;i++){
//     console.log(arr2[i]);
// }
// for ( let val of arr2){
//     console.log(val)
// }
// for (let val in arr1){
//     console.log(arr1[val])
// }

// let [key1, ,key2,...otherkey] = arr2
// console.log(key2)
// let key = "college";
// const myobj= {
//     name : "ram",
//     age : 22,
//     City : "Sangamner",
// }
// console.log(myobj["name"])
// myobj[key] = "Sangamner College"
// console.log(myobj);

// let Kavasaki ={};
// let key1 = "Model";
// let key2 = "Colour";
// let key3 = "price";

// let val1 = "zx10r"
// let val2 = "black"
// let val3 = 1800000

// Kavasaki[key1] = val1;
// Kavasaki[key2] = val2;
// Kavasaki[key3] = val3;
// console.log(Kavasaki)
// let {Model,...other} = Kavasaki;
// console.log(Model)
// console.log(other);
// let bike = {
//     name : "Splendor",
//     colour : "black",
//     price : 100000,
// }

// for(let piece in bike){
//     console.log(bike[piece])
// }
// let showRoom = [
//     {id:1,name:"xuv700",price:2300000,},
//     {id:2,name:"Benz",price:25000000,},
//     {id:1,name:"verna",price:1400000,},

// ]
// console.log(showRoom);
// const[{name,price},] = showRoom


// let num = 6
// function isEven(){
//     console.log(num %2 == 0)
// }
// isEven()
function isEven(num){
    return num%2==0;
}
console.log(isEven(12))