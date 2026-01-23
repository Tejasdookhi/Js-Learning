let arr1 = ["one", "two", "three"];
let arr2 = ["four", "five", "six"];

//(...arr1) this three dots access all elements of arr1 called spread operators

let newarr = [...arr1 , ...arr2];
console.log(newarr);//[ 'one', 'two', 'three', 'four', 'five', 'six' ]




let arrinarr = [1,2,3,[4,5,6,[7],8,9,10]]
console.log(arrinarr.flat(Infinity));//[1,2,3,4,5,6,7,8,9,10


let myName = "Tejas";
console.log(Array.isArray(myName));//false

console.log(Array.from(myName));//[ 'T', 'e', 'j', 'a', 's' ]



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3 ));//[ 100, 200, 300 ]


