// const obj1 = {
//   name: "Ram",
//   age: 22,
//   email: "rohit@26",
//   "my hobby": "Gaming",
// };

// console.log(obj1.name);
// console.log(obj1["my hobby"]);

// for (let ele in obj1) {
//   console.log(ele);
// }

// for (let ele of Object.keys(obj1)) {
//   console.log(ele);
// }

// const mainObj = {};

// let key1 = "name";
// let key2 = "age";
// let val1 = "Ram";
// let val2 = 22;

// mainObj[key1] = val1;
// mainObj[key2] = val2;

// // console.log(mainObj);

// const { ...newObj } = mainObj;
// // console.log(newObj);

// const anotherObj = { ...mainObj, ...newObj };
// console.log(anotherObj);

// const mynewObj = { ..."a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z" };
// console.log(mynewObj);

const myArr = [
  { name: "Ram", age: 22, hobby: "Gaming" },
  { name: "Sham", age: 21, hobby: "Coding" },
  { name: "hari", age: 32, hobby: "kabaddi" },
  { name: "Om", age: 18, hobby: "Gaming" },
];

const [{ name, bobby }] = myArr;
console.log(name);
