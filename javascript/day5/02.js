//const tinderuser = new Object();//{}

const tinderuser = {}
 
tinderuser.id = 12345
tinderuser.email = "5545@gmail.com"
tinderuser.name = "javascript"

//console.log(tinderuser);

const regulauser = {
    emial: "gfsdf",
    fullname : {
        username : {
            first : "java",
            last : "script",
        }
    }
}
console.log(regulauser.fullname.username.first);


const obj3 = {...regulauser, ...tinderuser}
console.log(obj3);//...spread operator



//destructuring object
const destructobj = {
    name : "tejas",
    id : 123,
}

const {name :myname , id :  myid , age:myage = 18} = destructobj//also we can rename them
console.log(myname,myid,myage);//tejas 123 18





