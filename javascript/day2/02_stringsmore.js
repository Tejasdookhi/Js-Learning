
/* substring( , ) and slice( , )*/

const str = "javascript";

console.log(str.substring(0 , 4));// output : java with index [0 1 2 3 ] 4 not included
console.log(str.slice(-8,4));// va

//----------------------------------------------------------------------------------------

//trim()

let spacestring = "    tejas  ";

console.log(spacestring)//     tejas  with spaces
console.log(spacestring.trim())//tejas it trim the unwanted spaces

//-----------------------------------------------------------------------------------------


//replace()

const myRepo = " I created a new repo on git";

console.log(myRepo.replace(`git` , `github`));// i created a new repo on github

//includes()
console.log(myRepo.includes(`git`));// true if not present in it then false


//----------------------------------------------------------------------------------


//split()

const mygithub = "name-class-school"
console.log(mygithub.split('-'));//[ 'name', 'class', 'school' ] split in form of array







