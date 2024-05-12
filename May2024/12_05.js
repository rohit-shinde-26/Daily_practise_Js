const myArr = [2, 3, 6, 5, 4, 7, 8, 9];

// myArr.forEach((ele) => {
//   console.log(ele * ele);
// });

// const ans = myArr.map((ele) => {
//   return ele < 5;
// });

// const ans = myArr.filter((ele) => {
//   return ele < 5;
// });

// const ans = myArr.reduce((accumulator, total) => {
//   return accumulator + total;
// });

// const ans = myArr.sort((a, b) => {
//   return b - a;
// });

// const ans = myArr.find((ele) => {
//   return ele < 5;
// });

// const ans = myArr.every((ele) => {
//   return ele < 5;
// });

// const ans = myArr.some((ele) => {
//   return ele < 5;
// });

// myArr.fill(1, 2, 5);

myArr.splice(1, 2, 5);
console.log(myArr);
