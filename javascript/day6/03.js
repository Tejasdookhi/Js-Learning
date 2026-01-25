function closure(){
    const name = "javascript"

    function nested() {
        const website = "Youtube"
        console.log(name);//taking from parent function but parent cannot take from child is called closure in js 
          console.log(website);
        }
      nested();    
}
closure();




//--------------------------------------------------------------

function addone(num){
    return num + 1;
}
console.log(addone(5));//6


const addtwo = function(num2){
    return num2 + 2;
}
console.log(addtwo(5));//agar const k upr ye console karayege toh error dega lekin upr wale fun k upr console karaya toh print kr dega successfully.


