function findTarget(arr1,target){
    for(let i=0;i<arr1.length;i++){
    if(arr1[i] === target){
        return i
    }
}
    return "hello"
}
const arr1 = [23,56,78,45,15];

console.log(findTarget(arr1,15))