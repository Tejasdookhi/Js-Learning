let str = "javascript";

//all functions are based on string are as a prototype

//examples 

console.log(str.toUpperCase());//JAVASCRIPT
console.log(str.indexOf(`a`));//at which index char is 


console.log(str.at(5));// c at the index of 5 
console.log(str.charAt(5));// same as at prints c at index character at 

/* so the difference between chatAt() and At() is --
 charAt() old method if put negative index gives empty strings
 at() new at neagtive - started from reverse char
*/

console.log(str.charAt(-1));// "" empty
console.log(str.at(-1));// prints t coz at last
console.log(str.at(-2));// p

console.log(str.indexOf(`a`)) // at which index char is there are two chat but gives only first one of index



