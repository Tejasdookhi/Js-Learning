const usermail = " ";//space as a stirng
//const usermail = "";//not space so its not true that prints else condition

if (usermail) {
  console.log("you have email");
} else {
  console.log("cant have email");
}

/*falsy value:
 false , 0 ,-0 , bigint 0n , "" , '' , null , undefine , NaN 

 truthy value :
 true , 1 , "0", "false" coz its in string same for 'false'this are truthy value , [] , {} , function(){} , 

*/


//nullish coalescing operator (??)  null undefined

let val1 = 5 ?? 10;
let val2 = null ?? 10;
let val3 = undefined ?? 10;
let val4 = null ?? undefined ?? 10 ?? 5;
console.log(val1);//5
console.log(val2);//10
console.log(val3);//10
console.log(val4);//10



//ternary operator (?) : condition ? true : false//

const study = "10hrs+"
study == "10hrs+" ? console.log("Study for 10+hrs") : console.log("Study for less than 10+hrs");//Study for 10+hrs

const notstudy = "9hrs+"
study == notstudy ? console.log("Study for 10+hrs") : console.log("Study for less than 10+hrs");//Study for less than 10+hrs



