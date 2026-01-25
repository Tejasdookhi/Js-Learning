function restfunc(...num1){
return num1
}
 console.log(restfunc(100 , 200 , 300))//[ 100, 200, 300 ] ... rest operator

 //----------------------------------------------------------------------------------


 const obj = {
    name:"javascript",
    id : 123,
    mail : "5454@5484.com"
 }

 function handleobj(anyobj){
    console.log(`my name is ${anyobj.name} my id is ${anyobj.id} my email is ${anyobj.mail}`);
   //my name is javascript my id is 123 my email is 5454@5484.com
 }
handleobj(obj);

//passing directly objects in this method

function handleobj(anyobj){
    console.log(`my name is ${anyobj.name} my id is ${anyobj.id} my email is ${anyobj.mail}`);
     //my name is java my id is 321 my email is jfkissjf
 }
handleobj({name : "java",
           id:321,
           mail:"jfkissjf"
});

//---------------------------------------------------------------------------------------


const arr = [100 , 200 , 300 , 400]

function handlearr(anyarr){
    return anyarr[1]
}
console.log(handlearr(arr));
