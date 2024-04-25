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


const myBtn = document.querySelector("button");
const body = document.body;

function generateRandom(){

    const red = ~~(Math.random() * 256)
    const green = ~~(Math.random() * 256)
    const blue = ~~(Math.random() * 256)

    const rgb = `rgb(${red},${green},${blue})`
    return rgb
}

myBtn.addEventListener("click",()=>{
    const rgb = generateRandom();
    body.style.background=rgb
    
})