const tools = ["Spoiler","Nos","Exhaust","Color"]

const myCarPromise = new Promise((resolve,reject)=>{
    if(tools.includes("Spoiler") && tools.includes("Exhaust")){
        resolve("Here is my car")
    }
    else{
        reject("This is not my car")
    }
})

myCarPromise.then(()=>{
    console.log("This is supra")
}).catch((error)=>{
    console.log("This is not supra")
})