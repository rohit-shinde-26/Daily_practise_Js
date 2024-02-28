// function 
// ckeck every element is an array if target element is matched then print number else print error 
const myArr = [12,55,65,89,42,23,45]
function results(myArr,target){
    for(let i = 0;i < myArr.length;i++){
        if(myArr[i]===target){
            return i
        }
    }
    return "hello" 

}
console.log(results(myArr,45))