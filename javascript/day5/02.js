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
console.log(obj3);




