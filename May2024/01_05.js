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


const btn = document.querySelector("button");
const body = document.body;

const generator = setInterval(()=>{

    const red = ~~(Math.random()*256);
    const green = ~~(Math.random()*256);
    const blue = ~~(Math.random()*256);

    const rgb = `rgb(${red},${green},${blue})`
    body.style.backgroundColor=rgb;
},1000)

btn.addEventListener("click",()=>{
    clearInterval(generator)
})

console.log(generator)