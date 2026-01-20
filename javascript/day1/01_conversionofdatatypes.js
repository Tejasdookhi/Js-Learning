let name = "javascript";

let newName = Number(name);

console.log(typeof (newName));// string converted to number type
console.log(newName);//but its NaN = not a number ; 

//

let value = 10;

let newValue = String(value);

console.log(typeof (newValue));// becomes string using String
console.log(newValue);//10

//

let isLoggedIn = 1;

let logged = Boolean(isLoggedIn);
console.log(logged);//true

/*same if,
 isloggedin = 0 , "" 
that it gives output false

and , 
isloggedin = 1 ,"any string"
that gives output true
*/



