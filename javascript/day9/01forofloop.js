//for of loop :-

let number = [1, 2, 3, 4, 5];
for (const nums of number) {
  console.log(nums); //12345
}

//------------------------------------------------------

let names = "java script";
for (const name of names) {
  console.log(name); //java script
}

//-------------------------------------------------------------

let arrOfStr = ["Js", "Java", "Python", "Php"];
for (const ars of arrOfStr) {
  console.log(ars); //Js  Java Python  Php
}

//----------------------------------------------------------

let obj = [{ name: "java", age: 80 }];

for (const objs of obj) {
  console.log(objs); //{ name: 'java', age: 80 }//but we want name: 'java', age: 80 it will print with map in next code this is not right way
}
