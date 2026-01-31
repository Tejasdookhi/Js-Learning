//filter( ()=> condition);
const arr = [1, 2, 3, 4, 5];

const newarr = arr.filter((items) => items >= 3);
console.log(newarr);

//---------------------------------------------------------------------

const obj = [
  { name: "rahul", city: "Bhopal", age: 25 },
  { name: "amit", city: "Indore", age: 15 },
  { name: "sam", city: "Bhopal", age: 35 },
  { name: "paul", city: "Bhopal", age: 13 },
  { name: "jeet", city: "Delhi", age: 18 },
];
const newobj =  obj.filter((items)=> items.city === "Bhopal" )
console.log(newobj);//whose city is bhopal 

const canVote = obj.filter((items) => items.age >= 18)
console.log(canVote);//age 18 or greater than 18
