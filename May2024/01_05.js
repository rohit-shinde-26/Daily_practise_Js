// callbacks

function createUser(name,age,gender,is18,typegender){
    // console.log(name)
    if(age>=18){
        is18(age)
    }

   
}
function checkAge(age){
    console.log(`age is ${age}`)
}
function theGenger(){
    console.log("you are wrong")
}
createUser("Ram",21,"male",checkAge,theGenger);