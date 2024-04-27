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

function myCarPromise(){
    const tools = ["Spoiler","Nos","Exhaust","Color"]
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(tools.includes("Spoiler") && tools.includes("Exhaust")){
            resolve({car : "Supra"})
        }
        else{
            reject(error)
        }
    },2000)
})
}


myCarPromise().then((car)=>{
    console.log("This is supra",car)
}).catch((error)=>{
    console.log("This is not supra")
})