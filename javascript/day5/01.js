let obj = {
    myName : "Javascript",
    age : 18,
    email : "script@gmail.com",
    isLoggedin : false,
};
console.log(obj)
console.log(obj.email);//script@gmail.com
console.log(obj["email"]);// second way to access

obj.email = "qwer@emailcom";

console.log(obj.email);//
//Object.freeze(obj);//iske baad kuch b assign kro change nhi hoga

obj.email = "qwer123@emailcom";
console.log(obj.email);//qwer@emailcom

obj.greet = function(){
    console.log(`Hello js my name is ${this.myName}` );
}
console.log(obj.greet());









