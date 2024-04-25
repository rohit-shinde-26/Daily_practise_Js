// const allButton = document.querySelectorAll(".allBtn button")

// allBtn.addEventListener("click",(e)=>{
//     console.log(e)
//     // console.log(this)
// })

// for(let i=0;i<allButton.length;i++){
//     allButton[i].addEventListener("click",()=>{
//         console.log("Event clicked")
//     })
// }


// for(let btn of allButton){
//     btn.addEventListener("click",function(){
//         console.log("hello")
//     })
// }

// allButton.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         console.log(btn.textContent)
//     })
// })

// for(let btn of allButton){
    
// btn.addEventListener("click",(e)=>{
//     console.log(e.currentTarget)
// })
// }




// allButton.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         let num = 0;
//     for(let i=0;i<1000000000;i++){
//         num+=i;
//     }
//     console.log(btn.textContent)
//     })
// })


// const myBtn = document.querySelector("button");
// const body = document.body;

// function generateRandom(){

//     const red = ~~(Math.random() * 256)
//     const green = ~~(Math.random() * 256)
//     const blue = ~~(Math.random() * 256)

//     const rgb = `rgb(${red},${green},${blue})`
//     return rgb
// }

// myBtn.addEventListener("click",()=>{
//     const rgb = generateRandom();
//     body.style.background=rgb
    
// })


// console.log("script started")


// setTimeout(()=>{
//     console.log("one")
//     setTimeout(()=>{
//         console.log("two")
//         setTimeout(()=>{
//             console.log("three")
//             setTimeout(()=>{
//                 console.log("four")
//                 setTimeout(()=>{
//                     console.log("five")
//                 },2000)
//             },1000)
//         },3000)
//     },1000)
// },1000)

// function ex(no1,no2,add){
//     if(typeof no1 === "number" && typeof no2 === "number"){
//         add(no1,no2)
//     }
//     else{
//         console.log("error")
//     }
// }
// function addNo(no1,no2){
//     console.log(no1+no2)
// }

// ex(2,1,addNo)
// console.log("script end")


const myBtn = document.querySelector("button");
const body = document.body;


const generate = setInterval(()=>{
    const red = ~~(Math.random()*256);
    const green = ~~(Math.random()*256);
    const blue = ~~(Math.random()*256);

    const rgb = `rgb(${red},${green},${blue})`
    console.log(rgb)
    body.style.background = rgb;
},1000)

myBtn.addEventListener("click",()=>{
    clearInterval(generate)
})