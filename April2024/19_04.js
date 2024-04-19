
// const myHead=document.getElementById("firstHead");
// console.log(myHead.textContent)
// myHead.style.color="red"



// const myHead=document.querySelector("#firstHead");
// console.log(myHead.textContent)
// myHead.style.color="red"


// const myHead=document.querySelector("a");
// // console.log(myHead.getAttribute("href"))
// console.log(myHead.setAttribute("href","http://localhost:8080"))


// console.log(myHead.getAttribute("href"))


// loops
// let favList = document.getElementsByTagName("a")
// console.log(favList)


// for(let i=0;i<favList.length;i++){
//     const singleList = favList[i];

//     singleList.style.color="red"
// }


// for(let singleList of favList){
//     singleList.style.color="red"
// }

// favList=Array.from(favList)

// favList.forEach((singleList)=>{
//     singleList.style.color="red"
// })


// let navItems = document.querySelectorAll(".myList")
// // console.log(navItems)

// navItems=Array.from(navItems)

// // for(let i=0;i<navItems.length;i++){
// //     const singleItems = navItems[i];
// //     singleItems.style.color="red"
// // }

// for(let navItem of navItems){
//     navItem.style.color="red";
// }



// const navItems = document.querySelectorAll(".myList"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach +
// for(let i=0; i< navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);


let navItems = document.querySelectorAll(".details");
navItems.innerHtml+="<h2>This is another heading</h2>"
console.log(navItems)