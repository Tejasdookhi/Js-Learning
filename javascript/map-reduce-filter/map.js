//map()
const arr = [ 1 , 2 , 3 , 4 , 5];

const newarr =  arr.map((items)=>  items * 2  )
console.log(newarr);//2 4 6 8 10

const chainArr = arr.map((item)=> item * 10).map((item)=> item * 10).filter((item)=> item > 300)
console.log(chainArr);// 400 , 300
