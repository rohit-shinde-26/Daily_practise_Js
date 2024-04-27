// const tools = ["Spoiler","Nos","Exhaust","Color"]

// const myCarPromise = new Promise((resolve,reject)=>{
//     if(tools.includes("Spoiler") && tools.includes("Exhaust")){
//         resolve({car : "Supra"})
//     }
//     else{
//         reject(error)
//     }
// })

// myCarPromise.then((car)=>{
//     console.log("This is supra",car)
// }).catch((error)=>{
//     console.log("This is not supra")
// })

// function return promise 

// function myCarPromise(){
//     const tools = ["Spoiler","Nos","Exhaust","Color"]
//     return new Promise((resolve,reject)=>{
//     if(tools.includes("Spoiler") && tools.includes("Exhaust")){
//         resolve({car : "Supra"})
//     }
//     else{
//         reject(error)
//     }
// })
// }


// myCarPromise().then((car)=>{
//     console.log("This is supra",car)
// }).catch((error)=>{
//     console.log("This is not supra")
// })

// setTimeout in promise 

// function myCarPromise(){
//     const tools = ["Spoiler","Nos","Exhaust","Color"]
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(tools.includes("Spoiler") && tools.includes("Exhaust")){
//             resolve({car : "Supra"})
//         }
//         else{
//             reject(error)
//         }
//     },2000)
// })
// }


// myCarPromise().then((car)=>{
//     console.log("This is supra",car)
// }).catch((error)=>{
//     console.log("This is not supra")
// })





// function myCarPromise(){ 
//     return new Promise((resolve,reject)=>{
//   resolve("HTML")
// })

// }

// myCarPromise()
// .then((value)=>{
//     console.log(value);
//     value += "Css";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
//     value += "Javascript";
//     return value;
// })
// .then(value=>{
//     console.log(value);
// })




// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");


// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//               element.textContent = text;
//               element.style.color = color;
//               resolve();
//             }else{
//               reject("element not found");
//             }
//           },time)
//     })  
//   }

// changeText(heading1, "one", "red", 1000)
//   .then(()=>changeText(heading2, "two", "purple", 1000))
//   .then(()=>changeText(heading3, "three", "green", 1000))
//   .then(()=>changeText(heading4, "four", "orange", 1000))
//   .then(()=>changeText(heading5, "four", "orange", 1000))
//   .then(()=>changeText(heading6, "four", "skyblue", 1000))
//   .then(()=>changeText(heading7, "four", "orange", 1000))
//   .then(()=>changeText(heading8, "four", "orange", 1000))
//   .then(()=>changeText(heading9, "four", "orange", 1000))
//   .then(()=>changeText(heading10, "four", "orange", 1000))
//   .catch((error)=>{
//       alert(error);
//   })



function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("foo");
  })
}

myPromise()
  .then((value)=>{
    console.log(value);
    value += "bar";
    return value
  })
  .then((value) =>{
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value=>{
    console.log(value);
  })