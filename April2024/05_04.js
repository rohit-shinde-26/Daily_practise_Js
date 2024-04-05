// const info={
//     name : "ram",
//     age : 22,
//     about : function(){
//         console.log(this.name,this.age)
//     }
// }

// info.about()



// call

// const info={
//     name : "ram",
//     age : 22,
//     about : function(val1,val2){
//         console.log(`i am ${this.name} ${this.age} year old i love to ${val1} & ${val2}`)
//     }
// }

// info.about.call(info,"gaming","coding")

//  function about(val1,val2){
//     console.log(`i am ${this.name} ${this.age} year old i love to ${val1} & ${val2}`)
// }


// const info={
//     name : "ram",
//     age : 22,
//     about : about
// }

// about.call(info,"gaming","coding")

// apply

// function about(val1,val2){
//     console.log(`i am ${this.name} ${this.age} year old i love to ${val1} & ${val2}`)
// }


// const info={
//     name : "ram",
//     age : 22,
//     about : about
// }

// about.apply(info,["gaming","coding"])


// bind 
// function myFunc(val1,val2){
//     console.log( `i am ${this.name} ${this.age} year old i love to ${val1} & ${val2}`)
// }


// const info={
//     name : "ram",
//     age : 22,
//     about : myFunc
// }

// const info2={
//     name : "abhi",
//     age : 22,
//     about : myFunc
// }


// const ans = myFunc.bind(info2,"gaming","coding")
// ans()

const obj={
    is18 : function(){
        return this.age>=18
    }
}

function myInfo(name,age,email){
    const details={}
    details.name=name;
    details.age=age;
    details.email=email;
    details.is18=obj.is18;

    return details
}

const user = myInfo("rohit",21,"rohit#google.com")
console.log(user.is18())