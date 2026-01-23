let arr = [1, 2, 3, 4];
console.log(arr.includes(5));//false : arr.includes ask that element 5 contain in obj or not


console.log(arr.indexOf(2));//1
const newARR = arr.join();
console.log(newARR);//converted to string but still numbers


//slice and splice
//slice
let myArr = [1 , 2 , 3 , 4 , 5]
 let newarr = myArr.slice(1,4)
console.log(newarr);//  2 , 3 , 4 4th index = 5 but not prints


//splice
let myArr2 = [1 , 2 , 3 , 4 , 5]
let newarr2 = myArr2.splice(1,4)
console.log(newarr2);//2,3,4,5 also 5th index which is 5




