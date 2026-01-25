const user = {
  username : "javascript",
  id:1234,
  pass:1234,

  welcome : function(){
    console.log(`${this.username} , welcome to website , you id is ${this.id}`);
    
console.log(this);
  }
  
}
user.welcome();

//----------------------------------------

//() => {};//arrow function syntax

const arrow = (num1 , num2) => {
    return num1 + num2;
};//can be store in a variable
console.log(arrow(50,50));//100



const arrow2 = (num1 , num2) =>  num1 + num2 //implicit return type oof function
console.log(arrow2(100 , 100))//200


