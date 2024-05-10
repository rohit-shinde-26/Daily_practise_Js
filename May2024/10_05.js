// Arrays

// const myArr = [2, 6, 5, 4, 7, 8];

// const [...newArr] = myArr;

// console.log(newArr === myArr);

// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
//   total = total + myArr[i];
// }

// console.log(total);

// let i = 0;
// while (i < myArr.length) {
//   console.log(i);
//   i++;
// }

// for (let arr of myArr) {
//   console.log(arr);
// }

// for (let arr in myArr) {
//   console.log(myArr[arr]);
// }

// const theArr = ["Ram", "Sham", "Hari", "Om"];
// const [data1, data2, ...otherData] = theArr;

// console.log(otherData);

// Functions
// function myFunc(num1, num2) {
//   console.log(num1 + num2);
// }
// myFunc(2, 6);

// const myFunc = function (no1, no2) {
//   console.log(no1 + no2);
// };
// myFunc(3, 9);

// const myFunc = (str) => str.toUpperCase();

// const ans = myFunc("ram");
// console.log(ans);

// myFunc(2, 6);

// function myFunc(num1, num2) {
//   console.log(num1 + num2);
// }

// console.log(typeof a);
// console.log(b);
// console.log(typeof c);

// var a = 56;
// let b = "Hello";
// const c = true;

// const myFunc = (a, b = 2) => {
//   //   if (typeof b === "undefined") {
//   //     b = 2;
//   //   }
//   console.log(a + b);
// };
// myFunc(6);

// const myFunc = (...nums) => {
//   let total = 0;
//   for (let num of nums) {
//     total = total + num;
//   }
//   console.log(total);
// };
// myFunc(6, 52, 6, 8, 6, 4, 65, 6, 5, 6);

// const myObj = {
//   name: "Ram",
//   age: 22,
// };

// // const myFunc = (obj) => {
// //   console.log(obj.name);
// // };

// const myFunc = ({ name, age }) => {
//   console.log(name);
// };
// myFunc(myObj);

function myFunc(name) {
  console.log("This is myFunc");
  console.log(`my name is ${name}`);
}

function myFunc1(callback) {
  console.log("This is myFunc1");
  callback("Rohit");
}

myFunc1(myFunc);
