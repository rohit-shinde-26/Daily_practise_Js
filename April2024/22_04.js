const allBtn = document.querySelectorAll(".main button")
// console.log(allBtn)


// for(let i=0;i<allBtn.length;i++){
//     allBtn[i].addEventListener("click",()=>{
//         console.log(this)
//     })
// }

// for(let btn of allBtn){
//     btn.addEventListener("click",()=>{
//         console.log(this)
//     })
// }


// allBtn.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         console.log(this)
//     })
// })


// event object

// for(let button of allBtn){
//     button.addEventListener("click",(e)=>{
//         e.target.style.color="red"
//     })
// }

allBtn.forEach((button)=>{
   button.addEventListener("click",()=>{
    let num = 0;
    for(let i=0;i<1000000000;i++){
        num+=i;
    }
    console.log(button.textContent,num)
   })
})


// allBtn.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         e.target.style.color="yellow"
//     })
// })


// const btn = document.querySelector(" button")
// const currentColor=document.querySelector(".currentColor")
// const body = document.body;

// function generateRandom(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     const randomColor= `rgb(${red},${green},${blue})`
//     return randomColor;
// }

// btn.addEventListener("click",()=>{
//     const randomColor=generateRandom();
//     body.style.backgroundColor=randomColor;
//     console.log(randomColor)
//     currentColor.textContent=randomColor
// })



const grandParent = document.querySelector(".gp")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")


grandParent.addEventListener("click",()=>{
    console.log("This is grandparent")
})
parent.addEventListener("click",()=>{
    console.log("This is parent")
})
child.addEventListener("click",()=>{
    console.log("This is child")
})

// capture
grandParent.addEventListener("click",()=>{
    console.log("This is grandparent")
},true)
parent.addEventListener("click",()=>{
    console.log("This is parent")
},true)
child.addEventListener("click",()=>{
    console.log("This is child")
},true)

// delegation
grandParent.addEventListener("click", (e) => {
  console.log(e.target);
});