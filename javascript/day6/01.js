function myfunction(){}//syntax of normal function

//---------------------------------------------------------------------

function myfunction(){
    console.log("javascript");
    
}
myfunction();//javascript

//-----------------------------------------------------------------------

function withPara(para1 , para2){
    console.log("xyz");
    
    return para1 + para2
    console.log("xyz")//after return function will not execute any code
}
const ans = withPara(10 , 10)
console.log(ans);//20

//-----------------------------------------------------------------------

function isloggedin(username){
        return `${username} is logged in`
     }
console.log(isloggedin("javascript"));// javascript is logged in

//-----------------------------------------------------------------------

function isloggedin(username ){
    if(!username){
        return "pls define username"
        return
    }
        return `${username} is logged in`
     }
console.log(isloggedin());// pls define username vale will be undefined at username is not declare..





