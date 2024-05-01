// callbacks

// function createUser(name,age,gender,is18,typegender){
//     // console.log(name)
//     if(age>=18){
//         is18(age)
//     }

   
// }
// function checkAge(age){
//     console.log(`age is ${age}`)
// }
// function theGenger(){
//     console.log("you are wrong")
// }
// createUser("Ram",21,"male",checkAge,theGenger);

// setTimeout

// const myFunc = setTimeout(()=>{
//     console.log("hello")
// },100)

// let num=0;
//     for(let i=0;i<100;i++){
//         console.log("00000000");
//     }


// setInterval

// const myFunc = setInterval(()=>{
//     console.log("hello")
// },100)


// const btn = document.querySelector("button");
// const body = document.body;

// const generator = setInterval(()=>{

//     const red = ~~(Math.random()*256);
//     const green = ~~(Math.random()*256);
//     const blue = ~~(Math.random()*256);

//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.backgroundColor=rgb;
// },1000)

// btn.addEventListener("click",()=>{
//     clearInterval(generator)
// })

// console.log(generator)



const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")



// setTimeout(()=>{
//     heading1.textContent="One"
//     heading1.style.color="red"
//     setTimeout(()=>{
//         heading2.textContent="two"
//         heading2.style.color="yellow"
//     },1000)
// },1000)

// pyramid of doom


function myFunc(element,text,color,time,onSuccess,onFail){
    setTimeout(()=>{
    if(element){
        element.textContent=text;
        element.style.color=color;
        if(onSuccess){
            onSuccess()
        }
    }else{
        if(onFail){
            onFail()
        }
    }
},time)
}

myFunc(heading1,"one","red",1000,()=>{
    myFunc(heading2,"two","green",1000,()=>{
        myFunc(heading3,"three","blue",1000,()=>{
            myFunc(heading4,"four","orange",1000,()=>{


            },()=>{console.log("Heading 4 not exist")})
        },()=>{console.log("Heading 3 not exist")})
    },()=>{console.log("Heading 2 not exist")})
},()=>{console.log("Heading 1 not exist")})